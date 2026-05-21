# Footer (`footer`)

> **Category**: Layout (레이아웃 및 표현)
> **Parent**: —
> **Variants**: —
> **Source**: `assets/krds/html/code/footer.html`

## Overview

페이지 하단 푸터 영역입니다. 링크, 저작권, 연락처를 포함합니다.

## Component Tree

```text
footer (기본)
```

## Tokens

- `specs/tokens.md` 참조 — **임의 hex/폰트 금지**
- Action 계열: `color.action.primary` (`#256ef4`)
- Surface: `color.surface.subtle` (`#f4f5f6`)

## HTML (official)

```html
<!-- footer -->
<footer id="krds-footer">
	<div class="foot-quick">
		<div class="inner">
			<button type="button" class="link" title="related_site 레이어">related_site</button>
			<button type="button" class="link" title="related_site 레이어">related_site</button>
			<button type="button" class="link" title="related_site 레이어">related_site</button>
			<button type="button" class="link" title="related_site 레이어">related_site</button>
		</div>
	</div>
	<div class="inner">
		<div class="f-logo">
			<span class="sr-only">KRDS - Korea Design System</span>
		</div>
		<div class="f-cnt">
			<div class="f-info">
				<p class="info-addr">(26464) 강원특별자치도 원주시 건강로 32(반곡동) 국민건강보험공단</p>
				<ul class="info-cs">
					<li><strong class="strong">대표전화 1577-1000</strong><span class="span">(유료, 평일 09시~18시)</span></li>
					<li><strong class="strong">해외이용 82-33-811-2001</strong><span class="span">(유료, 평일 09시~18시)</span></li>
				</ul>
			</div>
			
			<div class="f-link">
				<div class="link-go">
					<a href="#" class="krds-btn medium text">찾아오시는 길 <i class="svg-icon ico-angle right"></i></a>
					<a href="#" class="krds-btn medium text">이용안내 <i class="svg-icon ico-angle right"></i></a>
					<a href="#" cla
<!-- truncated at 1200 chars -->
```

## Tailwind

```html
<!-- @simplescaffold/krds-tailwind + official krds- classes -->
<footer id="krds-footer" class="font-krds max-w-7xl" data-krds-component="footer">
	<div class="foot-quick">
		<div class="inner">
			<button type="button" class="link" title="related_site 레이어">related_site</button>
			<button type="button" class="link" title="related_site 레이어">related_site</button>
			<button type="button" class="link" title="related_site 레이어">related_site</button>
			<button type="button" class="link" title="related_site 레이어">related_site</button>
		</div>
	</div>
	<div class="inner">
		<div class="f-logo">
			<span class="sr-only">KRDS - Korea Design System</span>
		</div>
		<div class="f-cnt">
			<div class="f-info">
				<p class="info-addr">(26464) 강원특별자치도 원주시 건강로 32(반곡동) 국민건강보험공단</p>
				<ul class="info-cs">
					<li><strong class="strong">대표전화 1577-1000</strong><span class="span">(유료, 평일 09시~18시)</span></li>
					<li><strong class="strong">해외이용 82-33-811-2001</strong><span class="span">(유료, 평일 09시~18시)</span></li>
				</ul>
			</div>
			
			<div class="f-link">
				<div class="link-go">
					<a href="#" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">찾아오시는 길 <i class="svg-icon ico-angle right"></i></a>
					<a href="#" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">이용안내 <i class="svg-icon ico-angle right"></i></a>
					<a href="#" class="krds-btn medium text inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 border text-krds-body-md border-0 bg-transparent">직원검색 <i class="svg-icon ico-angle right"></i></a>
				</div>
				<div class="link-sns">
					<a href="#" class="krds-btn xlarge icon border inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 w-11 p-0" target="_blank" title="새 창 열기">
						<span class="sr-only">인스타그램</span>
						<i class="svg-icon ico-instagram"></i>
					</a>
					<a href="#" class="krds-btn xlarge icon border inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 w-11 p-0" target="_blank" title="새 창 열기">
						<span class="sr-only">유튜브</span>
						<i class="svg-icon ico-youtube"></i>
					</a>
					<a href="#" class="krds-btn xlarge icon border inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 w-11 p-0" target="_blank" title="새 창 열기">
						<span class="sr-only">X</span>
						<i class="svg-icon ico-sns-x"></i>
					</a>
					<a href="#" class="krds-btn xlarge icon border inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 w-11 p-0" target="_blank" title="새 창 열기">
						<span class="sr-only">페이스북</span>
						<i class="svg-icon ico-facebook"></i>
					</a>
					<a href="#" class="krds-btn xlarge icon border inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold transition-colors min-h-[42px] px-krds-4 py-krds-3 w-11 p-0" target="_blank" title="새 창 열기">
						<span class="sr-only">블로그</span>
						<i class="svg-icon ico-blog"></i>
					</a>
				</div>
			</div>
		</div>
		
		<div class="f-btm">
			<div class="f-btm-text">
				<div class="f-menu">
					<a href="#" class="point">개인정보처리방침</a>
					<a href="#">저작권 정책</a>
					<a href="#">웹 접근성 품질인증 마크 획득</a>
				</div>
				<p class="f-copy">© 2023 National Health Insurance Service. All rights reserved.</p>
			</div>
			<div class="krds-identifier font-krds text-krds-primary font-bold tracking-widest text-krds-label-sm">
				<span class="logo">
					<span class="sr-only">KRDS - Korea Design System</span>
				</span>
				<span class="ban-txt">이 누리집은 보건복지부 누리집입니다.</span>
			</div>
		</div>
	</div>
</footer>
```

## Page Context

페이지 트리상 위치: `#krds-footer (footer landmark)`

전체 DOM 계층: [docs/page-structure-tree.md](../../docs/page-structure-tree.md)

## Accessibility

- [specs/accessibility.md](../accessibility.md) 게이트 준수
- label-input `for`/`id` 바인딩 (input 계열)
- icon-only button → `sr-only` 텍스트 필수
- table → `thead`/`tbody`/`caption` semantic

## Related

- [link.md](./link.md)
- [identifier.md](./identifier.md)

## Do / Don't

**Do**
- 공식 HTML 구조·`krds-` 클래스 유지
- `data-krds-component="footer"` / `data-krds-reference="assets/krds/html/code/footer.html"` 출처 추적

**Don't**
- krds- 접두사 없이 generic Bootstrap/Material 클래스만 사용
- 토큰 없이 임의 색상·폰트 지정
