# 컴포넌트 검증 준수기준

> 컴포넌트 카테고리 170항 · [validation-checklist-tree.md](../../docs/validation-checklist-tree.md)

## breadcrumb

### `component.breadcrumb.1`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 탐색 계층 구조가 1수준인 사이트에 브레드크럼을 사용하지 않고 있다.

### `component.breadcrumb.2`

- **tier**: 공통
- **automation**: static (`breadcrumb-not-on-home`)
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼을 메인 또는 랜딩 페이지에서 사용하지 않고 있다.

### `component.breadcrumb.3`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼을 진행 상황 표시를 위해 사용하지 않고 있다.

### `component.breadcrumb.4`

- **tier**: 공통
- **automation**: static (`breadcrumb-separator`)
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼에 구분자를 제공하고 있다.

### `component.breadcrumb.5`

- **tier**: 공통
- **automation**: static (`breadcrumb-home-first`)
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼의 가장 첫 번째 항목으로 메인 화면 링크를 제공하고 있다.

### `component.breadcrumb.6`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼의 가장 마지막 항목으로 현재 화면의 상위 화면 링크를 제공하고 있다.

### `component.breadcrumb.7`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼과 본문 제목 사이에 다른 요소를 제공하지 않고 있다.

### `component.breadcrumb.8`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼에 현재 화면의 전체 정보 계층 구조를 표시하고 있다.

### `component.breadcrumb.9`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼 텍스트 경로가 링크임을 인지할 수 있는 시각적 단서를 제공하고 있다.

### `component.breadcrumb.10`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼에 경로를 4개 이하로 표시하고 있다.

### `component.breadcrumb.11`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼을 단일 행으로 제공하고 있다.

### `component.breadcrumb.12`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼을 본문 그리드 왼쪽 끝에 정렬하고 있다.

### `component.breadcrumb.13`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼 링크 간 간격을 충분히 제공하고 있다.

### `component.breadcrumb.14`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼이 메인 메뉴를 대체하지 않고 있다.

### `component.breadcrumb.15`

- **tier**: 공통
- **automation**: browser (`breadcrumb-mobile-collapse`)
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 작은 화면 너비에서 브레드크럼의 첫 번째 경로와 마지막 경로만 표시하고 있다.

### `component.breadcrumb.16`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼 링크 탐색에 대한 상호작용을 적절하게 구현하고 있다.

### `component.breadcrumb.17`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/breadcrumb.md](../../specs/components/breadcrumb.md)
- 브레드크럼 링크 관련 화면으로 이동에 대한 상호작용을 적절하게 구현하고 있다.

## button

### `component.button.1`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/button.md](../../specs/components/button.md)
- 그룹으로 제공될 때 모든 버튼의 크기를 동일하게 제공하고 있다.

### `component.button.2`

- **tier**: 공통
- **automation**: static (`button-single-primary`)
- **spec**: [specs/components/button.md](../../specs/components/button.md)
- 한 화면에 최상위 수준의 강조 버튼은 한 번만 사용하고 있다.

### `component.button.3`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/button.md](../../specs/components/button.md)
- 버튼 그룹을 수직으로 배열할 때 최상위 수준의 강조 버튼을 첫 번째로 배치하고 있다.

### `component.button.4`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/button.md](../../specs/components/button.md)
- 버튼의 텍스트 레이블이 동사형으로 제공되고 있다.

### `component.button.5`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/button.md](../../specs/components/button.md)
- 버튼 실행 시 사용자의 두 번째 인터랙션이 무시되도록 구현하고 있다.

### `component.button.6`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/button.md](../../specs/components/button.md)
- 버튼 탐색에 대한 상호작용을 적절하게 구현하고 있다.

### `component.button.7`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/button.md](../../specs/components/button.md)
- 버튼 실행에 대한 상호작용을 적절하게 구현하고 있다.

## checkbox

### `component.checkbox.1`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/checkbox.md](../../specs/components/checkbox.md)
- 한 개의 옵션을 선택하는 데 체크박스를 사용하지 않고 있다.

### `component.checkbox.2`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/checkbox.md](../../specs/components/checkbox.md)
- 체크박스 옵션을 가나다순으로 정렬하고 있다.

