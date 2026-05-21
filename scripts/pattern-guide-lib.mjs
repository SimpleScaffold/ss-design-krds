/**
 * KRDS basic pattern guide references (docs/patterns/*.md)
 */
import { PATTERN_PAGES } from './krds-pattern-to-md.mjs';

export const PATTERN_DIR = 'docs/patterns';

/** Checklist subcategory → primary pattern guide MD */
export const PATTERN_SPEC_BY_SUBCATEGORY = {
  pii: `${PATTERN_DIR}/개인-식별-정보-입력.md`,
  form: `${PATTERN_DIR}/입력-폼.md`,
  attachment: `${PATTERN_DIR}/첨부파일.md`,
  'filter-sort': `${PATTERN_DIR}/필터링-정렬.md`,
};

/** Quick lookup for catalog SPEC_REFS */
export const PATTERN_SPEC_REFS = {
  'pattern.pii': PATTERN_SPEC_BY_SUBCATEGORY.pii,
  'pattern.form': PATTERN_SPEC_BY_SUBCATEGORY.form,
  'pattern.attachment': PATTERN_SPEC_BY_SUBCATEGORY.attachment,
  'pattern.filter': PATTERN_SPEC_BY_SUBCATEGORY['filter-sort'],
  'pattern.filter-sort': PATTERN_SPEC_BY_SUBCATEGORY['filter-sort'],
};

export const PATTERN_PAGE_EXPECTATIONS = {
  '개인-식별-정보-입력.md': {
    minLength: 3500,
    minSections: 4,
    minTableRows: 2,
    keywords: ['개인 식별 정보', '이름', '생년월일', '전화번호', 'autocomplete'],
  },
  '도움.md': {
    minLength: 4000,
    minSections: 4,
    minTableRows: 2,
    keywords: ['도움', '툴팁', '안내 영역', '플레이스홀더'],
  },
  '동의.md': {
    minLength: 2500,
    minSections: 3,
    minTableRows: 2,
    keywords: ['동의', '약관', '필수', '선택'],
  },
  '목록-탐색.md': {
    minLength: 2200,
    minSections: 3,
    minTableRows: 2,
    keywords: ['목록', '탐색'],
  },
  '사용자-피드백.md': {
    minLength: 2000,
    minSections: 3,
    minTableRows: 2,
    keywords: ['피드백'],
  },
  '상세-정보-확인.md': {
    minLength: 2000,
    minSections: 3,
    minTableRows: 2,
    keywords: ['상세'],
  },
  '오류.md': {
    minLength: 1200,
    minSections: 3,
    minTableRows: 2,
    keywords: ['오류'],
  },
  '입력-폼.md': {
    minLength: 3000,
    minSections: 3,
    minTableRows: 2,
    keywords: ['입력폼', '필수', 'autocomplete'],
  },
  '첨부파일.md': {
    minLength: 1500,
    minSections: 3,
    minTableRows: 2,
    keywords: ['첨부파일'],
  },
  '필터링-정렬.md': {
    minLength: 4000,
    minSections: 4,
    minTableRows: 2,
    keywords: ['필터링', '정렬'],
  },
  '확인.md': {
    minLength: 1500,
    minSections: 3,
    minTableRows: 2,
    keywords: ['확인'],
  },
  '모바일-알림.md': {
    minLength: 1500,
    minSections: 3,
    minTableRows: 2,
    keywords: ['알림', '토스트'],
  },
  '모바일-설정.md': {
    minLength: 2000,
    minSections: 3,
    minTableRows: 2,
    keywords: ['설정', '토글'],
  },
};

export function patternGuideTableMd() {
  const rows = PATTERN_PAGES.map((p) => [p.title, `${PATTERN_DIR}/${p.filename}`]);
  const lines = [
    '## 기본 패턴 가이드',
    '',
    '| 패턴 | 문서 |',
    '| --- | --- |',
    ...rows.map(([label, doc]) => `| ${label} | [${doc}](../../${doc}) |`),
    '',
    `전체: [${PATTERN_DIR}/index.md](../../${PATTERN_DIR}/index.md)`,
    '',
  ];
  return lines.join('\n');
}

export function getPatternPageByFilename(filename) {
  return PATTERN_PAGES.find((p) => p.filename === filename);
}

export function validatePatternMdHeader(content, page) {
  const checks = [];
  checks.push(/^# .+/m.test(content));
  checks.push(content.includes(page.url));
  checks.push(content.includes('**출처**'));
  checks.push(content.includes('**등록일**'));
  checks.push(content.includes('## 목차'));
  return checks.every(Boolean);
}
