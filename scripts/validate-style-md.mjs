#!/usr/bin/env node
/**
 * Validates KRDS style guide Markdown files (docs/style/*.md)
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { STYLE_PAGES } from './krds-style-to-md.mjs';
import {
  STYLE_DIR,
  STYLE_PAGE_EXPECTATIONS,
  validateStyleMdHeader,
} from './style-guide-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const STYLE_ABS = path.join(root, STYLE_DIR);

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

async function main() {
  const indexPath = path.join(STYLE_ABS, 'index.md');
  addCheck('style index exists', await exists(indexPath), `${STYLE_DIR}/index.md`);

  if (await exists(indexPath)) {
    const indexContent = await fs.readFile(indexPath, 'utf8');
    for (const page of STYLE_PAGES) {
      addCheck(
        `index links:${page.filename}`,
        indexContent.includes(`./${page.filename}`) || indexContent.includes(page.filename),
        page.filename
      );
      addCheck(
        `index source:${page.id}`,
        indexContent.includes(page.url),
        page.url
      );
    }
    addCheck('index reading order', indexContent.includes('## 읽기 순서'), 'reading order section');
  }

  for (const page of STYLE_PAGES) {
    const filePath = path.join(STYLE_ABS, page.filename);
    const rel = `${STYLE_DIR}/${page.filename}`;
    const expect = STYLE_PAGE_EXPECTATIONS[page.filename] || {};

    addCheck(`exists:${page.filename}`, await exists(filePath), rel);
    if (!(await exists(filePath))) continue;

    const content = await fs.readFile(filePath, 'utf8');

    addCheck(
      `header:${page.filename}`,
      validateStyleMdHeader(content, page),
      '출처·등록일·목차'
    );

    const minLength = expect.minLength ?? 2000;
    addCheck(`length:${page.filename}`, content.length >= minLength, `${content.length}>=${minLength}`);

    for (const keyword of expect.keywords || []) {
      addCheck(`keyword:${page.filename}:${keyword}`, content.includes(keyword), keyword);
    }

    const h2Count = (content.match(/^## /gm) || []).length;
    addCheck(
      `sections:${page.filename}`,
      h2Count >= (expect.minSections ?? 3),
      String(h2Count)
    );

    const tableRows = (content.match(/^\| /gm) || []).length;
    addCheck(
      `tables:${page.filename}`,
      tableRows >= (expect.minTableRows ?? 2),
      String(tableRows)
    );
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
