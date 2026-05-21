# Language Switcher Page (`language_switcher_page`)

> Source: `assets/krds/html/code/language_switcher_page.html`

## When to use

- KRDS 공식 컴포넌트 `language_switcher_page` 패턴이 필요할 때
- `data-krds-component="language_switcher_page"` / `data-krds-reference="assets/krds/html/code/language_switcher_page.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- language switcher -->
<div class="krds-drop-wrap krds-language">
  <button type="button" class="krds-btn small text drop-btn">
    <i class="svg-icon ico-global"></i>
    언어 변경
    <i class="svg-icon ico-toggle"></i>
  </button>
  <div class="drop-menu">
    <div class="drop-in">
      <div class="drop-top">
        <p class="current-laguage">
          <span>현재 언어</span>
          <strong>한국어</strong>
        </p>
      </div>
      <ul class="drop-list">
        <li><a href="#" class="item-link" lang="en" target="_blank" title="새 창 열림">English (영어)<i class="svg-icon ico-go"></i></a></li>
        <li><a href="#" class="item-link" lang="zh" target="_blank" title="새 창 열림">中文 (중국어)<i class="svg-icon ico-go"></i></a></li>
        <li><a href="#" class="item-link" lang="ja" target="_blank
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="language_switcher_page" data-krds-reference="assets/krds/html/code/language_switcher_page.html">
  <!-- assets/krds/html/code/language_switcher_page.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
