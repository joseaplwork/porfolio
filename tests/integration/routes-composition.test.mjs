import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const CURRENT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(CURRENT_DIR, '../..');

function read(relativePath) {
  return readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function assertNoDeepFeatureImport(content) {
  assert.doesNotMatch(
    content,
    /@\/features\/[^'"\n]+\/(?:model|server|ui|tests)\//,
  );
}

test('home route composes feature public APIs only', () => {
  const homeRoute = read('src/app/(site)/page.tsx');

  assert.match(homeRoute, /@\/features\/feature-flags/);
  assert.match(homeRoute, /@\/features\/profile/);
  assertNoDeepFeatureImport(homeRoute);
});

test('projects route composes feature public API only', () => {
  const projectsRoute = read('src/app/projects/page.tsx');

  assert.match(projectsRoute, /@\/features\/projects/);
  assertNoDeepFeatureImport(projectsRoute);
});
