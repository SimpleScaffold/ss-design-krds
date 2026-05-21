# Identifier (`identifier`)

> Source: `assets/krds/html/code/identifier.html`

## When to use

- KRDS 공식 컴포넌트 `identifier` 패턴이 필요할 때
- `data-krds-component="identifier"` / `data-krds-reference="assets/krds/html/code/identifier.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- identifier -->
<div class="krds-identifier">
	<span class="logo">
		<span class="sr-only">KRDS - Korea Design System</span>
	</span>
	<span class="ban-txt">이 누리집은 보건복지부 누리집입니다.</span>
</div>
<!-- //identifier -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="identifier" data-krds-reference="assets/krds/html/code/identifier.html">
  <!-- assets/krds/html/code/identifier.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
