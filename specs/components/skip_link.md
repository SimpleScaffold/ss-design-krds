# Skip Link (`skip_link`)

> Source: `assets/krds/html/code/skip_link.html`

## When to use

- KRDS 공식 컴포넌트 `skip_link` 패턴이 필요할 때
- `data-krds-component="skip_link"` / `data-krds-reference="assets/krds/html/code/skip_link.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- 건너뛰기 링크 -->
<div id="krds-skip-link">
	<a href="#breadcrumb">본문 바로가기</a>
</div>
<!-- //건너뛰기 링크 -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="skip_link" data-krds-reference="assets/krds/html/code/skip_link.html">
  <!-- assets/krds/html/code/skip_link.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
