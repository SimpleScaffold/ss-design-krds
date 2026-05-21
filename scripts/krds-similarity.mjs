#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { evaluateRule, evaluateReferenceClassCoverage } from './krds-html-rules.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const args = { target: null, reference: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--target' && argv[i + 1]) {
      args.target = argv[++i];
    } else if (argv[i] === '--reference' && argv[i + 1]) {
      args.reference = argv[++i];
    } else if (!argv[i].startsWith('-') && !args.target) {
      args.target = argv[i];
    } else if (!argv[i].startsWith('-') && args.target && !args.reference) {
      args.reference = argv[i];
    }
  }
  return args;
}

const { target: targetArg, reference: referenceArg } = parseArgs(process.argv.slice(2));
const candidatePath = targetArg
  ? path.resolve(process.cwd(), targetArg)
  : path.join(root, 'experiment/sample-page/index.html');
const referencePath = referenceArg
  ? path.resolve(process.cwd(), referenceArg)
  : path.join(root, 'assets/krds/html/code/header.html');

if (!candidatePath) {
  console.error('Usage: node scripts/krds-similarity.mjs --target <candidate-html> [--reference <reference-html>]');
  process.exit(1);
}

const ruleset = JSON.parse(await fs.readFile(path.join(root, 'scripts/krds-ruleset.json'), 'utf8'));
const candidate = await fs.readFile(candidatePath, 'utf8');
let reference = '';
try {
  reference = await fs.readFile(referencePath, 'utf8');
} catch {
  reference = '';
}

const checks = [];
const add = (name, pass, weight = 1) => checks.push({ name, pass, weight });

for (const { ruleId, weight } of ruleset.checks) {
  const { pass } = evaluateRule(ruleId, candidate);
  add(ruleId, pass, weight);
}

for (const extra of ruleset.extraChecks || []) {
  if (extra.type === 'reference-class-coverage') {
    const cov = evaluateReferenceClassCoverage(candidate, reference, extra.minRatio ?? 0.1);
    add(extra.id, cov.pass, extra.weight ?? 1);
  }
}

const totalWeight = checks.reduce((n, c) => n + c.weight, 0);
const passedWeight = checks.reduce((n, c) => n + (c.pass ? c.weight : 0), 0);
const threshold = ruleset.threshold ?? 95;
const score = Number(((passedWeight / totalWeight) * 100).toFixed(2));

const refCov = evaluateReferenceClassCoverage(candidate, reference, 0.1);

const report = {
  target: candidatePath,
  score,
  threshold,
  pass: score >= threshold,
  summary: {
    totalChecks: checks.length,
    passed: checks.filter((c) => c.pass).length,
    failed: checks.filter((c) => !c.pass).map((c) => c.name)
  },
  checks,
  reference: {
    path: referencePath,
    krdsPrefixedClassCount: refCov.refClassCount,
    krdsPrefixedClassCoverage: Number(refCov.ratio.toFixed(4))
  }
};

console.log(JSON.stringify(report, null, 2));
process.exit(report.pass ? 0 : 1);
