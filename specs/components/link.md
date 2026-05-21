# Link (`link`)

> Source: `assets/krds/html/code/link.html`

## When to use

- KRDS 공식 컴포넌트 `link` 패턴이 필요할 때
- `data-krds-component="link"` / `data-krds-reference="assets/krds/html/code/link.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- link -->
<a href="https://www.site_name.com/" class="krds-btn small link" target="_blank" title="새 창 열림">
	<span class="underline">기본 링크</span>
	<i class="svg-icon ico-go"></i>
</a>
<a href="#!" class="krds-btn medium link pure">
	<span class="underline">가상클래스 상태 시 컬러 유지</span>
</a>
<a href="#!" class="krds-btn large link basic" target="_blank" title="새 창 열림">
	<span class="underline">본문 텍스트 컬러 링크</span>
	<i class="svg-icon ico-go"></i>
</a>
<a href="#!" class="krds-btn large link basic">
	<span class="underline hidden-underline">가상클래스 상태 시 밑줄</span>
</a>
<a href="#!" class="krds-btn large link basic">
	<span>밑줄 없음</span>
</a>
<!-- //link -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="link" data-krds-reference="assets/krds/html/code/link.html">
  <!-- assets/krds/html/code/link.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
