# Text Input Icon (`text_input_icon`)

> Source: `assets/krds/html/code/text_input_icon.html`

## When to use

- KRDS 공식 컴포넌트 `text_input_icon` 패턴이 필요할 때
- `data-krds-component="text_input_icon"` / `data-krds-reference="assets/krds/html/code/text_input_icon.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- text input -->
<div class="fieldset">
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="login_pw">레이블</label>
		</div>
		<div class="form-conts btn-ico-wrap">
			<input type="password" id="login_pw" class="krds-input" placeholder="8-12자의 영문자, 숫자, 특수문자 조합" value="1234567890">
			<button type="button" class="krds-btn medium icon">
				<span class="sr-only">입력한 비밀번호 보기</span>
				<i class="svg-icon ico-pw-visible"></i>
			</button>
		</div>
	</div>
	<!-- //폼그룹 -->
	<!-- 폼그룹 -->
	<div class="form-group">
		<div class="form-tit">
			<label for="login_pw2">레이블</label>
		</div>
		<div class="form-conts btn-ico-wrap">
			<input type="text" id="login_pw2" class="krds-input" placeholder="8-12자의 영문자, 숫자, 특수문자 조합" value="1234567890">
			<button type="button" class="k
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="text_input_icon" data-krds-reference="assets/krds/html/code/text_input_icon.html">
  <!-- assets/krds/html/code/text_input_icon.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
