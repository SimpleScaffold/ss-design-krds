# KRDS 에이전트 워크플로 트리

AI 에이전트가 KRDS UI를 만들 때 따르는 **plan → implement → validate** 흐름입니다.

## 전체 워크플로

```text
[KRDS UI 작업 시작]
│
├── Q: 빈 페이지/앱인가?
│   ├── YES → krds-plan
│   └── NO  → Q: 기존 UI를 KRDS로 바꾸는가?
│       ├── YES → krds-transform
│       └── NO  → krds-improve (이미 KRDS-like)
│
├── [구현]
│   ├── specs/tokens.md 참조
│   ├── specs/components/*.md 참조
│   └── assets/krds/html/code/ 복사
│
└── [검증]
    ├── krds-similarity.mjs → score ≥ 95?
    │   ├── NO  → krds-improve (반복)
    │   └── YES → 다음 단계
    ├── krds-checklist.mjs → 공식 311항 P/F/E/N/A
    │   ├── static (L1) + browser (L2)
    │   └── manual (L3) → procedure 수동 확인
    └── (선택) verify-coverage.mjs → 74/74?
```

## krds-plan 워크플로

```text
krds-plan
├── Input: 제품 목표, 사용자 흐름, 기술 스택
├── 1. State Matrix (empty/loading/success/error)
├── 2. Component Mapping → specs/components/_categories.md
├── 3. Accessibility Gates → specs/accessibility.md
├── 4. File Plan
├── 5. Validation Commands 정의
└── Output: Scope, State Matrix, KRDS Component Mapping, Files To Change
```

**Skill**: [skills/krds-plan/SKILL.md](../skills/krds-plan/SKILL.md)

## krds-transform 워크플로

```text
krds-transform
├── Input: 기존 HTML/CSS/JS, 유지할 ID/hooks
├── 1. Inventory (기존 컴포넌트 목록)
├── 2. Before/After Mapping → docs/component-category-tree.md
├── 3. Theme Layer 교체 (generic → krds-)
├── 4. DOM 앵커 추가 (skip-link, landmarks)
├── 5. Behavior Preservation 확인
└── Output: Before/After Map, Change Map, Preserved Hooks
```

**Skill**: [skills/krds-transform/SKILL.md](../skills/krds-transform/SKILL.md)

## krds-improve 워크플로

```text
krds-improve
├── Input: KRDS-like 1차 구현 HTML
├── 1. Baseline: krds-similarity.mjs
│   └── failed rules 목록 확인
├── 2. High-impact fix (우선순위)
│   ├── skip-link-target
│   ├── form-label-binding
│   ├── icon-button-has-sr-only
│   ├── nav-aria-label
│   └── meta-description
├── 3. Re-score → delta 비교
├── 4. Repeat until score ≥ 95
└── Output: Rule Report, Score Delta, Final Evidence
```

**Skill**: [skills/krds-improve/SKILL.md](../skills/krds-improve/SKILL.md)

**자동 루프**: `node scripts/krds-improve-loop.mjs --target <file>`

## 검증 규칙 트리

```text
krds-similarity.mjs (threshold: 95)
├── Document
│   ├── doctype
│   └── lang-ko
├── Meta
│   ├── charset, viewport, description
├── Landmarks
│   ├── header, nav, main, footer
├── Selectors (rule ID: selector-*)
│   ├── selector-krds-skip-link, selector-wrap-g-wrap
│   ├── selector-krds-masthead, selector-krds-header
│   ├── selector-container, selector-content, selector-krds-footer
├── Classes (rule ID: class-*)
│   ├── class-krds-btn, class-krds-input, class-krds-form
│   ├── class-krds-table, class-krds-badge, class-sr-only
└── A11y
    ├── skip-link-target, form-label-binding
    ├── icon-button-has-sr-only, image-has-alt
    └── nav-aria-label, table-semantic
```

규칙 구현: [scripts/krds-html-rules.mjs](../scripts/krds-html-rules.mjs) · 가중치: [scripts/krds-ruleset.json](../scripts/krds-ruleset.json)

## 공식 자체 검증 체크리스트 (311항)

```text
krds-checklist.mjs
├── Catalog: resources/krds/checklist/official-checklist.json
├── L1 static → krds-checklist-static.mjs (~40 rules)
├── L2 browser → krds-checklist-browser.mjs (Playwright)
├── L3 manual → 리포트 status: manual
├── tier filter: gov | self | common (+ N/A)
└── Output: reports/checklist-result.json + .md
```

트리: [validation-checklist-tree.md](./validation-checklist-tree.md)  
절차: [specs/validation-checklist.md](../specs/validation-checklist.md)  
도구: [specs/validation-tools.md](../specs/validation-tools.md)

## npm scripts

| 명령 | 용도 |
|------|------|
| `npm run krds:score` | similarity 점수 |
| `npm run krds:checklist` | 공식 체크리스트 311항 검증 |
| `npm run krds:checklist:docs` | 체크리스트 MD 재생성 |
| `npm run krds:improve` | 개선 루프 |
| `npm run krds:validate` | 저장소 전체 검증 |
| `npm run krds:docs` | 카테고리 트리 MD 재생성 |
| `npm run krds:index` | 컴포넌트 MD 재생성 |

## 관련 문서

- [docs/reading-guide.md](./reading-guide.md) — 시나리오별 읽기 순서
- [docs/index.md](./index.md)
