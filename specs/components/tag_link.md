# Tag Link (`tag_link`)

> **Category**: Feedback (피드백)
> **Parent**: tag
> **Variants**: —
> **Source**: `assets/krds/html/code/tag_link.html`

## Overview

클릭 가능한 링크형 태그입니다.

## Component Tree

```text
tag (부모)
└── tag_link
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- tag -->
<div class="krds-tag-wrap large">
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
</div>
<div class="krds-tag-wrap medium">
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
</div>
<div class="krds-tag-wrap small">
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
	<a href="#" class="krds-btn-tag link">
		태그
	</a>
</div>
<!-- //tag -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="krds-tag-wrap large inline-flex items-center font-krds text-krds-text rounded-krds-sm bg-krds-surface-subtle px-krds-4 py-krds-1 text-krds-body-lg" data-krds-component="tag_link">
	<a href="#" class="krds-btn-tag link inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border">
		태그
	</a>
	<a href="#" class="krds-btn-tag link inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border">
		태그
	</a>
	<a href="#" class="krds-btn-tag link inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border">
		태그
	</a>
</div>
<div class="krds-tag-wrap medium inline-flex items-center font-krds text-krds-text rounded-krds-sm bg-krds-surface-subtle px-krds-4 py-krds-1 text-krds-body-md">
	<a href="#" class="krds-btn-tag link inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border">
		태그
	</a>
	<a href="#" class="krds-btn-tag link inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border">
		태그
	</a>
	<a href="#" class="krds-btn-tag link inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border">
		태그
	</a>
</div>
<div class="krds-tag-wrap small inline-flex items-center font-krds text-krds-text rounded-krds-sm bg-krds-surface-subtle px-krds-4 py-krds-1 text-krds-body-sm min-h-[30px] px-krds-2">
	<a href="#" class="krds-btn-tag link inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border">
		태그
	</a>
	<a href="#" class="krds-btn-tag link inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border">
		태그
	</a>
	<a href="#" class="krds-btn-tag link inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border">
		태그
	</a>
</div>
```

## Page Context

페이지 트리상 위치: `section > a.tag`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [tag.md](./tag.md) (parent)
- [tag.md](./tag.md)
- [link.md](./link.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="tag_link"` / `data-krds-reference="assets/krds/html/code/tag_link.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
