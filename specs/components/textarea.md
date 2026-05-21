# Textarea (`textarea`)

> **Category**: Input (입력)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/textarea.html`

## Overview

여러 줄 텍스트 입력입니다.

## Component Tree

```text
textarea (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- textarea -->
<!-- 폼그룹 -->
<div class="form-group">
	<div class="form-tit">
		<label for="textarea">레이블</label>
	</div>
	<div class="form-conts">
		<div class="textarea-wrap">
			<textarea class="krds-input" placeholder="플레이스홀더" id="textarea"></textarea>
			<p class="textarea-count">
				<span class="count-now">0</span><span class="count-total">/100</span>
			</p>
		</div>
	</div>
</div>
<!-- //폼그룹 -->
<!-- //textarea -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-input bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Textarea 예시
</button>
```

## Page Context

페이지 트리상 위치: `form > .field > textarea.krds-input`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [text_input.md](./text_input.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="textarea"` / `data-krds-reference="assets/krds/html/code/textarea.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
