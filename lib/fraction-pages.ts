// Allowlist for the inverse-percentage cluster ("what is X out of Y as a percent").
//
// STRICT ALLOWLIST ARCHITECTURE:
// - every page must be added here explicitly, by hand, with its own hand-written FAQ
// - there is intentionally NO generator, NO cartesian expansion, and NO regex that
//   admits arbitrary numbers (routes are literal static segments under app/)
// - lib/pseo.ts and its `% of` generator are intentionally NOT reused
//
// Adding the next page (19/25, 5/8) means: append one entry + create its literal
// route folder. Nothing else changes.

import { calculateFractionPercentage, simplifyFraction, getLetterGrade } from './percentage-math';
import { formatNumber } from './utils';

export interface FractionPercentPage {
  part: number;
  whole: number;
  /** Route slug without leading slash, e.g. "what-is-32-out-of-40-as-a-percent". */
  slug: string;
  /** Real implementation date (ISO) used for the sitemap lastModified. */
  lastModified: string;
  /** Hand-written FAQ — rendered visibly AND used to build the FAQPage JSON-LD (1:1). */
  faq: Array<{ question: string; answer: string }>;
}

export const FRACTION_PERCENT_PAGES: FractionPercentPage[] = [
  {
    part: 32,
    whole: 40,
    slug: 'what-is-32-out-of-40-as-a-percent',
    lastModified: '2026-08-29',
    faq: [
      {
        question: 'What is 32 out of 40 as a percentage?',
        answer:
          '32 out of 40 is 80%. Divide 32 by 40 to get 0.8, then multiply by 100 to get 80%.',
      },
      {
        question: 'How many questions did you miss if you got 32 out of 40?',
        answer:
          'You missed 8 questions: 40 − 32 = 8, since 32 of the 40 were correct.',
      },
      {
        question: 'What grade is 32 out of 40?',
        answer:
          '32 out of 40 equals 80%, which is a B on the common US 90/80/70/60 grading scale. Grading systems vary by school, so always check the scale your institution uses.',
      },
    ],
  },
];

export const FRACTION_PAGE_HUB_PATH = '/calculators/basic-percent/fraction-to-percent';

export function getFractionPage(slug: string): FractionPercentPage | undefined {
  return FRACTION_PERCENT_PAGES.find((p) => p.slug === slug);
}

/**
 * Derived display data for one allowlist entry, computed exclusively through the
 * shared Phase 1 helpers (lib/percentage-math.ts) — never hardcoded per page.
 */
export function getFractionPageData(page: FractionPercentPage) {
  const percentage = calculateFractionPercentage(page.part, page.whole);
  const decimal = page.part / page.whole;
  const simplified = simplifyFraction(page.part, page.whole);
  const missed = page.whole - page.part;
  const grade = getLetterGrade(percentage);
  const nearby = [-2, -1, 0, 1, 2].map((offset) => {
    const part = page.part + offset;
    return {
      part,
      isCurrent: offset === 0,
      percentageLabel: formatNumber(calculateFractionPercentage(part, page.whole), 2),
    };
  });
  return { percentage, decimal, simplified, missed, grade, nearby };
}

/**
 * Structured data for one entry. Pure functions so tests can assert the exact
 * objects that the page renders. No ratings/reviews are ever emitted.
 */
export function buildFractionPageSchemas(page: FractionPercentPage) {
  const url = `https://www.percentlab.app/${page.slug}`;
  const hubUrl = `https://www.percentlab.app${FRACTION_PAGE_HUB_PATH}`;
  const title = `What Is ${page.part} Out of ${page.whole} as a Percent?`;

  const webApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${page.part} out of ${page.whole} as a Percent Calculator`,
    url,
    applicationCategory: 'EducationApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    description: `Free calculator and guide for converting ${page.part} out of ${page.whole} to a percentage: ${page.part} out of ${page.whole} = ${formatNumber(calculateFractionPercentage(page.part, page.whole), 2)}%, with the simplified fraction and a prefilled fraction-to-percent calculator.`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.percentlab.app/' },
      { '@type': 'ListItem', position: 2, name: 'Fraction to Percent', item: hubUrl },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return { webApp, breadcrumb, faq };
}
