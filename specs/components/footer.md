# Footer (`footer`)

> Source: `assets/krds/html/code/footer.html`

## When to use

- KRDS 공식 컴포넌트 `footer` 패턴이 필요할 때
- `data-krds-component="footer"` / `data-krds-reference="assets/krds/html/code/footer.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- footer -->
<footer id="krds-footer">
	<div class="foot-quick">
		<div class="inner">
			<button type="button" class="link" title="related_site 레이어">related_site</button>
			<button type="button" class="link" title="related_site 레이어">related_site</button>
			<button type="button" class="link" title="related_site 레이어">related_site</button>
			<button type="button" class="link" title="related_site 레이어">related_site</button>
		</div>
	</div>
	<div class="inner">
		<div class="f-logo">
			<span class="sr-only">KRDS - Korea Design System</span>
		</div>
		<div class="f-cnt">
			<div class="f-info">
				<p class="info-addr">(26464) 강원특별자치도 원주시 건강로 32(반곡동) 국민건강보험공단</p>
				<ul class="info-cs">
					<li><strong class="strong">대표전화 1577-1000</strong><span class="span">(유료, 평일 09시~18시)</span></l
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="footer" data-krds-reference="assets/krds/html/code/footer.html">
  <!-- assets/krds/html/code/footer.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
