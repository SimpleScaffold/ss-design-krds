# Step Indicator (`step_indicator`)

> Source: `assets/krds/html/code/step_indicator.html`

## When to use

- KRDS 공식 컴포넌트 `step_indicator` 패턴이 필요할 때
- `data-krds-component="step_indicator"` / `data-krds-reference="assets/krds/html/code/step_indicator.html"`로 출처 추적

## Tokens

- `specs/tokens.md` 참조 — 임의 hex 금지

## HTML (official)

```html
<!-- step indicator -->
<!-- 스텝 -->
<ol class="krds-step-wrap">
	<li class="done">
        <span>
            <i class="step">1단계</i>
            <span class="step-tit">단계 레이블</span>
        </span>
	</li>
	<li class="done">
        <span>
            <i class="step">2단계</i>
            <span class="step-tit">단계 레이블</span>
        </span>
	</li>
	<li class="done">
        <span>
            <i class="step">3단계</i>
            <span class="step-tit">단계 레이블</span>
        </span>
	</li>
	<li class="active">
        <span>
            <em class="sr-only">현재단계</em>
            <i class="step">4단계</i>
            <span class="step-tit">단계 레이블</span>
        </span>
	</li>
	<li>
        <span>
            <i class="step">5단계</i>
            <span class="step-tit">단계 레이블</span>
        </span>
	<
<!-- truncated -->
```

## Tailwind

```html
<!-- krds- 클래스 + templates/tailwind-theme.css 토큰 병행 -->
<div data-krds-component="step_indicator" data-krds-reference="assets/krds/html/code/step_indicator.html">
  <!-- assets/krds/html/code/step_indicator.html 구조 참조 -->
</div>
```

## Accessibility

- `specs/accessibility.md` 게이트 준수
- label-input 바인딩, sr-only, alt text 확인

## Do / Don't

**Do**: 공식 HTML 구조·클래스 유지  
**Don't**: krds- 접두사 없이 generic 클래스만 사용
