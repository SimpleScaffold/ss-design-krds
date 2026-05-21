# Text Input Icon (`text_input_icon`)

> **Category**: Input (입력)
> **Parent**: text_input
> **Variants**: —
> **Source**: `assets/krds/html/code/text_input_icon.html`

## Overview

아이콘이 있는 텍스트 입력입니다.

## Component Tree

```text
text_input (부모)
└── text_input_icon
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
			<label for="login_pw">레이블</label>
		</div>
		<div class="form-conts btn-ico-wrap">
			<input type="password" id="login_pw" class="krds-input" placeholder="8-12자의 영문자, 숫자, 특수문자 조합" value="1234567890">
			<button type="button" class="krds-btn medium icon">
				<span class="sr-only">입력한 비밀번호 보기</span>
				<i class="svg-icon ico-pw-visible"></i>
			</button>
		</div>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="login_pw2">레이블</label>
		</div>
		<div class="form-conts btn-ico-wrap">
			<input type="text" id="login_pw2" class="krds-input" placeholder="8-12자의 영문자, 숫자, 특수문자 조합" value="1234567890">
			<button type="button" class="krds-btn medium icon">
				<span class="sr-only">입력한 비밀번호 가리기</span>
				<i class="svg-icon ico-pw-visible-on"></i>
			</button>
		</div>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="form_delete">레이블</label>
		</div>
		<div class="form-conts btn-ico-wrap" data-delete="true">
			<input type="text" id="form_delete" class="krds-input" placehol
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-input bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Text Input Icon 예시
</button>
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

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="text_input_icon"` / `data-krds-reference="assets/krds/html/code/text_input_icon.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
