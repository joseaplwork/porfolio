#!/usr/bin/env node

import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import http from 'node:http';
import process from 'node:process';

const NEXT_PORT = Number(process.env.SMOKE_NEXT_PORT || 3105);
const MOCK_PORT = Number(process.env.SMOKE_MOCK_PORT || 3399);
const HOST = '127.0.0.1';

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function waitForHttp(url, timeoutMs = 45000) {
  const started = Date.now();

  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Keep polling until timeout.
    }

    await wait(500);
  }

  throw new Error(`Timed out waiting for ${url}`);
}

function startMockProjectsServer() {
  const server = http.createServer((request, response) => {
    if (!request.url || request.url !== '/projects') {
      response.statusCode = 404;
      response.end('not found');
      return;
    }

    response.setHeader('Content-Type', 'application/json');
    response.end(
      JSON.stringify({
        projects: [
          {
            name: 'AI Structure Smoke Project',
            description: 'Fixture used by smoke tests.',
            sourceLink: 'https://github.com/example/repo',
            tags: ['nextjs', 'ai'],
          },
        ],
      }),
    );
  });

  return new Promise((resolve) => {
    server.listen(MOCK_PORT, HOST, () => resolve(server));
  });
}

async function run() {
  const mockServer = await startMockProjectsServer();

  const nextProcess = spawn(
    'npm',
    ['run', 'dev', '--', '--hostname', HOST, '--port', String(NEXT_PORT)],
    {
      env: {
        ...process.env,
        FEATURE_FLAGS_PROVIDER: 'static',
        FEATURE_FLAGS_STATIC_JSON: '{"showProjectsLink":true}',
        PROJECTS_SOURCE: `http://${HOST}:${MOCK_PORT}/projects`,
        CV_LINK: 'https://example.com/cv.pdf',
      },
      stdio: 'inherit',
    },
  );

  try {
    await waitForHttp(`http://${HOST}:${NEXT_PORT}`);
    await waitForHttp(`http://${HOST}:${NEXT_PORT}/projects`);

    const homeHtml = await (
      await fetch(`http://${HOST}:${NEXT_PORT}`)
    ).text();
    const projectsHtml = await (
      await fetch(`http://${HOST}:${NEXT_PORT}/projects`)
    ).text();

    assert.match(homeHtml, /Download CV/);
    assert.match(homeHtml, /See projects/);
    assert.match(projectsHtml, /Projects/);
    assert.match(projectsHtml, /AI Structure Smoke Project/);
  } finally {
    nextProcess.kill('SIGTERM');
    mockServer.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
