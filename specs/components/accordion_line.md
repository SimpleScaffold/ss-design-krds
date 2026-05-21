# Accordion Line (`accordion_line`)

> Source: `assets/krds/html/code/accordion_line.html`

## When to use

- KRDS 공식 컴포넌트 `accordion_line` 패턴이 필요할 때
- `data-krds-component="accordion_line"` / `data-krds-reference="assets/krds/html/code/accordion_line.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- accordion -->
<div class="krds-accordion type-line">
	<div class="accordion-item">
		<h5 class="accordion-header"><button type="button" id="accordionHeaderSample01" class="btn-accordion" aria-controls="accordionCollapseSample01">아코디언 타이틀 영역</button></h5>
		<div id="accordionCollapseSample01" class="accordion-collapse collapse" aria-labelledby="accordionHeaderSample01">
			<div class="accordion-body">
				<!-- accordion contents -->
				아코디언 내용 영역
				<!-- //accordion contents -->
			</div>
		</div>
	</div>
	<div class="accordion-item">
		<h5 class="accordion-header"><button type="button" id="accordionHeaderSample02" class="btn-accordion" aria-controls="accordionCollapseSample02">아코디언 타이틀 영역</button></h5>
		<div id="accordionCollapseSample02" class="accordion-collapse collapse" aria-la
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="accordion_line" data-krds-reference="assets/krds/html/code/accordion_line.html">
  <!-- assets/krds/html/code/accordion_line.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
