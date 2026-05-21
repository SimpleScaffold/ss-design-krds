# Badge (`badge`)

> **Category**: Feedback (피드백)
> **Parent**: —
> **Variants**: badge_number, badge_size
> **Source**: `assets/krds/html/code/badge.html`

## Overview

상태·카테고리를 표시하는 뱃지입니다.

## Component Tree

```text
badge (기본)
├── badge_number
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
	<span class="krds-badge outline-primary">Label</span>
	<span class="krds-badge outline-secondary">Label</span>
	<span class="krds-badge outline-gray">Label</span>
	<span class="krds-badge outline-point">Label</span>
	<span class="krds-badge outline-danger">Label</span>
	<span class="krds-badge outline-warning">Label</span>
	<span class="krds-badge outline-success">Label</span>
	<span class="krds-badge outline-information">Label</span>
	<span class="krds-badge outline-disabled">Label</span>
</div>

<div class="krds-badge-wrap">
	<span class="krds-badge bg-primary">Label</span>
	<span class="krds-badge bg-secondary">Label</span>
	<span class="krds-badge bg-gray">Label</span>
	<span class="krds-badge bg-point">Label</span>
	<span class="krds-badge bg-danger">Label</span>
	<span class="krds-badge bg-warning">Label</span>
	<span class="krds-badge bg-success">Label</span>
	<span class="krds-badge bg-information">Label</span>
	<span class="krds-badge bg-disabled">Label</span>
</div>

<div class="krds-badge-wrap">
	<span class="krds-badge bg-light-primary">Label</span>
	<span class="krds-badge bg-light-secondary">Label</span>
	<span class="krds
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-badge bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Badge 예시
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

- [tag.md](./tag.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="badge"` / `data-krds-reference="assets/krds/html/code/badge.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
