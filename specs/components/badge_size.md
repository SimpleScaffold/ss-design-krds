# Badge Size (`badge_size`)

> **Category**: Feedback (피드백)
> **Parent**: badge
> **Variants**: —
> **Source**: `assets/krds/html/code/badge_size.html`

## Overview

뱃지 크기 변형입니다.

## Component Tree

```text
badge (부모)
└── badge_size
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- badge -->
<div class="krds-badge-wrap">
	<span class="krds-badge large outline-primary">Label</span>
	<span class="krds-badge large outline-secondary">Label</span>
	<span class="krds-badge large outline-gray">Label</span>
	<span class="krds-badge large outline-point">Label</span>
	<span class="krds-badge large outline-danger">Label</span>
	<span class="krds-badge large outline-warning">Label</span>
	<span class="krds-badge large outline-success">Label</span>
	<span class="krds-badge large outline-information">Label</span>
	<span class="krds-badge large outline-disabled">Label</span>
</div>

<div class="krds-badge-wrap">
	<span class="krds-badge medium bg-primary">Label</span>
	<span class="krds-badge medium bg-secondary">Label</span>
	<span class="krds-badge medium bg-gray">Label</span>
	<span class="krds-badge medium bg-point">Label</span>
	<span class="krds-badge medium bg-danger">Label</span>
	<span class="krds-badge medium bg-warning">Label</span>
	<span class="krds-badge medium bg-success">Label</span>
	<span class="krds-badge medium bg-information">Label</span>
	<span class="krds-badge medium bg-disabled">Label</span>
</div>

<div class="krds-badge-wrap">
	<span class="k
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-badge bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Badge Size 예시
</button>
```

## Page Context

페이지 트리상 위치: `section > .krds-badge`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [badge.md](./badge.md) (parent)
- [badge.md](./badge.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="badge_size"` / `data-krds-reference="assets/krds/html/code/badge_size.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
