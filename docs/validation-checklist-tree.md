# KRDS 자체 검증 체크리스트 트리

> 디지털 정부서비스 UI/UX 가이드라인 자체 검증 체크리스트 (2024.11) 1단계
> 총 **311** 항목 · 자동화: static 116 / browser 89 / manual 106

## 카테고리 요약

| 카테고리 | 항목 수 |
|----------|---------|
| style | 21 |
| component | 170 |
| pattern.basic | 47 |
| pattern.service | 73 |

## 트리

### 스타일 (21)

#### color
- `style.color.1` [정부상징] (L2-browser) · `style-color-palette` — 디지털 정부 디자인 시스템의 Primary, Secondary, Gray, System 색상 팔레트와 색상값을 사용하고 있다.
- `style.color.2` [정부상징] (L2-browser) · `style-color-palette` — 디지털 정부 디자인 시스템의 각 컴포넌트에 정의된 상호작용 상태 표현 색상과 방식을 적용하고 있다.
- `style.color.3` [정부상징] (L2-browser) · `style-color-palette` — 디지털 정부 디자인 시스템에 정의된 배경 색상을 사용하고 있다.
- `style.color.1` [자체상징] (L2-browser) · `style-interaction-color` — 상호작용 상태를 표현할 때, 기본 상태 색상을 기준으로 한 증·감 규칙을 적용하고 있다.
- `style.color.2` [자체상징] (L2-browser) · `style-interaction-color` — 시스템 상태를 표현할 때, 시스템 색상의 색상 범주와 의미 체계를 따르고 있다.
- `style.color.1` [공통] (L2-browser) · `style-color-consistency` — 배경 색상을 일관성 있게 표현하고 있다.
- `style.color.2` [공통] (L2-browser) · `style-color-consistency` — 액션, 선택, 입력 컴포넌트의 테두리를 일관성 있게 표현하고 있다.
- `style.color.3` [공통] (L2-browser) · `style-color-consistency` — 텍스트 색상을 일관성 있게 표현하고 있다.

#### shape
- `style.shape.1` [정부상징] (L2-browser) · `style-radius-gov` — 디지털 정부 디자인 시스템에 정의된 형태 규칙 및 규격을 사용하고 있다.
- `style.shape.1` [자체상징] (L2-browser) · `style-radius-scale` — 컨테이너 크기가 커질수록 둥글기 값이 커지도록 표현하고 있다.
- `style.shape.1` [공통] (L2-browser) · `style-radius-clip` — 컨테이너의 둥글기 사용에도 내부 콘텐츠가 가려지거나 잘림 없이 표시되고 있다.

#### typography
- `style.typography.1` [정부상징] (L2-browser) · `style-font-gov` — Pretendard GOV 서체를 사용하고 있다.
- `style.typography.2` [정부상징] (L2-browser) · `style-font-gov` — 본문의 기본 텍스트 크기를 17px 이상으로 표현하고 있다.
- `style.typography.3` [정부상징] (L2-browser) · `style-font-gov` — 디지털 정부 디자인 시스템에 정의된 서체 사용 규격을 적용하고 있다.
- `style.typography.4` [정부상징] (L2-browser) · `style-font-gov` — 각 서체 굵기에 맞는 폰트 파일을 사용하고 있다.
- `style.typography.1` [자체상징] (L2-browser) · `style-font-self` — 본문의 기본 텍스트 크기를 16px 이상으로 표현하고 있다.
- `style.typography.2` [자체상징] (L2-browser) · `style-font-self` — 고딕 계열 서체를 사용하고 있다.
- `style.typography.3` [자체상징] (L2-browser) · `style-font-self` — 서체의 굵기를 2가지로 구분하여 표현하고 있다.
- `style.typography.1` [공통] (L2-browser) · `style-font-common` — Title과 Heading 텍스트를 본문보다 굵거나 크게 표현하고 있다.
- `style.typography.2` [공통] (L2-browser) · `style-font-common` — 서체 사용 규칙을 일관되게 적용하고 있다.
- `style.typography.3` [공통] (L2-browser) · `style-font-common` — 여러 줄로 구성된 텍스트의 행간을 텍스트 크기의 1.5배 이상으로 표현하고 있다.

### 컴포넌트 (170)

#### breadcrumb
- `component.breadcrumb.1` [공통] (L3-manual) — 탐색 계층 구조가 1수준인 사이트에 브레드크럼을 사용하지 않고 있다.
- `component.breadcrumb.2` [공통] (L1-static) · `breadcrumb-not-on-home` — 브레드크럼을 메인 또는 랜딩 페이지에서 사용하지 않고 있다.
- `component.breadcrumb.3` [공통] (L3-manual) — 브레드크럼을 진행 상황 표시를 위해 사용하지 않고 있다.
- `component.breadcrumb.4` [공통] (L1-static) · `breadcrumb-separator` — 브레드크럼에 구분자를 제공하고 있다.
- `component.breadcrumb.5` [공통] (L1-static) · `breadcrumb-home-first` — 브레드크럼의 가장 첫 번째 항목으로 메인 화면 링크를 제공하고 있다.
- `component.breadcrumb.6` [공통] (L1-static) — 브레드크럼의 가장 마지막 항목으로 현재 화면의 상위 화면 링크를 제공하고 있다.
- `component.breadcrumb.7` [공통] (L1-static) — 브레드크럼과 본문 제목 사이에 다른 요소를 제공하지 않고 있다.
- `component.breadcrumb.8` [공통] (L1-static) — 브레드크럼에 현재 화면의 전체 정보 계층 구조를 표시하고 있다.
- `component.breadcrumb.9` [공통] (L2-browser) — 브레드크럼 텍스트 경로가 링크임을 인지할 수 있는 시각적 단서를 제공하고 있다.
- `component.breadcrumb.10` [공통] (L1-static) — 브레드크럼에 경로를 4개 이하로 표시하고 있다.
- `component.breadcrumb.11` [공통] (L2-browser) — 브레드크럼을 단일 행으로 제공하고 있다.
- `component.breadcrumb.12` [공통] (L1-static) — 브레드크럼을 본문 그리드 왼쪽 끝에 정렬하고 있다.
- `component.breadcrumb.13` [공통] (L2-browser) — 브레드크럼 링크 간 간격을 충분히 제공하고 있다.
- `component.breadcrumb.14` [공통] (L1-static) — 브레드크럼이 메인 메뉴를 대체하지 않고 있다.
- `component.breadcrumb.15` [공통] (L2-browser) · `breadcrumb-mobile-collapse` — 작은 화면 너비에서 브레드크럼의 첫 번째 경로와 마지막 경로만 표시하고 있다.
- `component.breadcrumb.16` [공통] (L2-browser) — 브레드크럼 링크 탐색에 대한 상호작용을 적절하게 구현하고 있다.
- `component.breadcrumb.17` [공통] (L2-browser) — 브레드크럼 링크 관련 화면으로 이동에 대한 상호작용을 적절하게 구현하고 있다.

