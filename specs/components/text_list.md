# Text List (`text_list`)

> Source: `assets/krds/html/code/text_list.html`

## When to use

- KRDS 공식 컴포넌트 `text_list` 패턴이 필요할 때
- `data-krds-component="text_list"` / `data-krds-reference="assets/krds/html/code/text_list.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- text list -->
<!-- krds-info-list -->
<ul class="krds-info-list decimal">
	<li>텍스트 목록 레벨1</li>
	<li>
		텍스트 목록 레벨1
		<ul class="krds-info-list dash">
			<li>텍스트 목록 레벨2</li>
			<li>
				텍스트 목록 레벨2
				<ul class="krds-info-list hollow">
					<li>텍스트 목록 레벨3</li>
					<li>텍스트 목록 레벨3</li>
				</ul>
			</li>
			<li>텍스트 목록 레벨2</li>
		</ul>
	</li>
	<li>텍스트 목록 레벨1</li>
</ul>

<br>
<br>

<ul class="krds-info-list decimal">
	<li>
		텍스트 목록 레벨1
		<ul class="krds-info-list dash">
			<li>
				텍스트 목록 레벨2
				<ol class="krds-info-list ordered">
					<li><span class="num">①</span>텍스트 목록 레벨3</li>
					<li><span class="num">②</span>텍스트 목록 레벨3</li>
				</ol>
			</li>
		</ul>
	</li>
	<li>
		텍스트 목록 레벨1
		<ol class="krds-info-list ordered">
			<li>
				<span class="num">a. </span>텍스트 목록 레벨2
				<ul class="krd
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="text_list" data-krds-reference="assets/krds/html/code/text_list.html">
  <!-- assets/krds/html/code/text_list.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
