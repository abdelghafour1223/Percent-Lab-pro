import {
  FRACTION_PERCENT_PAGES,
  getFractionPage,
  getFractionPageData,
  buildFractionPageSchemas,
} from '../fraction-pages';
import { parseSlug } from '../pseo';
import sitemap from '@/app/sitemap';
import FractionPercentPage, { generateMetadata } from '@/app/what-is-32-out-of-40-as-a-percent/page';
import { renderToString } from 'react-dom/server';

const page = getFractionPage('what-is-32-out-of-40-as-a-percent')!;

describe('fraction-pages allowlist (Phase 3: exactly one entry)', () => {
  it('contains exactly one active entry: 32/40', () => {
    expect(FRACTION_PERCENT_PAGES).toHaveLength(1);
    expect(page.part).toBe(32);
    expect(page.whole).toBe(40);
    expect(page.slug).toBe('what-is-32-out-of-40-as-a-percent');
  });

  it('computes the mathematical result through the shared helpers', () => {
    const data = getFractionPageData(page);
    expect(data.percentage).toBe(80); // 32/40 = 80
    expect(data.decimal).toBe(0.8); // decimal form
    expect(data.simplified).toEqual({ numerator: 4, denominator: 5 }); // 32/40 = 4/5
    expect(data.missed).toBe(8); // 40 - 32
    expect(data.grade).toBe('B'); // 80 → B on the stated 90/80/70/60 scale
  });

  it('derives nearby scores around 32/40 with the current row marked', () => {
    const { nearby } = getFractionPageData(page);
    expect(nearby.map((n) => n.part)).toEqual([30, 31, 32, 33, 34]);
    expect(nearby.map((n) => n.percentageLabel)).toEqual(['75', '77.5', '80', '82.5', '85']);
    expect(nearby.find((n) => n.isCurrent)?.part).toBe(32);
  });
});

describe('route semantics: no collision with the % of PSEO route', () => {
  it('new slug is NOT parseable by the existing % of parser', () => {
    expect(parseSlug('what-is-32-out-of-40-as-a-percent')).toBeNull();
  });

  it('existing % of slugs keep their exact meaning (regression guard)', () => {
    expect(parseSlug('what-is-20-percent-of-100')).toEqual({ percent: 20, number: 100 });
    expect(parseSlug('what-is-15-percent-of-200')).toEqual({ percent: 15, number: 200 });
  });
});

describe('page metadata', () => {
  it('uses the exact canonical URL', async () => {
    const meta = await generateMetadata();
    expect(meta.alternates?.canonical).toBe(
      'https://www.percentlab.app/what-is-32-out-of-40-as-a-percent'
    );
    expect(meta.title).toBe('What Is 32 Out of 40 as a Percent?');
  });
});

describe('structured data', () => {
  const schemas = buildFractionPageSchemas(page);
  const all = JSON.stringify(schemas);

  it('emits WebApplication, BreadcrumbList, FAQPage — nothing else', () => {
    expect(schemas.webApp['@type']).toBe('WebApplication');
    expect(schemas.breadcrumb['@type']).toBe('BreadcrumbList');
    expect(schemas.faq['@type']).toBe('FAQPage');
  });

  it('contains no ratings/reviews of any kind', () => {
    expect(all).not.toContain('AggregateRating');
    expect(all).not.toContain('Review');
    expect(all).not.toContain('ratingValue');
    expect(all).not.toContain('ratingCount');
  });

  it('breadcrumb is Home → Fraction to Percent → page, with no fragment URLs', () => {
    const items = schemas.breadcrumb.itemListElement;
    expect(items.map((i) => i.name)).toEqual([
      'Home',
      'Fraction to Percent',
      'What Is 32 Out of 40 as a Percent?',
    ]);
    for (const item of items) {
      expect(item.item).toMatch(/^https:\/\/www\.percentlab\.app\//);
      expect(item.item).not.toContain('#');
    }
  });

  it('FAQ JSON-LD is built from the exact same array rendered visibly on the page', () => {
    const schemaQuestions = schemas.faq.mainEntity.map((q: { name: string }) => q.name);
    const schemaAnswers = schemas.faq.mainEntity.map(
      (q: { acceptedAnswer: { text: string } }) => q.acceptedAnswer.text
    );
    expect(schemaQuestions).toEqual(page.faq.map((f) => f.question));
    expect(schemaAnswers).toEqual(page.faq.map((f) => f.answer));
  });
});

describe('server-rendered page output', () => {
  // React's renderToString inserts <!-- --> separators between adjacent text nodes;
  // strip them so assertions match the visible text content.
  const html = renderToString(<FractionPercentPage />).replace(/<!-- -->/g, '');

  it('renders the immediate answer in server HTML (visible without JS)', () => {
    expect(html).toContain('What Is 32 Out of 40 as a Percent?');
    expect(html).toContain('32 out of 40 = 80%');
  });

  it('shows the substitution, simplified fraction and decimal', () => {
    expect(html).toContain('32 ÷ 40 = 0.8');
    expect(html).toContain('0.8 × 100 = 80%');
    expect(html).toContain('32/40 = 4/5');
  });

  it('prefills the calculator with numerator 32 and denominator 40', () => {
    expect(html).toContain('value="32"');
    expect(html).toContain('value="40"');
  });

  it('renders the score context with hedged grade wording', () => {
    expect(html).toContain('Points missed');
    expect(html).toContain('>8<');
    expect(html).toContain(
      'On the common US 90/80/70/60 scale, 80% is a B. Grading systems vary by school.'
    );
  });

  it('renders the nearby-score table including 31/40–34/40', () => {
    expect(html).toContain('31/40');
    expect(html).toContain('77.5%');
    expect(html).toContain('34/40');
    expect(html).toContain('85%');
  });

  it('renders all visible FAQ questions and answers', () => {
    for (const item of page.faq) {
      expect(html).toContain(item.question);
      expect(html).toContain(item.answer);
    }
  });

  it('links only to live fraction/score intent tools (no finance/directory links)', () => {
    expect(html).toContain('href="/calculators/basic-percent/fraction-to-percent"');
    expect(html).toContain('href="/calculators/education/test-score"');
    expect(html).toContain('href="/calculators/education/grade-percentage"');
    expect(html).not.toContain('common-percentage-calculations');
    expect(html).not.toContain('black-friday');
  });
});

describe('sitemap integration', () => {
  const entries = sitemap();
  const newUrl = 'https://www.percentlab.app/what-is-32-out-of-40-as-a-percent';

  it('includes the new URL exactly once with a real lastModified date', () => {
    const matches = entries.filter((e) => e.url === newUrl);
    expect(matches).toHaveLength(1);
    expect(matches[0].lastModified).toEqual(new Date('2026-08-29'));
  });

  it('keeps the existing 50 % of PSEO entries unchanged', () => {
    const pseoEntries = entries.filter((e) => e.url.includes('-percent-of-'));
    expect(pseoEntries).toHaveLength(50);
    expect(entries.filter((e) => e.url === 'https://www.percentlab.app/what-is-20-percent-of-100')).toHaveLength(1);
  });
});
