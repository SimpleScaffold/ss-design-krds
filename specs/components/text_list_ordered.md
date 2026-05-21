# Text List Ordered (`text_list_ordered`)

> **Category**: Content (콘텐츠)
> **Parent**: text_list
> **Variants**: —
> **Source**: `assets/krds/html/code/text_list_ordered.html`

## Overview

순서 목록(ol) 스타일입니다.

## Component Tree

```text
text_list (부모)
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
<ol class="krds-info-list ordered">
  <li><span class="num">1. </span>텍스트 목록 레벨1</li>
  <li>
    <span class="num">2. </span>텍스트 목록 레벨1
    <ol class="krds-info-list ordered">
      <li><span class="num">a. </span>텍스트 목록 레벨2</li>
      <li>
        <span class="num">b. </span>텍스트 목록 레벨2
        <ol class="krds-info-list ordered">
					<li><span class="num">①</span>텍스트 목록 레벨3</li>
					<li><span class="num">②</span>텍스트 목록 레벨3</li>
				</ol>
      </li>
			<li><span class="num">c. </span>텍스트 목록 레벨2</li>
    </ol>
  </li>
  <li><span class="num">3. </span>텍스트 목록 레벨1</li>
</ol>

<br>
<br>

<ol class="krds-info-list ordered">
  <li>
    <span class="num">1. </span>텍스트 목록 레벨1
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
    <span class="num">2. </span>텍스트 목록 레벨1
    <ol class="krds-info-list ordered">
			<li>
				<span class="num">a. </span>텍스트 목록 레벨2
				<ul class="krds-info-list hollow">
          <li>텍스트 목록 레벨3</li>
          <li>텍스
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<ol class="krds-info-list ordered font-krds w-full" data-krds-component="text_list_ordered">
  <li><span class="num">1. </span>텍스트 목록 레벨1</li>
  <li>
    <span class="num">2. </span>텍스트 목록 레벨1
    <ol class="krds-info-list ordered">
      <li><span class="num">a. </span>텍스트 목록 레벨2</li>
      <li>
        <span class="num">b. </span>텍스트 목록 레벨2
        <ol class="krds-info-list ordered">
					<li><span class="num">①</span>텍스트 목록 레벨3</li>
					<li><span class="num">②</span>텍스트 목록 레벨3</li>
				</ol>
      </li>
			<li><span class="num">c. </span>텍스트 목록 레벨2</li>
    </ol>
  </li>
  <li><span class="num">3. </span>텍스트 목록 레벨1</li>
</ol>

<br>
<br>

<ol class="krds-info-list ordered">
  <li>
    <span class="num">1. </span>텍스트 목록 레벨1
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
    <span class="num">2. </span>텍스트 목록 레벨1
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
</ol>
<!-- //krds-info-list -->
```

## Page Context

페이지 트리상 위치: `section > ol.steps`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [text_list.md](./text_list.md) (parent)
- [text_list.md](./text_list.md)
- [step_indicator.md](./step_indicator.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="text_list_ordered"` / `data-krds-reference="assets/krds/html/code/text_list_ordered.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
