# Spinner (`spinner`)

> Source: `assets/krds/html/code/spinner.html`

## When to use

- KRDS 공식 컴포넌트 `spinner` 패턴이 필요할 때
- `data-krds-component="spinner"` / `data-krds-reference="assets/krds/html/code/spinner.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- spinner -->
<!-- 인풋 내 스피너 -->
<div class="form-group">
	<div class="form-tit">
		<label for="consult_name">Label</label>
	</div>
	<div class="form-conts">
		<div class="form-spinner">
			<input type="text" id="consult_name" class="krds-input" placeholder="placeholder">
			<div class="krds-spinner" role="status">
				<span class="sr-only">로딩 중</span>
			</div>
		</div>
	</div>
</div>
<!-- //인풋 내 스피너 -->

<br>
<br>

<!-- 스피너 -->
<div class="krds-spinner" role="status">
	<span class="sr-only">로딩 중</span>
	Loading data..
</div>
<!-- //스피너 -->
<!-- //spinner -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="spinner" data-krds-reference="assets/krds/html/code/spinner.html">
  <!-- assets/krds/html/code/spinner.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
