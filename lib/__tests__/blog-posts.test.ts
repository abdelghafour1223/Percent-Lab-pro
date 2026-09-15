import { BLOG_POSTS, getBlogPost, getBlogPostsByCategory } from '@/data/blog-posts';
import { BLOG_CATEGORIES } from '@/data/blog';

const VALID_HREF_PREFIXES = [
  '/calculators/',
  '/what-is-',
  '/blog/',
  '/faq/',
  '/about',
];

describe('blog posts data integrity', () => {
  test('slugs are unique and categories are valid', () => {
    const slugs = BLOG_POSTS.map((p) => `${p.category}/${p.slug}`);
    expect(new Set(slugs).size).toBe(slugs.length);
    const validCategories = new Set(BLOG_CATEGORIES.map((c) => c.slug));
    for (const post of BLOG_POSTS) {
      expect(validCategories.has(post.category)).toBe(true);
    }
  });

  test('one post per category to start', () => {
    for (const category of BLOG_CATEGORIES) {
      expect(getBlogPostsByCategory(category.slug).length).toBeGreaterThanOrEqual(1);
    }
  });

  test('SEO minimums: titles, descriptions, FAQs, links', () => {
    for (const post of BLOG_POSTS) {
      expect(post.metaTitle.length).toBeLessThanOrEqual(65);
      expect(post.metaDescription.length).toBeGreaterThanOrEqual(120);
      expect(post.metaDescription.length).toBeLessThanOrEqual(165);
      expect(post.faqs.length).toBeGreaterThanOrEqual(3);
      expect(post.relatedLinks.length).toBeGreaterThanOrEqual(3);
      expect(post.workedExamples.length).toBeGreaterThanOrEqual(2);
      expect(post.keywords.length).toBeGreaterThanOrEqual(3);
    }
  });

  test('no broken internal link prefixes', () => {
    for (const post of BLOG_POSTS) {
      for (const link of post.relatedLinks) {
        expect(link.href).not.toContain('/calculators/common/');
        expect(
          VALID_HREF_PREFIXES.some((prefix) => link.href.startsWith(prefix))
        ).toBe(true);
      }
    }
  });

  test('getBlogPost resolves every listed post', () => {
    for (const post of BLOG_POSTS) {
      expect(getBlogPost(post.category, post.slug)?.title).toBe(post.title);
    }
    expect(getBlogPost('finance', 'no-such-post')).toBeUndefined();
  });
});
