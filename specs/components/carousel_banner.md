# Carousel Banner (`carousel_banner`)

> Source: `assets/krds/html/code/carousel_banner.html`

## When to use

- KRDS 공식 컴포넌트 `carousel_banner` 패턴이 필요할 때
- `data-krds-component="carousel_banner"` / `data-krds-reference="assets/krds/html/code/carousel_banner.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

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
                                     
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="carousel_banner" data-krds-reference="assets/krds/html/code/carousel_banner.html">
  <!-- assets/krds/html/code/carousel_banner.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
