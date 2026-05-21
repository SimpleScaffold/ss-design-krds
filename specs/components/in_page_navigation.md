# In Page Navigation (`in_page_navigation`)

> **Category**: Navigation (탐색)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/in_page_navigation.html`

## Overview

긴 콘텐츠 페이지 내 섹션 앵커 탐색입니다.

## Component Tree

```text
in_page_navigation (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- krds-in-page-navigation-type -->
<div class="krds-in-page-navigation-type">
	<!-- In page navigation -->
	<div class="krds-in-page-navigation-area">
		<div class="in-page-navigation-header">
			<p class="quick-caption">이 페이지의 구성</p>
			<p class="quick-title">장애아동수당</p>
		</div>
		<nav class="in-page-navigation-list">
			<ul>
				<li><a href="#section_01" class="active">서비스 개요</a></li>
				<li><a href="#section_02">서비스 상세</a></li>
				<li><a href="#section_03">신청 방법 및 절차</a></li>
				<li><a href="#section_04">제출 서류</a></li>
				<li><a href="#section_05">함께 신청할 수 있는 서비스</a></li>
				<li><a href="#section_06">부가정보</a></li>
				<li><a href="#section_07">정보 변경 내역</a></li>
			</ul>
		</nav>
		<div class="in-page-navigation-action">
			<button type="button" class="krds-btn medium">온라인 신청하기</button>
			<p class="quick-info">장애아동수당 외 <strong>1건</strong></p>
		</div>
	</div>
	<!-- //In page navigation -->
</div>
<!-- //krds-in-page-navigation-type -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  In Page Navigation 예시
</button>
```

## Page Context

페이지 트리상 위치: `main#content > aside.in-page-nav`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [breadcrumb.md](./breadcrumb.md)
- [side_navigation.md](./side_navigation.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="in_page_navigation"` / `data-krds-reference="assets/krds/html/code/in_page_navigation.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
