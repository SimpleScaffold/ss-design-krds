#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const componentRoot = path.join(root, 'assets/krds/html/code');
const taxonomyPath = path.join(root, 'specs/components/_taxonomy.json');
const outDir = path.join(root, 'packages/krds-tailwind/src/components');
const distDir = path.join(root, 'packages/krds-tailwind/dist/components');

const taxonomy = JSON.parse(await fs.readFile(taxonomyPath, 'utf8'));

const BASE = 'font-krds text-krds-text';

const SELECTOR_TW = {
  'krds-btn': `inline-flex items-center justify-center ${BASE} rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border`,
  'krds-input': `w-full ${BASE} border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface`,
  'krds-badge': `inline-flex items-center ${BASE} rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1`,
  'krds-table-wrap': 'w-full overflow-x-auto font-krds',
  'krds-table': `w-full ${BASE} border-collapse`,
  'tbl': `w-full ${BASE}`,
  'krds-link': `${BASE} text-krds-primary underline underline-offset-2`,
  'krds-header': `font-krds text-krds-text bg-krds-surface border-b border-krds-border`,
  'krds-footer': `font-krds text-krds-text-secondary bg-krds-surface-subtle p-krds-6`,
  'krds-form': `flex flex-col gap-krds-4 font-krds max-w-2xl`,
  'krds-check': `inline-flex items-center gap-krds-2 font-krds`,
  'krds-radio': `inline-flex items-center gap-krds-2 font-krds`,
  'krds-switch': `inline-flex items-center gap-krds-2 font-krds`,
  'krds-tab': `font-krds flex gap-krds-2`,
  'krds-accordion': `font-krds border border-krds-border rounded-krds-md divide-y divide-krds-border`,
  'krds-modal': `font-krds`,
  'krds-pagination': `flex gap-krds-2 font-krds items-center`,
  'krds-spinner': `inline-block font-krds`,
  'krds-tooltip': `font-krds text-krds-secondary text-krds-body-sm`,
  'krds-tag': `inline-flex items-center ${BASE} rounded-krds-sm bg-krds-surface-subtle px-krds-4 py-krds-1`,
  'krds-breadcrumb': `font-krds text-krds-secondary text-krds-body-sm flex flex-wrap gap-krds-2`,
  'krds-step': `font-krds flex gap-krds-4`,
  'krds-help': `font-krds text-krds-secondary p-krds-4 bg-krds-surface-subtle rounded-krds-md`,
  'krds-alert': `font-krds p-krds-4 rounded-krds-md border border-krds-border`,
  'krds-side-nav': `font-krds flex flex-col gap-krds-2`,
  'krds-calendar': `font-krds`,
  'krds-carousel': `font-krds relative`,
  'krds-coach': `font-krds`,
  'krds-disclosure': `font-krds border-b border-krds-border`,
  'krds-skip': `font-krds`,
  'krds-masthead': `font-krds bg-krds-surface-subtle text-krds-secondary text-krds-body-sm p-krds-4`,
  'krds-identifier': `font-krds text-krds-primary font-bold tracking-widest text-krds-label-sm`,
  'krds-lang': `font-krds inline-flex gap-krds-2`,
  'krds-resize': `font-krds`,
  'krds-tts': `font-krds inline-flex gap-krds-2`,
  'krds-upload': `font-krds border border-dashed border-krds-border rounded-krds-md p-krds-6`,
  'krds-structured': `font-krds grid gap-krds-4`,
  'krds-text-list': `font-krds list-disc pl-krds-6 space-y-krds-2`,
  'krds-in-page': `font-krds sticky top-krds-4`,
  'krds-panel': `font-krds p-krds-6 bg-krds-surface-subtle rounded-krds-lg`,
};

const VARIANT_TW = {
  primary: 'bg-krds-primary text-white border-krds-primary hover:bg-krds-primary-hover',
  secondary: 'bg-krds-surface text-krds-primary border-krds-primary',
  tertiary: 'bg-krds-surface text-krds-text border-krds-border',
  danger: 'text-krds-danger border-krds-danger',
  success: 'text-krds-success',
  small: 'text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1',
  medium: 'text-krds-body-md',
  large: 'text-krds-body-lg',
  xsmall: 'text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1',
  text: 'border-0 bg-transparent',
  icon: 'w-11 p-0 justify-center',
};

