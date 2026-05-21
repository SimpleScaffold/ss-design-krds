# Badge Number (`badge_number`)

> **Category**: Feedback (피드백)
> **Parent**: badge
> **Variants**: —
> **Source**: `assets/krds/html/code/badge_number.html`

## Overview

숫자(재고·카운트)를 표시하는 뱃지입니다.

## Component Tree

```text
badge (부모)
└── badge_number
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- badge -->
<div class="krds-badge-wrap">
	<span class="krds-badge bg-primary number">5</span>
	<span class="krds-badge bg-primary number">999+</span>
</div>

<div class="krds-badge-wrap">
	<span class="krds-badge bg-point number">5</span>
	<span class="krds-badge bg-point number">999+</span>
</div>
<!-- //badge -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="krds-badge-wrap inline-flex items-center font-krds text-krds-text rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1" data-krds-component="badge_number">
	<span class="krds-badge bg-primary number inline-flex items-center font-krds text-krds-text rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1">5</span>
	<span class="krds-badge bg-primary number inline-flex items-center font-krds text-krds-text rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1">999+</span>
</div>

<div class="krds-badge-wrap inline-flex items-center font-krds text-krds-text rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1">
	<span class="krds-badge bg-point number inline-flex items-center font-krds text-krds-text rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1">5</span>
	<span class="krds-badge bg-point number inline-flex items-center font-krds text-krds-text rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1">999+</span>
</div>
```

## Page Context

페이지 트리상 위치: `table td > .krds-badge`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [badge.md](./badge.md) (parent)
- [badge.md](./badge.md)
- [table.md](./table.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="badge_number"` / `data-krds-reference="assets/krds/html/code/badge_number.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
