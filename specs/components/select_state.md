# Select State (`select_state`)

> **Category**: Selection (선택)
> **Parent**: select
> **Variants**: —
> **Source**: `assets/krds/html/code/select_state.html`

## Overview

상태(활성/비활성/오류)가 있는 select입니다.

## Component Tree

```text
select (부모)
└── select_state
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- select -->
<div class="fieldset">
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_error">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_error" class="krds-form-select is-error" title="선택">
				<option value="">항목1</option>
				<option value="">항목2</option>
				<option value="">항목3</option>
				<option value="">항목4</option>
			</select>
		</div>
		<p class="form-hint-invalid">도움말</p>
	</div>
	<!-- //폼그룹 -->
</div>
<!-- //select -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-input bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Select State 예시
</button>
```

## Page Context

페이지 트리상 위치: `form > select`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [select.md](./select.md) (parent)
- [select.md](./select.md)
- [text_input_state.md](./text_input_state.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="select_state"` / `data-krds-reference="assets/krds/html/code/select_state.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