#### button
- `component.button.1` [공통] (L2-browser) — 그룹으로 제공될 때 모든 버튼의 크기를 동일하게 제공하고 있다.
- `component.button.2` [공통] (L1-static) · `button-single-primary` — 한 화면에 최상위 수준의 강조 버튼은 한 번만 사용하고 있다.
- `component.button.3` [공통] (L1-static) — 버튼 그룹을 수직으로 배열할 때 최상위 수준의 강조 버튼을 첫 번째로 배치하고 있다.
- `component.button.4` [공통] (L1-static) — 버튼의 텍스트 레이블이 동사형으로 제공되고 있다.
- `component.button.5` [공통] (L3-manual) — 버튼 실행 시 사용자의 두 번째 인터랙션이 무시되도록 구현하고 있다.
- `component.button.6` [공통] (L2-browser) — 버튼 탐색에 대한 상호작용을 적절하게 구현하고 있다.
- `component.button.7` [공통] (L2-browser) — 버튼 실행에 대한 상호작용을 적절하게 구현하고 있다.

#### checkbox
- `component.checkbox.1` [공통] (L3-manual) — 한 개의 옵션을 선택하는 데 체크박스를 사용하지 않고 있다.
- `component.checkbox.2` [공통] (L3-manual) — 체크박스 옵션을 가나다순으로 정렬하고 있다.
- `component.checkbox.3` [공통] (L1-static) — 체크박스 옵션을 수직으로 배치하고 있다.
- `component.checkbox.4` [공통] (L1-static) — 체크박스 레이블을 양식의 오른쪽에 배치하고 있다.
- `component.checkbox.5` [공통] (L2-browser) — 체크박스에서 전체 선택 옵션이 제공되는 경우 중간 상태를 명확하게 표현하고 있다.
- `component.checkbox.6` [공통] (L2-browser) — 체크박스 탐색에 대한 상호작용을 적절하게 구현하고 있다.
- `component.checkbox.7` [공통] (L2-browser) — 체크박스 옵션 선택 및 선택 해제에 대한 상호작용을 적절하게 구현하고 있다.

#### date-input
- `component.date-input.1` [공통] (L3-manual) — 날짜 입력 필드를 상대적인 날짜 입력에 사용하지 않고 있다.
- `component.date-input.2` [공통] (L1-static) · `form-label-binding` — 날짜 입력 필드에 레이블을 제공하고 어떤 날짜를 입력해야 하는지 명확하게 설명하고 있다.
- `component.date-input.3` [공통] (L1-static) — 다중 날짜 입력 필드에 '년', '월', '일' 레이블을 제공하고 있다.
- `component.date-input.4` [공통] (L1-static) — 날짜 입력 필드에 도움말 텍스트로 날짜 입력 형식을 안내하고 있다.
- `component.date-input.5` [공통] (L3-manual) — 문서에 표시된 날짜를 정확하게 요청할 때 원본 형식과 동일한 구성의 날짜 입력 필드를 사용하고 있다.
- `component.date-input.6` [공통] (L3-manual) — 날짜 입력 필드에 사용자가 대략적인 날짜를 입력할 수 있도록 제공하고 있다.
- `component.date-input.7` [공통] (L1-static) · `autocomplete-present` — 날짜 입력 필드에 사용자가 자주, 반복적으로 입력하는 날짜는 자동 완성되도록 구현하고 있다.
- `component.date-input.8` [공통] (L2-browser) — 날짜 입력 필드의 데이터 입력에 대한 상호작용을 적절하게 구현하고 있다.

#### file-upload
- `component.file-upload.1` [공통] (L3-manual) — 모달 레이아웃에서 다중 파일 업로드를 사용하지 않고 있다.
- `component.file-upload.2` [공통] (L1-static) — 파일 업로드에 파일 항목, 삭제 버튼을 제공하고 있다.
- `component.file-upload.3` [공통] (L1-static) — 파일 업로드에 레이블을 제공하고 있다.
- `component.file-upload.4` [공통] (L1-static) — 파일 업로드에서 파일 유형, 파일 크기, 파일 개수 제한에 대해 안내하고 있다.
- `component.file-upload.5` [공통] (L3-manual) — 파일 업로드에서 파일이 업로드된 후에도 파일 선택 버튼을 기본 상태로 유지하고 있다.
- `component.file-upload.6` [공통] (L2-browser) — 파일 업로드의 파일 선택 버튼을 적절한 강조 수준으로 표현하고 있다.
- `component.file-upload.7` [공통] (L3-manual) — 파일 업로드에서 파일을 자동으로 제출하지 않고 있다.
- `component.file-upload.8` [공통] (L3-manual) — 파일 업로드에서 오류 상태에 대한 구체적인 오류 메시지를 제공하고 있다.
- `component.file-upload.9` [공통] (L1-static) — 파일 업로드에서 업로드된 파일 이름을 한 줄 텍스트로 제공하고 있다.
- `component.file-upload.10` [공통] (L2-browser) — 파일 업로드의 탐색에 대한 상호작용을 적절하게 구현하고 있다.
- `component.file-upload.11` [공통] (L2-browser) — 파일 업로드에 대한 상호작용을 적절하게 구현하고 있다.
- `component.file-upload.12` [공통] (L2-browser) — 파일 업로드의 파일 삭제에 대한 상호작용을 적절하게 구현하고 있다.

