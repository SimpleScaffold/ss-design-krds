# Side Navigation (`side_navigation`)

> **Category**: Navigation (탐색)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/side_navigation.html`

## Overview

좌측 사이드바 형태의 보조 탐색 메뉴입니다.

## Component Tree

```text
side_navigation (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- side navigation -->
<nav class="krds-side-navigation">
	<h2 class="lnb-tit">1Depth-title</h2>
	<!-- lnb-list -->
	<ul class="lnb-list" role="menubar">
		<li class="lnb-item active" role="none">
			<button type="button" class="lnb-btn lnb-toggle active" role="menuitem" aria-controls="lnbmenu-1" aria-expanded="true">2Depth-menu</button>
			<!-- lnb-submenu -->
			<div class="lnb-submenu">
				<ul id="lnbmenu-1" role="menu">
					<li class="lnb-subitem" role="none">
						<button type="button" class="lnb-btn lnb-toggle-popup" role="menuitem" aria-controls="lnbmenu-2" aria-expanded="false" aria-haspopup="true">3Depth-menu</button>
						<!-- lnb-submenu-lv2 -->
						<div class="lnb-submenu-lv2" id="lnbmenu-2" role="menu">
							<button type="button" class="lnb-btn-tit">3Depth-title</button>
							<ul>
								<li role="none"><a href="#" class="lnb-btn" role="menuitem">4Depth</a></li>
								<li role="none"><a href="#" class="lnb-btn" role="menuitem">4Depth</a></li>
								<li role="none"><a href="#" class="lnb-btn" role="menuitem">4Depth</a></li>
							</ul>
						</div>
						<!-- //lnb-submenu-lv2 -->
					</li>
					<li class="lnb-subitem" role="none"><a href="#" class="l
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<nav class="krds-side-navigation font-krds flex flex-col gap-krds-2" data-krds-component="side_navigation">
	<h2 class="lnb-tit">1Depth-title</h2>
	<!-- lnb-list -->
	<ul class="lnb-list" role="menubar">
		<li class="lnb-item active" role="none">
			<button type="button" class="lnb-btn lnb-toggle active" role="menuitem" aria-controls="lnbmenu-1" aria-expanded="true">2Depth-menu</button>
			<!-- lnb-submenu -->
			<div class="lnb-submenu">
				<ul id="lnbmenu-1" role="menu">
					<li class="lnb-subitem" role="none">
						<button type="button" class="lnb-btn lnb-toggle-popup" role="menuitem" aria-controls="lnbmenu-2" aria-expanded="false" aria-haspopup="true">3Depth-menu</button>
						<!-- lnb-submenu-lv2 -->
						<div class="lnb-submenu-lv2" id="lnbmenu-2" role="menu">
							<button type="button" class="lnb-btn-tit">3Depth-title</button>
							<ul>
								<li role="none"><a href="#" class="lnb-btn" role="menuitem">4Depth</a></li>
								<li role="none"><a href="#" class="lnb-btn" role="menuitem">4Depth</a></li>
								<li role="none"><a href="#" class="lnb-btn" role="menuitem">4Depth</a></li>
							</ul>
						</div>
						<!-- //lnb-submenu-lv2 -->
					</li>
					<li class="lnb-subitem" role="none"><a href="#" class="lnb-btn lnb-link" role="menuitem">3Depth-link</a></li>
					<li class="lnb-subitem active" role="none"><a href="#" class="lnb-btn lnb-link" role="menuitem" aria-current="page">3Depth-link</a></li>
				</ul>
			</div>
			<!-- //lnb-submenu -->
		</li>
		<li class="lnb-item" role="none">
			<button type="button" class="lnb-btn lnb-toggle" role="menuitem" aria-controls="lnbmenu-4" aria-expanded="false">2Depth-menu</button>
			<!-- lnb-submenu -->
			<div class="lnb-submenu">
				<ul id="lnbmenu-4" role="menu">
					<li class="lnb-subitem" role="none">
						<button type="button" class="lnb-btn lnb-toggle-popup" role="menuitem" aria-controls="lnbmenu-5" aria-expanded="false" aria-haspopup="true">3Depth-menu</button>
						<!-- lnb-submenu-lv2 -->
						<div class="lnb-submenu-lv2" id="lnbmenu-5" role="menu">
							<button type="button" class="lnb-btn-tit">3Depth-title</button>
							<ul>
								<li role="none"><a href="#" class="lnb-btn" role="menuitem">4Depth</a></li>
								<li role="none"><a href="#" class="lnb-btn" role="menuitem">4Depth</a></li>
								<li role="none"><a href="#" class="lnb-btn" role="menuitem">4Depth</a></li>
							</ul>
						</div>
						<!-- //lnb-submenu-lv2 -->
					</li>
					<li class="lnb-subitem" role="none"><a href="#" class="lnb-btn lnb-link" role="menuitem">3Depth-link</a></li>
					<li class="lnb-subitem" role="none"><a href="#" class="lnb-btn lnb-link" role="menuitem">3Depth-link</a></li>
				</ul>
			</div>
			<!-- //lnb-submenu -->
		</li>
		<li class="lnb-item" role="none">
			<button type="button" class="lnb-btn lnb-toggle" role="menuitem" aria-controls="lnbmenu-6" aria-expanded="false">2Depth-menu</button>
			<!-- lnb-submenu -->
			<div class="lnb-submenu">
				<ul id="lnbmenu-6" role="menu">
					<li class="lnb-subitem" role="none">
						<button type="button" class="lnb-btn lnb-toggle-popup" role="menuitem" aria-controls="lnbmenu-7" aria-expanded="false" aria-haspopup="true">3Depth-menu</button>
						<!-- lnb-submenu-lv2 -->
						<div class="lnb-submenu-lv2" id="lnbmenu-7" role="menu">
							<button type="button" class="lnb-btn-tit">3Depth-title</button>
							<ul>
								<li role="none"><a href="#" class="lnb-btn" role="menuitem">4Depth</a></li>
								<li role="none"><a href="#" class="lnb-btn" role="menuitem">4Depth</a></li>
								<li role="none"><a href="#" class="lnb-btn" role="menuitem">4Depth</a></li>
							</ul>
						</div>
						<!-- //lnb-submenu-lv2 -->
					</li>
					<li class="lnb-subitem" role="none"><a href="#" class="lnb-btn lnb-link" role="menuitem">3Depth-link</a></li>
					<li class="lnb-subitem" role="none"><a href="#" class="lnb-btn lnb-link" role="menuitem">3Depth-link</a></li>
				</ul>
			</div>
			<!-- //lnb-submenu -->
		</li>
	</ul>
	<!-- //lnb-list -->
</nav>
```

## Page Context

페이지 트리상 위치: `#container > aside 또는 좌측 nav`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [main_menu_pc.md](./main_menu_pc.md)
- [in_page_navigation.md](./in_page_navigation.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="side_navigation"` / `data-krds-reference="assets/krds/html/code/side_navigation.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
