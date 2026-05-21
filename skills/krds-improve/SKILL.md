---
name: krds-improve
description: KRDS 기반 UI의 규칙 준수·접근성·일관성을 점수 기반으로 반복 개선할 때 사용합니다. score ≥ 95, failed rules 0까지 진행합니다.
---

# krds-improve

## Purpose

KRDS 기반 UI **1차 구현 후** 품질을 높일 때 사용합니다. 제품 동작은 변경하지 않고 markup·a11y·일관성을 개선합니다.

## Scope

- KRDS-like 컴포넌트를 사용하는 웹 페이지·앱 뷰
- markup semantics, a11y, naming consistency, spacing rhythm

## Workflow

1. **Baseline 측정**:
   ```bash
   node scripts/krds-similarity.mjs --target <page.html>
   ```
2. **High-impact gap 수정** (failed rules 우선):
   - missing landmarks, skip-link target
   - form label binding
   - icon button `sr-only`
   - `meta description`, `nav aria-label`
   - table `thead`/`tbody` semantics
3. **일관성 강화**:
   - button hierarchy (`krds-btn primary/secondary/tertiary`)
   - `krds-` class naming alignment
   - spacing rhythm (8px)
4. **재측정** — score delta 비교
5. **반복** — threshold 충족까지

자동 루프:
```bash
node scripts/krds-improve-loop.mjs --target <page.html>
```

## Required Verification

- 모든 required KRDS rules pass
- a11y rule pass rate 100%
- similarity score ≥ 95
- 관련 없는 파일 변경 없음

## Output Contract

- `Rule Report` — rule별 pass/fail 목록
- `Score Delta` — 개선 전후 점수
- `Final Evidence` — `final-score.json` 내용

## Done Criteria

- score ≥ 95, failed rules = 0
- rule-by-rule report 제공
- unrelated file diff 없음
