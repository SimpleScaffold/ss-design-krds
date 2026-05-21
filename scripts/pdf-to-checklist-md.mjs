#!/usr/bin/env node
/**
 * Converts 디지털 정부서비스 UI/UX 가이드라인 자체 검증 체크리스트.pdf → Markdown
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PDFParse } from 'pdf-parse';
import {
  normalizeLine,
  joinKoreanLines,
  mergePageLines,
  fixKoreanSpacing,
  splitNumberedSteps,
  mergeProseChunk,
  countBrokenKorean,
} from './checklist-text-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const PDF_PATH = path.join(root, 'docs/디지털 정부 서비스 UIUX 가이드라인 자체 검증 체크리스트.pdf');
const OUT_PATH = path.join(root, 'docs/디지털-정부-서비스-uiux-가이드라인-자체-검증-체크리스트.md');

const PAGE_MARKER = /^--\s*\d+\s+of\s+\d+\s*--$/;
const PAGE_HEADER = /^\d+\.\s+(개요|체크리스트|준수\s*기준|부록)\s+[가-힣]\.\s+.+/;
const PAGE_FOOTER = /^-\s*\d+\s*-$/;
const SECTION_MAIN = /^(\d+)\.\s+(개요|체크리스트|준수\s*기준|부록)\s*$/;
const SECTION_SUB = /^([가-힣])\.\s+(.+)$/;
const SECTION_NUM = /^(\d+)\)\s+(.+)$/;
const SECTION_ALPHA = /^([가-힣])\)\s+(.+)$/;
const CRITERIA_ID = /^\[(.+?\s*\d+)\]$/;
const CHECKLIST_HEADER = /^체크리스트\s+준수\s*여부$/;
const CHECKLIST_ITEM = /^(\d+)\.\s+(.+)$/;
const GUIDE_CATEGORY = /^(구조|사용성\s*가이드라인|상호작용\s*가이드라인|콘텐츠\s*가이드라인|플랫폼\s*가이드라인|용례|표현|상호작용|공통)$/;

const COMPLIANCE_INLINE = /^준수\s*[•·]/;
const FAIL_INLINE = /^미준수(\s*사례)?(\s*[•·]|$)/;

function normalize(text) {
  return normalizeLine(text);
}

function escapeTableCell(s) {
  return fixKoreanSpacing(s).replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function isNoiseLine(line) {
  if (!line) return true;
  if (PAGE_MARKER.test(line)) return true;
  if (PAGE_FOOTER.test(line)) return true;
  if (PAGE_HEADER.test(line)) return true;
  if (/^·+$/.test(line.replace(/\s/g, ''))) return true;
  if (/^목차$/.test(line)) return true;
  if (isTocLine(line)) return true;
  if (/^□/.test(line)) return true;
  if (line === 'P' || line === 'F' || line === 'E' || line === 'N/A') return true;
  return false;
}

function isTocLine(line) {
  return /·{3,}/.test(line) && /\d+\s*$/.test(line);
}

function isStructuralLine(line) {
  if (SECTION_MAIN.test(line)) return true;
  if (SECTION_NUM.test(line)) return true;
  if (SECTION_ALPHA.test(line)) return true;
  if (CRITERIA_ID.test(line)) return true;
  if (CHECKLIST_HEADER.test(line)) return true;
  if (GUIDE_CATEGORY.test(line)) return true;
  if (SECTION_SUB.test(line) && line.length < 60 && !line.includes('–')) return true;
  return false;
}

function isMergeBoundary(line) {
  if (isStructuralLine(line)) return true;
  if (CHECKLIST_HEADER.test(line)) return true;
  if (CHECKLIST_ITEM.test(line)) return true;
  if (GUIDE_CATEGORY.test(line)) return true;
  if (line === '점검' || line === '준수' || line === '미준수' || line === '근거') return true;
  if (line === '화면/요소' || line === '절차/방법') return true;
  if (/^‣/.test(line)) return true;
  return false;
}

function isFalseChecklistItem(text) {
  return /^(체크리스트|준수\s*기준)\s/.test(text) || /^부록\s/.test(text);
}

function isProcedureBoundary(line) {
  if (line === '점검' || line === '근거' || line === '화면/요소') return true;
  if (line === '준수' || COMPLIANCE_INLINE.test(line)) return true;
  if (line === '미준수' || line.startsWith('미준수')) return true;
  if (CRITERIA_ID.test(line) || SECTION_MAIN.test(line)) return true;
  return false;
}

async function extractFullText() {
  const buf = await fs.readFile(PDF_PATH);
  const parser = new PDFParse({ data: buf });
  const result = await parser.getText();
  await parser.destroy();

  const pages = [];
  for (const p of result.pages) {
    const raw = p.text
      .split('\n')
      .map(normalize)
      .filter((l) => l && !isNoiseLine(l));
    const lines = mergePageLines(raw, isMergeBoundary);
    pages.push({ num: p.num, lines });
  }
  return pages;
}

function parseChecklistSection(lines) {
  const md = [];
  let lastMain = '';
  let lastSub = '';
  let lastNum = '';
  let lastAlpha = '';
  let pendingGuide = null;
  let pendingCategory = null;
  let tableOpen = false;

  const flushTable = () => {
    tableOpen = false;
  };

  const openTable = () => {
    if (!tableOpen) {
      md.push('', '| # | 체크리스트 | P | F | E | N/A |', '|---|-----------|:-:|:-:|:-:|-----|');
      tableOpen = true;
    }
  };

  const readItemText = (startLine, startIdx) => {
    let text = startLine.replace(/\s+P(\s+F(\s+E(\s+N\/A)?)?)?\s*$/i, '').trim();
    let j = startIdx + 1;
    while (j < lines.length) {
      const nl = lines[j];
      if (CHECKLIST_ITEM.test(nl) || CHECKLIST_HEADER.test(nl)) break;
      if (SECTION_MAIN.test(nl) || SECTION_SUB.test(nl) || SECTION_NUM.test(nl)) break;
      if (SECTION_ALPHA.test(nl) || GUIDE_CATEGORY.test(nl)) break;
      if (/^P$|^F$|^E$|^N\/A$|^□/.test(nl)) break;
      text = joinKoreanLines(text, nl);
      j++;
    }
    return { text: fixKoreanSpacing(text), nextIdx: j };
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const main = SECTION_MAIN.exec(line);
    if (main) {
      flushTable();
      const t = `${main[1]}. ${main[2].replace(/\s+/g, ' ')}`;
      if (t !== lastMain) {
        md.push('', `## ${t}`, '');
        lastMain = t;
        lastSub = lastNum = lastAlpha = '';
      }
      pendingGuide = pendingCategory = null;
      continue;
    }

    const sub = SECTION_SUB.exec(line);
    if (sub && line.length < 60 && !line.includes('–')) {
      flushTable();
      const t = `### ${sub[1]}. ${sub[2]}`;
      if (t !== lastSub) {
        md.push('', t, '');
        lastSub = t;
        lastNum = lastAlpha = '';
      }
      pendingGuide = pendingCategory = null;
      continue;
    }

    const num = SECTION_NUM.exec(line);
    if (num) {
      flushTable();
      const t = `#### ${num[1]}) ${num[2]}`;
      if (t !== lastNum) {
        md.push('', t, '');
        lastNum = t;
        lastAlpha = '';
      }
      pendingGuide = pendingCategory = null;
      continue;
    }

    const alpha = SECTION_ALPHA.exec(line);
    if (alpha) {
      const t = `##### ${alpha[1]}) ${alpha[2]}`;
      if (t !== lastAlpha) {
        md.push('', t, '');
        lastAlpha = t;
      }
      pendingGuide = pendingCategory = null;
      continue;
    }

    if (CHECKLIST_HEADER.test(line)) {
      pendingGuide = pendingCategory = null;
      continue;
    }

    if (GUIDE_CATEGORY.test(line)) {
      pendingCategory = line;
      pendingGuide = null;
      continue;
    }

    const m = CHECKLIST_ITEM.exec(line);
    if (m) {
      const { text, nextIdx } = readItemText(m[2], i);
      i = nextIdx - 1;
      if (isFalseChecklistItem(text)) continue;
      openTable();
      if (pendingGuide) {
        md.push('');
        const prefix = pendingCategory ? `*${pendingCategory}: ` : '*';
        md.push(`${prefix}${escapeTableCell(pendingGuide)}*`);
        pendingGuide = null;
      }
      md.push(`| ${m[1]} | ${escapeTableCell(text)} | ☐ | ☐ | ☐ | ☐ |`);
      continue;
    }

    if (!pendingGuide && !isStructuralLine(line)) {
      pendingGuide = fixKoreanSpacing(line);
    }
  }

  flushTable();
  md.push('');
  return md;
}

function parseCriteriaSection(lines) {
  const md = [];
  let i = 0;
  let lastMain = '';
  let lastSub = '';
  let lastNum = '';
  let lastAlpha = '';

  while (i < lines.length) {
    const line = lines[i];

    const main = SECTION_MAIN.exec(line);
    if (main) {
      const t = `## ${main[1]}. ${main[2].replace(/\s+/g, ' ')}`;
      if (t !== lastMain) {
        md.push('', t, '');
        lastMain = t;
        lastSub = lastNum = lastAlpha = '';
      }
      i++;
      continue;
    }

    const sub = SECTION_SUB.exec(line);
    if (sub && line.length < 60 && !line.includes('–')) {
      const t = `### ${sub[1]}. ${sub[2]}`;
      if (t !== lastSub) {
        md.push('', t, '');
        lastSub = t;
        lastNum = lastAlpha = '';
      }
      i++;
      continue;
    }

    const num = SECTION_NUM.exec(line);
    if (num) {
      const t = `#### ${num[1]}) ${num[2]}`;
      if (t !== lastNum) {
        md.push('', t, '');
        lastNum = t;
        lastAlpha = '';
      }
      i++;
      continue;
    }

    const alpha = SECTION_ALPHA.exec(line);
    if (alpha) {
      const t = `##### ${alpha[1]}) ${alpha[2]}`;
      if (t !== lastAlpha) {
        md.push('', t, '');
        lastAlpha = t;
      }
      i++;
      continue;
    }

    const hdr = CRITERIA_ID.exec(line);
    if (hdr) {
      const block = parseOneCriteriaBlock(lines, i);
      md.push(renderCriteriaBlock(block.block));
      i = block.nextIdx;
      continue;
    }

    i++;
  }
  return md;
}

function parseComplianceFromLine(line) {
  if (COMPLIANCE_INLINE.test(line)) return line.replace(/^준수\s*[•·]?\s*/, '').trim();
  return line.trim();
}

