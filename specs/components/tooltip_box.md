# Tooltip Box (`tooltip_box`)

> **Category**: Help (도움)
> **Parent**: tooltip
> **Variants**: —
> **Source**: `assets/krds/html/code/tooltip_box.html`

## Overview

박스 형태 툴팁입니다.

## Component Tree

```text
tooltip (부모)
└── tooltip_box
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- tooltip -->
<button type="button" class="krds-btn small text krds-tooltip tooltip-box" data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
  tooltip-box
  <i class="svg-icon ico-angle right"></i>
</button>

<button type="button" class="krds-btn icon krds-tooltip tooltip-box" data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
  <span class="sr-only">도움말</span>
  <i class="svg-icon ico-help"></i>
</button>

<button type="button" class="krds-btn krds-tooltip tooltip-box" data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">도움말</button>
<!-- //tooltip -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<button type="button" class="krds-btn small text krds-tooltip tooltip-box inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-secondary text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1 border-0 bg-transparent" data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다." data-krds-component="tooltip_box">
  tooltip-box
  <i class="svg-icon ico-angle right"></i>
</button>

<button type="button" class="krds-btn icon krds-tooltip tooltip-box inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-secondary text-krds-body-sm w-11 p-0" data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
  <span class="sr-only">도움말</span>
  <i class="svg-icon ico-help"></i>
</button>

<button type="button" class="krds-btn krds-tooltip tooltip-box inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-secondary text-krds-body-sm" data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">도움말</button>
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
- `data-krds-component="tooltip_box"` / `data-krds-reference="assets/krds/html/code/tooltip_box.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
