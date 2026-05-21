# Checkbox Chip (`checkbox_chip`)

> Source: `assets/krds/html/code/checkbox_chip.html`

## When to use

- KRDS 공식 컴포넌트 `checkbox_chip` 패턴이 필요할 때
- `data-krds-component="checkbox_chip"` / `data-krds-reference="assets/krds/html/code/checkbox_chip.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- checkbox -->
<div class="krds-check-area">
	<div class="krds-form-chip">
		<input type="checkbox" class="checkbox" id="chk_chip_1">
		<label class="krds-form-chip-outline" for="chk_chip_1">chip 상태 : default</label>
	</div>
	<div class="krds-form-chip">
		<input type="checkbox" class="checkbox" id="chk_chip_2" checked>
		<label class="krds-form-chip-outline" for="chk_chip_2">chip 상태 : checked</label>
	</div>
	<div class="krds-form-chip">
		<input type="checkbox" class="checkbox" id="chk_chip_3" disabled>
		<label class="krds-form-chip-outline" for="chk_chip_3">chip 상태 : disabled</label>
	</div>
</div>
<!-- //checkbox -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="checkbox_chip" data-krds-reference="assets/krds/html/code/checkbox_chip.html">
  <!-- assets/krds/html/code/checkbox_chip.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
