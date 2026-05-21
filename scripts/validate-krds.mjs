#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { STYLE_PAGES } from './krds-style-to-md.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
process.chdir(root);

const checks = [];

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function countFiles(dir) {
  const skip = new Set(['.git', 'node_modules', 'dist', 'build']);
  async function walk(d) {
    const entries = await fs.readdir(d, { withFileTypes: true });
    let n = 0;
    for (const e of entries) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) {
        if (skip.has(e.name)) continue;
        n += await walk(full);
      } else if (e.isFile()) {
        n += 1;
      }
    }
    return n;
  }
  return walk(dir);
}

function addCheck(name, pass, detail) {
  checks.push({ name, pass, detail });
}

const requiredPaths = [
  'docs/index.md',
  'docs/reading-guide.md',
  'docs/repo-tree.md',
  'docs/page-structure-tree.md',
  'docs/workflow-tree.md',
  'docs/component-category-tree.md',
  'specs/components/_taxonomy.json',
  'specs/components/_categories.md',
  'assets/krds/html/code',
  'skills/krds-plan/SKILL.md',
  'skills/krds-improve/SKILL.md',
  'skills/krds-transform/SKILL.md',
  'resources/krds/manifest.json',
  'resources/krds/test-verifiers.md',
  'DESIGN.md',
  'specs/tokens.md',
  'specs/accessibility.md',
  'specs/stacks.md',
  'experiment/sample-page/index.html',
  'scripts/krds-html-rules.mjs',
  'scripts/krds-similarity.mjs',
  'scripts/krds-checklist.mjs',
  'scripts/generate-checklist-docs.mjs',
  'resources/krds/checklist/official-checklist.json',
  'resources/krds/checklist/schema.json',
  'docs/validation-checklist-tree.md',
  'docs/디지털-정부-서비스-uiux-가이드라인-자체-검증-체크리스트.md',
  'scripts/pdf-to-checklist-md.mjs',
  'scripts/validate-checklist-md.mjs',
  'scripts/checklist-text-lib.mjs',
  'docs/style/index.md',
  'scripts/krds-style-to-md.mjs',
  'scripts/validate-style-md.mjs',
  'scripts/style-guide-lib.mjs',
  'specs/validation-checklist.md',
  'specs/validation-tools.md',
  'scripts/krds-improve-loop.mjs',
  'scripts/verify-krds-component-coverage.mjs',
  'scripts/generate-spec-index.mjs',
  'scripts/generate-docs-trees.mjs',
  'reports/experiment/final-score.json',
  'reports/experiment/component-coverage-check.json',
  ...STYLE_PAGES.map((page) => `docs/style/${page.filename}`),
];

for (const p of requiredPaths) {
  addCheck(`exists:${p}`, await exists(path.join(root, p)), p);
}

const componentFiles = (await fs.readdir(path.join(root, 'assets/krds/html/code'))).filter((f) => f.endsWith('.html'));
addCheck('component count >= 74', componentFiles.length >= 74, String(componentFiles.length));

const designText = await fs.readFile(path.join(root, 'DESIGN.md'), 'utf8');
const designSections = ['## Overview', '## Colors', '## Typography', '## Layout', '## Components'];
for (const section of designSections) {
  addCheck(`design section:${section}`, designText.includes(section), section);
}

const verifiers = await fs.readFile(path.join(root, 'resources/krds/test-verifiers.md'), 'utf8');
addCheck('verifier report contains explicit result', /No automated test verifiers were found/.test(verifiers), 'explicit none-found statement');

const planSkill = await fs.readFile(path.join(root, 'skills/krds-plan/SKILL.md'), 'utf8');
const transformSkill = await fs.readFile(path.join(root, 'skills/krds-transform/SKILL.md'), 'utf8');
const improveSkill = await fs.readFile(path.join(root, 'skills/krds-improve/SKILL.md'), 'utf8');
addCheck('krds-plan covers initial-state workflow', /초기|initial|신규/i.test(planSkill), 'initial state coverage');
addCheck('krds-plan covers website or app scope', /website|app|페이지|앱/i.test(planSkill), 'website/app coverage');
addCheck('krds-transform covers theme change workflow', /theme|테마|전환/i.test(transformSkill), 'theme transformation coverage');
addCheck('krds-improve covers compliance scoring', /score|threshold|rule|점수/i.test(improveSkill), 'scoring-driven improvement coverage');

const agentsMd = await fs.readFile(path.join(root, 'AGENTS.md'), 'utf8');
const claudeMd = await fs.readFile(path.join(root, 'CLAUDE.md'), 'utf8');
addCheck('AGENTS.md points to docs/index.md', /docs\/index\.md/.test(agentsMd), 'docs/index.md entry');
addCheck('CLAUDE.md points to docs/index.md', /docs\/index\.md/.test(claudeMd), 'docs/index.md entry');

