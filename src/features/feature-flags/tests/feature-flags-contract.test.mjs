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

test('feature flag contracts define the canonical key list', () => {
  const contracts = read('src/features/feature-flags/contracts.ts');
  const model = read('src/features/feature-flags/model/feature-flags.ts');

  assert.match(model, /FEATURE_FLAGS\s*=\s*\['showProjectsLink'\]/);
  assert.match(contracts, /FeatureFlagName/);
  assert.match(contracts, /FeatureFlagSnapshot/);
});

test('feature flag service remains server-only and provider-backed', () => {
  const service = read('src/features/feature-flags/server/feature-flags.service.ts');

  assert.match(service, /import 'server-only';/);
  assert.match(service, /FeatureFlagProvider/);
  assert.match(service, /FEATURE_FLAGS_PROVIDER/);
  assert.match(service, /new FeatureFlag\(/);
});
