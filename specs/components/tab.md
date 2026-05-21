# Tab (`tab`)

> **Category**: Layout (레이아웃 및 표현)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/tab.html`

## Overview

동일 영역에서 콘텐츠를 탭으로 전환합니다.

## Component Tree

```text
tab (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- tab -->
<div class="krds-tab-area layer">
	<!-- tab list -->
	<div class="tab line full">
		<ul role="tablist">
			<li id="tab_login_01" role="tab" aria-selected="true" aria-controls="panel_login_01" class="active">
				<button type="button" class="btn-tab">타이틀 1 <i class="sr-only created"> 선택됨</i></button>
			</li>
			<li id="tab_login_02" role="tab" aria-selected="false" aria-controls="panel_login_02">
				<button type="button" class="btn-tab">타이틀 2</button>
			</li>
		</ul>
	</div>
	<!-- //tab list -->
	
	<!-- tab contents -->
	<div class="tab-conts-wrap">
		<section id="panel_login_01" aria-labelledby="tab_login_01" class="tab-conts active" data-quick-nav="false">
			<h3 class="sr-only">탭 영역 타이틀</h3>
			탭 1 영역
		</section>
		<section id="panel_login_02" aria-labelledby="tab_login_02" class="tab-conts" data-quick-nav="false">
			<h3 class="sr-only">탭 영역 타이틀</h3>
			탭 2 영역
		</section>
	</div>
	<!-- //tab contents -->
</div>
<!-- //tab -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="krds-tab-area layer font-krds flex gap-krds-2 max-w-7xl" data-krds-component="tab">
	<!-- tab list -->
	<div class="tab line full">
		<ul role="tablist">
			<li id="tab_login_01" role="tab" aria-selected="true" aria-controls="panel_login_01" class="active">
				<button type="button" class="btn-tab">타이틀 1 <i class="sr-only created"> 선택됨</i></button>
			</li>
			<li id="tab_login_02" role="tab" aria-selected="false" aria-controls="panel_login_02">
				<button type="button" class="btn-tab">타이틀 2</button>
			</li>
		</ul>
	</div>
```

## Page Context

페이지 트리상 위치: `main#content > section > .tab-list`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [text_list.md](./text_list.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="tab"` / `data-krds-reference="assets/krds/html/code/tab.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
