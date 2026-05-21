#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const componentRoot = path.join(root, 'assets/krds/html/code');
const specsDir = path.join(root, 'specs/components');
const indexPath = path.join(root, 'specs/components/_index.md');
const taxonomyPath = path.join(root, 'specs/components/_taxonomy.json');

const taxonomy = JSON.parse(await fs.readFile(taxonomyPath, 'utf8'));

await fs.mkdir(specsDir, { recursive: true });

const files = (await fs.readdir(componentRoot))
  .filter((file) => file.endsWith('.html'))
  .sort();

const titleize = (name) =>
  name.replace(/_/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());

function buildComponentTree(name, meta) {
  const lines = [`${name} (기본)`];
  if (meta.parent) {
    return [`${meta.parent} (부모)`, `└── ${name}`].join('\n');
  }
  if (meta.variants?.length) {
    for (let i = 0; i < meta.variants.length; i++) {
      const v = meta.variants[i];
      const prefix = i === meta.variants.length - 1 ? '└──' : '├──';
      lines.push(`${prefix} ${v}`);
    }
  }
  return lines.join('\n');
}

function buildTailwindExample(name, meta) {
  const cls = name.startsWith('button') ? 'krds-btn primary' :
    name.includes('input') || name.includes('select') || name === 'textarea' ? 'krds-input' :
    name.includes('table') ? 'krds-table' :
    name.includes('badge') ? 'krds-badge' : 'krds-component';
  return `<button type="button" class="${cls} bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">\n  ${titleize(name)} 예시\n</button>`;
}

let created = 0;
let updated = 0;

for (const file of files) {
  const name = file.replace(/\.html$/, '');
  const specPath = path.join(specsDir, `${name}.md`);
  const htmlPath = `assets/krds/html/code/${file}`;
  const htmlContent = await fs.readFile(path.join(componentRoot, file), 'utf8');
  const meta = taxonomy.components[name] || {
    category: 'content',
    overview: `KRDS ${name} 컴포넌트`,
    pageContext: 'main#content',
    variants: [],
    parent: null,
    related: []
  };
  const catMeta = taxonomy.categories[meta.category] || { en: 'Content', ko: '콘텐츠' };

  const snippetMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const htmlSnippet = snippetMatch
    ? snippetMatch[1].trim().slice(0, 1200)
    : htmlContent.trim().slice(0, 1200);

  const relatedLines = (meta.related || [])
    .filter((r) => !r.includes('pattern') && taxonomy.components[r])
    .map((r) => `- [${r}.md](./${r}.md)`);
  if (meta.parent && taxonomy.components[meta.parent]) {
    relatedLines.unshift(`- [${meta.parent}.md](./${meta.parent}.md) (parent)`);
  }

  const variantMeta = meta.variants?.length
    ? meta.variants.join(', ')
    : '—';

  const content = `# ${titleize(name)} (\`${name}\`)

> **Category**: ${catMeta.en} (${catMeta.ko})
> **Parent**: ${meta.parent || '—'}
> **Variants**: ${variantMeta}
> **Source**: \`${htmlPath}\`

## Overview

${meta.overview}

## Component Tree

\`\`\`text
${buildComponentTree(name, meta)}
\`\`\`

## Tokens

- \`specs/tokens.md\` 참조 — **임의 hex/폰트 금지**
- Action 계열: \`color.action.primary\` (\`#256ef4\`)
- Surface: \`color.surface.subtle\` (\`#f4f5f6\`)

## HTML (official)

\`\`\`html
${htmlSnippet}${htmlSnippet.length >= 1200 ? '\n<!-- truncated at 1200 chars -->' : ''}
\`\`\`

## Tailwind

\`\`\`html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
${buildTailwindExample(name, meta)}
\`\`\`

## Page Context

페이지 트리상 위치: \`${meta.pageContext}\`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input \`for\`/\`id\` 바인딩 (input 계열)
- icon-only button → \`sr-only\` 텍스트 필수
- table → \`thead\`/\`tbody\`/\`caption\` semantic

## Related

${relatedLines.length ? relatedLines.join('\n') : '- (none)'}

## Do / Don't

**Do**
- 공식 HTML 구조·\`krds-\` 클래스 유지
- \`data-krds-component="${name}"\` / \`data-krds-reference="${htmlPath}"\` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
`;

  try {
    await fs.access(specPath);
    updated++;
  } catch {
    created++;
  }
  await fs.writeFile(specPath, content, 'utf8');
}

const indexLines = [
  '# KRDS Component Index',
  '',
  '> **카테고리별 트리**: [_categories.md](./_categories.md) | **패밀리 가이드**: [docs/component-category-tree.md](../../docs/component-category-tree.md)',
  '',
  `Total: ${files.length} components`,
  '',
  '| Component | Category | Spec | Source |',
  '|-----------|----------|------|--------|',
  ...files.map((file) => {
    const name = file.replace(/\.html$/, '');
    const meta = taxonomy.components[name];
    const cat = meta ? taxonomy.categories[meta.category]?.ko : '—';
    return `| ${titleize(name)} | ${cat} | [${name}.md](./${name}.md) | \`assets/krds/html/code/${file}\` |`;
  }),
  ''
];

await fs.writeFile(indexPath, indexLines.join('\n'), 'utf8');

console.log(JSON.stringify({ total: files.length, created, updated, indexPath: 'specs/components/_index.md' }, null, 2));
