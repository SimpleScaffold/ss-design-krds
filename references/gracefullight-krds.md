# gracefullight/krds Reference

[gracefullight/krds](https://github.com/gracefullight/krds)는 KRDS 영감의 테마·컴포넌트 monorepo입니다.

## Packages

| Package | Stack | Description |
|---------|-------|-------------|
| `@gracefullight/krds` | MUI v7 | Material UI 테마 + 컴포넌트 |
| `@gracefullight/krds-tw` | Tailwind v4 + Base UI | shadcn 호환 헤드리스 컴포넌트 |
| `@gracefullight/krds-tokens` | — | 디자인 토큰 (색상, 타이포, 간격) |
| `@gracefullight/krds-icons` | React | 아이콘 세트 |

## When to Use

- React 프로젝트에서 MUI 또는 Tailwind v4 + Base UI 사용
- semantic token key가 필요할 때 (`getTypography("pc.heading.large")`)

## Relationship to ss-design-krds

- `specs/tokens.md`의 semantic key는 gracefullight/krds-tokens와 호환됩니다
- `templates/tailwind-theme.css`는 krds-tokens 값을 Tailwind `@theme`으로 매핑합니다
- ss-design-krds는 전체 컴포넌트 라이브러리를 vendoring하지 않습니다 — 필요 시 npm install

## Demo

https://krds.gracefullight.dev

## Agent Setup

gracefullight/krds는 `.agents/`, `AGENTS.md`, `CLAUDE.md` 등 AI 에이전트 설정을 포함합니다. ss-design-krds는 더 경량化的 skill + MD spec 접근을 취합니다.
