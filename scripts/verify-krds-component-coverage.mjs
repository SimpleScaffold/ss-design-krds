#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const args = { target: path.join(root, 'experiment/sample-page/index.html'), componentRoot: path.join(root, 'assets/krds/html/code') };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--target' && argv[i + 1]) args.target = path.resolve(process.cwd(), argv[++i]);
    if (argv[i] === '--component-root' && argv[i + 1]) args.componentRoot = path.resolve(process.cwd(), argv[++i]);
  }
  return args;
}

const { target, componentRoot } = parseArgs(process.argv.slice(2));
const files = (await fs.readdir(componentRoot))
  .filter((file) => file.endsWith('.html'))
  .sort();
const html = await fs.readFile(target, 'utf8');

const missing = [];
for (const file of files) {
  const component = file.replace(/\.html$/, '');
  const reference = `assets/krds/html/code/${file}`;
  if (!html.includes(`data-krds-component="${component}"`) || !html.includes(`data-krds-reference="${reference}"`)) {
    missing.push({ component, reference });
  }
}

const result = {
  ok: missing.length === 0,
  target,
  totalReferenceComponents: files.length,
  coveredComponents: files.length - missing.length,
  missing
};
console.log(JSON.stringify(result, null, 2));
process.exit(result.ok ? 0 : 1);