#### footer
- `component.footer.1` [공통] (L1-static) · `footer-required-info` — 푸터에 서비스 로고, 연락처, 저작권 정보를 제공하고 있다.
- `component.footer.2` [공통] (L2-browser) · `footer-position` — 푸터를 모든 화면에서 일관된 위치에 제공하고 있다.
- `component.footer.3` [공통] (L1-static) · `footer-order` — 푸터 섹션의 정보를 일관된 순서로 제공하고 있다.
- `component.footer.4` [공통] (L1-static) · `footer-privacy-link` — 푸터에 개인 정보 처리 방침을 표시하고 있다.
- `component.footer.5` [공통] (L1-static) · `footer-terms-link` — 전자상거래가 포함된 경우 푸터에 이용약관을 표시하고 있다.
- `component.footer.6` [공통] (L3-manual) — 푸터에 사용자들이 빈번하게 찾는 링크를 배치하고 있다.
- `component.footer.7` [공통] (L3-manual) — 푸터의 서비스 내비게이션이 기본 내비게이션과 동일하게 제공되고 있다.
- `component.footer.8` [공통] (L3-manual) — 푸터에 최신 연락처 정보를 정확하게 제공하고 있다.
- `component.footer.9` [공통] (L3-manual) — 푸터의 각종 링크는 링크 레이블에 명시된 정확한 페이지로 연결되고 있다.
- `component.footer.10` [공통] (L2-browser) · `footer-responsive-order` — 화면 크기에 상관없이 푸터의 정보 요소는 상대적으로 동일한 순서로 제공되도록 표현하고 있다.
- `component.footer.11` [정부상징] (L2-browser) · `footer-style-gov` — 푸터의 스타일 수정을 최소화하고 있다.

#### header
- `component.header.1` [정부상징] (L2-browser) · `header-style-gov` — 헤더의 스타일 수정을 최소화하고 있다.
- `component.header.2` [공통] (L1-static) · `header-logo-position` — 서비스 로고를 헤더의 왼쪽 상단에 제공하고 있다.
- `component.header.3` [공통] (L1-static) · `header-order` — 헤더의 내부 컴포넌트를 일관된 순서로 제공하고 있다.
- `component.header.4` [공통] (L1-static) · `header-utility-position` — 유틸리티 링크 그룹은 헤더 우측 상단에 제공하고 있다.
- `component.header.5` [공통] (L1-static) · `header-utility-divider` — 헤더에서 유틸리티 링크 그룹을 디바이더로 구분하고 있다.
- `component.header.6` [공통] (L1-static) · `header-utility-count` — 헤더에 4개 이하의 유틸리티 링크를 사용하고 있다.
- `component.header.7` [공통] (L1-static) · `header-lang-no-flag` — 언어 설정을 위한 드롭다운 메뉴에 국기를 사용하지 않는다.
- `component.header.8` [공통] (L1-static) · `header-icon-label` — 헤더의 아이콘 버튼/링크에 텍스트 레이블을 제공하고 있다.
- `component.header.9` [공통] (L2-browser) · `header-sticky` — 화면을 위로 스크롤 했을 때 헤더를 뷰포트 상단에 고정하고 있다.

#### identifier
- `component.identifier.1` [공통] (L3-manual) — 운영기관 식별자의 로고 영역에 상위 기관의 로고를 제공하고 있다.
- `component.identifier.2` [공통] (L3-manual) — 관련 기관이 2개 이상 존재하는 경우 운영기관 식별자에 기관의 계층 수준에 따라 로고를 순서대로 배치하고 있다.
- `component.identifier.3` [공통] (L1-static) · `identifier-layout` — 운영기관 식별자에 안내 텍스트와 요소의 배치를 일관되게 제공하고 있다.

#### in-page-nav
- `component.in-page-nav.1` [공통] (L3-manual) — 콘텐츠 내 탐색을 계층 구조가 없는 콘텐츠에 사용하지 않고 있다.
- `component.in-page-nav.2` [공통] (L1-static) — 콘텐츠 내 탐색에 제목, 활성화 상태 인디케이터를 제공하고 있다.
- `component.in-page-nav.3` [공통] (L2-browser) — 콘텐츠 내 탐색을 적절한 너비로 표현하고 있다.
- `component.in-page-nav.4` [공통] (L1-static) — 콘텐츠 내 탐색을 본문 우측에 표시하고 있다.
- `component.in-page-nav.5` [공통] (L3-manual) — 콘텐츠 내 탐색 텍스트는 연결된 섹션 제목과 일치하고 있다.
- `component.in-page-nav.6` [공통] (L1-static) — 콘텐츠 내 탐색을 3수준 이하로 제공하고 있다.
- `component.in-page-nav.7` [공통] (L2-browser) — 작은 화면 너비에서 콘텐츠 내 탐색을 제목과 본문 사이에 배치하고 있다.
- `component.in-page-nav.8` [공통] (L2-browser) — 콘텐츠 내 탐색의 목록 탐색에 대한 상호작용을 적절하게 구현하고 있다.
- `component.in-page-nav.9` [공통] (L2-browser) — 콘텐츠 내 탐색 링크의 콘텐츠 섹션 이동에 대한 상호작용을 적절하게 구현하고 있다.

#### link
- `component.link.1` [공통] (L2-browser) — 인라인 링크를 주변 텍스트와 동일한 크기로 제공하고 있다.
- `component.link.2` [공통] (L2-browser) · `link-not-color-only` — 링크를 색상만으로 구분하지 않고 있다.
- `component.link.3` [공통] (L3-manual) — 링크 레이블은 연결된 목적지 정보를 정확하게 반영하고 있다.
- `component.link.4` [공통] (L1-static) · `mailto-link` — 이메일 주소를 링크로 제공하고 있다.
- `component.link.5` [공통] (L1-static) · `tel-link` — 전화번호 정보를 링크로 제공하고 있다.
- `component.link.6` [공통] (L1-static) · `external-link-indicator` — 외부 서비스로 이동하는 링크를 분명하게 구분하고 있다.
- `component.link.7` [공통] (L1-static) — 외부 서비스로 이동하는 링크를 일관된 방식으로 표현하고 있다.
- `component.link.8` [공통] (L3-manual) — 링크가 레이블에 명시된 정확한 목적지로 연결되고 있다.
- `component.link.9` [공통] (L2-browser) — 링크 탐색에 대한 상호작용을 적절하게 구현하고 있다.
- `component.link.10` [공통] (L2-browser) — 링크 실행에 대한 상호작용을 적절하게 구현하고 있다.

