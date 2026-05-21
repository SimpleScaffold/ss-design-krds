# Checkbox Size (`checkbox_size`)

> Source: `assets/krds/html/code/checkbox_size.html`

## When to use

- KRDS 공식 컴포넌트 `checkbox_size` 패턴이 필요할 때
- `data-krds-component="checkbox_size"` / `data-krds-reference="assets/krds/html/code/checkbox_size.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- checkbox -->
<div class="krds-check-area">
	<div class="krds-form-check medium">
		<input type="checkbox" id="chk_1-2a">
		<label for="chk_1-2a">사이즈 : medium</label>
	</div>
	<div class="krds-form-check large">
		<input type="checkbox" id="chk_1-3a">
		<label for="chk_1-3a">사이즈 : large</label>
	</div>
</div>
<!-- //checkbox -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="checkbox_size" data-krds-reference="assets/krds/html/code/checkbox_size.html">
  <!-- assets/krds/html/code/checkbox_size.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
