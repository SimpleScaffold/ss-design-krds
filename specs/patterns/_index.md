# KRDS 패턴 인덱스

## 기본 패턴 (공식 가이드)

KRDS `global_01`~`global_13` 본문은 [`docs/patterns/`](../../docs/patterns/index.md)에 있습니다.

| 패턴 | 문서 | 체크리스트 subcategory |
| --- | --- | --- |
| 개인 식별 정보 입력 | [docs/patterns/개인-식별-정보-입력.md](../../docs/patterns/개인-식별-정보-입력.md) | `pii` (22항) |
| 입력 폼 | [docs/patterns/입력-폼.md](../../docs/patterns/입력-폼.md) | `form` (11항) |
| 첨부파일 | [docs/patterns/첨부파일.md](../../docs/patterns/첨부파일.md) | `attachment` (3항) |
| 필터링·정렬 | [docs/patterns/필터링-정렬.md](../../docs/patterns/필터링-정렬.md) | `filter-sort` (11항) |
| 도움 | [docs/patterns/도움.md](../../docs/patterns/도움.md) | — |
| 동의 | [docs/patterns/동의.md](../../docs/patterns/동의.md) | — |
| 목록 탐색 | [docs/patterns/목록-탐색.md](../../docs/patterns/목록-탐색.md) | — |
| 사용자 피드백 | [docs/patterns/사용자-피드백.md](../../docs/patterns/사용자-피드백.md) | — |
| 상세 정보 확인 | [docs/patterns/상세-정보-확인.md](../../docs/patterns/상세-정보-확인.md) | — |
| 오류 | [docs/patterns/오류.md](../../docs/patterns/오류.md) | — |
| 확인 | [docs/patterns/확인.md](../../docs/patterns/확인.md) | — |
| 모바일 알림 | [docs/patterns/모바일-알림.md](../../docs/patterns/모바일-알림.md) | — |
| 모바일 설정 | [docs/patterns/모바일-설정.md](../../docs/patterns/모바일-설정.md) | — |

검증 기준: [specs/validation/pattern.basic.md](../validation/pattern.basic.md)

## 서비스 패턴 (구현 스펙)

| 패턴 | 문서 | 용도 |
| --- | --- | --- |
| 신청 | [application.md](./application.md) | 다단계 신청 폼 |
| 검색 | [search.md](./search.md) | 검색·필터 결과 |
| 로그인 | [login.md](./login.md) | 로그인 폼 |

서비스 패턴 체크리스트: [specs/validation/pattern.service.md](../validation/pattern.service.md)