#### main-menu
- `component.main-menu.1` [공통] (L2-browser) — 메인 메뉴 드롭다운 영역 내에서 레이블은 좌측으로 정렬하고 있다.
- `component.main-menu.2` [공통] (L2-browser) — 메인 메뉴 드롭다운 영역의 최대 높이가 뷰포트를 초과하지 않고 있다.
- `component.main-menu.3` [공통] (L2-browser) — 메인 메뉴의 링크 목록 수가 많아 드롭다운 메뉴 영역을 넘어가는 경우 드롭다운 영역 스크롤을 제공하고 있다.
- `component.main-menu.4` [공통] (L2-browser) — 메인 메뉴 링크의 활성화 상태, 선택 상태가 명확히 구분되도록 표현하고 있다.
- `component.main-menu.5` [공통] (L1-static) — 메인 메뉴 드롭다운 영역에 제목을 제공하고 있다.
- `component.main-menu.6` [공통] (L3-manual) — 메인 메뉴를 3수준 이하로 제공하고 있다.
- `component.main-menu.7` [공통] (L3-manual) — 메인 메뉴 링크명에 이해하기 쉬운 용어를 사용하고 있다.
- `component.main-menu.8` [공통] (L2-browser) — 마우스오버를 사용하여 드롭다운 목록을 확장하지 않는다.
- `component.main-menu.9` [공통] (L2-browser) · `main-menu-visible-desktop` — 메인 메뉴의 1수준 메뉴 전체를 확인할 수 있도록 표현하고 있다.
- `component.main-menu.10` [공통] (L2-browser) — 메인 메뉴 영역 확장 및 축소에 대한 상호작용을 적절하게 구현하고 있다.
- `component.main-menu.11` [공통] (L2-browser) — 메인 메뉴 링크 목록 탐색에 대한 키보드 상호작용을 적절하게 구현하고 있다.

#### official-banner
- `component.official-banner.1` [공통] (L1-static) · `official-banner-present` — 웹사이트에 공식 배너를 제공하고 있다.
- `component.official-banner.2` [공통] (L1-static) · `official-banner-topmost` — 공식 배너를 모든 화면의 최상단에 제공하고 있다.
- `component.official-banner.3` [공통] (L2-browser) · `official-banner-style` — 공식 배너의 스타일을 변형하지 않고 있다.
- `component.official-banner.4` [공통] (L1-static) · `official-banner-text` — 공식 배너의 텍스트를 변형하지 않고 있다.

#### pagination
- `component.pagination.1` [공통] (L3-manual) — 페이지네이션을 무한 스크롤 기능과 함께 사용하지 않고 있다.
- `component.pagination.2` [공통] (L1-static) — 페이지네이션에 첫/마지막 화면, 이전/다음 화면으로 이동할 수 있는 수단을 제공하고 있다.
- `component.pagination.3` [공통] (L1-static) — 페이지네이션에 전체 화면 수를 표시하고 있다.
- `component.pagination.4` [공통] (L2-browser) — 페이지네이션 번호 링크에 현재 화면 숫자를 강조하여 표현하고 있다.
- `component.pagination.5` [공통] (L1-static) — 페이지네이션을 콘텐츠 목록 하단에 중앙 정렬하여 제공하고 있다.
- `component.pagination.6` [공통] (L1-static) — 페이지네이션을 한 화면에 하나만 사용하고 있다.
- `component.pagination.7` [공통] (L1-static) — 숫자 링크 목록 유형의 페이지네이션에 말줄임표를 포함하여 10개 이내의 항목을 표시하고 있다.
- `component.pagination.8` [공통] (L2-browser) — 작은 화면 너비에서 숫자 링크 목록 유형의 페이지네이션에 이전/다음 버튼, 숫자 링크 목록을 수직으로 배치하고 있다.
- `component.pagination.9` [공통] (L2-browser) — 작은 화면 너비에서 숫자 링크 목록 유형의 페이지네이션에 말줄임표를 포함하여 최대 7개 링크를 표시하고 있다.
- `component.pagination.10` [공통] (L2-browser) — 페이지네이션을 사용할 때, 화면 크기에 상관없이 전체 화면 수를 일정하게 유지하고 있다.
- `component.pagination.11` [공통] (L2-browser) — 숫자 링크 목록 유형의 페이지네이션에 대한 상호작용을 적절하게 구현하고 있다.
- `component.pagination.12` [공통] (L2-browser) — 화면 직접 이동 유형의 페이지네이션에 대한 상호작용을 적절하게 구현하고 있다.
- `component.pagination.13` [공통] (L2-browser) — 목록 확장 유형의 페이지네이션에 대한 상호작용을 적절하게 구현하고 있다.

#### radio
- `component.radio.1` [공통] (L3-manual) — 여러 개의 옵션을 선택하는 데 라디오 버튼을 사용하지 않고 있다.
- `component.radio.2` [공통] (L1-static) — 옵션의 개수가 많은 경우에 라디오 버튼을 사용하지 않고 있다.
- `component.radio.3` [공통] (L3-manual) — 라디오 버튼 옵션을 가나다순으로 정렬하고 있다.
- `component.radio.4` [공통] (L1-static) — 라디오 버튼 옵션을 수직으로 배치하고 있다.
- `component.radio.5` [공통] (L1-static) — 라디오 버튼 레이블을 양식의 오른쪽에 배치하고 있다.
- `component.radio.6` [공통] (L2-browser) — 라디오 버튼 옵션을 수평으로 배치하는 경우 옵션 간 간격을 충분하게 제공하고 있다.
- `component.radio.7` [공통] (L1-static) — 라디오 버튼의 특정 옵션을 기본 선택값으로 제공하지 않고 있다.
- `component.radio.8` [공통] (L1-static) — 라디오 버튼에 선택을 되돌릴 수 있는 방법을 제공하고 있다.
- `component.radio.9` [공통] (L2-browser) — 라디오 버튼 탐색에 대한 상호작용을 적절하게 구현하고 있다.
- `component.radio.10` [공통] (L2-browser) — 라디오 버튼 실행에 대한 상호작용을 적절하게 구현하고 있다.

#### select
- `component.select.1` [공통] (L3-manual) — 여러 개의 옵션을 선택하는 데 셀렉트를 사용하지 않고 있다.
- `component.select.2` [공통] (L1-static) — 옵션의 개수가 많은 경우에 셀렉트를 사용하지 않고 있다.
- `component.select.3` [공통] (L1-static) — 셀렉트에 선택값을 제공하고 있다.
- `component.select.4` [공통] (L1-static) · `form-label-binding` — 셀렉트에 레이블을 제공하고 있다.
- `component.select.5` [공통] (L3-manual) — 셀렉트 옵션 값을 변경했을 때 폼이 제출되지 않도록 구현하고 있다.
- `component.select.6` [공통] (L2-browser) — 셀렉트 목록 확장 및 축소에 대한 상호작용을 적절하게 구현하고 있다.
- `component.select.7` [공통] (L2-browser) — 셀렉트 탐색에 대한 상호작용을 적절하게 구현하고 있다.
- `component.select.8` [공통] (L2-browser) — 셀렉트 옵션 선택에 대한 상호작용을 적절하게 구현하고 있다.

