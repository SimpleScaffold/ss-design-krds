# Main Menu Mobile (`main_menu_mobile`)

> **Category**: Navigation (탐색)
> **Parent**: main_menu_pc
> **Variants**: —
> **Source**: `assets/krds/html/code/main_menu_mobile.html`

## Overview

모바일용 햄버거·드로어 메뉴입니다. main_menu_pc의 반응형 대응입니다.

## Component Tree

```text
main_menu_pc (부모)
└── main_menu_mobile
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- 메인메뉴 : 모바일 -->
<!-- 이 코드는 샘플용입니다. 실제 동작은 헤더를 참조하세요. -->
<div id="mobile-nav" class="krds-main-menu-mobile sample" style="display: block; position: static; visibility: visible;">
	<div class="gnb-wrap">
		<!-- gnb-header -->
		<div class="gnb-header">
			<!-- gnb-utils -->
			<div class="gnb-utils">
				<ul class="utility-list">
					<li><button type="button" class="krds-btn xsmall text">메뉴명</button></li>
					<li><button type="button" class="krds-btn xsmall text">메뉴명</button></li>
				</ul>
			</div>
			<!-- //gnb-utils -->
			<!-- gnb-login -->
			<div class="gnb-login">
				<!-- <span class="user">홍길동님</span> -->
				<!-- <button type="button" class="krds-btn large text"><i class="svg-icon ico-logout"></i> 로그아웃</button> -->
				<button type="button" class="krds-btn large text"><i class="svg-icon ico-log"></i> 로그인을 해주세요</button>
			</div>
			<!-- //gnb-login -->
			<!-- gnb-service-menu -->
			<div class="gnb-service-menu">
				<a href="#" class="link">메뉴명</a>
				<a href="#" class="link">메뉴명</a>
				<a href="#" class="link">메뉴명</a>
				<a href="#" class="link">메뉴명</a>
			</div>
			<!-- gnb-service-menu -->
			<!-- 검색 -->
			<div class="sch-input">
				<input type="text" clas
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Main Menu Mobile 예시
</button>
```

## Page Context

페이지 트리상 위치: `#krds-header > mobile menu`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [main_menu_pc.md](./main_menu_pc.md) (parent)
- [main_menu_pc.md](./main_menu_pc.md)
- [header.md](./header.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="main_menu_mobile"` / `data-krds-reference="assets/krds/html/code/main_menu_mobile.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
