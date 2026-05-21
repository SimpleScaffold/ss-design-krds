#!/usr/bin/env node
/**
 * Apply KRDS to an existing project, optionally preserving all colors.
 *
 *   node scripts/krds-apply.mjs --target . --stack tailwind --preserve-colors all
 *   node scripts/krds-apply.mjs --target . --preserve-colors all --dry-run
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  detectStack,
  generateBridgeCss,
  scanConsumerColorVars,
  STACK_RECIPES
} from './krds-apply-lib.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const krdsRoot = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const opts = {
    target: process.cwd(),
    stack: null,
    preserveColors: null,
    dryRun: false
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--target' && argv[i + 1]) opts.target = path.resolve(argv[++i]);
    else if (a === '--stack' && argv[i + 1]) opts.stack = argv[++i];
    else if (a === '--preserve-colors' && argv[i + 1]) opts.preserveColors = argv[++i];
    else if (a === '--dry-run') opts.dryRun = true;
    else if (a === '--help' || a === '-h') opts.help = true;
  }
  return opts;
}

function printHelp() {
  console.log(`Usage: krds:apply [options]

Options:
  --target <dir>           Consumer project root (default: cwd)
  --stack tailwind|vanilla|react
  --preserve-colors all    Keep project palette; emit krds-color-bridge.css
  --dry-run                Print planned changes only

Examples:
  npm run krds:apply -- --target ../my-app --stack tailwind --preserve-colors all
  npm run krds:apply -- --target . --preserve-colors all --dry-run
`);
}

async function writeStackGuide(targetDir, stack, recipe, dryRun) {
  const guideName =
    stack === 'react' ? 'krds-react-setup.md' : 'krds-vanilla-setup.md';
  if (stack === 'tailwind') return;

  const body = `# KRDS apply (${stack}) — 색 보존 모드

## CSS import 순서

${recipe.cssImports.map((l) => (stack === 'vanilla' ? `- ${l}` : `\`\`\`css\n${l}\n\`\`\``)).join('\n\n')}

## 에이전트

\`krds-transform\` 스킬에 다음을 지시하세요:

- preserve-colors: all — 기존 hex/CSS 색 변수 변경 금지
- typography, spacing, radius, krds- 구조·landmark만 적용

## 검증 (색상 체크 제외)

\`\`\`bash
node node_modules/ss-design-krds/scripts/krds-checklist.mjs \\
  --target <your-page.html> \\
  --category style.typography,style.shape,style.layout,component \\
  --mode static+browser
\`\`\`

## 접근성

색을 유지하므로 WCAG 명도 대비(매직넘버)는 프로젝트 팔레트 책임입니다.
`;

  const guidePath = path.join(targetDir, guideName);
  if (dryRun) {
    console.log(`[dry-run] would write ${guidePath}`);
    return;
  }
  await fs.writeFile(guidePath, body, 'utf8');
}

async function patchTailwindEntry(targetDir, recipe, dryRun) {
  const candidates = [
    'src/app.css',
    'src/index.css',
    'src/styles/app.css',
    'app/app.css',
    'styles/globals.css',
    'assets/css/app.css'
  ];
  let entry = null;
  for (const rel of candidates) {
    const p = path.join(targetDir, rel);
    try {
      await fs.access(p);
      entry = p;
      break;
    } catch {
      /* continue */
    }
  }

  const block = recipe.cssImports.join('\n');
  const marker = '/* krds:apply preserve-colors */';

  if (!entry) {
    const newPath = path.join(targetDir, 'styles/krds-app.css');
    const content = `${marker}\n${block}\n`;
    if (dryRun) {
      console.log(`[dry-run] would create ${newPath}`);
      return newPath;
    }
    await fs.mkdir(path.dirname(newPath), { recursive: true });
    await fs.writeFile(newPath, content, 'utf8');
    console.log(`Created ${newPath} — add @import to your Tailwind entry.`);
    return newPath;
  }

  let text = await fs.readFile(entry, 'utf8');
  if (text.includes(marker)) {
    console.log(`Already configured: ${entry}`);
    return entry;
  }
  const updated = `${marker}\n${block}\n\n${text}`;
  if (dryRun) {
    console.log(`[dry-run] would prepend KRDS imports to ${entry}`);
    return entry;
  }
  await fs.writeFile(entry, updated, 'utf8');
  console.log(`Updated ${entry}`);
  return entry;
}

