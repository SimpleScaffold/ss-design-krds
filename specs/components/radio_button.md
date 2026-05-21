# Radio Button (`radio_button`)

> Source: `assets/krds/html/code/radio_button.html`

## When to use

- KRDS 공식 컴포넌트 `radio_button` 패턴이 필요할 때
- `data-krds-component="radio_button"` / `data-krds-reference="assets/krds/html/code/radio_button.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- radio button -->
<div class="fieldset">
	<div class="form-group">
		<div class="form-conts">
			<div class="krds-check-area">
				<div class="krds-form-check">
					<input type="radio" name="rdo_1" id="rdo_1">
					<label for="rdo_1">기본</label>
				</div>
				<div class="krds-form-check">
					<input type="radio" name="rdo_1" id="rdo_2" checked>
					<label for="rdo_2">선택됨</label>
				</div>
				<div class="krds-form-check">
					<input type="radio" name="rdo_1" id="rdo_3" disabled>
					<label for="rdo_3">비활성화</label>
				</div>
				<div class="krds-form-check">
					<input type="radio" name="rdo_1a" id="rdo_4" disabled checked>
					<label for="rdo_4">선택된 비활성화</label>
				</div>
			</div>
		</div>
	</div>
	
	<div class="form-group">
		<div class="form-conts">
			<div class="krds-che
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="radio_button" data-krds-reference="assets/krds/html/code/radio_button.html">
  <!-- assets/krds/html/code/radio_button.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
