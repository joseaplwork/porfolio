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

test('profile introduction composes links and social UI', () => {
  const introduction = read('src/features/profile/ui/personal-introduction.tsx');

  assert.match(introduction, /import PersonalLinks from '.\/personal-links';/);
  assert.match(introduction, /import SocialLinks from '.\/social-links';/);
});

test('profile links expose projects CTA and CV link', () => {
  const links = read('src/features/profile/ui/personal-links.tsx');

  assert.match(links, /See projects/);
  assert.match(links, /Download CV/);
});