#### side-menu
- `component.side-menu.1` [공통] (L2-browser) — 사이드 메뉴에서 현재 탐색 중인 화면에 대한 링크를 강조 표시하고 있다.
- `component.side-menu.2` [공통] (L1-static) — 사이드 메뉴 링크 목록의 계층 구조를 최대 2개 수준까지 사용하고 있다.
- `component.side-menu.3` [공통] (L1-static) — 사이드 메뉴에서 하위 수준 메뉴를 확장 가능한 영역으로 제공하고 있다.
- `component.side-menu.4` [공통] (L2-browser) — 사이드 메뉴의 계층 구조를 명확하게 구분하여 표현한다.
- `component.side-menu.5` [공통] (L2-browser) · `side-menu-hidden-mobile` — 작은 화면 너비에서 사이드 메뉴를 표시하지 않고 있다.
- `component.side-menu.6` [공통] (L2-browser) — 사이드 메뉴 링크 탐색에 대한 상호작용을 적절하게 구현하고 있다.
- `component.side-menu.7` [공통] (L2-browser) — 사이드 메뉴 링크 관련 화면으로 이동에 대한 상호작용을 적절하게 구현하고 있다.
- `component.side-menu.8` [공통] (L2-browser) — 사이드 메뉴 영역 확장 및 축소에 대한 상호작용을 적절하게 구현하고 있다.

#### skip-link
- `component.skip-link.1` [공통] (L3-manual) — 반복되는 영역이 없는 단순한 화면에 건너뛰기 링크를 생략하고 있다.
- `component.skip-link.2` [공통] (L1-static) · `skip-link-present` — 건너뛰기 링크를 웹사이트의 모든 화면에 제공하고 있다.
- `component.skip-link.3` [공통] (L1-static) · `skip-link-count` — 건너뛰기 링크의 개수를 3개 이내로 제공하고 있다.
- `component.skip-link.4` [공통] (L1-static) · `skip-link-first-main` — 건너뛰기 링크에 화면의 핵심 영역으로 이동하는 링크를 첫 번째 항목으로 제공하고 있다.
- `component.skip-link.5` [공통] (L1-static) · `skip-link-target` — 건너뛰기 링크는 적절한 목적지에 연결되어 있다.
- `component.skip-link.6` [공통] (L2-browser) · `skip-link-keyboard` — 건너뛰기 링크의 탐색, 이동에 대한 상호작용을 적절하게 구현하고 있다.

#### tag
- `component.tag.1` [공통] (L1-static) — 태그 레이블을 간결하게 제공하고 있다.
- `component.tag.2` [공통] (L1-static) — 대화형 태그와 비대화형 태그를 같은 그룹에 혼용하지 않고 있다.
- `component.tag.3` [공통] (L2-browser) — 태그 탐색에 대한 상호작용을 적절하게 구현하고 있다.
- `component.tag.4` [공통] (L2-browser) — 태그 실행에 대한 상호작용을 적절하게 구현하고 있다.
- `component.tag.5` [공통] (L2-browser) — 태그 삭제에 대한 상호작용을 적절하게 구현하고 있다.

#### text-input
- `component.text-input.1` [공통] (L2-browser) — 텍스트 입력 필드가 기본적으로 크기가 전체 섹션 영역을 차지하도록 구현하고 있다.
- `component.text-input.2` [공통] (L1-static) · `form-label-binding` — 텍스트 입력 필드에 레이블을 제공하고 있다.
- `component.text-input.3` [공통] (L1-static) — 텍스트 입력 필드의 레이블이나 도움말을 플레이스홀더로 제공하지 않고 있다.
- `component.text-input.4` [공통] (L3-manual) — 텍스트 입력 필드에 복사 및 붙여넣기 기능을 사용할 수 있다.
- `component.text-input.5` [공통] (L1-static) · `autocomplete-present` — 텍스트 입력 필드에 사용자가 자주, 반복적으로 입력하는 값은 자동 완성될 수 있도록 구현하고 있다.
- `component.text-input.6` [공통] (L2-browser) — 텍스트 입력 필드에서 데이터 입력에 대한 상호작용을 적절하게 구현하고 있다.

#### textarea
- `component.textarea.1` [공통] (L1-static) · `form-label-binding` — 텍스트 영역에 레이블을 제공하고 있다.
- `component.textarea.2` [공통] (L1-static) — 텍스트 영역의 레이블이나 도움말을 플레이스홀더로 제공하지 않고 있다.
- `component.textarea.3` [공통] (L3-manual) — 텍스트 영역에 복사 및 붙여넣기 기능을 사용할 수 있다.
- `component.textarea.4` [공통] (L1-static) — 텍스트 영역에 입력 가능한 글자 수의 제한이 있는 경우 사용자에게 글자 수 정보를 제공하고 있다.
- `component.textarea.5` [공통] (L2-browser) — 텍스트 영역에서 데이터 입력에 대한 상호작용을 적절하게 구현하고 있다.
- `component.textarea.6` [공통] (L2-browser) — 텍스트 영역에서 스크롤에 대한 상호작용을 적절하게 구현하고 있다.

### 기본 패턴 (47)

#### attachment
- `pattern.basic.attachment.1` [공통] (L3-manual) — 첨부파일 링크 주변에 파일 다운로드를 유발할 수 있음에 대한 사전 안내를 제공하고 있다.
- `pattern.basic.attachment.2` [공통] (L3-manual) — 첨부파일의 크기와 형식 정보를 표시하고 있다.
- `pattern.basic.attachment.3` [공통] (L3-manual) — 인라인 링크 유형의 첨부파일 레이블 텍스트는 주변 콘텐츠와 비슷한 크기로 제공하고 있다.

