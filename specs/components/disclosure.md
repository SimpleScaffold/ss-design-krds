# Disclosure (`disclosure`)

> **Category**: Help (도움)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/disclosure.html`

## Overview

접기/펼치기(disclosure) 패턴입니다.

## Component Tree

```text
disclosure (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- disclosure -->
<div class="krds-disclosure conts-expand-area">
	<button type="button" class="btn-conts-expand">신청 서비스안내</button>
	<div class="expand-wrap">
		<div class="expand-in">
			<ul class="krds-info-list dash">
				<li>하나의 아이디로 안전하고 편리하게 여러 전자정부 서비스를 이용할 수 있는 서비스입니다.</li>
				<li>디지털원패스 이용문의 : 1533-3713 (평일9~18시, 공휴일제외)</li>
			</ul>
		</div>
	</div>
</div>
<!-- //disclosure -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="krds-disclosure conts-expand-area font-krds border-b border-krds-border" data-krds-component="disclosure">
	<button type="button" class="btn-conts-expand">신청 서비스안내</button>
	<div class="expand-wrap">
		<div class="expand-in">
			<ul class="krds-info-list dash">
				<li>하나의 아이디로 안전하고 편리하게 여러 전자정부 서비스를 이용할 수 있는 서비스입니다.</li>
				<li>디지털원패스 이용문의 : 1533-3713 (평일9~18시, 공휴일제외)</li>
			</ul>
		</div>
	</div>
</div>
```

## Page Context

페이지 트리상 위치: `section > details`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [accordion.md](./accordion.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="disclosure"` / `data-krds-reference="assets/krds/html/code/disclosure.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
