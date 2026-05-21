# Breadcrumb (`breadcrumb`)

> **Category**: Navigation (탐색)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/breadcrumb.html`

## Overview

현재 페이지 위치를 계층적으로 표시합니다. main#content 상단에 배치합니다.

## Component Tree

```text
breadcrumb (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- breadcrumb -->
<nav class="krds-breadcrumb-wrap" aria-label="현재 경로" id="breadcrumb">
	<ol class="breadcrumb">
		<li class="home"><a href="#" class="txt">홈</a></li>
		<li><a href="#" class="txt">서비스 신청</a></li>
		<li><a href="#" class="txt">서비스 신청2</a></li>
	</ol>
</nav>
<!-- breadcrumb -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<nav class="krds-breadcrumb-wrap font-krds text-krds-secondary text-krds-body-sm flex flex-wrap gap-krds-2" aria-label="현재 경로" id="breadcrumb" data-krds-component="breadcrumb">
	<ol class="breadcrumb">
		<li class="home"><a href="#" class="txt">홈</a></li>
		<li><a href="#" class="txt">서비스 신청</a></li>
		<li><a href="#" class="txt">서비스 신청2</a></li>
	</ol>
</nav>
<!-- breadcrumb -->
```

## Page Context

페이지 트리상 위치: `main#content > nav.breadcrumb`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [in_page_navigation.md](./in_page_navigation.md)
- [side_navigation.md](./side_navigation.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="breadcrumb"` / `data-krds-reference="assets/krds/html/code/breadcrumb.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