function parseOneCriteriaBlock(lines, startIdx) {
  const block = {
    id: '',
    title: '',
    screen: [],
    procedure: [],
    compliance: '',
    failExamples: [],
    guideline: '',
  };

  let i = startIdx;
  const hdr = CRITERIA_ID.exec(lines[i]);
  block.id = hdr[1];
  i++;

  const titleParts = [];
  while (i < lines.length) {
    const l = lines[i];
    if (l === '점검' || CRITERIA_ID.test(l) || SECTION_MAIN.test(l)) break;
    titleParts.push(l);
    i++;
  }
  block.title = fixKoreanSpacing(titleParts.join(' ').trim());

  while (i < lines.length) {
    const l = lines[i];
    if (CRITERIA_ID.test(l) || SECTION_MAIN.test(l)) break;

    if (l === '점검') {
      i++;
      if (i < lines.length && lines[i] === '화면/요소') {
        i++;
        while (i < lines.length && /^‣/.test(lines[i])) {
          block.screen.push(fixKoreanSpacing(lines[i].replace(/^‣\s*/, '')));
          i++;
        }
        continue;
      }
      if (i < lines.length && lines[i] === '절차/방법') {
        i++;
        while (i < lines.length) {
          const pl = lines[i];
          if (isProcedureBoundary(pl)) {
            if (pl === '준수' || COMPLIANCE_INLINE.test(pl)) {
              block.compliance = parseComplianceFromLine(
                pl === '준수' && i + 1 < lines.length && !COMPLIANCE_INLINE.test(lines[i + 1])
                  ? lines[i + 1]
                  : pl
              );
              i += pl === '준수' && !COMPLIANCE_INLINE.test(pl) ? 2 : 1;
            } else if (pl === '미준수' || pl.startsWith('미준수')) {
              i = consumeFailExamples(lines, i, block);
            } else if (pl === '근거') {
              i = consumeGuideline(lines, i, block);
            }
            break;
          }
          block.procedure.push(fixKoreanSpacing(pl));
          i++;
        }
        continue;
      }
      continue;
    }

    if (l === '준수' || COMPLIANCE_INLINE.test(l)) {
      block.compliance = parseComplianceFromLine(
        l === '준수' && i + 1 < lines.length && !COMPLIANCE_INLINE.test(lines[i + 1])
          ? lines[i + 1]
          : l
      );
      i += l === '준수' && !COMPLIANCE_INLINE.test(l) ? 2 : 1;
      continue;
    }

    if (l === '미준수' || l.startsWith('미준수')) {
      i = consumeFailExamples(lines, i, block);
      continue;
    }

    if (l === '근거') {
      i = consumeGuideline(lines, i, block);
      continue;
    }

    i++;
  }

  return { block, nextIdx: i };
}