### `component.checkbox.3`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/checkbox.md](../../specs/components/checkbox.md)
- 체크박스 옵션을 수직으로 배치하고 있다.

### `component.checkbox.4`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/checkbox.md](../../specs/components/checkbox.md)
- 체크박스 레이블을 양식의 오른쪽에 배치하고 있다.

### `component.checkbox.5`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/checkbox.md](../../specs/components/checkbox.md)
- 체크박스에서 전체 선택 옵션이 제공되는 경우 중간 상태를 명확하게 표현하고 있다.

### `component.checkbox.6`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/checkbox.md](../../specs/components/checkbox.md)
- 체크박스 탐색에 대한 상호작용을 적절하게 구현하고 있다.

### `component.checkbox.7`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/checkbox.md](../../specs/components/checkbox.md)
- 체크박스 옵션 선택 및 선택 해제에 대한 상호작용을 적절하게 구현하고 있다.

## date-input

### `component.date-input.1`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/date_input.md](../../specs/components/date_input.md)
- 날짜 입력 필드를 상대적인 날짜 입력에 사용하지 않고 있다.

### `component.date-input.2`

- **tier**: 공통
- **automation**: static (`form-label-binding`)
- **spec**: [specs/components/date_input.md](../../specs/components/date_input.md)
- 날짜 입력 필드에 레이블을 제공하고 어떤 날짜를 입력해야 하는지 명확하게 설명하고 있다.

### `component.date-input.3`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/date_input.md](../../specs/components/date_input.md)
- 다중 날짜 입력 필드에 '년', '월', '일' 레이블을 제공하고 있다.

### `component.date-input.4`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/date_input.md](../../specs/components/date_input.md)
- 날짜 입력 필드에 도움말 텍스트로 날짜 입력 형식을 안내하고 있다.

### `component.date-input.5`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/date_input.md](../../specs/components/date_input.md)
- 문서에 표시된 날짜를 정확하게 요청할 때 원본 형식과 동일한 구성의 날짜 입력 필드를 사용하고 있다.

### `component.date-input.6`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/date_input.md](../../specs/components/date_input.md)
- 날짜 입력 필드에 사용자가 대략적인 날짜를 입력할 수 있도록 제공하고 있다.

### `component.date-input.7`

- **tier**: 공통
- **automation**: static (`autocomplete-present`)
- **spec**: [specs/components/date_input.md](../../specs/components/date_input.md)
- 날짜 입력 필드에 사용자가 자주, 반복적으로 입력하는 날짜는 자동 완성되도록 구현하고 있다.

### `component.date-input.8`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/date_input.md](../../specs/components/date_input.md)
- 날짜 입력 필드의 데이터 입력에 대한 상호작용을 적절하게 구현하고 있다.

## file-upload

### `component.file-upload.1`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/file_upload.md](../../specs/components/file_upload.md)
- 모달 레이아웃에서 다중 파일 업로드를 사용하지 않고 있다.

### `component.file-upload.2`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/file_upload.md](../../specs/components/file_upload.md)
- 파일 업로드에 파일 항목, 삭제 버튼을 제공하고 있다.

### `component.file-upload.3`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/file_upload.md](../../specs/components/file_upload.md)
- 파일 업로드에 레이블을 제공하고 있다.

### `component.file-upload.4`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/file_upload.md](../../specs/components/file_upload.md)
- 파일 업로드에서 파일 유형, 파일 크기, 파일 개수 제한에 대해 안내하고 있다.

### `component.file-upload.5`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/file_upload.md](../../specs/components/file_upload.md)
- 파일 업로드에서 파일이 업로드된 후에도 파일 선택 버튼을 기본 상태로 유지하고 있다.

### `component.file-upload.6`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/file_upload.md](../../specs/components/file_upload.md)
- 파일 업로드의 파일 선택 버튼을 적절한 강조 수준으로 표현하고 있다.

### `component.file-upload.7`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/file_upload.md](../../specs/components/file_upload.md)
- 파일 업로드에서 파일을 자동으로 제출하지 않고 있다.

### `component.file-upload.8`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/file_upload.md](../../specs/components/file_upload.md)
- 파일 업로드에서 오류 상태에 대한 구체적인 오류 메시지를 제공하고 있다.

