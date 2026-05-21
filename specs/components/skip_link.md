# Skip Link (`skip_link`)

> **Category**: Navigation (탐색)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/skip_link.html`

## Overview

키보드 사용자가 본문으로 바로 이동하는 skip link입니다. 필수 a11y 요소입니다.

## Component Tree

```text
skip_link (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- 건너뛰기 링크 -->
<div id="krds-skip-link">
	<a href="#breadcrumb">본문 바로가기</a>
</div>
<!-- //건너뛰기 링크 -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Skip Link 예시
</button>
```

## Page Context

페이지 트리상 위치: `#wrap > #krds-skip-link → #content`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [masthead.md](./masthead.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="skip_link"` / `data-krds-reference="assets/krds/html/code/skip_link.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