function consumeFailExamples(lines, startI, block) {
  let i = startI + 1;
  if (i < lines.length && lines[i] === '사례') i++;
  while (i < lines.length) {
    const fl = lines[i];
    if (fl === '근거' || fl === '점검' || fl === '준수' || COMPLIANCE_INLINE.test(fl)) break;
    if (CRITERIA_ID.test(fl) || SECTION_MAIN.test(fl)) break;
    if (fl.startsWith('•') || fl.startsWith('-') || /^-\s/.test(fl)) {
      block.failExamples.push(fixKoreanSpacing(fl.replace(/^[•-]\s*/, '')));
    } else if (block.failExamples.length) {
      block.failExamples[block.failExamples.length - 1] = fixKoreanSpacing(
        joinKoreanLines(block.failExamples[block.failExamples.length - 1], fl)
      );
    } else if (fl !== '사례') {
      block.failExamples.push(fixKoreanSpacing(fl));
    }
    i++;
  }
  return i;
}

function consumeGuideline(lines, startI, block) {
  let i = startI + 1;
  const parts = [];
  while (i < lines.length) {
    const gl = lines[i];
    if (CRITERIA_ID.test(gl) || SECTION_MAIN.test(gl) || gl === '점검') break;
    if (gl === '미준수' || gl.startsWith('미준수')) break;
    parts.push(gl);
    i++;
  }
  block.guideline = fixKoreanSpacing(parts.join(' ').trim());
  return i;
}

