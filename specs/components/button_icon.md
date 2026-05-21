# Button Icon (`button_icon`)

> **Category**: Action (액션)
> **Parent**: button
> **Variants**: —
> **Source**: `assets/krds/html/code/button_icon.html`

## Overview

아이콘만 있는 버튼입니다. sr-only 라벨 필수.

## Component Tree

```text
button (부모)
└── button_icon
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- button -->
<button type="button" class="krds-btn icon">
	<span class="sr-only">검색</span>
	<i class="svg-icon ico-sch"></i>
</button>
<button type="button" class="krds-btn icon medium">
	<span class="sr-only">입력한 비밀번호 보기</span>
	<i class="svg-icon ico-pw-visible"></i>
</button>
<button class="krds-btn icon medium btn-help-exec">
	<span class="sr-only">도움말</span>
	<i class="svg-icon ico-help"></i>
</button>

<button type="button" class="krds-btn large icon border">
	<span class="sr-only">새로고침</span>
	<i class="svg-icon ico-refresh"></i>
</button>
<button type="button" class="krds-btn large icon border" disabled>
	<span class="sr-only">열기</span>
	<i class="svg-icon ico-angle down"></i>
</button>
<!-- //button -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-btn primary bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Button Icon 예시
</button>
```

## Page Context

페이지 트리상 위치: `section > .button-row > .krds-btn.icon`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [button.md](./button.md) (parent)
- [button.md](./button.md)
- [button_with_icon.md](./button_with_icon.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="button_icon"` / `data-krds-reference="assets/krds/html/code/button_icon.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
