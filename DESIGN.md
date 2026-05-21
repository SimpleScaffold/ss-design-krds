---
version: "1.0"
name: KRDS Public Service Baseline
description: KRDS-focused design baseline for accessible Korean public digital services.
colors:
  primary: "#1e2124"
  secondary: "#58616a"
  action: "#256ef4"
  surface: "#f4f5f6"
  danger: "#de3412"
  success: "#228738"
  warning: "#9e6a00"
typography:
  fontFamily: "Pretendard GOV, Pretendard, Noto Sans KR, sans-serif"
  heading-lg:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.3
  body-md:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label-sm:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
rounded:
  sm: 4px
  md: 8px
  lg: 14px
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
---

## Overview

KRDS(Korea Design System)는 대한민국 디지털 정부 서비스의 일관성, 접근성, 사용성을 위한 설계 기준입니다. AI 에이전트는 이 문서와 `specs/` 디렉터리를 우선 참조하고, HTML 원본은 `assets/krds/html/code/`에서 복사합니다.

## Colors

- **Primary text**: `#1e2124` (`--krds-color-light-gray-90`)
- **Secondary text**: `#58616a` (`--krds-color-light-gray-60`)
- **Primary action**: `#256ef4` (`--krds-color-light-primary-50`)
- **Surface**: `#f4f5f6` (`--krds-color-light-gray-5`)
- **Danger**: `#de3412` (`--krds-color-light-danger-50`)
- **Success**: `#228738` (`--krds-color-light-success-50`)

장식용 accent 남용을 피하고, 텍스트·배경·액션 색상의 대비를 WCAG 2.2 기준에 맞춥니다.

## Typography

- **Font stack**: Pretendard GOV → Pretendard → Noto Sans KR → sans-serif
- **Heading hierarchy**: h1(페이지 제목) → h2(섹션) → h3(하위 블록)
- **Body**: 16px, line-height 1.6
- **Label**: 14px, font-weight 500

한글 가독성을 위해 letter-spacing을 과도하게 줄이지 않습니다.

## Layout

- **Spacing rhythm**: 8px 기준 (4, 8, 16, 24, 40px)
- **Max content width**: 1180px (`g-wrap`)
- **필수 DOM 앵커**: `#krds-skip-link`, `#wrap.g-wrap`, `#krds-masthead`, `#krds-header`, `#container`, `#content`, `#krds-footer`
- **Landmarks**: `header`, `nav`, `main`, `footer`

## Components

KRDS 컴포넌트는 `krds-` 접두사 클래스를 사용합니다. 74개 HTML 컴포넌트 참조는 `assets/krds/html/code/`에 있습니다.

| 패밀리 | 대표 클래스 | 스펙 |
|--------|-------------|------|
| Button | `krds-btn`, `krds-btn primary` | `specs/components/button.md` |
| Input | `krds-input` | `specs/components/text_input.md` |
| Table | `krds-table` | `specs/components/table.md` |
| Badge | `krds-badge` | `specs/components/badge.md` |

## Do's and Don'ts

**Do**
- `lang="ko"` 설정
- skip-link → `#content` 연결
- label-input `for`/`id` 바인딩
- icon-only 버튼에 `sr-only` 텍스트
- `data-krds-component` / `data-krds-reference`로 출처 추적

**Don't**
- 토큰 없이 임의 hex/폰트 사용
- 시각적 단서만으로 정보 전달
- landmark 없이 div만으로 페이지 구조 구성
