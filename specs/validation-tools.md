# KRDS 검증 도구 활용

> 자체 검증 체크리스트 부록 «도구 활용 방법» 요약

## Chrome DevTools

- **Elements**: DOM 구조, landmark, `label[for]` 바인딩 확인
- **Computed**: `font-size`, `font-family`, `line-height`, `color`, `border-radius`
- **CSS overview**: Primary/Gray 팔레트 hex vs [specs/tokens.md](./tokens.md)

## 명도 대비

- 텍스트·UI 컴포넌트 대비 **3:1** 이상 (WCAG 기준)
- L2 browser 러너: `krds-checklist-browser.mjs` contrast 검사

## 키보드 (Tab)

- Skip link → Enter/Space로 본문 이동
- 메뉴·버튼 Tab 순서 및 focus-visible 상태

## 반응형 (768px)

- DevTools device toolbar 768px
- 푸터 순서, breadcrumb 축약, side menu 숨김 등

## 자동화 매핑

| 도구 | automation.level |
|------|------------------|
| HTML/DOM 정적 분석 | `static` (L1) |
| Playwright computed style·키보드·뷰포트 | `browser` (L2) |
| 콘텐츠·플로우·정성 | `manual` (L3) |

설치 (WSL/CI):

```bash
npm install
npx playwright install chromium
```
