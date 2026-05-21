# Badge Number (`badge_number`)

> Source: `assets/krds/html/code/badge_number.html`

## When to use

- KRDS 공식 컴포넌트 `badge_number` 패턴이 필요할 때
- `data-krds-component="badge_number"` / `data-krds-reference="assets/krds/html/code/badge_number.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- badge -->
<div class="krds-badge-wrap">
	<span class="krds-badge bg-primary number">5</span>
	<span class="krds-badge bg-primary number">999+</span>
</div>

<div class="krds-badge-wrap">
	<span class="krds-badge bg-point number">5</span>
	<span class="krds-badge bg-point number">999+</span>
</div>
<!-- //badge -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="badge_number" data-krds-reference="assets/krds/html/code/badge_number.html">
  <!-- assets/krds/html/code/badge_number.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
