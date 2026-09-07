// Embeddable widget manifest (backlink program, Phase 1).
// WIDGETS = calculators shippable as chromeless /embed/* iframes.
// The SEO payload is NOT the iframe (Google doesn't count iframe links as
// backlinks) — it's the plain <a> "Powered by" links in the pasted snippet
// (see buildSnippet) plus the followed credit link inside the iframe.

export interface WidgetDef {
  category: string;
  slug: string;
  title: string;
  blurb: string;
  // Fixed iframe height per widget: must fit the form + result + credit line.
  // Re-measure after any CalculatorForm redesign.
  height: number;
}

export const WIDGETS: WidgetDef[] = [
  {
    category: 'basic-percent',
    slug: 'percent-of',
    title: 'Percent Of Calculator',
    blurb: 'What is X% of Y — the everyday percentage widget for blogs and shops.',
    height: 660,
  },
  {
    category: 'finance',
    slug: 'discount',
    title: 'Discount Calculator',
    blurb: 'Sale prices in one click — made for deal blogs and coupon sites.',
    height: 700,
  },
  {
    category: 'daily',
    slug: 'tip-calculator',
    title: 'Tip Calculator',
    blurb: 'Restaurant tips without mental math — for food and travel blogs.',
    height: 700,
  },
];

export const SITE_URL = 'https://www.percentlab.app';

export function widgetEmbedUrl(w: WidgetDef): string {
  return `${SITE_URL}/embed/${w.category}/${w.slug}`;
}

export function widgetCanonicalUrl(w: WidgetDef): string {
  return `${SITE_URL}/calculators/${w.category}/${w.slug}`;
}

export type WidgetWidth = '100%' | '480px' | '360px';

export function buildSnippet(w: WidgetDef, width: WidgetWidth): string {
  const maxWidth = width === '100%' ? '480px' : width;
  return `<iframe src="${widgetEmbedUrl(w)}" width="${width}" height="${w.height}" style="border:1px solid #e5e7eb;border-radius:12px;max-width:${maxWidth}" loading="lazy" title="${w.title} by PercentLab"></iframe>
<p style="font-size:12px;color:#6b7280"><a href="${widgetCanonicalUrl(w)}">${w.title}</a> powered by <a href="${SITE_URL}/">PercentLab</a></p>`;
}

export function isWidget(categoryId: string, slug: string): boolean {
  return WIDGETS.some((w) => w.category === categoryId && w.slug === slug);
}
