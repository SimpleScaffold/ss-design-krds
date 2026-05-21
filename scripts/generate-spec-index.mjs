#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const componentRoot = path.join(root, 'assets/krds/html/code');
const specsDir = path.join(root, 'specs/components');
const indexPath = path.join(root, 'specs/components/_index.md');

await fs.mkdir(specsDir, { recursive: true });

const files = (await fs.readdir(componentRoot))
  .filter((file) => file.endsWith('.html'))
  .sort();

const titleize = (name) =>
  name.replace(/_/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());

let created = 0;
let updated = 0;

for (const file of files) {
  const name = file.replace(/\.html$/, '');
  const specPath = path.join(specsDir, `${name}.md`);
  const htmlPath = `assets/krds/html/code/${file}`;
  const htmlContent = await fs.readFile(path.join(componentRoot, file), 'utf8');

  const snippetMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const htmlSnippet = snippetMatch
    ? snippetMatch[1].trim().slice(0, 800)
    : htmlContent.trim().slice(0, 800);

  const content = `# ${titleize(name)} (\`${name}\`)

> Source: \`${htmlPath}\`

## When to use

- KRDS 공식 컴포넌트 \`${name}\` 패턴이 필요할 때
- \`data-krds-component="${name}"\` / \`data-krds-reference="${htmlPath}"\`로 출처 추적

## Tokens

- \`specs/tokens.md\` 참조 — 임의 hex 금지

## HTML (official)

\`\`\`html
${htmlSnippet}${htmlSnippet.length >= 800 ? '\n<!-- truncated -->' : ''}
\`\`\`

## Tailwind

\`\`\`html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="${name}" data-krds-reference="${htmlPath}">
  <!-- assets/krds/html/code/${file} 구조 참조 -->
</div>
\`\`\`

## Accessibility

- \`specs/accessibility.md\` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
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
  `Total: ${files.length} components`,
  '',
  '| Component | Spec | Source |',
  '|-----------|------|--------|',
  ...files.map((file) => {
    const name = file.replace(/\.html$/, '');
    return `| ${titleize(name)} | [${name}.md](./${name}.md) | \`assets/krds/html/code/${file}\` |`;
  }),
  ''
];

await fs.writeFile(indexPath, indexLines.join('\n'), 'utf8');

console.log(JSON.stringify({ total: files.length, created, updated, indexPath: 'specs/components/_index.md' }, null, 2));
