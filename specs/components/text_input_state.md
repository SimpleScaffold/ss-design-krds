# Text Input State (`text_input_state`)

> **Category**: Input (입력)
> **Parent**: text_input
> **Variants**: —
> **Source**: `assets/krds/html/code/text_input_state.html`

## Overview

오류·성공·비활성 상태가 있는 텍스트 입력입니다.

## Component Tree

```text
text_input (부모)
└── text_input_state
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- text input -->
<div class="fieldset">
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name21">레이블</label>
		</div>
		<div class="form-conts is-error">
			<input type="text" id="consult_name21" class="krds-input" placeholder="플레이스홀더" value="에러">
		</div>
		<p class="form-hint-invalid">에러 메시지</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name22">레이블</label>
		</div>
		<div class="form-conts is-success">
			<input type="text" id="consult_name22" class="krds-input" placeholder="플레이스홀더" value="성공">
		</div>
		<p class="form-hint-success">성공 메시지</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name23">레이블</label>
		</div>
		<div class="form-conts is-information">
			<input type="text" id="consult_name23" class="krds-input" placeholder="플레이스홀더" value="정보">
		</div>
		<p class="form-hint-information">정보 메시지</p>
	</div>
	<!-- //폼그룹 -->
</div>
<!-- //text input -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="fieldset font-krds w-full max-w-3xl" data-krds-component="text_input_state">
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name21">레이블</label>
		</div>
		<div class="form-conts is-error">
			<input type="text" id="consult_name21" class="krds-input w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" placeholder="플레이스홀더" value="에러">
		</div>
		<p class="form-hint-invalid">에러 메시지</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name22">레이블</label>
		</div>
		<div class="form-conts is-success">
			<input type="text" id="consult_name22" class="krds-input w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" placeholder="플레이스홀더" value="성공">
		</div>
		<p class="form-hint-success">성공 메시지</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name23">레이블</label>
		</div>
		<div class="form-conts is-information">
			<input type="text" id="consult_name23" class="krds-input w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" placeholder="플레이스홀더" value="정보">
		</div>
		<p class="form-hint-information">정보 메시지</p>
	</div>
	<!-- //폼그룹 -->
</div>
```

## Page Context

페이지 트리상 위치: `form > .field`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [text_input.md](./text_input.md) (parent)
- [text_input.md](./text_input.md)
- [select_state.md](./select_state.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="text_input_state"` / `data-krds-reference="assets/krds/html/code/text_input_state.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
