/**
 * Blog Categories Data Structure
 * Single source of truth for blog organization
 */

export interface BlogCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'percentage-basics',
    slug: 'percentage-basics',
    title: 'Percentage Basics',
    description: 'Master the fundamentals of percentage calculations with step-by-step guides, formulas, and practical examples for everyday use.',
    icon: 'calculator',
    metaTitle: 'Percentage Basics – Tutorials & Guides',
    metaDescription: 'Learn percentage fundamentals with easy-to-follow tutorials. Master basic calculations, formulas, and real-world applications.',
  },
  {
    id: 'finance',
    slug: 'finance',
    title: 'Finance & Money',
    description: 'Understand financial percentages including ROI, interest rates, profit margins, and investment calculations with expert insights.',
    icon: 'dollar-sign',
    metaTitle: 'Finance & Money Percentage Guides',
    metaDescription: 'Master financial percentage calculations. Learn about ROI, interest rates, profit margins, and investment math with practical examples.',
  },
  {
    id: 'education',
    slug: 'education',
    title: 'Education & Grades',
    description: 'Learn how to calculate grades, GPA, test scores, and academic percentages. Perfect for students, teachers, and parents.',
    icon: 'graduation-cap',
    metaTitle: 'Education & Grade Percentage Tutorials',
    metaDescription: 'Calculate grades and academic percentages easily. Tutorials for students, teachers, and parents on GPA, test scores, and more.',
  },
  {
    id: 'shopping',
    slug: 'shopping',
    title: 'Shopping & Discounts',
    description: 'Save money by understanding discounts, sales tax, tips, and markup calculations. Smart shopping starts with percentage knowledge.',
    icon: 'shopping-cart',
    metaTitle: 'Shopping & Discount Percentage Guides',
    metaDescription: 'Master shopping math with discount, sales tax, and tip calculations. Learn to save money with smart percentage knowledge.',
  },
];

/**
 * Get all blog categories
 */
export function getAllBlogCategories(): BlogCategory[] {
  return BLOG_CATEGORIES;
}

/**
 * Get blog category by slug
 */
export function getBlogCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find(category => category.slug === slug);
}

/**
 * Get related blog categories (exclude current)
 */
export function getRelatedBlogCategories(currentSlug: string, limit: number = 3): BlogCategory[] {
  return BLOG_CATEGORIES.filter(category => category.slug !== currentSlug).slice(0, limit);
}
