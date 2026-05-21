# Coach Mark (`coach_mark`)

> **Category**: Help (도움)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/coach_mark.html`

## Overview

신규 기능 안내용 코치마크(온보딩)입니다.

## Component Tree

```text
coach_mark (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- coach mark -->
<div class="txt-box bg-white bg-white krds-coach-mark">
	<!-- 따라하기 말풍선 -->
	<div class="coach-balloon">
		<h5 class="sr-only">따라하기 가이드</h5>
		<h6 class="coach-tit">1단계 : 코치 마크</h6>
		<p class="desc">1단계 코치 마크 내용입니다.</p>
		<div class="coach-controls">
			<div class="num">
				<span class="sr-only">현재 단계</span>
				<strong>1</strong>
				<span class="sr-only">총 단계</span>
				<span>4</span>
			</div>
			<div class="btn-wrap">
				<button type="button" class="krds-btn small text">그만보기</button>
				<button type="button" class="krds-btn small tertiary">다음으로</button>
			</div>
		</div>
	</div>
	<!--// 따라하기 말풍선 -->

	<!-- 코치 마크 내용 -->
	<div>
		<h3>코치 마크 내용</h3>
	</div>
	<!-- //코치 마크 내용 -->
</div>
<!-- coach mark -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="txt-box bg-white krds-coach-mark font-krds" data-krds-component="coach_mark">
	<!-- 따라하기 말풍선 -->
	<div class="coach-balloon">
		<h5 class="sr-only">따라하기 가이드</h5>
		<h6 class="coach-tit">1단계 : 코치 마크</h6>
		<p class="desc">1단계 코치 마크 내용입니다.</p>
		<div class="coach-controls">
			<div class="num">
				<span class="sr-only">현재 단계</span>
				<strong>1</strong>
				<span class="sr-only">총 단계</span>
				<span>4</span>
			</div>
			<div class="btn-wrap">
				<button type="button" class="krds-btn small text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1 border-0 bg-transparent">그만보기</button>
				<button type="button" class="krds-btn small tertiary inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border bg-krds-surface border-krds-border text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1">다음으로</button>
			</div>
		</div>
	</div>
	<!--// 따라하기 말풍선 -->

	<!-- 코치 마크 내용 -->
	<div>
		<h3>코치 마크 내용</h3>
	</div>
	<!-- //코치 마크 내용 -->
</div>
<!-- coach mark -->
```

## Page Context

페이지 트리상 위치: `overlay on target element`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [tutorial_panel.md](./tutorial_panel.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="coach_mark"` / `data-krds-reference="assets/krds/html/code/coach_mark.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
