# Toggle Switch (`toggle_switch`)

> Source: `assets/krds/html/code/toggle_switch.html`

## When to use

- KRDS 공식 컴포넌트 `toggle_switch` 패턴이 필요할 때
- `data-krds-component="toggle_switch"` / `data-krds-reference="assets/krds/html/code/toggle_switch.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- toggle switch -->
<div class="krds-form-toggle-switch">
	<input type="checkbox" id="switch">
	<label for="switch"><span class="switch-toggle"><i></i></span>switch : default</label>
</div>
<div class="krds-form-toggle-switch">
	<input type="checkbox" id="switch_checked" checked>
	<label for="switch_checked"><span class="switch-toggle"><i></i></span>switch : checked</label>
</div>
<div class="krds-form-toggle-switch">
	<input type="checkbox" id="switch_disabled_1" disabled>
	<label for="switch_disabled_1"><span class="switch-toggle"><i></i></span>switch : disabled</label>
</div>
<!-- //toggle switch -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="toggle_switch" data-krds-reference="assets/krds/html/code/toggle_switch.html">
  <!-- assets/krds/html/code/toggle_switch.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
