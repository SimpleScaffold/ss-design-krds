# @simplescaffold/krds-tailwind

KRDS(Korea Design System) 토큰·Tailwind v4 유틸리티·공식 `krds-` 컴포넌트 CSS를 한 번에 쓸 수 있는 패키지입니다.

## 설치

```bash
npm install @simplescaffold/krds-tailwind tailwindcss
```

로컬(monorepo) 개발:

```bash
cd ss-design-krds
npm install
npm run krds:build:tailwind
```

## CSS 사용

```css
/* app.css — 표준형 (KRDS 색 포함) */
@import "tailwindcss";
@import "@simplescaffold/krds-tailwind/theme";
@import "@simplescaffold/krds-tailwind";
```

```css
/* app.css — 확장형 (기관 색 보존) */
@import "tailwindcss";
@import "@simplescaffold/krds-tailwind/theme-structure";
@import "./krds-color-bridge.css";
@import "@simplescaffold/krds-tailwind/tokens-semantic";
@import "@simplescaffold/krds-tailwind/components.css";
```

`npm run krds:apply -- --target . --preserve-colors all` 로 bridge·import 초안 생성.

| Export | 내용 |
|--------|------|
| `./theme` | color + structure (기존) |
| `./theme-structure` | 타이포·간격·radius만 |
| `./theme-color` | Tailwind `@theme` 색만 |
| `./tokens-semantic` | 공식 gap/padding/radius 토큰 |
| `./tokens-color` | 공식 색 토큰 (보존 모드에서는 미사용) |
| `./components.css` | 공식 `output.css` |
| `./components/*` | HTML 스니펫 |
| `./components-structure/*` | 색 유틸 제외 스니펫 (`--no-color-utils` 빌드) |

- **`@simplescaffold/krds-tailwind/theme`** — `@theme` 토큰 + `bg-krds-*`, `font-krds` 등 alias만
- **`@simplescaffold/krds-tailwind`** — Tailwind + KRDS 토큰 + 공식 `output.css` 전체

## HTML 컴포넌트 스니펫 (74개)

공식 [KRDS-uiux](https://github.com/KRDS-uiux/krds-uiux) HTML에 Tailwind 유틸리티를 병행한 스니펫입니다.

```html
<!-- dist/components/button.html 참조 -->
<button type="button" class="krds-btn inline-flex ... bg-krds-primary" data-krds-component="button">
  버튼
</button>
```

경로: `node_modules/@simplescaffold/krds-tailwind/dist/components/{name}.html`

## 하이브리드 전략

| 레이어 | 역할 |
|--------|------|
| `krds-*` 클래스 | 공식 컴포넌트 구조·상태·a11y |
| `@theme` 토큰 | `specs/tokens.md` semantic 색·간격 |
| Tailwind 유틸 | 레이아웃·간격·반응형 |

## 스크립트 (ss-design-krds 루트)

| 명령 | 설명 |
|------|------|
| `npm run krds:generate:tailwind` | 74개 HTML 스니펫 재생성 |
| `npm run krds:build:tailwind` | 스니펫 + CSS 빌드 + 샘플 `tailwind.css` |
| `npm run krds:score:tailwind` | `tailwind.html` 유사도 검증 |

## 참고

- [specs/stacks.md](../../specs/stacks.md) — 스택 선택 가이드
- [experiment/sample-page/tailwind.html](../../experiment/sample-page/tailwind.html) — 라이브 샘플

## 라이선스

Apache-2.0
