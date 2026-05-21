# Modal (`modal`)

> Source: `assets/krds/html/code/modal.html`

## When to use

- KRDS 공식 컴포넌트 `modal` 패턴이 필요할 때
- `data-krds-component="modal"` / `data-krds-reference="assets/krds/html/code/modal.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

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
			
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="modal" data-krds-reference="assets/krds/html/code/modal.html">
  <!-- assets/krds/html/code/modal.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
