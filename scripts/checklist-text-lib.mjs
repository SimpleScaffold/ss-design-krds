#!/usr/bin/env node
/**
 * Korean text normalization for PDF checklist extraction
 */

const PARTICLE_END =
  /(?:을|를|에|의|와|과|도|만|로|으로|에서|부터|까지|이다|한다|하는|하고|하여|이며|거나|인|은|는|와|과|께|따라|대해|위해)$/;

/** Known broken syllable splits from PDF line wrapping */
const SYLLABLE_FIXES = [
  [/디지\s+털/g, '디지털'],
  [/경\s+험/g, '경험'],
  [/스\s+타일/g, '스타일'],
  [/서\s+비스/g, '서비스'],
  [/체\s+크리스트/g, '체크리스트'],
  [/가이\s+드라인/g, '가이드라인'],
  [/고려하\s+여/g, '고려하여'],
  [/하더라\s+도/g, '하더라도'],
  [/필수적\s+이다/g, '필수적이다'],
  [/관련하\s+여/g, '관련하여'],
  [/반복함\s+으로써/g, '반복함으로써'],
  [/스\s+타일·서/g, '스타일·서'],
  [/서\s+비스\s+패턴/g, '서비스 패턴'],
];

/** Missing-space artifacts (word + suffix glued) */
const SPACING_FIXES = [
  [/돕는것을/g, '돕는 것을'],
  [/않는경우/g, '않는 경우'],
  [/진입하지않/g, '진입하지 않'],
  [/이동하지않/g, '이동하지 않'],
  [/활성화되지않/g, '활성화되지 않'],
  [/제공하지않/g, '제공하지 않'],
  [/사용하지않/g, '사용하지 않'],
  [/표시하지않/g, '표시하지 않'],
  [/충족하지않/g, '충족하지 않'],
  [/확인하지않/g, '확인하지 않'],
  [/접근할\s*수없/g, '접근할 수 없'],
  [/판단할\s*수없/g, '판단할 수 없'],
  [/수\s*없는/g, '수 없는'],
  [/수\s*없/g, '수 없'],
  [/준수기준/g, '준수 기준'],
  [/대상및/g, '대상 및'],
  [/서\s+비스\s+패턴/g, '서비스 패턴'],
  [/웹\s+관련지식/g, '웹 관련 지식'],
  [/기본기능/g, '기본 기능'],
  [/해당되지않/g, '해당되지 않'],
  [/해당할\s*경우해당/g, '해당할 경우 해당'],
  [/또는검증/g, '또는 검증'],
  [/관련\s*문서구분/g, '관련 문서 구분'],
  [/않은경우/g, '않은 경우'],
  [/없음을/g, '없음을'],
  [/있음을/g, '있음을'],
  [/하지않/g, '하지 않'],
  [/않은\s*경우/g, '않은 경우'],
  [/이동하지\s*않는경우/g, '이동하지 않는 경우'],
  [/진입하지\s*않는경우/g, '진입하지 않는 경우'],
  [/접근하지\s*않는경우/g, '접근하지 않는 경우'],
  [/확인하지\s*않/g, '확인하지 않'],
  [/없을\s*수/g, '없을 수'],
  [/있을\s*수/g, '있을 수'],
  [/할\s*수없/g, '할 수 없'],
  [/할\s*수\s*없/g, '할 수 없'],
  [/같은\s*경우/g, '같은 경우'],
  [/품질기준/g, '품질 기준'],
  [/기준확보/g, '기준 확보'],
  [/관리효율화/g, '관리 효율화'],
  [/인력투입/g, '인력 투입'],
  [/수행가능/g, '수행 가능'],
  [/감사담당자/g, '감사 담당자'],
  [/필수\s*항목사용성/g, '필수 항목 사용성'],
  [/권장\s*항목사용성/g, '권장 항목 사용성'],
  [/우수\s*항목/g, '우수 항목'],
  [/패턴개인/g, '패턴 개인'],
  [/확인컴포넌트/g, '확인 컴포넌트'],
  [/도움스타일/g, '도움 스타일'],
  [/색상글꼴/g, '색상 글꼴'],
  [/형태레이아웃/g, '형태 레이아웃'],
  [/체크리스트\s*수스타일/g, '체크리스트 수 스타일'],
  [/가\s*우선/g, '가 우선'],
  [/여\s*참고/g, '여 참고'],
  [/없으므로/g, '없으므로'],
  [/있으므로/g, '있으므로'],
  [/값을계산/g, '값을 계산'],
  [/이동할\s*수있다/g, '이동할 수 있다'],
  [/보이지\s*않을수/g, '보이지 않을 수'],
  [/정확하다/g, '정확하다'],
  [/없을\s*수\s*있다/g, '없을 수 있다'],
  [/있을\s*수\s*있다/g, '있을 수 있다'],
  [/변경될\s*수\s*있/g, '변경될 수 있'],
  [/고려할\s*수\s*없/g, '고려할 수 없'],
  [/닿는\s*경우/g, '닿는 경우'],
  [/없는\s*경우/g, '없는 경우'],
  [/있는\s*경우/g, '있는 경우'],
];

