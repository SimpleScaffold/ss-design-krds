# Link (`link`)

> **Category**: Action (액션)
> **Parent**: —
> **Variants**: tag_link
> **Source**: `assets/krds/html/code/link.html`

## Overview

KRDS 스타일 하이퍼링크입니다. 본문·푸터·메뉴에서 사용합니다.

## Component Tree

```text
link (기본)
└── tag_link
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- link -->
<a href="https://www.site_name.com/" class="krds-btn small link" target="_blank" title="새 창 열림">
	<span class="underline">기본 링크</span>
	<i class="svg-icon ico-go"></i>
</a>
<a href="#!" class="krds-btn medium link pure">
	<span class="underline">가상클래스 상태 시 컬러 유지</span>
</a>
<a href="#!" class="krds-btn large link basic" target="_blank" title="새 창 열림">
	<span class="underline">본문 텍스트 컬러 링크</span>
	<i class="svg-icon ico-go"></i>
</a>
<a href="#!" class="krds-btn large link basic">
	<span class="underline hidden-underline">가상클래스 상태 시 밑줄</span>
</a>
<a href="#!" class="krds-btn large link basic">
	<span>밑줄 없음</span>
</a>
<!-- //link -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Link 예시
</button>
```

## Page Context

페이지 트리상 위치: `footer, nav, 본문 a.krds-link`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [button_text.md](./button_text.md)
- [breadcrumb.md](./breadcrumb.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="link"` / `data-krds-reference="assets/krds/html/code/link.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
