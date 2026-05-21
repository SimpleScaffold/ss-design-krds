# Main Menu Pc (`main_menu_pc`)

> Source: `assets/krds/html/code/main_menu_pc.html`

## When to use

- KRDS 공식 컴포넌트 `main_menu_pc` 패턴이 필요할 때
- `data-krds-component="main_menu_pc"` / `data-krds-reference="assets/krds/html/code/main_menu_pc.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

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
							
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="main_menu_pc" data-krds-reference="assets/krds/html/code/main_menu_pc.html">
  <!-- assets/krds/html/code/main_menu_pc.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
