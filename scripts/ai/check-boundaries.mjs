#!/usr/bin/env node

import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'src');
const FEATURE_PREFIX = '@/features/';
const ALLOWED_PUBLIC_SUBPATHS = new Set(['', 'index', 'contracts']);
const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx']);
const violations = [];

function walkFiles(dirPath) {
  const entries = readdirSync(dirPath);
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...walkFiles(fullPath));
      continue;
    }

    const ext = path.extname(fullPath);
    if (SOURCE_EXTENSIONS.has(ext) && !fullPath.endsWith('.d.ts')) {
      files.push(fullPath);
    }
  }

  return files;
}

function detectFeatureName(filePath) {
  const normalizedPath = filePath.replaceAll(path.sep, '/');
  const match = normalizedPath.match(/\/src\/features\/([^/]+)\//);

  return match ? match[1] : null;
}

function listImports(content) {
  const imports = [];
  const fromRegex = /from\s+['"]([^'"]+)['"]/g;
  const dynamicImportRegex = /import\(\s*['"]([^'"]+)['"]\s*\)/g;

  for (const match of content.matchAll(fromRegex)) {
    imports.push(match[1]);
  }

  for (const match of content.matchAll(dynamicImportRegex)) {
    imports.push(match[1]);
  }

  return imports;
}

function checkServerOnlyBoundary(filePath, content) {
  if (!filePath.includes(`${path.sep}server${path.sep}`)) {
    return;
  }

  const hasServerOnlyImport =
    content.includes("import 'server-only';") ||
    content.includes('import "server-only";');

  if (!hasServerOnlyImport) {
    violations.push(
      `${path.relative(ROOT, filePath)}: server files must import 'server-only'.`,
    );
  }
}

function checkFeatureImportBoundary(filePath, importSpecifier) {
  if (!importSpecifier.startsWith(FEATURE_PREFIX)) {
    return;
  }

  const importerFeature = detectFeatureName(filePath);
  const relativeFeaturePath = importSpecifier.slice(FEATURE_PREFIX.length);
  const segments = relativeFeaturePath.split('/');
  const importedFeature = segments[0];
  const importedSubpath = segments.slice(1).join('/');

  if (!importedFeature) {
    return;
  }

  if (!ALLOWED_PUBLIC_SUBPATHS.has(importedSubpath)) {
    if (importerFeature !== importedFeature) {
      violations.push(
        `${path.relative(ROOT, filePath)}: illegal deep import '${importSpecifier}'. Use '@/features/${importedFeature}' or '@/features/${importedFeature}/contracts'.`,
      );
    }
  }
}

function main() {
  const files = walkFiles(SRC_DIR);

  for (const filePath of files) {
    const content = readFileSync(filePath, 'utf8');
    const imports = listImports(content);

    checkServerOnlyBoundary(filePath, content);

    for (const importSpecifier of imports) {
      checkFeatureImportBoundary(filePath, importSpecifier);
    }
  }

  if (violations.length > 0) {
    console.error('Boundary checks failed:\n');
    for (const violation of violations) {
      console.error(`- ${violation}`);
    }
    process.exit(1);
  }

  console.log(`Boundary checks passed for ${files.length} source files.`);
}

main();
