// Inline SVG article visuals — zero extra HTTP requests (perf), fully
// accessible + SEO-friendly: every visual carries <title>/<desc>,
// role="img" and figcaption keywords via the parent <figure>.
//
// NOTE: intentionally NO 'use client' — these are pure static SVG with
// no hooks, so the Server Component page can import ARTICLE_VISUALS
// directly (named non-component imports from 'use client' modules
// resolve to undefined during prerender).

function SvgShell({
  titleId,
  descId,
  title,
  desc,
  children,
  viewBox = '0 0 640 360',
}: {
  titleId: string;
  descId: string;
  title: string;
  desc: string;
  children: React.ReactNode;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      className="w-full h-auto"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
    >
      <title id={titleId}>{title}</title>
      <desc id={descId}>{desc}</desc>
      {children}
    </svg>
  );
}

export function PercentFormsVisual() {
  return (
    <SvgShell
      titleId="pf-t"
      descId="pf-d"
      title="The three percentage forms: slice, share, and whole"
      desc="Diagram showing X percent of Y equals 16, 30 is 25 percent of 120, and 12 is 15 percent of 80"
    >
      <rect x="0" y="0" width="640" height="360" rx="16" className="fill-card" />
      <rect x="0" y="0" width="640" height="360" rx="16" fill="none" strokeWidth="2" className="stroke-border" />
      {/* Form 1 */}
      <rect x="32" y="32" width="176" height="296" rx="12" className="fill-primary/10" />
      <text x="120" y="70" textAnchor="middle" fontSize="20" fontWeight="700" className="fill-foreground">Slice</text>
      <text x="120" y="104" textAnchor="middle" fontSize="15" className="fill-muted-foreground">X% of Y</text>
      <rect x="52" y="130" width="136" height="34" rx="8" className="fill-primary" />
      <text x="120" y="153" textAnchor="middle" fontSize="17" fontWeight="700" fill="white">20%</text>
      <text x="120" y="196" textAnchor="middle" fontSize="15" className="fill-muted-foreground">of 80</text>
      <text x="120" y="248" textAnchor="middle" fontSize="34" fontWeight="800" className="fill-primary">= 16</text>
      <text x="120" y="292" textAnchor="middle" fontSize="13" className="fill-muted-foreground">discounts · tips</text>
      {/* Form 2 */}
      <rect x="232" y="32" width="176" height="296" rx="12" className="fill-primary/10" />
      <text x="320" y="70" textAnchor="middle" fontSize="20" fontWeight="700" className="fill-foreground">Share</text>
      <text x="320" y="104" textAnchor="middle" fontSize="15" className="fill-muted-foreground">Y is ?% of X</text>
      <rect x="252" y="130" width="136" height="34" rx="8" className="fill-primary" />
      <text x="320" y="153" textAnchor="middle" fontSize="17" fontWeight="700" fill="white">30 / 120</text>
      <text x="320" y="196" textAnchor="middle" fontSize="15" className="fill-muted-foreground">× 100</text>
      <text x="320" y="248" textAnchor="middle" fontSize="34" fontWeight="800" className="fill-primary">= 25%</text>
      <text x="320" y="292" textAnchor="middle" fontSize="13" className="fill-muted-foreground">test scores</text>
      {/* Form 3 */}
      <rect x="432" y="32" width="176" height="296" rx="12" className="fill-primary/10" />
      <text x="520" y="70" textAnchor="middle" fontSize="20" fontWeight="700" className="fill-foreground">Whole</text>
      <text x="520" y="104" textAnchor="middle" fontSize="15" className="fill-muted-foreground">12 is 15% of ?</text>
      <rect x="452" y="130" width="136" height="34" rx="8" className="fill-primary" />
      <text x="520" y="153" textAnchor="middle" fontSize="17" fontWeight="700" fill="white">12 ÷ 0.15</text>
      <text x="520" y="196" textAnchor="middle" fontSize="15" className="fill-muted-foreground">reverse</text>
      <text x="520" y="248" textAnchor="middle" fontSize="34" fontWeight="800" className="fill-primary">= 80</text>
      <text x="520" y="292" textAnchor="middle" fontSize="13" className="fill-muted-foreground">find original</text>
    </SvgShell>
  );
}

// 2 — Compound growth curves: simple vs compound on $10k at 7%.
export function CompoundGrowthVisual() {
  // Plot area: x 70..610 (0..30y), y 20..300 ($10k..$80k). y(v) = 300 - (v-10)/70*280
  const y = (v: number) => 300 - ((v - 10) / 70) * 280;
  const x = (t: number) => 70 + (t / 30) * 540;
  const compound = Array.from({ length: 31 }, (_, t) => `${x(t).toFixed(1)},${y(Math.min(10 * Math.pow(1.07, t), 80)).toFixed(1)}`).join(' ');
  const simple = `70,${y(10)} 610,${y(10 + 0.07 * 10 * 30)}`;
  return (
    <SvgShell
      titleId="cg-t"
      descId="cg-d"
      title="Compound versus simple growth of $10,000 at 7 percent over 30 years"
      desc="Line chart: compounding reaches $76,123 while simple interest reaches $31,000 over 30 years"
    >
      <rect x="0" y="0" width="640" height="360" rx="16" className="fill-card" />
      <rect x="0" y="0" width="640" height="360" rx="16" fill="none" strokeWidth="2" className="stroke-border" />
      <text x="320" y="34" textAnchor="middle" fontSize="17" fontWeight="700" className="fill-foreground">$10,000 at 7% — 30 years</text>
      {[10, 30, 50, 80].map((v) => (
        <g key={v}>
          <line x1="70" y1={y(v)} x2="610" y2={y(v)} className="stroke-border" strokeWidth="1" strokeDasharray="4 4" />
          <text x="62" y={y(v) + 5} textAnchor="end" fontSize="12" className="fill-muted-foreground">${v}k</text>
        </g>
      ))}
      {[0, 10, 20, 30].map((t) => (
        <text key={t} x={x(t)} y="322" textAnchor="middle" fontSize="12" className="fill-muted-foreground">yr {t}</text>
      ))}
      <polyline points={simple} fill="none" strokeWidth="3" strokeDasharray="8 5" className="stroke-muted-foreground" />
      <polyline points={compound} fill="none" strokeWidth="4" className="stroke-primary" strokeLinecap="round" />
      <circle cx={x(30)} cy={y(76.123)} r="6" className="fill-primary" />
      <text x={x(30) - 12} y={y(76.123) - 14} textAnchor="end" fontSize="14" fontWeight="700" className="fill-primary">$76,123</text>
      <text x="470" y="250" fontSize="13" className="fill-muted-foreground">simple: $31,000</text>
      <text x="300" y="150" fontSize="13" fontWeight="700" className="fill-primary">compounding</text>
    </SvgShell>
  );
}

