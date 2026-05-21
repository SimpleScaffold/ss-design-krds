# Text Input State (`text_input_state`)

> Source: `assets/krds/html/code/text_input_state.html`

## When to use

- KRDS 공식 컴포넌트 `text_input_state` 패턴이 필요할 때
- `data-krds-component="text_input_state"` / `data-krds-reference="assets/krds/html/code/text_input_state.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- text input -->
<div class="fieldset">
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name21">레이블</label>
		</div>
		<div class="form-conts is-error">
			<input type="text" id="consult_name21" class="krds-input" placeholder="플레이스홀더" value="에러">
		</div>
		<p class="form-hint-invalid">에러 메시지</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name22">레이블</label>
		</div>
		<div class="form-conts is-success">
			<input type="text" id="consult_name22" class="krds-input" placeholder="플레이스홀더" value="성공">
		</div>
		<p class="form-hint-success">성공 메시지</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name23">레이블</label>
		<
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="text_input_state" data-krds-reference="assets/krds/html/code/text_input_state.html">
  <!-- assets/krds/html/code/text_input_state.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