#### filter-sort
- `pattern.basic.filter-sort.1` [공통] (L3-manual) — 필터링·정렬 컨트롤을 숨기지 않고 있다.
- `pattern.basic.filter-sort.2` [공통] (L3-manual) — 선택된 필터링·정렬 옵션이 명확하게 구분되도록 표현하고 있다.
- `pattern.basic.filter-sort.3` [공통] (L3-manual) — 필터링·정렬 조건이 적용되었음을 확인할 수 있는 명확한 시각적 단서를 제공하고 있다.
- `pattern.basic.filter-sort.4` [공통] (L3-manual) — 필터링·정렬 실행 버튼에 레이블을 제공하고 있다.
- `pattern.basic.filter-sort.5` [공통] (L3-manual) — 모든 필터링·정렬 컨트롤에 그룹 헤딩을 제공하고 있다.
- `pattern.basic.filter-sort.6` [공통] (L3-manual) — 필터링·정렬 컨트롤 레이블은 간결하고 정확한 내용으로 제공하고 있다.
- `pattern.basic.filter-sort.7` [공통] (L3-manual) — 관련 있거나 유사한 필터링 컨트롤을 군집화하여 제공하고 있다.
- `pattern.basic.filter-sort.8` [공통] (L3-manual) — 정렬 컨트롤은 대상 목록 오른쪽 상단에 배치하고 있다.
- `pattern.basic.filter-sort.9` [공통] (L3-manual) — 날짜, 시간을 기준으로 한 필터링은 범위를 입력할 수 있도록 제공하고 있다.
- `pattern.basic.filter-sort.10` [공통] (L3-manual) — 적용된 필터링 옵션을 한 번에 해제할 수 있는 기능을 제공하고 있다.
- `pattern.basic.filter-sort.11` [공통] (L2-browser) — 필터링·정렬 컨트롤 버튼을 축약하여 제공할 경우, 필터링을 우선 배치하고 있다.

#### form
- `pattern.basic.form.1` [공통] (L1-static) — 입력폼에 제목을 제공하고 있다.
- `pattern.basic.form.2` [공통] (L1-static) — 입력폼 내부의 콘텐츠를 하나의 열에 수직으로 정렬하고 있다.
- `pattern.basic.form.3` [공통] (L1-static) — 입력폼과 입력폼, 콘텐츠와 콘텐츠 사이에 충분한 간격을 제공하고 있다.
- `pattern.basic.form.4` [공통] (L1-static) — 입력폼의 액션 버튼은 일관된 위치에 배치하고 정렬하고 있다.
- `pattern.basic.form.5` [공통] (L1-static) — 입력폼에 비활성화 상태의 입력폼 제출 버튼을 사용하고 있다.
- `pattern.basic.form.6` [공통] (L1-static) — 입력폼의 입력 관련 컴포넌트 주변에 레이블과 설명을 제공하고 있다.
- `pattern.basic.form.7` [공통] (L1-static) — 입력폼의 입력 필드에 입력값의 단위를 표시하고 있다.
- `pattern.basic.form.8` [공통] (L1-static) — 입력폼에 필수 입력 항목과 선택 입력 항목을 명확하게 구분하고 있다.
- `pattern.basic.form.9` [공통] (L1-static) — 입력폼에 필수 또는 선택 입력 항목은 일관성 있는 방식으로 구분하고 있다.
- `pattern.basic.form.10` [공통] (L1-static) — 입력폼에 사용자가 자주, 반복적으로 입력하는 데이터에 자동 완성 기능을 제공하고 있다.
- `pattern.basic.form.11` [공통] (L2-browser) — 모바일을 고려한 입력폼 디자인을 제공하고 있다.

#### pii
- `pattern.basic.pii.1` [공통] (L1-static) — 입력이 필요한 개인 식별 정보의 용도를 명확하게 설명하고 있다.
- `pattern.basic.pii.2` [공통] (L1-static) — 개인 식별 정보 입력 필드에 복사 및 붙여넣기 기능을 사용할 수 있다.
- `pattern.basic.pii.3` [공통] (L1-static) — 개인 식별 정보 입력에 기본값을 설정하지 않고 있다.
- `pattern.basic.pii.4` [공통] (L1-static) — 개인 식별 정보 입력 영역/필드의 플레이스홀더가 실제 입력과 구분되고 있다.
- `pattern.basic.pii.5` [공통] (L3-manual) — 이름 입력 필드에 모든 문자의 입력과 표시를 지원하고 있다.
- `pattern.basic.pii.6` [공통] (L3-manual) — 이름 입력 필드에 입력 형식에 대한 정확한 설명을 제공하고 있다.
- `pattern.basic.pii.7` [공통] (L3-manual) — 이름 입력 필드에 입력 가능한 글자 수를 적절하게 구성하고 있다.
- `pattern.basic.pii.8` [공통] (L3-manual) — 이름 입력 필드의 너비를 최대 글자 수 길이에 맞추어 제공하고 있다.
- `pattern.basic.pii.9` [공통] (L3-manual) — 이름 입력에 단일 텍스트 입력 필드를 사용하고 있다.
- `pattern.basic.pii.10` [공통] (L3-manual) — 이름 입력 필드 주변에 개명한 사용자를 위한 도움말을 제공하고 있다.
- `pattern.basic.pii.11` [공통] (L3-manual) — 생년월일의 입력에 날짜 선택기를 기본으로 사용하지 않고 있다.
- `pattern.basic.pii.12` [공통] (L3-manual) — 생년월일의 연도, 일 입력에 셀렉트를 사용하지 않고 있다.
- `pattern.basic.pii.13` [공통] (L3-manual) — 생년월일 입력 형식을 정확하게 안내하고 있다.
- `pattern.basic.pii.14` [공통] (L3-manual) — 특정 성별을 기본값으로 지정하지 않고 있다.
- `pattern.basic.pii.15` [공통] (L3-manual) — 성별 정보 입력에 '선택 안 함' 옵션을 제공하고 있다.
- `pattern.basic.pii.16` [공통] (L3-manual) — 특정 유형의 전화번호를 필수로 요청하지 않고 있다.
- `pattern.basic.pii.17` [공통] (L3-manual) — 전화번호 입력 필드에 명확한 레이블을 제공하고 있다.
- `pattern.basic.pii.18` [공통] (L3-manual) — 전화번호 입력 필드에 다양한 입력 문자의 입력과 표시를 지원하고 있다.
- `pattern.basic.pii.19` [공통] (L3-manual) — 전화번호 입력 형식을 정확하게 안내하고 있다.
- `pattern.basic.pii.20` [공통] (L3-manual) — 전화번호 국가 코드 입력에 콤보박스를 사용하고 있다.
- `pattern.basic.pii.21` [공통] (L3-manual) — 여러 개의 전화번호 입력 요청 시, 각 번호를 구분할 수 있는 레이블을 제공하고 있다.
- `pattern.basic.pii.22` [공통] (L3-manual) — 여러 개의 전화번호 입력 요청 시, 주로 사용하는 번호를 지정할 수 있는 옵션을 제공하고 있다.

