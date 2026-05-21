---
name: krds-transform
description: 기존 웹사이트·앱 UI를 KRDS 테마와 구조로 전환할 때 사용합니다. 동작과 ID/훅은 보존하면서 시각·마크업을 KRDS 규칙에 맞춥니다.
---

# krds-transform

## Purpose

이미 존재하는 웹사이트·앱 UI의 **테마와 구조를 KRDS 규칙으로 전환**할 때 사용합니다. 기능·동작은 보존합니다.

## Inputs

- 현재 HTML/CSS/JS (또는 React/Vue 등 컴포넌트)
- 유지해야 할 UX 동작, ID, data 속성, analytics 훅
- 대상 스택 (`specs/stacks.md` 참조)

## Workflow

1. **인벤토리**: 기존 컴포넌트·인터랙션 상태 목록화
2. **Before/After 매핑**: 각 UI 패턴 → KRDS 컴포넌트 (`specs/components/`, `assets/krds/html/code/`)
3. **테마 전환**:
   - generic 클래스 → `krds-` 접두사 클래스
   - 임의 색상 → `specs/tokens.md` 토큰
   - generic 폰트 → Pretendard GOV / Noto Sans KR
4. **구조 정규화**:
   - 필수 DOM 앵커 추가 (`#krds-skip-link`, `#krds-header`, `#container`, `#content`, `#krds-footer`)
   - landmark 태그 적용
5. **동작 보존**:
   - ID, data 속성, form action, event handler 유지
   - analytics/tracking 훅 변경 금지
6. **접근성 재검증** (`specs/accessibility.md`)

## Scoped Migration: preserve-colors

기관 고유 팔레트(확장형)를 유지하면서 KRDS 구조·비색 토큰만 적용할 때:

| 모드 | 적용 | 금지 |
|------|------|------|
| `preserve-colors: all` | typography, spacing, radius, `krds-` DOM·landmark, 레이아웃 규칙 | `color.*` 토큰, hex, 기존 CSS 색 변수 변경 |

**부트스트랩**

```bash
npm run krds:apply -- --target <project> --stack tailwind|vanilla|react --preserve-colors all
```

- `krds-color-bridge.css` — 기존 `--primary` 등 → `--krds-color-*` 매핑 (`manifests/token-bridge.json`)
- import: `theme-structure` + bridge + `tokens-semantic` + `components.css` ( **`tokens-color` / full theme 금지** )

**검증 (색상 카테고리 제외)**

```bash
npm run krds:checklist -- --target <page.html> \
  --category style.typography,style.shape,style.layout,component \
  --mode static+browser
```

색 대비·매직넘버는 프로젝트 팔레트 책임.

## Migration Rules

- 변환 범위 밖 broad rewrite 금지
- 구조 앵커·스크립트 훅 호환 유지
- 각 교체 패턴에 change map 제공
- `preserve-colors: all`이면 테마 전환 3단계에서 **색상 치환 생략**

## Output Contract

- `Before/After Mapping` — 패턴별 변환표
- `Preserved Hooks` — 유지된 ID/data/event 목록
- `Change Map` — 파일별 변경 요약
- `Validation Commands`

## Validation Commands

```bash
node scripts/krds-similarity.mjs --target <transformed-page.html>
node scripts/verify-krds-component-coverage.mjs --target <transformed-page.html>
```

## Done Criteria

- 원래 기능 보존
- KRDS validation rules 통과 (score ≥ 95)
- change map과 evidence report 제공
