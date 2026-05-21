# Button Hierarchy (`button_hierarchy`)

> Source: `assets/krds/html/code/button_hierarchy.html`

## When to use

- KRDS 공식 컴포넌트 `button_hierarchy` 패턴이 필요할 때
- `data-krds-component="button_hierarchy"` / `data-krds-reference="assets/krds/html/code/button_hierarchy.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- button -->
<button type="button" class="krds-btn primary">버튼 : primary</button>
<button type="button" class="krds-btn secondary">버튼 : secondary</button>
<button type="button" class="krds-btn tertiary">버튼 : tertiary</button>
<!-- //button -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="button_hierarchy" data-krds-reference="assets/krds/html/code/button_hierarchy.html">
  <!-- assets/krds/html/code/button_hierarchy.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
