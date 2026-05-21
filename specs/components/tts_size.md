# Tts Size (`tts_size`)

> **Category**: Content (콘텐츠)
> **Parent**: tts
> **Variants**: —
> **Source**: `assets/krds/html/code/tts_size.html`

## Overview

TTS 컨트롤 크기 변형입니다.

## Component Tree

```text
tts (부모)
└── tts_size
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- TTS 버튼 - Default 타입 -->
<button type="button" class="krds-tts xsmall">
	<span class="krds-tts-icon" aria-hidden="true">
		<i class="svg-icon ico-volume"></i>
	</span>
	<span class="krds-tts-text"> Xsmall TTS</span>
</button>
<button type="button" class="krds-tts small">
	<span class="krds-tts-icon">
		<i class="svg-icon ico-volume"></i>
	</span>
	<span class="krds-tts-text">Small TTS</span>
</button>
<button type="button" class="krds-tts medium">
	<span class="krds-tts-icon" aria-hidden="true">
		<i class="svg-icon ico-volume"></i>
	</span>
	<span class="krds-tts-text">Medium TTS</span>
</button>
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<button type="button" class="krds-tts xsmall font-krds inline-flex gap-krds-2 text-krds-label-sm min-h-[30px] px-krds-2 py-krds-1 w-full" data-krds-component="tts_size">
	<span class="krds-tts-icon font-krds inline-flex gap-krds-2" aria-hidden="true">
		<i class="svg-icon ico-volume"></i>
	</span>
	<span class="krds-tts-text font-krds inline-flex gap-krds-2"> Xsmall TTS</span>
</button>
<button type="button" class="krds-tts small font-krds inline-flex gap-krds-2 text-krds-body-sm min-h-[30px] px-krds-2 py-krds-1">
	<span class="krds-tts-icon font-krds inline-flex gap-krds-2">
		<i class="svg-icon ico-volume"></i>
	</span>
	<span class="krds-tts-text font-krds inline-flex gap-krds-2">Small TTS</span>
</button>
<button type="button" class="krds-tts medium font-krds inline-flex gap-krds-2 text-krds-body-md">
	<span class="krds-tts-icon font-krds inline-flex gap-krds-2" aria-hidden="true">
		<i class="svg-icon ico-volume"></i>
	</span>
	<span class="krds-tts-text font-krds inline-flex gap-krds-2">Medium TTS</span>
</button>
```

## Page Context

페이지 트리상 위치: `inline`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [tts.md](./tts.md) (parent)
- [tts.md](./tts.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="tts_size"` / `data-krds-reference="assets/krds/html/code/tts_size.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
