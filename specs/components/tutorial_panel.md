# Tutorial Panel (`tutorial_panel`)

> Source: `assets/krds/html/code/tutorial_panel.html`

## When to use

- KRDS 공식 컴포넌트 `tutorial_panel` 패턴이 필요할 때
- `data-krds-component="tutorial_panel"` / `data-krds-reference="assets/krds/html/code/tutorial_panel.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- 컨테이너 영역 -->
<div id="container">
  <div class="inner help-panel-flexible">
    <!-- help panel -->
    <!-- 도움말 영역 -->

    <!-- 도움말 열기 버튼 -->
    <button type="button" class="krds-btn small tertiary btn-help-panel expand btn-help-exec"><i class="svg-icon ico-fold"></i> 도움말</button>
    <!-- //도움말 열기 버튼 -->

    <!-- krds-help-panel -->
    <div class="krds-help-panel">
      <!-- 도움말 내용 -->
      <div class="help-panel-wrap">
        <div class="help-conts-area">
          <!-- 탭	-->
          <div class="krds-tab-area layer">
            <!-- tab list -->
            <div class="tab line">
              <ul role="tablist">
                <li id="helperTab01" role="tab" aria-selected="false" aria-controls="helperTabpanel01">
                  <button type="button" class="btn-tab">도움
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="tutorial_panel" data-krds-reference="assets/krds/html/code/tutorial_panel.html">
  <!-- assets/krds/html/code/tutorial_panel.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
