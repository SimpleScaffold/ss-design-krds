#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const componentsDir = path.join(root, 'packages/krds-tailwind/src/components');
const specsDir = path.join(root, 'specs/components');

const files = (await fs.readdir(componentsDir))
  .filter((f) => f.endsWith('.html'))
  .sort();

let updated = 0;

for (const file of files) {
  const name = file.replace(/\.html$/, '');
  const specPath = path.join(specsDir, `${name}.md`);
  const snippet = (await fs.readFile(path.join(componentsDir, file), 'utf8'))
    .replace(/^<!--[\s\S]*?-->\n/g, '')
    .trim();

  try {
    const spec = await fs.readFile(specPath, 'utf8');
    const tailwindBlock = `\`\`\`html\n<!-- @simplescaffold/krds-tailwind + official krds- classes -->\n${snippet}\n\`\`\``;
    const replaced = spec.replace(
      /## Tailwind\n\n[\s\S]*?(?=\n## )/,
      `## Tailwind\n\n${tailwindBlock}\n\n`
    );
    if (replaced !== spec) {
      await fs.writeFile(specPath, replaced, 'utf8');
      updated++;
    }
  } catch {
    console.warn(`Skip ${name}: no spec file`);
  }
}

console.log(JSON.stringify({ total: files.length, updated }, null, 2));
