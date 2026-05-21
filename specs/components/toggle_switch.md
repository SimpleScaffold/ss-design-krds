# Toggle Switch (`toggle_switch`)

> **Category**: Selection (선택)
> **Parent**: —
> **Variants**: toggle_switch_size
> **Source**: `assets/krds/html/code/toggle_switch.html`

## Overview

ON/OFF 토글 스위치입니다.

## Component Tree

```text
toggle_switch (기본)
└── toggle_switch_size
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

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
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Toggle Switch 예시
</button>
```

## Page Context

페이지 트리상 위치: `form > label.toggle`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [checkbox.md](./checkbox.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="toggle_switch"` / `data-krds-reference="assets/krds/html/code/toggle_switch.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
