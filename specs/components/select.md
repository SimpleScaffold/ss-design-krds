# Select (`select`)

> Source: `assets/krds/html/code/select.html`

## When to use

- KRDS 공식 컴포넌트 `select` 패턴이 필요할 때
- `data-krds-component="select"` / `data-krds-reference="assets/krds/html/code/select.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- select -->
<div class="fieldset">
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_name">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_name" class="krds-form-select" title="선택">
				<option value="">항목1</option>
				<option value="">항목2</option>
				<option value="">항목3</option>
				<option value="">항목4</option>
			</select>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_name4">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_name4" class="krds-form-select completed" title="선택">
				<option value="" selected>선택완료 상태</option>
				<option value="">항목2</option>
				<option value="">항목3</option>
				<opti
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="select" data-krds-reference="assets/krds/html/code/select.html">
  <!-- assets/krds/html/code/select.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