### 서비스 패턴 (73)

#### apply-browse
- `pattern.service.apply-browse.1` [공통] (L3-manual) — 신청 정보 목록에 신청 상태 정보를 명확하게 인지할 수 있도록 표현하고 있다.
- `pattern.service.apply-browse.2` [공통] (L3-manual) — 신청 정보 목록의 제목에 공식적인 서비스 명칭을 사용하고 있다.
- `pattern.service.apply-browse.3` [공통] (L3-manual) — 신청 정보 목록의 제목에 말줄임표를 사용하지 않고 있다.

#### apply-complete
- `pattern.service.apply-complete.1` [공통] (L3-manual) — 모든 신청 과업에 완료 단계를 제공하고 있다.

#### apply-confirm
- `pattern.service.apply-confirm.1` [공통] (L3-manual) — 신청서 제출에 확인·확정 단계를 제공하고 있다.
- `pattern.service.apply-confirm.2` [공통] (L3-manual) — 신청 취소/수정 불가한 사항에 대해 사용자에게 명확하게 안내하고 있다.
- `pattern.service.apply-confirm.3` [공통] (L3-manual) — 신청서 제출 확인·확정 과정에서 행동을 취소할 수 있는 수단을 제공하고 있다.

#### apply-eligibility
- `pattern.service.apply-eligibility.1` [공통] (L3-manual) — 신청 과정에서 신청서 작성 중간 또는 최종 단계에서 작성을 중단해야 하는 상황에 대해 명확하게 안내하고 있다.

#### apply-form
- `pattern.service.apply-form.1` [공통] (L1-static) — 신청서 작성폼에 단계 표시기를 제공하고 있다.
- `pattern.service.apply-form.2` [공통] (L1-static) — 한 단계 내에서의 신청 서식 섹션을 탭이나 아코디언으로 구분하지 않고 있다.
- `pattern.service.apply-form.3` [공통] (L1-static) — 신청서 작성 과정에서 값의 변경이 이전 항목에 영향을 미치는 상황에 대해 사용자에게 안내하고 있다.
- `pattern.service.apply-form.4` [공통] (L1-static) — 신청서 작성 화면에 신청서 작성에 대해 도움받을 수 있는 문의처를 제공하고 있다.
- `pattern.service.apply-form.5` [공통] (L1-static) — 신청서 작성 과정에서 도움말은 정확한 내용으로 제공하고 있다.
- `pattern.service.apply-form.6` [공통] (L1-static) — 신청서 작성폼의 초기화 버튼을 다른 버튼과 명확하게 구분하고 있다.

#### apply-info
- `pattern.service.apply-info.1` [공통] (L3-manual) — 신청 서비스 정보 확인 화면에서 이해하기 어려운 단어에 대한 설명을 제공하고 있다.
- `pattern.service.apply-info.2` [공통] (L3-manual) — 신청 서비스 정보 확인 화면에서 상세 정보를 정확하게 제공하고 있다.
- `pattern.service.apply-info.3` [공통] (L3-manual) — 신청 서비스 정보 확인 화면에서 상세 정보를 최신화된 상태로 제공하고 있다.
- `pattern.service.apply-info.4` [공통] (L3-manual) — 신청 서비스 정보 확인 화면에서 서비스를 신청할 수 있는 모든 채널에 대한 정보를 제공하고 있다.
- `pattern.service.apply-info.5` [공통] (L3-manual) — 신청 서비스 정보 확인 화면에서 제약 사항에 대한 정보를 제공하고 있다.
- `pattern.service.apply-info.6` [공통] (L3-manual) — 신청 서비스 정보 확인 화면에서 신청에 필요한 모든 서식과 서류에 대해 안내하고 빠르게 접근할 수 있는 수단을 제공하고 있다.
- `pattern.service.apply-info.7` [공통] (L3-manual) — 신청 서비스 정보 확인 화면에서 신청 과정, 처리 절차에 대한 정보를 제공하고 있다.
- `pattern.service.apply-info.8` [공통] (L3-manual) — 신청 서비스 정보 확인 화면에서 기본 정보를 첫 번째 탭에 제공하고 있다.

#### apply-result
- `pattern.service.apply-result.1` [공통] (L3-manual) — 신청 상세 내역을 제공하고 있다.
- `pattern.service.apply-result.2` [공통] (L3-manual) — 신청 이력을 제공하고 있다.
- `pattern.service.apply-result.3` [공통] (L3-manual) — 신청 과정과 관련하여 현재 진행 상태에 대한 정보를 제공하고 있다.

#### login-find
- `pattern.service.login-find.1` [공통] (L1-static) — 로그인 링크를 모든 화면에서 일관된 위치에 배치하고 있다.
- `pattern.service.login-find.2` [공통] (L1-static) — 로그인 링크가 항상 '로그인' 화면으로 연결되고 있다.
- `pattern.service.login-find.3` [공통] (L1-static) — 작은 화면 너비에서 로그인 링크를 숨기지 않고 있다.

#### login-input
- `pattern.service.login-input.1` [공통] (L1-static) — 로그인 관련 도움말, 회원가입 링크를 제공하고 있다.
- `pattern.service.login-input.2` [공통] (L1-static) — 아이디 형식에 대한 단서를 사전에 제공하고 있다.
- `pattern.service.login-input.3` [공통] (L1-static) — 비밀번호는 기본적으로 숨기고 있다.
- `pattern.service.login-input.4` [공통] (L1-static) — 비밀번호를 표시할 수 있는 옵션을 제공하고 있다.
- `pattern.service.login-input.5` [공통] (L1-static) — 아이디와 비밀번호 입력 필드에서 복사 및 붙여넣기 기능을 사용할 수 있다.
- `pattern.service.login-input.6` [공통] (L1-static) — 아이디/비밀번호 찾기 링크를 제공하고 있다.
- `pattern.service.login-input.7` [공통] (L1-static) — 로그인 오류 메시지를 명확하게 제공하고 있다.
- `pattern.service.login-input.8` [공통] (L1-static) — 로그인 폼을 제출하기 전 가능한 한 많은 사용자 데이터의 유효성을 검사하고 있다.
- `pattern.service.login-input.9` [공통] (L1-static) — 사용자가 로그인 폼을 제출하였을 때 오류가 발생한 경우 해당 항목으로 초점을 이동시키고 있다.

