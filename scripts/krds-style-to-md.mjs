#!/usr/bin/env node
/**
 * Converts KRDS style guide pages (style_01~09) → Markdown
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  KRDS_BASE_URL,
  convertPage,
  defaultStyleHeader,
  loadPlaywright,
} from './krds-page-to-md-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const OUT_DIR = path.join(root, 'docs/style');

export const STYLE_PAGES = [
  {
    id: '01',
    title: '디자인 스타일 소개',
    titleEn: '',
    filename: '디자인-스타일-소개.md',
    url: `${KRDS_BASE_URL}/html/site/style/style_01.html`,
  },
  {
    id: '02',
    title: '색상',
    titleEn: 'Color',
    filename: '색상.md',
    url: `${KRDS_BASE_URL}/html/site/style/style_02.html`,
  },
  {
    id: '03',
    title: '타이포그래피',
    titleEn: 'Typography',
    filename: '타이포그래피.md',
    url: `${KRDS_BASE_URL}/html/site/style/style_03.html`,
  },
  {
    id: '04',
    title: '형태',
    titleEn: 'Shape',
    filename: '형태.md',
    url: `${KRDS_BASE_URL}/html/site/style/style_04.html`,
  },
  {
    id: '05',
    title: '레이아웃',
    titleEn: 'Layout',
    filename: '레이아웃.md',
    url: `${KRDS_BASE_URL}/html/site/style/style_05.html`,
  },
  {
    id: '06',
    title: '아이콘',
    titleEn: 'Icon',
    filename: '아이콘.md',
    url: `${KRDS_BASE_URL}/html/site/style/style_06.html`,
  },
  {
    id: '07',
    title: '디자인 토큰',
    titleEn: 'Design Token',
    filename: '디자인-토큰.md',
    url: `${KRDS_BASE_URL}/html/site/style/style_07.html`,
  },
  {
    id: '08',
    title: '엘리베이션',
    titleEn: 'Elevation',
    filename: '엘리베이션.md',
    url: `${KRDS_BASE_URL}/html/site/style/style_08.html`,
  },
  {
    id: '09',
    title: '선명한 화면 모드',
    titleEn: 'High contrast mode',
    filename: '선명한-화면-모드.md',
    url: `${KRDS_BASE_URL}/html/site/style/style_09.html`,
  },
];

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
    const md = await convertPage(chromium, meta, defaultStyleHeader);
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
