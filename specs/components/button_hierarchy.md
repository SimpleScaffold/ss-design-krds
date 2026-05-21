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
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-btn primary bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Button Hierarchy 예시
</button>
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
