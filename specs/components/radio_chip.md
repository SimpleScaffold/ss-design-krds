# Radio Chip (`radio_chip`)

> **Category**: Selection (선택)
> **Parent**: radio_button
> **Variants**: —
> **Source**: `assets/krds/html/code/radio_chip.html`

## Overview

칩 형태의 라디오 버튼입니다.

## Component Tree

```text
radio_button (부모)
└── radio_chip
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- radio button -->
<div class="krds-check-area">
	<div class="krds-form-chip">
		<input type="radio" class="radio" name="rdo_chip" id="rdo_chip_1">
		<label class="krds-form-chip-outline" for="rdo_chip_1">chip 상태 : default </label>
	</div>
	<div class="krds-form-chip">
		<input type="radio" class="radio" name="rdo_chip" id="rdo_chip_2" checked>
		<label class="krds-form-chip-outline" for="rdo_chip_2">chip 상태 : checked </label>
	</div>
	<div class="krds-form-chip">
		<input type="radio" class="radio" name="rdo_chip" id="rdo_chip_3" disabled>
		<label class="krds-form-chip-outline" for="rdo_chip_3">chip 상태 :disabled </label>
	</div>
</div>
<!-- //radio button -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="krds-check-area inline-flex items-center gap-krds-2 font-krds" data-krds-component="radio_chip">
	<div class="krds-form-chip flex flex-col gap-krds-4 font-krds max-w-2xl">
		<input type="radio" class="radio" name="rdo_chip" id="rdo_chip_1">
		<label class="krds-form-chip-outline flex flex-col gap-krds-4 font-krds max-w-2xl" for="rdo_chip_1">chip 상태 : default </label>
	</div>
	<div class="krds-form-chip flex flex-col gap-krds-4 font-krds max-w-2xl">
		<input type="radio" class="radio" name="rdo_chip" id="rdo_chip_2" checked>
		<label class="krds-form-chip-outline flex flex-col gap-krds-4 font-krds max-w-2xl" for="rdo_chip_2">chip 상태 : checked </label>
	</div>
	<div class="krds-form-chip flex flex-col gap-krds-4 font-krds max-w-2xl">
		<input type="radio" class="radio" name="rdo_chip" id="rdo_chip_3" disabled>
		<label class="krds-form-chip-outline flex flex-col gap-krds-4 font-krds max-w-2xl" for="rdo_chip_3">chip 상태 :disabled </label>
	</div>
</div>
```

## Page Context

페이지 트리상 위치: `form > .choice-group`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [radio_button.md](./radio_button.md) (parent)
- [radio_button.md](./radio_button.md)
- [checkbox_chip.md](./checkbox_chip.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="radio_chip"` / `data-krds-reference="assets/krds/html/code/radio_chip.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
