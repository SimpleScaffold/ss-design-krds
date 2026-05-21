# Tts (`tts`)

> Source: `assets/krds/html/code/tts.html`

## When to use

- KRDS 공식 컴포넌트 `tts` 패턴이 필요할 때
- `data-krds-component="tts"` / `data-krds-reference="assets/krds/html/code/tts.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

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

<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="tts" data-krds-reference="assets/krds/html/code/tts.html">
  <!-- assets/krds/html/code/tts.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
