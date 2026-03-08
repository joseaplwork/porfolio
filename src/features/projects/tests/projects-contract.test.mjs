import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const CURRENT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(CURRENT_DIR, '../../../../');

function read(relativePath) {
  return readFileSync(path.join(ROOT, relativePath), 'utf8');
}

test('projects contracts expose the response shape', () => {
  const contracts = read('src/features/projects/contracts.ts');

  assert.match(contracts, /export interface ProjectsResponse/);
  assert.match(contracts, /export type \{ Project \}/);
});

test('projects fetcher stays in server boundary and validates payload', () => {
  const fetcher = read('src/features/projects/server/fetch-projects.ts');

  assert.match(fetcher, /import 'server-only';/);
  assert.match(fetcher, /isProjectsResponse/);
  assert.match(fetcher, /normalizeProjects/);
});
