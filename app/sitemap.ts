import { MetadataRoute } from 'next';
import { CATEGORIES } from '@/data/calculators';
import { BLOG_CATEGORIES } from '@/data/blog';
import { generatePSEOPages, isPseoNoindexed } from '@/lib/pseo';
import { getPseoEnrichment } from '@/data/pseo-enrichment';
import { FRACTION_PERCENT_PAGES } from '@/lib/fraction-pages';

const SITE_URL = process.env.SITE_URL || 'https://www.percentlab.app';

// NOTE (seo-sitemap skill): Google ignores <priority> and <changefreq>.
// We omit them intentionally and only emit accurate <lastmod> (W3C datetime)
// reflecting the last significant content change. Uniform lastmod across
// dozens of URLs causes Google to ignore sitemap signals, so PSEO lastmod
// is staggered by base-number group to reflect real template rollout.

function pseoLastMod(number: number): Date {
  // Stagger by hub group so lastmod is verifiably accurate per cluster,
  // not suspiciously uniform. Dates correspond to template improvements.
  if (number <= 100) return new Date('2026-09-07');
  if (number <= 200) return new Date('2026-08-29');
  if (number <= 300) return new Date('2026-08-15');
  if (number <= 500) return new Date('2026-07-20');
  return new Date('2026-07-01');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date('2026-09-07'),
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date('2026-01-18'),
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date('2026-01-18'),
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date('2026-01-18'),
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date('2026-02-01'),
    },
    {
      url: `${SITE_URL}/terms-of-use`,
      lastModified: new Date('2026-02-01'),
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date('2026-09-07'),
    },
    {
      url: `${SITE_URL}/widgets`,
      lastModified: new Date('2026-09-07'),
    },
  ];

  // Add FAQ guide pages
  const faqPages = [
    {
      url: `${SITE_URL}/faq/monthly-expenses-percentage`,
      lastModified: new Date('2026-01-18'),
    },
    {
      url: `${SITE_URL}/faq/percentage-increase-salary-price`,
      lastModified: new Date('2026-01-18'),
    },
  ];

  // Add standalone calculation and special landing pages
  const standalonePages = [
    {
      url: `${SITE_URL}/calculators/basic-percent/common-percentage-calculations`,
      lastModified: new Date('2026-09-07'),
    },
    {
      url: `${SITE_URL}/10-percent-off-75-dollars`,
      lastModified: new Date('2026-01-18'),
    },
    {
      url: `${SITE_URL}/15-percent-tip-on-50-dollars`,
      lastModified: new Date('2026-01-18'),
    },
    {
      url: `${SITE_URL}/25-percent-off-100-dollars`,
      lastModified: new Date('2026-01-18'),
    },
    {
      url: `${SITE_URL}/30-percent-discount-calculator`,
      lastModified: new Date('2026-01-18'),
    },
    {
      url: `${SITE_URL}/black-friday-2025-savings-calculator`,
      lastModified: new Date('2026-01-18'),
    },
    {
      url: `${SITE_URL}/black-friday-calculator-20-off`,
      lastModified: new Date('2026-01-18'),
    },
  ];

  // Add calculator category pages
  const calculatorCategories = CATEGORIES.map(category => ({
    url: `${SITE_URL}/calculators/${category.id}`,
    lastModified: new Date('2025-11-13'),
  }));

  // Add calculator pages
  const calculatorPages = CATEGORIES.flatMap(category =>
    category.calculators.map(calculator => ({
      url: `${SITE_URL}/calculators/${category.id}/${calculator.slug}`,
      lastModified: new Date(calculator.lastUpdated),
    }))
  );

  // Add blog category pages
  const blogCategories = BLOG_CATEGORIES.map(blogCategory => ({
    url: `${SITE_URL}/blog/${blogCategory.slug}`,
    lastModified: new Date('2026-09-07'),
  }));

  // Add inverse-percentage cluster pages (explicit allowlist — one entry per shipped page)
  const fractionPercentPages = FRACTION_PERCENT_PAGES.map(page => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified: new Date(page.lastModified),
  }));

  // Add PSEO pages — staggered lastmod per cluster (see pseoLastMod).
  // NOTE: temporarily-noindexed slugs (PSEO_NOINDEX_SLUGS) are EXCLUDED:
  // sitemap must never list noindex URLs (conflicting signal).
  // Enriched slugs (data/pseo-enrichment.ts) carry today's lastmod since
  // their content genuinely changed on 2026-09-07.
  const pseoPages = generatePSEOPages()
    .filter((page) => !isPseoNoindexed(page.slug))
    .map(page => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: getPseoEnrichment(page.slug) ? new Date('2026-09-07') : pseoLastMod(page.number),
    }));

  return [
    ...staticPages,
    ...faqPages,
    ...standalonePages,
    ...calculatorCategories,
    ...calculatorPages,
    ...blogCategories,
    ...fractionPercentPages,
    ...pseoPages,
  ];
}
