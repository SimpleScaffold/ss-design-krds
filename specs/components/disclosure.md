# Disclosure (`disclosure`)

> Source: `assets/krds/html/code/disclosure.html`

## When to use

- KRDS 공식 컴포넌트 `disclosure` 패턴이 필요할 때
- `data-krds-component="disclosure"` / `data-krds-reference="assets/krds/html/code/disclosure.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- disclosure -->
<div class="krds-disclosure conts-expand-area">
	<button type="button" class="btn-conts-expand">신청 서비스안내</button>
	<div class="expand-wrap">
		<div class="expand-in">
			<ul class="krds-info-list dash">
				<li>하나의 아이디로 안전하고 편리하게 여러 전자정부 서비스를 이용할 수 있는 서비스입니다.</li>
				<li>디지털원패스 이용문의 : 1533-3713 (평일9~18시, 공휴일제외)</li>
			</ul>
		</div>
	</div>
</div>
<!-- //disclosure -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="disclosure" data-krds-reference="assets/krds/html/code/disclosure.html">
  <!-- assets/krds/html/code/disclosure.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
