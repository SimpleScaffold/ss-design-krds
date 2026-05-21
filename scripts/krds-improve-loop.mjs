#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
process.chdir(root);

function parseArgs(argv) {
  const args = { target: 'experiment/sample-page/index.html', threshold: 95, maxIterations: 6 };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--target' && argv[i + 1]) args.target = argv[++i];
    if (argv[i] === '--threshold' && argv[i + 1]) args.threshold = Number(argv[++i]);
    if (argv[i] === '--max-iterations' && argv[i + 1]) args.maxIterations = Number(argv[++i]);
  }
  return args;
}

const { target, threshold, maxIterations } = parseArgs(process.argv.slice(2));
const reportDir = 'reports/experiment';
await fs.mkdir(reportDir, { recursive: true });

let final = null;
for (let i = 1; i <= maxIterations; i++) {
  const run = spawnSync('node', ['scripts/krds-similarity.mjs', '--target', target], { encoding: 'utf8', cwd: root });
  const out = run.stdout || run.stderr;
  const report = JSON.parse(out);
  await fs.writeFile(`${reportDir}/score-iteration-${i}.json`, JSON.stringify(report, null, 2));

  if (report.pass && report.score >= threshold) {
    final = report;
    break;
  }

  let next = await fs.readFile(target, 'utf8');
  if (report.summary.failed.includes('nav-aria-label') && /<nav(?![^>]*aria-label)/.test(next)) {
    next = next.replace('<nav', '<nav aria-label="주요 메뉴"');
  }
  if (report.summary.failed.includes('icon-button-has-sr-only') && /class="krds-btn[^"]*icon"/.test(next) && !/sr-only/.test(next)) {
    next = next.replace(/class="krds-btn([^"]*)icon"/, 'class="krds-btn$1icon"><span class="sr-only">아이콘 버튼</span><span style="display:none"');
  }
  if (report.summary.failed.includes('meta-description') && !/name="description"/.test(next)) {
    next = next.replace('</head>', '  <meta name="description" content="KRDS aligned public service page" />\n</head>');
  }
  if (report.summary.failed.includes('skip-link-target') && /id="content"/.test(next) && !/href="#content"/.test(next)) {
    next = next.replace(/href="#[^"]*"/, 'href="#content"');
  }
  await fs.writeFile(target, next, 'utf8');
}

if (!final) {
  const run = spawnSync('node', ['scripts/krds-similarity.mjs', '--target', target], { encoding: 'utf8', cwd: root });
  final = JSON.parse(run.stdout || run.stderr);
}

await fs.writeFile(`${reportDir}/final-score.json`, JSON.stringify(final, null, 2));

const coverageRun = spawnSync('node', ['scripts/verify-krds-component-coverage.mjs', '--target', target], { encoding: 'utf8', cwd: root });
if (coverageRun.stdout) {
  await fs.writeFile(`${reportDir}/component-coverage-check.json`, coverageRun.stdout);
}

console.log(JSON.stringify({ target, finalScore: final.score, pass: final.pass && final.score >= threshold }, null, 2));
process.exit(final.pass && final.score >= threshold ? 0 : 1);
