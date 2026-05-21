# Calendar (`calendar`)

> **Category**: Input (입력)
> **Parent**: —
> **Variants**: calendar_range
> **Source**: `assets/krds/html/code/calendar.html`

## Overview

달력 UI 날짜 선택입니다.

## Component Tree

```text
calendar (기본)
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
		<label for="cal">기간선택</label>
	</div>
	<div class="form-conts calendar-conts">
		<div class="calendar-input">
			<input type="number" class="krds-input datepicker cal" placeholder="YYYY.MM.DD" id="cal">
			<button type="button" class="krds-btn medium icon form-btn-datepicker">
				<span class="sr-only">달력 열기</span>
				<i class="svg-icon ico-calendar"></i>
			</button>
		</div>
		<div class="krds-calendar-area">
			<div class="calendar-wrap bottom single" aria-label="달력">
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
										<button type="button" class="active">2002년</button>
									</li>
									<li>
										<button type="button" disabled>2003년</button>
									</li>
									<li>
				
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Calendar 예시
</button>
```

## Page Context

페이지 트리상 위치: `form > .calendar`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [date_input.md](./date_input.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="calendar"` / `data-krds-reference="assets/krds/html/code/calendar.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
