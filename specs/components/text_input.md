# Text Input (`text_input`)

> Source: `assets/krds/html/code/text_input.html`

## When to use

- KRDS 공식 컴포넌트 `text_input` 패턴이 필요할 때
- `data-krds-component="text_input"` / `data-krds-reference="assets/krds/html/code/text_input.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- text input -->
<div class="fieldset">
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name">레이블</label>
		</div>
		<div class="form-conts">
			<input type="text" id="consult_name" class="krds-input" placeholder="플레이스홀더">
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name2">레이블</label>
		</div>
		<div class="form-conts">
			<input type="text" id="consult_name2" class="krds-input" placeholder="플레이스홀더" value="readonly" readonly>
		</div>
		<p class="form-hint">도움말</p>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="consult_name3">레이블</label>
		</div>
		<div class="form-conts">
			<input ty
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="text_input" data-krds-reference="assets/krds/html/code/text_input.html">
  <!-- assets/krds/html/code/text_input.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
