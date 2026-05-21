# Radio Button (`radio_button`)

> **Category**: Selection (선택)
> **Parent**: —
> **Variants**: radio_chip, radio_size
> **Source**: `assets/krds/html/code/radio_button.html`

## Overview

단일 선택 라디오 버튼입니다.

## Component Tree

```text
radio_button (기본)
├── radio_chip
└── radio_size
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

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
			<div class="krds-check-area chk-column">
				<div class="krds-form-check ">
					<input type="radio" name="rdo_1" id="rdo_1-1" checked>
					<label for="rdo_1-1">라디오버튼</label>
					<div class="krds-form-check-cnt">
						<p class="krds-form-check-p">
							부가적인 설명이 들어갑니다.
						</p>
					</div>
				</div>
				<div class="krds-form-check">
					<input type="radio" name="rdo_1" id="rdo_1-2">
					<label for="rdo_1-2">
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Radio Button 예시
</button>
```

## Page Context

페이지 트리상 위치: `form > fieldset.choice-group`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [checkbox.md](./checkbox.md)
- [select.md](./select.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="radio_button"` / `data-krds-reference="assets/krds/html/code/radio_button.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
