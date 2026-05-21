# Structured List Table (`structured_list_table`)

> **Category**: Layout (레이아웃 및 표현)
> **Parent**: structured_list
> **Variants**: —
> **Source**: `assets/krds/html/code/structured_list_table.html`

## Overview

표 형태의 구조화된 목록입니다. structured_list의 테이블 변형입니다.

## Component Tree

```text
structured_list (부모)
└── structured_list_table
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<div class="krds-structured-list-table sample">
	<!-- 리스트 상단 -->
	<div class="search-list-top">
		<div class="sch-left">
			<div class="krds-check-area">
				<div class="krds-form-check">
					<input type="checkbox" class="chk" id="list_chk_all" />
					<label for="list_chk_all">전체선택</label>
				</div>
			</div>
			<ul class="side-line-ul">
				<li>
					<button type="button" class="krds-btn medium text">
						<i class="svg-icon ico-down"></i>
						핵심버튼
					</button>
				</li>
				<li>
					<button type="button" class="krds-btn medium text">
						<i class="svg-icon ico-down"></i>
						핵심버튼
					</button>
				</li>
				<li>
					<button type="button" class="krds-btn medium text">
						<i class="svg-icon ico-down"></i>
						핵심버튼
					</button>
				</li>
				<li>
					<button type="button" class="krds-btn medium text">
						<i class="svg-icon ico-down"></i>
						핵심버튼
					</button>
				</li>
			</ul>
		</div>

		<ul class="sch-sort">
			<li>
				<strong class="sort-label"><label for="search_result_count">목록 표시 개수</label></strong>
				<select class="krds-form-select-sort" id="search_result_count">
					<option>10개</option>
					<option>9개</option>
				</select>
			</li>
			<li
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-table bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Structured List Table 예시
</button>
```

## Page Context

페이지 트리상 위치: `main#content > section`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [structured_list.md](./structured_list.md) (parent)
- [structured_list.md](./structured_list.md)
- [table.md](./table.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="structured_list_table"` / `data-krds-reference="assets/krds/html/code/structured_list_table.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
