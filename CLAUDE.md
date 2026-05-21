# CLAUDE.md

Claude Code용 KRDS 프로젝트 진입점입니다. KRDS UI 작업 전에 **해당 skill을 반드시 읽고** 워크플로와 규칙을 따르세요.

## 개요

ss-design-krds는 AI가 [KRDS](https://www.krds.go.kr/html/site/index.html) 규칙을 적용해 HTML/CSS·Tailwind UI를 만들 때 참조하는 패키지입니다.

**파이프라인**: `krds-plan → 구현 → krds-improve` (기존 UI: `krds-transform`)

## Skill 선택

| 상황 | Skill |
|------|-------|
| 빈 페이지/앱 신규 | `skills/krds-plan/SKILL.md` |
| 기존 UI → KRDS 전환 | `skills/krds-transform/SKILL.md` |
| 1차 구현 후 품질 개선 | `skills/krds-improve/SKILL.md` |

## 참조 우선순위

1. `specs/tokens.md` — 색상·타이포·간격 토큰
2. `specs/components/<name>.md` — 컴포넌트별 HTML/Tailwind 예시
3. `assets/krds/html/code/<name>.html` — 공식 HTML 원본
4. `DESIGN.md` — 전체 디자인 baseline

## 검증 (완료 조건)

```bash
node scripts/krds-similarity.mjs --target <your-page.html>
# score ≥ 95, failed rules = 0

node scripts/verify-krds-component-coverage.mjs --target <your-page.html>
# coveredComponents = totalReferenceComponents (전체 컴포넌트 페이지만)
```

## 금지

- 토큰 없이 임의 hex/폰트
- skip-link, landmark, label-input 바인딩 생략
- icon-only 버튼에 `sr-only` 없음

## 소비 프로젝트 연동

`templates/consumer-CLAUDE.md.snippet` 내용을 프로젝트 CLAUDE.md에 포함하세요.