### `component.file-upload.9`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/file_upload.md](../../specs/components/file_upload.md)
- 파일 업로드에서 업로드된 파일 이름을 한 줄 텍스트로 제공하고 있다.

### `component.file-upload.10`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/file_upload.md](../../specs/components/file_upload.md)
- 파일 업로드의 탐색에 대한 상호작용을 적절하게 구현하고 있다.

### `component.file-upload.11`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/file_upload.md](../../specs/components/file_upload.md)
- 파일 업로드에 대한 상호작용을 적절하게 구현하고 있다.

### `component.file-upload.12`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/file_upload.md](../../specs/components/file_upload.md)
- 파일 업로드의 파일 삭제에 대한 상호작용을 적절하게 구현하고 있다.

## footer

### `component.footer.1`

- **tier**: 공통
- **automation**: static (`footer-required-info`)
- **spec**: [specs/components/footer.md](../../specs/components/footer.md)
- 푸터에 서비스 로고, 연락처, 저작권 정보를 제공하고 있다.

### `component.footer.2`

- **tier**: 공통
- **automation**: browser (`footer-position`)
- **spec**: [specs/components/footer.md](../../specs/components/footer.md)
- 푸터를 모든 화면에서 일관된 위치에 제공하고 있다.

### `component.footer.3`

- **tier**: 공통
- **automation**: static (`footer-order`)
- **spec**: [specs/components/footer.md](../../specs/components/footer.md)
- 푸터 섹션의 정보를 일관된 순서로 제공하고 있다.

### `component.footer.4`

- **tier**: 공통
- **automation**: static (`footer-privacy-link`)
- **spec**: [specs/components/footer.md](../../specs/components/footer.md)
- 푸터에 개인 정보 처리 방침을 표시하고 있다.

### `component.footer.5`

- **tier**: 공통
- **automation**: static (`footer-terms-link`)
- **spec**: [specs/components/footer.md](../../specs/components/footer.md)
- 전자상거래가 포함된 경우 푸터에 이용약관을 표시하고 있다.

### `component.footer.6`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/footer.md](../../specs/components/footer.md)
- 푸터에 사용자들이 빈번하게 찾는 링크를 배치하고 있다.

### `component.footer.7`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/footer.md](../../specs/components/footer.md)
- 푸터의 서비스 내비게이션이 기본 내비게이션과 동일하게 제공되고 있다.

### `component.footer.8`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/footer.md](../../specs/components/footer.md)
- 푸터에 최신 연락처 정보를 정확하게 제공하고 있다.

### `component.footer.9`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/footer.md](../../specs/components/footer.md)
- 푸터의 각종 링크는 링크 레이블에 명시된 정확한 페이지로 연결되고 있다.

### `component.footer.10`

- **tier**: 공통
- **automation**: browser (`footer-responsive-order`)
- **spec**: [specs/components/footer.md](../../specs/components/footer.md)
- 화면 크기에 상관없이 푸터의 정보 요소는 상대적으로 동일한 순서로 제공되도록 표현하고 있다.

### `component.footer.11`

- **tier**: 정부상징
- **automation**: browser (`footer-style-gov`)
- **spec**: [specs/components/footer.md](../../specs/components/footer.md)
- 푸터의 스타일 수정을 최소화하고 있다.

## header

### `component.header.1`

- **tier**: 정부상징
- **automation**: browser (`header-style-gov`)
- **spec**: [specs/components/header.md](../../specs/components/header.md)
- 헤더의 스타일 수정을 최소화하고 있다.

### `component.header.2`

- **tier**: 공통
- **automation**: static (`header-logo-position`)
- **spec**: [specs/components/header.md](../../specs/components/header.md)
- 서비스 로고를 헤더의 왼쪽 상단에 제공하고 있다.

### `component.header.3`

- **tier**: 공통
- **automation**: static (`header-order`)
- **spec**: [specs/components/header.md](../../specs/components/header.md)
- 헤더의 내부 컴포넌트를 일관된 순서로 제공하고 있다.

### `component.header.4`

- **tier**: 공통
- **automation**: static (`header-utility-position`)
- **spec**: [specs/components/header.md](../../specs/components/header.md)
- 유틸리티 링크 그룹은 헤더 우측 상단에 제공하고 있다.

### `component.header.5`

