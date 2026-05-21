# Text List (`text_list`)

> **Category**: Content (콘텐츠)
> **Parent**: —
> **Variants**: text_list_ordered
> **Source**: `assets/krds/html/code/text_list.html`

## Overview

비순서 목록(ul) 스타일입니다.

## Component Tree

```text
text_list (기본)
└── text_list_ordered
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- text list -->
<!-- krds-info-list -->
<ul class="krds-info-list decimal">
	<li>텍스트 목록 레벨1</li>
	<li>
		텍스트 목록 레벨1
		<ul class="krds-info-list dash">
			<li>텍스트 목록 레벨2</li>
			<li>
				텍스트 목록 레벨2
				<ul class="krds-info-list hollow">
					<li>텍스트 목록 레벨3</li>
					<li>텍스트 목록 레벨3</li>
				</ul>
			</li>
			<li>텍스트 목록 레벨2</li>
		</ul>
	</li>
	<li>텍스트 목록 레벨1</li>
</ul>

<br>
<br>

<ul class="krds-info-list decimal">
	<li>
		텍스트 목록 레벨1
		<ul class="krds-info-list dash">
			<li>
				텍스트 목록 레벨2
				<ol class="krds-info-list ordered">
					<li><span class="num">①</span>텍스트 목록 레벨3</li>
					<li><span class="num">②</span>텍스트 목록 레벨3</li>
				</ol>
			</li>
		</ul>
	</li>
	<li>
		텍스트 목록 레벨1
		<ol class="krds-info-list ordered">
			<li>
				<span class="num">a. </span>텍스트 목록 레벨2
				<ul class="krds-info-list hollow">
					<li>텍스트 목록 레벨3</li>
					<li>텍스트 목록 레벨3</li>
				</ul>
			</li>
		</ol>
	</li>
</ul>
<!-- //krds-info-list -->
<!-- //text list -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Text List 예시
</button>
```

## Page Context

페이지 트리상 위치: `section > ul`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [structured_list.md](./structured_list.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="text_list"` / `data-krds-reference="assets/krds/html/code/text_list.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
