# Application Pattern

KRDS 서비스 패턴: 신청

## Page Context Tree

```text
main#content
├── section (step_indicator)     ← 1단계: 절차 안내
│   └── ol.steps
├── section (form)               ← 2~3단계: 입력
│   └── form.krds-form
│       ├── fieldset (약관 동의)
│       ├── .field × N
│       └── button.krds-btn.primary "다음"
└── section (confirm)            ← 4단계: 확인·완료
    └── structured_list (요약)
```

**단계 흐름**: 약관 동의 → 정보 입력 → 확인 → 완료

## Reference

- [KRDS 서비스 패턴 - 신청](https://www.krds.go.kr/html/site/pattern/pattern04.html)

## Structure

Multi-step form with step indicator:

```html
<section data-krds-component="step_indicator">
  <h2>신청 절차</h2>
  <ol class="steps">
    <li><span>1</span>약관 동의</li>
    <li><span>2</span>정보 입력</li>
    <li><span>3</span>확인</li>
    <li><span>4</span>완료</li>
  </ol>
</section>

<form class="krds-form">
  <!-- fields with label binding -->
  <button type="submit" class="krds-btn primary">다음</button>
</form>
```

## Accessibility

- step indicator with current step marked (`aria-current="step"`)
- validation errors linked via `aria-describedby`
