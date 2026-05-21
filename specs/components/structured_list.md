# Structured List (`structured_list`)

> Source: `assets/krds/html/code/structured_list.html`

## When to use

- KRDS 공식 컴포넌트 `structured_list` 패턴이 필요할 때
- `data-krds-component="structured_list"` / `data-krds-reference="assets/krds/html/code/structured_list.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- 구조화 목록 -->
<ul class="krds-structured-list type-full">
	<li class="structured-item">
		<div class="in">
			<div class="card-top">
				<span class="krds-badge bg-light-primary">뱃지</span>
			</div>
			<div class="card-body">
				<a href="#" class="c-text">
					<p class="c-tit"><span class="span">타이틀 영역</span></p>
					<p class="c-txt">
						간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.
					</p>
					<p class="c-date">
						<strong class="key">신청 기간</strong>
						<span class="value">2023.00.00-2024.00.00</span>
					</p>
				</a>
				<div class="c-btn">
					<a href="#" class="krds-btn secondary" title="타이틀 영역">신청하기</a>
				</div>
			</div>
			<div class="card-btm">
				<span class="tag">태그</span>
				<span class="tag">태그</span>
			</div>
			<div class="
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="structured_list" data-krds-reference="assets/krds/html/code/structured_list.html">
  <!-- assets/krds/html/code/structured_list.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
