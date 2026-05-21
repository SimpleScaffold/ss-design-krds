# Carousel Banner (`carousel_banner`)

> **Category**: Layout (레이아웃 및 표현)
> **Parent**: carousel
> **Variants**: —
> **Source**: `assets/krds/html/code/carousel_banner.html`

## Overview

히어로 배너 형태의 캐러셀입니다. 메인 프로모션에 사용합니다.

## Component Tree

```text
carousel (부모)
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
<div class="main-sect">
    <div class="inner">
        <div class="main-box-responsive type-wrap">
            <div class="d-fix">
                <div class="main-tit-wrap">
                    <h2 class="tit">배너영역 타이틀</h2>
                </div>

                <div class="in">
                    <div class="main-d-ban-swiper">
                        <div class="swiper">
                            <ul class="swiper-wrapper">
                                <li class="swiper-slide">
                                    <div class="text">
                                        <p class="cate">서브타이틀</p>
                                        <p class="tit">타이틀</p>
                                    </div>
                                    <div class="im">
                                        <svg width="243" height="178" viewBox="0 0 243 178" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="예시">
                                            <rect width="243" height="178" fill="#E6E8EA" />
                             
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="main-sect font-krds max-w-7xl" data-krds-component="carousel_banner">
    <div class="inner">
        <div class="main-box-responsive type-wrap">
            <div class="d-fix">
                <div class="main-tit-wrap">
                    <h2 class="tit">배너영역 타이틀</h2>
                </div>

                <div class="in">
                    <div class="main-d-ban-swiper">
                        <div class="swiper">
                            <ul class="swiper-wrapper">
                                <li class="swiper-slide">
                                    <div class="text border-0 bg-transparent">
                                        <p class="cate">서브타이틀</p>
                                        <p class="tit">타이틀</p>
                                    </div>
                                    <div class="im">
                                        <svg width="243" height="178" viewBox="0 0 243 178" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="예시">
                                            <rect width="243" height="178" fill="#E6E8EA" />
                                        </svg>
                                    </div>
                                </li>
                                <li class="swiper-slide">
                                    <div class="text border-0 bg-transparent">
                                        <p class="cate">서브타이틀</p>
                                        <p class="tit">타이틀</p>
                                    </div>
                                    <div class="im">
										<svg width="243" height="178" viewBox="0 0 243 178" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="예시">
											<rect width="243" height="178" fill="#E6E8EA"/>
										</svg>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="swiper-indicator">
                            <div class="swiper-pagination"></div>
                            <div class="swiper-controller">
                                <button type="button" class="swiper-button-play">
                                    <span class="sr-only">슬라이드 재생</span>
                                </button>
                                <button type="button" class="swiper-button-stop">
                                    <span class="sr-only">슬라이드 멈춤</span>
                                </button>
                            </div>
                            <div class="swiper-navigation">
                                <button type="button" class="swiper-button-prev">
                                    <span class="sr-only">이전</span>
                                </button>
                                <button type="button" class="swiper-button-next">
                                    <span class="sr-only">다음</span>
                                </button>
                                <a href="#" class="swiper-button-more">
                                    <span class="sr-only">더 보기</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Page Context

페이지 트리상 위치: `main#content > section#hero`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [carousel.md](./carousel.md) (parent)
- [carousel.md](./carousel.md)
- [button_hierarchy.md](./button_hierarchy.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="carousel_banner"` / `data-krds-reference="assets/krds/html/code/carousel_banner.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
