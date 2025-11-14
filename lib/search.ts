// Search utility for filtering calculators
import { CATEGORIES, Calculator } from '@/data/calculators';

export interface SearchResult {
  calculator: Calculator;
  categoryId: string;
  categoryTitle: string;
  url: string;
  relevance: number;
}

/**
 * Search calculators by query string
 * Searches in: title, description, formula, and category
 * Returns results sorted by relevance
 */
export function searchCalculators(query: string, limit: number = 10): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Search through all categories and calculators
  CATEGORIES.forEach((category) => {
    category.calculators.forEach((calculator) => {
      const titleMatch = calculator.title.toLowerCase().includes(searchTerm);
      const descriptionMatch = calculator.description.toLowerCase().includes(searchTerm);
      const formulaMatch = calculator.formula.toLowerCase().includes(searchTerm);
      const categoryMatch = category.title.toLowerCase().includes(searchTerm);

      // Calculate relevance score (higher = more relevant)
      let relevance = 0;

      // Title match is most important
      if (titleMatch) {
        relevance += 100;
        // Exact match or starts with gets bonus
        if (calculator.title.toLowerCase() === searchTerm) {
          relevance += 50;
        } else if (calculator.title.toLowerCase().startsWith(searchTerm)) {
          relevance += 25;
        }
      }

      // Description match is second most important
      if (descriptionMatch) {
        relevance += 50;
      }

      // Category match
      if (categoryMatch) {
        relevance += 30;
      }

      // Formula match (less important)
      if (formulaMatch) {
        relevance += 20;
      }

      // Only include if there's a match
      if (relevance > 0) {
        results.push({
          calculator,
          categoryId: category.id,
          categoryTitle: category.title,
          url: `/calculators/${category.id}/${calculator.slug}`,
          relevance,
        });
      }
    });
  });

  // Sort by relevance (highest first) and limit results
  return results
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit);
}

/**
 * Get popular/featured calculators as suggestions
 */
export function getPopularCalculators(limit: number = 5): SearchResult[] {
  const popularSlugs = [
    'percent-of',
    'percentage-increase',
    'discount',
    'tip-calculator',
    'grade-percentage',
  ];

  const results: SearchResult[] = [];

  CATEGORIES.forEach((category) => {
    category.calculators.forEach((calculator) => {
      if (popularSlugs.includes(calculator.slug)) {
        results.push({
          calculator,
          categoryId: category.id,
          categoryTitle: category.title,
          url: `/calculators/${category.id}/${calculator.slug}`,
          relevance: 0,
        });
      }
    });
  });

  return results.slice(0, limit);
}
