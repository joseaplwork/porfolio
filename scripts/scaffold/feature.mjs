#!/usr/bin/env node

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const FEATURES_DIR = path.join(ROOT, 'src/features');
const rawName = process.argv[2];

if (!rawName) {
  console.error('Usage: node scripts/scaffold/feature.mjs <feature-name>');
  process.exit(1);
}

const featureName = rawName.trim().toLowerCase();
if (!/^[a-z0-9-]+$/.test(featureName)) {
  console.error('Feature name must contain only lowercase letters, numbers, and hyphens.');
  process.exit(1);
}

const featureDir = path.join(FEATURES_DIR, featureName);
if (existsSync(featureDir)) {
  console.error(`Feature '${featureName}' already exists.`);
  process.exit(1);
}

for (const dir of ['model', 'server', 'ui', 'tests']) {
  mkdirSync(path.join(featureDir, dir), { recursive: true });
}

writeFileSync(
  path.join(featureDir, 'index.ts'),
  "// Public feature exports.\n",
  'utf8',
);

writeFileSync(
  path.join(featureDir, 'contracts.ts'),
  "// Public contracts for this feature.\n",
  'utf8',
);

writeFileSync(
  path.join(featureDir, 'README.md'),
  `## Purpose\nDescribe the feature responsibility.\n\n## Public API\n- \\`index.ts\\`\n- \\`contracts.ts\\`\n\n## Data Contracts\nList payload and type guarantees.\n\n## Dependencies\nList key internal/external dependencies.\n\n## Invariants\nList rules that must remain true.\n\n## Change Checklist\n- Update public contracts if input/output changes.\n- Regenerate AI context index after exports change.\n- Add or update tests under \\`tests/\\`.\n`,
  'utf8',
);

console.log(`Scaffolded feature at ${path.relative(ROOT, featureDir)}`);
