# Tooltip Box (`tooltip_box`)

> Source: `assets/krds/html/code/tooltip_box.html`

## When to use

- KRDS 공식 컴포넌트 `tooltip_box` 패턴이 필요할 때
- `data-krds-component="tooltip_box"` / `data-krds-reference="assets/krds/html/code/tooltip_box.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- tooltip -->
<button type="button" class="krds-btn small text krds-tooltip tooltip-box" data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
  tooltip-box
  <i class="svg-icon ico-angle right"></i>
</button>

<button type="button" class="krds-btn icon krds-tooltip tooltip-box" data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">
  <span class="sr-only">도움말</span>
  <i class="svg-icon ico-help"></i>
</button>

<button type="button" class="krds-btn krds-tooltip tooltip-box" data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다.">도움말</button>
<!-- //tooltip -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="tooltip_box" data-krds-reference="assets/krds/html/code/tooltip_box.html">
  <!-- assets/krds/html/code/tooltip_box.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
