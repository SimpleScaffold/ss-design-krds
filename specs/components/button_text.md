# Button Text (`button_text`)

> **Category**: Action (액션)
> **Parent**: button
> **Variants**: —
> **Source**: `assets/krds/html/code/button_text.html`

## Overview

텍스트 링크형 버튼(밑줄·텍스트 스타일)입니다.

## Component Tree

```text
button (부모)
└── button_text
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

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
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-btn primary bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Button Text 예시
</button>
```

## Page Context

페이지 트리상 위치: `section > a.krds-btn.text`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [button.md](./button.md) (parent)
- [link.md](./link.md)
- [button.md](./button.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="button_text"` / `data-krds-reference="assets/krds/html/code/button_text.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
