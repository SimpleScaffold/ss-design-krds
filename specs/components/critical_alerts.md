# Critical Alerts (`critical_alerts`)

> Source: `assets/krds/html/code/critical_alerts.html`

## When to use

- KRDS 공식 컴포넌트 `critical_alerts` 패턴이 필요할 때
- `data-krds-component="critical_alerts"` / `data-krds-reference="assets/krds/html/code/critical_alerts.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

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
				<p class="critical-txt">긴급 공지 내용
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="critical_alerts" data-krds-reference="assets/krds/html/code/critical_alerts.html">
  <!-- assets/krds/html/code/critical_alerts.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
