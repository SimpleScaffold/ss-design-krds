# Tab (`tab`)

> Source: `assets/krds/html/code/tab.html`

## When to use

- KRDS 공식 컴포넌트 `tab` 패턴이 필요할 때
- `data-krds-component="tab"` / `data-krds-reference="assets/krds/html/code/tab.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- tab -->
<div class="krds-tab-area layer">
	<!-- tab list -->
	<div class="tab line full">
		<ul role="tablist">
			<li id="tab_login_01" role="tab" aria-selected="true" aria-controls="panel_login_01" class="active">
				<button type="button" class="btn-tab">타이틀 1 <i class="sr-only created"> 선택됨</i></button>
			</li>
			<li id="tab_login_02" role="tab" aria-selected="false" aria-controls="panel_login_02">
				<button type="button" class="btn-tab">타이틀 2</button>
			</li>
		</ul>
	</div>
	<!-- //tab list -->
	
	<!-- tab contents -->
	<div class="tab-conts-wrap">
		<section id="panel_login_01" aria-labelledby="tab_login_01" class="tab-conts active" data-quick-nav="false">
			<h3 class="sr-only">탭 영역 타이틀</h3>
			탭 1 영역
		</section>
		<section id="panel_login_02" aria-labelledby="tab_login_
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="tab" data-krds-reference="assets/krds/html/code/tab.html">
  <!-- assets/krds/html/code/tab.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
