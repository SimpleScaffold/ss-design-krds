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
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="krds-table-wrap w-full overflow-x-auto font-krds text-krds-text border-collapse flex gap-krds-2 max-w-7xl" data-krds-component="structured_list_table">
		<table class="tbl col data w-full font-krds text-krds-text">
			<caption>000에 대한 표로 유형 제목 내용 게시일로 구성되어있다.</caption>
			<colgroup>
				<col style="width: 5%;">
				<col style="width: 10%;">
				<col style="width: 15%;">
				<col style="width: 30%;">
				<col style="width: 10%;">
				<col style="width: 10%;">
				<col>
			</colgroup>
			<thead>
			<tr>
				<th scope="col">선택</th>
				<th scope="col">유형</th>
				<th scope="col">제목</th>
				<th scope="col">내용</th>
				<th scope="col"><span class="sr-only">다운로드</span></th>
				<th scope="col">게시일</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th scope="row">
					<div class="krds-form-check flex flex-col gap-krds-4 font-krds max-w-2xl">
						<input type="checkbox" class="chk" id="list_chk_1" />
						<label for="list_chk_1"></label>
					</div>
				</th>
				<td>유형</td>
				<td>타이틀 영역</td>
				<td>간단한 내용이 들어간는 영역입니다.</td>
				<td>
					<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">
						<i class="svg-icon ico-down"></i>
						다운로드
					</button>
				</td>
				<td>2025.12.17</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="krds-form-check flex flex-col gap-krds-4 font-krds max-w-2xl">
						<input type="checkbox" class="chk" id="list_chk_2" />
						<label for="list_chk_2"></label>
					</div>
				</th>
				<td>유형</td>
				<td>타이틀 영역</td>
				<td>간단한 내용이 들어간는 영역입니다.</td>
				<td>
					<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">
						<i class="svg-icon ico-down"></i>
						다운로드
					</button>
				</td>
				<td>2025.12.17</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="krds-form-check flex flex-col gap-krds-4 font-krds max-w-2xl">
						<input type="checkbox" class="chk" id="list_chk_3" />
						<label for="list_chk_3"></label>
					</div>
				</th>
				<td>유형</td>
				<td>타이틀 영역</td>
				<td>간단한 내용이 들어간는 영역입니다.</td>
				<td>
					<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">
						<i class="svg-icon ico-down"></i>
						다운로드
					</button>
				</td>
				<td>2025.12.17</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="krds-form-check flex flex-col gap-krds-4 font-krds max-w-2xl">
						<input type="checkbox" class="chk" id="list_chk_4" />
						<label for="list_chk_4"></label>
					</div>
				</th>
				<td>유형</td>
				<td>타이틀 영역</td>
				<td>간단한 내용이 들어간는 영역입니다.</td>
				<td>
					<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">
						<i class="svg-icon ico-down"></i>
						다운로드
					</button>
				</td>
				<td>2025.12.17</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="krds-form-check flex flex-col gap-krds-4 font-krds max-w-2xl">
						<input type="checkbox" class="chk" id="list_chk_5" />
						<label for="list_chk_5"></label>
					</div>
				</th>
				<td>유형</td>
				<td>타이틀 영역</td>
				<td>간단한 내용이 들어간는 영역입니다.</td>
				<td>
					<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">
						<i class="svg-icon ico-down"></i>
						다운로드
					</button>
				</td>
				<td>2025.12.17</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="krds-form-check flex flex-col gap-krds-4 font-krds max-w-2xl">
						<input type="checkbox" class="chk" id="list_chk_6" />
						<label for="list_chk_6"></label>
					</div>
				</th>
				<td>유형</td>
				<td>타이틀 영역</td>
				<td>간단한 내용이 들어간는 영역입니다.</td>
				<td>
					<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">
						<i class="svg-icon ico-down"></i>
						다운로드
					</button>
				</td>
				<td>2025.12.17</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="krds-form-check flex flex-col gap-krds-4 font-krds max-w-2xl">
						<input type="checkbox" class="chk" id="list_chk_7" />
						<label for="list_chk_7"></label>
					</div>
				</th>
				<td>유형</td>
				<td>타이틀 영역</td>
				<td>간단한 내용이 들어간는 영역입니다.</td>
				<td>
					<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">
						<i class="svg-icon ico-down"></i>
						다운로드
					</button>
				</td>
				<td>2025.12.17</td>
			</tr>
			</tbody>
		</table>
	</div>
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
