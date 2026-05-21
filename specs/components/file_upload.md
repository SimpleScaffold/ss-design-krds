# File Upload (`file_upload`)

> Source: `assets/krds/html/code/file_upload.html`

## When to use

- KRDS 공식 컴포넌트 `file_upload` 패턴이 필요할 때
- `data-krds-component="file_upload"` / `data-krds-reference="assets/krds/html/code/file_upload.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

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
					<div class="file-name">위임장(주
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="file_upload" data-krds-reference="assets/krds/html/code/file_upload.html">
  <!-- assets/krds/html/code/file_upload.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
