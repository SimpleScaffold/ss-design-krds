#!/usr/bin/env node
/**
 * L1 static checklist runner — HTML string / regex DOM checks
 */
import { promises as fs } from 'node:fs';
import { loadRulesDir, resolveTargetPath } from './checklist-lib.mjs';
import { evaluateStaticRules } from './krds-html-rules.mjs';

export async function loadHtml(targetArg) {
  const p = resolveTargetPath(targetArg);
  const html = await fs.readFile(p, 'utf8');
  return { path: p, html };
}

export async function runStaticChecklist(targetArg, { tier = ['gov', 'self', 'common'] } = {}) {
  const { path: targetPath, html } = await loadHtml(targetArg);
  const rules = (await loadRulesDir()).filter((r) => r.engine === 'static');
  const results = await evaluateStaticRules(html, { ruleIds: rules.map((r) => r.id), tier });

  return {
    target: targetPath,
    engine: 'static',
    summary: {
      total: results.length,
      passed: results.filter((r) => r.pass).length,
      failed: results.filter((r) => !r.pass && !r.error).length,
      errors: results.filter((r) => r.error).length
    },
    results
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const target = process.argv[2];
  const out = await runStaticChecklist(target);
  console.log(JSON.stringify(out, null, 2));
  process.exit(out.summary.failed > 0 ? 1 : 0);
}