#### login-select
- `pattern.service.login-select.1` [공통] (L3-manual) — 로그인 관련 도움말, 회원가입 링크를 제공하고 있다.
- `pattern.service.login-select.2` [공통] (L3-manual) — 사용자의 다양한 이용 환경을 고려한 로그인 도움말 정보를 제공하고 있다.

#### login-use
- `pattern.service.login-use.1` [공통] (L3-manual) — 로그인 세션이 만료되기 전에 유지 시간에 제한이 있음을 안내하고 있다.
- `pattern.service.login-use.2` [공통] (L3-manual) — 로그인 만료 안내 모달을 세션이 만료되기 최소 20초 전에 제공하고 있다.
- `pattern.service.login-use.3` [공통] (L3-manual) — 로그인 만료 안내 모달에 시간 연장하기 버튼과 로그아웃하기 버튼을 제공하고 있다.

#### policy
- `pattern.service.policy.1` [공통] (L3-manual) — 정책 정보 상세 화면에서 상세 정보를 정확하게 제공하고 있다.
- `pattern.service.policy.2` [공통] (L3-manual) — 정책 정보 상세 화면에서 상세 정보를 최신화된 상태로 제공하고 있다.

#### search-again
- `pattern.service.search-again.1` [공통] (L3-manual) — 재검색 과정에서 상세 검색 컨트롤을 숨기지 않고 있다.
- `pattern.service.search-again.2` [공통] (L3-manual) — 사용자가 설정한 상세 검색 조건을 유지하고 있다.

#### search-exit
- `pattern.service.search-exit.1` [공통] (L1-static) — 검색 종료 시 다른 화면 또는 다른 탐색 수단에 빠르게 접근할 수 있다.

#### search-find
- `pattern.service.search-find.1` [공통] (L1-static) — 서비스 내 모든 화면에서 통합검색 기능을 실행할 수 있다.

#### search-input
- `pattern.service.search-input.1` [공통] (L1-static) — 검색 실행 버튼, 검색어 삭제 버튼을 제공하고 있다.
- `pattern.service.search-input.2` [공통] (L1-static) — 스코프 필터에 '전체' 옵션을 제공하고 있다.
- `pattern.service.search-input.3` [공통] (L1-static) — 스코프 필터의 기본 옵션을 '전체'로 제공하고 있다.
- `pattern.service.search-input.4` [공통] (L1-static) — 검색어 입력 필드에 레이블을 제공하고 있다.
- `pattern.service.search-input.5` [공통] (L1-static) — 검색어 입력 필드의 레이블은 검색 대상/방법을 명확하게 표현하고 있다.
- `pattern.service.search-input.6` [공통] (L1-static) — 검색어 입력 필드의 레이블이나 도움말을 플레이스홀더로 제공하지 않고 있다.
- `pattern.service.search-input.7` [공통] (L1-static) — 검색 실행에 대한 상호작용을 적절하게 구현하고 있다.
- `pattern.service.search-input.8` [공통] (L1-static) — 실시간 검색어 입력 도움의 출현 방식에 대한 상호작용을 적절하게 구현하고 있다.
- `pattern.service.search-input.9` [공통] (L1-static) — 실시간 검색어 입력 도움의 탐색에 대한 상호작용을 적절하게 구현하고 있다.
- `pattern.service.search-input.10` [공통] (L1-static) — 실시간 검색어 입력 도움의 실행에 대한 상호작용을 적절하게 구현하고 있다.

#### search-overview
- `pattern.service.search-overview.1` [공통] (L3-manual) — 통합검색 기능을 제공하고 있다.

#### search-results
- `pattern.service.search-results.1` [공통] (L3-manual) — 검색 결과 화면에 검색어 입력 필드를 유지하고 있다.
- `pattern.service.search-results.2` [공통] (L3-manual) — 사용자가 재검색을 시도하지 않는 한 검색어 입력 필드에 검색어를 유지하고 있다.
- `pattern.service.search-results.3` [공통] (L3-manual) — 검색 결과 화면에 검색 결과 수를 표시하고 있다.
- `pattern.service.search-results.4` [공통] (L3-manual) — 검색 결과 화면의 주제별 탭에 검색 결과 수를 표시하고 있다.
- `pattern.service.search-results.5` [공통] (L3-manual) — 검색 결과가 없는 상태에 대한 정보를 명확하게 제공하고 있다.
- `pattern.service.search-results.6` [공통] (L3-manual) — 검색 결과가 없는 경우, 대안적인 행동에 대한 안내를 제공하고 있다.
- `pattern.service.search-results.7` [공통] (L3-manual) — 검색 결과 화면에 검색 기간 필터를 제공하고 있다.
- `pattern.service.search-results.8` [공통] (L3-manual) — 검색 결과 화면에 기본 정렬 컨트롤을 제공하고 있다.
- `pattern.service.search-results.9` [공통] (L3-manual) — 스코프 필터를 사용하는 경우 결과 화면 상단에 설정된 범위를 명시적으로 표시하고 있다.

#### search-use
- `pattern.service.search-use.1` [공통] (L3-manual) — 검색 결과 항목에 제목, 설명, 인덱스를 제공하고 있다.
- `pattern.service.search-use.2` [공통] (L3-manual) — 검색 결과 항목에 검색어와 일치하는 항목을 강조 표시하고 있다.

#### visit
- `pattern.service.visit.1` [공통] (L3-manual) — 메인 화면에 시급하거나 중요한 정보를 사용자가 빠르게 인지할 수 있도록 제공하고 있다.
- `pattern.service.visit.2` [공통] (L3-manual) — 메인 화면에 최신 정보를 제공하고 있다.
- `pattern.service.visit.3` [공통] (L3-manual) — 메인 화면에 정확한 정보를 제공하고 있다.

## 관련 문서

- [specs/validation-checklist.md](../specs/validation-checklist.md)
- [specs/validation-tools.md](../specs/validation-tools.md)
- [resources/krds/checklist/official-checklist.json](../resources/krds/checklist/official-checklist.json)