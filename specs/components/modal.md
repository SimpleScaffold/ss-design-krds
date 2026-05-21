# Modal (`modal`)

> **Category**: Content (콘텐츠)
> **Parent**: —
> **Variants**: modal_sample
> **Source**: `assets/krds/html/code/modal.html`

## Overview

모달 다이얼로그입니다. focus trap·Escape 닫기 필요.

## Component Tree

```text
modal (기본)
└── modal_sample
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<button type="button" class="krds-btn large open-modal" data-target="modal_sample_03">class 및 data-target 호출</button>
<!-- modal -->
<section id="modal_sample_03" class="krds-modal fade" role="dialog" aria-labelledby="tit_modal_sample_03">
	<div class="modal-dialog">
		<div class="modal-content">
			<!-- modal title -->
			<div class="modal-header">
				<h2 id="tit_modal_sample_03" class="modal-title">
					모달 제목
				</h2>
			</div>
			<!-- //modal title -->
			<!-- modal contents -->
			<div class="modal-conts">
				<div class="conts-area">
					시작 <br>
					대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
					<br>
					대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
					<br>
					대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
					<br>
					대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
					<br>
					대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
					<br>
					대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
					<br>
					대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.
					<br>
					대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Modal 예시
</button>
```

## Page Context

페이지 트리상 위치: `body > dialog 또는 overlay`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [help_panel.md](./help_panel.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="modal"` / `data-krds-reference="assets/krds/html/code/modal.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
