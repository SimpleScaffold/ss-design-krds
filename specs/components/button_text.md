# Button Text (`button_text`)

> Source: `assets/krds/html/code/button_text.html`

## When to use

- KRDS 공식 컴포넌트 `button_text` 패턴이 필요할 때
- `data-krds-component="button_text"` / `data-krds-reference="assets/krds/html/code/button_text.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- button -->
<button type="button" class="krds-btn small text">텍스트 버튼</button>
<button type="button" class="krds-btn xsmall text">찜하기 <i class="svg-icon ico-like"></i></button>
<button type="button" class="krds-btn small text">주민등록표초본 <i class="svg-icon ico-angle right"></i></button>
<button type="button" class="krds-btn medium text">검색 <i class="svg-icon ico-sch"></i></button>
<button type="button" class="krds-btn xlarge text">자세히 보기 <i class="svg-icon ico-more"></i></button>
<button type="button" class="krds-btn text">파일다운로드 <i class="svg-icon ico-down"></i></button>
<button type="button" class="krds-btn text" disabled>필터 <i class="svg-icon ico-filter"></i></button>
<!-- //button -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="button_text" data-krds-reference="assets/krds/html/code/button_text.html">
  <!-- assets/krds/html/code/button_text.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
