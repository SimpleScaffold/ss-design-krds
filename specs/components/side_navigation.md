# Side Navigation (`side_navigation`)

> Source: `assets/krds/html/code/side_navigation.html`

## When to use

- KRDS 공식 컴포넌트 `side_navigation` 패턴이 필요할 때
- `data-krds-component="side_navigation"` / `data-krds-reference="assets/krds/html/code/side_navigation.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

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
							<button type="button" class="lnb-btn-tit">3Depth-title</but
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="side_navigation" data-krds-reference="assets/krds/html/code/side_navigation.html">
  <!-- assets/krds/html/code/side_navigation.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
