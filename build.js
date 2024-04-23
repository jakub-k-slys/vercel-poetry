#!/usr/bin/env node
import { remove } from 'fs-extra';
import { execa } from 'execa';
import { join } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const outDir = join(__dirname, 'dist');

  // Start fresh
  await remove(outDir);

  await execa(
    'ncc',
    [
      'build',
      join(__dirname, 'src/index.ts'),
      '-e',
      '@vercel/build-utils',
      '-o',
      outDir,
    ],
    { stdio: 'inherit' }
  );
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