- **tier**: 공통
- **automation**: static (`header-utility-divider`)
- **spec**: [specs/components/header.md](../../specs/components/header.md)
- 헤더에서 유틸리티 링크 그룹을 디바이더로 구분하고 있다.

### `component.header.6`

- **tier**: 공통
- **automation**: static (`header-utility-count`)
- **spec**: [specs/components/header.md](../../specs/components/header.md)
- 헤더에 4개 이하의 유틸리티 링크를 사용하고 있다.

### `component.header.7`

- **tier**: 공통
- **automation**: static (`header-lang-no-flag`)
- **spec**: [specs/components/header.md](../../specs/components/header.md)
- 언어 설정을 위한 드롭다운 메뉴에 국기를 사용하지 않는다.

### `component.header.8`

- **tier**: 공통
- **automation**: static (`header-icon-label`)
- **spec**: [specs/components/header.md](../../specs/components/header.md)
- 헤더의 아이콘 버튼/링크에 텍스트 레이블을 제공하고 있다.

### `component.header.9`

- **tier**: 공통
- **automation**: browser (`header-sticky`)
- **spec**: [specs/components/header.md](../../specs/components/header.md)
- 화면을 위로 스크롤 했을 때 헤더를 뷰포트 상단에 고정하고 있다.

## identifier

### `component.identifier.1`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/identifier.md](../../specs/components/identifier.md)
- 운영기관 식별자의 로고 영역에 상위 기관의 로고를 제공하고 있다.

### `component.identifier.2`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/identifier.md](../../specs/components/identifier.md)
- 관련 기관이 2개 이상 존재하는 경우 운영기관 식별자에 기관의 계층 수준에 따라 로고를 순서대로 배치하고 있다.

### `component.identifier.3`

- **tier**: 공통
- **automation**: static (`identifier-layout`)
- **spec**: [specs/components/identifier.md](../../specs/components/identifier.md)
- 운영기관 식별자에 안내 텍스트와 요소의 배치를 일관되게 제공하고 있다.

## in-page-nav

### `component.in-page-nav.1`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/in_page_navigation.md](../../specs/components/in_page_navigation.md)
- 콘텐츠 내 탐색을 계층 구조가 없는 콘텐츠에 사용하지 않고 있다.

### `component.in-page-nav.2`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/in_page_navigation.md](../../specs/components/in_page_navigation.md)
- 콘텐츠 내 탐색에 제목, 활성화 상태 인디케이터를 제공하고 있다.

### `component.in-page-nav.3`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/in_page_navigation.md](../../specs/components/in_page_navigation.md)
- 콘텐츠 내 탐색을 적절한 너비로 표현하고 있다.

### `component.in-page-nav.4`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/in_page_navigation.md](../../specs/components/in_page_navigation.md)
- 콘텐츠 내 탐색을 본문 우측에 표시하고 있다.

### `component.in-page-nav.5`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/in_page_navigation.md](../../specs/components/in_page_navigation.md)
- 콘텐츠 내 탐색 텍스트는 연결된 섹션 제목과 일치하고 있다.

### `component.in-page-nav.6`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/in_page_navigation.md](../../specs/components/in_page_navigation.md)
- 콘텐츠 내 탐색을 3수준 이하로 제공하고 있다.

### `component.in-page-nav.7`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/in_page_navigation.md](../../specs/components/in_page_navigation.md)
- 작은 화면 너비에서 콘텐츠 내 탐색을 제목과 본문 사이에 배치하고 있다.

### `component.in-page-nav.8`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/in_page_navigation.md](../../specs/components/in_page_navigation.md)
- 콘텐츠 내 탐색의 목록 탐색에 대한 상호작용을 적절하게 구현하고 있다.

### `component.in-page-nav.9`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/in_page_navigation.md](../../specs/components/in_page_navigation.md)
- 콘텐츠 내 탐색 링크의 콘텐츠 섹션 이동에 대한 상호작용을 적절하게 구현하고 있다.

## link

### `component.link.1`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/link.md](../../specs/components/link.md)
- 인라인 링크를 주변 텍스트와 동일한 크기로 제공하고 있다.

### `component.link.2`

- **tier**: 공통
- **automation**: browser (`link-not-color-only`)
- **spec**: [specs/components/link.md](../../specs/components/link.md)
- 링크를 색상만으로 구분하지 않고 있다.

