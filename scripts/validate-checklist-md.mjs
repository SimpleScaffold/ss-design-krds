#!/usr/bin/env node
/**
 * Validates PDF-derived checklist Markdown quality
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { countBrokenKorean, fixKoreanSpacing } from './checklist-text-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const MD_PATH = path.join(root, 'docs/디지털-정부-서비스-uiux-가이드라인-자체-검증-체크리스트.md');
const PDF_PATH = path.join(root, 'docs/디지털 정부 서비스 UIUX 가이드라인 자체 검증 체크리스트.pdf');
const CATALOG_PATH = path.join(root, 'resources/krds/checklist/official-checklist.json');

const checks = [];

function addCheck(name, pass, detail) {
  checks.push({ name, pass, detail });
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

function extractChecklistContent(content) {
  const start = content.indexOf('## 2. 체크리스트');
  const end = content.indexOf('## 4. 부록');
  if (start < 0) return '';
  const endIdx = end >= 0 ? end : content.length;
  return content.slice(start, endIdx);
}

function normalizeForMatch(text) {
  return fixKoreanSpacing(text).replace(/\s+/g, '');
}

function titleMatchesContent(title, haystack, normalizedHaystack) {
  const key = title.slice(0, Math.min(20, title.length));
  if (haystack.includes(key)) return true;
  const normalizedKey = normalizeForMatch(key);
  if (normalizedKey.length >= 8 && normalizedHaystack.includes(normalizedKey)) return true;
  const shortKey = normalizeForMatch(title.slice(0, 12));
  return shortKey.length >= 8 && normalizedHaystack.includes(shortKey);
}

async function main() {
  addCheck('md file exists', await exists(MD_PATH), MD_PATH);

  if (!(await exists(MD_PATH))) {
    printResult();
    return;
  }

  const content = await fs.readFile(MD_PATH, 'utf8');
  const mdStat = await fs.stat(MD_PATH);
  const pdfStat = await exists(PDF_PATH) ? await fs.stat(PDF_PATH) : null;

  const sections = (content.match(/^## [1-4]\./gm) || []).length;
  addCheck('main sections >= 4', sections >= 4, String(sections));

  const checklistRows = (content.match(/\| \d+ \|/g) || []).length;
  addCheck('checklist rows >= 270', checklistRows >= 270, String(checklistRows));

  const criteriaBlocks = (content.match(/^###### \[/gm) || []).length;
  addCheck('criteria blocks >= 330', criteriaBlocks >= 330, String(criteriaBlocks));

  const broken = countBrokenKorean(content);
  addCheck('broken korean patterns == 0', broken.total === 0, JSON.stringify(broken.hits));

  if (pdfStat) {
    const fresh = mdStat.mtimeMs >= pdfStat.mtimeMs - 60000;
    addCheck('md fresh vs pdf', fresh, `${mdStat.mtimeMs} vs ${pdfStat.mtimeMs}`);
  } else {
    addCheck('pdf source exists', false, PDF_PATH);
  }

  if (await exists(CATALOG_PATH)) {
    const catalog = JSON.parse(await fs.readFile(CATALOG_PATH, 'utf8'));
    const checklistContent = extractChecklistContent(content);
    const normalizedContent = normalizeForMatch(checklistContent);
    const sample = catalog.items.filter((_, idx) => idx % 16 === 0).slice(0, 20);
    let found = 0;
    for (const item of sample) {
      if (titleMatchesContent(item.title, checklistContent, normalizedContent)) found++;
    }
    addCheck('catalog title sample coverage >= 15/20', found >= 15, `${found}/20`);
  }

  printResult();
}

function printResult() {
  const failed = checks.filter((c) => !c.pass);
  const result = {
    ok: failed.length === 0,
    summary: {
      total: checks.length,
      passed: checks.length - failed.length,
      failed: failed.length,
    },
    checks,
  };
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.ok ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
