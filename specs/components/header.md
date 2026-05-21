# Header (`header`)

> **Category**: Layout (레이아웃 및 표현)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/header.html`

## Overview

페이지 상단 헤더 영역입니다. identifier, 메뉴, 검색 등을 포함합니다.

## Component Tree

```text
header (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- header -->
<header id="krds-header">
	<!-- 헤더 컨텐츠 영역  -->
	<div class="header-in">
		<!-- 헤더 상단 기타메뉴 -->
		<div class="header-container">
			<div class="inner">
				<div class="header-utility">
					<ul class="utility-list">
						<li>
							<a href="#" class="krds-btn small text" target="_blank" title="새 창 열기">
								메뉴명 <i class="svg-icon ico-go"></i>
							</a>
						</li>
						<li>
							<div class="krds-drop-wrap">
								<button type="button" class="krds-btn small text drop-btn">
									메뉴명 <i class="svg-icon ico-toggle"></i>
								</button>
								<div class="drop-menu">
									<div class="drop-in">
										<ul class="drop-list">
											<li><a href="#" class="item-link">메뉴명</a></li>
											<li><a href="#" class="item-link">메뉴명</a></li>
										</ul>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="krds-drop-wrap krds-resize">
								<button type="button" class="krds-btn small text drop-btn">
									메뉴명 <i class="svg-icon ico-toggle"></i>
								</button>
								<div class="drop-menu">
									<div class="drop-in">
										<ul class="drop-list">
											<li><button type="button" class="item-link s
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Header 예시
</button>
```

## Page Context

페이지 트리상 위치: `#krds-header (header landmark)`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [identifier.md](./identifier.md)
- [main_menu_pc.md](./main_menu_pc.md)
- [masthead.md](./masthead.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="header"` / `data-krds-reference="assets/krds/html/code/header.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