### `component.link.3`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/link.md](../../specs/components/link.md)
- 링크 레이블은 연결된 목적지 정보를 정확하게 반영하고 있다.

### `component.link.4`

- **tier**: 공통
- **automation**: static (`mailto-link`)
- **spec**: [specs/components/link.md](../../specs/components/link.md)
- 이메일 주소를 링크로 제공하고 있다.

### `component.link.5`

- **tier**: 공통
- **automation**: static (`tel-link`)
- **spec**: [specs/components/link.md](../../specs/components/link.md)
- 전화번호 정보를 링크로 제공하고 있다.

### `component.link.6`

- **tier**: 공통
- **automation**: static (`external-link-indicator`)
- **spec**: [specs/components/link.md](../../specs/components/link.md)
- 외부 서비스로 이동하는 링크를 분명하게 구분하고 있다.

### `component.link.7`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/link.md](../../specs/components/link.md)
- 외부 서비스로 이동하는 링크를 일관된 방식으로 표현하고 있다.

### `component.link.8`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/link.md](../../specs/components/link.md)
- 링크가 레이블에 명시된 정확한 목적지로 연결되고 있다.

### `component.link.9`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/link.md](../../specs/components/link.md)
- 링크 탐색에 대한 상호작용을 적절하게 구현하고 있다.

### `component.link.10`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/link.md](../../specs/components/link.md)
- 링크 실행에 대한 상호작용을 적절하게 구현하고 있다.

## main-menu

### `component.main-menu.1`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/main_menu_pc.md](../../specs/components/main_menu_pc.md)
- 메인 메뉴 드롭다운 영역 내에서 레이블은 좌측으로 정렬하고 있다.

### `component.main-menu.2`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/main_menu_pc.md](../../specs/components/main_menu_pc.md)
- 메인 메뉴 드롭다운 영역의 최대 높이가 뷰포트를 초과하지 않고 있다.

### `component.main-menu.3`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/main_menu_pc.md](../../specs/components/main_menu_pc.md)
- 메인 메뉴의 링크 목록 수가 많아 드롭다운 메뉴 영역을 넘어가는 경우 드롭다운 영역 스크롤을 제공하고 있다.

### `component.main-menu.4`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/main_menu_pc.md](../../specs/components/main_menu_pc.md)
- 메인 메뉴 링크의 활성화 상태, 선택 상태가 명확히 구분되도록 표현하고 있다.

### `component.main-menu.5`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/main_menu_pc.md](../../specs/components/main_menu_pc.md)
- 메인 메뉴 드롭다운 영역에 제목을 제공하고 있다.

### `component.main-menu.6`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/main_menu_pc.md](../../specs/components/main_menu_pc.md)
- 메인 메뉴를 3수준 이하로 제공하고 있다.

### `component.main-menu.7`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/main_menu_pc.md](../../specs/components/main_menu_pc.md)
- 메인 메뉴 링크명에 이해하기 쉬운 용어를 사용하고 있다.

### `component.main-menu.8`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/main_menu_pc.md](../../specs/components/main_menu_pc.md)
- 마우스오버를 사용하여 드롭다운 목록을 확장하지 않는다.

### `component.main-menu.9`

- **tier**: 공통
- **automation**: browser (`main-menu-visible-desktop`)
- **spec**: [specs/components/main_menu_pc.md](../../specs/components/main_menu_pc.md)
- 메인 메뉴의 1수준 메뉴 전체를 확인할 수 있도록 표현하고 있다.

### `component.main-menu.10`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/main_menu_pc.md](../../specs/components/main_menu_pc.md)
- 메인 메뉴 영역 확장 및 축소에 대한 상호작용을 적절하게 구현하고 있다.

### `component.main-menu.11`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/main_menu_pc.md](../../specs/components/main_menu_pc.md)
- 메인 메뉴 링크 목록 탐색에 대한 키보드 상호작용을 적절하게 구현하고 있다.

## official-banner

### `component.official-banner.1`

- **tier**: 공통
- **automation**: static (`official-banner-present`)
- **spec**: [specs/components/masthead.md](../../specs/components/masthead.md)
- 웹사이트에 공식 배너를 제공하고 있다.

### `component.official-banner.2`

