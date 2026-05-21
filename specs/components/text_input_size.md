# Text Input Size (`text_input_size`)

> **Category**: Input (입력)
> **Parent**: text_input
> **Variants**: —
> **Source**: `assets/krds/html/code/text_input_size.html`

## Overview

텍스트 입력 크기 변형입니다.

## Component Tree

```text
text_input (부모)
└── text_input_size
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
	        <label for="consult_name31">레이블</label>
	    </div>
	    <div class="form-conts">
	        <input type="text" id="consult_name31" class="krds-input small" placeholder="플레이스홀더">
	    </div>
	    <p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name32">레이블</label>
		</div>
		<div class="form-conts">
			<input type="text" id="consult_name32" class="krds-input medium" placeholder="플레이스홀더">
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name33">레이블</label>
		</div>
		<div class="form-conts">
			<input type="text" id="consult_name33" class="krds-input large" placeholder="플레이스홀더">
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
<div class="fieldset font-krds w-full max-w-3xl" data-krds-component="text_input_size">
	<!-- 폼그룹 -->
	<div class="form-group">
	    <div class="form-tit">
	        <label for="consult_name31">레이블</label>
	    </div>
	    <div class="form-conts">
	        <input type="text" id="consult_name31" class="krds-input small w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1" placeholder="플레이스홀더">
	    </div>
	    <p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name32">레이블</label>
		</div>
		<div class="form-conts">
			<input type="text" id="consult_name32" class="krds-input medium w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface text-krds-body-md" placeholder="플레이스홀더">
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name33">레이블</label>
		</div>
		<div class="form-conts">
			<input type="text" id="consult_name33" class="krds-input large w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface text-krds-body-lg" placeholder="플레이스홀더">
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
</div>
```

## Page Context

페이지 트리상 위치: `form > input`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [text_input.md](./text_input.md) (parent)
- [text_input.md](./text_input.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="text_input_size"` / `data-krds-reference="assets/krds/html/code/text_input_size.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
