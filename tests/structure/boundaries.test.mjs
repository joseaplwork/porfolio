import { execFileSync } from 'node:child_process';
import { existsSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const CURRENT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(CURRENT_DIR, '../..');

test('boundary script passes', () => {
  execFileSync(process.execPath, [path.join(ROOT, 'scripts/ai/check-boundaries.mjs')], {
    cwd: ROOT,
    stdio: 'pipe',
  });
});

test('boundary script blocks relative cross-feature deep imports', () => {
  const fixturePath = path.join(ROOT, 'src/app/__boundary-fixture__.ts');

  try {
    writeFileSync(
      fixturePath,
      "import badImport from '../features/feature-flags/server/feature-flags.service';\n\nexport default badImport;\n",
      'utf8',
    );

    assert.throws(
      () => {
        execFileSync(process.execPath, [path.join(ROOT, 'scripts/ai/check-boundaries.mjs')], {
          cwd: ROOT,
          stdio: 'pipe',
        });
      },
      /illegal relative deep import/,
    );
  } finally {
    if (existsSync(fixturePath)) {
      rmSync(fixturePath);
    }
  }
});
