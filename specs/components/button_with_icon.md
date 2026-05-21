# Button With Icon (`button_with_icon`)

> Source: `assets/krds/html/code/button_with_icon.html`

## When to use

- KRDS 공식 컴포넌트 `button_with_icon` 패턴이 필요할 때
- `data-krds-component="button_with_icon"` / `data-krds-reference="assets/krds/html/code/button_with_icon.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- button -->
<button type="button" class="krds-btn xsmall">
	x-small 버튼
	<i class="svg-icon ico-sch"></i>
</button>
<button type="button" class="krds-btn small">
	small 버튼
	<i class="svg-icon ico-sch"></i>
</button>
<button type="button" class="krds-btn medium">
	medium 버튼
	<i class="svg-icon ico-sch"></i>
</button>
<button type="button" class="krds-btn large">
	large 버튼
	<i class="svg-icon ico-sch"></i>
</button>
<button type="button" class="krds-btn xlarge">
	<i class="svg-icon ico-sch"></i>
	x-large 버튼
</button>
<!-- //button -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="button_with_icon" data-krds-reference="assets/krds/html/code/button_with_icon.html">
  <!-- assets/krds/html/code/button_with_icon.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
