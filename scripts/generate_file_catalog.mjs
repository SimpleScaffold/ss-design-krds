#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

async function walk(dir, base = dir) {
  const skip = new Set(['.git', 'node_modules']);
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (skip.has(e.name)) continue;
      files.push(...(await walk(full, base)));
    } else {
      files.push(path.relative(base, full));
    }
  }
  return files.sort();
}

const krdsFiles = await walk(path.join(root, 'assets/krds'));
const mdFiles = [];
for (const p of ['DESIGN.md', 'specs/tokens.md', 'specs/accessibility.md', 'specs/stacks.md']) {
  mdFiles.push(p);
}
const componentSpecs = await walk(path.join(root, 'specs/components'));
mdFiles.push(...componentSpecs.map((f) => `specs/components/${f}`));

await fs.mkdir(path.join(root, 'reports'), { recursive: true });

const krdsCatalog = [
  '# KRDS UIUX File Catalog',
  '',
  `Generated: ${new Date().toISOString()}`,
  '',
  `Total files: ${krdsFiles.length}`,
  '',
  ...krdsFiles.map((f) => `- \`assets/krds/${f}\``),
  ''
].join('\n');

const designCatalog = [
  '# Design MD File Catalog',
  '',
  `Generated: ${new Date().toISOString()}`,
  '',
  ...mdFiles.map((f) => `- \`${f}\``),
  ''
].join('\n');

await fs.writeFile(path.join(root, 'reports/krds-uiux-files.md'), krdsCatalog, 'utf8');
await fs.writeFile(path.join(root, 'reports/design-md-files.md'), designCatalog, 'utf8');

console.log(JSON.stringify({ krdsFiles: krdsFiles.length, mdFiles: mdFiles.length }, null, 2));
