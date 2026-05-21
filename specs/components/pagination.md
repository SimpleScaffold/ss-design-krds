# Pagination (`pagination`)

> **Category**: Navigation (탐색)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/pagination.html`

## Overview

목록·검색 결과의 페이지 이동 컨트롤입니다.

## Component Tree

```text
pagination (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- pagination -->
<div class="krds-pagination">
	<span class="page-navi prev disabled" href="#">이전</span>
	<div class="page-links">
		<a class="page-link" href="#">1</a>
		<a class="page-link" href="#">2</a>
		<a class="page-link" href="#">3</a>
		<a class="page-link active" href="#"><span class="sr-only">현재페이지 </span>4</a>
		<a class="page-link" href="#">5</a>
		<a class="page-link" href="#">6</a>
		<a class="page-link" href="#">7</a>
		<a class="page-link" href="#">8</a>
		<span class="page-link link-dot"></span>
		<a class="page-link" href="#">99</a>
	</div>
	<a class="page-navi next" href="#">다음</a>
</div>
<!-- //pagination -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Pagination 예시
</button>
```

## Page Context

페이지 트리상 위치: `section > nav.pagination`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [table.md](./table.md)
- [structured_list.md](./structured_list.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="pagination"` / `data-krds-reference="assets/krds/html/code/pagination.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
