# Masthead (`masthead`)

> Source: `assets/krds/html/code/masthead.html`

## When to use

- KRDS 공식 컴포넌트 `masthead` 패턴이 필요할 때
- `data-krds-component="masthead"` / `data-krds-reference="assets/krds/html/code/masthead.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- masthead -->
<div id="krds-masthead">
	<div class="toggle-wrap">
		<div class="toggle-head">
			<div class="inner">
				<span class="nuri-txt">이 누리집은 대한민국 공식 전자정부 누리집입니다.</span>
			</div>
		</div>
	</div>
</div>
<!-- //masthead -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="masthead" data-krds-reference="assets/krds/html/code/masthead.html">
  <!-- assets/krds/html/code/masthead.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
