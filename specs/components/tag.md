# Tag (`tag`)

> Source: `assets/krds/html/code/tag.html`

## When to use

- KRDS 공식 컴포넌트 `tag` 패턴이 필요할 때
- `data-krds-component="tag"` / `data-krds-reference="assets/krds/html/code/tag.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- tag -->
<div class="krds-tag-wrap large">
	<span class="krds-btn-tag">
		태그
		<button type="button" class="btn-delete">
			<span class="sr-only">삭제</span>
		</button>
	</span>
	<span class="krds-btn-tag">
		태그
		<button type="button" class="btn-delete">
			<span class="sr-only">삭제</span>
		</button>
	</span>
	<span class="krds-btn-tag">
		태그
		<button type="button" class="btn-delete">
			<span class="sr-only">삭제</span>
		</button>
	</span>
</div>
<div class="krds-tag-wrap medium">
	<span class="krds-btn-tag">
		태그
		<button type="button" class="btn-delete">
			<span class="sr-only">삭제</span>
		</button>
	</span>
	<span class="krds-btn-tag">
		태그
		<button type="button" class="btn-delete">
			<span class="sr-only">삭제</span>
		</button>
	</span>
	<span class="krds-btn-tag">
		태그
		<butt
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="tag" data-krds-reference="assets/krds/html/code/tag.html">
  <!-- assets/krds/html/code/tag.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
