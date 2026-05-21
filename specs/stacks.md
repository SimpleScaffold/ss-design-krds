# KRDS Stack Selection Guide

ss-design-krds는 **프레임워크에 종속되지 않는 MD 스펙**을 제공합니다. 프로젝트 스택에 맞는 적용 방식을 선택하세요.

## Decision Matrix

| 상황 | 권장 스택 | 참조 |
|------|-----------|------|
| 정부 누리집 HTML/CSS | **HTML + krds-uiux** | `assets/krds/html/code/` |
| Tailwind 프로젝트 | **HTML classes + @theme** | `templates/tailwind-theme.css` |
| React + Tailwind | **krds-react** | `references/krds-react.md` |
| React + MUI | **gracefullight/krds** | `references/gracefullight-krds.md` |
| AI 에이전트 설계만 | **specs/ MD** | `specs/components/`, `specs/tokens.md` |

## HTML/CSS (기본)

공식 [KRDS-uiux](https://github.com/KRDS-uiux/krds-uiux) HTML Component Kit을 그대로 사용합니다.

```html
<link rel="stylesheet" href="path/to/krds/resources/css/component/output.css" />
<button type="button" class="krds-btn primary">신청하기</button>
```

**장점**: 공식 가이드와 1:1 일치, 검증 스크립트와 호환  
**단점**: React/Vue 등 SPA에서 직접 사용 시 래핑 필요

## Tailwind CSS v4

KRDS 토큰을 `@theme`으로 매핑하고, `krds-` 클래스와 병행합니다.

```html
<link rel="stylesheet" href="templates/tailwind-theme.css" />
<button class="krds-btn primary bg-krds-primary rounded-krds-sm">신청하기</button>
```

**장점**: 유틸리티와 KRDS 클래스 혼용 가능  
**참조**: `experiment/sample-page/tailwind.html`

## React

[KRDS-community/krds-react](https://github.com/KRDS-community/krds-react) — Tailwind 기반 React 컴포넌트.

```tsx
import { Button } from '@krds-community/core';
```

**주의**: ss-design-krds는 React 컴포넌트를 직접 제공하지 않습니다. `references/krds-react.md`를 참조하세요.

## MUI + Tailwind

[gracefullight/krds](https://github.com/gracefullight/krds) — MUI v7 테마 + Tailwind v4 Base UI.

```tsx
import { KrdsThemeProvider } from '@gracefullight/krds';
import { Button } from '@gracefullight/krds-tw';
```

**주의**: 별도 npm 패키지 설치 필요. 토큰 semantic key는 `specs/tokens.md`와 호환됩니다.

## AI Agent Workflow

스택과 무관하게 다음 순서를 따릅니다:

1. `krds-plan` — 컴포넌트 매핑·a11y 게이트 정의
2. 구현 — `specs/components/*.md` + `assets/krds/html/code/` 참조
3. `krds-improve` — `krds-similarity.mjs` score ≥ 95

## 공통 규칙 (모든 스택)

- `specs/tokens.md` 토큰 키 사용 (임의 hex 금지)
- `specs/accessibility.md` a11y 게이트 통과
- `data-krds-component` / `data-krds-reference`로 출처 추적 (HTML/Tailwind)
