# Button Hierarchy (`button_hierarchy`)

> **Category**: Action (액션)
> **Parent**: —
> **Variants**: button, button_size, button_icon, button_text, button_with_icon
> **Source**: `assets/krds/html/code/button_hierarchy.html`

## Overview

primary·secondary·tertiary 버튼 계층 가이드입니다. 한 화면에 1개 primary 권장.

## Component Tree

```text
button_hierarchy (기본)
├── button
├── button_size
├── button_icon
├── button_text
└── button_with_icon
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- button -->
<button type="button" class="krds-btn primary">버튼 : primary</button>
<button type="button" class="krds-btn secondary">버튼 : secondary</button>
<button type="button" class="krds-btn tertiary">버튼 : tertiary</button>
<!-- //button -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<button type="button" class="krds-btn primary inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border bg-krds-primary text-white border-krds-primary hover:bg-krds-primary-hover" data-krds-component="button_hierarchy">버튼 : primary</button>
<button type="button" class="krds-btn secondary inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border bg-krds-surface text-krds-primary border-krds-primary">버튼 : secondary</button>
<button type="button" class="krds-btn tertiary inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border bg-krds-surface border-krds-border">버튼 : tertiary</button>
```

## Page Context

페이지 트리상 위치: `section > .button-row`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [button.md](./button.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="button_hierarchy"` / `data-krds-reference="assets/krds/html/code/button_hierarchy.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
