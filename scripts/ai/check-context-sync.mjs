#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const FEATURES_DIR = path.join(ROOT, 'src/features');
const CONTEXT_INDEX_FILE = path.join(ROOT, 'docs/ai/context-index.generated.md');
const REQUIRED_README_SECTIONS = [
  '## Purpose',
  '## Public API',
  '## Data Contracts',
  '## Dependencies',
  '## Invariants',
  '## Change Checklist',
];

const violations = [];

function listDirectories(dirPath) {
  return readdirSync(dirPath)
    .filter((entry) => statSync(path.join(dirPath, entry)).isDirectory())
    .sort((a, b) => a.localeCompare(b));
}

function checkFeatureReadme(featureName) {
  const featureDir = path.join(FEATURES_DIR, featureName);
  const readmePath = path.join(featureDir, 'README.md');
  const indexPath = path.join(featureDir, 'index.ts');
  const contractsPath = path.join(featureDir, 'contracts.ts');

  for (const [label, filePath] of [
    ['README', readmePath],
    ['index.ts', indexPath],
    ['contracts.ts', contractsPath],
  ]) {
    if (!existsSync(filePath)) {
      violations.push(
        `${path.relative(ROOT, featureDir)}: missing required ${label} file.`,
      );
    }
  }

  if (!existsSync(readmePath)) {
    return;
  }

  const readme = readFileSync(readmePath, 'utf8');

  for (const section of REQUIRED_README_SECTIONS) {
    if (!readme.includes(section)) {
      violations.push(
        `${path.relative(ROOT, readmePath)}: missing section '${section}'.`,
      );
    }
  }
}

function checkGeneratedContextSync() {
  if (!existsSync(CONTEXT_INDEX_FILE)) {
    violations.push(
      `${path.relative(ROOT, CONTEXT_INDEX_FILE)} does not exist. Run npm run context:update.`,
    );
    return;
  }

  const generatedOutput = execFileSync(
    process.execPath,
    [path.join(ROOT, 'scripts/ai/generate-context-index.mjs'), '--stdout'],
    { encoding: 'utf8' },
  );
  const currentOutput = readFileSync(CONTEXT_INDEX_FILE, 'utf8');

  if (generatedOutput.trimEnd() !== currentOutput.trimEnd()) {
    violations.push(
      `${path.relative(ROOT, CONTEXT_INDEX_FILE)} is out of date. Run npm run context:update.`,
    );
  }
}

function main() {
  const featureNames = listDirectories(FEATURES_DIR);

  for (const featureName of featureNames) {
    checkFeatureReadme(featureName);
  }

  checkGeneratedContextSync();

  if (violations.length > 0) {
    console.error('Context checks failed:\n');
    for (const violation of violations) {
      console.error(`- ${violation}`);
    }
    process.exit(1);
  }

  console.log(`Context checks passed for ${featureNames.length} features.`);
}

main();
