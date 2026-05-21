---
name: krds-plan
description: 신규 웹사이트·앱 UI를 KRDS 규칙에 맞게 설계할 때 사용합니다. 빈 페이지부터 KRDS 컴포넌트 매핑과 접근성 게이트를 정의합니다.
---

# krds-plan

## Purpose

웹사이트·앱 UI를 **처음부터** KRDS(Korea Design System) 규칙에 맞게 설계할 때 사용합니다. 구현 전에 범위·컴포넌트·접근성·검증 명령을 정의합니다.

## Inputs

- 제품 목표와 사용자 흐름
- 기존 화면 또는 빈 초기 상태
- 기술 스택 (HTML/CSS, Tailwind, React 등 — `specs/stacks.md` 참조)
- 납기·플랫폼 제약

## Workflow

1. **상태 정의**: empty, loading, success, error, form-validation 상태 매트릭스 작성
2. **컴포넌트 매핑**: `assets/krds/html/code/` 74개 컴포넌트 중 필요한 것 선택
   - 각 컴포넌트에 `data-krds-component`, `data-krds-reference` 속성 계획
   - 상세 스펙: `specs/components/<name>.md`
3. **접근성 게이트** (`specs/accessibility.md`):
   - `lang="ko"`, landmarks (`header/nav/main/footer`)
   - skip-link → `#content`
   - label-input `for`/`id` 바인딩
   - icon-only 버튼 → `sr-only` 텍스트
   - 이미지 `alt` 텍스트
4. **스타일 baseline** (`specs/tokens.md`, `DESIGN.md`):
   - 토큰 키 사용 — **임의 hex/폰트 금지**
   - 8px spacing rhythm, typography hierarchy
5. **필수 DOM 구조**:
   ```html
   #krds-skip-link → #wrap.g-wrap → #krds-masthead → #krds-header
   → #container → #content → #krds-footer
   ```
6. **파일 계획**과 **검증 명령** 출력

## Output Contract

다음 섹션을 반드시 포함:

- `Scope` — 페이지/앱 범위
- `State Matrix` — 상태별 UI 변화
- `KRDS Component Mapping` — 컴포넌트 ↔ 화면 영역 매핑표
- `Accessibility Gates` — a11y 체크리스트
- `Files To Change` — 생성/수정 파일 목록
- `Validation Commands` — 실행할 검증 명령

## Validation Commands

```bash
# 유사도 점수 (≥ 95 통과)
node scripts/krds-similarity.mjs --target <your-page.html>

# 컴포넌트 커버리지 (전체 컴포넌트 페이지만)
node scripts/verify-krds-component-coverage.mjs --target <your-page.html>
```

## Done Criteria

- 추가 가정 없이 바로 구현 가능한 계획
- 모든 a11y 게이트가 measurable pass/fail로 정의됨
- `specs/tokens.md` 토큰 키 참조 포함
- 검증 명령과 통과 기준(score ≥ 95) 명시
