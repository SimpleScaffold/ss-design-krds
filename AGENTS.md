# AGENTS.md

일반 AI 에이전트가 이 저장소를 다룰 때의 진입점입니다. KRDS UI 작업을 시작하기 전에 **반드시 적절한 skill을 먼저 읽고** 전체 워크플로와 규칙을 따르세요.

## 프로젝트 개요

ss-design-krds는 AI 에이전트(Claude, Cursor 등)가 [KRDS(Korea Design System)](https://www.krds.go.kr/html/site/index.html) 규칙을 읽고 HTML/CSS·Tailwind 어디에든 적용할 수 있도록 만든 **스킬·스펙·검증 패키지**입니다.

**핵심 파이프라인**: `krds-plan → 구현 → krds-improve` (기존 UI는 `krds-transform`으로 시작)

## 실행 시 반드시

- **신규 UI**: `skills/krds-plan/SKILL.md` 읽기
- **기존 UI 전환**: `skills/krds-transform/SKILL.md` 읽기
- **품질 개선**: `skills/krds-improve/SKILL.md` 읽기
- **토큰·컴포넌트**: `specs/` 우선, HTML 원본은 `assets/krds/html/code/` 참조
- **완료 후 검증**: `node scripts/krds-similarity.mjs --target <파일>` — score ≥ 95

## 금지 사항

- `specs/tokens.md` 토큰 없이 임의 hex/폰트 사용
- skip-link, landmark, label-input 바인딩 생략
- KRDS 클래스 없이 generic Bootstrap/Material 스타일만 사용

## 필수 DOM 구조

```html
<div id="wrap" class="g-wrap">
  <div id="krds-skip-link"><a href="#content">본문 바로가기</a></div>
  <div id="krds-masthead">...</div>
  <header id="krds-header" class="krds-header">...</header>
  <div id="container">
    <main id="content">...</main>
  </div>
  <footer id="krds-footer">...</footer>
</div>
```

## 자주 쓰는 명령

```bash
# 컴포넌트 MD 스켈레톤 생성
npm run krds:index

# 샘플 페이지 빌드
npm run krds:build-sample

# 유사도 점수 (≥ 95 통과)
node scripts/krds-similarity.mjs --target experiment/sample-page/index.html

# 컴포넌트 커버리지 (74/74)
npm run krds:coverage

# 전체 검증
npm run krds:validate

# 개선 루프
npm run krds:improve
```

## 주요 디렉터리

| 경로 | 용도 |
|------|------|
| `skills/krds-*/SKILL.md` | plan / transform / improve 워크플로 |
| `specs/` | 토큰·컴포넌트·패턴 MD 스펙 (범용) |
| `assets/krds/html/code/` | 공식 HTML 컴포넌트 74개 (작업용) |
| `references/krds/` | 읽기 전용 미러 (lookup) |
| `references/` | React/Tailwind 등 외부 스택 요약 |
| `scripts/` | 검증·점수·인덱스 생성 |
| `templates/` | 소비 프로젝트 부트스트랩 |
| `experiment/sample-page/` | 참조 구현 (HTML + Tailwind) |

## 다른 스킬과의 관계

- 이 저장소는 **앱 뼈대가 아니라 워크플로/스킬 패키지**입니다.
- 일반 코딩 스킬과 충돌하면 이 저장소 안에서는 **본 파일과 해당 KRDS skill**을 우선합니다.

## 소비 프로젝트에서 사용

```bash
# Git submodule
git submodule add https://github.com/SimpleScaffold/ss-design-krds.git .krds

# Skills 복사
cp -R .krds/skills/krds-* ~/.cursor/skills/

# 또는
npx skills add SimpleScaffold/ss-design-krds
```

자세한 설치 방법은 `README.ko.md`를 참조하세요.
