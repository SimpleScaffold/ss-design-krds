# Tutorial Panel (`tutorial_panel`)

> **Category**: Help (도움)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/tutorial_panel.html`

## Overview

단계별 튜토리얼 패널입니다.

## Component Tree

```text
tutorial_panel (기본)
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
                <li id="helperTab01" role="tab" aria-selected="false" aria-controls="helperTabpanel01">
                  <button type="button" class="btn-tab">도움</button>
                </li>
                <li id="helperTab02" role="tab" aria-selected="true" aria-controls="helperTabpanel02" class="active">
                  <button type="button" class="btn-tab">따라하기 <i class="sr-only created"> 선택됨</i></button>
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
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<button type="button" class="krds-btn small tertiary btn-help-panel expand btn-help-exec inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border bg-krds-surface border-krds-border text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1" data-krds-component="tutorial_panel"><i class="svg-icon ico-fold"></i> 도움말</button>
    <!-- //도움말 열기 버튼 -->

    <!-- krds-help-panel -->
    <div class="krds-help-panel font-krds text-krds-secondary p-krds-4 bg-krds-surface-subtle rounded-krds-md">
      <!-- 도움말 내용 -->
      <div class="help-panel-wrap">
        <div class="help-conts-area">
          <!-- 탭	-->
          <div class="krds-tab-area layer font-krds flex gap-krds-2">
            <!-- tab list -->
            <div class="tab line">
              <ul role="tablist">
                <li id="helperTab01" role="tab" aria-selected="false" aria-controls="helperTabpanel01">
                  <button type="button" class="btn-tab">도움</button>
                </li>
                <li id="helperTab02" role="tab" aria-selected="true" aria-controls="helperTabpanel02" class="active">
                  <button type="button" class="btn-tab">따라하기 <i class="sr-only created"> 선택됨</i></button>
                </li>
              </ul>
            </div>
```

## Page Context

페이지 트리상 위치: `overlay panel`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [coach_mark.md](./coach_mark.md)
- [modal.md](./modal.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="tutorial_panel"` / `data-krds-reference="assets/krds/html/code/tutorial_panel.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
