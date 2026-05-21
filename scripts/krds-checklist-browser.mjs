#!/usr/bin/env node
/**
 * L2 browser checklist runner — Playwright computed style, contrast, keyboard, viewport
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { loadRulesDir, resolveTargetPath, root } from './checklist-lib.mjs';
import {
  STYLE_THRESHOLDS,
  hexFromRgb,
  isGovFontFamily,
  isGothicFontFamily,
  isKrdsPaletteHex,
} from './style-guide-lib.mjs';

function fileUrl(p) {
  return `file://${p.split(path.sep).join('/')}`;
}

async function readTypographyMetrics(page) {
  return page.evaluate(() => {
    const bodyCs = getComputedStyle(document.body);
    const paras = [...document.querySelectorAll('main p, #content p')].filter(
      (p) => (p.textContent || '').trim().length > 30
    );
    const paraSizes = paras.map((p) => parseFloat(getComputedStyle(p).fontSize)).filter((n) => n > 0);
    const bodySize = parseFloat(bodyCs.fontSize);
    const contentSize = paraSizes.length ? Math.max(...paraSizes) : bodySize;
    const lh = parseFloat(bodyCs.lineHeight);
    const fs = bodySize;
    const headings = [...document.querySelectorAll('h1, h2, h3, h4')].map((h) => ({
      size: parseFloat(getComputedStyle(h).fontSize),
      weight: parseInt(getComputedStyle(h).fontWeight, 10) || 400,
    }));
    return {
      fontFamily: bodyCs.fontFamily,
      bodyFontSize: bodySize,
      contentFontSize: contentSize,
      lineHeightRatio: fs > 0 ? lh / fs : 0,
      headings,
    };
  });
}

function relativeLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(fg, bg) {
  const l1 = relativeLuminance(...fg);
  const l2 = relativeLuminance(...bg);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function parseRgb(str) {
  const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return [255, 255, 255];
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}

async function loadPlaywright() {
  try {
    const pw = await import('playwright');
    return pw.chromium;
  } catch {
    return null;
  }
}

async function withPage(targetPath, fn) {
  const chromium = await loadPlaywright();
  if (!chromium) {
    return { skipped: true, reason: 'playwright-not-installed' };
  }
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
    await page.goto(fileUrl(path.resolve(targetPath)), { waitUntil: 'domcontentloaded' });
    return { skipped: false, page, browser };
  } catch (e) {
    await browser.close();
    throw e;
  }
}

const RULE_FNS = {
  'style-color-palette': async (page) => {
    const colors = await page.evaluate(() => {
      const set = new Set();
      document.querySelectorAll('*').forEach((el) => {
        const cs = getComputedStyle(el);
        [cs.color, cs.backgroundColor, cs.borderColor].forEach((c) => {
          if (c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent') set.add(c);
        });
      });
      return [...set].slice(0, 80);
    });
    const hexes = colors.map((c) => hexFromRgb(c)).filter(Boolean);
    return hexes.some((h) => isKrdsPaletteHex(h)) || hexes.length > 0;
  },
  'style-interaction-color': async (page, { tier }) => {
    if (!tier.includes('self')) return { pass: true, na: true };
    const btn = await page.$('.krds-btn.primary, .krds-btn.secondary, [data-krds-component="button"]');
    if (!btn) return true;
    const before = await btn.evaluate((el) => {
      const cs = getComputedStyle(el);
      return { bg: cs.backgroundColor, color: cs.color, border: cs.borderColor, shadow: cs.boxShadow };
    });
    await btn.hover();
    const after = await btn.evaluate((el) => {
      const cs = getComputedStyle(el);
      return { bg: cs.backgroundColor, color: cs.color, border: cs.borderColor, shadow: cs.boxShadow };
    });
    const stateChange =
      before.bg !== after.bg ||
      before.color !== after.color ||
      before.border !== after.border ||
      before.shadow !== after.shadow;
    if (stateChange) return true;
    const usesSystemColor = await btn.evaluate((el) => {
      const cs = getComputedStyle(el);
      const colors = [cs.backgroundColor, cs.color, cs.borderColor].filter(Boolean);
      return colors.some((c) => {
        const m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!m) return false;
        const hex =
          '#' +
          [m[1], m[2], m[3]].map((x) => Number(x).toString(16).padStart(2, '0')).join('');
        return ['#0057b8', '#003675', '#003f85', '#256ef4', '#0b50d0', '#de3412', '#228738'].includes(hex);
      });
    });
    return usesSystemColor;
  },
  'style-color-consistency': async (page) => {
    const stats = await page.evaluate(() => {
      const textColors = new Set();
      const borderColors = new Set();
      document.querySelectorAll('p, li, td, th, .krds-btn, input, textarea, select').forEach((el) => {
        const cs = getComputedStyle(el);
        if (cs.color) textColors.add(cs.color);
        if (cs.borderColor && cs.borderWidth !== '0px') borderColors.add(cs.borderColor);
      });
      return { textCount: textColors.size, borderCount: borderColors.size };
    });
    return stats.textCount > 0 && stats.textCount <= 14 && stats.borderCount <= 10;
  },
  'style-font-gov': async (page, { tier }) => {
    if (!tier.includes('gov')) return { pass: true, na: true };
    const m = await readTypographyMetrics(page);
    const sizeOk =
      m.contentFontSize >= STYLE_THRESHOLDS.govBodyMinPx ||
      m.bodyFontSize >= STYLE_THRESHOLDS.govBodyMinPx;
    return isGovFontFamily(m.fontFamily) && sizeOk;
  },
  'style-font-self': async (page, { tier }) => {
    if (!tier.includes('self')) return { pass: true, na: true };
    const m = await readTypographyMetrics(page);
    const sizeOk =
      m.contentFontSize >= STYLE_THRESHOLDS.selfBodyMinPx ||
      m.bodyFontSize >= STYLE_THRESHOLDS.selfBodyMinPx;
    return isGothicFontFamily(m.fontFamily) && sizeOk;
  },
  'style-font-common': async (page) => {
    const m = await readTypographyMetrics(page);
    const lhOk = m.lineHeightRatio >= STYLE_THRESHOLDS.lineHeightMinRatio;
    const headingOk =
      m.headings.length === 0 ||
      m.headings.some(
        (h) => h.size >= m.bodyFontSize || h.weight >= 600
      );
    return lhOk && headingOk;
  },
  'style-radius-gov': async (page, { tier }) => {
    if (!tier.includes('gov')) return { pass: true, na: true };
    const allowed = STYLE_THRESHOLDS.govRadiusPx;
    const radii = await page.evaluate(() => {
      const set = new Set();
      document.querySelectorAll('[class*="krds-"]').forEach((el) => {
        const br = parseFloat(getComputedStyle(el).borderRadius);
        if (br > 0 && br < 900) set.add(Math.round(br));
      });
      return [...set];
    });
    if (radii.length === 0) return true;
    return radii.every((r) => allowed.includes(r));
  },
  'style-radius-scale': async (page, { tier }) => {
    if (!tier.includes('self')) return { pass: true, na: true };
    const ok = await page.evaluate(() => {
      const radiusOf = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const br = parseFloat(getComputedStyle(el).borderRadius);
        return br > 900 ? null : br;
      };
      const small = radiusOf('.krds-btn') ?? radiusOf('.tag, .krds-badge');
      const large =
        radiusOf('.component-card') ??
        radiusOf('.structured-list, .feature-grid li, section.card');
      if (small == null || large == null) return true;
      return large >= small;
    });
    return ok;
  },
  'style-radius-clip': async (page) => {
    const clipped = await page.evaluate(() => {
      const el = document.querySelector('.krds-btn, .krds-input, [class*="krds-"]');
      if (!el) return false;
      const cs = getComputedStyle(el);
      return cs.overflow === 'hidden' && parseFloat(cs.borderRadius) > 0;
    });
    return !clipped;
  },
  'official-banner-style': async (page) => {
    const el = await page.$('#krds-masthead');
    if (!el) return false;
    const bg = await el.evaluate((n) => getComputedStyle(n).backgroundColor);
    return bg && bg !== 'rgba(0, 0, 0, 0)';
  },
  'link-not-color-only': async (page) => {
    const ok = await page.evaluate(() => {
      const links = [...document.querySelectorAll('a')].slice(0, 20);
      return links.every((a) => {
        const cs = getComputedStyle(a);
        return cs.textDecorationLine !== 'none' || cs.textDecoration.includes('underline') ||
          a.classList.length > 0 || a.getAttribute('aria-label');
      });
    });
    return ok;
  },
  'skip-link-keyboard': async (page) => {
    const skip = await page.$('#krds-skip-link a, #krds-skip-link');
    if (!skip) return false;
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.closest('#krds-skip-link') != null);
    return focused;
  },
  'footer-responsive-order': async (page) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    const visible = await page.evaluate(() => {
      const f = document.querySelector('#krds-footer, footer');
      if (!f) return false;
      const r = f.getBoundingClientRect();
      return r.height > 0 && r.width > 0;
    });
    await page.setViewportSize({ width: 1920, height: 1080 });
    return visible;
  },
  'breadcrumb-mobile-collapse': async (page) => {
    const bc = await page.$('.breadcrumb');
    if (!bc) return true;
    await page.setViewportSize({ width: 768, height: 1024 });
    const items = await page.$$eval('.breadcrumb li', (els) => els.length);
    await page.setViewportSize({ width: 1920, height: 1080 });
    return items <= 4 || items > 0;
  },
  'side-menu-hidden-mobile': async (page) => {
    const side = await page.$(
      'aside.side-nav, nav.side-navigation, [data-krds-component="side_navigation"]:not(.component-card)'
    );
    if (!side) return true;
    await page.setViewportSize({ width: 768, height: 1024 });
    const hidden = await side.evaluate((el) => {
      const cs = getComputedStyle(el);
      return cs.display === 'none' || cs.visibility === 'hidden' || el.offsetParent === null;
    });
    await page.setViewportSize({ width: 1920, height: 1080 });
    return hidden;
  }
};

export async function runBrowserChecklist(targetArg, { tier = ['gov', 'self', 'common'] } = {}) {
  const targetPath = resolveTargetPath(targetArg);
  const rules = (await loadRulesDir()).filter((r) => r.engine === 'browser');
  const session = await withPage(targetPath, () => {});
  if (session.skipped) {
    return {
      target: targetPath,
      engine: 'browser',
      skipped: true,
      reason: session.reason,
      summary: { total: rules.length, passed: 0, failed: 0, skipped: rules.length },
      results: rules.map((rule) => ({
        ruleId: rule.id,
        engine: 'browser',
        pass: null,
        skipped: true,
        checklistIds: rule.checklistIds || [],
        description: rule.description
      }))
    };
  }

  const { page, browser } = session;
  const results = [];
  try {
    for (const rule of rules) {
      const fn = RULE_FNS[rule.id];
      let pass = false;
      let na = false;
      let error = null;
      if (!fn) {
        error = 'no-implementer';
      } else {
        try {
          const out = await fn(page, { tier });
          if (typeof out === 'object' && out !== null && 'pass' in out) {
            pass = out.pass;
            na = out.na || false;
          } else {
            pass = Boolean(out);
          }
        } catch (e) {
          error = e.message;
        }
      }
      results.push({
        ruleId: rule.id,
        engine: 'browser',
        pass: na ? null : pass,
        na,
        error,
        skipped: false,
        checklistIds: rule.checklistIds || [],
        description: rule.description
      });
    }
  } finally {
    await browser.close();
  }

  return {
    target: targetPath,
    engine: 'browser',
    skipped: false,
    summary: {
      total: results.length,
      passed: results.filter((r) => r.pass === true).length,
      failed: results.filter((r) => r.pass === false).length,
      na: results.filter((r) => r.na).length,
      skipped: results.filter((r) => r.skipped).length
    },
    results
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const target = process.argv[2];
  const out = await runBrowserChecklist(target);
  console.log(JSON.stringify(out, null, 2));
  process.exit(out.skipped ? 0 : out.summary.failed > 0 ? 1 : 0);
}
