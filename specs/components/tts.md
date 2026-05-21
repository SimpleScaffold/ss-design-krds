# Tts (`tts`)

> **Category**: Content (콘텐츠)
> **Parent**: —
> **Variants**: tts_icon, tts_size
> **Source**: `assets/krds/html/code/tts.html`

## Overview

텍스트 음성 변환(TTS) 재생 컨트롤입니다.

## Component Tree

```text
tts (기본)
├── tts_icon
└── tts_size
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- TTS 버튼 - Default 타입 -->
<button type="button" class="krds-tts medium" onclick="krds_playTts('TTS 기능이란 화면에 표시된 주요 안내, 입력 서식 설명, 업무 진행 상태 등의 텍스트를 사용자가 요청했을 때 음성으로 읽어주는 보조적 사용자 지원 기능을 말하며, 이는 시각 정보의 대체가 아닌 보완 수단으로서 다른 접근성 기능(글자 크기 조절, 대비 향상, 쉬운모드 등)과 함께 제공되는 것을 원칙으로 한다.', this)">
	<span class="krds-tts-icon" aria-hidden="true">
		<i class="svg-icon ico-volume"></i>
	</span>
	<span class="krds-tts-text">레이블</span>
</button>

<!-- TTS 버튼 - Play 타입 -->
<button type="button" class="krds-tts medium play" onclick="krds_playTts('TTS 기능이란 화면에 표시된 주요 안내, 입력 서식 설명, 업무 진행 상태 등의 텍스트를 사용자가 요청했을 때 음성으로 읽어주는 보조적 사용자 지원 기능을 말하며, 이는 시각 정보의 대체가 아닌 보완 수단으로서 다른 접근성 기능(글자 크기 조절, 대비 향상, 쉬운모드 등)과 함께 제공되는 것을 원칙으로 한다.', this)">
	<span class="krds-tts-icon" aria-hidden="true">
		<i class="svg-icon ico-play"></i>
	</span>
	<span class="krds-tts-text">재생</span>
</button>

<!-- TTS 버튼 - 상태 예시 -->
<button type="button" class="krds-tts medium" disabled>
	<span class="krds-tts-icon" aria-hidden="true">
		<i class="svg-icon ico-volume"></i>
	</span>
	<span class="krds-tts-text">레이블</span>
</button>
<!-- //TTS 버튼 -->
```

## Tailwind

```html
<!-- templates/tailwind-theme.css + krds- 클래스 병행 -->
<button type="button" class="krds-component bg-krds-primary rounded-krds-sm px-4 py-3 font-krds">
  Tts 예시
</button>
```

## Page Context

페이지 트리상 위치: `section > .tts-control`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- (none)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="tts"` / `data-krds-reference="assets/krds/html/code/tts.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
