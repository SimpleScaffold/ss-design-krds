# Search Pattern

KRDS 서비스 패턴: 검색

## Reference

- [KRDS 서비스 패턴 - 검색](https://www.krds.go.kr/html/site/pattern/pattern02.html)

## Structure

```html
<form role="search" aria-label="통합 검색">
  <label for="search-query" class="sr-only">검색어</label>
  <input id="search-query" class="krds-input" type="search" placeholder="검색어를 입력하세요" />
  <button type="submit" class="krds-btn primary">검색</button>
</form>
```

## Accessibility

- `role="search"` on form
- visible or sr-only label
- search results: `aria-live="polite"` for dynamic updates
