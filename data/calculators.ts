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
      {
        slug: 'percentage-increase',
        title: 'Percentage Increase Calculator',
        description: 'Calculate the percentage increase between two numbers. Perfect for salary raises, price increases, and growth rates.',
        formula: 'percentage increase = ((new value - original value) / original value) × 100',
        example: {
          originalValue: 100,
          newValue: 125,
          increase: 25,
          increaseAmount: 25,
        },
        seo: {
          title: 'Percentage Increase Calculator - Calculate % Increase | PercentLab',
          description: 'Free percentage increase calculator. Calculate the percent increase between two values with step-by-step explanation. Find salary raises, price increases, and growth rates.',
        },
        faq: [
          {
            q: 'How do I calculate percentage increase?',
            a: 'To calculate percentage increase, subtract the original value from the new value, divide by the original value, then multiply by 100. Formula: ((New - Original) / Original) × 100.',
          },
          {
            q: 'What is the percentage increase from 100 to 125?',
            a: 'The percentage increase from 100 to 125 is 25%. Calculation: ((125 - 100) / 100) × 100 = (25 / 100) × 100 = 25%.',
          },
          {
            q: 'How do I calculate a salary increase percentage?',
            a: 'Subtract your old salary from your new salary, divide by your old salary, then multiply by 100. For example, if you went from $50,000 to $55,000: ((55,000 - 50,000) / 50,000) × 100 = 10% increase.',
          },
          {
            q: 'Can percentage increase be more than 100%?',
            a: 'Yes, if the new value is more than double the original value. For example, going from 50 to 150 is a 200% increase: ((150 - 50) / 50) × 100 = 200%.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'percentage-decrease',
        title: 'Percentage Decrease Calculator',
        description: 'Calculate the percentage decrease between two numbers. Ideal for weight loss tracking, price drops, and decline rates.',
        formula: 'percentage decrease = ((original value - new value) / original value) × 100',
        example: {
          originalValue: 200,
          newValue: 150,
          decrease: 25,
          decreaseAmount: 50,
        },
        seo: {
          title: 'Percentage Decrease Calculator - Calculate % Reduction | PercentLab',
          description: 'Free percentage decrease calculator. Calculate the percent decrease between two values with detailed steps. Perfect for discounts, weight loss, and decline rates.',
        },
        faq: [
          {
            q: 'How do I calculate percentage decrease?',
            a: 'To calculate percentage decrease, subtract the new value from the original value, divide by the original value, then multiply by 100. Formula: ((Original - New) / Original) × 100.',
          },
          {
            q: 'What is the percentage decrease from 200 to 150?',
            a: 'The percentage decrease from 200 to 150 is 25%. Calculation: ((200 - 150) / 200) × 100 = (50 / 200) × 100 = 25%.',
          },
          {
            q: 'How do I calculate weight loss percentage?',
            a: 'Subtract your current weight from your starting weight, divide by your starting weight, then multiply by 100. For example, from 200 lbs to 180 lbs: ((200 - 180) / 200) × 100 = 10% weight loss.',
          },
          {
            q: 'Is percentage decrease always positive?',
            a: 'Yes, percentage decrease is expressed as a positive number even though it represents a reduction. Going from 100 to 80 is a 20% decrease, not -20%.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'percentage-difference',
        title: 'Percentage Difference Calculator',
        description: 'Calculate the absolute percentage difference between two values. Great for comparing prices, temperatures, and scores.',
        formula: 'percentage difference = |V1 - V2| / ((V1 + V2) / 2) × 100',
        example: {
          value1: 100,
          value2: 120,
          difference: 18.18,
        },
        seo: {
          title: 'Percentage Difference Calculator - Compare Two Values | PercentLab',
          description: 'Free percentage difference calculator. Find the absolute percent difference between two numbers with step-by-step explanation. Compare prices, scores, and more.',
        },
        faq: [
          {
            q: 'How is percentage difference calculated?',
            a: 'Percentage difference is calculated by finding the absolute difference between two values, dividing by their average, then multiplying by 100. Formula: |V1 - V2| / ((V1 + V2) / 2) × 100.',
          },
          {
            q: 'What is the difference between percentage difference and percentage change?',
            a: 'Percentage difference treats both values equally and is symmetric (comparing 100 to 120 gives the same result as 120 to 100). Percentage change assumes one value is the "original" and the other is "new".',
          },
          {
            q: 'When should I use percentage difference?',
            a: 'Use percentage difference when comparing two values where neither is clearly the "starting point", such as comparing prices from two different stores, temperatures in two cities, or test scores from two students.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'what-percent',
        title: 'What Percent Calculator',
        description: 'Find what percent one number is of another. Perfect for calculating test scores, completion rates, and proportions.',
        formula: 'percentage = (part / total) × 100',
        example: {
          part: 25,
          total: 200,
          percentage: 12.5,
        },
        seo: {
          title: 'What Percent Calculator - X is What % of Y | PercentLab',
          description: 'Free what percent calculator. Find out what percentage one number is of another with step-by-step explanation. Calculate test scores, completion rates, and more.',
        },
        faq: [
          {
            q: 'How do I calculate what percent one number is of another?',
            a: 'Divide the part by the total, then multiply by 100. For example, to find what percent 25 is of 200: (25 / 200) × 100 = 0.125 × 100 = 12.5%.',
          },
          {
            q: 'What percent is 30 out of 150?',
            a: '30 out of 150 is 20%. Calculation: (30 / 150) × 100 = 0.2 × 100 = 20%.',
          },
          {
            q: 'How do I calculate my test score as a percentage?',
            a: 'Divide the points you earned by the total points possible, then multiply by 100. For example, if you got 85 out of 100 points: (85 / 100) × 100 = 85%.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'reverse-percentage',
        title: 'Reverse Percentage Calculator',
        description: 'Find the original value before a percentage increase or decrease. Perfect for finding pre-discount prices and original amounts.',
        formula: 'Original Value = Final Value / (1 + Percentage/100) or Final Value / (1 - Percentage/100)',
        example: {
          finalValue: 120,
          percentage: 20,
          originalValue: 100,
        },
        seo: {
          title: 'Reverse Percentage Calculator - Find Original Value | PercentLab',
          description: 'Free reverse percentage calculator. Find the original value before a percentage increase or decrease. Calculate pre-discount prices and original amounts instantly.',
        },
        faq: [
          {
            q: 'How do I calculate reverse percentage?',
            a: 'For an increase: divide the final value by (1 + percentage/100). For a decrease: divide by (1 - percentage/100). Example: If $120 is after a 20% increase, original = 120 / 1.20 = $100.',
          },
          {
            q: 'What was the original price before a 25% discount?',
            a: 'Divide the sale price by (1 - 0.25). If sale price is $75: $75 / 0.75 = $100 original price.',
          },
          {
            q: 'How do I find the value before tax was added?',
            a: 'Divide the total by (1 + tax rate). For $108 with 8% tax: $108 / 1.08 = $100 before tax.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'percentage-of-total',
        title: 'Percentage of Total Calculator',
        description: 'Calculate what percentage each value represents of the total. Perfect for budget breakdowns and data analysis.',
        formula: 'Percentage = (Individual Value / Total) × 100',
        example: {
          value1: 30,
          value2: 70,
          total: 100,
          percent1: 30,
          percent2: 70,
        },
        seo: {
          title: 'Percentage of Total Calculator - Calculate % Distribution | PercentLab',
          description: 'Free percentage of total calculator. Find what percentage each value represents of the whole. Perfect for budget analysis and data distribution.',
        },
        faq: [
          {
            q: 'How do I calculate percentage of total?',
            a: 'Divide each value by the total, then multiply by 100. For example, if you spent $300 out of $1000: (300 / 1000) × 100 = 30% of your budget.',
          },
          {
            q: 'How do I find what percent of total sales each product represents?',
            a: 'Divide each product\'s sales by total sales, then multiply by 100. If Product A sold $5000 out of $20000 total: (5000 / 20000) × 100 = 25%.',
          },
          {
            q: 'Do all percentages of total add up to 100%?',
            a: 'Yes, when you calculate the percentage each part represents of the total, they should sum to 100% (allowing for rounding).',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'fraction-to-percent',
        title: 'Fraction to Percent Calculator',
        description: 'Convert fractions to percentages instantly. Enter numerator and denominator to get the percentage equivalent.',
        formula: 'Percentage = (Numerator / Denominator) × 100',
        example: {
          numerator: 3,
          denominator: 4,
          percentage: 75,
        },
        seo: {
          title: 'Fraction to Percent Calculator - Convert Fractions | PercentLab',
          description: 'Free fraction to percent calculator. Convert any fraction to percentage instantly. Enter numerator and denominator for quick conversion.',
        },
        faq: [
          {
            q: 'How do I convert a fraction to percent?',
            a: 'Divide the numerator by the denominator, then multiply by 100. For example, 3/4 = 0.75 × 100 = 75%.',
          },
          {
            q: 'What is 1/2 as a percentage?',
            a: '1/2 = 0.5 × 100 = 50%',
          },
          {
            q: 'How do I convert mixed fractions to percent?',
            a: 'First convert the mixed fraction to an improper fraction, then divide and multiply by 100. For example, 1 1/4 = 5/4 = 1.25 × 100 = 125%.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'percent-to-decimal',
        title: 'Percent to Decimal Calculator',
        description: 'Convert percentages to decimals instantly. Essential for mathematical calculations and programming.',
        formula: 'Decimal = Percentage / 100',
        example: {
          percentage: 75,
          decimal: 0.75,
        },
        seo: {
          title: 'Percent to Decimal Calculator - Quick Conversion | PercentLab',
          description: 'Free percent to decimal calculator. Convert any percentage to decimal form instantly. Perfect for math, programming, and calculations.',
        },
        faq: [
          {
            q: 'How do I convert percent to decimal?',
            a: 'Divide the percentage by 100. For example, 75% = 75 / 100 = 0.75.',
          },
          {
            q: 'What is 25% as a decimal?',
            a: '25% = 25 / 100 = 0.25',
          },
          {
            q: 'Why do we divide by 100 to convert percent to decimal?',
            a: 'Because "percent" means "per hundred". So 75% literally means 75 per 100, which equals 0.75 in decimal form.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'decimal-to-percent',
        title: 'Decimal to Percent Calculator',
        description: 'Convert decimals to percentages instantly. Enter any decimal to get the percentage equivalent.',
        formula: 'Percentage = Decimal × 100',
        example: {
          decimal: 0.85,
          percentage: 85,
        },
        seo: {
          title: 'Decimal to Percent Calculator - Quick Conversion | PercentLab',
          description: 'Free decimal to percent calculator. Convert any decimal to percentage form instantly. Perfect for statistics and data analysis.',
        },
        faq: [
          {
            q: 'How do I convert decimal to percent?',
            a: 'Multiply the decimal by 100. For example, 0.85 × 100 = 85%.',
          },
          {
            q: 'What is 0.5 as a percentage?',
            a: '0.5 × 100 = 50%',
          },
          {
            q: 'Can decimals greater than 1 be converted to percent?',
            a: 'Yes! Decimals greater than 1 convert to percentages over 100%. For example, 1.5 × 100 = 150%.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'percentage-calculator',
        title: 'General Percentage Calculator',
        description: 'All-in-one percentage calculator. Calculate any percentage operation including increase, decrease, difference, and more.',
        formula: 'Multiple formulas depending on calculation type',
        example: {
          operation: 'calculate',
          value1: 50,
          value2: 100,
          result: 50,
        },
        seo: {
          title: 'Percentage Calculator - All-in-One % Tool | PercentLab',
          description: 'Free comprehensive percentage calculator. Perform any percentage calculation with our all-in-one tool. Increase, decrease, difference, and more.',
        },
        faq: [
          {
            q: 'What percentage calculations can this handle?',
            a: 'This calculator handles all basic percentage operations: finding X% of Y, percentage increase/decrease, percentage difference, reverse percentages, and converting between fractions, decimals, and percentages.',
          },
          {
            q: 'How is this different from other percentage calculators?',
            a: 'This is an all-in-one tool that combines multiple percentage calculators in one interface. Choose your operation and get instant results.',
          },
          {
            q: 'Which percentage formula should I use?',
            a: 'It depends on your need: Use "X% of Y" for basic percentage calculations, "percentage increase/decrease" for changes over time, "percentage difference" for comparing two values, and "reverse percentage" to find original values.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
    ],
    comingSoon: [],
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
      {
        slug: 'profit-margin',
        title: 'Profit Margin Calculator',
        description: 'Calculate profit margin percentage, profit amount, and markup percentage for your business.',
        formula: 'Profit Margin % = (Profit / Revenue) × 100',
        example: {
          revenue: 1000,
          cost: 600,
          profit: 400,
          profitMargin: 40,
          markup: 66.67,
        },
        seo: {
          title: 'Profit Margin Calculator - Calculate Profit % & Markup | PercentLab',
          description: 'Free profit margin calculator. Calculate profit margin percentage, profit amount, and markup percentage instantly. Perfect for businesses and entrepreneurs.',
        },
        faq: [
          {
            q: 'How do I calculate profit margin percentage?',
            a: 'Profit margin % = (Profit / Revenue) × 100. First, calculate profit by subtracting cost from revenue. For example, if revenue is $1,000 and cost is $600: Profit = $400, so (400 / 1000) × 100 = 40% profit margin.',
          },
          {
            q: 'What is the difference between profit margin and markup?',
            a: 'Profit margin is profit divided by revenue (selling price). Markup is profit divided by cost (what you paid). A 50% profit margin equals a 100% markup. They represent different perspectives on the same profit.',
          },
          {
            q: 'What is a good profit margin percentage?',
            a: 'A "good" profit margin varies by industry. Retail typically sees 5-10%, restaurants 3-5%, software companies 20-40%. Generally, 10% is considered average, 20% is good, and 25%+ is excellent.',
          },
          {
            q: 'How do I increase my profit margin?',
            a: 'Increase profit margin by either raising prices (increasing revenue) or reducing costs. Focus on high-margin products, negotiate better supplier rates, reduce waste, or add value to justify higher prices.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'sales-tax',
        title: 'Sales Tax Calculator',
        description: 'Calculate sales tax amount and total price with tax. Enter price and tax rate to get instant results.',
        formula: 'Tax Amount = Price × (Tax Rate / 100)',
        example: {
          price: 100,
          taxRate: 8.5,
          taxAmount: 8.50,
          totalPrice: 108.50,
        },
        seo: {
          title: 'Sales Tax Calculator - Calculate Tax Amount & Total Price | PercentLab',
          description: 'Free sales tax calculator. Calculate sales tax amount and total price with tax instantly. Enter price and tax rate for accurate tax calculations.',
        },
        faq: [
          {
            q: 'How do I calculate sales tax?',
            a: 'To calculate sales tax, multiply the price by the tax rate as a decimal. For example, for an $100 item with 8.5% tax: $100 × 0.085 = $8.50 tax. Total price: $100 + $8.50 = $108.50.',
          },
          {
            q: 'How do I remove sales tax from a total?',
            a: 'To remove sales tax, divide the total by (1 + tax rate as decimal). For example, if the total is $108.50 with 8.5% tax: $108.50 / 1.085 = $100 original price.',
          },
          {
            q: 'What is the sales tax rate in my state?',
            a: 'Sales tax rates vary by state and locality, ranging from 0% (no sales tax states like Oregon) to over 10% in some cities. Check your local government website for exact rates, as city and county taxes may apply on top of state tax.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
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
        lastUpdated: '2025-11-13',
        hasChart: true,
        schemaType: 'HowTo',
      },
    ],
    comingSoon: [],
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
      {
        slug: 'gpa-calculator',
        title: 'GPA Calculator',
        description: 'Calculate your GPA (Grade Point Average) on a 4.0 scale. Enter your grades and credit hours for accurate GPA calculation.',
        formula: 'GPA = (Sum of (Grade Points × Credit Hours)) / Total Credit Hours',
        example: {
          courses: 4,
          totalCredits: 12,
          gpa: 3.5,
        },
        seo: {
          title: 'GPA Calculator - Calculate Grade Point Average (4.0 Scale) | PercentLab',
          description: 'Free GPA calculator. Calculate your grade point average on a 4.0 scale with multiple courses. Enter grades and credit hours for instant GPA calculation.',
        },
        faq: [
          {
            q: 'How do I calculate my GPA?',
            a: 'Multiply each course grade (on 4.0 scale) by its credit hours, sum these values, then divide by total credit hours. For example: (A=4.0 × 3 credits) + (B=3.0 × 3 credits) = (12 + 9) / 6 = 3.5 GPA.',
          },
          {
            q: 'What is the 4.0 GPA scale?',
            a: 'On the 4.0 scale: A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7, C+ = 2.3, C = 2.0, C- = 1.7, D+ = 1.3, D = 1.0, F = 0.0.',
          },
          {
            q: 'What is a good GPA?',
            a: 'Generally, 3.0 is considered average, 3.5+ is good, and 3.7+ is excellent. For competitive colleges, 3.8+ is often expected. Requirements vary by institution and program.',
          },
          {
            q: 'How do credit hours affect GPA?',
            a: 'Credit hours weight each course. A 4-credit course affects your GPA more than a 2-credit course. Higher credit courses have a greater impact on your overall GPA.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'test-score',
        title: 'Test Score Calculator',
        description: 'Calculate your test score percentage and letter grade. Enter points earned and total points for instant grade calculation.',
        formula: 'Percentage = (Points Earned / Total Points) × 100',
        example: {
          pointsEarned: 42,
          totalPoints: 50,
          percentage: 84,
          grade: 'B',
        },
        seo: {
          title: 'Test Score Calculator - Calculate Grade Percentage | PercentLab',
          description: 'Free test score calculator. Convert test points to percentage and letter grade instantly. Calculate your test score with grading scale breakdown.',
        },
        faq: [
          {
            q: 'How do I calculate my test score percentage?',
            a: 'Divide the points you earned by the total points possible, then multiply by 100. For example, if you scored 42 out of 50: (42 / 50) × 100 = 84%.',
          },
          {
            q: 'What letter grade is each percentage?',
            a: 'Standard grading scale: A (90-100%), B (80-89%), C (70-79%), D (60-69%), F (below 60%). Some schools use different scales or plus/minus grades.',
          },
          {
            q: 'How many questions can I miss to get an A?',
            a: 'To get 90% (A grade), you can miss 10% of questions. On a 50-question test: 50 × 0.10 = 5 questions. You can miss up to 5 questions and still get an A.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
    ],
    comingSoon: [],
  },
  {
    id: 'daily',
    title: 'Daily Use Calculators',
    description: 'Tip, percentage change, ratio, and other everyday percentage calculations.',
    icon: 'shopping-cart',
    calculators: [
      {
        slug: 'tip-calculator',
        title: 'Tip Calculator',
        description: 'Calculate tip amount and total bill with tip. Perfect for restaurants, delivery, and service gratuity calculations.',
        formula: 'Tip Amount = Bill Amount × (Tip % / 100)',
        example: {
          billAmount: 50,
          tipPercent: 20,
          tipAmount: 10,
          totalWithTip: 60,
          perPerson: 20,
        },
        seo: {
          title: 'Tip Calculator - Calculate Restaurant Tip & Split Bill | PercentLab',
          description: 'Free tip calculator. Calculate tip percentage, total with tip, and split bill per person. Perfect for restaurants, delivery, and service gratuity.',
        },
        faq: [
          {
            q: 'How do I calculate a 20% tip?',
            a: 'Multiply the bill amount by 0.20. For a $50 bill: $50 × 0.20 = $10 tip. Total with tip: $50 + $10 = $60.',
          },
          {
            q: 'What is a standard tip percentage?',
            a: 'Standard tip percentages: 15% for adequate service, 18% for good service, 20% for great service, 25% for exceptional service. Some areas or situations may have different norms.',
          },
          {
            q: 'How do I split a bill with tip?',
            a: 'Calculate the total with tip first, then divide by the number of people. For a $100 bill with 20% tip split 4 ways: ($100 + $20) / 4 = $30 per person.',
          },
          {
            q: 'Should I tip on the pre-tax or post-tax amount?',
            a: 'Either is acceptable. Most people tip on the pre-tax amount for consistency, but tipping on the post-tax amount is generous and ensures good service coverage.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'percentage-change',
        title: 'Percentage Change Calculator',
        description: 'Calculate the percentage change (increase or decrease) between two values. Shows both direction and magnitude of change.',
        formula: 'Percentage Change = ((New Value - Old Value) / Old Value) × 100',
        example: {
          oldValue: 100,
          newValue: 150,
          change: 50,
          changePercent: 50,
        },
        seo: {
          title: 'Percentage Change Calculator - Calculate % Increase/Decrease | PercentLab',
          description: 'Free percentage change calculator. Calculate percent increase or decrease between two values. Find the rate of change with step-by-step explanation.',
        },
        faq: [
          {
            q: 'How do I calculate percentage change?',
            a: 'Subtract the old value from the new value, divide by the old value, then multiply by 100. Formula: ((New - Old) / Old) × 100. Positive result = increase, negative = decrease.',
          },
          {
            q: 'What is the difference between percentage change and percentage difference?',
            a: 'Percentage change shows change from a starting point (directional: +/-). Percentage difference compares two values without direction (always positive). Use change when tracking growth/decline over time.',
          },
          {
            q: 'Can percentage change be negative?',
            a: 'Yes, negative percentage change indicates a decrease. For example, going from 100 to 80 is a -20% change, meaning a 20% decrease.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'ratio-calculator',
        title: 'Ratio Calculator',
        description: 'Calculate and simplify ratios, convert to percentages, and find equivalent ratios. Perfect for recipes, mixtures, and scaling.',
        formula: 'Ratio A:B simplified by dividing by GCD',
        example: {
          valueA: 4,
          valueB: 6,
          simplifiedRatio: '2:3',
          percentA: 40,
          percentB: 60,
        },
        seo: {
          title: 'Ratio Calculator - Simplify Ratios & Convert to Percentage | PercentLab',
          description: 'Free ratio calculator. Simplify ratios, convert to percentages, and find equivalent ratios. Perfect for recipes, mixtures, aspect ratios, and scaling.',
        },
        faq: [
          {
            q: 'How do I simplify a ratio?',
            a: 'Divide both numbers by their greatest common divisor (GCD). For example, 4:6 has GCD of 2, so divide both by 2: 4÷2 : 6÷2 = 2:3.',
          },
          {
            q: 'How do I convert a ratio to percentage?',
            a: 'Add the ratio parts together, then divide each part by the total and multiply by 100. For 2:3, total is 5. Percentages: (2/5 × 100) = 40% and (3/5 × 100) = 60%.',
          },
          {
            q: 'How do I scale a ratio?',
            a: 'Multiply both parts of the ratio by the same number. For example, to scale 2:3 by 4: (2×4):(3×4) = 8:12. This maintains the same proportion.',
          },
          {
            q: 'What is the difference between ratio and fraction?',
            a: 'A ratio compares two quantities (2:3 means 2 parts A to 3 parts B). A fraction represents a part of a whole (2/5 means 2 out of 5 total parts).',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
    ],
    comingSoon: [],
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
