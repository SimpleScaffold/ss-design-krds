# Step Indicator (`step_indicator`)

> **Category**: Navigation (탐색)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/step_indicator.html`

## Overview

다단계 신청·입력 절차의 현재 단계를 표시합니다.

## Component Tree

```text
step_indicator (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

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
	</li>
</ol>
<!-- //스텝 -->

<br>
<br>

<!-- 페이지 타이틀과 스텝 혼합 -->
<div class="page-title-wrap between">
	<h2 class="h-tit">타이틀</h2>
	<!-- 스텝 영역 -->
	<ol class="krds-step-wrap">
		<li class="done">
            <span>
                <i class="step">1단계</i>
                <span class="step-tit">유의 사항 확인</span>
            </span>
		</li>
		<li class="done">
            <span>
                <i class="s
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<ol class="krds-step-wrap font-krds flex gap-krds-4" data-krds-component="step_indicator">
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
	</li>
</ol>
<!-- //스텝 -->

<br>
<br>

<!-- 페이지 타이틀과 스텝 혼합 -->
<div class="page-title-wrap between">
	<h2 class="h-tit">타이틀</h2>
	<!-- 스텝 영역 -->
	<ol class="krds-step-wrap font-krds flex gap-krds-4">
		<li class="done">
            <span>
                <i class="step">1단계</i>
                <span class="step-tit">유의 사항 확인</span>
            </span>
		</li>
		<li class="done">
            <span>
                <i class="step">2단계</i>
                <span class="step-tit">신청인 정보</span>
            </span>
		</li>
		<li class="active">
            <span>
                <em class="sr-only">현재단계</em>
                <i class="step">3단계</i>
                <span class="step-tit">이사 전 살던 곳</span>
            </span>
		</li>
		<li>
            <span>
                <i class="step">4단계</i>
                <span class="step-tit">이사 온 곳</span>
            </span>
		</li>
	</ol>
	<!-- //스텝 영역 -->
</div>
<!-- //페이지 타이틀과 스텝 혼합 -->
```

## Page Context

페이지 트리상 위치: `main#content > section.process`

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
- `data-krds-component="step_indicator"` / `data-krds-reference="assets/krds/html/code/step_indicator.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
