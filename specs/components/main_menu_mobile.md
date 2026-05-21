# Main Menu Mobile (`main_menu_mobile`)

> Source: `assets/krds/html/code/main_menu_mobile.html`

## When to use

- KRDS 공식 컴포넌트 `main_menu_mobile` 패턴이 필요할 때
- `data-krds-component="main_menu_mobile"` / `data-krds-reference="assets/krds/html/code/main_menu_mobile.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

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
				<button type="button" class="krds-btn large text"><i cl
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="main_menu_mobile" data-krds-reference="assets/krds/html/code/main_menu_mobile.html">
  <!-- assets/krds/html/code/main_menu_mobile.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
