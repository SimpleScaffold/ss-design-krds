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
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div id="mobile-nav" class="krds-main-menu-mobile sample font-krds" style="display: block; position: static; visibility: visible;" data-krds-component="main_menu_mobile">
	<div class="gnb-wrap">
		<!-- gnb-header -->
		<div class="gnb-header">
			<!-- gnb-utils -->
			<div class="gnb-utils">
				<ul class="utility-list">
					<li><button type="button" class="krds-btn xsmall text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1 border-0 bg-transparent">메뉴명</button></li>
					<li><button type="button" class="krds-btn xsmall text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1 border-0 bg-transparent">메뉴명</button></li>
				</ul>
			</div>
			<!-- //gnb-utils -->
			<!-- gnb-login -->
			<div class="gnb-login">
				<!-- <span class="user">홍길동님</span> -->
				<!-- <button type="button" class="krds-btn large text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-lg border-0 bg-transparent"><i class="svg-icon ico-logout"></i> 로그아웃</button> -->
				<button type="button" class="krds-btn large text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-lg border-0 bg-transparent"><i class="svg-icon ico-log"></i> 로그인을 해주세요</button>
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
				<input type="text" class="krds-input w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" placeholder="찾고자 하는 메뉴명을 입력해 주세요" title="찾고자 하는 메뉴명 입력" />
				<button type="button" class="krds-btn medium icon ico-search inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md w-11 p-0">
					<span class="sr-only">검색</span>
					<i class="svg-icon ico-sch"></i>
				</button>
			</div>
			<!-- //검색 -->
		</div>
		<!-- //gnb-header -->
		
		<!-- gnb-body -->
		<div class="gnb-body">
			<!-- gnb-menu -->
			<div class="gnb-menu">
				<div class="menu-wrap">
					<ul>
						<li>
							<a href="#mGnb-anchor1" class="gnb-main-trigger">1Depth</a>
						</li>
						<li>
							<a href="#mGnb-anchor2" class="gnb-main-trigger">1Depth</a>
						</li>
						<li>
							<a href="#mGnb-anchor3" class="gnb-main-trigger">1Depth</a>
						</li>
						<li>
							<a href="#mGnb-anchor4" class="gnb-main-trigger">1Depth</a>
						</li>
						<li>
							<a href="#mGnb-anchor5" class="gnb-main-trigger">1Depth</a>
						</li>
					</ul>
				</div>
				<div class="submenu-wrap">
					<div class="gnb-sub-list" id="mGnb-anchor1">
						<h2 class="sub-title">1Depth</h2>
						<ul>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
						</ul>
					</div>
					<div class="gnb-sub-list" id="mGnb-anchor2">
						<h2 class="sub-title">1Depth</h2>
						<ul>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
						</ul>
					</div>
					<div class="gnb-sub-list" id="mGnb-anchor3">
						<h2 class="sub-title">1Depth</h2>
						<ul>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
							<li>
								<a href="#" class="gnb-sub-trigger has-depth3">2Depth</a>
								<div class="depth3-wrap">
									<ul>
										<li>
											<a href="#" class="depth3-trigger has-depth4">3Depth</a>
											<div class="depth4-wrap">
												<div class="depth4-head">
													<button type="button" class="krds-btn icon trigger-prev inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border w-11 p-0">
														<span class="sr-only">이전화면</span>
														<i class="svg-icon ico-angle left"></i>
													</button>
													<button type="button" class="krds-btn icon trigger-close inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border w-11 p-0">
														<span class="sr-only">전체메뉴 닫기</span>
														<i class="svg-icon ico-popup-close"></i>
													</button>
												</div>
												<ul class="depth4-body">
													<h4 class="sub-title">4Depth title</h4>
													<ul class="depth4-ul">
														<li><a href="#">depth title</a></li>
														<li><a href="#">depth title</a></li>
														<li><a href="#">depth title</a></li>
														<li><a href="#">depth title</a></li>
													</ul>
												</ul>
											</div>
										</li>
										<li><a href="#" class="depth3-trigger">3Depth</a></li>
										<li><a href="#" class="depth3-trigger">3Depth</a></li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
					<div class="gnb-sub-list" id="mGnb-anchor4">
						<h2 class="sub-title">1Depth</h2>
						<ul>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
						</ul>
					</div>
					<div class="gnb-sub-list" id="mGnb-anchor5">
						<h2 class="sub-title">1Depth</h2>
						<ul>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
							<li><a href="#" class="gnb-sub-trigger">2Depth</a></li>
						</ul>
					</div>
				</div>
			</div>
			<!-- //gnb-menu -->
			<!-- gnb-bottom -->
			<div class="gnb-bottom">
				<a href="#" class="krds-btn small text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1 border-0 bg-transparent">메뉴명 <i class="svg-icon ico-angle right"></i></a>
				<a href="#" class="krds-btn small text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1 border-0 bg-transparent" target="_blank" title="새 창 열기"> 메뉴명 <i class="svg-icon ico-go"></i></a>
			</div>
			<!-- //gnb-bottom -->
		</div>
		<!-- //gnb-body -->
		
		<!-- gnb-close -->
		<button type="button" class="krds-btn medium icon inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md w-11 p-0" id="close-nav">
			<span class="sr-only">전체메뉴 닫기</span>
			<i class="svg-icon ico-popup-close"></i>
		</button>
		<!-- //gnb-close -->
	</div>
</div>
<!-- //메인메뉴 : 모바일 -->
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
