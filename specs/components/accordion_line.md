# Accordion Line (`accordion_line`)

> **Category**: Help (도움)
> **Parent**: accordion
> **Variants**: —
> **Source**: `assets/krds/html/code/accordion_line.html`

## Overview

구분선이 있는 아코디언 변형입니다.

## Component Tree

```text
accordion (부모)
└── accordion_line
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- accordion -->
<div class="krds-accordion type-line">
	<div class="accordion-item">
		<h5 class="accordion-header"><button type="button" id="accordionHeaderSample01" class="btn-accordion" aria-controls="accordionCollapseSample01">아코디언 타이틀 영역</button></h5>
		<div id="accordionCollapseSample01" class="accordion-collapse collapse" aria-labelledby="accordionHeaderSample01">
			<div class="accordion-body">
				<!-- accordion contents -->
				아코디언 내용 영역
				<!-- //accordion contents -->
			</div>
		</div>
	</div>
	<div class="accordion-item">
		<h5 class="accordion-header"><button type="button" id="accordionHeaderSample02" class="btn-accordion" aria-controls="accordionCollapseSample02">아코디언 타이틀 영역</button></h5>
		<div id="accordionCollapseSample02" class="accordion-collapse collapse" aria-labelledby="accordionHeaderSample02">
			<div class="accordion-body">
				<!-- accordion contents -->
				아코디언 내용 영역
				<!-- //accordion contents -->
			</div>
		</div>
	</div>
</div>
<!-- //accordion -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Accordion Line 예시
</button>
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

- [accordion.md](./accordion.md) (parent)
- [accordion.md](./accordion.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="accordion_line"` / `data-krds-reference="assets/krds/html/code/accordion_line.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
