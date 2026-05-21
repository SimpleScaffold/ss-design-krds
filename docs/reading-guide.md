# AI 읽기 가이드

AI 에이전트가 KRDS UI 작업 시 **어떤 MD를 어떤 순서로** 읽어야 하는지 정의합니다.

## 시나리오 1: 신규 UI (빈 페이지/앱)

```text
[신규 UI]
├── 1. skills/krds-plan/SKILL.md
│   └── 왜: 범위·상태·컴포넌트 매핑·검증 명령을 먼저 정의
├── 2. docs/page-structure-tree.md
│   └── 왜: KRDS 필수 DOM 골격(#krds-header, #content 등) 이해
├── 3. specs/tokens.md
│   └── 왜: hex/폰트를 임의로 만들지 않고 토큰 키 사용
├── 3b. docs/style/index.md (필요 시)
│   └── 왜: 색상·타이포·레이아웃 등 공식 스타일 규칙 상세 확인
├── 4. specs/components/_categories.md
│   └── 왜: 74개 중 필요한 컴포넌트를 패밀리별로 빠르게 찾기
├── 5. specs/components/<name>.md (필요한 것만)
│   └── 왜: HTML/Tailwind 예시, a11y, Related 컴포넌트
├── 6. docs/patterns/index.md (폼·PII·필터·동의 등 해당 시)
│   └── 왜: KRDS 기본 패턴 사용성·접근성 가이드
├── 7. specs/accessibility.md
│   └── 왜: skip-link, label, sr-only 등 a11y 게이트
├── 8. assets/krds/html/code/<name>.html
│   └── 왜: MD로 이해한 뒤 공식 HTML 복사·적용
└── 9. node scripts/krds-similarity.mjs --target <file>
    └── 왜: score ≥ 95 통과 확인
```

**예시 프롬프트**: "공공 서비스 신청 랜딩 페이지를 KRDS 규칙으로 설계해 주세요."

---

## 시나리오 2: 기존 UI → KRDS 전환

```text
[기존 UI 전환]
├── 1. skills/krds-transform/SKILL.md
│   └── 왜: 동작 보존 규칙, before/after 매핑 방법
├── 2. docs/component-category-tree.md
│   └── 왜: 기존 UI 패턴 → KRDS 컴포넌트 패밀리 매핑
├── 3. docs/page-structure-tree.md
│   └── 왜: 누락된 DOM 앵커(skip-link, landmarks) 파악
├── 4. specs/accessibility.md
│   └── 왜: 전환 후 a11y 게이트 재검증
├── 5. specs/components/<name>.md (매핑된 컴포넌트)
│   └── 왜: class/DOM 교체 참조
├── 6. 구현 (behavior preservation)
└── 7. node scripts/krds-similarity.mjs --target <file>
```

**예시 프롬프트**: "이 Bootstrap 페이지를 KRDS로 바꿔 주세요. form action은 유지하세요."

---

## 시나리오 3: 품질 개선 (1차 구현 후)

```text
[품질 개선]
├── 1. skills/krds-improve/SKILL.md
│   └── 왜: score 기반 반복 개선 워크플로
├── 2. node scripts/krds-similarity.mjs --target <file>
│   └── 왜: baseline score + failed rules 확인
├── 3. scripts/krds-ruleset.json (참조)
│   └── 왜: 어떤 규칙이 fail인지 이해
├── 4. specs/accessibility.md (failed a11y 규칙)
│   └── 왜: skip-link, label, sr-only 수정
├── 5. 수정 후 재측정
└── 6. node scripts/krds-improve-loop.mjs (자동 루프)
    └── 왜: score ≥ 95까지 반복
```

**예시 프롬프트**: "KRDS 규칙 검사 후 score 95 이상까지 개선해 주세요."

---

## 시나리오 4: 기본 패턴 (폼·PII·필터 등)

```text
[기본 패턴 UI]
├── 1. docs/patterns/index.md
│   └── 왜: 13개 기본 패턴 목록·읽기 순서
├── 2. docs/patterns/<주제>.md (해당 패턴만)
│   └── 왜: 사용성·접근성·상호작용 가이드 (공식 KRDS 본문)
├── 3. specs/validation/pattern.basic.md (체크리스트 연동 시)
│   └── 왜: 47항 기본 패턴 검증 ↔ spec 매핑
└── 4. specs/components/<name>.md
    └── 왜: text_input, file_upload, checkbox 등 컴포넌트 구현
```

**예시 프롬프트**: "개인 식별 정보 입력 폼을 KRDS PII 패턴에 맞게 설계해 주세요."

---

## 시나리오 5: 스타일·체크리스트 검증

```text
[스타일 검증]
├── 1. docs/style/index.md
│   └── 왜: 색상·타이포·형태·레이아웃 공식 규칙 한눈에 파악
├── 2. docs/style/<주제>.md (실패 항목에 맞게)
│   └── 왜: 매직넘버, 브레이크포인트, Pretendard GOV 등 준수 기준
├── 3. specs/validation/style.md
│   └── 왜: 21항 스타일 체크리스트 ↔ spec 매핑
└── 4. npm run krds:checklist -- --target <file>
    └── 왜: 브라우저 기반 스타일 항목 자동 점검
```

---

## 읽지 않아도 되는 경우

| 파일 | 언제 스킵 |
|------|-----------|
| `assets/krds/resources/` | CSS/JS 빌드 산출물 — MD+html/code로 충분 |
| `references/` (krds-react 등) | React/MUI 스택 참고 — HTML 작업 시 스킵 |
| `experiment/sample-page/` | 참조 구현이 필요할 때만 |
| `references/krds-react.md` | React 프로젝트가 아닐 때 |

---

## 읽기 깊이 (Depth)

| Depth | 대상 | 예상 토큰 |
|-------|------|-----------|
| **Shallow** | index + reading-guide + page-structure-tree | ~3K |
| **Medium** | + tokens + _categories + 필요 컴포넌트 5~10개 | ~8K |
| **Deep** | + 74개 전체 컴포넌트 + patterns | ~30K+ |

대부분의 작업은 **Medium** 깊이면 충분합니다. 74개 전체를 한 번에 읽을 필요는 없습니다.

---

## 관련 문서

- [docs/index.md](./index.md) — 마스터 내비게이션
- [docs/workflow-tree.md](./workflow-tree.md) — skill 실행 흐름
- [docs/repo-tree.md](./repo-tree.md) — 저장소 구조
