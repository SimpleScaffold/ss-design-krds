#!/usr/bin/env node
/**
 * KRDS official checklist orchestrator — static + browser + manual report
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import {
  parseChecklistArgs,
  loadCatalog,
  filterCatalogItems,
  resolveTargetPath,
  root
} from './checklist-lib.mjs';
import { runStaticChecklist } from './krds-checklist-static.mjs';
import { runBrowserChecklist } from './krds-checklist-browser.mjs';
import { buildItemResults, summarizeItems, toMarkdown } from './krds-checklist-report.mjs';

const args = parseChecklistArgs(process.argv.slice(2));
const modes = args.mode.split('+').map((m) => m.trim());
const catalog = await loadCatalog();
const filtered = filterCatalogItems(catalog.items, { tier: args.tier, category: args.category });
const targetPath = resolveTargetPath(args.target);

const ruleResults = [];
let staticRun = null;
let browserRun = null;

if (modes.includes('static')) {
  staticRun = await runStaticChecklist(args.target, { tier: args.tier });
  ruleResults.push(...staticRun.results);
}

if (modes.includes('browser')) {
  browserRun = await runBrowserChecklist(args.target, { tier: args.tier });
  ruleResults.push(...browserRun.results);
}

const items = buildItemResults(filtered, ruleResults);
const summary = summarizeItems(items);

const report = {
  version: catalog.version,
  target: targetPath,
  tier: args.tier,
  category: args.category,
  mode: args.mode,
  generatedAt: new Date().toISOString(),
  runs: {
    static: staticRun?.summary || null,
    browser: browserRun?.summary || null
  },
  summary,
  items,
  ruleResults
};

const outJson = args.output
  ? path.resolve(process.cwd(), args.output)
  : path.join(root, 'reports/checklist-result.json');

await fs.mkdir(path.dirname(outJson), { recursive: true });
await fs.writeFile(outJson, JSON.stringify(report, null, 2));

const mdPath = outJson.replace(/\.json$/i, '.md');
await fs.writeFile(mdPath, toMarkdown(report));

console.log(
  JSON.stringify(
    {
      ok: true,
      output: outJson,
      markdown: mdPath,
      summary: report.summary,
      browserSkipped: browserRun?.skipped || false
    },
    null,
    2
  )
);

process.exit(summary.counts.F > 0 ? 1 : 0);
