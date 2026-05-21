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
│   ├── validation-checklist-tree.md ← 공식 311항 체크리스트 트리
│   ├── checklist-maintenance.md  ← 체크리스트·스크립트 갱신 순서
│   ├── component-category-tree.md ← 10패밀리 분류
│   └── style/                    ← KRDS 공식 스타일 가이드 MD (9페이지)
│       ├── index.md
│       ├── 색상.md · 타이포그래피.md · 형태.md · …
│
├── specs/                        ← ★ 스펙 상세 (MD)
│   ├── tokens.md                 ← 색상·타이포·간격 토큰 (요약)
│   ├── accessibility.md          ← a11y 게이트
│   ├── stacks.md                 ← HTML/Tailwind/React 선택
│   ├── validation/               ← 체크리스트 카테고리별 준수기준
│   │   ├── style.md              ← 스타일 21항 ↔ docs/style/ 매핑
│   │   ├── component.md
│   │   └── pattern.*.md
│   ├── components/
│   │   ├── _taxonomy.json        ← 74개 분류 데이터 (스크립트용)
│   │   ├── _categories.md        ← 패밀리별 트리 인덱스
│   │   ├── _index.md             ← 74개 flat 테이블
│   │   └── *.md                  ← 컴포넌트별 MD (74개)
│   └── patterns/                 ← 서비스 패턴 (로그인, 검색, 신청)
│
├── resources/krds/               ← 기계 검증 데이터
│   ├── checklist/
│   │   ├── official-checklist.json ← 311항 카탈로그 (specRef → docs/style/)
│   │   └── schema.json
│   └── manifest.json
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
├── references/                   ← 외부 스택·공식 링크 참고
│   ├── official-links.md         ← krds.go.kr URL 모음
│   ├── krds-react.md             ← React 라이브러리 참고
│   └── gracefullight-krds.md     ← MUI/TW 토큰 참고
│
├── scripts/                      ← 검증·생성 스크립트
│   ├── krds-html-rules.mjs       ← 공통 HTML/static 규칙 구현
│   ├── krds-checklist-browser.mjs ← L2 browser (스타일·뷰포트·키보드)
│   ├── krds-similarity.mjs       ← score 산출 (≥ 95)
│   ├── krds-ruleset.json         ← similarity 가중치 프로필
│   ├── krds-checklist.mjs        ← 311항 체크리스트 오케스트레이터
│   ├── krds-style-to-md.mjs      ← KRDS style 페이지 → docs/style/ MD
│   ├── validate-style-md.mjs     ← 스타일 MD 무결성 검증
│   ├── style-guide-lib.mjs       ← 스타일 임계값·specRef 공유
│   ├── validate-krds.mjs         ← 저장소 무결성
│   └── …                         ← 상세: docs/checklist-maintenance.md
│
├── packages/krds-tailwind/       ← @simplescaffold/krds-tailwind npm 패키지
│   ├── src/theme.css             ← @theme 토큰 (단일 진실 원천)
│   ├── src/components/*.html     ← 74개 Tailwind 하이브리드 스니펫
│   └── dist/                     ← 빌드 산출물 (CSS + 스니펫)
│
├── templates/                    ← 소비 프로젝트 부트스트랩
│   ├── install.sh                ← submodule + skills 설치
│   ├── tailwind-theme.css        ← theme.css 동기화 복사본
│   └── consumer-*.snippet        ← CLAUDE/AGENTS 붙여넣기
│
├── experiment/sample-page/       ← 참조 구현 (index.html + tailwind.html)
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

### `docs/style/` — KRDS 공식 스타일 가이드

| 언제 읽나 | 색상·타이포·형태·레이아웃 규칙이 필요할 때; 체크리스트 스타일 21항 실패 시 |
|----------|----------------------------------------------------------------|
| 무엇이 있나 | KRDS style_01~09 공식 페이지 MD 변환본 (9페이지 + index) |
| 검증 연동 | `style-guide-lib.mjs` 임계값 → `krds-checklist-browser.mjs` browser 규칙 |

### `specs/` — 스펙 상세

| 언제 읽나 | 토큰·컴포넌트·패턴이 필요할 때 |
|----------|------------------------------|
| 우선순위 | `tokens.md` → `docs/style/` (상세) → `_categories.md` → 개별 `*.md` |
| HTML 참조 | MD에 발췌 포함, 원본은 `assets/` |

### `assets/krds/` — KRDS HTML 원본 (canonical)

| 용도 | 74개 컴포넌트 HTML, tokens, resources |
|------|----------------------------------------|
| 언제 | HTML/CSS 복사·검증 reference |

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
- [docs/checklist-maintenance.md](./checklist-maintenance.md) — 체크리스트·스크립트 갱신 순서