/** Patterns that indicate broken Korean (for validation) */
export const BROKEN_KOREAN_PATTERNS = [
  { id: 'syllable-digital', re: /디지\s+털/ },
  { id: 'syllable-experience', re: /경\s+험/ },
  { id: 'consider-yeo', re: /고려하\s+여/ },
  { id: 'hadeora-do', re: /하더라\s+도/ },
  { id: 'aneun-case', re: /않는경우/ },
  { id: 'su-eop', re: /수없/ },
  { id: 'geot-eul', re: /[가-힣]{2,}것을/ },
  { id: 'help-geot', re: /돕는것을/ },
  { id: 'judge-su-eop', re: /판단할\s*수없/ },
  { id: 'access-su-eop', re: /접근할\s*수없/ },
  { id: 'essential-ida', re: /필수적\s+이다/ },
  { id: 'compliance-glue', re: /준수기준/ },
  { id: 'move-an-eun', re: /이동하지않/ },
  { id: 'enter-an-eun', re: /진입하지않/ },
];

export function normalizeLine(text) {
  return text.replace(/\t+/g, ' ').replace(/\u00a0/g, ' ').replace(/ +/g, ' ').trim();
}

export function joinKoreanLines(a, b) {
  if (!a || !b) return a || b;
  if (/[.!?。:;,)]$/.test(a)) return `${a} ${b}`;

  const lastToken = a.split(/\s+/).pop() || '';
  const firstToken = b.split(/\s+/)[0] || '';

  if (PARTICLE_END.test(lastToken)) return `${a} ${b}`;

  if (
    lastToken.length <= 2 &&
    /^[가-힣]+$/.test(lastToken) &&
    /^[가-힣]/.test(firstToken)
  ) {
    return a.slice(0, a.length - lastToken.length) + lastToken + firstToken + b.slice(firstToken.length);
  }

  return `${a} ${b}`;
}

/**
 * @param {string[]} lines
 * @param {(line: string) => boolean} [isBoundary] - return true to stop merging
 */
export function mergePageLines(lines, isBoundary = () => false) {
  const merged = [];
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (!line) continue;

    while (i + 1 < lines.length) {
      const next = lines[i + 1];
      if (!next || isBoundary(next) || isBoundary(line)) break;
      line = joinKoreanLines(line, next);
      i++;
    }
    merged.push(line);
  }
  return merged;
}

export function fixKoreanSpacing(text) {
  if (!text) return text;
  let out = text;
  for (const [re, rep] of SYLLABLE_FIXES) out = out.replace(re, rep);
  for (const [re, rep] of SPACING_FIXES) out = out.replace(re, rep);

  // Generic: particle/suffix glued after hangul word (conservative)
  out = out.replace(
    /([가-힣]{2,})(경우|것을|것이|것은|하여|으로|에서|있다|없다|제공|확인|이동|진입|적용|가능)(?=[^가-힣]|$)/g,
    (m, word, suffix) => {
      if (['하여', '으로', '에서', '있다', '없다'].includes(suffix) && word.endsWith(suffix.slice(0, 1))) {
        return m;
      }
      return `${word} ${suffix}`;
    }
  );

  // Fix double spaces
  out = out.replace(/ {2,}/g, ' ');
  return out;
}

/**
 * Split long appendix prose into markdown list items at numbered steps.
 */
export function splitNumberedSteps(text) {
  if (!text || text.length < 120) return [text];

  let parts = text.split(/(?=\d+\.\s)/).map((p) => p.trim()).filter(Boolean);
  if (parts.length <= 1) {
    parts = text.split(/(?=[①②③④⑤⑥⑦⑧⑨⑩]\s)/).map((p) => p.trim()).filter(Boolean);
  }
  return parts.length > 1 ? parts : [text];
}

export function countBrokenKorean(text) {
  let total = 0;
  const hits = [];
  for (const { id, re } of BROKEN_KOREAN_PATTERNS) {
    const matches = text.match(new RegExp(re.source, re.flags + (re.global ? '' : 'g'))) || [];
    if (matches.length) {
      total += matches.length;
      hits.push({ id, count: matches.length });
    }
  }
  return { total, hits };
}

export function mergeProseChunk(lines) {
  if (!lines.length) return '';
  let text = lines[0];
  for (let i = 1; i < lines.length; i++) {
    text = joinKoreanLines(text, lines[i]);
  }
  return fixKoreanSpacing(text);
}
