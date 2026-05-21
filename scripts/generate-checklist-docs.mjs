#!/usr/bin/env node
/**
 * Generates checklist MD docs from official-checklist.json
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { styleGuideTableMd } from './style-guide-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const catalogPath = path.join(root, 'resources/krds/checklist/official-checklist.json');

const catalog = JSON.parse(await fs.readFile(catalogPath, 'utf8'));
const { items, summary } = catalog;

const tierLabel = { gov: '정부상징', self: '자체상징', common: '공통' };
const levelLabel = { static: 'L1-static', browser: 'L2-browser', manual: 'L3-manual' };

function groupItems(filterCategory = null) {
  const groups = {};
  for (const it of items) {
    if (filterCategory && it.category !== filterCategory) continue;
    const key = `${it.category}::${it.subcategory}`;
    if (!groups[key]) groups[key] = { category: it.category, subcategory: it.subcategory, items: [] };
    groups[key].items.push(it);
  }
  return groups;
}

function buildTreeMd() {
  const lines = [
    '# KRDS 자체 검증 체크리스트 트리',
    '',
    '> 디지털 정부서비스 UI/UX 가이드라인 자체 검증 체크리스트 (2024.11) 1단계',
    `> 총 **${summary.totalItems}** 항목 · 자동화: static ${summary.automationCounts.static} / browser ${summary.automationCounts.browser} / manual ${summary.automationCounts.manual}`,
    '',
    '## 카테고리 요약',
    '',
    '| 카테고리 | 항목 수 |',
    '|----------|---------|',
    `| style | ${summary.byCategory.style} |`,
    `| component | ${summary.byCategory.component} |`,
    `| pattern.basic | ${summary.byCategory['pattern.basic']} |`,
    `| pattern.service | ${summary.byCategory['pattern.service']} |`,
    '',
    '## 트리',
    ''
  ];

  const categoryOrder = ['style', 'component', 'pattern.basic', 'pattern.service'];
  const categoryNames = {
    style: '스타일',
    component: '컴포넌트',
    'pattern.basic': '기본 패턴',
    'pattern.service': '서비스 패턴'
  };

  for (const cat of categoryOrder) {
    lines.push(`### ${categoryNames[cat]} (${summary.byCategory[cat]})`);
    lines.push('');
    const groups = groupItems(cat);
    const subKeys = Object.keys(groups).sort();
    for (const key of subKeys) {
      const g = groups[key];
      lines.push(`#### ${g.subcategory}`);
      for (const it of g.items) {
        const tiers = it.tier.map((t) => tierLabel[t]).join(', ');
        const auto = levelLabel[it.automation.level];
        const rule = it.automation.ruleId ? ` · \`${it.automation.ruleId}\`` : '';
        lines.push(`- \`${it.id}\` [${tiers}] (${auto})${rule} — ${it.title}`);
      }
      lines.push('');
    }
  }

  lines.push('## 관련 문서');
  lines.push('');
  lines.push('- [specs/validation-checklist.md](../specs/validation-checklist.md)');
  lines.push('- [specs/validation-tools.md](../specs/validation-tools.md)');
  lines.push('- [resources/krds/checklist/official-checklist.json](../resources/krds/checklist/official-checklist.json)');
  return lines.join('\n');
}

function buildValidationChecklistMd() {
  return `# KRDS 자체 검증 체크리스트

> 디지털 정부서비스 UI/UX 가이드라인 자체 검증 체크리스트 (2024.11) 1단계 요약

## 검증 준비

- **환경**: Chrome 최신, 해상도 1920×1080 (모바일 항목은 768px)
- **대상**: 1단계 범위 화면 (스타일·컴포넌트·기본·서비스 패턴)
- **tier**: \`gov\`(정부상징), \`self\`(자체상징), \`common\`(공통) — 해당 없으면 **N/A**

## 판정 (P / F / E / N/A)

| 코드 | 의미 |
|------|------|
| **P** | Pass — 준수 |
| **F** | Fail — 미준수 |
| **E** | Exception — 예외 승인 |
| **N/A** | Not Applicable — 해당 없음 |

## 수행 절차

1. [validation-checklist-tree.md](../docs/validation-checklist-tree.md)에서 tier·카테고리 필터
2. \`npm run krds:checklist\` 로 L1(static)+L2(browser) 자동 검증
3. L3(manual) 항목은 procedure 기준 수동 확인
4. 결과 JSON/Markdown 리포트에 P/F/E/N/A 기록

## CLI

\`\`\`bash
npm run krds:checklist -- \\
  --target experiment/sample-page/index.html \\
  --tier gov,self,common \\
  --category all \\
  --mode static+browser \\
  --output reports/checklist-result.json
\`\`\`

## 데이터 소스

- 구조화 카탈로그: \`resources/krds/checklist/official-checklist.json\` (${summary.totalItems}항)
- 정성 평가(부록): \`resources/krds/checklist/qualitative-items.json\`
- 결과 템플릿: \`resources/krds/checklist/checklist-result.template.json\`
`;
}

function buildValidationToolsMd() {
  return `# KRDS 검증 도구 활용

> 자체 검증 체크리스트 부록 «도구 활용 방법» 요약

## Chrome DevTools

- **Elements**: DOM 구조, landmark, \`label[for]\` 바인딩 확인
- **Computed**: \`font-size\`, \`font-family\`, \`line-height\`, \`color\`, \`border-radius\`
- **CSS overview**: Primary/Gray 팔레트 hex vs [specs/tokens.md](./tokens.md)

## 명도 대비

- 텍스트·UI 컴포넌트 대비 **3:1** 이상 (WCAG 기준)
- L2 browser 러너: \`krds-checklist-browser.mjs\` contrast 검사

## 키보드 (Tab)

- Skip link → Enter/Space로 본문 이동
- 메뉴·버튼 Tab 순서 및 focus-visible 상태

## 반응형 (768px)

- DevTools device toolbar 768px
- 푸터 순서, breadcrumb 축약, side menu 숨김 등

## 자동화 매핑

| 도구 | automation.level |
|------|------------------|
| HTML/DOM 정적 분석 | \`static\` (L1) |
| Playwright computed style·키보드·뷰포트 | \`browser\` (L2) |
| 콘텐츠·플로우·정성 | \`manual\` (L3) |

설치 (WSL/CI):

\`\`\`bash
npm install
npx playwright install chromium
\`\`\`
`;
}

function buildCategoryValidationMd(category, titleKo) {
  const catItems = items.filter((it) => it.category === category);
  const lines = [
    `# ${titleKo} 검증 준수기준`,
    '',
    `> ${titleKo} 카테고리 ${catItems.length}항 · [validation-checklist-tree.md](../../docs/validation-checklist-tree.md)`,
    ''
  ];
  const groups = {};
  for (const it of catItems) {
    if (!groups[it.subcategory]) groups[it.subcategory] = [];
    groups[it.subcategory].push(it);
  }
  for (const [sub, list] of Object.entries(groups).sort()) {
    lines.push(`## ${sub}`);
    lines.push('');
    for (const it of list) {
      lines.push(`### \`${it.id}\``);
      lines.push('');
      lines.push(`- **tier**: ${it.tier.map((t) => tierLabel[t]).join(', ')}`);
      lines.push(`- **automation**: ${it.automation.level}${it.automation.ruleId ? ` (\`${it.automation.ruleId}\`)` : ''}`);
      lines.push(`- **spec**: [${it.specRef}](../../${it.specRef})`);
      lines.push(`- ${it.title}`);
      lines.push('');
    }
  }
  if (category === 'style') {
    lines.push(styleGuideTableMd());
  }
  return lines.join('\n');
}

await fs.mkdir(path.join(root, 'specs/validation'), { recursive: true });

await fs.writeFile(path.join(root, 'docs/validation-checklist-tree.md'), buildTreeMd());
await fs.writeFile(path.join(root, 'specs/validation-checklist.md'), buildValidationChecklistMd());
await fs.writeFile(path.join(root, 'specs/validation-tools.md'), buildValidationToolsMd());
await fs.writeFile(path.join(root, 'specs/validation/style.md'), buildCategoryValidationMd('style', '스타일'));
await fs.writeFile(path.join(root, 'specs/validation/component.md'), buildCategoryValidationMd('component', '컴포넌트'));
await fs.writeFile(path.join(root, 'specs/validation/pattern.basic.md'), buildCategoryValidationMd('pattern.basic', '기본 패턴'));
await fs.writeFile(path.join(root, 'specs/validation/pattern.service.md'), buildCategoryValidationMd('pattern.service', '서비스 패턴'));

console.log(JSON.stringify({ ok: true, generated: 7, totalItems: summary.totalItems }, null, 2));
