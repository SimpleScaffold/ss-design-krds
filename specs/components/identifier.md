# Identifier (`identifier`)

> **Category**: Identity (아이덴티티)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/identifier.html`

## Overview

기관·서비스 식별자(로고·명칭)를 표시합니다. 헤더 상단에 배치합니다.

## Component Tree

```text
identifier (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

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
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Identifier 예시
</button>
```

## Page Context

페이지 트리상 위치: `#krds-header > identifier`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [header.md](./header.md)
- [masthead.md](./masthead.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="identifier"` / `data-krds-reference="assets/krds/html/code/identifier.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
