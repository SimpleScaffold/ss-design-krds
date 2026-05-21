# Resize (`resize`)

> **Category**: Settings (설정)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/resize.html`

## Overview

글자·화면 크기 조절(디지털 포용) 컴포넌트입니다.

## Component Tree

```text
resize (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- resize -->
<div class="krds-drop-wrap krds-resize" data-adjust="scale">
	<button type="button" class="krds-btn small text drop-btn">화면크기 <i class="svg-icon ico-toggle"></i></button>
	<div class="drop-menu">
		<div class="drop-in">
			<ul class="drop-list">
				<li><button type="button" class="item-link sm" data-adjust-scale="sm">작게</button></li>
				<li><button type="button" class="item-link md active" data-adjust-scale="md">보통</button></li>
				<li><button type="button" class="item-link lg" data-adjust-scale="lg">조금 크게</button></li>
				<li><button type="button" class="item-link xlg" data-adjust-scale="xlg">크게</button></li>
				<li><button type="button" class="item-link xxlg" data-adjust-scale="xxlg">가장크게</button></li>
			</ul>
			<div class="drop-bottom">
				<button type="button" class="krds-btn medium text" data-adjust-scale="md"><i class="svg-icon ico-reset"></i> 초기화</button>
			</div>
		</div>
	</div>
</div>
<!-- //resize -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Resize 예시
</button>
```

## Page Context

페이지 트리상 위치: `header 또는 floating panel`

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
- `data-krds-component="resize"` / `data-krds-reference="assets/krds/html/code/resize.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
