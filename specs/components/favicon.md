# Favicon (`favicon`)

> **Category**: Identity (아이덴티티)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/favicon.html`

## Overview

브라우저 탭·북마크용 파비콘 설정 가이드입니다.

## Component Tree

```text
favicon (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

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
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/ class="font-krds" data-krds-component="favicon">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"/>
<link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png"/>

<!-- 파비콘 - 기본 svg -->
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
```

## Page Context

페이지 트리상 위치: `head > link[rel=icon]`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [identifier.md](./identifier.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="favicon"` / `data-krds-reference="assets/krds/html/code/favicon.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
