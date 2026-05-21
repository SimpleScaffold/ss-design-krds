# Select Size (`select_size`)

> Source: `assets/krds/html/code/select_size.html`

## When to use

- KRDS 공식 컴포넌트 `select_size` 패턴이 필요할 때
- `data-krds-component="select_size"` / `data-krds-reference="assets/krds/html/code/select_size.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- select -->
<div class="fieldset">
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_size_small">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_size_small" class="krds-form-select large" title="선택">
				<option value="" selected>large</option>
				<option value="">medium</option>
				<option value="">small</option>
			</select>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_size_medium">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_size_medium" class="krds-form-select medium" title="선택">
				<option value="">large</option>
				<option value="" selected>medium</option>
				<option value="">small</optio
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="select_size" data-krds-reference="assets/krds/html/code/select_size.html">
  <!-- assets/krds/html/code/select_size.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
