# KRDS Design Tokens

에이전트는 아래 토큰 키를 사용하세요. **임의 hex 값을 만들지 마세요.**

원본 CSS: `assets/krds/resources/css/token/krds_tokens.css`

## Token Tree

```text
KRDS Tokens
├── color
│   ├── text
│   │   ├── primary      #1e2124
│   │   ├── secondary    #58616a
│   │   └── disabled     #8a949e
│   ├── surface
│   │   ├── default      #ffffff
│   │   └── subtle       #f4f5f6
│   ├── border
│   │   └── default      #cdd1d5
│   ├── action
│   │   ├── primary      #256ef4
│   │   └── primary-hover #0b50d0
│   └── status
│       ├── danger       #de3412
│       ├── success      #228738
│       ├── warning      #9e6a00
│       └── info         #0b78cb
├── typography
│   ├── font.family.base
│   ├── pc.heading (xlarge/large/medium)
│   ├── pc.body (large/medium/small)
│   └── pc.label (medium/small)
├── spacing (8px rhythm)
│   └── 1(4px) → 2(8px) → 4(16px) → 6(24px) → 10(40px)
└── radius
    ├── sm (4px)
    ├── md (8px)
    ├── lg (12px)
    └── full (9999px)
```

## 왜 에이전트가 hex를 만들면 안 되나

1. **일관성**: KRDS는 74개 컴포넌트가 동일 토큰을 공유합니다. 임의 hex는 컴포넌트 간 색상 불일치를 만듭니다.
2. **접근성**: semantic token은 WCAG 대비를 전제로 설계되었습니다.
3. **검증**: `krds-similarity.mjs`는 `krds-` 클래스 사용을 확인하지, 임의 색상은 감지하지 못합니다.
4. **유지보수**: 토큰 키(`color.action.primary`)는 다크모드·테마 변경 시 일괄 교체 가능합니다.

## Semantic Colors (Light Mode)

| Token Key | CSS Variable | Hex | 용도 |
|-----------|--------------|-----|------|
| `color.text.primary` | `--krds-color-light-gray-90` | `#1e2124` | 본문·제목 |
| `color.text.secondary` | `--krds-color-light-gray-60` | `#58616a` | 보조 텍스트 |
| `color.text.disabled` | `--krds-color-light-gray-40` | `#8a949e` | 비활성 |
| `color.surface.default` | `--krds-color-light-gray-0` | `#ffffff` | 기본 배경 |
| `color.surface.subtle` | `--krds-color-light-gray-5` | `#f4f5f6` | 섹션 배경 |
| `color.border.default` | `--krds-color-light-gray-20` | `#cdd1d5` | 테두리 |
| `color.action.primary` | `--krds-color-light-primary-50` | `#256ef4` | 주요 액션 |
| `color.action.primary-hover` | `--krds-color-light-primary-60` | `#0b50d0` | 주요 액션 hover |
| `color.status.danger` | `--krds-color-light-danger-50` | `#de3412` | 오류·위험 |
| `color.status.success` | `--krds-color-light-success-50` | `#228738` | 성공 |
| `color.status.warning` | `--krds-color-light-warning-50` | `#9e6a00` | 경고 |
| `color.status.info` | `--krds-color-light-information-50` | `#0b78cb` | 정보 |

## Typography

| Token Key | Value | 용도 |
|-----------|-------|------|
| `font.family.base` | Pretendard GOV, Pretendard, Noto Sans KR, sans-serif | 전체 |
| `typography.pc.heading.xlarge` | 40px / 700 / 1.3 | 페이지 h1 |
| `typography.pc.heading.large` | 32px / 700 / 1.3 | 섹션 h2 |
| `typography.pc.heading.medium` | 24px / 700 / 1.4 | h3 |
| `typography.pc.body.large` | 19px / 400 / 1.6 | 리드 문단 |
| `typography.pc.body.medium` | 17px / 400 / 1.6 | 본문 |
| `typography.pc.body.small` | 15px / 400 / 1.5 | 보조 |
| `typography.pc.label.medium` | 17px / 500 / 1.4 | 폼 라벨 |
| `typography.pc.label.small` | 15px / 500 / 1.4 | 캡션 |

## Spacing (8px rhythm)

| Token Key | Value |
|-----------|-------|
| `spacing.1` | 4px |
| `spacing.2` | 8px |
| `spacing.3` | 12px |
| `spacing.4` | 16px |
| `spacing.5` | 20px |
| `spacing.6` | 24px |
| `spacing.8` | 32px |
| `spacing.10` | 40px |

## Border Radius

| Token Key | Value |
|-----------|-------|
| `radius.sm` | 4px |
| `radius.md` | 8px |
| `radius.lg` | 12px |
| `radius.full` | 9999px |

## Tailwind Mapping

`templates/tailwind-theme.css`에 `@theme` 블록으로 매핑되어 있습니다.

```html
<button class="bg-krds-primary text-white rounded-krds-sm px-4 py-3 font-bold">
  신청하기
</button>
```

## HTML/CSS Mapping

```css
.krds-btn.primary {
  background: var(--krds-color-light-primary-50);
  color: var(--krds-color-light-gray-0);
  border-radius: 4px;
}
```

## 참고

- [gracefullight/krds-tokens](https://github.com/gracefullight/krds/tree/main/packages/krds-tokens)
- [KRDS 디자인 토큰](https://www.krds.go.kr/html/site/style/style02.html)
