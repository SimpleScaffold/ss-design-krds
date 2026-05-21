# Pagination (`pagination`)

> Source: `assets/krds/html/code/pagination.html`

## When to use

- KRDS 공식 컴포넌트 `pagination` 패턴이 필요할 때
- `data-krds-component="pagination"` / `data-krds-reference="assets/krds/html/code/pagination.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- pagination -->
<div class="krds-pagination">
	<span class="page-navi prev disabled" href="#">이전</span>
	<div class="page-links">
		<a class="page-link" href="#">1</a>
		<a class="page-link" href="#">2</a>
		<a class="page-link" href="#">3</a>
		<a class="page-link active" href="#"><span class="sr-only">현재페이지 </span>4</a>
		<a class="page-link" href="#">5</a>
		<a class="page-link" href="#">6</a>
		<a class="page-link" href="#">7</a>
		<a class="page-link" href="#">8</a>
		<span class="page-link link-dot"></span>
		<a class="page-link" href="#">99</a>
	</div>
	<a class="page-navi next" href="#">다음</a>
</div>
<!-- //pagination -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="pagination" data-krds-reference="assets/krds/html/code/pagination.html">
  <!-- assets/krds/html/code/pagination.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
