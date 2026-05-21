# Tts Icon (`tts_icon`)

> Source: `assets/krds/html/code/tts_icon.html`

## When to use

- KRDS 공식 컴포넌트 `tts_icon` 패턴이 필요할 때
- `data-krds-component="tts_icon"` / `data-krds-reference="assets/krds/html/code/tts_icon.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

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
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="tts_icon" data-krds-reference="assets/krds/html/code/tts_icon.html">
  <!-- assets/krds/html/code/tts_icon.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