- **tier**: 공통
- **automation**: static (`official-banner-topmost`)
- **spec**: [specs/components/masthead.md](../../specs/components/masthead.md)
- 공식 배너를 모든 화면의 최상단에 제공하고 있다.

### `component.official-banner.3`

- **tier**: 공통
- **automation**: browser (`official-banner-style`)
- **spec**: [specs/components/masthead.md](../../specs/components/masthead.md)
- 공식 배너의 스타일을 변형하지 않고 있다.

### `component.official-banner.4`

- **tier**: 공통
- **automation**: static (`official-banner-text`)
- **spec**: [specs/components/masthead.md](../../specs/components/masthead.md)
- 공식 배너의 텍스트를 변형하지 않고 있다.

## pagination

### `component.pagination.1`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 페이지네이션을 무한 스크롤 기능과 함께 사용하지 않고 있다.

### `component.pagination.2`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 페이지네이션에 첫/마지막 화면, 이전/다음 화면으로 이동할 수 있는 수단을 제공하고 있다.

### `component.pagination.3`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 페이지네이션에 전체 화면 수를 표시하고 있다.

### `component.pagination.4`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 페이지네이션 번호 링크에 현재 화면 숫자를 강조하여 표현하고 있다.

### `component.pagination.5`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 페이지네이션을 콘텐츠 목록 하단에 중앙 정렬하여 제공하고 있다.

### `component.pagination.6`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 페이지네이션을 한 화면에 하나만 사용하고 있다.

### `component.pagination.7`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 숫자 링크 목록 유형의 페이지네이션에 말줄임표를 포함하여 10개 이내의 항목을 표시하고 있다.

### `component.pagination.8`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 작은 화면 너비에서 숫자 링크 목록 유형의 페이지네이션에 이전/다음 버튼, 숫자 링크 목록을 수직으로 배치하고 있다.

### `component.pagination.9`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 작은 화면 너비에서 숫자 링크 목록 유형의 페이지네이션에 말줄임표를 포함하여 최대 7개 링크를 표시하고 있다.

### `component.pagination.10`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 페이지네이션을 사용할 때, 화면 크기에 상관없이 전체 화면 수를 일정하게 유지하고 있다.

### `component.pagination.11`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 숫자 링크 목록 유형의 페이지네이션에 대한 상호작용을 적절하게 구현하고 있다.

### `component.pagination.12`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 화면 직접 이동 유형의 페이지네이션에 대한 상호작용을 적절하게 구현하고 있다.

### `component.pagination.13`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/pagination.md](../../specs/components/pagination.md)
- 목록 확장 유형의 페이지네이션에 대한 상호작용을 적절하게 구현하고 있다.

## radio

### `component.radio.1`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/radio_button.md](../../specs/components/radio_button.md)
- 여러 개의 옵션을 선택하는 데 라디오 버튼을 사용하지 않고 있다.

### `component.radio.2`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/radio_button.md](../../specs/components/radio_button.md)
- 옵션의 개수가 많은 경우에 라디오 버튼을 사용하지 않고 있다.

### `component.radio.3`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/radio_button.md](../../specs/components/radio_button.md)
- 라디오 버튼 옵션을 가나다순으로 정렬하고 있다.

### `component.radio.4`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/radio_button.md](../../specs/components/radio_button.md)
- 라디오 버튼 옵션을 수직으로 배치하고 있다.

### `component.radio.5`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/radio_button.md](../../specs/components/radio_button.md)
- 라디오 버튼 레이블을 양식의 오른쪽에 배치하고 있다.

### `component.radio.6`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/radio_button.md](../../specs/components/radio_button.md)
- 라디오 버튼 옵션을 수평으로 배치하는 경우 옵션 간 간격을 충분하게 제공하고 있다.

### `component.radio.7`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/radio_button.md](../../specs/components/radio_button.md)
- 라디오 버튼의 특정 옵션을 기본 선택값으로 제공하지 않고 있다.

### `component.radio.8`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/radio_button.md](../../specs/components/radio_button.md)
- 라디오 버튼에 선택을 되돌릴 수 있는 방법을 제공하고 있다.

### `component.radio.9`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/radio_button.md](../../specs/components/radio_button.md)
- 라디오 버튼 탐색에 대한 상호작용을 적절하게 구현하고 있다.

