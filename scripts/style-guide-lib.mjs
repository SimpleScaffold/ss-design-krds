/**
 * KRDS style guide thresholds and spec references (docs/style/*.md)
 */
import { STYLE_PAGES } from './krds-style-to-md.mjs';

export const STYLE_DIR = 'docs/style';

/** Checklist subcategory → primary style guide MD */
export const STYLE_SPEC_BY_SUBCATEGORY = {
  color: `${STYLE_DIR}/색상.md`,
  typography: `${STYLE_DIR}/타이포그래피.md`,
  shape: `${STYLE_DIR}/형태.md`,
};

/** Quick lookup for catalog SPEC_REFS */
export const STYLE_SPEC_REFS = {
  'style.color': STYLE_SPEC_BY_SUBCATEGORY.color,
  'style.typography': STYLE_SPEC_BY_SUBCATEGORY.typography,
  'style.shape': STYLE_SPEC_BY_SUBCATEGORY.shape,
};

/** Numeric thresholds from KRDS style guide MD */
export const STYLE_THRESHOLDS = {
  govBodyMinPx: 17,
  selfBodyMinPx: 16,
  lineHeightMinRatio: 1.5,
  govRadiusPx: [2, 4, 6, 10, 12],
  iconBasePx: 24,
  iconStrokePx: 1.6,
  contentMaxPx: 1200,
  screenMarginMinPx: { small: 16, medium: 24, large: 24 },
};

/** KRDS token palette (assets/krds/resources/css/token/krds_tokens.css) */
export const KRDS_PALETTE_HEX = [
  '#256ef4', '#0b50d0', '#346fb2', '#1c589c',
  '#ffffff', '#f4f5f6', '#e6e8ea', '#cdd1d5', '#8a949e', '#58616a', '#464c53', '#33363d', '#1e2124', '#000000',
  '#de3412', '#228738', '#9e6a00', '#0b78cb',
  '#ecf2fe', '#eef2f7', '#0057b8', '#003675', '#003f85',
];

export const STYLE_PAGE_EXPECTATIONS = {
  '디자인-스타일-소개.md': {
    minLength: 2500,
    minSections: 5,
    minTableRows: 2,
    keywords: ['표준형 스타일', '확장형 스타일', '접근성'],
  },
  '색상.md': {
    minLength: 4000,
    minSections: 10,
    minTableRows: 2,
    keywords: ['매직넘버', 'Primary', '시스템 색상', 'danger'],
  },
  '타이포그래피.md': {
    minLength: 4000,
    minSections: 10,
    minTableRows: 20,
    keywords: ['Pretendard GOV', '17', '150%', 'line-height'],
  },
  '형태.md': {
    minLength: 3500,
    minSections: 5,
    minTableRows: 10,
    keywords: ['radius', '래디어스', '12px', '0.125'],
  },
  '레이아웃.md': {
    minLength: 3500,
    minSections: 8,
    minTableRows: 10,
    keywords: ['브레이크포인트', '스크린 마진', '1200px', 'gutter'],
  },
  '아이콘.md': {
    minLength: 3000,
    minSections: 8,
    minTableRows: 2,
    keywords: ['24px', '1.6px', 'SVG 파일'],
  },
  '디자인-토큰.md': {
    minLength: 3500,
    minSections: 8,
    minTableRows: 2,
    keywords: ['primitive', 'semantic', 'component'],
  },
  '엘리베이션.md': {
    minLength: 3500,
    minSections: 8,
    minTableRows: 2,
    keywords: ['Level', '그림자', '딤드'],
  },
  '선명한-화면-모드.md': {
    minLength: 3500,
    minSections: 5,
    minTableRows: 4,
    keywords: ['15:1', '선명한 화면 모드', '7:1'],
  },
};

export function styleGuideTableMd() {
  const rows = [
    ['색상', `${STYLE_DIR}/색상.md`],
    ['타이포그래피', `${STYLE_DIR}/타이포그래피.md`],
    ['형태', `${STYLE_DIR}/형태.md`],
    ['레이아웃', `${STYLE_DIR}/레이아웃.md`],
    ['아이콘', `${STYLE_DIR}/아이콘.md`],
    ['디자인 토큰', `${STYLE_DIR}/디자인-토큰.md`],
    ['엘리베이션', `${STYLE_DIR}/엘리베이션.md`],
    ['선명한 화면 모드', `${STYLE_DIR}/선명한-화면-모드.md`],
    ['전체', `${STYLE_DIR}/index.md`],
  ];
  const lines = [
    '## 상세 스타일 가이드',
    '',
    '| 주제 | 문서 |',
    '| --- | --- |',
    ...rows.map(([label, doc]) => `| ${label} | [${doc}](../../${doc}) |`),
    '',
  ];
  return lines.join('\n');
}

export function isGovFontFamily(fontFamily) {
  return /pretendard\s*gov|pretendard/i.test(fontFamily || '');
}

export function isGothicFontFamily(fontFamily) {
  return /sans-serif|gothic|malgun|noto\s*sans|spoqa|nanum/i.test(fontFamily || '');
}

export function normalizeHex(hex) {
  if (!hex) return null;
  const h = hex.toLowerCase();
  if (h.length === 4 && h.startsWith('#')) {
    return `#${h[1]}${h[1]}${h[2]}${h[2]}${h[3]}${h[3]}`;
  }
  return h;
}

export function hexFromRgb(rgb) {
  const m = String(rgb).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return null;
  return (
    '#' +
    [m[1], m[2], m[3]]
      .map((x) => Number(x).toString(16).padStart(2, '0'))
      .join('')
  );
}

export function isKrdsPaletteHex(hex) {
  const n = normalizeHex(hex);
  if (!n) return false;
  return KRDS_PALETTE_HEX.some((p) => normalizeHex(p) === n);
}

export function parsePx(val) {
  const n = parseFloat(val);
  return Number.isFinite(n) ? n : 0;
}

/** Browser-side helper source (injected via page.evaluate) */
export function getTypographyMetricsScript() {
  return `(() => {
    const bodyCs = getComputedStyle(document.body);
    const paras = [...document.querySelectorAll('main p, #content p')].filter(
      (p) => (p.textContent || '').trim().length > 30
    );
    const paraSizes = paras.map((p) => parseFloat(getComputedStyle(p).fontSize)).filter((n) => n > 0);
    const bodySize = parseFloat(bodyCs.fontSize);
    const contentSize = paraSizes.length ? Math.max(...paraSizes) : bodySize;
    const lh = parseFloat(bodyCs.lineHeight);
    const fs = bodySize;
    return {
      fontFamily: bodyCs.fontFamily,
      bodyFontSize: bodySize,
      contentFontSize: contentSize,
      lineHeightRatio: fs > 0 ? lh / fs : 0,
      lineHeightPx: lh,
    };
  })()`;
}

export function getStylePageByFilename(filename) {
  return STYLE_PAGES.find((p) => p.filename === filename);
}

export function validateStyleMdHeader(content, page) {
  const checks = [];
  checks.push(/^# .+/m.test(content));
  checks.push(content.includes(page.url));
  checks.push(content.includes('**출처**'));
  checks.push(content.includes('**등록일**'));
  checks.push(content.includes('## 목차'));
  return checks.every(Boolean);
}
