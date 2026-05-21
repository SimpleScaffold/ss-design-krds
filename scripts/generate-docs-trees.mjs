#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const taxonomyPath = path.join(root, 'specs/components/_taxonomy.json');
const taxonomy = JSON.parse(await fs.readFile(taxonomyPath, 'utf8'));

const titleize = (name) =>
  name.replace(/_/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());

const categoryOrder = [
  'identity', 'navigation', 'layout', 'action', 'selection',
  'feedback', 'help', 'input', 'settings', 'content'
];

function groupByCategory() {
  const groups = {};
  for (const cat of categoryOrder) {
    groups[cat] = [];
  }
  for (const [name, meta] of Object.entries(taxonomy.components)) {
    const cat = meta.category;
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(name);
  }
  for (const cat of Object.keys(groups)) {
    groups[cat].sort();
  }
  return groups;
}

function buildCategoryTreeLines(groups) {
  const lines = [`KRDS Components (${Object.keys(taxonomy.components).length})`, ''];
  for (const cat of categoryOrder) {
    const catMeta = taxonomy.categories[cat];
    const items = groups[cat] || [];
    if (items.length === 0) continue;
    lines.push(`${catMeta.en} (${catMeta.ko}) — ${items.length}개`);
    lines.push(`├── ${catMeta.description}`);
    for (let i = 0; i < items.length; i++) {
      const name = items[i];
      const prefix = i === items.length - 1 ? '└──' : '├──';
      lines.push(`${prefix} ${name}.md`);
    }
    lines.push('');
  }
  return lines;
}

function buildCategoriesMd(groups) {
  const lines = [
    '# KRDS Component Categories',
    '',
    '> 패밀리별 트리 인덱스. flat 목록은 [_index.md](./_index.md) 참조.',
    '',
    `Total: ${Object.keys(taxonomy.components).length} components in ${categoryOrder.length} families`,
    '',
    '## Category Tree',
    '',
    '```text',
    ...buildCategoryTreeLines(groups),
    '```',
    ''
  ];

  for (const cat of categoryOrder) {
    const catMeta = taxonomy.categories[cat];
    const items = groups[cat] || [];
    if (items.length === 0) continue;

    lines.push(`## ${catMeta.en} (${catMeta.ko})`);
    lines.push('');
    lines.push(catMeta.description);
    lines.push('');
    lines.push('| Component | Spec | Overview |');
    lines.push('|-----------|------|----------|');
    for (const name of items) {
      const meta = taxonomy.components[name];
      lines.push(`| ${titleize(name)} | [${name}.md](./${name}.md) | ${meta.overview.slice(0, 60)}... |`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

function buildComponentCategoryTreeMd(groups) {
  const lines = [
    '# KRDS Component Category Tree',
    '',
    '[KRDS 공식 컴ponent 분류](https://www.krds.go.kr/html/site/index.html) 기준 10패밀리입니다.',
    '',
    '## Full Tree',
    '',
    '```text',
    ...buildCategoryTreeLines(groups),
    '```',
    ''
  ];

  for (const cat of categoryOrder) {
    const catMeta = taxonomy.categories[cat];
    const items = groups[cat] || [];
    if (items.length === 0) continue;

    lines.push(`## ${catMeta.en} (${catMeta.ko})`);
    lines.push('');
    lines.push(`**용도**: ${catMeta.description}`);
    lines.push('');
    lines.push('**포함 컴포넌트**:');
    lines.push('');
    for (const name of items) {
      const meta = taxonomy.components[name];
      const variantNote = meta.variants?.length ? ` (variants: ${meta.variants.join(', ')})` : '';
      lines.push(`- [${name}](../specs/components/${name}.md) — ${meta.overview}${variantNote}`);
    }
    lines.push('');

    const roots = items.filter((n) => !taxonomy.components[n].parent);
    if (roots.length > 0) {
      lines.push('**컴포넌트 트리 (루트)**:');
      lines.push('');
      lines.push('```text');
      for (const rootName of roots.slice(0, 3)) {
        lines.push(buildVariantTree(rootName, '├──'));
      }
      if (roots.length > 3) lines.push('...');
      lines.push('```');
      lines.push('');
    }
  }

  lines.push('## Related');
  lines.push('');
  lines.push('- [specs/components/_categories.md](../specs/components/_categories.md)');
  lines.push('- [docs/reading-guide.md](./reading-guide.md)');
  lines.push('- [docs/page-structure-tree.md](./page-structure-tree.md)');
  lines.push('');

  return lines.join('\n');
}

function buildVariantTree(name, prefix = '') {
  const meta = taxonomy.components[name];
  const lines = [`${prefix} ${name}`];
  if (meta.variants?.length) {
    for (let i = 0; i < meta.variants.length; i++) {
      const v = meta.variants[i];
      const isLast = i === meta.variants.length - 1;
      lines.push(`${isLast ? '└──' : '├──'} ${v}`);
    }
  }
  return lines.join('\n');
}

const groups = groupByCategory();

await fs.mkdir(path.join(root, 'docs'), { recursive: true });
await fs.writeFile(
  path.join(root, 'specs/components/_categories.md'),
  buildCategoriesMd(groups),
  'utf8'
);
await fs.writeFile(
  path.join(root, 'docs/component-category-tree.md'),
  buildComponentCategoryTreeMd(groups),
  'utf8'
);

console.log(JSON.stringify({
  categories: categoryOrder.length,
  components: Object.keys(taxonomy.components).length,
  outputs: ['specs/components/_categories.md', 'docs/component-category-tree.md']
}, null, 2));
