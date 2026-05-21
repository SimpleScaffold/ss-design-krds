# Table (`table`)

> Source: `assets/krds/html/code/table.html`

## When to use

- KRDS 공식 컴포넌트 `table` 패턴이 필요할 때
- `data-krds-component="table"` / `data-krds-reference="assets/krds/html/code/table.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

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
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="table" data-krds-reference="assets/krds/html/code/table.html">
  <!-- assets/krds/html/code/table.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
