# 저장소 디렉터리 트리

ss-design-krds 저장소의 폴더 구조와 **AI가 각 폴더를 언제 읽는지** 설명합니다.

## 전체 트리

```text
ss-design-krds/
├── docs/                         ← ★ AI 시작점 (MD 지식베이스)
│   ├── index.md                  ← 마스터 내비게이션
│   ├── reading-guide.md          ← 시나리오별 읽기 순서
│   ├── repo-tree.md              ← 이 파일
│   ├── page-structure-tree.md    ← 페이지 DOM 계층
│   ├── workflow-tree.md          ← plan/transform/improve
│   └── component-category-tree.md ← 10패밀리 분류
│
├── specs/                        ← ★ 스펙 상세 (MD)
│   ├── tokens.md                 ← 색상·타이포·간격 토큰
│   ├── accessibility.md          ← a11y 게이트
│   ├── stacks.md                 ← HTML/Tailwind/React 선택
│   ├── components/
│   │   ├── _taxonomy.json        ← 74개 분류 데이터 (스크립트용)
│   │   ├── _categories.md        ← 패밀리별 트리 인덱스
│   │   ├── _index.md             ← 74개 flat 테이블
│   │   └── *.md                  ← 컴포넌트별 MD (74개)
│   └── patterns/                 ← 서비스 패턴 (로그인, 검색, 신청)
│
├── skills/                       ← ★ 실행 워크플로
│   ├── krds-plan/SKILL.md        ← 신규 UI 설계
│   ├── krds-transform/SKILL.md   ← 기존 UI 전환
│   └── krds-improve/SKILL.md     ← 품질 개선
│
├── assets/krds/                  ← HTML 원본 (작업용)
│   ├── html/code/*.html          ← 74개 공식 컴포넌트 HTML
│   ├── tokens/                   ← Figma/transformed tokens
│   └── resources/                ← CSS/SCSS/JS (빌드 산출물)
│
├── references/                   ← 읽기 전용 참조
│   ├── krds/                     ← assets와 동일 미러 (lookup)
│   ├── official-links.md         ← krds.go.kr URL 모음
│   ├── krds-react.md             ← React 라이브러리 참고
│   └── gracefullight-krds.md     ← MUI/TW 토큰 참고
│
├── scripts/                      ← 검증·생성 스크립트
│   ├── krds-similarity.mjs       ← score 산출 (≥ 95)
│   ├── krds-ruleset.json         ← pass/fail 규칙
│   ├── validate-krds.mjs         ← 저장소 무결성
│   ├── generate-spec-index.mjs   ← 컴포넌트 MD 생성
│   └── generate-docs-trees.mjs   ← 카테고리 트리 MD 생성
│
├── templates/                    ← 소비 프로젝트 부트스트랩
│   ├── install.sh                ← submodule + skills 설치
│   ├── tailwind-theme.css        ← Tailwind v4 @theme
│   └── consumer-*.snippet        ← CLAUDE/AGENTS 붙여넣기
│
├── experiment/sample-page/       ← 참조 구현 (HTML + Tailwind)
├── reports/                      ← 검증 결과 (baseline)
│
├── AGENTS.md                     ← 범용 에이전트 진입점
├── CLAUDE.md                     ← Claude Code 진입점
├── DESIGN.md                     ← 디자인 baseline (YAML)
├── README.md / README.ko.md
└── package.json
```

## 폴더별 역할

### `docs/` — AI 전용 내비게이션

| 언제 읽나 | 모든 KRDS UI 작업 **시작 시** |
|----------|------------------------------|
| 무엇이 있나 | 트리 구조, 읽기 순서, 워크플로 설명 |
| HTML 참조 | 없음 — 순수 MD |

### `specs/` — 스펙 상세

| 언제 읽나 | 토큰·컴포넌트·패턴이 필요할 때 |
|----------|------------------------------|
| 우선순위 | `tokens.md` → `_categories.md` → 개별 `*.md` |
| HTML 참조 | MD에 발췌 포함, 원본은 `assets/` |

### `assets/krds/` vs `references/krds/`

| | assets/krds | references/krds |
|---|-------------|-----------------|
| **용도** | 에이전트 작업·복사용 | 읽기 전용 lookup |
| **내용** | 동일 (html, tokens, resources) | 동일 미러 |
| **언제** | HTML/CSS 복사할 때 | 경로 확인만 할 때 |

### `skills/` — 실행 워크플로

| Skill | 트리거 |
|-------|--------|
| krds-plan | 빈 페이지/앱 신규 |
| krds-transform | 기존 UI KRDS 전환 |
| krds-improve | 1차 구현 후 score 개선 |

### `scripts/` — 기계 검증

에이전트가 **pass/fail**을 확인할 때 실행. 주관적 "KRDS 느낌" 대신 JSON + exit code.

---

## 소비 프로젝트에서의 위치

```text
your-project/
├── .krds/                    ← git submodule (ss-design-krds)
│   └── docs/index.md         ← 여기서 시작
├── src/ or public/
│   └── index.html            ← KRDS UI 구현
└── CLAUDE.md                 ← consumer-CLAUDE.md.snippet 포함
```

---

## 관련 문서

- [docs/index.md](./index.md)
- [docs/reading-guide.md](./reading-guide.md)
