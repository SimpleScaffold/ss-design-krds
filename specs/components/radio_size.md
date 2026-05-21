# Radio Size (`radio_size`)

> **Category**: Selection (선택)
> **Parent**: radio_button
> **Variants**: —
> **Source**: `assets/krds/html/code/radio_size.html`

## Overview

라디오 버튼 크기 변형입니다.

## Component Tree

```text
radio_button (부모)
└── radio_size
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- radio button -->
<div class="krds-check-area">
	<div class="krds-form-check medium">
		<input type="radio" name="rdo_2-1" id="rdo_2-2">
		<label for="rdo_2-2">사이즈 : medium</label>
	</div>
	<div class="krds-form-check large">
		<input type="radio" name="rdo_2-1" id="rdo_2-3">
		<label for="rdo_2-3">사이즈 : large</label>
	</div>
</div>
<!-- //radio button -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="krds-check-area inline-flex items-center gap-krds-2 font-krds" data-krds-component="radio_size">
	<div class="krds-form-check medium flex flex-col gap-krds-4 font-krds max-w-2xl text-krds-body-md">
		<input type="radio" name="rdo_2-1" id="rdo_2-2">
		<label for="rdo_2-2">사이즈 : medium</label>
	</div>
	<div class="krds-form-check large flex flex-col gap-krds-4 font-krds max-w-2xl text-krds-body-lg">
		<input type="radio" name="rdo_2-1" id="rdo_2-3">
		<label for="rdo_2-3">사이즈 : large</label>
	</div>
</div>
```

## Page Context

페이지 트리상 위치: `form > fieldset`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [radio_button.md](./radio_button.md) (parent)
- [radio_button.md](./radio_button.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="radio_size"` / `data-krds-reference="assets/krds/html/code/radio_size.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
