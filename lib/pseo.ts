// Programmatic SEO configuration for percentage calculation pages

export interface PSEOPage {
  percent: number;
  number: number;
  slug: string;
}

// Generate a comprehensive list of common percentage calculations
export function generatePSEOPages(): PSEOPage[] {
  const pages: PSEOPage[] = [];
  const commonNumbers = [10, 20, 25, 30, 40, 50, 60, 75, 80, 90, 100, 150, 200, 250, 300, 400, 500, 1000];
  const commonPercentages = [5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100];

  // Generate top combinations for initial launch (~20 pages)
  const priorityCombinations = [
    { percent: 10, number: 200 },
    { percent: 20, number: 200 },
    { percent: 20, number: 150 },
    { percent: 25, number: 100 },
    { percent: 30, number: 100 },
    { percent: 50, number: 100 },
    { percent: 10, number: 100 },
    { percent: 15, number: 100 },
    { percent: 20, number: 100 },
    { percent: 10, number: 50 },
    { percent: 20, number: 50 },
    { percent: 25, number: 200 },
    { percent: 30, number: 200 },
    { percent: 50, number: 200 },
    { percent: 10, number: 1000 },
    { percent: 20, number: 1000 },
    { percent: 5, number: 100 },
    { percent: 75, number: 100 },
    { percent: 80, number: 100 },
    { percent: 90, number: 100 },
  ];

  for (const combo of priorityCombinations) {
    pages.push({
      percent: combo.percent,
      number: combo.number,
      slug: `what-is-${combo.percent}-percent-of-${combo.number}`,
    });
  }

  return pages;
}

// Generate all possible combinations (for future expansion)
export function generateAllPSEOPages(): PSEOPage[] {
  const pages: PSEOPage[] = [];
  const commonNumbers = [10, 20, 25, 30, 40, 50, 60, 75, 80, 90, 100, 150, 200, 250, 300, 400, 500, 1000];
  const commonPercentages = [5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100];

  for (const percent of commonPercentages) {
    for (const number of commonNumbers) {
      pages.push({
        percent,
        number,
        slug: `what-is-${percent}-percent-of-${number}`,
      });
    }
  }

  return pages;
}

// Get related calculations for a given page
export function getRelatedCalculations(percent: number, number: number, limit: number = 5): PSEOPage[] {
  const allPages = generateAllPSEOPages();

  // Find related by similar percentage or number
  const related = allPages
    .filter((page) => {
      // Don't include the current page
      if (page.percent === percent && page.number === number) return false;

      // Include if percentage is within 10 points or number is similar
      const percentageSimilar = Math.abs(page.percent - percent) <= 10;
      const numberSimilar = Math.abs(page.number - number) <= 100 || page.number === number;

      return percentageSimilar || numberSimilar;
    })
    .slice(0, limit);

  return related;
}

// Format URL slug
export function formatSlug(percent: number, number: number): string {
  return `what-is-${percent}-percent-of-${number}`;
}

// Parse slug to get percent and number
export function parseSlug(slug: string): { percent: number; number: number } | null {
  const match = slug.match(/what-is-(\d+)-percent-of-(\d+)/);
  if (!match) return null;

  return {
    percent: parseInt(match[1], 10),
    number: parseInt(match[2], 10),
  };
}
