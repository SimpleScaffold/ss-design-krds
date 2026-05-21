# Date Input (`date_input`)

> Source: `assets/krds/html/code/date_input.html`

## When to use

- KRDS 공식 컴포넌트 `date_input` 패턴이 필요할 때
- `data-krds-component="date_input"` / `data-krds-reference="assets/krds/html/code/date_input.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- date input -->
<!-- 폼그룹 -->
<div class="form-group">
	<div class="form-tit">
		<label for="cal">레이블</label>
	</div>
	<div class="form-conts">
		<div class="form-conts calendar-conts">
			<div class="calendar-input">
				<input type="number" class="krds-input datepicker cal" placeholder="YYYY.MM.DD" id="cal" />
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
							<div class="calendar-drop-down"
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="date_input" data-krds-reference="assets/krds/html/code/date_input.html">
  <!-- assets/krds/html/code/date_input.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