function renderCriteriaBlock(block) {
  const lines = [`###### [${block.id}]`, ''];
  if (block.title) lines.push(block.title, '');
  if (block.screen.length) {
    lines.push('- **점검 화면/요소**:');
    for (const s of block.screen) lines.push(`  - ${s}`);
    lines.push('');
  }
  if (block.procedure.length) {
    lines.push('- **점검 절차/방법**:');
    for (const p of block.procedure) lines.push(`  - ${p}`);
    lines.push('');
  }
  if (block.compliance) lines.push(`- **준수**: ${block.compliance}`, '');
  if (block.failExamples.length) {
    lines.push('- **미준수 사례**:');
    for (const f of block.failExamples) lines.push(`  - ${f}`);
    lines.push('');
  }
  if (block.guideline) lines.push(`- **근거 가이드라인**: ${block.guideline}`, '');
  return lines.join('\n');
}

function parseProseSection(lines, { appendix = false } = {}) {
  const md = [];
  let i = 0;
  let lastMain = '';
  let lastSub = '';
  let lastNum = '';
  let lastAlpha = '';

  while (i < lines.length) {
    const line = lines[i];

    const main = SECTION_MAIN.exec(line);
    if (main) {
      const t = `## ${main[1]}. ${main[2].replace(/\s+/g, ' ')}`;
      if (t !== lastMain) {
        md.push('', t, '');
        lastMain = t;
        lastSub = lastNum = lastAlpha = '';
      }
      i++;
      continue;
    }

    const sub = SECTION_SUB.exec(line);
    if (sub && line.length < 80 && !line.includes('–')) {
      const t = `### ${sub[1]}. ${sub[2]}`;
      if (t !== lastSub) {
        md.push('', t, '');
        lastSub = t;
        lastNum = lastAlpha = '';
      }
      i++;
      continue;
    }

    const num = SECTION_NUM.exec(line);
    if (num) {
      const t = `#### ${num[1]}) ${num[2]}`;
      if (t !== lastNum) {
        md.push('', t, '');
        lastNum = t;
        lastAlpha = '';
      }
      i++;
      continue;
    }

    const alpha = SECTION_ALPHA.exec(line);
    if (alpha) {
      const t = `##### ${alpha[1]}) ${alpha[2]}`;
      if (t !== lastAlpha) {
        md.push('', t, '');
        lastAlpha = t;
      }
      i++;
      continue;
    }

    const chunk = [];
    while (i < lines.length) {
      const l = lines[i];
      if (SECTION_MAIN.test(l)) break;
      if (SECTION_SUB.test(l) && l.length < 80 && !l.includes('–')) break;
      if (SECTION_NUM.test(l)) break;
      if (SECTION_ALPHA.test(l)) break;
      chunk.push(l);
      i++;
    }

    if (chunk.length) {
      const text = mergeProseChunk(chunk);
      const segments = appendix ? splitNumberedSteps(text) : [text];
      for (const seg of segments) {
        const p = fixKoreanSpacing(seg);
        if (/^[-•‣]/.test(p) || /^[①②③④⑤]/.test(p)) {
          md.push(`- ${p.replace(/^[-•‣]\s*/, '')}`);
        } else if (/^Ÿ/.test(p)) {
          md.push(`- ${p.replace(/^Ÿ\s*/, '')}`);
        } else if (/^\d+\.\s/.test(p)) {
          md.push(p);
        } else {
          md.push(p);
        }
      }
      md.push('');
    }
  }
  return md;
}

