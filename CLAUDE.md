# CLAUDE.md

Claude Code용 KRDS 프로젝트 진입점입니다.

> **KRDS UI 작업 전 [`docs/index.md`](docs/index.md)를 먼저 읽으세요.**

## 개요

ss-design-krds는 AI가 KRDS 규칙을 적용해 HTML/CSS·Tailwind UI를 만들 때 참조하는 **MD 중심 패키지**입니다.

**파이프라인**: `krds-plan → 구현 → krds-improve` (기존 UI: `krds-transform`)

## 읽기 순서

1. [docs/index.md](docs/index.md) — 마스터 내비게이션
2. [docs/reading-guide.md](docs/reading-guide.md) — 시나리오별 순서
3. [docs/page-structure-tree.md](docs/page-structure-tree.md) — DOM 골격
4. [specs/components/_categories.md](specs/components/_categories.md) — 컴포넌트 찾기
5. 필요한 [specs/components/*.md](specs/components/_index.md) — 상세 스펙

## Skill 선택

| 상황 | Skill |
|------|-------|
| 빈 페이지/앱 신규 | `skills/krds-plan/SKILL.md` |
| 기존 UI → KRDS 전환 | `skills/krds-transform/SKILL.md` |
| 1차 구현 후 품질 개선 | `skills/krds-improve/SKILL.md` |

## 검증 (완료 조건)

```bash
node scripts/krds-similarity.mjs --target <your-page.html>
# score ≥ 95, failed rules = 0
```

## 금지

- 토큰 없이 임의 hex/폰트 (`specs/tokens.md` 참조)
- skip-link, landmark, label-input 바인딩 생략

## 소비 프로젝트 연동

[templates/consumer-CLAUDE.md.snippet](templates/consumer-CLAUDE.md.snippet) 내용을 프로젝트 CLAUDE.md에 포함하세요.
