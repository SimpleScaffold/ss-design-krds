/**
 * Shared KRDS page → Markdown conversion (style, basic patterns, etc.)
 */
import { fixKoreanSpacing } from './checklist-text-lib.mjs';

export const KRDS_BASE_URL = 'https://www.krds.go.kr';

export function escapeTableCell(text) {
  return fixKoreanSpacing(String(text || ''))
    .replace(/\|/g, '\\|')
    .replace(/\n+/g, ' ')
    .trim();
}

export function absUrl(src, baseUrl = KRDS_BASE_URL) {
  if (!src) return '';
  if (src.startsWith('http')) return src;
  if (src.startsWith('//')) return `https:${src}`;
  if (src.startsWith('/')) return `${baseUrl}${src}`;
  return `${baseUrl}/${src.replace(/^\.?\//, '')}`;
}

export function tableToMarkdown(table) {
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

export function blockToMarkdown(block) {
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

export function buildToc(blocks) {
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

export async function loadPlaywright() {
  try {
    const pw = await import('playwright');
    return pw.chromium;
  } catch {
    return null;
  }
}

export async function extractPageBlocks(page, baseUrl = KRDS_BASE_URL) {
  return page.evaluate((url) => {
    function cleanText(el) {
      return (el?.innerText || el?.textContent || '')
        .replace(/\u00a0/g, ' ')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
    }

    function absUrlLocal(src) {
      if (!src) return '';
      if (src.startsWith('http')) return src;
      if (src.startsWith('//')) return `https:${src}`;
      if (src.startsWith('/')) return `${url}${src}`;
      return `${url}/${src.replace(/^\.?\//, '')}`;
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
          src: absUrlLocal(img.getAttribute('src') || ''),
        };
        key = `ex:${alt.slice(0, 40)}`;
      } else if (el.matches('a')) {
        const text = cleanText(el);
        const href = absUrlLocal(el.getAttribute('href') || '');
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
  }, baseUrl);
}

/**
 * @param {import('playwright').Chromium} chromium
 * @param {{ title: string, titleEn?: string, url: string }} meta
 * @param {(meta: object) => string} headerBuilder
 */
export async function convertPage(chromium, meta, headerBuilder) {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(meta.url, { waitUntil: 'domcontentloaded', timeout: 90000 });
    await page.waitForSelector('.sec-tit, .g-description-area', { timeout: 60000 }).catch(() => {});
    await page.waitForTimeout(2000);

    const blocks = await extractPageBlocks(page);
    const body = blocks.map(blockToMarkdown).join('');
    const toc = buildToc(blocks);
    const md = `${headerBuilder(meta)}${toc}${body}`.trimEnd() + '\n';
    return md;
  } finally {
    await browser.close();
  }
}

export function defaultStyleHeader(meta) {
  const displayTitle = meta.titleEn ? `${meta.title} (${meta.titleEn})` : meta.title;
  return `# ${displayTitle}

> **출처**: [KRDS 스타일 가이드 — ${meta.title}](${meta.url})
> **등록일**: 2025년 1월 15일 (KRDS 공식)

`;
}

export function defaultPatternHeader(meta) {
  const displayTitle = meta.titleEn ? `${meta.title} (${meta.titleEn})` : meta.title;
  return `# ${displayTitle}

> **출처**: [KRDS 기본 패턴 — ${meta.title}](${meta.url})
> **등록일**: 2025년 1월 15일 (KRDS 공식)

`;
}
