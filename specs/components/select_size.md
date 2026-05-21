# Select Size (`select_size`)

> **Category**: Selection (선택)
> **Parent**: select
> **Variants**: —
> **Source**: `assets/krds/html/code/select_size.html`

## Overview

select 크기 변형입니다.

## Component Tree

```text
select (부모)
└── select_size
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
			<label for="select_size_small">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_size_small" class="krds-form-select large" title="선택">
				<option value="" selected>large</option>
				<option value="">medium</option>
				<option value="">small</option>
			</select>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_size_medium">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_size_medium" class="krds-form-select medium" title="선택">
				<option value="">large</option>
				<option value="" selected>medium</option>
				<option value="">small</option>
			</select>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_size_large">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_size_large" class="krds-form-select small" title="선택">
				<option value="">large</option>
				<option value="">medium</option>
				<option value="" se
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-input bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Select Size 예시
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

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="select_size"` / `data-krds-reference="assets/krds/html/code/select_size.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
