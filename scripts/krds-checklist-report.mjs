#!/usr/bin/env node
/**
 * Merge static + browser + manual checklist results into P/F/E/N/A report
 */
export function buildItemResults(catalogItems, ruleResults) {
  const byRule = new Map();
  for (const r of ruleResults) {
    byRule.set(r.ruleId, r);
  }

  const items = [];
  for (const it of catalogItems) {
    const ruleId = it.automation?.ruleId;
    const level = it.automation?.level || 'manual';
    let status = 'manual';
    let evidence = null;

    if (level === 'manual') {
      status = 'manual';
    } else if (ruleId && byRule.has(ruleId)) {
      const rr = byRule.get(ruleId);
      if (rr.skipped) {
        status = 'manual';
        evidence = 'browser-skipped';
      } else if (rr.na) {
        status = 'N/A';
      } else if (rr.pass === true) {
        status = 'P';
      } else if (rr.pass === false) {
        status = 'F';
      } else {
        status = 'manual';
      }
    } else if (level === 'static' || level === 'browser') {
      status = 'manual';
      evidence = 'no-rule-mapping';
    }

    items.push({
      id: it.id,
      title: it.title,
      category: it.category,
      subcategory: it.subcategory,
      tier: it.tier,
      automation: it.automation,
      specRef: it.specRef,
      status,
      evidence
    });
  }
  return items;
}

export function summarizeItems(items) {
  const counts = { P: 0, F: 0, E: 0, 'N/A': 0, manual: 0 };
  for (const it of items) {
    counts[it.status] = (counts[it.status] || 0) + 1;
  }
  const automated = items.filter((it) => it.automation.level !== 'manual');
  const autoResolved = automated.filter((it) => it.status === 'P' || it.status === 'F' || it.status === 'N/A');
  return {
    total: items.length,
    counts,
    automatedTotal: automated.length,
    automatedResolved: autoResolved.length,
    passRate: items.length ? Number(((counts.P / items.length) * 100).toFixed(2)) : 0
  };
}

export function toMarkdown(report) {
  const lines = [
    '# KRDS 체크리스트 검증 결과',
    '',
    `- **대상**: ${report.target}`,
    `- **tier**: ${report.tier.join(', ')}`,
    `- **생성**: ${report.generatedAt}`,
    '',
    '## 요약',
    '',
    `| P | F | E | N/A | 수동 |`,
    `|---:|---:|---:|---:|---:|`,
    `| ${report.summary.counts.P} | ${report.summary.counts.F} | ${report.summary.counts.E} | ${report.summary.counts['N/A']} | ${report.summary.counts.manual} |`,
    '',
    `자동 판정률: ${report.summary.automatedResolved}/${report.summary.automatedTotal} (pass rate ${report.summary.passRate}%)`,
    '',
    '## 실패 항목',
    ''
  ];
  const failed = report.items.filter((it) => it.status === 'F');
  if (failed.length === 0) {
    lines.push('_자동 검증 실패 항목 없음_');
  } else {
    for (const it of failed) {
      lines.push(`- \`${it.id}\` — ${it.title}`);
    }
  }
  lines.push('', '## 수동 확인 필요', '');
  const manual = report.items.filter((it) => it.status === 'manual');
  lines.push(`총 ${manual.length}항 — [specs/validation-checklist.md](../specs/validation-checklist.md) procedure 참조`);
  return lines.join('\n');
}
