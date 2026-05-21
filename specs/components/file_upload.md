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
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="krds-file-upload line font-krds w-full max-w-3xl" data-krds-component="file_upload">
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
				<button type="button" class="krds-btn medium inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md"><i class="svg-icon ico-upload"></i>파일선택</button>
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
					<span class="krds-spinner inline-block font-krds" role="status">
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
						<em class="sr-only">업로드 완료</em>
					</span>
					</div>
				</div>
			</li>
			<li>
				<div class="file-info">
					<div class="file-name">위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp, 17KB] </div>
					<div class="btn-wrap">
						<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">삭제 <i class="svg-icon ico-delete-fill"></i></button>
					</div>
				</div>
			</li>
			<li class="is-error">
				<div class="file-info">
					<div class="file-name">전입재등록신고서 [주민등록법 시행령 : 별지서식 15, 15호의2호] [hwp, 17KB]</div>
					<div class="btn-wrap">
						<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">삭제 <i class="svg-icon ico-delete-fill"></i></button>
					</div>
				</div>
				<p class="file-hint-invalid">
					등록 가능한 파일 용량을 초과하였습니다.<br>
					20MB 미만의 파일만 등록할 수 있습니다.
				</p>
			</li>
			<li>
				<div class="file-info m-column">
					<div class="file-name">위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp, 17KB] </div>
					<div class="btn-wrap">
						<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">다운로드 <i class="svg-icon ico-down"></i></button>
						<button type="button" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">바로보기 <i class="svg-icon ico-angle right"></i></button>
					</div>
				</div>
			</li>
		</ul>
		<div class="upload-delete-btn">
			<button type="button" class="krds-btn xsmall tertiary inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border bg-krds-surface border-krds-border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1">전체 파일 삭제<i class="svg-icon ico-angle right"></i></button>
		</div>
	</div>
	<!-- //파일 리스트 영역 -->
</div>
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
