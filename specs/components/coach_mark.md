# Coach Mark (`coach_mark`)

> Source: `assets/krds/html/code/coach_mark.html`

## When to use

- KRDS 공식 컴포넌트 `coach_mark` 패턴이 필요할 때
- `data-krds-component="coach_mark"` / `data-krds-reference="assets/krds/html/code/coach_mark.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- coach mark -->
<div class="txt-box bg-white bg-white krds-coach-mark">
	<!-- 따라하기 말풍선 -->
	<div class="coach-balloon">
		<h5 class="sr-only">따라하기 가이드</h5>
		<h6 class="coach-tit">1단계 : 코치 마크</h6>
		<p class="desc">1단계 코치 마크 내용입니다.</p>
		<div class="coach-controls">
			<div class="num">
				<span class="sr-only">현재 단계</span>
				<strong>1</strong>
				<span class="sr-only">총 단계</span>
				<span>4</span>
			</div>
			<div class="btn-wrap">
				<button type="button" class="krds-btn small text">그만보기</button>
				<button type="button" class="krds-btn small tertiary">다음으로</button>
			</div>
		</div>
	</div>
	<!--// 따라하기 말풍선 -->

	<!-- 코치 마크 내용 -->
	<div>
		<h3>코치 마크 내용</h3>
	</div>
	<!-- //코치 마크 내용 -->
</div>
<!-- coach mark -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="coach_mark" data-krds-reference="assets/krds/html/code/coach_mark.html">
  <!-- assets/krds/html/code/coach_mark.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
