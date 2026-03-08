import { readFileSync } from 'node:fs';

export function readUtf8(path: string): string {
  return readFileSync(path, 'utf8');
}
