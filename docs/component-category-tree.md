# KRDS Component Category Tree

[KRDS 공식 컴ponent 분류](https://www.krds.go.kr/html/site/index.html) 기준 10패밀리입니다.

## Full Tree

```text
KRDS Components (74)

Identity (아이덴티티) — 3개
├── 기관·서비스 식별, 공식 누리집 안내, 파비콘
├── favicon.md
├── identifier.md
└── masthead.md

Navigation (탐색) — 8개
├── 메뉴, breadcrumb, 페이지 내 탐색, 단계 표시
├── breadcrumb.md
├── in_page_navigation.md
├── main_menu_mobile.md
├── main_menu_pc.md
├── pagination.md
├── side_navigation.md
├── skip_link.md
└── step_indicator.md

Layout (레이아웃 및 표현) — 7개
├── 헤더·푸터, 목록, 캐러셀, 탭 등 페이지 구조
├── carousel.md
├── carousel_banner.md
├── footer.md
├── header.md
├── structured_list.md
├── structured_list_table.md
└── tab.md

Action (액션) — 7개
├── 버튼, 링크 등 사용자 행동 유도
├── button.md
├── button_hierarchy.md
├── button_icon.md
├── button_size.md
├── button_text.md
├── button_with_icon.md
└── link.md

Selection (선택) — 12개
├── 체크박스, 라디오, 셀렉트, 토글
├── checkbox.md
├── checkbox_chip.md
├── checkbox_size.md
├── radio_button.md
├── radio_chip.md
├── radio_size.md
├── select.md
├── select_size.md
├── select_sorting.md
├── select_state.md
├── toggle_switch.md
└── toggle_switch_size.md

Feedback (피드백) — 7개
├── 뱃지, 태그, 스피너, 긴급 알림
├── badge.md
├── badge_number.md
├── badge_size.md
├── critical_alerts.md
├── spinner.md
├── tag.md
└── tag_link.md

Help (도움) — 10개
├── 도움말, 툴팁, 아코디언, 공개/숨김
├── accordion.md
├── accordion_line.md
├── coach_mark.md
├── contextual_help.md
├── disclosure.md
├── help_panel.md
├── tooltip.md
├── tooltip_box.md
├── tooltip_vertical.md
└── tutorial_panel.md

Input (입력) — 9개
├── 텍스트, 날짜, 파일, 캘린더 입력
├── calendar.md
├── calendar_range.md
├── date_input.md
├── file_upload.md
├── text_input.md
├── text_input_icon.md
├── text_input_size.md
├── text_input_state.md
└── textarea.md

Settings (설정) — 3개
├── 언어 전환, 글자·화면 크기 조절
├── language_switcher.md
├── language_switcher_page.md
└── resize.md

Content (콘텐츠) — 8개
├── 표, 목록, 모달, TTS 등 콘텐츠 표현
├── modal.md
├── modal_sample.md
├── table.md
├── text_list.md
├── text_list_ordered.md
├── tts.md
├── tts_icon.md
└── tts_size.md

```

## Identity (아이덴티티)

**용도**: 기관·서비스 식별, 공식 누리집 안내, 파비콘

**포함 컴포넌트**:

- [favicon](../specs/components/favicon.md) — 브라우저 탭·북마크용 파비콘 설정 가이드입니다.
- [identifier](../specs/components/identifier.md) — 기관·서비스 식별자(로고·명칭)를 표시합니다. 헤더 상단에 배치합니다.
- [masthead](../specs/components/masthead.md) — 공식 전자정부 누리집 안내 배너입니다. 페이지 최상단에 위치합니다.

**컴포넌트 트리 (루트)**:

```text
├── favicon
├── identifier
├── masthead
```

## Navigation (탐색)

**용도**: 메뉴, breadcrumb, 페이지 내 탐색, 단계 표시

**포함 컴포넌트**:

- [breadcrumb](../specs/components/breadcrumb.md) — 현재 페이지 위치를 계층적으로 표시합니다. main#content 상단에 배치합니다.
- [in_page_navigation](../specs/components/in_page_navigation.md) — 긴 콘텐츠 페이지 내 섹션 앵커 탐색입니다.
- [main_menu_mobile](../specs/components/main_menu_mobile.md) — 모바일용 햄버거·드로어 메뉴입니다. main_menu_pc의 반응형 대응입니다.
- [main_menu_pc](../specs/components/main_menu_pc.md) — 데스크톱용 주요 메뉴입니다. header 내부 nav에 배치합니다. (variants: main_menu_mobile)
- [pagination](../specs/components/pagination.md) — 목록·검색 결과의 페이지 이동 컨트롤입니다.
- [side_navigation](../specs/components/side_navigation.md) — 좌측 사이드바 형태의 보조 탐색 메뉴입니다.
- [skip_link](../specs/components/skip_link.md) — 키보드 사용자가 본문으로 바로 이동하는 skip link입니다. 필수 a11y 요소입니다.
- [step_indicator](../specs/components/step_indicator.md) — 다단계 신청·입력 절차의 현재 단계를 표시합니다.

**컴포넌트 트리 (루트)**:

```text
├── breadcrumb
├── in_page_navigation
├── main_menu_pc
└── main_menu_mobile
...
```

## Layout (레이아웃 및 표현)

**용도**: 헤더·푸터, 목록, 캐러셀, 탭 등 페이지 구조

**포함 컴포넌트**:

- [carousel](../specs/components/carousel.md) — 여러 콘텐츠를 슬라이드로 순환 표시합니다. (variants: carousel_banner)
- [carousel_banner](../specs/components/carousel_banner.md) — 히어로 배너 형태의 캐러셀입니다. 메인 프로모션에 사용합니다.
- [footer](../specs/components/footer.md) — 페이지 하단 푸터 영역입니다. 링크, 저작권, 연락처를 포함합니다.
- [header](../specs/components/header.md) — 페이지 상단 헤더 영역입니다. identifier, 메뉴, 검색 등을 포함합니다.
- [structured_list](../specs/components/structured_list.md) — 정의 목록(dl) 형태의 구조화된 정보 목록입니다. (variants: structured_list_table)
- [structured_list_table](../specs/components/structured_list_table.md) — 표 형태의 구조화된 목록입니다. structured_list의 테이블 변형입니다.
- [tab](../specs/components/tab.md) — 동일 영역에서 콘텐츠를 탭으로 전환합니다.

**컴포넌트 트리 (루트)**:

```text
├── carousel
└── carousel_banner
├── footer
├── header
...
```

## Action (액션)

**용도**: 버튼, 링크 등 사용자 행동 유도

**포함 컴포넌트**:

- [button](../specs/components/button.md) — 기본 KRDS 버튼입니다. primary/secondary/tertiary 계층을 따릅니다. (variants: button_size, button_icon, button_text, button_with_icon)
- [button_hierarchy](../specs/components/button_hierarchy.md) — primary·secondary·tertiary 버튼 계층 가이드입니다. 한 화면에 1개 primary 권장. (variants: button, button_size, button_icon, button_text, button_with_icon)
- [button_icon](../specs/components/button_icon.md) — 아이콘만 있는 버튼입니다. sr-only 라벨 필수.
- [button_size](../specs/components/button_size.md) — 버튼 크기 변형(xsmall, small, medium, large)입니다.
- [button_text](../specs/components/button_text.md) — 텍스트 링크형 버튼(밑줄·텍스트 스타일)입니다.
- [button_with_icon](../specs/components/button_with_icon.md) — 아이콘과 텍스트가 함께 있는 버튼입니다.
- [link](../specs/components/link.md) — KRDS 스타일 하이퍼링크입니다. 본문·푸터·메뉴에서 사용합니다. (variants: tag_link)

**컴포넌트 트리 (루트)**:

```text
├── button_hierarchy
├── button
├── button_size
├── button_icon
├── button_text
└── button_with_icon
├── link
└── tag_link
```

## Selection (선택)

**용도**: 체크박스, 라디오, 셀렉트, 토글

**포함 컴포넌트**:

- [checkbox](../specs/components/checkbox.md) — 다중 선택 체크박스입니다. fieldset+legend 또는 label로 그룹화합니다. (variants: checkbox_chip, checkbox_size)
- [checkbox_chip](../specs/components/checkbox_chip.md) — 칩(chip) 형태의 체크박스입니다. 필터·태그 선택에 사용합니다.
- [checkbox_size](../specs/components/checkbox_size.md) — 체크박스 크기 변형입니다.
- [radio_button](../specs/components/radio_button.md) — 단일 선택 라디오 버튼입니다. (variants: radio_chip, radio_size)
- [radio_chip](../specs/components/radio_chip.md) — 칩 형태의 라디오 버튼입니다.
- [radio_size](../specs/components/radio_size.md) — 라디오 버튼 크기 변형입니다.
- [select](../specs/components/select.md) — 드롭다운 선택(select) 컴포넌트입니다. (variants: select_size, select_sorting, select_state)
- [select_size](../specs/components/select_size.md) — select 크기 변형입니다.
- [select_sorting](../specs/components/select_sorting.md) — 정렬 옵션용 select입니다. 목록·표 상단에 배치합니다.
- [select_state](../specs/components/select_state.md) — 상태(활성/비활성/오류)가 있는 select입니다.
- [toggle_switch](../specs/components/toggle_switch.md) — ON/OFF 토글 스위치입니다. (variants: toggle_switch_size)
- [toggle_switch_size](../specs/components/toggle_switch_size.md) — 토글 스위치 크기 변형입니다.

**컴포넌트 트리 (루트)**:

```text
├── checkbox
├── checkbox_chip
└── checkbox_size
├── radio_button
├── radio_chip
└── radio_size
├── select
├── select_size
├── select_sorting
└── select_state
...
```

## Feedback (피드백)

**용도**: 뱃지, 태그, 스피너, 긴급 알림

**포함 컴포넌트**:

- [badge](../specs/components/badge.md) — 상태·카테고리를 표시하는 뱃지입니다. (variants: badge_number, badge_size)
- [badge_number](../specs/components/badge_number.md) — 숫자(재고·카운트)를 표시하는 뱃지입니다.
- [badge_size](../specs/components/badge_size.md) — 뱃지 크기 변형입니다.
- [critical_alerts](../specs/components/critical_alerts.md) — 긴급·중요 공지를 강조하는 알림 배너입니다.
- [spinner](../specs/components/spinner.md) — 로딩 중임을 나타내는 스피너입니다.
- [tag](../specs/components/tag.md) — 키워드·카테고리 태그입니다. (variants: tag_link)
- [tag_link](../specs/components/tag_link.md) — 클릭 가능한 링크형 태그입니다.

**컴포넌트 트리 (루트)**:

```text
├── badge
├── badge_number
└── badge_size
├── critical_alerts
├── spinner
...
```

## Help (도움)

**용도**: 도움말, 툴팁, 아코디언, 공개/숨김

**포함 컴포넌트**:

- [accordion](../specs/components/accordion.md) — FAQ 등 다중 접기/펼치기 아코디언입니다. (variants: accordion_line)
- [accordion_line](../specs/components/accordion_line.md) — 구분선이 있는 아코디언 변형입니다.
- [coach_mark](../specs/components/coach_mark.md) — 신규 기능 안내용 코치마크(온보딩)입니다.
- [contextual_help](../specs/components/contextual_help.md) — 필드·섹션 옆 맥락 도움말입니다.
- [disclosure](../specs/components/disclosure.md) — 접기/펼치기(disclosure) 패턴입니다.
- [help_panel](../specs/components/help_panel.md) — 도움말 패널(사이드·모달 형태)입니다.
- [tooltip](../specs/components/tooltip.md) — 호버·포커스 시 표시되는 툴팁입니다. (variants: tooltip_box, tooltip_vertical)
- [tooltip_box](../specs/components/tooltip_box.md) — 박스 형태 툴팁입니다.
- [tooltip_vertical](../specs/components/tooltip_vertical.md) — 세로 배치 툴팁입니다.
- [tutorial_panel](../specs/components/tutorial_panel.md) — 단계별 튜토리얼 패널입니다.

**컴포넌트 트리 (루트)**:

```text
├── accordion
└── accordion_line
├── coach_mark
├── contextual_help
...
```

## Input (입력)

**용도**: 텍스트, 날짜, 파일, 캘린더 입력

**포함 컴포넌트**:

- [calendar](../specs/components/calendar.md) — 달력 UI 날짜 선택입니다. (variants: calendar_range)
- [calendar_range](../specs/components/calendar_range.md) — 기간(시작~종료) 선택 달력입니다.
- [date_input](../specs/components/date_input.md) — 날짜 선택 입력(type=date)입니다.
- [file_upload](../specs/components/file_upload.md) — 파일 첨부 업로드 컴포넌트입니다.
- [text_input](../specs/components/text_input.md) — 기본 텍스트 입력 필드입니다. label-for-id 바인딩 필수. (variants: text_input_icon, text_input_size, text_input_state)
- [text_input_icon](../specs/components/text_input_icon.md) — 아이콘이 있는 텍스트 입력입니다.
- [text_input_size](../specs/components/text_input_size.md) — 텍스트 입력 크기 변형입니다.
- [text_input_state](../specs/components/text_input_state.md) — 오류·성공·비활성 상태가 있는 텍스트 입력입니다.
- [textarea](../specs/components/textarea.md) — 여러 줄 텍스트 입력입니다.

**컴포넌트 트리 (루트)**:

```text
├── calendar
└── calendar_range
├── date_input
├── file_upload
...
```

## Settings (설정)

**용도**: 언어 전환, 글자·화면 크기 조절

**포함 컴포넌트**:

- [language_switcher](../specs/components/language_switcher.md) — 언어 전환(한/영) 컴포넌트입니다. (variants: language_switcher_page)
- [language_switcher_page](../specs/components/language_switcher_page.md) — 페이지 단위 언어 전환 UI입니다.
- [resize](../specs/components/resize.md) — 글자·화면 크기 조절(디지털 포용) 컴포넌트입니다.

**컴포넌트 트리 (루트)**:

```text
├── language_switcher
└── language_switcher_page
├── resize
```

## Content (콘텐츠)

**용도**: 표, 목록, 모달, TTS 등 콘텐츠 표현

**포함 컴포넌트**:

- [modal](../specs/components/modal.md) — 모달 다이얼로그입니다. focus trap·Escape 닫기 필요. (variants: modal_sample)
- [modal_sample](../specs/components/modal_sample.md) — 모달 샘플/템플릿 구현 예시입니다.
- [table](../specs/components/table.md) — 데이터 표(table)입니다. thead/tbody/caption 필수.
- [text_list](../specs/components/text_list.md) — 비순서 목록(ul) 스타일입니다. (variants: text_list_ordered)
- [text_list_ordered](../specs/components/text_list_ordered.md) — 순서 목록(ol) 스타일입니다.
- [tts](../specs/components/tts.md) — 텍스트 음성 변환(TTS) 재생 컨트롤입니다. (variants: tts_icon, tts_size)
- [tts_icon](../specs/components/tts_icon.md) — 아이콘형 TTS 버튼입니다.
- [tts_size](../specs/components/tts_size.md) — TTS 컨트롤 크기 변형입니다.

**컴포넌트 트리 (루트)**:

```text
├── modal
└── modal_sample
├── table
├── text_list
└── text_list_ordered
...
```

## Related

- [specs/components/_categories.md](../specs/components/_categories.md)
- [docs/reading-guide.md](./reading-guide.md)
- [docs/page-structure-tree.md](./page-structure-tree.md)
