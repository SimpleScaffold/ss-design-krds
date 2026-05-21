# Tts Icon (`tts_icon`)

> **Category**: Content (콘텐츠)
> **Parent**: tts
> **Variants**: —
> **Source**: `assets/krds/html/code/tts_icon.html`

## Overview

아이콘형 TTS 버튼입니다.

## Component Tree

```text
tts (부모)
└── tts_icon
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- TTS 버튼 - Default 타입 -->
<button type="button" class="krds-tts medium">
	<span class="krds-tts-icon" aria-hidden="true">
		<i class="svg-icon ico-volume"></i>
	</span>
</button>

<!-- TTS 버튼 - Play 타입 -->
<button type="button" class="krds-tts medium play">
	<span class="krds-tts-icon" aria-hidden="true">
		<i class="svg-icon ico-play"></i>
	</span>
</button>

<!-- TTS 버튼 - 상태 예시 -->
<button type="button" class="krds-tts medium" disabled>
	<span class="krds-tts-icon" aria-hidden="true">
		<i class="svg-icon ico-volume"></i>
	</span>
</button>
<!-- //TTS 버튼 -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<button type="button" class="krds-tts medium font-krds inline-flex gap-krds-2 text-krds-body-md w-full" data-krds-component="tts_icon">
	<span class="krds-tts-icon font-krds inline-flex gap-krds-2" aria-hidden="true">
		<i class="svg-icon ico-volume"></i>
	</span>
</button>

<!-- TTS 버튼 - Play 타입 -->
<button type="button" class="krds-tts medium play font-krds inline-flex gap-krds-2 text-krds-body-md">
	<span class="krds-tts-icon font-krds inline-flex gap-krds-2" aria-hidden="true">
		<i class="svg-icon ico-play"></i>
	</span>
</button>

<!-- TTS 버튼 - 상태 예시 -->
<button type="button" class="krds-tts medium font-krds inline-flex gap-krds-2 text-krds-body-md" disabled>
	<span class="krds-tts-icon font-krds inline-flex gap-krds-2" aria-hidden="true">
		<i class="svg-icon ico-volume"></i>
	</span>
</button>
<!-- //TTS 버튼 -->
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
- [button_icon.md](./button_icon.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="tts_icon"` / `data-krds-reference="assets/krds/html/code/tts_icon.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