// 3 — Grade weights stacked bar: where the final sits.
export function GradeWeightsVisual() {
  // Weights: homework 20, quizzes 15, midterm 25, final 40 → widths of 540px
  const segs = [
    { label: 'HW 20%', w: 108, cls: 'fill-primary/30' },
    { label: 'Quiz 15%', w: 81, cls: 'fill-primary/50' },
    { label: 'Mid 25%', w: 135, cls: 'fill-primary/70' },
    { label: 'Final 40%', w: 216, cls: 'fill-primary' },
  ];
  let cursor = 50;
  return (
    <SvgShell
      titleId="gw-t"
      descId="gw-d"
      title="How course grade weights stack: homework 20, quizzes 15, midterm 25, final 40 percent"
      desc="Stacked bar showing the final exam controls 40 percent of the course grade"
    >
      <rect x="0" y="0" width="640" height="360" rx="16" className="fill-card" />
      <rect x="0" y="0" width="640" height="360" rx="16" fill="none" strokeWidth="2" className="stroke-border" />
      <text x="320" y="48" textAnchor="middle" fontSize="18" fontWeight="700" className="fill-foreground">Where does your grade come from?</text>
      <text x="320" y="76" textAnchor="middle" fontSize="14" className="fill-muted-foreground">Typical syllabus weights — effort follows weight</text>
      {segs.map((s) => {
        const el = (
          <g key={s.label}>
            <rect x={cursor} y={130} width={s.w} height={90} className={s.cls} />
            <text x={cursor + s.w / 2} y={168} textAnchor="middle" fontSize="15" fontWeight="700" fill="white">{s.label}</text>
          </g>
        );
        cursor += s.w;
        return el;
      })}
      <text x="50" y={250} fontSize="14" className="fill-muted-foreground">60% locked before the final →</text>
      <text x="440" y={250} fontSize="14" fontWeight="700" className="fill-primary">← 40% decided by one exam</text>
      <text x="320" y={300} textAnchor="middle" fontSize="14" className="fill-muted-foreground">Formula: needed = (target − current × 0.60) ÷ 0.40</text>
    </SvgShell>
  );
}

// 4 — Stacked discounts: 20% + 10% = 28%, bars shrink sequentially.
export function DiscountStackVisual() {
  // Bar widths of 540px: 100 → 80 → 72
  return (
    <SvgShell
      titleId="ds-t"
      descId="ds-d"
      title="Stacked discounts multiply: 20 percent then 10 percent equals 28 percent off, not 30"
      desc="Bar chart: $100 drops to $80 then $72, a $28 total saving"
    >
      <rect x="0" y="0" width="640" height="360" rx="16" className="fill-card" />
      <rect x="0" y="0" width="640" height="360" rx="16" fill="none" strokeWidth="2" className="stroke-border" />
      <text x="320" y="44" textAnchor="middle" fontSize="18" fontWeight="700" className="fill-foreground">20% + 10% ≠ 30%</text>
      <text x="50" y="100" fontSize="14" className="fill-muted-foreground">Start $100</text>
      <rect x="50" y="112" width="540" height="44" rx="8" className="fill-muted-foreground/30" />
      <text x="580" y="140" textAnchor="end" fontSize="14" fontWeight="700" fill="white">$100</text>
      <text x="50" y="188" fontSize="14" className="fill-muted-foreground">After 20% off → $80</text>
      <rect x="50" y="200" width="432" height="44" rx="8" className="fill-primary/60" />
      <text x="472" y="228" textAnchor="end" fontSize="14" fontWeight="700" fill="white">$80</text>
      <text x="50" y="276" fontSize="14" className="fill-muted-foreground">Extra 10% off → $72 (total 28% off)</text>
      <rect x="50" y="288" width="389" height="44" rx="8" className="fill-primary" />
      <text x="429" y="316" textAnchor="end" fontSize="14" fontWeight="700" fill="white">$72</text>
    </SvgShell>
  );
}

export const ARTICLE_VISUALS = {
  'percent-forms': PercentFormsVisual,
  'compound-growth': CompoundGrowthVisual,
  'grade-weights': GradeWeightsVisual,
  'discount-stack': DiscountStackVisual,
} as const;

export type ArticleVisualKey = keyof typeof ARTICLE_VISUALS;
