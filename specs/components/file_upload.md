# File Upload (`file_upload`)

> **Category**: Input (입력)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/file_upload.html`

## Overview

파일 첨부 업로드 컴포넌트입니다.

## Component Tree

```text
file_upload (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- file upload -->
<div class="krds-file-upload line">
	<!-- 파일 업로드 상단 -->
	<div class="file-head">
		<h3 class="tit">타이틀영역</h3>
		<div>
			<p>컨텐츠 영역</p>
		</div>
	</div>  
	<!-- //파일 업로드 상단 -->

	<!-- 파일 업로드 영역 -->
	<div class="file-upload">
		<p class="txt">첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 눌러 파일을 직접 선택해주세요.</p>
		<div class="file-upload-btn-wrap">
			<input type="file" name="myFile" id="fileu-upload" hidden>
			<label for="fileu-upload">
				<button type="button" class="krds-btn medium"><i class="svg-icon ico-upload"></i>파일선택</button>
			</label>
		</div>
	</div>
	<!-- //파일 업로드 영역 -->
	<!-- 파일 리스트 영역 -->
	<div class="file-list">
		<div class="total"><span class="current">3개</span> / 10개</div>
		<ul class="upload-list">
			<li>
				<div class="file-info">
					<div class="file-name">위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp, 17KB] </div>
					<div class="btn-wrap">
					<span class="krds-spinner" role="status">
						<span class="sr-only">업로드 중</span>
					</span>
					</div>
				</div>
			</li>
			<li>
				<div class="file-info">
					<div class="file-name">위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp, 17KB] </div>
					<div class="btn-wrap">
					<span class="ico-invalid complete">
						<em class="
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  File Upload 예시
</button>
```

## Page Context

페이지 트리상 위치: `form > .field (file)`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [text_input.md](./text_input.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="file_upload"` / `data-krds-reference="assets/krds/html/code/file_upload.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
