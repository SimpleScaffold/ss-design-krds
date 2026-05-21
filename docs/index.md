# ss-design-krds AI 문서 허브

ss-design-krds는 AI 에이전트가 [KRDS(Korea Design System)](https://www.krds.go.kr/html/site/index.html) 규칙을 읽고 HTML/CSS·Tailwind UI를 만들 때 참조하는 **MD 중심 지식베이스**입니다.

> **AI 에이전트**: KRDS UI 작업 전 **이 문서(`docs/index.md`)부터** 읽고, 시나리오에 맞는 가이드를 따라가세요.

## 문서 트리

```text
docs/
├── index.md                      ← 지금 읽는 파일 (마스터 내비게이션)
├── reading-guide.md              ← 시나리오별 읽기 순서
├── repo-tree.md                  ← 저장소 전체 구조 + 폴더 설명
├── page-structure-tree.md        ← KRDS 페이지 DOM 계층
├── workflow-tree.md              ← plan → implement → validate
├── validation-checklist-tree.md  ← 공식 311항 체크리스트 트리
├── component-category-tree.md    ← KRDS 10패밀리 74컴포넌트 분류
├── style/                        ← KRDS 공식 스타일 가이드 9페이지 MD
│   └── index.md
└── patterns/                     ← KRDS 기본 패턴 13페이지 MD
    └── index.md
```

## 시나리오별 시작점

| 상황 | 1순위 | 2순위 | 3순위 |
|------|-------|-------|-------|
| **신규 UI** | [reading-guide.md](./reading-guide.md) | [page-structure-tree.md](./page-structure-tree.md) | [specs/components/_categories.md](../specs/components/_categories.md) |
| **기존 UI 전환** | [reading-guide.md](./reading-guide.md) | [component-category-tree.md](./component-category-tree.md) | `skills/krds-transform/SKILL.md` |
| **품질 개선** | [reading-guide.md](./reading-guide.md) | [workflow-tree.md](./workflow-tree.md) | `skills/krds-improve/SKILL.md` |

자세한 읽기 순서는 [reading-guide.md](./reading-guide.md)를 참조하세요.

## 3층 MD 아키텍처

```text
Layer 1 — 진입 (Entry)
├── docs/index.md          ← AI 시작점
├── AGENTS.md / CLAUDE.md  ← 에이전트 라우터
└── skills/krds-*/SKILL.md ← 실행 워크플로

Layer 2 — 가이드 (Guides)
├── docs/*.md              ← 트리·설명·내비게이션
├── docs/style/*.md        ← KRDS 공식 스타일 (색상·타이포·형태 등 상세)
├── docs/patterns/*.md     ← KRDS 기본 패턴 (PII·폼·필터 등 상세)
└── specs/tokens.md 등      ← 토큰 요약·a11y·스택 (상세는 docs/style/)

Layer 3 — 상세 (Specs)
├── specs/components/*.md  ← 74개 컴포넌트 MD
├── specs/patterns/*.md    ← 서비스 패턴 구현 스펙 (기본 패턴 상세는 docs/patterns/)
└── assets/krds/html/code/ ← HTML 원본 (MD 읽은 후)
```

**원칙**: 코드/HTML보다 **MD를 먼저** 읽습니다. HTML은 `assets/`에서 복사할 때만 참조합니다.

## 빠른 참조

### 필수 DOM 앵커

```text
#wrap.g-wrap
├── #krds-skip-link → href="#content"
├── #krds-masthead
├── #krds-header
├── #container
│   └── main#content
└── #krds-footer
```

상세: [page-structure-tree.md](./page-structure-tree.md)

### 필수 클래스

- `krds-btn`, `krds-input`, `krds-form`, `krds-table`, `krds-badge`, `sr-only`

### 금지 사항

- `specs/tokens.md` 토큰 없이 임의 hex/폰트 사용
- skip-link, landmark, label-input 바인딩 생략

### 검증 명령

```bash
node scripts/krds-similarity.mjs --target <page.html>   # score ≥ 95
npm run krds:checklist -- --target <page.html>           # 공식 311항
npm run krds:style:md:validate                           # 스타일 MD 무결성
npm run krds:pattern:md:validate                         # 기본 패턴 MD 무결성
npm run krds:validate                                      # 전체 검증
```

스타일 검증: [specs/validation/style.md](../specs/validation/style.md) (21항 ↔ [docs/style/](./style/index.md) 매핑)

체크리스트: [validation-checklist-tree.md](./validation-checklist-tree.md) · [specs/validation-checklist.md](../specs/validation-checklist.md) · [checklist-maintenance.md](./checklist-maintenance.md)

## 하위 문서 링크

| 문서 | 내용 |
|------|------|
| [reading-guide.md](./reading-guide.md) | 신규/전환/개선 시나리오별 읽기 순서 |
| [repo-tree.md](./repo-tree.md) | 저장소 디렉터리 트리 + 각 폴더 역할 |
| [page-structure-tree.md](./page-structure-tree.md) | KRDS 페이지 DOM 계층 |
| [workflow-tree.md](./workflow-tree.md) | plan → transform → improve 워크플로 |
| [validation-checklist-tree.md](./validation-checklist-tree.md) | 공식 311항 자체 검증 체크리스트 |
| [checklist-maintenance.md](./checklist-maintenance.md) | 체크리스트·검증 스크립트 갱신 순서 |
| [component-category-tree.md](./component-category-tree.md) | KRDS 10패밀리 컴포넌트 분류 |
| [style/index.md](./style/index.md) | KRDS 공식 스타일 가이드 (색상·타이포·레이아웃 등) |
| [patterns/index.md](./patterns/index.md) | KRDS 기본 패턴 (PII·폼·필터·동의 등 13페이지) |
| [specs/validation/style.md](../specs/validation/style.md) | 스타일 21항 체크리스트 ↔ `docs/style/` 매핑 |
| [specs/validation/pattern.basic.md](../specs/validation/pattern.basic.md) | 기본 패턴 47항 ↔ `docs/patterns/` 매핑 |

## Specs 바로가기

| Spec | 용도 |
|------|------|
| [specs/tokens.md](../specs/tokens.md) | 색상·타이포·간격 토큰 (요약) |
| [style/index.md](./style/index.md) | KRDS 스타일 가이드 상세 (공식 페이지 MD) |
| [specs/accessibility.md](../specs/accessibility.md) | a11y 게이트 |
| [specs/stacks.md](../specs/stacks.md) | HTML/Tailwind/React 스택 선택 |
| [packages/krds-tailwind/README.md](../packages/krds-tailwind/README.md) | `@simplescaffold/krds-tailwind` npm 패키지 |
| [experiment/sample-page/tailwind.html](../experiment/sample-page/tailwind.html) | Tailwind 샘플 페이지 |
| [specs/components/_categories.md](../specs/components/_categories.md) | 카테고리별 컴포넌트 |
| [specs/components/_index.md](../specs/components/_index.md) | 74개 flat 인덱스 |
