# Carousel (`carousel`)

> Source: `assets/krds/html/code/carousel.html`

## When to use

- KRDS 공식 컴포넌트 `carousel` 패턴이 필요할 때
- `data-krds-component="carousel"` / `data-krds-reference="assets/krds/html/code/carousel.html"`로 출처 추적

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
						
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="carousel" data-krds-reference="assets/krds/html/code/carousel.html">
  <!-- assets/krds/html/code/carousel.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
