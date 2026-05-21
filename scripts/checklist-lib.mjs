#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

export function parseChecklistArgs(argv) {
  const args = {
    target: null,
    tier: ['gov', 'self', 'common'],
    category: 'all',
    mode: 'static+browser',
    output: null,
    pages: null
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--target' && argv[i + 1]) args.target = argv[++i];
    else if (a === '--tier' && argv[i + 1]) args.tier = argv[++i].split(',').map((s) => s.trim());
    else if (a === '--category' && argv[i + 1]) args.category = argv[++i];
    else if (a === '--mode' && argv[i + 1]) args.mode = argv[++i];
    else if (a === '--output' && argv[i + 1]) args.output = argv[++i];
    else if (a === '--pages' && argv[i + 1]) args.pages = argv[++i];
    else if (!a.startsWith('-') && !args.target) args.target = a;
  }
  return args;
}

export async function loadCatalog() {
  const p = path.join(root, 'resources/krds/checklist/official-checklist.json');
  return JSON.parse(await fs.readFile(p, 'utf8'));
}

export async function loadRulesDir() {
  const dir = path.join(root, 'scripts/checklist-rules');
  const files = (await fs.readdir(dir)).filter((f) => f.endsWith('.json'));
  const rules = [];
  for (const f of files) {
    const data = JSON.parse(await fs.readFile(path.join(dir, f), 'utf8'));
    if (Array.isArray(data.rules)) rules.push(...data.rules);
  }
  return rules;
}

export function filterCatalogItems(items, { tier, category }) {
  return items.filter((it) => {
    const tierMatch = it.tier.some((t) => tier.includes(t));
    if (!tierMatch) return false;
    if (category === 'all') return true;
    return it.category === category || it.category.startsWith(category);
  });
}

export function suggestNa(item, context = {}) {
  const naWhen = item.automation?.naWhen || [];
  for (const cond of naWhen) {
    if (context[cond]) return true;
  }
  if (item.tier.includes('gov') && !context.tierGov && context.tierFilter?.includes('gov') === false) {
    // tier-only items excluded by filter handled upstream
  }
  return false;
}

export function toVerdict(pass, na = false, exception = false) {
  if (na) return 'N/A';
  if (exception) return 'E';
  return pass ? 'P' : 'F';
}

export function resolveTargetPath(targetArg) {
  if (!targetArg) return path.join(root, 'experiment/sample-page/index.html');
  return path.isAbsolute(targetArg) ? targetArg : path.resolve(process.cwd(), targetArg);
}

export { root };
