// Data manifest for all calculators organized by category
export interface Calculator {
  slug: string;
  title: string;
  description: string;
  formula: string;
  example: {
    [key: string]: number | string;
  };
  seo: {
    title: string;
    description: string;
  };
  faq: Array<{
    q: string;
    a: string;
  }>;
  lastUpdated: string;
  hasChart?: boolean;
  schemaType?: 'HowTo' | 'FAQPage';
}

export interface Category {
  id: string;
  title: string;
  description: string;
  calculators: Calculator[];
  comingSoon: string[];
  icon?: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'basic-percent',
    title: 'Basic Percentages',
    description: 'Core percentage calculators: percent of, what percent, increase/decrease.',
    icon: 'calculator',
    calculators: [
      {
        slug: 'percent-of',
        title: 'Percent Of Calculator',
        description: 'Calculate X% of Y with step-by-step explanation and real-world examples.',
        formula: 'result = (percentage / 100) × number',
        example: {
          percentage: 20,
          number: 500,
          result: 100,
        },
        seo: {
          title: 'Percent Of Calculator - Calculate X% of Y | PercentLab',
          description: 'Free online percent of calculator. Calculate what is X% of Y with detailed step-by-step explanation and examples. Instant results with formula breakdown.',
        },
        faq: [
          {
            q: 'How do I calculate 20% of 500?',
            a: 'To calculate 20% of 500, divide 20 by 100 to get 0.20, then multiply by 500: (20 ÷ 100) × 500 = 0.20 × 500 = 100. So 20% of 500 is 100.',
          },
          {
            q: 'What is the formula for percent of?',
            a: 'The formula is: Result = (Percentage ÷ 100) × Number. For example, to find 15% of 200: (15 ÷ 100) × 200 = 30.',
          },
          {
            q: 'Can I calculate percentages greater than 100%?',
            a: 'Yes, percentages can exceed 100%. For example, 150% of 100 is (150 ÷ 100) × 100 = 150.',
          },
        ],
        lastUpdated: '2025-11-12',
        schemaType: 'HowTo',
      },
    ],
    comingSoon: ['what-percent', 'increase-decrease', 'percentage-change', 'reverse-percentage'],
  },
  {
    id: 'finance',
    title: 'Financial Calculators',
    description: 'ROI, profit margin, compound interest, and other financial percentage calculators.',
    icon: 'dollar-sign',
    calculators: [
      {
        slug: 'roi',
        title: 'ROI Calculator (Return on Investment)',
        description: 'Calculate return on investment percentage with gain/loss analysis.',
        formula: 'ROI % = ((Final Value - Initial Investment) / Initial Investment) × 100',
        example: {
          initialInvestment: 1000,
          finalValue: 1500,
          roi: 50,
        },
        seo: {
          title: 'ROI Calculator - Return on Investment Percentage | PercentLab',
          description: 'Calculate ROI (Return on Investment) percentage. Free online ROI calculator with step-by-step explanation. Determine investment profitability instantly.',
        },
        faq: [
          {
            q: 'How do I calculate ROI percentage?',
            a: 'ROI % = ((Final Value - Initial Investment) / Initial Investment) × 100. For example, if you invest $1,000 and it becomes $1,500: ((1500 - 1000) / 1000) × 100 = 50% ROI.',
          },
          {
            q: 'What is a good ROI percentage?',
            a: 'A "good" ROI depends on the investment type and timeframe. Generally, 7-10% annually for long-term investments is considered solid, while business investments might target 15-25% or higher.',
          },
          {
            q: 'Can ROI be negative?',
            a: 'Yes, negative ROI indicates a loss. For example, investing $1,000 that becomes $800 results in -20% ROI: ((800 - 1000) / 1000) × 100 = -20%.',
          },
        ],
        lastUpdated: '2025-11-12',
        hasChart: true,
        schemaType: 'HowTo',
      },
    ],
    comingSoon: ['profit-margin', 'compound-interest', 'loan-interest', 'mortgage-calculator'],
  },
  {
    id: 'education',
    title: 'Education Calculators',
    description: 'Grade percentages, GPA, test scores, and academic percentage tools.',
    icon: 'graduation-cap',
    calculators: [
      {
        slug: 'grade-percentage',
        title: 'Grade Percentage Calculator',
        description: 'Convert test scores to percentages and letter grades instantly.',
        formula: 'percentage = (points earned / total points) × 100',
        example: {
          pointsEarned: 85,
          totalPoints: 100,
          percentage: 85,
          grade: 'B',
        },
        seo: {
          title: 'Grade Percentage Calculator - Test Score to Grade % | PercentLab',
          description: 'Free grade percentage calculator. Convert test scores to percentages and letter grades. Calculate your grade percentage with step-by-step explanation.',
        },
        faq: [
          {
            q: 'How do I calculate my grade percentage?',
            a: 'Divide your points earned by the total points possible, then multiply by 100. For example, 85 out of 100 points: (85 ÷ 100) × 100 = 85%.',
          },
          {
            q: 'What letter grade is 85%?',
            a: 'In most grading systems, 85% is a B grade. Typically: 90-100% = A, 80-89% = B, 70-79% = C, 60-69% = D, below 60% = F.',
          },
          {
            q: 'How do I calculate percentage if there are multiple tests?',
            a: 'Add up all points earned across tests, divide by total points possible, then multiply by 100. Example: (75 + 80 + 90) out of (100 + 100 + 100) = 245/300 × 100 = 81.67%.',
          },
        ],
        lastUpdated: '2025-11-12',
        schemaType: 'FAQPage',
      },
    ],
    comingSoon: ['gpa-calculator', 'weighted-grade', 'final-grade', 'grade-needed'],
  },
  {
    id: 'daily',
    title: 'Daily Use Calculators',
    description: 'Discount, tip, tax, and other everyday percentage calculations.',
    icon: 'shopping-cart',
    calculators: [
      {
        slug: 'discount',
        title: 'Discount Calculator',
        description: 'Calculate discount percentage and final price after discount.',
        formula: 'final price = original price - (original price × discount% / 100)',
        example: {
          originalPrice: 100,
          discountPercent: 20,
          discountAmount: 20,
          finalPrice: 80,
        },
        seo: {
          title: 'Discount Calculator - Calculate Sale Price & Savings | PercentLab',
          description: 'Free discount calculator. Calculate final price after discount and total savings. Find sale prices with percentage discount calculator.',
        },
        faq: [
          {
            q: 'How do I calculate a 20% discount?',
            a: 'Multiply the original price by 0.20 (20/100) to find the discount amount, then subtract from the original. Example: $100 × 0.20 = $20 discount, so $100 - $20 = $80 final price.',
          },
          {
            q: 'What is 30% off $150?',
            a: 'Discount amount: $150 × 0.30 = $45. Final price: $150 - $45 = $105. So 30% off $150 is $105.',
          },
          {
            q: 'How do I calculate multiple discounts?',
            a: 'Apply discounts sequentially. For 20% then 10% off $100: First discount: $100 - ($100 × 0.20) = $80. Second discount: $80 - ($80 × 0.10) = $72 final price.',
          },
        ],
        lastUpdated: '2025-11-12',
        hasChart: true,
        schemaType: 'HowTo',
      },
    ],
    comingSoon: ['tip-calculator', 'tax-calculator', 'markup-calculator', 'commission-calculator'],
  },
];

// Helper functions
export function getAllCalculators(): Calculator[] {
  return CATEGORIES.flatMap((cat) => cat.calculators);
}

export function getCalculatorBySlug(categoryId: string, slug: string): Calculator | undefined {
  const category = CATEGORIES.find((cat) => cat.id === categoryId);
  return category?.calculators.find((calc) => calc.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}

export function getRelatedCalculators(categoryId: string, currentSlug: string, limit: number = 3): Calculator[] {
  // Get calculators from same category first
  const sameCategory = CATEGORIES.find((cat) => cat.id === categoryId)
    ?.calculators.filter((calc) => calc.slug !== currentSlug) || [];

  // If not enough, add from other categories
  if (sameCategory.length < limit) {
    const otherCategories = CATEGORIES.filter((cat) => cat.id !== categoryId)
      .flatMap((cat) => cat.calculators);
    return [...sameCategory, ...otherCategories].slice(0, limit);
  }

  return sameCategory.slice(0, limit);
}
