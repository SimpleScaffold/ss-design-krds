#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const pkgDir = path.join(root, 'packages/krds-tailwind');
const distDir = path.join(pkgDir, 'dist');
const srcComponents = path.join(pkgDir, 'src/components');
const distComponents = path.join(distDir, 'components');
const templatesTheme = path.join(root, 'templates/tailwind-theme.css');

await fs.mkdir(distDir, { recursive: true });
await fs.mkdir(distComponents, { recursive: true });

const cli = path.join(root, 'node_modules/@tailwindcss/cli/dist/index.mjs');
const runTw = (input, output) => {
  execSync(`node "${cli}" -i "${input}" -o "${output}"`, {
    cwd: root,
    stdio: 'inherit',
    env: { ...process.env, NODE_PATH: path.join(root, 'node_modules') }
  });
};

runTw(
  path.join(pkgDir, 'src/index.css'),
  path.join(distDir, 'krds-tailwind.css')
);
runTw(
  path.join(pkgDir, 'src/theme-only.css'),
  path.join(distDir, 'theme.css')
);

try {
  const componentFiles = await fs.readdir(srcComponents);
  for (const file of componentFiles.filter((f) => f.endsWith('.html'))) {
    await fs.copyFile(
      path.join(srcComponents, file),
      path.join(distComponents, file)
    );
  }
} catch {
  console.warn('No src/components yet — run krds:generate:tailwind first');
}

const themeSrc = await fs.readFile(path.join(pkgDir, 'src/theme.css'), 'utf8');
await fs.writeFile(
  templatesTheme,
  `/* Auto-synced from packages/krds-tailwind/src/theme.css — do not edit by hand */\n${themeSrc}`,
  'utf8'
);

const sampleCss = path.join(root, 'experiment/sample-page/tailwind.css');
await fs.copyFile(path.join(distDir, 'krds-tailwind.css'), sampleCss);

console.log(JSON.stringify({
  dist: 'packages/krds-tailwind/dist',
  sample: 'experiment/sample-page/tailwind.css',
  templates: 'templates/tailwind-theme.css'
}, null, 2));
