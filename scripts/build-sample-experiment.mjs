#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const componentRoot = 'assets/krds/html/code';
const outDir = path.join(root, 'experiment/sample-page');

const files = (await fs.readdir(path.join(root, componentRoot)))
  .filter((file) => file.endsWith('.html'))
  .sort();

const titleize = (name) => name
  .replace(/\.html$/, '')
  .replace(/_/g, ' ')
  .replace(/\b\w/g, (m) => m.toUpperCase());

const componentCards = files.map((file) => {
  const name = file.replace(/\.html$/, '');
  return `          <li class="component-card border border-krds-border rounded-krds-md p-krds-4 bg-krds-surface-subtle" data-krds-component="${name}" data-krds-reference="${componentRoot}/${file}">
            <span class="krds-badge small inline-flex items-center font-krds text-krds-text rounded-krds-full font-bold px-krds-4 py-krds-1">${name}</span>
            <strong class="block mt-krds-2 font-krds text-krds-text">${titleize(file)}</strong>
            <a href="#order" class="krds-link font-krds text-krds-primary underline underline-offset-2">적용 위치 보기</a>
          </li>`;
}).join('\n');

function buildBodyContent() {
  return `
  <div id="wrap" class="g-wrap max-w-[1180px] mx-auto bg-krds-surface min-h-screen font-krds text-krds-text">
    <div id="krds-skip-link"><a href="#content" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:bg-krds-surface focus:border-2 focus:border-krds-primary focus:p-krds-4">본문 바로가기</a></div>

    <div id="krds-masthead" class="bg-krds-surface-subtle border-b border-krds-border font-krds text-krds-secondary text-krds-body-sm" data-krds-component="masthead">
      <div class="inner flex justify-between items-center gap-krds-4 p-krds-4 px-krds-6">
        <span class="nuri-txt">이 누리집은 대한민국 공식 전자정부 누리집입니다. KRDS Tailwind 패키지 샘플입니다.</span>
        <button type="button" class="krds-btn xsmall text toggle-btn inline-flex items-center justify-center font-krds text-krds-text rounded-krds-sm font-bold min-h-[30px] px-krds-2 py-krds-1 border-0 bg-transparent">
          공식 누리집 확인방법 <span aria-hidden="true">⌄</span><span class="sr-only">열기</span>
        </button>
      </div>
    </div>

    <header id="krds-header" class="krds-header flex flex-wrap justify-between gap-krds-6 p-krds-6 px-krds-6 border-b border-krds-border font-krds text-krds-text bg-krds-surface" data-krds-component="header">
      <div class="header-brand">
        <p class="identifier font-krds text-krds-primary font-bold tracking-widest text-krds-label-sm" data-krds-component="identifier">KRDS PUBLIC SERVICE</p>
        <h1 class="text-krds-heading-xl font-bold tracking-tight m-0">공공 서비스 안내</h1>
        <p class="text-krds-secondary mt-krds-2">국민 누구나 디지털 정부 서비스를 쉽게 이용할 수 있도록 KRDS + Tailwind 규칙을 적용한 샘플 페이지입니다.</p>
      </div>
      <nav aria-label="주요 메뉴" data-krds-component="main_menu_pc">
        <ul class="menu-list list-none flex gap-krds-4 m-0 p-0 font-bold">
          <li><a href="#products" class="text-krds-primary">서비스</a></li>
          <li><a href="#benefits" class="text-krds-primary">특징</a></li>
          <li><a href="#order" class="text-krds-primary">신청</a></li>
          <li><a href="#coverage" class="text-krds-primary">KRDS 적용</a></li>
        </ul>
      </nav>
      <div class="mobile-menu-note hidden md:block text-krds-secondary" data-krds-component="main_menu_mobile">모바일 메뉴 대응</div>
    </header>

    <div id="container">
      <main id="content">
        <nav class="breadcrumb font-krds text-krds-secondary text-krds-body-sm flex flex-wrap gap-krds-2 px-krds-6 pt-krds-4" aria-label="현재 위치" data-krds-component="breadcrumb">
          <ol class="list-none flex gap-krds-2 m-0 p-0">
            <li><a href="#" class="text-krds-primary">홈</a></li>
            <li><a href="#products" class="text-krds-primary">서비스</a></li>
            <li aria-current="page">안내</li>
          </ol>
        </nav>

        <section id="hero" class="hero section grid lg:grid-cols-[1.25fr_0.75fr] gap-krds-6 items-center p-krds-6 px-krds-6 border-b border-krds-border" data-krds-component="carousel_banner">
          <div class="hero-copy">
            <span class="krds-badge inline-flex items-center font-krds text-krds-text rounded-krds-full font-bold px-krds-4 py-krds-1 bg-krds-surface-subtle text-krds-info" data-krds-component="badge">KRDS Tailwind</span>
            <h2 class="text-krds-heading-xl font-bold leading-tight tracking-tight mt-krds-4 mb-krds-4">모두를 위한 디지털 서비스 경험</h2>
            <p class="text-krds-secondary text-krds-body-lg max-w-2xl">서비스 소개, 신청, 비교표, 상태 안내를 KRDS HTML + Tailwind 유틸리티로 구성했습니다.</p>
            <div class="button-row flex flex-wrap gap-krds-2 mt-krds-4" data-krds-component="button_hierarchy">
              <a class="krds-btn primary inline-flex items-center justify-center font-krds rounded-krds-sm font-bold min-h-[42px] px-krds-4 py-krds-3 border bg-krds-primary text-white border-krds-primary" href="#order" data-krds-component="button">서비스 신청</a>
              <a class="krds-btn secondary inline-flex items-center justify-center font-krds rounded-krds-sm font-bold min-h-[42px] px-krds-4 py-krds-3 border bg-krds-surface text-krds-primary border-krds-primary" href="#products" data-krds-component="button_text">서비스 보기</a>
              <button type="button" class="krds-btn icon inline-flex items-center justify-center font-krds rounded-krds-sm font-bold w-11 p-0 border" data-krds-component="button_icon">
                <span aria-hidden="true">?</span><span class="sr-only">서비스 이용 도움말</span>
              </button>
            </div>
          </div>
          <div class="product-panel min-h-[420px] border border-krds-border rounded-krds-lg bg-krds-surface-subtle grid place-items-center relative overflow-hidden" role="img" aria-label="맑은손 핸드솝 제품 패키지 일러스트레이션">
            <img class="product-image max-w-[220px]" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 320'%3E%3Crect x='70' y='20' width='80' height='40' rx='8' fill='%23256ef4'/%3E%3Crect x='40' y='58' width='140' height='220' rx='30' fill='%23ffffff' stroke='%23cdd1d5' stroke-width='6'/%3E%3Ctext x='110' y='180' text-anchor='middle' font-size='38' font-family='Arial' font-weight='700' fill='%230b50d0'%3ESOAP%3C/text%3E%3C/svg%3E" alt="맑은손 핸드솝 제품 용기" />
            <p class="tag absolute bottom-krds-4 font-krds text-krds-secondary" data-krds-component="tag">무향 · 시트러스 · 리필형</p>
          </div>
        </section>

        <aside class="critical-alert font-krds p-krds-4 mx-krds-6 my-krds-4 rounded-krds-md border border-krds-warning bg-krds-surface-subtle" role="status" data-krds-component="critical_alerts">
          <strong>배송 안내</strong> 대량 구매는 영업일 기준 3일 내 출고되며 긴급 납품은 상담이 필요합니다.
        </aside>

        <section id="products" class="section two-column grid md:grid-cols-2 gap-krds-6 p-krds-6 px-krds-6 border-b border-krds-border">
          <div>
            <h2 class="text-krds-heading-lg font-bold">상품 라인업</h2>
            <p class="text-krds-secondary">용량, 향, 리필 여부를 비교하고 필요한 제품을 선택하세요.</p>
            <table class="krds-table w-full font-krds text-krds-text border-collapse mt-krds-4" aria-label="상품 가격표" data-krds-component="table">
              <caption class="sr-only">핸드솝 상품 가격표</caption>
              <thead>
                <tr><th scope="col">상품명</th><th scope="col">용량</th><th scope="col">가격</th><th scope="col">상태</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">데일리 솝</th><td>500ml</td><td>6,900원</td><td><span class="krds-badge success inline-flex items-center font-krds rounded-krds-full font-bold px-krds-4 py-krds-1 text-krds-success" data-krds-component="badge_number">재고 42</span></td></tr>
                <tr><th scope="row">패밀리 솝</th><td>1L</td><td>11,900원</td><td><span class="krds-badge inline-flex items-center font-krds text-krds-text rounded-krds-full font-bold px-krds-4 py-krds-1" data-krds-component="badge_size">추천</span></td></tr>
              </tbody>
            </table>
          </div>
          <div class="structured-list font-krds grid gap-krds-4 p-krds-4 bg-krds-surface-subtle rounded-krds-md" data-krds-component="structured_list">
            <h3 class="font-bold">구매 기준</h3>
            <dl class="grid gap-krds-2">
              <div><dt class="font-bold">피부 타입</dt><dd class="text-krds-secondary">저자극 테스트 완료</dd></div>
              <div><dt class="font-bold">패키지</dt><dd class="text-krds-secondary">재활용 용기 및 리필 파우치</dd></div>
              <div><dt class="font-bold">납품</dt><dd class="text-krds-secondary">기관별 정기배송 지원</dd></div>
            </dl>
          </div>
        </section>

        <section id="benefits" class="section p-krds-6 px-krds-6 border-b border-krds-border font-krds" data-krds-component="tab">
          <div class="section-head mb-krds-4">
            <h2 class="text-krds-heading-lg font-bold">핵심 특징</h2>
            <p class="tooltip text-krds-secondary text-krds-body-sm" data-krds-component="tooltip">성분, 납품, 사후관리 정보를 탭 형태로 비교합니다.</p>
          </div>
          <div class="tab-list flex gap-krds-2 mb-krds-4" role="tablist" aria-label="핸드솝 특징">
            <button type="button" class="krds-btn tertiary active inline-flex items-center justify-center font-krds rounded-krds-sm font-bold min-h-[42px] px-krds-4 py-krds-3 border bg-krds-surface text-krds-text border-krds-border" role="tab" aria-selected="true">성분</button>
            <button type="button" class="krds-btn tertiary inline-flex items-center justify-center font-krds rounded-krds-sm font-bold min-h-[42px] px-krds-4 py-krds-3 border bg-krds-surface text-krds-text border-krds-border" role="tab" aria-selected="false">납품</button>
            <button type="button" class="krds-btn tertiary inline-flex items-center justify-center font-krds rounded-krds-sm font-bold min-h-[42px] px-krds-4 py-krds-3 border bg-krds-surface text-krds-text border-krds-border" role="tab" aria-selected="false">관리</button>
          </div>
          <ul class="feature-grid grid md:grid-cols-3 gap-krds-4 list-none p-0" data-krds-component="text_list">
            <li class="p-krds-4 border border-krds-border rounded-krds-md"><strong class="block">저자극</strong><span class="text-krds-secondary">식물 유래 세정 성분을 중심으로 구성했습니다.</span></li>
            <li class="p-krds-4 border border-krds-border rounded-krds-md"><strong class="block">리필 가능</strong><span class="text-krds-secondary">운영 비용과 플라스틱 사용량을 줄입니다.</span></li>
            <li class="p-krds-4 border border-krds-border rounded-krds-md"><strong class="block">기관 납품</strong><span class="text-krds-secondary">월별 사용량에 맞춘 정기 공급을 제공합니다.</span></li>
          </ul>
        </section>

        <section class="section process p-krds-6 px-krds-6 border-b border-krds-border font-krds" data-krds-component="step_indicator">
          <h2 class="text-krds-heading-lg font-bold">구매 절차</h2>
          <ol class="steps flex flex-wrap gap-krds-4 list-none p-0" data-krds-component="text_list_ordered">
            <li class="flex items-center gap-krds-2"><span class="inline-flex w-8 h-8 items-center justify-center rounded-krds-full bg-krds-primary text-white font-bold">1</span>상품 선택</li>
            <li class="flex items-center gap-krds-2"><span class="inline-flex w-8 h-8 items-center justify-center rounded-krds-full bg-krds-primary text-white font-bold">2</span>견적 요청</li>
            <li class="flex items-center gap-krds-2"><span class="inline-flex w-8 h-8 items-center justify-center rounded-krds-full bg-krds-primary text-white font-bold">3</span>수량 확정</li>
            <li class="flex items-center gap-krds-2"><span class="inline-flex w-8 h-8 items-center justify-center rounded-krds-full bg-krds-primary text-white font-bold">4</span>정기 배송</li>
          </ol>
        </section>

        <section id="order" class="section form-section grid md:grid-cols-2 gap-krds-6 p-krds-6 px-krds-6 border-b border-krds-border">
          <div>
            <h2 class="text-krds-heading-lg font-bold">견적 요청</h2>
            <p class="context-help font-krds text-krds-secondary p-krds-4 bg-krds-surface-subtle rounded-krds-md mt-krds-2" data-krds-component="contextual_help">기관명과 예상 수량을 남기면 담당자가 상품 구성을 제안합니다.</p>
          </div>
          <form class="krds-form flex flex-col gap-krds-4 font-krds max-w-2xl" action="#" method="post" data-krds-component="text_input">
            <div class="field flex flex-col gap-krds-2">
              <label for="org" class="font-medium">기관명</label>
              <input id="org" class="krds-input w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" name="org" type="text" required data-krds-component="text_input_state" />
            </div>
            <div class="field flex flex-col gap-krds-2">
              <label for="email" class="font-medium">이메일</label>
              <input id="email" class="krds-input w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" name="email" type="email" required data-krds-component="text_input_icon" />
            </div>
            <div class="field flex flex-col gap-krds-2">
              <label for="product" class="font-medium">희망 상품</label>
              <select id="product" class="krds-input w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" name="product" data-krds-component="select">
                <option>패밀리 솝 1L</option>
                <option>데일리 솝 500ml</option>
              </select>
            </div>
            <div class="field flex flex-col gap-krds-2">
              <label for="date" class="font-medium">납품 희망일</label>
              <input id="date" class="krds-input w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" name="date" type="date" data-krds-component="date_input" />
            </div>
            <div class="field flex flex-col gap-krds-2">
              <label for="memo" class="font-medium">요청사항</label>
              <textarea id="memo" class="krds-input w-full font-krds text-krds-text border border-krds-border rounded-krds-sm px-krds-4 py-krds-3 bg-krds-surface" name="memo" rows="4" data-krds-component="textarea"></textarea>
            </div>
            <fieldset class="choice-group flex flex-col gap-krds-2" data-krds-component="checkbox">
              <legend class="font-bold">추가 옵션</legend>
              <label class="inline-flex items-center gap-krds-2"><input type="checkbox" name="option" /> 리필 파우치 포함</label>
              <label class="inline-flex items-center gap-krds-2"><input type="checkbox" name="option" /> 세면대 안내 스티커 포함</label>
            </fieldset>
            <fieldset class="choice-group flex flex-col gap-krds-2" data-krds-component="radio_button">
              <legend class="font-bold">배송 주기</legend>
              <label class="inline-flex items-center gap-krds-2"><input type="radio" name="cycle" checked /> 월 1회</label>
              <label class="inline-flex items-center gap-krds-2"><input type="radio" name="cycle" /> 분기 1회</label>
            </fieldset>
            <label class="toggle inline-flex items-center gap-krds-2" data-krds-component="toggle_switch"><input type="checkbox" /> 정기배송 알림 받기</label>
            <button type="submit" class="krds-btn primary inline-flex items-center justify-center font-krds rounded-krds-sm font-bold min-h-[42px] px-krds-4 py-krds-3 border bg-krds-primary text-white border-krds-primary w-fit" data-krds-component="button_size">요청 보내기</button>
          </form>
        </section>

        <section class="section accordion p-krds-6 px-krds-6 border-b border-krds-border font-krds" data-krds-component="accordion">
          <h2 class="text-krds-heading-lg font-bold mb-krds-4">자주 묻는 질문</h2>
          <details open class="border border-krds-border rounded-krds-md p-krds-4 mb-krds-2" data-krds-component="accordion_line"><summary class="font-bold cursor-pointer">샘플을 먼저 받을 수 있나요?</summary><p class="text-krds-secondary mt-krds-2">기관 구매 전 샘플 발송이 가능합니다.</p></details>
          <details class="border border-krds-border rounded-krds-md p-krds-4" data-krds-component="disclosure"><summary class="font-bold cursor-pointer">리필 파우치만 주문할 수 있나요?</summary><p class="text-krds-secondary mt-krds-2">정기배송 고객은 리필 상품만 선택할 수 있습니다.</p></details>
        </section>

      </main>
    </div>

    <footer id="krds-footer" class="font-krds text-krds-text-secondary bg-krds-surface-subtle p-krds-6 flex flex-wrap justify-between gap-krds-4" data-krds-component="footer">
      <div>
        <strong class="text-krds-text">공공 서비스 안내</strong>
        <p class="mt-krds-2">@simplescaffold/krds-tailwind · 컴포넌트 참조 74개</p>
      </div>
      <div class="footer-links flex gap-krds-4" data-krds-component="link">
        <a href="#content" class="text-krds-primary">본문</a>
        <a href="#order" class="text-krds-primary">신청</a>
        <a href="#coverage" class="text-krds-primary">컴포넌트</a>
      </div>
    </footer>

    <section id="coverage" class="section coverage p-krds-6 px-krds-6 font-krds" data-krds-component="structured_list_table">
      <div class="section-head mb-krds-4">
        <h2 class="text-krds-heading-lg font-bold">KRDS 컴포넌트 적용 범위</h2>
        <p class="text-krds-secondary">packages/krds-tailwind/dist/components의 74개 HTML 스니펫과 연동된 추적 매트릭스입니다.</p>
      </div>
      <ul class="component-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-krds-4 list-none p-0" aria-label="KRDS 컴포넌트 전체 목록">
${componentCards}
      </ul>
      <nav class="pagination flex gap-krds-2 font-krds items-center mt-krds-6" aria-label="컴포넌트 목록 페이지" data-krds-component="pagination"><a href="#coverage" class="text-krds-primary">1</a><a href="#coverage" class="text-krds-primary">2</a><a href="#coverage" class="text-krds-primary">3</a></nav>
    </section>
  </div>`;
}

function buildTailwindHtmlPage() {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
  <meta name="description" content="KRDS 컴포넌트 전체를 추적 가능한 방식으로 적용한 공공 서비스 Tailwind 샘플 페이지" />
  <title>공공 서비스 안내 | KRDS Tailwind 샘플</title>
  <link rel="stylesheet" href="./tailwind.css" />
</head>
<body class="m-0 font-krds text-krds-text leading-relaxed">
${buildBodyContent()}
</body>
</html>
`;
}

await fs.mkdir(outDir, { recursive: true });

await fs.writeFile(path.join(outDir, 'tailwind.html'), buildTailwindHtmlPage(), 'utf8');

await fs.writeFile(path.join(root, 'reports/experiment/component-coverage.json'), JSON.stringify({
  source: componentRoot,
  total: files.length,
  samples: ['experiment/sample-page/index.html', 'experiment/sample-page/tailwind.html'],
  components: files.map((file) => ({
    file: `${componentRoot}/${file}`,
    component: file.replace(/\.html$/, ''),
    tailwindSnippet: `packages/krds-tailwind/dist/components/${file.replace(/\.html$/, '')}.html`
  }))
}, null, 2));

console.log(`Built tailwind.html with ${files.length} KRDS component references (index.html preserved)`);
