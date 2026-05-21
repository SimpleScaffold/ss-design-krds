# Resize (`resize`)

> Source: `assets/krds/html/code/resize.html`

## When to use

- KRDS 공식 컴포넌트 `resize` 패턴이 필요할 때
- `data-krds-component="resize"` / `data-krds-reference="assets/krds/html/code/resize.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- resize -->
<div class="krds-drop-wrap krds-resize" data-adjust="scale">
	<button type="button" class="krds-btn small text drop-btn">화면크기 <i class="svg-icon ico-toggle"></i></button>
	<div class="drop-menu">
		<div class="drop-in">
			<ul class="drop-list">
				<li><button type="button" class="item-link sm" data-adjust-scale="sm">작게</button></li>
				<li><button type="button" class="item-link md active" data-adjust-scale="md">보통</button></li>
				<li><button type="button" class="item-link lg" data-adjust-scale="lg">조금 크게</button></li>
				<li><button type="button" class="item-link xlg" data-adjust-scale="xlg">크게</button></li>
				<li><button type="button" class="item-link xxlg" data-adjust-scale="xxlg">가장크게</button></li>
			</ul>
			<div class="drop-bottom">
				<button type="button" c
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="resize" data-krds-reference="assets/krds/html/code/resize.html">
  <!-- assets/krds/html/code/resize.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