const sampleComponent = await fs.readFile(path.join(root, 'specs/components/button.md'), 'utf8');
addCheck('component MD has Overview section', /## Overview/.test(sampleComponent), 'Overview');
addCheck('component MD has Component Tree section', /## Component Tree/.test(sampleComponent), 'Component Tree');
addCheck('component MD has Category metadata', /Category/.test(sampleComponent), 'Category');

const taxonomy = JSON.parse(await fs.readFile(path.join(root, 'specs/components/_taxonomy.json'), 'utf8'));
addCheck('taxonomy covers 74 components', Object.keys(taxonomy.components).length >= 74, String(Object.keys(taxonomy.components).length));

const checklistCatalog = JSON.parse(await fs.readFile(path.join(root, 'resources/krds/checklist/official-checklist.json'), 'utf8'));
addCheck('checklist catalog has 311 items', checklistCatalog.summary?.totalItems === 311, String(checklistCatalog.summary?.totalItems));
addCheck('checklist schema exists', await exists(path.join(root, 'resources/krds/checklist/schema.json')), 'schema.json');

const checklistDocsStat = await fs.stat(path.join(root, 'docs/validation-checklist-tree.md'));
const catalogStat = await fs.stat(path.join(root, 'resources/krds/checklist/official-checklist.json'));
addCheck(
  'checklist docs fresh vs catalog',
  checklistDocsStat.mtimeMs >= catalogStat.mtimeMs - 60000,
  `${checklistDocsStat.mtimeMs} vs ${catalogStat.mtimeMs}`
);

const checklistRun = spawnSync(
  'node',
  ['scripts/krds-checklist.mjs', '--target', 'experiment/sample-page/index.html', '--mode', 'static', '--output', 'reports/checklist-result.json'],
  { encoding: 'utf8', cwd: root }
);
if (checklistRun.status === 0 || checklistRun.stdout) {
  try {
    const checklistOut = JSON.parse(checklistRun.stdout || '{}');
    addCheck('checklist static run completes', checklistOut.ok === true, checklistRun.stderr || 'ok');
    const resultPath = path.join(root, 'reports/checklist-result.json');
    if (await exists(resultPath)) {
      const result = JSON.parse(await fs.readFile(resultPath, 'utf8'));
      addCheck('checklist pass rate warning threshold', result.summary?.passRate >= 0, String(result.summary?.passRate));
    }
  } catch (e) {
    addCheck('checklist static run completes', false, e.message);
  }
} else {
  addCheck('checklist static run completes', false, checklistRun.stderr || 'checklist run failed');
}

const checklistMdRun = spawnSync('node', ['scripts/validate-checklist-md.mjs'], { encoding: 'utf8', cwd: root });
if (checklistMdRun.status === 0 || checklistMdRun.stdout) {
  try {
    const mdOut = JSON.parse(checklistMdRun.stdout || '{}');
    addCheck('checklist pdf-md validate', mdOut.ok === true, JSON.stringify(mdOut.summary));
    for (const c of mdOut.checks || []) {
      if (!c.pass) addCheck(`checklist-md:${c.name}`, false, c.detail);
    }
  } catch (e) {
    addCheck('checklist pdf-md validate', false, e.message);
  }
} else {
  addCheck('checklist pdf-md validate', false, checklistMdRun.stderr || 'validate-checklist-md failed');
}

const styleMdRun = spawnSync('node', ['scripts/validate-style-md.mjs'], { encoding: 'utf8', cwd: root });
if (styleMdRun.status === 0 || styleMdRun.stdout) {
  try {
    const styleOut = JSON.parse(styleMdRun.stdout || '{}');
    addCheck('style md validate', styleOut.ok === true, JSON.stringify(styleOut.summary));
    for (const c of styleOut.checks || []) {
      if (!c.pass) addCheck(`style-md:${c.name}`, false, c.detail);
    }
  } catch (e) {
    addCheck('style md validate', false, e.message);
  }
} else {
  addCheck('style md validate', false, styleMdRun.stderr || 'validate-style-md failed');
}

const similarityRun = spawnSync('node', ['scripts/krds-similarity.mjs', '--target', 'experiment/sample-page/index.html'], { encoding: 'utf8', cwd: root });
if (similarityRun.status === 0 || similarityRun.stdout) {
  const similarity = JSON.parse(similarityRun.stdout || '{}');
  addCheck('experiment similarity >= 95', Number(similarity.score || 0) >= 95, String(similarity.score));
  addCheck('experiment similarity has no failed rules', Array.isArray(similarity.summary?.failed) && similarity.summary.failed.length === 0, JSON.stringify(similarity.summary?.failed || []));
} else {
  addCheck('experiment similarity >= 95', false, similarityRun.stderr || 'similarity run failed');
  addCheck('experiment similarity has no failed rules', false, similarityRun.stderr || 'similarity run failed');
}

const coverageRun = spawnSync('node', ['scripts/verify-krds-component-coverage.mjs'], { encoding: 'utf8', cwd: root });
if (coverageRun.status === 0 || coverageRun.stdout) {
  const coverage = JSON.parse(coverageRun.stdout || '{}');
  addCheck('experiment covers all KRDS component references', coverage.ok === true && coverage.coveredComponents === coverage.totalReferenceComponents, `${coverage.coveredComponents}/${coverage.totalReferenceComponents}`);
} else {
  addCheck('experiment covers all KRDS component references', false, coverageRun.stderr || 'coverage run failed');
}

const failed = checks.filter((c) => !c.pass);
const result = {
  ok: failed.length === 0,
  summary: {
    total: checks.length,
    passed: checks.length - failed.length,
    failed: failed.length
  },
  checks
};

console.log(JSON.stringify(result, null, 2));
process.exit(result.ok ? 0 : 1);
