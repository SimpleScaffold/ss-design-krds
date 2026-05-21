---
name: krds-improve
description: KRDS 기반 UI의 규칙 준수·접근성·일관성을 점수 기반으로 반복 개선할 때 사용합니다. score ≥ 95, failed rules 0 및 공식 체크리스트 F 항목 해소까지 진행합니다.
---

# krds-improve

## Purpose

KRDS 기반 UI **1차 구현 후** 품질을 높일 때 사용합니다. 제품 동작은 변경하지 않고 markup·a11y·일관성을 개선합니다.

## Scope

- KRDS-like 컴포넌트를 사용하는 웹 페이지·앱 뷰
- markup semantics, a11y, naming consistency, spacing rhythm
- 공식 자체 검증 체크리스트 (311항, 2024.11 1단계)

## Workflow

1. **Baseline 측정**:
   ```bash
   node scripts/krds-similarity.mjs --target <page.html>
   npm run krds:checklist -- --target <page.html> --mode static+browser
   ```
2. **High-impact gap 수정** (`summary.failed` 규칙 ID 우선 — `scripts/checklist-rules/`·`krds-html-rules.mjs`):
   - missing landmarks, skip-link target
   - form label binding, autocomplete
   - icon button `sr-only`
   - official banner 문구, footer 개인정보처리방침
   - `meta description`, `nav aria-label`
   - table `thead`/`tbody` semantics
3. **체크리스트 F 항목 루프**:
   - `reports/checklist-result.json`에서 `status: "F"` 항목 id 확인
   - 해당 `specRef`·`procedure`·`automation.ruleId` 참조 후 수정
   - tier(gov/self/common)에 맞는 스타일 규칙 적용, 해당 없으면 N/A
4. **일관성 강화**:
   - button hierarchy (`krds-btn primary/secondary/tertiary`)
   - `krds-` class naming alignment
   - spacing rhythm (8px)
5. **재측정** — score delta 및 checklist pass rate 비교
6. **반복** — similarity threshold 및 checklist F=0 (자동화 범위) 충족까지

자동 루프:
```bash
node scripts/krds-improve-loop.mjs --target <page.html>
```

## Required Verification

- 모든 required KRDS rules pass
- a11y rule pass rate 100%
- similarity score ≥ 95
- checklist 자동화 항목 F = 0 (manual 항목은 procedure로 수동 확인)
- 관련 없는 파일 변경 없음

## Output Contract

- `Rule Report` — rule별 pass/fail 목록
- `Checklist Report` — P/F/E/N/A (`reports/checklist-result.json`)
- `Score Delta` — 개선 전후 점수
- `Final Evidence` — `final-score.json` + checklist-result.md

## Done Criteria

- score ≥ 95, failed similarity rules = 0
- checklist 자동 판정 F = 0
- rule-by-rule + checklist item report 제공
- unrelated file diff 없음

## References

- [docs/validation-checklist-tree.md](../../docs/validation-checklist-tree.md)
- [specs/validation-checklist.md](../../specs/validation-checklist.md)
- [scripts/checklist-rules/](../../scripts/checklist-rules/)
- [docs/checklist-maintenance.md](../../docs/checklist-maintenance.md)
