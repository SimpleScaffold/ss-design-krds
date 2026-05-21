# Checkbox (`checkbox`)

> **Category**: Selection (선택)
> **Parent**: —
> **Variants**: checkbox_chip, checkbox_size
> **Source**: `assets/krds/html/code/checkbox.html`

## Overview

다중 선택 체크박스입니다. fieldset+legend 또는 label로 그룹화합니다.

## Component Tree

```text
checkbox (기본)
├── checkbox_chip
└── checkbox_size
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- checkbox -->
<div class="fieldset">
	<div class="form-group">
		<div class="form-conts">
			<div class="krds-check-area">
				<div class="krds-form-check">
					<input type="checkbox" name="chk_1" id="chk_1">
					<label for="chk_1">기본</label>
				</div>
				<div class="krds-form-check">
					<input type="checkbox" name="chk_1" id="chk_2" checked>
					<label for="chk_2">선택됨</label>
				</div>
				<div class="krds-form-check">
					<input type="checkbox" name="chk_1" id="chk_3" disabled>
					<label for="chk_3">비활성화</label>
				</div>
				<div class="krds-form-check">
					<input type="checkbox" name="chk_1" id="chk_4" disabled checked>
					<label for="chk_4">선택된 비활성화</label>
				</div>
			</div>
		</div>
	</div>
	
	<div class="form-group">
		<div class="form-conts">
			<div class="krds-check-area chk-column">
				<div class="krds-form-check ">
					<input type="checkbox" id="chk_additional_1" checked>
					<label for="chk_additional_1">체크박스</label>
					<div class="krds-form-check-cnt">
						<p class="krds-form-check-p">
							부가적인 설명이 들어갑니다.
						</p>
					</div>
				</div>
				<div class="krds-form-check">
					<input type="checkbox" id="chk_additional_2">
					<label f
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Checkbox 예시
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

- [radio_button.md](./radio_button.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="checkbox"` / `data-krds-reference="assets/krds/html/code/checkbox.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
