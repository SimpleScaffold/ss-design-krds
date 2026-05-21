# 체크리스트·검증 스크립트 유지보수

공식 311항 자체 검증 체크리스트와 검증 스크립트 갱신 순서입니다.

## npm 스크립트

| npm script | 스크립트 | 용도 |
|------------|----------|------|
| `krds:validate` | validate-krds.mjs | 저장소 무결성 + 샘플 검증 |
| `krds:score` | krds-similarity.mjs | score ≥ 95 (공통 static 규칙) |
| `krds:checklist` | krds-checklist.mjs | 311항 P/F/E/N/A |
| `krds:checklist:docs` | generate-checklist-docs.mjs | JSON → MD 7파일 |
| `krds:checklist:catalog` | build-checklist-catalog.mjs | JSON 카탈로그 재생성 |
| `krds:checklist:pdf-md` | pdf-to-checklist-md.mjs | PDF → 인간용 MD |
| `krds:checklist:pdf-md:validate` | validate-checklist-md.mjs | MD 품질·JSON 대조 |
| `krds:style:md` | krds-style-to-md.mjs | KRDS style 페이지 → `docs/style/` MD |
| `krds:style:md:validate` | validate-style-md.mjs | 스타일 MD 무결성 (9페이지) |

## 데이터 소스 (3갈래)

| 산출물 | 생성 | 용도 |
|--------|------|------|
| `resources/krds/checklist/official-checklist.json` | `build-checklist-catalog.mjs` | 자동 검증·트리 MD |
| `docs/디지털-정부-서비스-uiux-가이드라인-자체-검증-체크리스트.md` | `pdf-to-checklist-md.mjs` | PDF 본문 인간 가독 |
| `docs/validation-checklist-tree.md` 등 | `generate-checklist-docs.mjs` | 에이전트 내비게이션 |

## HTML 규칙 (단일 구현)

- 구현: [`scripts/krds-html-rules.mjs`](../scripts/krds-html-rules.mjs)
- 규칙 ID·체크리스트 매핑: [`scripts/checklist-rules/`](../scripts/checklist-rules/)
- similarity 가중치: [`scripts/krds-ruleset.json`](../scripts/krds-ruleset.json)

`krds:score` 실패 시 `summary.failed` 배열의 이름이 **규칙 ID**(`doctype`, `selector-krds-header` 등)입니다.

## 브라우저 스타일 규칙

- 구현: [`scripts/krds-checklist-browser.mjs`](../scripts/krds-checklist-browser.mjs)
- spec·임계값: [`docs/style/`](../docs/style/index.md) + [`scripts/style-guide-lib.mjs`](../scripts/style-guide-lib.mjs)
- 규칙 매핑: [`scripts/checklist-rules/style.json`](../scripts/checklist-rules/style.json)

스타일 21항의 `specRef`는 `docs/style/색상.md` · `타이포그래피.md` · `형태.md`를 가리킵니다.

## 스타일 MD 갱신 순서

1. KRDS style 페이지(style_01~09) 변경 시 → `npm run krds:style:md`
2. MD 품질 확인 → `npm run krds:style:md:validate`
3. 임계값·규칙 변경 시 → `style-guide-lib.mjs` + `checklist-rules/style.json` + `krds-checklist-browser.mjs`
4. 카탈로그·문서 반영 → `npm run krds:checklist:catalog` → `npm run krds:checklist:docs` → `npm run krds:validate`

## 갱신 순서 (체크리스트)

1. PDF 변경 시 → `npm run krds:checklist:pdf-md` → `npm run krds:checklist:pdf-md:validate`
2. 항목 구조 변경 시 → `scripts/build-checklist-catalog.mjs` 편집 → `npm run krds:checklist:catalog`
3. 새 static 규칙 시 → `checklist-rules/*.json` + `krds-html-rules.mjs` + (score용) `krds-ruleset.json`
4. 항상 → `npm run krds:checklist:docs` → `npm run krds:validate`
