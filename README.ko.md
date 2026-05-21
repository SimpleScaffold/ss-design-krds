# ss-design-krds

AI 에이전트(Claude, Cursor 등)가 [KRDS(Korea Design System)](https://www.krds.go.kr/html/site/index.html) 규칙을 읽고 HTML/CSS·Tailwind 어디에든 적용할 수 있는 **스킬·스펙·검증 패키지**입니다.

[English](README.md)

## 무엇인가요?

ss-design-krds는 [KRDS HTML Component Kit](https://github.com/KRDS-uiux/krds-uiux)을 AI 에이전트 워크플로로 변환한 패키지입니다.

1. **`krds-plan`** — 처음부터 KRDS UI 설계
2. **`krds-transform`** — 기존 UI를 KRDS 규칙으로 전환
3. **`krds-improve`** — 규칙 검증 후 score ≥ 95까지 반복 개선

74개 HTML 컴포넌트, Markdown 스펙(HTML + Tailwind 예시), 기계 검증 스크립트를 포함합니다.

## 설치

### Git submodule (팀/장기 프로젝트)

```bash
git submodule add https://github.com/SimpleScaffold/ss-design-krds.git .krds
```

프로젝트 `CLAUDE.md`에 `templates/consumer-CLAUDE.md.snippet` 내용을 포함하세요.

### Cursor / Codex skills

```bash
cp -R ss-design-krds/skills/krds-* ~/.cursor/skills/
# 또는
npx skills add SimpleScaffold/ss-design-krds
```

### npm 검증 (CI)

```json
{
  "devDependencies": {
    "ss-design-krds": "github:SimpleScaffold/ss-design-krds"
  },
  "scripts": {
    "krds:score": "node node_modules/ss-design-krds/scripts/krds-similarity.mjs --target ./public/index.html"
  }
}
```

### 원클릭 설치

```bash
./templates/install.sh
```

## 사용법

```
# 신규 KRDS 페이지 설계
krds-plan 스킬을 사용해 공공 서비스 랜딩 페이지를 설계해 주세요.

# 기존 UI 전환
krds-transform으로 이 페이지를 KRDS 규칙에 맞게 바꿔 주세요. 동작은 유지하세요.

# 품질 개선
krds-improve로 score 95 이상, failed rules 0까지 개선해 주세요.
```

## 검증

```bash
npm run krds:score      # 유사도 점수 (기준: 95)
npm run krds:coverage   # 컴포넌트 참조 커버리지
npm run krds:validate   # 저장소 전체 검증
npm run krds:improve    # 반복 개선 루프
```

## 디렉터리 구조

```
skills/          에이전트 워크플로 (plan, transform, improve)
specs/           Markdown 스펙 (토큰, 컴포넌트, 패턴)
assets/krds/     KRDS-uiux HTML/CSS 벤더 (74개 컴포넌트)
scripts/         검증 하네스
templates/       소비 프로젝트 부트스트랩
experiment/      참조 구현
```

## 참고 자료

- [KRDS 공식](https://www.krds.go.kr/html/site/index.html)
- [KRDS-uiux](https://github.com/KRDS-uiux/krds-uiux) — HTML Component Kit (벤더됨)
- [krds-react](https://github.com/KRDS-community/krds-react) — React 라이브러리 참고
- [future-krds](https://github.com/bytonylee/future-krds) — 검증 하네스 참고
- [gracefullight/krds](https://github.com/gracefullight/krds) — 토큰 패키지 참고

## 라이선스

Apache-2.0. KRDS 자산은 [KRDS 저작권 정책](https://www.krds.go.kr/html/site/utility/copyright.html)을 따릅니다.
