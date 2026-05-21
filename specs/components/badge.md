# Badge (`badge`)

> Source: `assets/krds/html/code/badge.html`

## When to use

- KRDS 공식 컴포넌트 `badge` 패턴이 필요할 때
- `data-krds-component="badge"` / `data-krds-reference="assets/krds/html/code/badge.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- badge -->
<div class="krds-badge-wrap">
	<span class="krds-badge outline-primary">Label</span>
	<span class="krds-badge outline-secondary">Label</span>
	<span class="krds-badge outline-gray">Label</span>
	<span class="krds-badge outline-point">Label</span>
	<span class="krds-badge outline-danger">Label</span>
	<span class="krds-badge outline-warning">Label</span>
	<span class="krds-badge outline-success">Label</span>
	<span class="krds-badge outline-information">Label</span>
	<span class="krds-badge outline-disabled">Label</span>
</div>

<div class="krds-badge-wrap">
	<span class="krds-badge bg-primary">Label</span>
	<span class="krds-badge bg-secondary">Label</span>
	<span class="krds-badge bg-gray">Label</span>
	<span class="krds-badge bg-point">Label</span>
	<span class="krds-badge
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="badge" data-krds-reference="assets/krds/html/code/badge.html">
  <!-- assets/krds/html/code/badge.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
