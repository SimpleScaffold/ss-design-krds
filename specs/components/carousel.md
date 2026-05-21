# Carousel (`carousel`)

> **Category**: Layout (레이아웃 및 표현)
> **Parent**: —
> **Variants**: carousel_banner
> **Source**: `assets/krds/html/code/carousel.html`

## Overview

여러 콘텐츠를 슬라이드로 순환 표시합니다.

## Component Tree

```text
carousel (기본)
└── carousel_banner
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- carousel -->
<!--
 	해당 컴포넌트 사용 시 페이지에
 	/resources/css/plugin/swiper-bundle.min.css
 	/resources/js/plugin/swiper-bundle.min.js
 	를 추가 필요
 -->
<!-- visual banner -->
<div class="main-vban-wrap bg">
	<div class="inner">
		<div class="vb-swiper">
			<div class="swiper">
				<ul class="swiper-wrapper">
					<li class="swiper-slide">
						<div class="in">
							<div class="text">
								<p class="tit">타이틀 영역 <br class="w-hide">타이틀 영역</p>
								<p class="txt">컨텐츠 영역 컨텐츠 영역 <br class="w-hide">컨텐츠 영역 컨텐츠 영역</p>
								<a href="#" class="krds-btn primary">버튼 영역</a>
							</div>
							<div class="im">
								<svg width="243" height="178" viewBox="0 0 243 178" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="예시">
									<rect width="243" height="178" fill="#E6E8EA"/>
								</svg>
							</div>
						</div>
					</li>
					<li class="swiper-slide">
						<div class="in">
							<div class="text">
								<p class="tit">타이틀 영역 <br class="w-hide">타이틀 영역</p>
								<p class="txt">컨텐츠 영역 컨텐츠 영역 <br class="w-hide">컨텐츠 영역 컨텐츠 영역</p>
								<a href="#" class="krds-btn primary">버튼 영역</a>
							</div>
							<div class="im">
								<svg width="243" height="178" viewBox=
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="main-vban-wrap bg font-krds max-w-7xl" data-krds-component="carousel">
	<div class="inner">
		<div class="vb-swiper">
			<div class="swiper">
				<ul class="swiper-wrapper">
					<li class="swiper-slide">
						<div class="in">
							<div class="text border-0 bg-transparent">
								<p class="tit">타이틀 영역 <br class="w-hide">타이틀 영역</p>
								<p class="txt">컨텐츠 영역 컨텐츠 영역 <br class="w-hide">컨텐츠 영역 컨텐츠 영역</p>
								<a href="#" class="krds-btn primary inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border bg-krds-primary text-white border-krds-primary hover:bg-krds-primary-hover">버튼 영역</a>
							</div>
							<div class="im">
								<svg width="243" height="178" viewBox="0 0 243 178" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="예시">
									<rect width="243" height="178" fill="#E6E8EA"/>
								</svg>
							</div>
						</div>
					</li>
					<li class="swiper-slide">
						<div class="in">
							<div class="text border-0 bg-transparent">
								<p class="tit">타이틀 영역 <br class="w-hide">타이틀 영역</p>
								<p class="txt">컨텐츠 영역 컨텐츠 영역 <br class="w-hide">컨텐츠 영역 컨텐츠 영역</p>
								<a href="#" class="krds-btn primary inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border bg-krds-primary text-white border-krds-primary hover:bg-krds-primary-hover">버튼 영역</a>
							</div>
							<div class="im">
								<svg width="243" height="178" viewBox="0 0 243 178" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="예시">
									<rect width="243" height="178" fill="#E6E8EA"/>
								</svg>
							</div>
						</div>
					</li>
					<li class="swiper-slide">
						<div class="in">
							<div class="text border-0 bg-transparent">
								<p class="tit">타이틀 영역 <br class="w-hide">타이틀 영역</p>
								<p class="txt">컨텐츠 영역 컨텐츠 영역 <br class="w-hide">컨텐츠 영역 컨텐츠 영역</p>
								<a href="#" class="krds-btn primary inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border bg-krds-primary text-white border-krds-primary hover:bg-krds-primary-hover">버튼 영역</a>
							</div>
							<div class="im">
								<svg width="243" height="178" viewBox="0 0 243 178" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="예시">
									<rect width="243" height="178" fill="#E6E8EA"/>
								</svg>
							</div>
						</div>
					</li>
					<li class="swiper-slide">
						<div class="in">
							<div class="text border-0 bg-transparent">
								<p class="tit">타이틀 영역 <br class="w-hide">타이틀 영역</p>
								<p class="txt">컨텐츠 영역 컨텐츠 영역 <br class="w-hide">컨텐츠 영역 컨텐츠 영역</p>
								<a href="#" class="krds-btn primary inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border bg-krds-primary text-white border-krds-primary hover:bg-krds-primary-hover">버튼 영역</a>
							</div>
							<div class="im">
								<svg width="243" height="178" viewBox="0 0 243 178" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="예시">
									<rect width="243" height="178" fill="#E6E8EA"/>
								</svg>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<button type="button" class="swiper-button-prev">
				<span class="sr-only">이전</span>
			</button>
			<button type="button" class="swiper-button-next">
				<span class="sr-only">다음</span>
			</button>
			<div class="swiper-indicator text-center">
				<div class="swiper-pagination"></div>
				<a href="#" class="swiper-button-more">
					<span class="sr-only">더 보기</span>
				</a>
			</div>
		</div>
	</div>
</div>
```

## Page Context

페이지 트리상 위치: `main#content > section.hero`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [carousel_banner.md](./carousel_banner.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="carousel"` / `data-krds-reference="assets/krds/html/code/carousel.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
