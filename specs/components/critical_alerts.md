# Critical Alerts (`critical_alerts`)

> **Category**: Feedback (피드백)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/critical_alerts.html`

## Overview

긴급·중요 공지를 강조하는 알림 배너입니다.

## Component Tree

```text
critical_alerts (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- critical alerts -->
<div class="main-urgent-wrap">
	<ul class="krds-critical-alerts">
		<li>
			<div class="critical-ban">
				<span class="critical-badge danger">긴급</span>
				<p class="critical-txt">긴급 공지 내용 표시</p>
				<a href="#" class="krds-btn medium link basic">
					<span class="m-hide">자세히 보기</span>
					<i class="svg-icon ico-angle right"></i>
				</a>
			</div>
		</li>
		<li>
			<div class="critical-ban">
				<span class="critical-badge ok">안전</span>
				<p class="critical-txt">긴급 공지 내용 표시</p>
				<a href="#" class="krds-btn medium link basic">
					<span class="m-hide">자세히 보기</span>
					<i class="svg-icon ico-angle right"></i>
				</a>
			</div>
		</li>
		<li>
			<div class="critical-ban">
				<span class="critical-badge info">안내</span>
				<p class="critical-txt">긴급 공지 내용 표시</p>
				<a href="#" class="krds-btn medium link basic">
					<span class="m-hide">자세히 보기</span>
					<i class="svg-icon ico-angle right"></i>
				</a>
			</div>
		</li>
	</ul>
</div>
<!-- //critical alerts -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="main-urgent-wrap font-krds" data-krds-component="critical_alerts">
	<ul class="krds-critical-alerts">
		<li>
			<div class="critical-ban">
				<span class="critical-badge danger text-krds-danger border-krds-danger">긴급</span>
				<p class="critical-txt">긴급 공지 내용 표시</p>
				<a href="#" class="krds-btn medium link basic inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md">
					<span class="m-hide">자세히 보기</span>
					<i class="svg-icon ico-angle right"></i>
				</a>
			</div>
		</li>
		<li>
			<div class="critical-ban">
				<span class="critical-badge ok">안전</span>
				<p class="critical-txt">긴급 공지 내용 표시</p>
				<a href="#" class="krds-btn medium link basic inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md">
					<span class="m-hide">자세히 보기</span>
					<i class="svg-icon ico-angle right"></i>
				</a>
			</div>
		</li>
		<li>
			<div class="critical-ban">
				<span class="critical-badge info">안내</span>
				<p class="critical-txt">긴급 공지 내용 표시</p>
				<a href="#" class="krds-btn medium link basic inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md">
					<span class="m-hide">자세히 보기</span>
					<i class="svg-icon ico-angle right"></i>
				</a>
			</div>
		</li>
	</ul>
</div>
```

## Page Context

페이지 트리상 위치: `main#content > aside.critical-alert`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [contextual_help.md](./contextual_help.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="critical_alerts"` / `data-krds-reference="assets/krds/html/code/critical_alerts.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
