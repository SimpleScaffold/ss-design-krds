# Button (`button`)

> **Category**: Action (액션)
> **Parent**: button_hierarchy
> **Variants**: button_size, button_icon, button_text, button_with_icon
> **Source**: `assets/krds/html/code/button.html`

## Overview

기본 KRDS 버튼입니다. primary/secondary/tertiary 계층을 따릅니다.

## Component Tree

```text
button_hierarchy (부모)
└── button
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- button -->
<button type="button" class="krds-btn">버튼</button>
<!-- //button -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<button type="button" class="krds-btn inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border" data-krds-component="button">버튼</button>
```

## Page Context

페이지 트리상 위치: `section > .button-row, form > button`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [button_hierarchy.md](./button_hierarchy.md) (parent)
- [button_hierarchy.md](./button_hierarchy.md)
- [link.md](./link.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="button"` / `data-krds-reference="assets/krds/html/code/button.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
