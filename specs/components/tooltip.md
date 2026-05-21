# Tooltip (`tooltip`)

> **Category**: Help (도움)
> **Parent**: —
> **Variants**: tooltip_box, tooltip_vertical
> **Source**: `assets/krds/html/code/tooltip.html`

## Overview

호버·포커스 시 표시되는 툴팁입니다.

## Component Tree

```text
tooltip (기본)
├── tooltip_box
└── tooltip_vertical
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- tooltip -->
<button type="button" class="krds-btn small text krds-tooltip" data-tooltip="툴팁의 기본 설정입니다">
	tooltip-horizontal <i class="svg-icon ico-angle right"></i>
</button>

<button type="button" class="krds-btn icon krds-tooltip" data-tooltip="아이콘 버튼에 제공되는 툴팁">
	<span class="sr-only">도움말</span>
	<i class="svg-icon ico-help"></i>
</button>

<button type="button" class="krds-btn krds-tooltip" data-tooltip="버튼에 제공되는 툴팁">도움말</button>
<!-- //tooltip -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Tooltip 예시
</button>
```

## Page Context

페이지 트리상 위치: `inline .tooltip`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [contextual_help.md](./contextual_help.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="tooltip"` / `data-krds-reference="assets/krds/html/code/tooltip.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
