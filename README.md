# ss-design-krds

AI agents skill bundle and validation harness for building [KRDS](https://www.krds.go.kr/html/site/index.html)-aligned websites and app views.

English | [한국어](README.ko.md)

## AI Agent Entry Point

**[`docs/index.md`](docs/index.md)** — MD knowledge base hub. Start here before any KRDS UI work.

```text
docs/
├── index.md                      ← ★ start here
├── reading-guide.md              ← scenario-based reading order
├── repo-tree.md                  ← repository tree
├── page-structure-tree.md        ← page DOM hierarchy
├── workflow-tree.md              ← plan/transform/improve
├── validation-checklist-tree.md  ← official 311-item checklist
├── component-category-tree.md    ← KRDS 10 families, 74 components
└── style/                        ← KRDS official style guide (9 MD pages)
```

## Style Guide

Official KRDS style pages (color, typography, shape, etc.) live in [`docs/style/`](docs/style/index.md).

| What | Where | Purpose |
|------|-------|---------|
| Style knowledge | `docs/style/` | AI reads color, typography, layout rules first |
| Token summary | `specs/tokens.md` | Quick reference; details in `docs/style/` |
| Page validation | `npm run krds:checklist` | 21 style items (of 311) via browser rules |
| Shared thresholds | `scripts/style-guide-lib.mjs` | gov 17px, line-height 1.5, radius 2–12px |

Flow: `docs/style/` → `style-guide-lib.mjs` → checklist browser rules · MD validation

## What It Is

ss-design-krds turns the [KRDS HTML Component Kit](https://github.com/KRDS-uiux/krds-uiux) into a repeatable agent workflow:

1. **`krds-plan`** — plan the interface from scratch
2. **`krds-transform`** — retheme existing UI to KRDS rules
3. **`krds-improve`** — validate and iterate until score ≥ 95

Includes 74 vendored HTML components, Markdown specs (HTML + Tailwind examples), **`@simplescaffold/krds-tailwind`**, and machine-checkable validation scripts.

## Install

### Git submodule (teams)

```bash
git submodule add https://github.com/SimpleScaffold/ss-design-krds.git .krds
```

Add `templates/consumer-CLAUDE.md.snippet` to your project's CLAUDE.md.

### Cursor / Codex skills

```bash
cp -R ss-design-krds/skills/krds-* ~/.cursor/skills/
# or
npx skills add SimpleScaffold/ss-design-krds
```

### Tailwind package

```bash
npm install @simplescaffold/krds-tailwind tailwindcss
# or in monorepo
npm run krds:build:tailwind
```

- CSS: `@import "@simplescaffold/krds-tailwind"`
- HTML snippets: `dist/components/*.html` (74)
- Sample: `experiment/sample-page/tailwind.html`

See [`packages/krds-tailwind/README.md`](packages/krds-tailwind/README.md)

### npm validation (CI)

```json
{
  "devDependencies": {
    "ss-design-krds": "github:SimpleScaffold/ss-design-krds"
  },
  "scripts": {
    "krds:score": "node node_modules/ss-design-krds/scripts/krds-similarity.mjs --target ./public/index.html"
  }
}
```

### One-click setup

```bash
./templates/install.sh
```

## Usage

```
# Plan a new KRDS page
Use krds-plan to create a Korean public-service landing page.

# Transform existing UI
Use krds-transform to migrate this page to KRDS while preserving behavior.

# Improve quality
Use krds-improve until score ≥ 95 with no failed rules.
```

## Validation

```bash
npm install
npx playwright install chromium   # L2 browser checklist (WSL/CI)
npm run krds:score           # similarity score (threshold: 95)
npm run krds:score:tailwind  # Tailwind sample similarity
npm run krds:build:tailwind  # Tailwind CSS + 74 snippets
npm run krds:checklist       # official 311-item checklist
npm run krds:style:md:validate  # style MD integrity (9 pages)
npm run krds:style:md        # regenerate docs/style/ from KRDS site (maintenance)
npm run krds:coverage        # component reference coverage
npm run krds:validate        # full repo validation
npm run krds:improve         # iterative hardening loop
```

## Structure

```
docs/style/      KRDS official style guide MD (color, typography, shape, …)
specs/           Markdown specs (tokens, components, patterns, validation/)
resources/       checklist JSON, manifest (official-checklist.json)
skills/          Agent workflows (plan, transform, improve)
assets/krds/     Vendored KRDS-uiux HTML/CSS (74 components)
scripts/         Validation harness (style-guide-lib, checklist, similarity)
templates/       Consumer project bootstrap
packages/        @simplescaffold/krds-tailwind
experiment/      Reference implementation (index.html + tailwind.html)
```

## References

- [KRDS Official](https://www.krds.go.kr/html/site/index.html)
- [KRDS-uiux](https://github.com/KRDS-uiux/krds-uiux) — HTML Component Kit (vendored)
- [krds-react](https://github.com/KRDS-community/krds-react) — React library notes
- [future-krds](https://github.com/bytonylee/future-krds) — validation harness inspiration
- [gracefullight/krds](https://github.com/gracefullight/krds) — token package reference

## License

Apache-2.0. KRDS assets follow [KRDS copyright policy](https://www.krds.go.kr/html/site/utility/copyright.html).
