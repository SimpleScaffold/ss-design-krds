# Favicon (`favicon`)

> Source: `assets/krds/html/code/favicon.html`

## When to use

- KRDS 공식 컴포넌트 `favicon` 패턴이 필요할 때
- `data-krds-component="favicon"` / `data-krds-reference="assets/krds/html/code/favicon.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- 파비콘 - 기본 png -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"/>
<link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png"/>

<!-- 파비콘 - 기본 svg -->
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="favicon" data-krds-reference="assets/krds/html/code/favicon.html">
  <!-- assets/krds/html/code/favicon.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
