# Text Input (`text_input`)

> **Category**: Input (입력)
> **Parent**: —
> **Variants**: text_input_icon, text_input_size, text_input_state
> **Source**: `assets/krds/html/code/text_input.html`

## Overview

기본 텍스트 입력 필드입니다. label-for-id 바인딩 필수.

## Component Tree

```text
text_input (기본)
├── text_input_icon
├── text_input_size
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
			<label for="consult_name">레이블</label>
		</div>
		<div class="form-conts">
			<input type="text" id="consult_name" class="krds-input" placeholder="플레이스홀더">
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name2">레이블</label>
		</div>
		<div class="form-conts">
			<input type="text" id="consult_name2" class="krds-input" placeholder="플레이스홀더" value="readonly" readonly>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name3">레이블</label>
		</div>
		<div class="form-conts">
			<input type="text" id="consult_name3" class="krds-input" placeholder="플레이스홀더" value="disabled" disabled>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
</div>
<!-- //text input -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="fieldset font-krds w-full max-w-3xl" data-krds-component="text_input">
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name">레이블</label>
		</div>
		<div class="form-conts">
			<input type="text" id="consult_name" class="krds-input w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" placeholder="플레이스홀더">
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name2">레이블</label>
		</div>
		<div class="form-conts">
			<input type="text" id="consult_name2" class="krds-input w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" placeholder="플레이스홀더" value="readonly" readonly>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name3">레이블</label>
		</div>
		<div class="form-conts">
			<input type="text" id="consult_name3" class="krds-input w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" placeholder="플레이스홀더" value="disabled" disabled>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
</div>
```

## Page Context

페이지 트리상 위치: `form > .field > input.krds-input`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [textarea.md](./textarea.md)
- [select.md](./select.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="text_input"` / `data-krds-reference="assets/krds/html/code/text_input.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
