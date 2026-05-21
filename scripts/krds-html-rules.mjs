#!/usr/bin/env node
/**
 * Shared HTML/static rule implementations for krds-checklist and krds-similarity.
 */
import { loadRulesDir } from './checklist-lib.mjs';

export function has(re, text) {
  return re.test(text);
}

export function countMatches(re, text) {
  return (text.match(re) || []).length;
}

export function extractSkipLinks(html) {
  const block = html.match(/id="krds-skip-link"[\s\S]*?<\/div>/i)?.[0] || '';
  const links = [...block.matchAll(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
  return links.map((m) => ({ href: m[1], text: m[2].replace(/<[^>]+>/g, '').trim() }));
}

export function formLabelPairs(html) {
  const labels = [...html.matchAll(/<label[^>]*for="([^"]+)"/gi)].map((m) => m[1]);
  const inputs = [...html.matchAll(/<(?:input|select|textarea)[^>]*id="([^"]+)"/gi)].map((m) => m[1]);
  const bound = labels.filter((id) => inputs.includes(id));
  return { labels: labels.length, inputs: inputs.length, bound: bound.length };
}

export function extractClasses(text) {
  const set = new Set();
  for (const m of text.matchAll(/class\s*=\s*"([^"]+)"/g)) {
    for (const cls of m[1].split(/\s+/)) {
      if (cls) set.add(cls.trim());
    }
  }
  return set;
}

const RULE_FNS = {
  doctype: (html) => has(/<!DOCTYPE html>/i, html),
  'lang-ko': (html) => has(/<html[^>]*lang="ko"/i, html),
  'meta-charset': (html) => has(/<meta[^>]*charset=/i, html),
  'meta-viewport': (html) => has(/<meta[^>]*name="viewport"/i, html),
  'meta-description': (html) => has(/<meta[^>]*name="description"/i, html),
  'landmark-header': (html) => has(/<header[^>]*>/i, html),
  'landmark-nav': (html) => has(/<nav[^>]*>/i, html),
  'landmark-main': (html) => has(/<main[^>]*>/i, html),
  'landmark-footer': (html) => has(/<footer[^>]*>/i, html),
  'selector-krds-skip-link': (html) => has(/id="krds-skip-link"/i, html),
  'selector-wrap-g-wrap': (html) => has(/id="wrap"[^>]*class="[^"]*g-wrap/i, html),
  'selector-krds-masthead': (html) => has(/id="krds-masthead"/i, html),
  'selector-krds-header': (html) => has(/id="krds-header"/i, html),
  'selector-container': (html) => has(/id="container"/i, html),
  'selector-content': (html) => has(/id="content"/i, html),
  'selector-krds-footer': (html) => has(/id="krds-footer"/i, html),
  'class-krds-btn': (html) => has(/class="[^"]*krds-btn/i, html),
  'class-krds-input': (html) => has(/class="[^"]*krds-input/i, html),
  'class-krds-form': (html) => has(/class="[^"]*krds-form/i, html),
  'class-krds-table': (html) => has(/class="[^"]*krds-table/i, html),
  'class-krds-badge': (html) => has(/class="[^"]*krds-badge/i, html),
  'class-sr-only': (html) => has(/class="[^"]*sr-only/i, html),
  'nav-aria-label': (html) => has(/<nav[^>]*aria-label="[^"]+"/i, html),
  'table-semantic': (html) => has(/<table[\s\S]*<thead[\s\S]*<tbody/i, html),
  'image-has-alt': (html) => has(/<img[^>]*alt="[^"]+"/i, html),
  'official-banner-present': (html) => has(/id="krds-masthead"/i, html),
  'official-banner-topmost': (html) => {
    const wrap = html.match(/id="wrap"[\s\S]*/i)?.[0] || html;
    const mastIdx = wrap.search(/id="krds-masthead"/i);
    const headerIdx = wrap.search(/id="krds-header"/i);
    const skipIdx = wrap.search(/id="krds-skip-link"/i);
    if (mastIdx < 0) return false;
    if (skipIdx >= 0 && skipIdx < mastIdx) return true;
    if (headerIdx >= 0) return mastIdx < headerIdx;
    return mastIdx < 500;
  },
  'official-banner-text': (html) =>
    has(/이 누리집은 대한민국 공식 전자정부 누리집입니다/i, html),
  'skip-link-present': (html) => has(/id="krds-skip-link"/i, html) && has(/<a[^>]*href="#/i, html),
  'skip-link-count': (html) => {
    const links = extractSkipLinks(html);
    return links.length > 0 && links.length <= 3;
  },
  'skip-link-first-main': (html) => {
    const links = extractSkipLinks(html);
    return links.length > 0 && /#content|본문/i.test(links[0].href + links[0].text);
  },
  'skip-link-target': (html) => has(/href="#content"/i, html) && has(/id="content"/i, html),
  'footer-required-info': (html) => {
    const foot = html.match(/<footer[\s\S]*?<\/footer>/i)?.[0] || '';
    return foot.length > 20 && (has(/연락|contact|tel|전화|@/i, foot) || has(/copyright|©|저작/i, foot));
  },
  'footer-privacy-link': (html) => {
    const foot = html.match(/<footer[\s\S]*?<\/footer>/i)?.[0] || html;
    return has(/개인\s*정보|privacy/i, foot);
  },
  'footer-order': (html) => {
    const foot = html.match(/<footer[\s\S]*?<\/footer>/i)?.[0] || '';
    return foot.length > 0;
  },
  'header-logo-position': (html) => {
    const header = html.match(/<header[^>]*id="krds-header"[\s\S]*?<\/header>/i)?.[0] || '';
    return has(/identifier|logo|brand|header-brand/i, header);
  },
  'header-utility-count': (html) => {
    const header = html.match(/<header[\s\S]*?<\/header>/i)?.[0] || '';
    const links = (header.match(/<a /gi) || []).length;
    return links <= 8;
  },
  'header-lang-no-flag': (html) => !has(/lang[^>]*flag|국기|emoji-flag|🇰🇷/i, html),
  'header-icon-label': (html) =>
    !has(/<button[^>]*class="[^"]*icon/i, html) ||
    has(/<button[^>]*class="[^"]*icon[\s\S]*?sr-only[\s\S]*?<\/button>/i, html),
  'form-label-binding': (html) => {
    const { labels, inputs, bound } = formLabelPairs(html);
    if (inputs === 0) return true;
    return bound >= Math.min(labels, inputs) && bound > 0;
  },
  'mailto-link': (html) => has(/href="mailto:/i, html),
  'tel-link': (html) => has(/href="tel:/i, html),
  'external-link-indicator': (html) => {
    const ext = has(/target="_blank"/i, html) || has(/rel="[^"]*noopener/i, html);
    if (!ext) return true;
    return has(/external|outlink|새\s*창|sr-only/i, html) || has(/aria-label="[^"]*외부/i, html);
  },
  'button-single-primary': (html) => {
    const n = countMatches(/krds-btn[^"]*primary|class="[^"]*primary[^"]*krds-btn/gi, html);
    return n >= 1 && n <= 3;
  },
  'autocomplete-present': (html) => {
    const inputs = countMatches(/<input[^>]*type="(?:text|email|tel|search)/gi, html);
    if (inputs === 0) return true;
    return has(/autocomplete="/i, html);
  },
  'breadcrumb-separator': (html) => {
    const bc = html.match(/class="breadcrumb"[\s\S]*?<\/nav>/i)?.[0] || '';
    if (!bc) return true;
    return has(/aria-hidden|\/|›|»|separator|구분/i, bc) || bc.includes('<li>');
  },
  'breadcrumb-home-first': (html) => {
    const bc = html.match(/class="breadcrumb"[\s\S]*?<\/nav>/i)?.[0] || '';
    if (!bc) return true;
    return has(/홈|home/i, bc);
  },
  'icon-button-has-sr-only': (html) =>
    has(/<button[^>]*icon[^>]*>[\s\S]*sr-only[\s\S]*<\/button>/i, html)
};

export function evaluateRule(ruleId, html, context = {}) {
  const fn = RULE_FNS[ruleId];
  if (!fn) return { pass: false, error: 'no-implementer' };
  try {
    return { pass: Boolean(fn(html, context)), error: null };
  } catch (e) {
    return { pass: false, error: e.message };
  }
}

export async function evaluateStaticRules(html, { ruleIds, tier = ['gov', 'self', 'common'] } = {}) {
  const allRules = (await loadRulesDir()).filter((r) => r.engine === 'static');
  const idSet = ruleIds ? new Set(ruleIds) : null;
  const rules = idSet ? allRules.filter((r) => idSet.has(r.id)) : allRules;
  const results = [];

  for (const rule of rules) {
    const { pass, error } = evaluateRule(rule.id, html, { tier });
    results.push({
      ruleId: rule.id,
      engine: 'static',
      pass,
      error,
      checklistIds: rule.checklistIds || [],
      description: rule.description
    });
  }

  return results;
}

export function evaluateReferenceClassCoverage(candidateHtml, referenceHtml, minRatio = 0.1) {
  const refClasses = [...extractClasses(referenceHtml)].filter((c) => c.startsWith('krds-'));
  const candClasses = extractClasses(candidateHtml);
  const covered = refClasses.filter((c) => candClasses.has(c)).length;
  const ratio = refClasses.length === 0 ? 1 : covered / refClasses.length;
  return {
    pass: ratio >= minRatio,
    ratio,
    refClassCount: refClasses.length,
    covered
  };
}
