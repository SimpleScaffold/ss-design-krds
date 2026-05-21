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
└── component-category-tree.md    ← KRDS 10패밀리 74컴포넌트 분류
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
└── specs/tokens.md 등      ← 토큰·a11y·스택

Layer 3 — 상세 (Specs)
├── specs/components/*.md  ← 74개 컴포넌트 MD
├── specs/patterns/*.md    ← 서비스 패턴
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
npm run krds:validate                                      # 전체 검증
```

## 하위 문서 링크

| 문서 | 내용 |
|------|------|
| [reading-guide.md](./reading-guide.md) | 신규/전환/개선 시나리오별 읽기 순서 |
| [repo-tree.md](./repo-tree.md) | 저장소 디렉터리 트리 + 각 폴더 역할 |
| [page-structure-tree.md](./page-structure-tree.md) | KRDS 페이지 DOM 계층 |
| [workflow-tree.md](./workflow-tree.md) | plan → transform → improve 워크플로 |
| [component-category-tree.md](./component-category-tree.md) | KRDS 10패밀리 컴포넌트 분류 |

## Specs 바로가기

| Spec | 용도 |
|------|------|
| [specs/tokens.md](../specs/tokens.md) | 색상·타이포·간격 토큰 |
| [specs/accessibility.md](../specs/accessibility.md) | a11y 게이트 |
| [specs/stacks.md](../specs/stacks.md) | HTML/Tailwind/React 스택 선택 |
| [specs/components/_categories.md](../specs/components/_categories.md) | 카테고리별 컴포넌트 |
| [specs/components/_index.md](../specs/components/_index.md) | 74개 flat 인덱스 |
