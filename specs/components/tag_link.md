# Tag Link (`tag_link`)

> Source: `assets/krds/html/code/tag_link.html`

## When to use

- KRDS 공식 컴포넌트 `tag_link` 패턴이 필요할 때
- `data-krds-component="tag_link"` / `data-krds-reference="assets/krds/html/code/tag_link.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- tag -->
<div class="krds-tag-wrap large">
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
</div>
<div class="krds-tag-wrap medium">
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
</div>
<div class="krds-tag-wrap small">
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
</div>
<!-- //tag -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="tag_link" data-krds-reference="assets/krds/html/code/tag_link.html">
  <!-- assets/krds/html/code/tag_link.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
