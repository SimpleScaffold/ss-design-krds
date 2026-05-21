# Button With Icon (`button_with_icon`)

> **Category**: Action (액션)
> **Parent**: button
> **Variants**: —
> **Source**: `assets/krds/html/code/button_with_icon.html`

## Overview

아이콘과 텍스트가 함께 있는 버튼입니다.

## Component Tree

```text
button (부모)
└── button_with_icon
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- button -->
<button type="button" class="krds-btn xsmall">
	x-small 버튼
	<i class="svg-icon ico-sch"></i>
</button>
<button type="button" class="krds-btn small">
	small 버튼
	<i class="svg-icon ico-sch"></i>
</button>
<button type="button" class="krds-btn medium">
	medium 버튼
	<i class="svg-icon ico-sch"></i>
</button>
<button type="button" class="krds-btn large">
	large 버튼
	<i class="svg-icon ico-sch"></i>
</button>
<button type="button" class="krds-btn xlarge">
	<i class="svg-icon ico-sch"></i>
	x-large 버튼
</button>
<!-- //button -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-btn primary bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Button With Icon 예시
</button>
```

## Page Context

페이지 트리상 위치: `section > .krds-btn`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [button.md](./button.md) (parent)
- [button_icon.md](./button_icon.md)
- [button.md](./button.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="button_with_icon"` / `data-krds-reference="assets/krds/html/code/button_with_icon.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