### `component.radio.10`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/radio_button.md](../../specs/components/radio_button.md)
- 라디오 버튼 실행에 대한 상호작용을 적절하게 구현하고 있다.

## select

### `component.select.1`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/select.md](../../specs/components/select.md)
- 여러 개의 옵션을 선택하는 데 셀렉트를 사용하지 않고 있다.

### `component.select.2`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/select.md](../../specs/components/select.md)
- 옵션의 개수가 많은 경우에 셀렉트를 사용하지 않고 있다.

### `component.select.3`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/select.md](../../specs/components/select.md)
- 셀렉트에 선택값을 제공하고 있다.

### `component.select.4`

- **tier**: 공통
- **automation**: static (`form-label-binding`)
- **spec**: [specs/components/select.md](../../specs/components/select.md)
- 셀렉트에 레이블을 제공하고 있다.

### `component.select.5`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/select.md](../../specs/components/select.md)
- 셀렉트 옵션 값을 변경했을 때 폼이 제출되지 않도록 구현하고 있다.

### `component.select.6`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/select.md](../../specs/components/select.md)
- 셀렉트 목록 확장 및 축소에 대한 상호작용을 적절하게 구현하고 있다.

### `component.select.7`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/select.md](../../specs/components/select.md)
- 셀렉트 탐색에 대한 상호작용을 적절하게 구현하고 있다.

### `component.select.8`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/select.md](../../specs/components/select.md)
- 셀렉트 옵션 선택에 대한 상호작용을 적절하게 구현하고 있다.

## side-menu

### `component.side-menu.1`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/side_navigation.md](../../specs/components/side_navigation.md)
- 사이드 메뉴에서 현재 탐색 중인 화면에 대한 링크를 강조 표시하고 있다.

### `component.side-menu.2`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/side_navigation.md](../../specs/components/side_navigation.md)
- 사이드 메뉴 링크 목록의 계층 구조를 최대 2개 수준까지 사용하고 있다.

### `component.side-menu.3`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/side_navigation.md](../../specs/components/side_navigation.md)
- 사이드 메뉴에서 하위 수준 메뉴를 확장 가능한 영역으로 제공하고 있다.

### `component.side-menu.4`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/side_navigation.md](../../specs/components/side_navigation.md)
- 사이드 메뉴의 계층 구조를 명확하게 구분하여 표현한다.

### `component.side-menu.5`

- **tier**: 공통
- **automation**: browser (`side-menu-hidden-mobile`)
- **spec**: [specs/components/side_navigation.md](../../specs/components/side_navigation.md)
- 작은 화면 너비에서 사이드 메뉴를 표시하지 않고 있다.

### `component.side-menu.6`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/side_navigation.md](../../specs/components/side_navigation.md)
- 사이드 메뉴 링크 탐색에 대한 상호작용을 적절하게 구현하고 있다.

### `component.side-menu.7`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/side_navigation.md](../../specs/components/side_navigation.md)
- 사이드 메뉴 링크 관련 화면으로 이동에 대한 상호작용을 적절하게 구현하고 있다.

### `component.side-menu.8`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/side_navigation.md](../../specs/components/side_navigation.md)
- 사이드 메뉴 영역 확장 및 축소에 대한 상호작용을 적절하게 구현하고 있다.

## skip-link

### `component.skip-link.1`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/skip_link.md](../../specs/components/skip_link.md)
- 반복되는 영역이 없는 단순한 화면에 건너뛰기 링크를 생략하고 있다.

### `component.skip-link.2`

- **tier**: 공통
- **automation**: static (`skip-link-present`)
- **spec**: [specs/components/skip_link.md](../../specs/components/skip_link.md)
- 건너뛰기 링크를 웹사이트의 모든 화면에 제공하고 있다.

### `component.skip-link.3`

- **tier**: 공통
- **automation**: static (`skip-link-count`)
- **spec**: [specs/components/skip_link.md](../../specs/components/skip_link.md)
- 건너뛰기 링크의 개수를 3개 이내로 제공하고 있다.

### `component.skip-link.4`

- **tier**: 공통
- **automation**: static (`skip-link-first-main`)
- **spec**: [specs/components/skip_link.md](../../specs/components/skip_link.md)
- 건너뛰기 링크에 화면의 핵심 영역으로 이동하는 링크를 첫 번째 항목으로 제공하고 있다.

