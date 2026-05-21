# Modal Sample (`modal_sample`)

> **Category**: Content (콘텐츠)
> **Parent**: modal
> **Variants**: —
> **Source**: `assets/krds/html/code/modal_sample.html`

## Overview

모달 샘플/템플릿 구현 예시입니다.

## Component Tree

```text
modal (부모)
└── modal_sample
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<button type="button" class="krds-btn large open-modal" data-target="modal_sample_01">class 및 data-target 호출</button>
<!-- modal -->
<section id="modal_sample_01" class="krds-modal fade in shown" role="dialog" aria-labelledby="tit_modal_sample_01">
	<div class="modal-dialog">
		<div class="modal-content">
			<!-- modal title -->
			<div class="modal-header">
				<h2 id="tit_modal_sample_01" class="modal-title">
					모달 제목
				</h2>
			</div>
			<!-- //modal title -->
			<!-- modal contents -->
			<div class="modal-conts">
				<div class="conts-area">
					대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
				</div>
			</div>
			<!-- //modal contents -->
			<!-- modal btn -->
			<div class="modal-btn btn-wrap">
				<button type="button" class="krds-btn medium tertiary close-modal">아니요</button>
				<button type="button" class="krds-btn medium primary close-modal">예</button>
			</div>
			<!-- //modal btn -->
			<!-- close button -->
			<button type="button" class="krds-btn medium icon btn-close close-modal">
				<span class="sr-only">닫기</span>
				<i class="svg-icon ico-popup-close"></i>
			</button>
			<!-- //close button -->
		</div>
	</div>
	<div class="modal-back 
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Modal Sample 예시
</button>
```

## Page Context

페이지 트리상 위치: `overlay`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [modal.md](./modal.md) (parent)
- [modal.md](./modal.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="modal_sample"` / `data-krds-reference="assets/krds/html/code/modal_sample.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
