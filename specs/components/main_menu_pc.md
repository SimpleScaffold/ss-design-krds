# Main Menu Pc (`main_menu_pc`)

> **Category**: Navigation (탐색)
> **Parent**: —
> **Variants**: main_menu_mobile
> **Source**: `assets/krds/html/code/main_menu_pc.html`

## Overview

데스크톱용 주요 메뉴입니다. header 내부 nav에 배치합니다.

## Component Tree

```text
main_menu_pc (기본)
└── main_menu_mobile
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- 메인메뉴 : 데스크탑 -->
<!-- 이 코드는 샘플용입니다. 실제 동작은 헤더를 참조하세요. -->
<nav class="krds-main-menu sample">
	<div class="inner">
		<ul class="gnb-menu">
			<li>
				<button type="button" class="gnb-main-trigger active" data-trigger="gnb">1Depth</button>
				<!-- gnb-toggle-wrap -->
				<div class="gnb-toggle-wrap is-open">
					<!-- gnb-main-list -->
					<div class="gnb-main-list" data-has-submenu="true">
						<ul>
							<li>
								<button type="button" class="gnb-sub-trigger active" data-trigger="gnb">2Depth</button>
								<!-- gnb-sub-list -->
								<div class="gnb-sub-list active">
									<div class="gnb-sub-content">
										<h2 class="sub-title">
											2Depth title
											<a href="#" class="krds-btn link basic small">
												<span class="underline">바로가기</span>
												<i class="svg-icon ico-angle right"></i>
											</a>
										</h2>
										<ul>
											<li><a href="#">Last depth</a></li>
											<li><button type="button">Last depth</button></li>
										</ul>
									</div>
									<div class="gnb-sub-banner">
										<span class="krds-badge bg-secondary">신규 서비스</span>
										<button type="button" class="krds-btn medium text">메뉴명 <
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<nav class="krds-main-menu sample font-krds" data-krds-component="main_menu_pc">
	<div class="inner">
		<ul class="gnb-menu">
			<li>
				<button type="button" class="gnb-main-trigger active" data-trigger="gnb">1Depth</button>
				<!-- gnb-toggle-wrap -->
				<div class="gnb-toggle-wrap is-open">
					<!-- gnb-main-list -->
					<div class="gnb-main-list" data-has-submenu="true">
						<ul>
							<li>
								<button type="button" class="gnb-sub-trigger active" data-trigger="gnb">2Depth</button>
								<!-- gnb-sub-list -->
								<div class="gnb-sub-list active">
									<div class="gnb-sub-content">
										<h2 class="sub-title">
											2Depth title
											<a href="#" class="krds-btn link basic small inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1">
												<span class="underline">바로가기</span>
												<i class="svg-icon ico-angle right"></i>
											</a>
										</h2>
										<ul>
											<li><a href="#">Last depth</a></li>
											<li><button type="button">Last depth</button></li>
										</ul>
									</div>
									<div class="gnb-sub-banner">
										<span class="krds-badge bg-secondary inline-flex items-center font-krds text-krds-text rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1">신규 서비스</span>
										<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">메뉴명 <i class="svg-icon ico-angle right"></i></button>
									</div>
								</div>
								<!-- //gnb-sub-list -->
							</li>
							<li>
								<button type="button" class="gnb-sub-trigger" data-trigger="gnb">2Depth</button>
								<!-- gnb-sub-list -->
								<div class="gnb-sub-list between">
									<div class="gnb-sub-content">
										<h2 class="sub-title">
											2Depth title
											<a href="#" class="krds-btn link basic small inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1">
												<span class="underline">바로가기</span>
												<i class="svg-icon ico-angle right"></i>
											</a>
										</h2>
										<ul>
											<li><a href="#">Last depth</a></li>
											<li><button type="button">Last depth</button></li>
											<li><button type="button">Last depth</button></li>
										</ul>
									</div>
									<div class="gnb-sub-banner">
										<span class="krds-badge bg-secondary inline-flex items-center font-krds text-krds-text rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1">신규 서비스</span>
										<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">메뉴명 <i class="svg-icon ico-angle right"></i></button>
									</div>
								</div>
								<!-- //gnb-sub-list -->
							</li>
							<li>
								<button type="button" class="gnb-sub-trigger" data-trigger="gnb">2Depth</button>
								<!-- gnb-sub-list -->
								<div class="gnb-sub-list between">
									<div class="gnb-sub-content">
										<h2 class="sub-title"><span>2Depth title</span></h2>
										<ul>
											<li><a href="#">Last depth</a></li>
											<li><button type="button">Last depth</button></li>
											<li><button type="button">Last depth</button></li>
										</ul>
									</div>
									<div class="gnb-sub-banner">
										<span class="krds-badge bg-secondary inline-flex items-center font-krds text-krds-text rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1">신규 서비스</span>
										<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">메뉴명 <i class="svg-icon ico-angle right"></i></button>
									</div>
								</div>
								<!-- //gnb-sub-list -->
							</li>
							<li>
								<a href="#" class="gnb-sub-trigger is-link" data-trigger="gnb">2Depth</a>
							</li>
							<li>
								<a href="#" class="gnb-sub-trigger is-link external-link" data-trigger="gnb" target="_blank" title="새 창 열림">2Depth</a>
							</li>
						</ul>
					</div>
					<!-- //gnb-main-list -->
				</div>
				<!-- //gnb-toggle-wrap -->
			</li>
			
			<li>
				<button type="button" class="gnb-main-trigger" data-trigger="gnb">1Depth</button>
				<!-- gnb-toggle-wrap -->
				<div class="gnb-toggle-wrap">
					<!-- gnb-main-list -->
					<div class="gnb-main-list" data-has-submenu="true">
						<ul>
							<li>
								<button type="button" class="gnb-sub-trigger" data-trigger="gnb">2Depth</button>
								<!-- gnb-sub-list -->
								<div class="gnb-sub-list">
									<div class="gnb-sub-content">
										<h2 class="sub-title"><span>2Depth title</span></h2>
										<ul class="type-description">
											<li>
												<h3 class="tit">
													<a href="#" target="_blank" title="새 창 열림">3Depth title <i class="svg-icon ico-go"></i></a>
												</h3>
												<p class="txt">메뉴명과 메뉴에 관한 간략한 설명이 표시되는 스타일입니다.</p>
											</li>
										</ul>
									</div>
									<div class="gnb-sub-banner">
										<span class="krds-badge bg-secondary inline-flex items-center font-krds text-krds-text rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1">신규 서비스</span>
										<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">메뉴명 <i class="svg-icon ico-angle right"></i></button>
									</div>
								</div>
								<!-- //gnb-sub-list -->
							</li>
							<li>
								<button type="button" class="gnb-sub-trigger" data-trigger="gnb">2Depth</button>
								<!-- gnb-sub-list -->
								<div class="gnb-sub-list between">
									<div class="gnb-sub-content">
										<h2 class="sub-title"><span>2Depth title</span></h2>
										<ul class="type-description">
											<li>
												<h3 class="tit">
													<a href="#" target="_blank" title="새 창 열림">3Depth title <i class="svg-icon ico-go"></i></a>
												</h3>
												<p class="txt">메뉴명과 메뉴에 관한 간략한 설명이 표시되는 스타일입니다.</p>
											</li>
										</ul>
									</div>
									<div class="gnb-sub-banner">
										<span class="krds-badge bg-secondary inline-flex items-center font-krds text-krds-text rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1">신규 서비스</span>
										<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">메뉴명 <i class="svg-icon ico-angle right"></i></button>
									</div>
								</div>
								<!-- //gnb-sub-list -->
							</li>
							<li>
								<a href="#" class="gnb-sub-trigger is-link" data-trigger="gnb">2Depth</a>
							</li>
							<li>
								<a href="#" class="gnb-sub-trigger is-link external-link" data-trigger="gnb" target="_blank" title="새 창 열림">2Depth</a>
							</li>
						</ul>
					</div>
					<!-- //gnb-main-list -->
				</div>
				<!-- //gnb-toggle-wrap -->
			</li>
			
			<li>
				<button type="button" class="gnb-main-trigger" data-trigger="gnb">1Depth</button>
				<!-- gnb-toggle-wrap -->
				<div class="gnb-toggle-wrap">
					<!-- gnb-main-list -->
					<div class="gnb-main-list">
						<!-- gnb-sub-list -->
						<div class="gnb-sub-list single-list between">
							<div class="gnb-sub-content">
								<h2 class="sub-title"><span>2Depth title</span></h2>
								<ul>
									<li><a href="#">Last depth</a></li>
									<li><a href="#">Last depth</a></li>
									<li><a href="#">Last depth</a></li>
									<li><a href="#">Last depth</a></li>
									<li><a href="#">Last depth</a></li>
									<li><a href="#">Last depth</a></li>
									<li><a href="#">Last depth</a></li>
									<li><a href="#">Last depth</a></li>
									<li><a href="#">Last depth</a></li>
									<li><a href="#">Last depth</a></li>
								</ul>
							</div>
							<div class="gnb-sub-banner">
								<span class="krds-badge bg-secondary inline-flex items-center font-krds text-krds-text rounded-krds-full text-krds-label-sm font-bold px-krds-4 py-krds-1">신규 서비스</span>
								<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">메뉴명 <i class="svg-icon ico-angle right"></i></button>
							</div>
						</div>
						<!-- //gnb-sub-list -->
					</div>
					<!-- //gnb-main-list -->
				</div>
				<!-- //gnb-toggle-wrap -->
			</li>
			
			<li>
				<a href="#" class="gnb-main-trigger is-link" data-trigger="gnb">링크(anchor)</a>
			</li>
			<li>
				<button type="button" class="gnb-main-trigger is-link" data-trigger="gnb">링크(button)</button>
			</li>
		</ul>
	</div>
</nav>
<!-- //메인메뉴 : 데스크탑 -->
```

## Page Context

페이지 트리상 위치: `#krds-header > nav[aria-label]`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [header.md](./header.md)
- [breadcrumb.md](./breadcrumb.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="main_menu_pc"` / `data-krds-reference="assets/krds/html/code/main_menu_pc.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
