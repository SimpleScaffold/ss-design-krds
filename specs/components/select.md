# Select (`select`)

> **Category**: Selection (선택)
> **Parent**: —
> **Variants**: select_size, select_sorting, select_state
> **Source**: `assets/krds/html/code/select.html`

## Overview

드롭다운 선택(select) 컴포넌트입니다.

## Component Tree

```text
select (기본)
├── select_size
├── select_sorting
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
			<label for="select_name">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_name" class="krds-form-select" title="선택">
				<option value="">항목1</option>
				<option value="">항목2</option>
				<option value="">항목3</option>
				<option value="">항목4</option>
			</select>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_name4">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_name4" class="krds-form-select completed" title="선택">
				<option value="" selected>선택완료 상태</option>
				<option value="">항목2</option>
				<option value="">항목3</option>
				<option value="">항목4</option>
			</select>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_error">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_error" class="krds-form-select is-error" title="선택">
				<option value="">항목1</option>
				<option value="">항목2</option>
				<option v
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="fieldset font-krds" data-krds-component="select">
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_name">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_name" class="krds-form-select flex flex-col gap-krds-4 font-krds max-w-2xl" title="선택">
				<option value="">항목1</option>
				<option value="">항목2</option>
				<option value="">항목3</option>
				<option value="">항목4</option>
			</select>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_name4">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_name4" class="krds-form-select completed flex flex-col gap-krds-4 font-krds max-w-2xl" title="선택">
				<option value="" selected>선택완료 상태</option>
				<option value="">항목2</option>
				<option value="">항목3</option>
				<option value="">항목4</option>
			</select>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_error">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_error" class="krds-form-select is-error flex flex-col gap-krds-4 font-krds max-w-2xl" title="선택">
				<option value="">항목1</option>
				<option value="">항목2</option>
				<option value="">항목3</option>
				<option value="">항목4</option>
			</select>
		</div>
		<p class="form-hint-invalid">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="select_name3">레이블</label>
		</div>
		<div class="form-conts">
			<select id="select_name3" class="krds-form-select flex flex-col gap-krds-4 font-krds max-w-2xl" title="선택" disabled>
				<option value="">disabled</option>
				<option value="">항목2</option>
				<option value="">항목3</option>
				<option value="">항목4</option>
			</select>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
</div>
```

## Page Context

페이지 트리상 위치: `form > .field > select.krds-input`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [text_input.md](./text_input.md)
- [radio_button.md](./radio_button.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="select"` / `data-krds-reference="assets/krds/html/code/select.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
