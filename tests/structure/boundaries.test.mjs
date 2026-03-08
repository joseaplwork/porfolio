import { execFileSync } from 'node:child_process';
import path from 'node:path';
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
