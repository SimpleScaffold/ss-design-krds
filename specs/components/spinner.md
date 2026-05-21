# Spinner (`spinner`)

> **Category**: Feedback (피드백)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/spinner.html`

## Overview

로딩 중임을 나타내는 스피너입니다.

## Component Tree

```text
spinner (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- spinner -->
<!-- 인풋 내 스피너 -->
<div class="form-group">
	<div class="form-tit">
		<label for="consult_name">Label</label>
	</div>
	<div class="form-conts">
		<div class="form-spinner">
			<input type="text" id="consult_name" class="krds-input" placeholder="placeholder">
			<div class="krds-spinner" role="status">
				<span class="sr-only">로딩 중</span>
			</div>
		</div>
	</div>
</div>
<!-- //인풋 내 스피너 -->

<br>
<br>

<!-- 스피너 -->
<div class="krds-spinner" role="status">
	<span class="sr-only">로딩 중</span>
	Loading data..
</div>
<!-- //스피너 -->
<!-- //spinner -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Spinner 예시
</button>
```

## Page Context

페이지 트리상 위치: `section (loading state)`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [critical_alerts.md](./critical_alerts.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="spinner"` / `data-krds-reference="assets/krds/html/code/spinner.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
