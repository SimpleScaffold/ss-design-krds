# Footer (`footer`)

> **Category**: Layout (레이아웃 및 표현)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/footer.html`

## Overview

페이지 하단 푸터 영역입니다. 링크, 저작권, 연락처를 포함합니다.

## Component Tree

```text
footer (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- footer -->
<footer id="krds-footer">
	<div class="foot-quick">
		<div class="inner">
			<button type="button" class="link" title="related_site 레이어">related_site</button>
			<button type="button" class="link" title="related_site 레이어">related_site</button>
			<button type="button" class="link" title="related_site 레이어">related_site</button>
			<button type="button" class="link" title="related_site 레이어">related_site</button>
		</div>
	</div>
	<div class="inner">
		<div class="f-logo">
			<span class="sr-only">KRDS - Korea Design System</span>
		</div>
		<div class="f-cnt">
			<div class="f-info">
				<p class="info-addr">(26464) 강원특별자치도 원주시 건강로 32(반곡동) 국민건강보험공단</p>
				<ul class="info-cs">
					<li><strong class="strong">대표전화 1577-1000</strong><span class="span">(유료, 평일 09시~18시)</span></li>
					<li><strong class="strong">해외이용 82-33-811-2001</strong><span class="span">(유료, 평일 09시~18시)</span></li>
				</ul>
			</div>
			
			<div class="f-link">
				<div class="link-go">
					<a href="#" class="krds-btn medium text">찾아오시는 길 <i class="svg-icon ico-angle right"></i></a>
					<a href="#" class="krds-btn medium text">이용안내 <i class="svg-icon ico-angle right"></i></a>
					<a href="#" cla
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Footer 예시
</button>
```

## Page Context

페이지 트리상 위치: `#krds-footer (footer landmark)`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [link.md](./link.md)
- [identifier.md](./identifier.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="footer"` / `data-krds-reference="assets/krds/html/code/footer.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
