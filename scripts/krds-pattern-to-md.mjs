#!/usr/bin/env node
/**
 * Converts KRDS basic pattern pages (global_01~13) → Markdown
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  KRDS_BASE_URL,
  convertPage,
  defaultPatternHeader,
  loadPlaywright,
} from './krds-page-to-md-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const OUT_DIR = path.join(root, 'docs/patterns');

export const PATTERN_PAGES = [
  {
    id: '01',
    title: '개인 식별 정보 입력',
    titleEn: 'PII',
    filename: '개인-식별-정보-입력.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_01.html`,
    summary: '이름·생년월일·성별·전화번호 수집',
  },
  {
    id: '02',
    title: '도움',
    titleEn: 'Help',
    filename: '도움.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_02.html`,
    summary: '고정형·요청형·반응형 도움말',
  },
  {
    id: '03',
    title: '동의',
    titleEn: 'Consent',
    filename: '동의.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_03.html`,
    summary: '약관 동의·일괄 선택',
  },
  {
    id: '04',
    title: '목록 탐색',
    titleEn: 'List navigation',
    filename: '목록-탐색.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_04.html`,
    summary: '목록·페이지네이션·탐색',
  },
  {
    id: '05',
    title: '사용자 피드백',
    titleEn: 'User feedback',
    filename: '사용자-피드백.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_05.html`,
    summary: '피드백 수집·응답',
  },
  {
    id: '06',
    title: '상세 정보 확인',
    titleEn: 'Detail view',
    filename: '상세-정보-확인.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_06.html`,
    summary: '상세 화면·정보 구조',
  },
  {
    id: '07',
    title: '오류',
    titleEn: 'Error',
    filename: '오류.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_07.html`,
    summary: '오류 메시지·복구',
  },
  {
    id: '08',
    title: '입력 폼',
    titleEn: 'Form',
    filename: '입력-폼.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_08.html`,
    summary: '폼 레이아웃·필수/선택·자동완성',
  },
  {
    id: '09',
    title: '첨부파일',
    titleEn: 'Attachment',
    filename: '첨부파일.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_09.html`,
    summary: '파일 업로드·다운로드 안내',
  },
  {
    id: '10',
    title: '필터링·정렬',
    titleEn: 'Filter & sort',
    filename: '필터링-정렬.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_10.html`,
    summary: '필터·정렬 컨트롤·적용 표시',
  },
  {
    id: '11',
    title: '확인',
    titleEn: 'Confirmation',
    filename: '확인.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_11.html`,
    summary: '확인 다이얼로그·되돌리기',
  },
  {
    id: '12',
    title: '모바일 알림',
    titleEn: 'Mobile notification',
    filename: '모바일-알림.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_12.html`,
    summary: '푸시·토스트·스낵바·알림함',
  },
  {
    id: '13',
    title: '모바일 설정',
    titleEn: 'Mobile settings',
    filename: '모바일-설정.md',
    url: `${KRDS_BASE_URL}/html/site/global/global_13.html`,
    summary: '앱 설정 허브·토글·2단계 인증',
  },
];

function buildIndexMd() {
  const lines = [
    '# KRDS 기본 패턴',
    '',
    '> [KRDS 기본 패턴](https://www.krds.go.kr/html/site/global/global_01.html) 공식 페이지를 Markdown으로 변환한 지식베이스입니다.',
    '',
    '## 읽기 순서',
    '',
  ];

  PATTERN_PAGES.forEach((page, i) => {
    lines.push(`${i + 1}. [${page.title}](./${page.filename}) — ${page.summary}`);
  });

  lines.push(
    '',
    '## 문서 목록',
    '',
    '| 문서 | 원본 |',
    '| --- | --- |'
  );

  for (const page of PATTERN_PAGES) {
    const label = page.titleEn ? `${page.title} (${page.titleEn})` : page.title;
    lines.push(`| [${label}](./${page.filename}) | [global_${page.id}.html](${page.url}) |`);
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
  for (const meta of PATTERN_PAGES) {
    process.stderr.write(`Converting ${meta.filename}...\n`);
    const md = await convertPage(chromium, meta, defaultPatternHeader);
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
