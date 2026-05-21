# Structured List Table (`structured_list_table`)

> Source: `assets/krds/html/code/structured_list_table.html`

## When to use

- KRDS 공식 컴포넌트 `structured_list_table` 패턴이 필요할 때
- `data-krds-component="structured_list_table"` / `data-krds-reference="assets/krds/html/code/structured_list_table.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<div class="krds-structured-list-table sample">
	<!-- 리스트 상단 -->
	<div class="search-list-top">
		<div class="sch-left">
			<div class="krds-check-area">
				<div class="krds-form-check">
					<input type="checkbox" class="chk" id="list_chk_all" />
					<label for="list_chk_all">전체선택</label>
				</div>
			</div>
			<ul class="side-line-ul">
				<li>
					<button type="button" class="krds-btn medium text">
						<i class="svg-icon ico-down"></i>
						핵심버튼
					</button>
				</li>
				<li>
					<button type="button" class="krds-btn medium text">
						<i class="svg-icon ico-down"></i>
						핵심버튼
					</button>
				</li>
				<li>
					<button type="button" class="krds-btn medium text">
						<i class="svg-icon ico-down"></i>
						핵심버튼
					</button>
				</li>
				<li>
					<button type="but
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="structured_list_table" data-krds-reference="assets/krds/html/code/structured_list_table.html">
  <!-- assets/krds/html/code/structured_list_table.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
