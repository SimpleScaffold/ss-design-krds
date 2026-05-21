# KRDS Accessibility

KRDS는 [디지털 포용](https://www.krds.go.kr/html/site/intro/intro04.html)과 WCAG 2.2 준수를 전제로 합니다.

## A11y Checklist Tree

```text
KRDS Accessibility
├── [필수] Document
│   ├── html lang="ko"
│   ├── title + meta description
│   └── DOCTYPE html
├── [필수] Navigation
│   ├── skip-link → #content
│   └── landmarks (header, nav, main, footer)
├── [필수] Forms
│   ├── label-for-id binding
│   └── fieldset + legend (group inputs)
├── [필수] Interactive
│   ├── icon-only button → sr-only
│   └── focus-visible styles
├── [필수] Media
│   └── img alt (decorative: alt="")
├── [권장] Tables
│   ├── thead / tbody
│   └── caption (sr-only OK)
└── [권장] Keyboard
    ├── Tab order logical
    └── modal: Escape, focus trap
```

**검증**: `[필수]` 항목은 `krds-similarity.mjs` failed rules = 0 이어야 합니다.

## 필수 구조

| 요소 | 규칙 |
|------|------|
| `html` | `lang="ko"` |
| Skip link | `#krds-skip-link` → `href="#content"` |
| Landmarks | `header`, `nav`, `main`, `footer` |
| Page title | `<title>` + `<meta name="description">` |

## Skip Link

```html
<div id="krds-skip-link">
  <a href="#content">본문 바로가기</a>
</div>
<main id="content">...</main>
```

포커스 시에만 보이도록 CSS 처리. `scripts/krds-similarity.mjs`가 `skip-link-target` 규칙 ID로 검증합니다.

## Screen Reader Only

```html
<span class="sr-only">아이콘 버튼 설명</span>
```

```css
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## Form Labels

모든 `input`, `select`, `textarea`에 연결된 `label` 필수:

```html
<label for="email">이메일</label>
<input id="email" class="krds-input" type="email" name="email" />
```

## Icon Buttons

아이콘만 있는 버튼에는 반드시 `sr-only` 텍스트:

```html
<button type="button" class="krds-btn icon">
  <span aria-hidden="true">?</span>
  <span class="sr-only">도움말 열기</span>
</button>
```

## Images

모든 `<img>`에 의미 있는 `alt` 텍스트. 장식용은 `alt=""`.

## Navigation

```html
<nav aria-label="주요 메뉴">...</nav>
<nav aria-label="현재 위치">...</nav>
```

## Tables

```html
<table class="krds-table">
  <caption class="sr-only">표 설명</caption>
  <thead>...</thead>
  <tbody>...</tbody>
</table>
```

## Color Contrast

- 본문 텍스트: 최소 4.5:1
- 큰 텍스트(18px+ bold 또는 24px+): 최소 3:1
- `specs/tokens.md`의 semantic color 사용

## Keyboard

- 모든 인터랙티브 요소 Tab 접근 가능
- `:focus-visible` 스타일 제공
- 모달/드롭다운: Escape 닫기, focus trap

## 검증

```bash
node scripts/krds-similarity.mjs --target <page.html>
```

a11y 관련 failed rules가 0이어야 합니다.
