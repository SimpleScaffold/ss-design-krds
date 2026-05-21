# Button Size (`button_size`)

> **Category**: Action (액션)
> **Parent**: button
> **Variants**: —
> **Source**: `assets/krds/html/code/button_size.html`

## Overview

버튼 크기 변형(xsmall, small, medium, large)입니다.

## Component Tree

```text
button (부모)
└── button_size
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- button -->
<button type="button" class="krds-btn xsmall">x-small 버튼</button>
<button type="button" class="krds-btn small">small 버튼</button>
<button type="button" class="krds-btn medium">medium 버튼</button>
<button type="button" class="krds-btn large">large 버튼</button>
<button type="button" class="krds-btn xlarge">x-large 버튼</button>
<!-- //button -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<button type="button" class="krds-btn xsmall inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1" data-krds-component="button_size">x-small 버튼</button>
<button type="button" class="krds-btn small inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1">small 버튼</button>
<button type="button" class="krds-btn medium inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md">medium 버튼</button>
<button type="button" class="krds-btn large inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-lg">large 버튼</button>
<button type="button" class="krds-btn xlarge inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border">x-large 버튼</button>
```

## Page Context

페이지 트리상 위치: `form > .krds-btn`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [button.md](./button.md) (parent)
- [button.md](./button.md)
- [button_hierarchy.md](./button_hierarchy.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="button_size"` / `data-krds-reference="assets/krds/html/code/button_size.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
