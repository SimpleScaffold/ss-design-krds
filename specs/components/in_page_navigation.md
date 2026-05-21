# In Page Navigation (`in_page_navigation`)

> Source: `assets/krds/html/code/in_page_navigation.html`

## When to use

- KRDS 공식 컴포넌트 `in_page_navigation` 패턴이 필요할 때
- `data-krds-component="in_page_navigation"` / `data-krds-reference="assets/krds/html/code/in_page_navigation.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

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
			<button type="button" class="krds-btn medium">온라인 신청하기</
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="in_page_navigation" data-krds-reference="assets/krds/html/code/in_page_navigation.html">
  <!-- assets/krds/html/code/in_page_navigation.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