function mergeClasses(existing, additions) {
  const set = new Set((existing || '').split(/\s+/).filter(Boolean));
  for (const token of additions.split(/\s+/).filter(Boolean)) {
    set.add(token);
  }
  return [...set].join(' ');
}

function enhanceClassAttr(classValue) {
  let result = classValue.trim();
  for (const [key, tw] of Object.entries(SELECTOR_TW)) {
    if (result.split(/\s+/).some((c) => c === key || c.startsWith(key))) {
      result = mergeClasses(result, tw);
    }
  }
  const tokens = result.split(/\s+/);
  for (const variant of Object.keys(VARIANT_TW)) {
    if (tokens.includes(variant)) {
      result = mergeClasses(result, VARIANT_TW[variant]);
    }
  }
  return result;
}

function enhanceHtml(html, componentName) {
  let out = html.replace(/class="([^"]*)"/g, (_, cls) => {
    return `class="${enhanceClassAttr(cls)}"`;
  });

  const meta = taxonomy.components[componentName];
  const category = meta?.category || 'content';
  const layoutTw = {
    identity: 'font-krds',
    navigation: 'font-krds',
    layout: 'font-krds max-w-7xl',
    action: '',
    selection: 'font-krds',
    feedback: 'font-krds',
    help: 'font-krds',
    input: 'font-krds w-full max-w-3xl',
    settings: 'font-krds inline-flex',
    content: 'font-krds w-full'
  }[category] || 'font-krds';

  const firstTag = out.match(/^[\s\S]*?<(\w+)([^>]*)>/);
  if (firstTag && !firstTag[2].includes('data-krds-component')) {
    const tag = firstTag[1];
    const attrs = firstTag[2];
    const newAttrs = attrs.includes('class="')
      ? attrs.replace(/class="([^"]*)"/, (_, c) => `class="${mergeClasses(c, layoutTw)}"`)
      : `${attrs} class="${layoutTw}"`;
    out = out.replace(`<${tag}${attrs}>`, `<${tag}${newAttrs} data-krds-component="${componentName}">`);
  } else if (firstTag && !firstTag[2].includes('data-krds-reference')) {
    out = out.replace(
      `data-krds-component="${componentName}"`,
      `data-krds-component="${componentName}" data-krds-reference="assets/krds/html/code/${componentName}.html"`
    );
  }

  return out;
}

function extractSnippet(html) {
  const trimmed = html.trim();
  const commentMatch = trimmed.match(/<!--\s*[\w\s]+\s*-->([\s\S]*?)<!--\s*\/\/[\w\s]+\s*-->/);
  if (commentMatch) return commentMatch[1].trim();
  const bodyMatch = trimmed.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) return bodyMatch[1].trim();
  return trimmed;
}

await fs.mkdir(outDir, { recursive: true });
await fs.mkdir(distDir, { recursive: true });

const files = (await fs.readdir(componentRoot))
  .filter((f) => f.endsWith('.html'))
  .sort();

for (const file of files) {
  const name = file.replace(/\.html$/, '');
  const raw = await fs.readFile(path.join(componentRoot, file), 'utf8');
  const snippet = extractSnippet(raw);
  const enhanced = enhanceHtml(snippet, name);
  const header = `<!-- Source: assets/krds/html/code/${file} -->\n<!-- @simplescaffold/krds-tailwind — official krds- classes + Tailwind utilities -->\n`;
  const content = header + enhanced + '\n';
  await fs.writeFile(path.join(outDir, `${name}.html`), content, 'utf8');
  await fs.writeFile(path.join(distDir, `${name}.html`), content, 'utf8');
}

console.log(JSON.stringify({ total: files.length, outDir: 'packages/krds-tailwind/src/components' }, null, 2));
