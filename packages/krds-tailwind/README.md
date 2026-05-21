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
/* app.css */
@import "tailwindcss";
@import "@simplescaffold/krds-tailwind/theme";
@import "@simplescaffold/krds-tailwind";
```

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
