import { MetadataRoute } from 'next';
import { CATEGORIES } from '@/data/calculators';
import { BLOG_CATEGORIES } from '@/data/blog';
import { generatePSEOPages } from '@/lib/pseo';

const SITE_URL = process.env.SITE_URL || 'https://www.percentlab.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date('2026-01-18'),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date('2026-01-18'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date('2026-01-18'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date('2026-01-18'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date('2026-02-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms-of-use`,
      lastModified: new Date('2026-02-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date('2026-01-18'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ];

  // Add calculator category pages
  const calculatorCategories = CATEGORIES.map(category => ({
    url: `${SITE_URL}/calculators/${category.id}`,
    lastModified: new Date('2025-11-13'),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Add calculator pages
  const calculatorPages = CATEGORIES.flatMap(category =>
    category.calculators.map(calculator => ({
      url: `${SITE_URL}/calculators/${category.id}/${calculator.slug}`,
      lastModified: new Date(calculator.lastUpdated), // ✅ هاد صحيح — من الـ data
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  );

  // Add blog category pages
  const blogCategories = BLOG_CATEGORIES.map(blogCategory => ({
    url: `${SITE_URL}/blog/${blogCategory.slug}`,
    lastModified: new Date('2026-01-18'),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Add PSEO pages
  const pseoPages = generatePSEOPages().map(page => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified: new Date('2026-01-18'),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...calculatorCategories,
    ...calculatorPages,
    ...blogCategories,
    ...pseoPages,
  ];
}
