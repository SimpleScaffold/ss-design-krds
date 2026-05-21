# Contextual Help (`contextual_help`)

> Source: `assets/krds/html/code/contextual_help.html`

## When to use

- KRDS 공식 컴포넌트 `contextual_help` 패턴이 필요할 때
- `data-krds-component="contextual_help"` / `data-krds-reference="assets/krds/html/code/contextual_help.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- contextual help -->
<!-- tooltip : 위치 - 상단 왼쪽 -->
<div class="krds-contextual-help top left">
	<p class="tooltip-txt">예시이미지(상단 왼쪽)</p>
	<div class="tooltip-action">
		<button type="button" class="krds-btn medium icon tooltip-btn">
			<span class="sr-only">도움말</span>
			<i class="svg-icon ico-tooltip"></i>
		</button>
		<div class="tooltip-popover" role="tooltip">
			<h4 class="tooltip-title">도움말 제목</h4>
			<div class="tooltip-contents">
				<p>컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보 아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는 경우에만 화면에 표시된다.</p>
				<div class="btn-wrap">
					<a href="#;" class="krds-btn xsmall link basic">바로가기 <i class="svg-icon ico-angle right"></i></a>
				</div>
			</div>
			<button type="button" class="krds-btn xsmall icon tooltip-close">
				<span class
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="contextual_help" data-krds-reference="assets/krds/html/code/contextual_help.html">
  <!-- assets/krds/html/code/contextual_help.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
