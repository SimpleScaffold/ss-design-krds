# KRDS 자체 검증 체크리스트

> 디지털 정부서비스 UI/UX 가이드라인 자체 검증 체크리스트 (2024.11) 1단계 요약

## 검증 준비

- **환경**: Chrome 최신, 해상도 1920×1080 (모바일 항목은 768px)
- **대상**: 1단계 범위 화면 (스타일·컴포넌트·기본·서비스 패턴)
- **tier**: `gov`(정부상징), `self`(자체상징), `common`(공통) — 해당 없으면 **N/A**

## 판정 (P / F / E / N/A)

| 코드 | 의미 |
|------|------|
| **P** | Pass — 준수 |
| **F** | Fail — 미준수 |
| **E** | Exception — 예외 승인 |
| **N/A** | Not Applicable — 해당 없음 |

## 수행 절차

1. [validation-checklist-tree.md](../docs/validation-checklist-tree.md)에서 tier·카테고리 필터
2. `npm run krds:checklist` 로 L1(static)+L2(browser) 자동 검증
3. L3(manual) 항목은 procedure 기준 수동 확인
4. 결과 JSON/Markdown 리포트에 P/F/E/N/A 기록

## CLI

```bash
npm run krds:checklist -- \
  --target experiment/sample-page/index.html \
  --tier gov,self,common \
  --category all \
  --mode static+browser \
  --output reports/checklist-result.json
```

## 데이터 소스

- 구조화 카탈로그: `resources/krds/checklist/official-checklist.json` (311항)
- 정성 평가(부록): `resources/krds/checklist/qualitative-items.json`
- 결과 템플릿: `resources/krds/checklist/checklist-result.template.json`
