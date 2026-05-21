# KRDS 페이지 DOM 구조 트리

KRDS 정부 디지털 서비스 페이지의 **필수 DOM 계층**입니다. AI는 UI 구현 시 이 트리를 따릅니다.

## 전체 페이지 트리

```text
html[lang="ko"]
└── head
│   ├── meta charset
│   ├── meta viewport
│   ├── meta description          ← 필수 (SEO + a11y)
│   └── title
└── body
    └── #wrap.g-wrap              ← 최대 너비 컨테이너 (1180px)
        ├── #krds-skip-link       ← [필수] 본문 바로가기
        │   └── a[href="#content"]
        ├── #krds-masthead        ← [필수] 공식 누리집 안내
        │   └── .inner
        │       ├── .nuri-txt
        │       └── toggle-btn
        ├── #krds-header          ← [필수] header landmark
        │   ├── identifier        ← 기관·서비스 식별
        │   ├── h1                ← 페이지 제목
        │   ├── nav[aria-label]   ← main_menu_pc
        │   └── mobile-menu       ← main_menu_mobile
        ├── #container            ← [필수] 본문 래퍼
        │   └── main#content      ← [필수] main landmark
        │       ├── nav.breadcrumb ← 현재 위치
        │       ├── section#hero   ← carousel_banner, button_hierarchy
        │       ├── aside.alert    ← critical_alerts
        │       ├── section        ← 콘텐츠 블록
        │       │   ├── table      ← krds-table
        │       │   ├── form       ← krds-form
        │       │   └── ...
        │       └── section.accordion ← FAQ
        └── #krds-footer          ← [필수] footer landmark
            ├── strong            ← 서비스명
            └── .footer-links     ← link
```

## 필수 vs 선택

| 노드 | 필수 | 역할 | 관련 컴포넌트 MD |
|------|------|------|------------------|
| `#krds-skip-link` | **필수** | 키보드 skip navigation | [skip_link.md](../specs/components/skip_link.md) |
| `#krds-masthead` | **필수** | 공식 누리집 배너 | [masthead.md](../specs/components/masthead.md) |
| `#krds-header` | **필수** | header landmark | [header.md](../specs/components/header.md) |
| `#container` | **필수** | 본문 영역 래퍼 | — |
| `main#content` | **필수** | main landmark, skip target | — |
| `#krds-footer` | **필수** | footer landmark | [footer.md](../specs/components/footer.md) |
| breadcrumb | 권장 | 현재 위치 표시 | [breadcrumb.md](../specs/components/breadcrumb.md) |
| section#hero | 선택 | 메인 프로모션 | [carousel_banner.md](../specs/components/carousel_banner.md) |
| form.krds-form | 선택 | 입력·신청 | [text_input.md](../specs/components/text_input.md) |

## Landmark 트리

```text
Landmarks (필수 4개)
├── header    → #krds-header
├── nav       → nav[aria-label="주요 메뉴"], nav.breadcrumb
├── main      → main#content
└── footer    → #krds-footer
```

검증: `scripts/krds-similarity.mjs`가 `landmark-header`, `landmark-nav`, `landmark-main`, `landmark-footer` 규칙으로 확인합니다.

## Skip Link 연결

```text
#krds-skip-link
    └── a[href="#content"]
            ↓
        main#content  ← id="content" 필수
```

**실패 조건**: skip-link는 있는데 `#content`가 없거나, `href`가 다른 앵커를 가리킴.

## Form 영역 트리

```text
section.form-section
└── form.krds-form
    ├── .field
    │   ├── label[for="id"]
    │   └── input#id.krds-input
    ├── fieldset.choice-group    ← checkbox, radio_button
    │   ├── legend
    │   └── label > input
    ├── label.toggle             ← toggle_switch
    └── button.krds-btn.primary
```

**a11y**: 모든 input에 label-for-id 바인딩. icon-only button에 sr-only.

## 참조 구현

- [experiment/sample-page/index.html](../experiment/sample-page/index.html) — 전체 DOM 골격 예시
- [scripts/krds-ruleset.json](../scripts/krds-ruleset.json) — requiredSelectors 목록

## 관련 문서

- [docs/index.md](./index.md)
- [specs/accessibility.md](../specs/accessibility.md)
- [specs/patterns/application.md](../specs/patterns/application.md)
