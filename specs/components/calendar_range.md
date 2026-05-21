# Calendar Range (`calendar_range`)

> **Category**: Input (입력)
> **Parent**: calendar
> **Variants**: —
> **Source**: `assets/krds/html/code/calendar_range.html`

## Overview

기간(시작~종료) 선택 달력입니다.

## Component Tree

```text
calendar (부모)
└── calendar_range
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- calendar -->
<div class="form-group">
	<div class="form-tit">
		날짜선택
	</div>
	<div class="form-conts calendar-conts">
		<div class="calendar-input">
			<ul class="input-group range set">
				<li>
					<input type="number" class="krds-input datepicker" placeholder="시작날짜" title="시작날짜 입력">
				</li>
				<li class="mark">-</li>
				<li>
					<input type="number" class="krds-input datepicker" placeholder="종료날짜" title="종료날짜 입력">
				</li>
			</ul>
			<button type="button" class="krds-btn medium icon form-btn-datepicker">
				<span class="sr-only">달력 열기</span>
				<i class="svg-icon ico-calendar"></i>
			</button>
		</div>
		<div class="krds-calendar-area">
			<div class="calendar-wrap bottom" aria-label="달력">
				<div class="calendar-head">
					<button type="button" class="btn-cal-move prev"><span class="sr-only">이전 달</span></button>
					<div class="calendar-switch-wrap">
						<div class="calendar-drop-down">
							<button type="button" class="btn-cal-switch year" aria-label="연도 선택">2024년</button>
							<div class="calendar-select calendar-year-wrap">
								<ul class="sel year">
									<li>
										<button type="button">2001년</button>
									</li>
									<li>
								
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Calendar Range 예시
</button>
```

## Page Context

페이지 트리상 위치: `form > .calendar-range`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [calendar.md](./calendar.md) (parent)
- [calendar.md](./calendar.md)
- [date_input.md](./date_input.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="calendar_range"` / `data-krds-reference="assets/krds/html/code/calendar_range.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
