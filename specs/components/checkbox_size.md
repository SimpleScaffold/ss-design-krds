# Checkbox Size (`checkbox_size`)

> **Category**: Selection (선택)
> **Parent**: checkbox
> **Variants**: —
> **Source**: `assets/krds/html/code/checkbox_size.html`

## Overview

체크박스 크기 변형입니다.

## Component Tree

```text
checkbox (부모)
└── checkbox_size
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

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
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Checkbox Size 예시
</button>
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

- [checkbox.md](./checkbox.md) (parent)
- [checkbox.md](./checkbox.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="checkbox_size"` / `data-krds-reference="assets/krds/html/code/checkbox_size.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
