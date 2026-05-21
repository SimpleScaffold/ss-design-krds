#!/usr/bin/env node
/**
 * Converts KRDS style guide pages (style_01~09) → Markdown
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixKoreanSpacing } from './checklist-text-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const OUT_DIR = path.join(root, 'docs/style');
const BASE_URL = 'https://www.krds.go.kr';

export const STYLE_PAGES = [
  {
    id: '01',
    title: '디자인 스타일 소개',
    titleEn: '',
    filename: '디자인-스타일-소개.md',
    url: `${BASE_URL}/html/site/style/style_01.html`,
  },
  {
    id: '02',
    title: '색상',
    titleEn: 'Color',
    filename: '색상.md',
    url: `${BASE_URL}/html/site/style/style_02.html`,
  },
  {
    id: '03',
    title: '타이포그래피',
    titleEn: 'Typography',
    filename: '타이포그래피.md',
    url: `${BASE_URL}/html/site/style/style_03.html`,
  },
  {
    id: '04',
    title: '형태',
    titleEn: 'Shape',
    filename: '형태.md',
    url: `${BASE_URL}/html/site/style/style_04.html`,
  },
  {
    id: '05',
    title: '레이아웃',
    titleEn: 'Layout',
    filename: '레이아웃.md',
    url: `${BASE_URL}/html/site/style/style_05.html`,
  },
  {
    id: '06',
    title: '아이콘',
    titleEn: 'Icon',
    filename: '아이콘.md',
    url: `${BASE_URL}/html/site/style/style_06.html`,
  },
  {
    id: '07',
    title: '디자인 토큰',
    titleEn: 'Design Token',
    filename: '디자인-토큰.md',
    url: `${BASE_URL}/html/site/style/style_07.html`,
  },
  {
    id: '08',
    title: '엘리베이션',
    titleEn: 'Elevation',
    filename: '엘리베이션.md',
    url: `${BASE_URL}/html/site/style/style_08.html`,
  },
  {
    id: '09',
    title: '선명한 화면 모드',
    titleEn: 'High contrast mode',
    filename: '선명한-화면-모드.md',
    url: `${BASE_URL}/html/site/style/style_09.html`,
  },
];

function escapeTableCell(text) {
  return fixKoreanSpacing(String(text || ''))
    .replace(/\|/g, '\\|')
    .replace(/\n+/g, ' ')
    .trim();
}

function absUrl(src) {
  if (!src) return '';
  if (src.startsWith('http')) return src;
  if (src.startsWith('//')) return `https:${src}`;
  if (src.startsWith('/')) return `${BASE_URL}${src}`;
  return `${BASE_URL}/${src.replace(/^\.?\//, '')}`;
}

function tableToMarkdown(table) {
  const caption = table.caption ? `*${escapeTableCell(table.caption)}*\n\n` : '';
  const rows = table.rows || [];
  if (rows.length === 0) return '';

  const normalized = rows.map((row) => {
    const maxCols = Math.max(...rows.map((r) => r.length));
    const cells = [...row];
    while (cells.length < maxCols) cells.push('');
    return cells.map(escapeTableCell);
  });

  const header = normalized[0];
  const lines = [
    `| ${header.join(' | ')} |`,
    `| ${header.map(() => '---').join(' | ')} |`,
  ];
  for (let i = 1; i < normalized.length; i++) {
    lines.push(`| ${normalized[i].join(' | ')} |`);
  }
  return `${caption}${lines.join('\n')}\n\n`;
}

function blockToMarkdown(block) {
  switch (block.type) {
    case 'h1':
      return `# ${block.text}\n\n`;
    case 'intro':
      return `${block.text}\n\n`;
    case 'h2':
      return `## ${block.text}\n\n`;
    case 'h3':
      return `### ${block.text}\n\n`;
    case 'h4':
      return `#### ${block.text}\n\n`;
    case 'h5':
      return `##### ${block.text}\n\n`;
    case 'p':
      return `${block.text}\n\n`;
    case 'list': {
      const lines = block.items.map((item, idx) => {
        const prefix = block.ordered ? `${idx + 1}. ` : '- ';
        return `${prefix}${item}`;
      });
      return `${lines.join('\n')}\n\n`;
    }
    case 'table':
      return tableToMarkdown(block);
    case 'link':
      return `[${block.text}](${block.href})\n\n`;
    case 'image':
      return `![${block.alt}](${block.src})\n\n`;
    case 'example': {
      const label = block.variant === 'error' ? '피해야 할 사례' : '모범 사례';
      return `**${label}**: ${block.alt}\n\n![${block.alt}](${block.src})\n\n`;
    }
    default:
      return '';
  }
}

function buildToc(blocks) {
  const headings = blocks.filter((b) => b.type === 'h2');
  if (headings.length === 0) return '';
  const lines = ['## 목차', ''];
  for (const h of headings) {
    const anchor = h.text
      .toLowerCase()
      .replace(/[^\w가-힣\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
    lines.push(`- [${h.text}](#${anchor})`);
  }
  return `${lines.join('\n')}\n\n`;
}

function pageHeader(meta) {
  const displayTitle = meta.titleEn ? `${meta.title} (${meta.titleEn})` : meta.title;
  return `# ${displayTitle}

> **출처**: [KRDS 스타일 가이드 — ${meta.title}](${meta.url})
> **등록일**: 2025년 1월 15일 (KRDS 공식)

`;
}

async function loadPlaywright() {
  try {
    const pw = await import('playwright');
    return pw.chromium;
  } catch {
    return null;
  }
}

async function extractPageBlocks(page) {
  return page.evaluate((baseUrl) => {
    function cleanText(el) {
      return (el?.innerText || el?.textContent || '')
        .replace(/\u00a0/g, ' ')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
    }

    function absUrl(src) {
      if (!src) return '';
      if (src.startsWith('http')) return src;
      if (src.startsWith('//')) return `https:${src}`;
      if (src.startsWith('/')) return `${baseUrl}${src}`;
      return `${baseUrl}/${src.replace(/^\.?\//, '')}`;
    }

    function isNestedList(el) {
      let parent = el.parentElement;
      const area = document.querySelector('.g-description-area');
      while (parent && parent !== area) {
        if (parent.tagName === 'UL' || parent.tagName === 'OL') return true;
        parent = parent.parentElement;
      }
      return false;
    }

    function listItems(listEl) {
      return [...listEl.children]
        .filter((child) => child.tagName === 'LI')
        .map((li) => cleanText(li))
        .filter(Boolean);
    }

    function tableData(tableEl) {
      const caption = tableEl.querySelector('caption')?.innerText?.trim() || '';
      const rows = [...tableEl.querySelectorAll('tr')].map((tr) =>
        [...tr.querySelectorAll('th,td')].map((cell) => cleanText(cell))
      );
      return { type: 'table', caption, rows };
    }

    const blocks = [];
    const seen = new Set();
    const area = document.querySelector('.g-description-area');
    const titleWrap = document.querySelector('.page-title-wrap');

    if (titleWrap) {
      for (const p of titleWrap.querySelectorAll('p')) {
        if (p.classList.contains('quick-title')) continue;
        const text = cleanText(p);
        if (!text) continue;
        blocks.push({ type: 'intro', text, key: `intro:${text.slice(0, 40)}` });
        break;
      }
    }

    if (!area) return blocks;

    const selector = [
      'h3.sec-tit',
      'h4.con-tit',
      'h4.helper-tit',
      'p.con-tit.sm',
      'h5.con-tit',
      'table',
      'ul',
      'ol',
      'p.g-desc',
      'div.g-desc',
      'p.g-txt-gray',
      'p.g-text',
      '.g-img-wrap.caption-format',
      '.txt-box a',
      '.link-area a',
      '.krds-btn-wrap a',
    ].join(',');

    for (const el of area.querySelectorAll(selector)) {
      if (el.closest('table') && el.tagName !== 'TABLE') continue;
      if ((el.tagName === 'UL' || el.tagName === 'OL') && isNestedList(el)) continue;

      let block = null;
      let key = '';

      if (el.matches('h3.sec-tit')) {
        const text = cleanText(el);
        block = { type: 'h2', text };
        key = `h2:${text}`;
      } else if (el.matches('h4.con-tit, h4.helper-tit')) {
        const text = cleanText(el);
        block = { type: 'h3', text };
        key = `h3:${text}`;
      } else if (el.matches('p.con-tit.sm, h5.con-tit')) {
        const text = cleanText(el);
        block = { type: 'h4', text };
        key = `h4:${text}`;
      } else if (el.matches('table')) {
        block = tableData(el);
        key = `table:${block.caption.slice(0, 30)}:${block.rows.length}`;
      } else if (el.matches('ul, ol')) {
        const items = listItems(el);
        if (items.length === 0) continue;
        block = { type: 'list', ordered: el.tagName === 'OL', items };
        key = `list:${items[0].slice(0, 30)}:${items.length}`;
      } else if (el.matches('p.g-desc, div.g-desc, p.g-txt-gray, p.g-text')) {
        const text = cleanText(el);
        if (!text) continue;
        block = { type: 'p', text };
        key = `p:${text.slice(0, 40)}`;
      } else if (el.matches('.g-img-wrap.caption-format')) {
        const img = el.querySelector('img');
        if (!img) continue;
        const alt = img.getAttribute('alt') || cleanText(el) || 'example';
        const variant = el.classList.contains('error') ? 'error' : 'success';
        block = {
          type: 'example',
          variant,
          alt,
          src: absUrl(img.getAttribute('src') || ''),
        };
        key = `ex:${alt.slice(0, 40)}`;
      } else if (el.matches('a')) {
        const text = cleanText(el);
        const href = absUrl(el.getAttribute('href') || '');
        if (!text || !href || href.startsWith('javascript:')) continue;
        block = { type: 'link', text, href };
        key = `link:${href}`;
      }

      if (block && !seen.has(key)) {
        seen.add(key);
        blocks.push(block);
      }
    }

    return blocks;
  }, BASE_URL);
}

async function convertPage(chromium, meta) {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(meta.url, { waitUntil: 'domcontentloaded', timeout: 90000 });
    await page.waitForSelector('.sec-tit, .g-description-area', { timeout: 60000 }).catch(() => {});
    await page.waitForTimeout(2000);

    const blocks = await extractPageBlocks(page);
    const body = blocks.map(blockToMarkdown).join('');
    const toc = buildToc(blocks);
    const md = `${pageHeader(meta)}${toc}${body}`.trimEnd() + '\n';
    return md;
  } finally {
    await browser.close();
  }
}

function buildIndexMd() {
  const lines = [
    '# KRDS 스타일 가이드',
    '',
    '> [KRDS 디자인 스타일](https://www.krds.go.kr/html/site/style/style_01.html) 공식 페이지를 Markdown으로 변환한 지식베이스입니다.',
    '',
    '## 읽기 순서',
    '',
    '1. [디자인 스타일 소개](./디자인-스타일-소개.md) — 표준형/확장형, 적용 대상',
    '2. [색상](./색상.md) — 팔레트, 매직넘버, 시스템 색상',
    '3. [타이포그래피](./타이포그래피.md) — Pretendard GOV, 글자 스케일',
    '4. [형태](./형태.md) — radius, 컨테이너 비율',
    '5. [레이아웃](./레이아웃.md) — 그리드, 브레이크포인트, 간격',
    '6. [아이콘](./아이콘.md) — 시스템 아이콘 규격',
    '7. [디자인 토큰](./디자인-토큰.md) — primitive/semantic/component',
    '8. [엘리베이션](./엘리베이션.md) — shadow, surface 레벨',
    '9. [선명한 화면 모드](./선명한-화면-모드.md) — 고대비 모드',
    '',
    '## 문서 목록',
    '',
    '| 문서 | 원본 |',
    '| --- | --- |',
  ];

  for (const page of STYLE_PAGES) {
    const label = page.titleEn ? `${page.title} (${page.titleEn})` : page.title;
    lines.push(`| [${label}](./${page.filename}) | [style_${page.id}.html](${page.url}) |`);
  }

  lines.push('');
  return `${lines.join('\n')}\n`;
}

async function main() {
  const chromium = await loadPlaywright();
  if (!chromium) {
    console.error('playwright is required. Run: npx playwright install chromium');
    process.exit(1);
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  const results = [];
  for (const meta of STYLE_PAGES) {
    process.stderr.write(`Converting ${meta.filename}...\n`);
    const md = await convertPage(chromium, meta);
    const outPath = path.join(OUT_DIR, meta.filename);
    await fs.writeFile(outPath, md, 'utf8');
    results.push({ file: meta.filename, chars: md.length });
  }

  await fs.writeFile(path.join(OUT_DIR, 'index.md'), buildIndexMd(), 'utf8');

  console.log(
    JSON.stringify(
      {
        ok: true,
        outputDir: OUT_DIR,
        files: results,
      },
      null,
      2
    )
  );
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