### `component.skip-link.5`

- **tier**: 공통
- **automation**: static (`skip-link-target`)
- **spec**: [specs/components/skip_link.md](../../specs/components/skip_link.md)
- 건너뛰기 링크는 적절한 목적지에 연결되어 있다.

### `component.skip-link.6`

- **tier**: 공통
- **automation**: browser (`skip-link-keyboard`)
- **spec**: [specs/components/skip_link.md](../../specs/components/skip_link.md)
- 건너뛰기 링크의 탐색, 이동에 대한 상호작용을 적절하게 구현하고 있다.

## tag

### `component.tag.1`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/tag.md](../../specs/components/tag.md)
- 태그 레이블을 간결하게 제공하고 있다.

### `component.tag.2`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/tag.md](../../specs/components/tag.md)
- 대화형 태그와 비대화형 태그를 같은 그룹에 혼용하지 않고 있다.

### `component.tag.3`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/tag.md](../../specs/components/tag.md)
- 태그 탐색에 대한 상호작용을 적절하게 구현하고 있다.

### `component.tag.4`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/tag.md](../../specs/components/tag.md)
- 태그 실행에 대한 상호작용을 적절하게 구현하고 있다.

### `component.tag.5`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/tag.md](../../specs/components/tag.md)
- 태그 삭제에 대한 상호작용을 적절하게 구현하고 있다.

## text-input

### `component.text-input.1`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/text_input.md](../../specs/components/text_input.md)
- 텍스트 입력 필드가 기본적으로 크기가 전체 섹션 영역을 차지하도록 구현하고 있다.

### `component.text-input.2`

- **tier**: 공통
- **automation**: static (`form-label-binding`)
- **spec**: [specs/components/text_input.md](../../specs/components/text_input.md)
- 텍스트 입력 필드에 레이블을 제공하고 있다.

### `component.text-input.3`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/text_input.md](../../specs/components/text_input.md)
- 텍스트 입력 필드의 레이블이나 도움말을 플레이스홀더로 제공하지 않고 있다.

### `component.text-input.4`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/text_input.md](../../specs/components/text_input.md)
- 텍스트 입력 필드에 복사 및 붙여넣기 기능을 사용할 수 있다.

### `component.text-input.5`

- **tier**: 공통
- **automation**: static (`autocomplete-present`)
- **spec**: [specs/components/text_input.md](../../specs/components/text_input.md)
- 텍스트 입력 필드에 사용자가 자주, 반복적으로 입력하는 값은 자동 완성될 수 있도록 구현하고 있다.

### `component.text-input.6`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/text_input.md](../../specs/components/text_input.md)
- 텍스트 입력 필드에서 데이터 입력에 대한 상호작용을 적절하게 구현하고 있다.

## textarea

### `component.textarea.1`

- **tier**: 공통
- **automation**: static (`form-label-binding`)
- **spec**: [specs/components/textarea.md](../../specs/components/textarea.md)
- 텍스트 영역에 레이블을 제공하고 있다.

### `component.textarea.2`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/textarea.md](../../specs/components/textarea.md)
- 텍스트 영역의 레이블이나 도움말을 플레이스홀더로 제공하지 않고 있다.

### `component.textarea.3`

- **tier**: 공통
- **automation**: manual
- **spec**: [specs/components/textarea.md](../../specs/components/textarea.md)
- 텍스트 영역에 복사 및 붙여넣기 기능을 사용할 수 있다.

### `component.textarea.4`

- **tier**: 공통
- **automation**: static
- **spec**: [specs/components/textarea.md](../../specs/components/textarea.md)
- 텍스트 영역에 입력 가능한 글자 수의 제한이 있는 경우 사용자에게 글자 수 정보를 제공하고 있다.

### `component.textarea.5`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/textarea.md](../../specs/components/textarea.md)
- 텍스트 영역에서 데이터 입력에 대한 상호작용을 적절하게 구현하고 있다.

### `component.textarea.6`

- **tier**: 공통
- **automation**: browser
- **spec**: [specs/components/textarea.md](../../specs/components/textarea.md)
- 텍스트 영역에서 스크롤에 대한 상호작용을 적절하게 구현하고 있다.
