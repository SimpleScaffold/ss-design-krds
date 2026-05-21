# Contextual Help (`contextual_help`)

> **Category**: Help (도움)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/contextual_help.html`

## Overview

필드·섹션 옆 맥락 도움말입니다.

## Component Tree

```text
contextual_help (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- contextual help -->
<!-- tooltip : 위치 - 상단 왼쪽 -->
<div class="krds-contextual-help top left">
	<p class="tooltip-txt">예시이미지(상단 왼쪽)</p>
	<div class="tooltip-action">
		<button type="button" class="krds-btn medium icon tooltip-btn">
			<span class="sr-only">도움말</span>
			<i class="svg-icon ico-tooltip"></i>
		</button>
		<div class="tooltip-popover" role="tooltip">
			<h4 class="tooltip-title">도움말 제목</h4>
			<div class="tooltip-contents">
				<p>컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보 아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는 경우에만 화면에 표시된다.</p>
				<div class="btn-wrap">
					<a href="#;" class="krds-btn xsmall link basic">바로가기 <i class="svg-icon ico-angle right"></i></a>
				</div>
			</div>
			<button type="button" class="krds-btn xsmall icon tooltip-close">
				<span class="sr-only">닫기</span>
				<i class="svg-icon ico-modal-close"></i>
			</button>
		</div>
	</div>
</div>
<!-- //tooltip : 위치 - 상단 왼쪽 -->

<!-- tooltip : 위치 - 상단 중앙 -->
<div class="krds-contextual-help top center">
	<p class="tooltip-txt">예시이미지(상단 중앙)</p>
	<div class="tooltip-action">
		<button type="button" class="krds-btn medium icon tooltip-btn" aria-expanded="false">
			<span class="sr-only">도움말<
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<div class="krds-contextual-help top left font-krds" data-krds-component="contextual_help">
	<p class="tooltip-txt">예시이미지(상단 왼쪽)</p>
	<div class="tooltip-action">
		<button type="button" class="krds-btn medium icon tooltip-btn inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md w-11 p-0">
			<span class="sr-only">도움말</span>
			<i class="svg-icon ico-tooltip"></i>
		</button>
		<div class="tooltip-popover" role="tooltip">
			<h4 class="tooltip-title">도움말 제목</h4>
			<div class="tooltip-contents">
				<p>컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보 아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는 경우에만 화면에 표시된다.</p>
				<div class="btn-wrap">
					<a href="#;" class="krds-btn xsmall link basic inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1">바로가기 <i class="svg-icon ico-angle right"></i></a>
				</div>
			</div>
			<button type="button" class="krds-btn xsmall icon tooltip-close inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1 w-11 p-0">
				<span class="sr-only">닫기</span>
				<i class="svg-icon ico-modal-close"></i>
			</button>
		</div>
	</div>
</div>
<!-- //tooltip : 위치 - 상단 왼쪽 -->

<!-- tooltip : 위치 - 상단 중앙 -->
<div class="krds-contextual-help top center">
	<p class="tooltip-txt">예시이미지(상단 중앙)</p>
	<div class="tooltip-action">
		<button type="button" class="krds-btn medium icon tooltip-btn inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md w-11 p-0" aria-expanded="false">
			<span class="sr-only">도움말</span>
			<i class="svg-icon ico-tooltip"></i>
		</button>
		<div class="tooltip-popover" role="tooltip">
			<h4 class="tooltip-title">도움말 제목</h4>
			<div class="tooltip-contents">
				<p>컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보 아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는 경우에만 화면에 표시된다.</p>
				<div class="btn-wrap">
					<a href="#;" class="krds-btn xsmall link basic inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1">바로가기 <i class="svg-icon ico-angle right"></i></a>
				</div>
			</div>
			<button type="button" class="krds-btn xsmall icon tooltip-close inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1 w-11 p-0">
				<span class="sr-only">닫기</span>
				<i class="svg-icon ico-modal-close"></i>
			</button>
		</div>
	</div>
</div>
<!-- //tooltip : 위치 - 상단 중앙 -->

<!-- tooltip : 위치 - 상단 오른쪽 -->
<div class="krds-contextual-help top right">
	<p class="tooltip-txt">예시이미지(상단 오른쪽)</p>
	<div class="tooltip-action">
		<button type="button" class="krds-btn medium icon tooltip-btn inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md w-11 p-0" aria-expanded="false">
			<span class="sr-only">도움말</span>
			<i class="svg-icon ico-tooltip"></i>
		</button>
		<div class="tooltip-popover" role="tooltip">
			<h4 class="tooltip-title">도움말 제목</h4>
			<div class="tooltip-contents">
				<p>컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보 아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는 경우에만 화면에 표시된다.</p>
				<div class="btn-wrap">
					<a href="#;" class="krds-btn xsmall link basic inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1">바로가기 <i class="svg-icon ico-angle right"></i></a>
				</div>
			</div>
			<button type="button" class="krds-btn xsmall icon tooltip-close inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1 w-11 p-0">
				<span class="sr-only">닫기</span>
				<i class="svg-icon ico-modal-close"></i>
			</button>
		</div>
	</div>
</div>
<!-- //tooltip : 위치 - 상단 오른쪽 -->

<br><br>

<!-- tooltip : 위치 - 하단 왼쪽 -->
<div class="krds-contextual-help bottom left">
	<p class="tooltip-txt">예시이미지(하단 왼쪽)</p>
	<div class="tooltip-action">
		<button type="button" class="krds-btn medium icon tooltip-btn inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md w-11 p-0" aria-expanded="false">
			<span class="sr-only">도움말</span>
			<i class="svg-icon ico-tooltip"></i>
		</button>
		<div class="tooltip-popover" role="tooltip">
			<h4 class="tooltip-title">도움말 제목</h4>
			<div class="tooltip-contents">
				<p>컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보 아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는 경우에만 화면에 표시된다.</p>
				<div class="btn-wrap">
					<a href="#;" class="krds-btn xsmall link basic inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1">바로가기 <i class="svg-icon ico-angle right"></i></a>
				</div>
			</div>
			<button type="button" class="krds-btn xsmall icon tooltip-close inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1 w-11 p-0">
				<span class="sr-only">닫기</span>
				<i class="svg-icon ico-modal-close"></i>
			</button>
		</div>
	</div>
</div>
<!-- //tooltip : 위치 - 하단 왼쪽 -->

<!-- tooltip : 위치 - 하단 중앙 -->
<div class="krds-contextual-help bottom center">
	<p class="tooltip-txt">예시이미지(하단 중앙)</p>
	<div class="tooltip-action">
		<button type="button" class="krds-btn medium icon tooltip-btn inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md w-11 p-0" aria-expanded="false">
			<span class="sr-only">도움말</span>
			<i class="svg-icon ico-tooltip"></i>
		</button>
		<div class="tooltip-popover" role="tooltip">
			<h4 class="tooltip-title">도움말 제목</h4>
			<div class="tooltip-contents">
				<p>컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보 아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는 경우에만 화면에 표시된다.</p>
				<div class="btn-wrap">
					<a href="#;" class="krds-btn xsmall link basic inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1">바로가기 <i class="svg-icon ico-angle right"></i></a>
				</div>
			</div>
			<button type="button" class="krds-btn xsmall icon tooltip-close inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1 w-11 p-0">
				<span class="sr-only">닫기</span>
				<i class="svg-icon ico-modal-close"></i>
			</button>
		</div>
	</div>
</div>
<!-- //tooltip : 위치 - 하단 중앙 -->

<!-- tooltip : 위치 - 하단 오른쪽 -->
<div class="krds-contextual-help bottom right">
	<p class="tooltip-txt">예시이미지(하단 오른쪽))</p>
	<div class="tooltip-action">
		<button type="button" class="krds-btn medium icon tooltip-btn inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md w-11 p-0" aria-expanded="false">
			<span class="sr-only">도움말</span>
			<i class="svg-icon ico-tooltip"></i>
		</button>
		<div class="tooltip-popover" role="tooltip">
			<h4 class="tooltip-title">도움말 제목</h4>
			<div class="tooltip-contents">
				<p>컴포넌트 주변에 배치되어 해당 컴포넌트의 상태나 관련된 상세 정보를 제공하는 컴포넌트이다. 맥락적 도움말은 정보 아이콘이나 도움 아이콘 버튼을 통해 사용자가 요청하는 경우에만 화면에 표시된다.</p>
				<div class="btn-wrap">
					<a href="#;" class="krds-btn xsmall link basic inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1">바로가기 <i class="svg-icon ico-angle right"></i></a>
				</div>
			</div>
			<button type="button" class="krds-btn xsmall icon tooltip-close inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1 w-11 p-0">
				<span class="sr-only">닫기</span>
				<i class="svg-icon ico-modal-close"></i>
			</button>
		</div>
	</div>
</div>
<!-- //tooltip : 위치 - 하단 오른쪽 -->
```

## Page Context

페이지 트리상 위치: `form > .context-help`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [help_panel.md](./help_panel.md)
- [tooltip.md](./tooltip.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="contextual_help"` / `data-krds-reference="assets/krds/html/code/contextual_help.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
