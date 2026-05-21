# Table (`table`)

> **Category**: Content (콘텐츠)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/table.html`

## Overview

데이터 표(table)입니다. thead/tbody/caption 필수.

## Component Tree

```text
table (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- table -->
<div class="krds-table-wrap">
	<table class="tbl col data">
		<caption>000에 대한 표로 제목1,제목2에 대한 내용으로 구성되어 있으며 제목1은 제목1-1,제목1-2,제목1-3으로 구성되어있다.</caption>
		<colgroup>
			<col style="width: 30%;">
			<col>
		</colgroup>
		<thead>
		<tr>
			<th scope="col">제목1</th>
			<th scope="col">제목2</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<th scope="row">제목1-1</th>
			<td>내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. </td>
		</tr>
		<tr>
			<th scope="row">제목1-2</th>
			<td>내용이 들어갑니다.</td>
		</tr>
		<tr>
			<th scope="row">제목1-3</th>
			<td>내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. 내용이 들어갑니다. </td>
		</tr>
		</tbody>
	</table>
</div>
<!-- //table -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-table bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Table 예시
</button>
```

## Page Context

페이지 트리상 위치: `main#content > section > table.krds-table`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [structured_list_table.md](./structured_list_table.md)
- [pagination.md](./pagination.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="table"` / `data-krds-reference="assets/krds/html/code/table.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
