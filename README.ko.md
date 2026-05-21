# ss-design-krds

AI 에이전트(Claude, Cursor 등)가 [KRDS(Korea Design System)](https://www.krds.go.kr/html/site/index.html) 규칙을 읽고 HTML/CSS·Tailwind 어디에든 적용할 수 있는 **MD 중심 스킬·스펙·검증 패키지**입니다.

[English](README.md)

## AI 에이전트 시작점

**[`docs/index.md`](docs/index.md)** — MD 지식베이스 허브. KRDS UI 작업 전 여기서 시작하세요.

```text
docs/
├── index.md                      ← ★ 시작
├── reading-guide.md              ← 시나리오별 읽기 순서
├── repo-tree.md                  ← 저장소 트리
├── page-structure-tree.md        ← 페이지 DOM 계층
├── workflow-tree.md              ← plan/transform/improve
├── validation-checklist-tree.md  ← 공식 311항 체크리스트
├── component-category-tree.md    ← KRDS 10패밀리 74컴포넌트
├── style/                        ← KRDS 공식 스타일 가이드 (9페이지 MD)
└── patterns/                     ← KRDS 기본 패턴 (13페이지 MD)
```

## 스타일 가이드

KRDS 공식 스타일 페이지(색상·타이포·형태 등)를 [`docs/style/`](docs/style/index.md) MD로 변환해 두었습니다.

| 무엇 | 어디 | 용도 |
|------|------|------|
| 스타일 지식 | `docs/style/` | AI가 색상·타이포·레이아웃 규칙을 먼저 읽음 |
| 토큰 요약 | `specs/tokens.md` | 빠른 참조; 상세는 `docs/style/` |
| 페이지 검증 | `npm run krds:checklist` | 311항 중 스타일 21항 → browser 규칙 |
| 공유 임계값 | `scripts/style-guide-lib.mjs` | gov 17px, 행간 1.5, radius 2–12px 등 |

흐름: `docs/style/` → `style-guide-lib.mjs` → 체크리스트 browser 규칙 · MD 검증

## 기본 패턴

KRDS 기본 패턴 페이지(PII·폼·필터·동의 등)는 [`docs/patterns/`](docs/patterns/index.md) MD로 변환해 두었습니다.

| 무엇 | 어디 | 용도 |
|------|------|------|
| 패턴 지식 | `docs/patterns/` | AI가 PII·입력폼·필터링 규칙을 먼저 읽음 |
| 체크리스트 매핑 | `specs/validation/pattern.basic.md` | 기본 패턴 47항 ↔ `docs/patterns/` |
| 공유 참조 | `scripts/pattern-guide-lib.mjs` | subcategory → MD 경로 |
| 갱신 | `npm run krds:pattern:md` | global_01~13 재수집 |

흐름: `docs/patterns/` → `pattern-guide-lib.mjs` → `official-checklist.json` specRef

## 무엇인가요?

ss-design-krds는 [KRDS HTML Component Kit](https://github.com/KRDS-uiux/krds-uiux)을 AI 에이전트 워크플로로 변환한 패키지입니다.

1. **`krds-plan`** — 처음부터 KRDS UI 설계
2. **`krds-transform`** — 기존 UI를 KRDS 규칙으로 전환
3. **`krds-improve`** — 규칙 검증 후 score ≥ 95까지 반복 개선

74개 HTML 컴포넌트, Markdown 스펙(HTML + Tailwind 예시), **`@simplescaffold/krds-tailwind`** npm 패키지, 기계 검증 스크립트를 포함합니다.

## 설치

### Git submodule (팀/장기 프로젝트)

```bash
git submodule add https://github.com/SimpleScaffold/ss-design-krds.git .krds
```

프로젝트 `CLAUDE.md`에 `templates/consumer-CLAUDE.md.snippet` 내용을 포함하세요.

### Cursor / Codex skills

```bash
cp -R ss-design-krds/skills/krds-* ~/.cursor/skills/
# 또는
npx skills add SimpleScaffold/ss-design-krds
```

### Tailwind 패키지

```bash
npm install @simplescaffold/krds-tailwind tailwindcss
# 또는 monorepo 내
npm run krds:build:tailwind
```

- CSS: `@import "@simplescaffold/krds-tailwind"`
- HTML 스니펫: `dist/components/*.html` (74개)
- 샘플: `experiment/sample-page/tailwind.html`

자세한 내용: [`packages/krds-tailwind/README.md`](packages/krds-tailwind/README.md)

### npm 검증 (CI)

```json
{
  "devDependencies": {
    "ss-design-krds": "github:SimpleScaffold/ss-design-krds"
  },
  "scripts": {
    "krds:score": "node node_modules/ss-design-krds/scripts/krds-similarity.mjs --target ./public/index.html"
  }
}
```

### 원클릭 설치

```bash
./templates/install.sh
```

## 사용법

```
# 신규 KRDS 페이지 설계
krds-plan 스킬을 사용해 공공 서비스 랜딩 페이지를 설계해 주세요.

# 기존 UI 전환
krds-transform으로 이 페이지를 KRDS 규칙에 맞게 바꿔 주세요. 동작은 유지하세요.

# 품질 개선
krds-improve로 score 95 이상, failed rules 0까지 개선해 주세요.
```

## 검증

```bash
npm install
npx playwright install chromium   # L2 browser 체크리스트 (WSL/CI)
npm run krds:score      # 유사도 점수 (기준: 95)
npm run krds:score:tailwind  # Tailwind 샘플 유사도
npm run krds:build:tailwind  # Tailwind CSS + 74 스니펫 빌드
npm run krds:checklist  # 공식 311항 자체 검증 체크리스트
npm run krds:style:md:validate  # 스타일 MD 무결성 (9페이지)
npm run krds:style:md   # KRDS 사이트 → docs/style/ 재생성 (유지보수)
npm run krds:coverage   # 컴포넌트 참조 커버리지 (index + tailwind)
npm run krds:validate   # 저장소 전체 검증
npm run krds:improve    # 반복 개선 루프
```

## 디렉터리 구조

```
docs/style/      KRDS 공식 스타일 가이드 MD (색상·타이포·형태 등)
specs/           Markdown 스펙 (토큰, 컴포넌트, 패턴, validation/)
resources/       체크리스트 JSON·manifest (official-checklist.json)
skills/          에이전트 워크플로 (plan, transform, improve)
assets/krds/     KRDS-uiux HTML/CSS 벤더 (74개 컴포넌트)
scripts/         검증 하네스 (style-guide-lib, checklist, similarity)
templates/       소비 프로젝트 부트스트랩
packages/        @simplescaffold/krds-tailwind
experiment/      참조 구현 (index.html + tailwind.html)
```

## 참고 자료

- [KRDS 공식](https://www.krds.go.kr/html/site/index.html)
- [KRDS-uiux](https://github.com/KRDS-uiux/krds-uiux) — HTML Component Kit (벤더됨)
- [krds-react](https://github.com/KRDS-community/krds-react) — React 라이브러리 참고
- [future-krds](https://github.com/bytonylee/future-krds) — 검증 하네스 참고
- [gracefullight/krds](https://github.com/gracefullight/krds) — 토큰 패키지 참고

## 라이선스

Apache-2.0. KRDS 자산은 [KRDS 저작권 정책](https://www.krds.go.kr/html/site/utility/copyright.html)을 따릅니다.
