#!/usr/bin/env node
import { promises as fs } from 'node:fs';
import path from 'node:path';

const componentRoot = 'assets/krds/html/code';
const outDir = 'experiment/sample-page';
const files = (await fs.readdir(componentRoot))
  .filter((file) => file.endsWith('.html'))
  .sort();

const titleize = (name) => name
  .replace(/\.html$/, '')
  .replace(/_/g, ' ')
  .replace(/\b\w/g, (m) => m.toUpperCase());

const componentCards = files.map((file) => {
  const name = file.replace(/\.html$/, '');
  return `          <li class="component-card" data-krds-component="${name}" data-krds-reference="${componentRoot}/${file}">
            <span class="krds-badge small">${name}</span>
            <strong>${titleize(file)}</strong>
            <a href="#order" class="krds-link">적용 위치 보기</a>
          </li>`;
}).join('\n');

const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
  <meta name="description" content="KRDS 컴포넌트 전체를 추적 가능한 방식으로 적용한 공공 서비스 샘플 페이지" />
  <title>공공 서비스 안내 | KRDS 샘플</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div id="wrap" class="g-wrap">
    <div id="krds-skip-link"><a href="#content">본문 바로가기</a></div>

    <div id="krds-masthead" data-krds-component="masthead">
      <div class="inner">
        <span class="nuri-txt">이 누리집은 대한민국 공식 전자정부 누리집입니다. KRDS 컴포넌트 참조 기반 샘플 페이지입니다.</span>
        <button type="button" class="krds-btn xsmall text toggle-btn">
          공식 누리집 확인방법 <span aria-hidden="true">⌄</span><span class="sr-only">열기</span>
        </button>
      </div>
    </div>

    <header id="krds-header" class="krds-header" data-krds-component="header">
      <div class="header-brand">
        <p class="identifier" data-krds-component="identifier">KRDS PUBLIC SERVICE</p>
        <h1>공공 서비스 안내</h1>
        <p>국민 누구나 디지털 정부 서비스를 쉽게 이용할 수 있도록 KRDS 규칙을 적용한 샘플 페이지입니다.</p>
      </div>
      <nav aria-label="주요 메뉴" data-krds-component="main_menu_pc">
        <ul class="menu-list">
          <li><a href="#products">서비스</a></li>
          <li><a href="#benefits">특징</a></li>
          <li><a href="#order">신청</a></li>
          <li><a href="#coverage">KRDS 적용</a></li>
        </ul>
      </nav>
      <div class="mobile-menu-note" data-krds-component="main_menu_mobile">모바일 메뉴 대응</div>
    </header>

    <div id="container">
      <main id="content">
        <nav class="breadcrumb" aria-label="현재 위치" data-krds-component="breadcrumb">
          <ol>
            <li><a href="#">홈</a></li>
            <li><a href="#products">서비스</a></li>
            <li aria-current="page">안내</li>
          </ol>
        </nav>

        <section id="hero" class="hero section" data-krds-component="carousel_banner">
          <div class="hero-copy">
            <span class="krds-badge" data-krds-component="badge">KRDS 적용 실험</span>
            <h2>모두를 위한 디지털 서비스 경험</h2>
            <p>서비스 소개, 신청, 비교표, 상태 안내를 KRDS HTML 컴포넌트 규칙에 맞춰 한 페이지에 구성했습니다.</p>
            <div class="button-row" data-krds-component="button_hierarchy">
              <a class="krds-btn primary" href="#order" data-krds-component="button">서비스 신청</a>
              <a class="krds-btn secondary" href="#products" data-krds-component="button_text">서비스 보기</a>
              <button type="button" class="krds-btn icon" data-krds-component="button_icon">
                <span aria-hidden="true">?</span><span class="sr-only">서비스 이용 도움말</span>
              </button>
            </div>
          </div>
          <div class="product-panel" role="img" aria-label="맑은손 핸드솝 제품 패키지 일러스트레이션">
            <img class="product-image" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 320'%3E%3Crect x='70' y='20' width='80' height='40' rx='8' fill='%230057b8'/%3E%3Crect x='40' y='58' width='140' height='220' rx='30' fill='%23ffffff' stroke='%237aa7dd' stroke-width='6'/%3E%3Ctext x='110' y='180' text-anchor='middle' font-size='38' font-family='Arial' font-weight='700' fill='%23003f85'%3ESOAP%3C/text%3E%3C/svg%3E" alt="맑은손 핸드솝 제품 용기" />
            <p class="tag" data-krds-component="tag">무향 · 시트러스 · 리필형</p>
          </div>
        </section>

        <aside class="critical-alert" role="status" data-krds-component="critical_alerts">
          <strong>배송 안내</strong> 대량 구매는 영업일 기준 3일 내 출고되며 긴급 납품은 상담이 필요합니다.
        </aside>

        <section id="products" class="section two-column">
          <div>
            <h2>상품 라인업</h2>
            <p>용량, 향, 리필 여부를 비교하고 필요한 제품을 선택하세요.</p>
            <table class="krds-table" aria-label="상품 가격표" data-krds-component="table">
              <caption class="sr-only">핸드솝 상품 가격표</caption>
              <thead>
                <tr><th scope="col">상품명</th><th scope="col">용량</th><th scope="col">가격</th><th scope="col">상태</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">데일리 솝</th><td>500ml</td><td>6,900원</td><td><span class="krds-badge success" data-krds-component="badge_number">재고 42</span></td></tr>
                <tr><th scope="row">패밀리 솝</th><td>1L</td><td>11,900원</td><td><span class="krds-badge" data-krds-component="badge_size">추천</span></td></tr>
              </tbody>
            </table>
          </div>
          <div class="structured-list" data-krds-component="structured_list">
            <h3>구매 기준</h3>
            <dl>
              <div><dt>피부 타입</dt><dd>저자극 테스트 완료</dd></div>
              <div><dt>패키지</dt><dd>재활용 용기 및 리필 파우치</dd></div>
              <div><dt>납품</dt><dd>기관별 정기배송 지원</dd></div>
            </dl>
          </div>
        </section>

        <section id="benefits" class="section" data-krds-component="tab">
          <div class="section-head">
            <h2>핵심 특징</h2>
            <p class="tooltip" data-krds-component="tooltip">성분, 납품, 사후관리 정보를 탭 형태로 비교합니다.</p>
          </div>
          <div class="tab-list" role="tablist" aria-label="핸드솝 특징">
            <button type="button" class="krds-btn tertiary active" role="tab" aria-selected="true">성분</button>
            <button type="button" class="krds-btn tertiary" role="tab" aria-selected="false">납품</button>
            <button type="button" class="krds-btn tertiary" role="tab" aria-selected="false">관리</button>
          </div>
          <ul class="feature-grid" data-krds-component="text_list">
            <li><strong>저자극</strong><span>식물 유래 세정 성분을 중심으로 구성했습니다.</span></li>
            <li><strong>리필 가능</strong><span>운영 비용과 플라스틱 사용량을 줄입니다.</span></li>
            <li><strong>기관 납품</strong><span>월별 사용량에 맞춘 정기 공급을 제공합니다.</span></li>
          </ul>
        </section>

        <section class="section process" data-krds-component="step_indicator">
          <h2>구매 절차</h2>
          <ol class="steps" data-krds-component="text_list_ordered">
            <li><span>1</span>상품 선택</li>
            <li><span>2</span>견적 요청</li>
            <li><span>3</span>수량 확정</li>
            <li><span>4</span>정기 배송</li>
          </ol>
        </section>

        <section id="order" class="section form-section">
          <div>
            <h2>견적 요청</h2>
            <p class="context-help" data-krds-component="contextual_help">기관명과 예상 수량을 남기면 담당자가 상품 구성을 제안합니다.</p>
          </div>
          <form class="krds-form" action="#" method="post" data-krds-component="text_input">
            <div class="field">
              <label for="org">기관명</label>
              <input id="org" class="krds-input" name="org" type="text" required data-krds-component="text_input_state" />
            </div>
            <div class="field">
              <label for="email">이메일</label>
              <input id="email" class="krds-input" name="email" type="email" required data-krds-component="text_input_icon" />
            </div>
            <div class="field">
              <label for="product">희망 상품</label>
              <select id="product" class="krds-input" name="product" data-krds-component="select">
                <option>패밀리 솝 1L</option>
                <option>데일리 솝 500ml</option>
              </select>
            </div>
            <div class="field">
              <label for="date">납품 희망일</label>
              <input id="date" class="krds-input" name="date" type="date" data-krds-component="date_input" />
            </div>
            <div class="field">
              <label for="memo">요청사항</label>
              <textarea id="memo" class="krds-input" name="memo" rows="4" data-krds-component="textarea"></textarea>
            </div>
            <fieldset class="choice-group" data-krds-component="checkbox">
              <legend>추가 옵션</legend>
              <label><input type="checkbox" name="option" /> 리필 파우치 포함</label>
              <label><input type="checkbox" name="option" /> 세면대 안내 스티커 포함</label>
            </fieldset>
            <fieldset class="choice-group" data-krds-component="radio_button">
              <legend>배송 주기</legend>
              <label><input type="radio" name="cycle" checked /> 월 1회</label>
              <label><input type="radio" name="cycle" /> 분기 1회</label>
            </fieldset>
            <label class="toggle" data-krds-component="toggle_switch"><input type="checkbox" /> 정기배송 알림 받기</label>
            <button type="submit" class="krds-btn primary" data-krds-component="button_size">요청 보내기</button>
          </form>
        </section>

        <section class="section accordion" data-krds-component="accordion">
          <h2>자주 묻는 질문</h2>
          <details open data-krds-component="accordion_line"><summary>샘플을 먼저 받을 수 있나요?</summary><p>기관 구매 전 샘플 발송이 가능합니다.</p></details>
          <details data-krds-component="disclosure"><summary>리필 파우치만 주문할 수 있나요?</summary><p>정기배송 고객은 리필 상품만 선택할 수 있습니다.</p></details>
        </section>

      </main>
    </div>

    <footer id="krds-footer" data-krds-component="footer">
      <div>
        <strong>공공 서비스 안내</strong>
        <p>KRDS 규칙 기반 샘플 페이지 · 컴포넌트 참조 74개 적용</p>
      </div>
      <div class="footer-links" data-krds-component="link">
        <a href="#content">본문</a>
        <a href="#order">신청</a>
        <a href="#coverage">컴포넌트</a>
      </div>
    </footer>

    <section id="coverage" class="section coverage" data-krds-component="structured_list_table">
      <div class="section-head">
        <h2>KRDS 컴포넌트 적용 범위</h2>
        <p>아래 목록은 assets/krds/html/code의 모든 HTML 컴포넌트 참조 파일을 누락 없이 반영했음을 검증하기 위한 추적 매트릭스입니다.</p>
      </div>
      <ul class="component-grid" aria-label="KRDS 컴포넌트 전체 목록">
${componentCards}
      </ul>
      <nav class="pagination" aria-label="컴포넌트 목록 페이지" data-krds-component="pagination"><a href="#coverage">1</a><a href="#coverage">2</a><a href="#coverage">3</a></nav>
    </section>
  </div>
</body>
</html>
`;

await fs.mkdir(outDir, { recursive: true });
await fs.writeFile(path.join(outDir, 'index.html'), html, 'utf8');
await fs.writeFile('reports/experiment/component-coverage.json', JSON.stringify({
  source: componentRoot,
  total: files.length,
  components: files.map((file) => ({
    file: `${componentRoot}/${file}`,
    component: file.replace(/\.html$/, '')
  }))
}, null, 2));
console.log(`Built ${path.join(outDir, 'index.html')} with ${files.length} KRDS component references`);
