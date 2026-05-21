# Tooltip Vertical (`tooltip_vertical`)

> Source: `assets/krds/html/code/tooltip_vertical.html`

## When to use

- KRDS 공식 컴포넌트 `tooltip_vertical` 패턴이 필요할 때
- `data-krds-component="tooltip_vertical"` / `data-krds-reference="assets/krds/html/code/tooltip_vertical.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- tooltip -->
<button type="button" class="krds-btn small text krds-tooltip tooltip-vertical" data-tooltip="tooltip-vertical 옵션입니다">
  tooltip-vertical <i class="svg-icon ico-angle right"></i>
</button>

<button type="button" class="krds-btn icon krds-tooltip tooltip-vertical" data-tooltip="아이콘 버튼에 제공되는 툴팁">
  <span class="sr-only">도움말</span>
  <i class="svg-icon ico-help"></i>
</button>

<button type="button" class="krds-btn krds-tooltip tooltip-vertical" data-tooltip="버튼에 제공되는 툴팁">도움말</button>
<!-- //tooltip -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="tooltip_vertical" data-krds-reference="assets/krds/html/code/tooltip_vertical.html">
  <!-- assets/krds/html/code/tooltip_vertical.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
