# Login Pattern

KRDS 서비스 패턴: 로그인

## Reference

- [KRDS 서비스 패턴 - 로그인](https://www.krds.go.kr/html/site/pattern/pattern05.html)
- Component: `assets/krds/html/code/text_input.html`, `button.html`

## Structure

```html
<main id="content">
  <h1>로그인</h1>
  <form class="krds-form">
    <div class="field">
      <label for="user-id">아이디</label>
      <input id="user-id" class="krds-input" type="text" autocomplete="username" />
    </div>
    <div class="field">
      <label for="password">비밀번호</label>
      <input id="password" class="krds-input" type="password" autocomplete="current-password" />
    </div>
    <button type="submit" class="krds-btn primary">로그인</button>
  </form>
</main>
```

## Accessibility

- label-input binding 필수
- autocomplete 속성 제공
- 오류 메시지는 `role="alert"` 또는 `aria-live="polite"`

## Tailwind

```html
<form class="krds-form max-w-md mx-auto space-y-4">
  <!-- specs/tokens.md 토큰 + krds- 클래스 -->
</form>
```
