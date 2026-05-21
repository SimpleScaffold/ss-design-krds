# krds-react Reference

[KRDS-community/krds-react](https://github.com/KRDS-community/krds-react)는 디지털 정부서비스 UI/UX 가이드라인의 React 라이브러리입니다.

## When to Use

- React + TypeScript + Tailwind CSS 프로젝트
- 공식 HTML 킷 대신 React 컴포넌트가 필요할 때

## Packages

| Package | Description |
|---------|-------------|
| Core | Typography, Color 등 기본 컴포넌트 |
| TailwindCSS Plugin | KRDS 테마 Tailwind 플러그인 |

## Install

```bash
npm install @krds-community/core
# See individual package docs at https://krds.js.org/
```

## Relationship to ss-design-krds

- ss-design-krds는 **MD 스펙 + HTML 벤더**를 제공합니다
- React 프로젝트에서는 krds-react 컴포넌트를 사용하되, **토큰·a11y 규칙**은 `specs/tokens.md`, `specs/accessibility.md`를 따르세요
- 검증: HTML output 또는 Storybook snapshot에 `krds-similarity.mjs` 적용 가능

## Storybook

```bash
pnpm storybook
# http://localhost:6006
```

## License

Apache-2.0
