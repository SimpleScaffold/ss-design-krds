# Textarea (`textarea`)

> Source: `assets/krds/html/code/textarea.html`

## When to use

- KRDS 공식 컴포넌트 `textarea` 패턴이 필요할 때
- `data-krds-component="textarea"` / `data-krds-reference="assets/krds/html/code/textarea.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- textarea -->
<!-- 폼그룹 -->
<div class="form-group">
	<div class="form-tit">
		<label for="textarea">레이블</label>
	</div>
	<div class="form-conts">
		<div class="textarea-wrap">
			<textarea class="krds-input" placeholder="플레이스홀더" id="textarea"></textarea>
			<p class="textarea-count">
				<span class="count-now">0</span><span class="count-total">/100</span>
			</p>
		</div>
	</div>
</div>
<!-- //폼그룹 -->
<!-- //textarea -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="textarea" data-krds-reference="assets/krds/html/code/textarea.html">
  <!-- assets/krds/html/code/textarea.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
