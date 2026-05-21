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
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="form-group font-krds w-full max-w-3xl" data-krds-component="calendar_range">
	<div class="form-tit">
		날짜선택
	</div>
	<div class="form-conts calendar-conts">
		<div class="calendar-input">
			<ul class="input-group range set">
				<li>
					<input type="number" class="krds-input datepicker w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" placeholder="시작날짜" title="시작날짜 입력">
				</li>
				<li class="mark">-</li>
				<li>
					<input type="number" class="krds-input datepicker w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" placeholder="종료날짜" title="종료날짜 입력">
				</li>
			</ul>
			<button type="button" class="krds-btn medium icon form-btn-datepicker inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md w-11 p-0">
				<span class="sr-only">달력 열기</span>
				<i class="svg-icon ico-calendar"></i>
			</button>
		</div>
		<div class="krds-calendar-area font-krds">
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
										<button type="button">2002년</button>
									</li>
									<li>
										<button type="button" disabled>2003년</button>
									</li>
									<li>
										<button type="button">2004년</button>
									</li>
									<li>
										<button type="button">2005년</button>
									</li>
									<li>
										<button type="button">2006년</button>
									</li>
									<li>
										<button type="button">2007년</button>
									</li>
									<li>
										<button type="button">2008년</button>
									</li>
									<li>
										<button type="button">2009년</button>
									</li>
									<li>
										<button type="button">2010년</button>
									</li>
									<li>
										<button type="button" class="active">2011년</button>
									</li>
									<li>
										<button type="button">2012년</button>
									</li>
									<li>
										<button type="button">2013년</button>
									</li>
									<li>
										<button type="button">2014년</button>
									</li>
									<li>
										<button type="button">2015년</button>
									</li>
									<li>
										<button type="button">2016년</button>
									</li>
									<li>
										<button type="button">2017년</button>
									</li>
									<li>
										<button type="button">2018년</button>
									</li>
									<li>
										<button type="button">2019년</button>
									</li>
									<li>
										<button type="button">2020년</button>
									</li>
									<li>
										<button type="button">2021년</button>
									</li>
									<li>
										<button type="button">2022년</button>
									</li>
									<li>
										<button type="button">2023년</button>
									</li>
									<li>
										<button type="button">2024년</button>
									</li>
								</ul>
							</div>
						</div>
						<div class="calendar-drop-down">
							<button type="button" class="btn-cal-switch month" aria-label="월 선택">12월</button>
							<div class="calendar-select calendar-mon-wrap">
								<ul class="sel month">
									<li>
										<button type="button" disabled>01월</button>
									</li>
									<li>
										<button type="button" class="active">02월</button>
									</li>
									<li>
										<button type="button">03월</button>
									</li>
									<li>
										<button type="button">04월</button>
									</li>
									<li>
										<button type="button">05월</button>
									</li>
									<li>
										<button type="button">06월</button>
									</li>
									<li>
										<button type="button">07월</button>
									</li>
									<li>
										<button type="button">08월</button>
									</li>
									<li>
										<button type="button">09월</button>
									</li>
									<li>
										<button type="button">10월</button>
									</li>
									<li>
										<button type="button">11월</button>
									</li>
									<li>
										<button type="button">12월</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<button type="button" class="btn-cal-move next"><span class="sr-only">다음 달</span></button>
				</div>
				<div class="calendar-body">
					<div class="calendar-table-wrap">
						<table class="calendar-tbl">
							<caption>
								2024년 12월
							</caption>
							<thead>
								<tr>
									<th>일</th>
									<th>월</th>
									<th>화</th>
									<th>수</th>
									<th>목</th>
									<th>금</th>
									<th>토</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="old day-off"><button type="button" class="btn-set-date"><span>26</span></button></td>
									<td class="old"><button type="button" class="btn-set-date"><span>27</span></button></td>
									<td class="old"><button type="button" class="btn-set-date"><span>28</span></button></td>
									<td class="old"><button type="button" class="btn-set-date"><span>29</span></button></td>
									<td class="old"><button type="button" class="btn-set-date"><span>30</span></button></td>
									<td><button type="button" class="btn-set-date"><span>1</span></button></td>
									<td><button type="button" class="btn-set-date"><span>2</span></button></td>
								</tr>
								<tr>
									<td class="day-off"><button type="button" class="btn-set-date"><span>3</span></button></td>
									<td><button type="button" class="btn-set-date"><span>4</span></button></td>
									<td><button type="button" class="btn-set-date"><span>5</span></button></td>
									<td class="day-event"><button type="button" class="btn-set-date"><span>6</span></button></td>
									<td class="period start"><button type="button" class="btn-set-date"><span>7</span></button></td>
									<td class="period"><button type="button" class="btn-set-date"><span>8</span></button></td>
									<td class="period"><button type="button" class="btn-set-date"><span>9</span></button></td>
								</tr>
								<tr>
									<td class="period day-off"><button type="button" class="btn-set-date"><span>10</span></button></td>
									<td class="period"><button type="button" class="btn-set-date"><span>11</span></button></td>
									<td class="period"><button type="button" class="btn-set-date"><span>12</span></button></td>
									<td class="period"><button type="button" class="btn-set-date"><span>13</span></button></td>
									<td class="period"><button type="button" class="btn-set-date"><span>14</span></button></td>
									<td class="period"><button type="button" class="btn-set-date"><span>15</span></button></td>
									<td class="period end"><button type="button" class="btn-set-date"><span>16</span></button></td>
								</tr>
								<tr>
									<td class="day-off"><button type="button" class="btn-set-date"><span>17</span></button></td>
									<td><button type="button" class="btn-set-date"><span>18</span></button></td>
									<td><button type="button" class="btn-set-date"><span>19</span></button></td>
									<td class="today"><button type="button" class="btn-set-date"><span>20</span></button></td>
									<td><button type="button" class="btn-set-date"><span>21</span></button></td>
									<td><button type="button" class="btn-set-date"><span>22</span></button></td>
									<td><button type="button" class="btn-set-date"><span>23</span></button></td>
								</tr>
								<tr>
									<td class="day-off"><button type="button" class="btn-set-date"><span>24</span></button></td>
									<td><button type="button" class="btn-set-date"><span>25</span></button></td>
									<td><button type="button" class="btn-set-date"><span>26</span></button></td>
									<td><button type="button" class="btn-set-date"><span>27</span></button></td>
									<td><button type="button" class="btn-set-date"><span>28</span></button></td>
									<td><button type="button" class="btn-set-date"><span>29</span></button></td>
									<td><button type="button" class="btn-set-date"><span>30</span></button></td>
								</tr>
								<tr>
									<td class="day-off"><button type="button" class="btn-set-date"><span>31</span></button></td>
									<td class="new"><button type="button" class="btn-set-date"><span>1</span></button></td>
									<td class="new"><button type="button" class="btn-set-date"><span>2</span></button></td>
									<td class="new"><button type="button" class="btn-set-date"><span>3</span></button></td>
									<td class="new"><button type="button" class="btn-set-date"><span>4</span></button></td>
									<td class="new"><button type="button" class="btn-set-date"><span>5</span></button></td>
									<td class="new"><button type="button" class="btn-set-date"><span>6</span></button></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="calendar-footer">
					<div class="calendar-btn-wrap">
						<button type="button" class="krds-btn small text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1 border-0 bg-transparent" id="get-today">오늘</button>
						<button type="button" class="krds-btn small tertiary inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border bg-krds-surface border-krds-border text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1">취소</button>
						<button type="button" class="krds-btn small primary inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border bg-krds-primary text-white border-krds-primary hover:bg-krds-primary-hover text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1">확인</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
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
