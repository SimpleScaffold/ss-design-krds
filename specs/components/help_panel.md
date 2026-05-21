# Help Panel (`help_panel`)

> **Category**: Help (도움)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/help_panel.html`

## Overview

도움말 패널(사이드·모달 형태)입니다.

## Component Tree

```text
help_panel (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

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
                <li id="helperTab01" role="tab" aria-selected="true" aria-controls="helperTabpanel01" class="active">
                  <button type="button" class="btn-tab">도움 <i class="sr-only created"> 선택됨</i></button>
                </li>
                <li id="helperTab02" role="tab" aria-selected="false" aria-controls="helperTabpanel02">
                  <button type="button" class="btn-tab">따라하기</button>
                </li>
              </ul>
            </div>
            <!-- //tab list -->

            <!-- tab contents -->
            <div
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Help Panel 예시
</button>
```

## Page Context

페이지 트리상 위치: `aside 또는 modal`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [contextual_help.md](./contextual_help.md)
- [modal.md](./modal.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="help_panel"` / `data-krds-reference="assets/krds/html/code/help_panel.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
