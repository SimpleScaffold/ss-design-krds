# Select Sorting (`select_sorting`)

> Source: `assets/krds/html/code/select_sorting.html`

## When to use

- KRDS 공식 컴포넌트 `select_sorting` 패턴이 필요할 때
- `data-krds-component="select_sorting"` / `data-krds-reference="assets/krds/html/code/select_sorting.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- select -->
<select id="select_sorting" class="krds-form-select-sort" title="선택">
  <option value="">항목1</option>
  <option value="">항목2</option>
  <option value="">항목3</option>
  <option value="">항목4</option>
</select>
<select id="select_sorting_large" class="krds-form-select-sort large" title="선택">
  <option value="" selected>항목1</option>
  <option value="">항목2</option>
  <option value="">항목3</option>
</select>
<select id="select_sorting_medium" class="krds-form-select-sort medium" title="선택">
  <option value="">항목1</option>
  <option value="" selected>항목2</option>
  <option value="">항목3</option>
</select>
<select id="select_sorting_small" class="krds-form-select-sort small" title="선택">
  <option value="">항목1</option>
  <option value="">항목2</option>
  <option value="" selected>항목3</o
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="select_sorting" data-krds-reference="assets/krds/html/code/select_sorting.html">
  <!-- assets/krds/html/code/select_sorting.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
