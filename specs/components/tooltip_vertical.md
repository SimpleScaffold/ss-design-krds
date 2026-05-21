# Tooltip Vertical (`tooltip_vertical`)

> **Category**: Help (도움)
> **Parent**: tooltip
> **Variants**: —
> **Source**: `assets/krds/html/code/tooltip_vertical.html`

## Overview

세로 배치 툴팁입니다.

## Component Tree

```text
tooltip (부모)
└── tooltip_vertical
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- tooltip -->
<button type="button" class="krds-btn small text krds-tooltip tooltip-vertical" data-tooltip="tooltip-vertical 옵션입니다">
  tooltip-vertical <i class="svg-icon ico-angle right"></i>
</button>

<button type="button" class="krds-btn icon krds-tooltip tooltip-vertical" data-tooltip="아이콘 버튼에 제공되는 툴팁">
  <span class="sr-only">도움말</span>
  <i class="svg-icon ico-help"></i>
</button>

<button type="button" class="krds-btn krds-tooltip tooltip-vertical" data-tooltip="버튼에 제공되는 툴팁">도움말</button>
<!-- //tooltip -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Tooltip Vertical 예시
</button>
```

## Page Context

페이지 트리상 위치: `inline`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [tooltip.md](./tooltip.md) (parent)
- [tooltip.md](./tooltip.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="tooltip_vertical"` / `data-krds-reference="assets/krds/html/code/tooltip_vertical.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