async function suggestPackageJson(targetDir, dryRun) {
  const pkgPath = path.join(targetDir, 'package.json');
  let pkg;
  try {
    pkg = JSON.parse(await fs.readFile(pkgPath, 'utf8'));
  } catch {
    return;
  }
  const deps = pkg.devDependencies || {};
  const scripts = pkg.scripts || {};
  const changes = [];
  if (!deps['@simplescaffold/krds-tailwind']) {
    changes.push('devDependencies.@simplescaffold/krds-tailwind');
  }
  if (!scripts['krds:checklist']) {
    changes.push('scripts.krds:checklist');
  }
  if (changes.length === 0) return;

  if (!dryRun) {
    pkg.devDependencies = pkg.devDependencies || {};
    if (!pkg.devDependencies['@simplescaffold/krds-tailwind']) {
      pkg.devDependencies['@simplescaffold/krds-tailwind'] =
        'github:SimpleScaffold/ss-design-krds#main';
    }
    pkg.scripts = pkg.scripts || {};
    if (!pkg.scripts['krds:checklist']) {
      pkg.scripts['krds:checklist'] =
        'node node_modules/ss-design-krds/scripts/krds-checklist.mjs';
    }
    await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
  }
  console.log(
    (dryRun ? '[dry-run] would update ' : 'Updated ') +
      `package.json: ${changes.join(', ')}`
  );
}

async function main() {
  const opts = parseArgs(process.argv);
  if (opts.help) {
    printHelp();
    return;
  }

  if (opts.preserveColors !== 'all') {
    console.error(
      'Currently only --preserve-colors all is supported. Omit flag for full KRDS (use install.sh / README).'
    );
    process.exit(1);
  }

  const stack = opts.stack || (await detectStack(opts.target));
  if (!stack || !STACK_RECIPES[stack]) {
    console.error(
      'Could not detect stack. Pass --stack tailwind|vanilla|react'
    );
    process.exit(1);
  }

  const consumerVars = await scanConsumerColorVars(opts.target);
  const bridgeCss = await generateBridgeCss(krdsRoot, consumerVars, {
    wrapAllPrimitives: true
  });
  const bridgePath = path.join(opts.target, 'krds-color-bridge.css');
  const recipe = STACK_RECIPES[stack];

  console.log(
    JSON.stringify(
      {
        target: opts.target,
        stack,
        preserveColors: opts.preserveColors,
        dryRun: opts.dryRun,
        consumerVarsFound: consumerVars.size,
        recipe: recipe.files
      },
      null,
      2
    )
  );

  if (opts.dryRun) {
    console.log(`[dry-run] would write ${bridgePath} (${bridgeCss.split('\n').length} lines)`);
  } else {
    await fs.writeFile(bridgePath, bridgeCss, 'utf8');
    console.log(`Wrote ${bridgePath}`);
  }

  if (stack === 'tailwind') {
    await patchTailwindEntry(opts.target, recipe, opts.dryRun);
    await suggestPackageJson(opts.target, opts.dryRun);
  } else {
    await writeStackGuide(opts.target, stack, recipe, opts.dryRun);
  }

  const snippetPath = path.join(
    krdsRoot,
    'templates/consumer-CLAUDE.md.snippet'
  );
  console.log(`
Next steps:
  1. Review ${bridgePath} — map var() names to your :root palette
  2. Read ${snippetPath} (KRDS agent rules)
  3. Validate (exclude color): npm run krds:checklist -- --target <page> --category style.typography,style.shape,style.layout,component
  4. 색 보존 시 WCAG 명도 대비(매직넘버)는 프로젝트 팔레트 책임입니다.
`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
