#!/usr/bin/env node
const fs = require('fs-extra');
const execa = require('execa');
const path =  require('path');

async function main() {
  const outDir = path.join(__dirname, 'dist');

  // Start fresh
  await fs.remove(outDir);

  await execa(
    'ncc',
    [
      'build',
      path.join(__dirname, 'src/index.ts'),
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
