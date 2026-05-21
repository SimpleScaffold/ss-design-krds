# Language Switcher (`language_switcher`)

> **Category**: Settings (설정)
> **Parent**: —
> **Variants**: language_switcher_page
> **Source**: `assets/krds/html/code/language_switcher.html`

## Overview

언어 전환(한/영) 컴포넌트입니다.

## Component Tree

```text
language_switcher (기본)
└── language_switcher_page
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

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
			<ul class="drop-list">
				<li><a href="#" class="item-link active" lang="ko">한국어</a></li>
				<li><a href="#" class="item-link" lang="en">English (영어)</a></li>
				<li><a href="#" class="item-link" lang="zh">中文 (중국어)</a></li>
				<li><a href="#" class="item-link" lang="ja">日本語 (일본어)</a></li>
				<li><a href="#" class="item-link" lang="fr">français (프랑스어)</a></li>
			</ul>
		</div>
	</div>
</div>
<!-- //language switcher -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Language Switcher 예시
</button>
```

## Page Context

페이지 트리상 위치: `header 또는 masthead`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [masthead.md](./masthead.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="language_switcher"` / `data-krds-reference="assets/krds/html/code/language_switcher.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
