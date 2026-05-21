# Breadcrumb (`breadcrumb`)

> Source: `assets/krds/html/code/breadcrumb.html`

## When to use

- KRDS 공식 컴포넌트 `breadcrumb` 패턴이 필요할 때
- `data-krds-component="breadcrumb"` / `data-krds-reference="assets/krds/html/code/breadcrumb.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- breadcrumb -->
<nav class="krds-breadcrumb-wrap" aria-label="현재 경로" id="breadcrumb">
	<ol class="breadcrumb">
		<li class="home"><a href="#" class="txt">홈</a></li>
		<li><a href="#" class="txt">서비스 신청</a></li>
		<li><a href="#" class="txt">서비스 신청2</a></li>
	</ol>
</nav>
<!-- breadcrumb -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="breadcrumb" data-krds-reference="assets/krds/html/code/breadcrumb.html">
  <!-- assets/krds/html/code/breadcrumb.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
