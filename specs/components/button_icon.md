# Button Icon (`button_icon`)

> Source: `assets/krds/html/code/button_icon.html`

## When to use

- KRDS 공식 컴포넌트 `button_icon` 패턴이 필요할 때
- `data-krds-component="button_icon"` / `data-krds-reference="assets/krds/html/code/button_icon.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- button -->
<button type="button" class="krds-btn icon">
	<span class="sr-only">검색</span>
	<i class="svg-icon ico-sch"></i>
</button>
<button type="button" class="krds-btn icon medium">
	<span class="sr-only">입력한 비밀번호 보기</span>
	<i class="svg-icon ico-pw-visible"></i>
</button>
<button class="krds-btn icon medium btn-help-exec">
	<span class="sr-only">도움말</span>
	<i class="svg-icon ico-help"></i>
</button>

<button type="button" class="krds-btn large icon border">
	<span class="sr-only">새로고침</span>
	<i class="svg-icon ico-refresh"></i>
</button>
<button type="button" class="krds-btn large icon border" disabled>
	<span class="sr-only">열기</span>
	<i class="svg-icon ico-angle down"></i>
</button>
<!-- //button -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="button_icon" data-krds-reference="assets/krds/html/code/button_icon.html">
  <!-- assets/krds/html/code/button_icon.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
