# AGENTS.md

일반 AI 에이전트가 이 저장소를 다룰 때의 진입점입니다.

> **KRDS UI 작업 전 [`docs/index.md`](docs/index.md)를 먼저 읽으세요.**  
> 시나리오별 읽기 순서: [`docs/reading-guide.md`](docs/reading-guide.md)

## 프로젝트 개요

ss-design-krds는 AI 에이전트(Claude, Cursor 등)가 [KRDS(Korea Design System)](https://www.krds.go.kr/html/site/index.html) 규칙을 읽고 HTML/CSS·Tailwind UI를 만들 때 참조하는 **MD 중심 지식베이스**입니다.

**핵심 파이프라인**: `krds-plan → 구현 → krds-improve` (기존 UI는 `krds-transform`으로 시작)

## MD 읽기 순서 (요약)

```text
1. docs/index.md              ← 시작
2. docs/reading-guide.md      ← 시나리오 선택
3. docs/page-structure-tree.md ← DOM 골격
4. specs/tokens.md            ← 토큰 요약 (hex 금지)
4b. docs/style/index.md       ← 스타일 상세 (색상·타이포·형태 등, 필요 시)
4c. docs/patterns/index.md   ← 기본 패턴 상세 (PII·폼·필터 등, 필요 시)
5. specs/components/_categories.md ← 컴포넌트 찾기
6. specs/components/<name>.md ← 상세
7. assets/krds/html/code/     ← HTML 복사
8. scripts/krds-similarity.mjs ← 유사도 검증
9. scripts/krds-checklist.mjs  ← 공식 311항 체크리스트
```

## 실행 시 반드시

- **신규 UI**: `skills/krds-plan/SKILL.md` + [docs/reading-guide.md](docs/reading-guide.md)
- **기존 UI 전환**: `skills/krds-transform/SKILL.md` + [docs/component-category-tree.md](docs/component-category-tree.md)
- **품질 개선**: `skills/krds-improve/SKILL.md` + [docs/workflow-tree.md](docs/workflow-tree.md)
- **토큰·컴포넌트**: `specs/` 우선, HTML 원본은 `assets/krds/html/code/` 참조
- **완료 후 검증**:
  - `node scripts/krds-similarity.mjs --target <파일>` — score ≥ 95 (`summary.failed` = [규칙 ID](scripts/checklist-rules/))
  - `npm run krds:checklist -- --target <파일>` — 공식 311항 P/F/E/N/A
  - 체크리스트 트리: [docs/validation-checklist-tree.md](docs/validation-checklist-tree.md)
  - 스크립트 유지보수: [docs/checklist-maintenance.md](docs/checklist-maintenance.md)

## 금지 사항

- `specs/tokens.md` 토큰 없이 임의 hex/폰트 사용
- skip-link, landmark, label-input 바인딩 생략
- KRDS 클래스 없이 generic Bootstrap/Material 스타일만 사용

## 자주 쓰는 명령

```bash
npm run krds:docs       # 카테고리 트리 MD 재생성
npm run krds:index      # 컴포넌트 MD 재생성
npm run krds:score      # 유사도 점수
npm run krds:checklist  # 공식 체크리스트 311항
npm run krds:style:md:validate  # 스타일 MD 무결성
npm run krds:pattern:md:validate  # 기본 패턴 MD 무결성
npm run krds:validate   # 전체 검증
```

## 주요 디렉터리

전체 트리와 설명: **[docs/repo-tree.md](docs/repo-tree.md)**

| 경로 | 용도 |
|------|------|
| `docs/` | AI 전용 MD 지식베이스 (시작점) |
| `docs/style/` | KRDS 공식 스타일 가이드 MD (색상·타이포·형태 등) |
| `docs/patterns/` | KRDS 기본 패턴 MD (global_01~13) |
| `specs/` | 토큰·컴포넌트·패턴 MD 스펙 |
| `skills/krds-*/` | plan / transform / improve |
| `assets/krds/html/code/` | 공식 HTML 74개 |
| `scripts/` | 검증·생성 |

## 소비 프로젝트에서 사용

```bash
git submodule add https://github.com/SimpleScaffold/ss-design-krds.git .krds
cp -R .krds/skills/krds-* ~/.cursor/skills/
```

자세한 설치: [README.ko.md](README.ko.md), [templates/install.sh](templates/install.sh)