function splitPagesBySection(pages) {
  const sections = { 1: [], 2: [], 3: [], 4: [] };
  let current = null;

  for (const p of pages) {
    if (p.num < 6) continue;
    for (const l of p.lines) {
      const main = SECTION_MAIN.exec(l);
      if (main) {
        current = Number(main[1]);
        if (sections[current]) sections[current].push(l);
        continue;
      }
      if (current && sections[current]) sections[current].push(l);
    }
  }
  return sections;
}

async function convert() {
  const pages = await extractFullText();
  const sections = splitPagesBySection(pages);

  const md = [];
  md.push('# 디지털 정부 서비스 UI/UX 가이드라인 자체 검증 체크리스트');
  md.push('');
  md.push('> **출처**: 행정안전부 디지털 정부 UI/UX 가이드라인 | **버전**: 2024.11');
  md.push(
    '> **원본 PDF**: [디지털 정부 서비스 UIUX 가이드라인 자체 검증 체크리스트.pdf](./%EB%94%94%EC%A7%80%ED%84%B8%20%EC%A0%95%EB%B6%80%20%EC%84%9C%EB%B9%84%EC%8A%A4%20UIUX%20%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8%20%EC%9E%90%EC%B2%B4%20%EA%B2%80%EC%A6%9D%20%EC%B2%B4%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8A%B8.pdf)'
  );
  md.push('');
  md.push('## 목차');
  md.push('');
  md.push('- [1. 개요](#1-개요)');
  md.push('- [2. 체크리스트](#2-체크리스트)');
  md.push('- [3. 준수 기준](#3-준수-기준)');
  md.push('- [4. 부록](#4-부록)');
  md.push('');

  md.push(...parseProseSection(sections[1]));
  md.push(...parseChecklistSection(sections[2]));
  md.push(...parseCriteriaSection(sections[3]));
  md.push(...parseProseSection(sections[4], { appendix: true }));

  md.push('');
  md.push('---');
  md.push('');
  md.push('> PDF에 포함된 이미지·스크린샷·예시 그림은 텍스트 변환에서 제외되었습니다. 원본 PDF를 참조하세요.');
  md.push('');

  let content = md.join('\n').replace(/\n{4,}/g, '\n\n\n');
  content = fixKoreanSpacing(content);
  await fs.writeFile(OUT_PATH, content, 'utf8');

  const broken = countBrokenKorean(content);
  const stats = {
    ok: true,
    output: OUT_PATH,
    lines: content.split('\n').length,
    chars: content.length,
    checklistRows: (content.match(/\| \d+ \|/g) || []).length,
    criteriaBlocks: (content.match(/^###### \[/gm) || []).length,
    brokenKoreanCount: broken.total,
    brokenKoreanHits: broken.hits,
    section1Lines: sections[1].length,
    section2Lines: sections[2].length,
    section3Lines: sections[3].length,
    section4Lines: sections[4].length,
  };
  console.log(JSON.stringify(stats, null, 2));
}

convert().catch((err) => {
  console.error(err);
  process.exit(1);
});
