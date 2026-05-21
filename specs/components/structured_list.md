# Structured List (`structured_list`)

> **Category**: Layout (레이아웃 및 표현)
> **Parent**: —
> **Variants**: structured_list_table
> **Source**: `assets/krds/html/code/structured_list.html`

## Overview

정의 목록(dl) 형태의 구조화된 정보 목록입니다.

## Component Tree

```text
structured_list (기본)
└── structured_list_table
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- 구조화 목록 -->
<ul class="krds-structured-list type-full">
	<li class="structured-item">
		<div class="in">
			<div class="card-top">
				<span class="krds-badge bg-light-primary">뱃지</span>
			</div>
			<div class="card-body">
				<a href="#" class="c-text">
					<p class="c-tit"><span class="span">타이틀 영역</span></p>
					<p class="c-txt">
						간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
					</p>
					<p class="c-date">
						<strong class="key">신청 기간</strong>
						<span class="value">2023.00.00-2024.00.00</span>
					</p>
				</a>
				<div class="c-btn">
					<a href="#" class="krds-btn secondary" title="타이틀 영역">신청하기</a>
				</div>
			</div>
			<div class="card-btm">
				<span class="tag">태그</span>
				<span class="tag">태그</span>
			</div>
			<div class="card-btn">
				<button type="button" class="krds-btn medium text" title="타이틀 영역"><i class="svg-icon ico-share"></i> 공유하기</button>
				<button type="button" class="krds-btn medium text" title="타이틀 영역"><i class="svg-icon ico-like"></i> 찜하기</button>
			</div>
		</div>
	</li>
	<li class="structured-item">
		<div class="in">
			<div class="card-top">
				<span class="krds-badge bg-light-success">뱃지</sp
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Structured List 예시
</button>
```

## Page Context

페이지 트리상 위치: `main#content > section > .structured-list`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [text_list.md](./text_list.md)
- [table.md](./table.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="structured_list"` / `data-krds-reference="assets/krds/html/code/structured_list.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
