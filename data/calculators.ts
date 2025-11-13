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
      {
        slug: 'compound-interest',
        title: 'Compound Interest Calculator',
        description: 'Calculate compound interest with different compounding frequencies. See how your investment grows over time with detailed breakdown.',
        formula: 'A = P(1 + r/n)^(nt) where A=final amount, P=principal, r=rate, n=compounds per year, t=years',
        example: {
          principal: 10000,
          rate: 5,
          years: 10,
          compounds: 12,
          finalAmount: 16470.09,
          interest: 6470.09,
        },
        seo: {
          title: 'Compound Interest Calculator - Investment Growth Calculator | PercentLab',
          description: 'Free compound interest calculator. Calculate investment growth with different compounding frequencies. See detailed breakdown of compound interest over time.',
        },
        faq: [
          {
            q: 'How does compound interest work?',
            a: 'Compound interest is interest calculated on the initial principal plus all accumulated interest from previous periods. It grows faster than simple interest because you earn "interest on interest".',
          },
          {
            q: 'What is the difference between annual and monthly compounding?',
            a: 'Monthly compounding calculates interest 12 times per year, while annual compounding calculates once per year. More frequent compounding results in higher returns. For example, $10,000 at 5% for 10 years: monthly = $16,470, annual = $16,289.',
          },
          {
            q: 'How do I calculate compound interest?',
            a: 'Use the formula A = P(1 + r/n)^(nt). For $10,000 at 5% annually for 10 years: A = 10,000(1 + 0.05/1)^(1×10) = $16,289. Interest earned = $16,289 - $10,000 = $6,289.',
          },
          {
            q: 'What compounding frequency is best?',
            a: 'More frequent compounding yields higher returns. From best to worst: daily, monthly, quarterly, semi-annually, annually. However, the difference between daily and monthly is usually minimal.',
          },
        ],
        lastUpdated: '2025-11-13',
        hasChart: true,
        schemaType: 'HowTo',
      },
      {
        slug: 'loan-interest',
        title: 'Loan Interest Calculator',
        description: 'Calculate total loan interest, monthly payments, and payoff schedule. Perfect for personal loans, auto loans, and student loans.',
        formula: 'Monthly Payment = P[r(1+r)^n]/[(1+r)^n-1] where P=principal, r=monthly rate, n=number of payments',
        example: {
          loanAmount: 20000,
          interestRate: 6,
          loanTerm: 5,
          monthlyPayment: 386.66,
          totalInterest: 3199.60,
          totalPaid: 23199.60,
        },
        seo: {
          title: 'Loan Interest Calculator - Calculate Monthly Payments | PercentLab',
          description: 'Free loan interest calculator. Calculate monthly payments, total interest, and payoff schedule for any loan. Perfect for personal, auto, and student loans.',
        },
        faq: [
          {
            q: 'How do I calculate loan interest?',
            a: 'For monthly payments, use the amortization formula: M = P[r(1+r)^n]/[(1+r)^n-1]. Total interest = (Monthly Payment × Number of Months) - Loan Amount. For a $20,000 loan at 6% for 5 years: monthly payment = $386.66, total interest = $3,199.60.',
          },
          {
            q: 'What is the difference between APR and interest rate?',
            a: 'Interest rate is the cost of borrowing the principal. APR (Annual Percentage Rate) includes the interest rate plus other fees and costs. APR is always equal to or higher than the interest rate.',
          },
          {
            q: 'How can I reduce the total interest on my loan?',
            a: 'Make extra payments toward principal, refinance to a lower rate, choose a shorter loan term, or make bi-weekly instead of monthly payments. Even small extra payments can save thousands in interest.',
          },
          {
            q: 'What is loan amortization?',
            a: 'Amortization is the process of paying off a loan through regular payments. Early payments are mostly interest, later payments are mostly principal. An amortization schedule shows the breakdown for each payment.',
          },
        ],
        lastUpdated: '2025-11-13',
        hasChart: true,
        schemaType: 'HowTo',
      },
      {
        slug: 'mortgage-calculator',
        title: 'Mortgage Calculator',
        description: 'Calculate monthly mortgage payments, total interest, and amortization schedule. Includes property tax and insurance estimates.',
        formula: 'M = P[r(1+r)^n]/[(1+r)^n-1] + Property Tax/12 + Insurance/12',
        example: {
          homePrice: 300000,
          downPayment: 60000,
          loanAmount: 240000,
          interestRate: 4.5,
          loanTerm: 30,
          monthlyPayment: 1216.04,
          totalInterest: 197774.40,
        },
        seo: {
          title: 'Mortgage Calculator - Calculate Monthly Payments & Interest | PercentLab',
          description: 'Free mortgage calculator. Calculate monthly payments, total interest, and amortization schedule. Includes property tax and insurance for accurate home loan estimates.',
        },
        faq: [
          {
            q: 'How do I calculate my monthly mortgage payment?',
            a: 'Use the formula M = P[r(1+r)^n]/[(1+r)^n-1] where P=loan amount, r=monthly interest rate, n=total payments. For a $240,000 loan at 4.5% for 30 years: monthly payment = $1,216.04. Add property tax and insurance for total monthly cost.',
          },
          {
            q: 'How much should my down payment be?',
            a: 'Conventional wisdom suggests 20% to avoid PMI (Private Mortgage Insurance). However, many loans allow 3-10% down. A larger down payment reduces loan amount, monthly payments, and total interest paid.',
          },
          {
            q: 'What is included in my monthly mortgage payment?',
            a: 'PITI: Principal (loan paydown), Interest (cost of borrowing), Taxes (property tax), Insurance (homeowners insurance and possibly PMI). Some lenders also include HOA fees in the monthly payment.',
          },
          {
            q: 'Should I choose a 15-year or 30-year mortgage?',
            a: '15-year mortgages have higher monthly payments but lower interest rates and less total interest paid. 30-year mortgages have lower monthly payments but more total interest. Choose based on your budget and financial goals.',
          },
        ],
        lastUpdated: '2025-11-13',
        hasChart: true,
        schemaType: 'HowTo',
      },
      {
        slug: 'investment-return',
        title: 'Investment Return Calculator',
        description: 'Calculate investment returns including capital gains, dividends, and total return percentage. Track portfolio performance over time.',
        formula: 'Total Return % = ((Final Value - Initial Investment + Dividends) / Initial Investment) × 100',
        example: {
          initialInvestment: 10000,
          finalValue: 12500,
          dividends: 500,
          totalReturn: 30,
          annualizedReturn: 8.45,
        },
        seo: {
          title: 'Investment Return Calculator - Calculate Portfolio Returns | PercentLab',
          description: 'Free investment return calculator. Calculate total return, annualized returns, and ROI for your portfolio. Track investment performance with dividends and capital gains.',
        },
        faq: [
          {
            q: 'How do I calculate investment return?',
            a: 'Total Return % = ((Final Value - Initial Investment + Dividends) / Initial Investment) × 100. For $10,000 growing to $12,500 with $500 in dividends: ((12,500 - 10,000 + 500) / 10,000) × 100 = 30% total return.',
          },
          {
            q: 'What is the difference between total return and annualized return?',
            a: 'Total return is the cumulative gain over the entire period. Annualized return is the average yearly return, useful for comparing investments of different durations. A 30% total return over 3 years is approximately 9.14% annualized.',
          },
          {
            q: 'Should I include dividends in my return calculation?',
            a: 'Yes, always include dividends for accurate total return. Dividends can represent a significant portion of returns, especially for income-focused investments. Excluding them understates your true performance.',
          },
          {
            q: 'What is a good investment return?',
            a: 'Historical stock market average is 10% annually. 7-8% after inflation is solid long-term. "Good" depends on asset class, risk level, and time period. Compare against relevant benchmarks like S&P 500.',
          },
        ],
        lastUpdated: '2025-11-13',
        hasChart: true,
        schemaType: 'HowTo',
      },
      {
        slug: 'markup-percentage',
        title: 'Markup Percentage Calculator',
        description: 'Calculate markup percentage and selling price from cost. Essential for retail pricing, product pricing, and profit planning.',
        formula: 'Markup % = ((Selling Price - Cost) / Cost) × 100',
        example: {
          cost: 50,
          sellingPrice: 75,
          markup: 50,
          profitMargin: 33.33,
        },
        seo: {
          title: 'Markup Percentage Calculator - Calculate Retail Markup | PercentLab',
          description: 'Free markup percentage calculator. Calculate markup from cost to selling price. Essential for retail pricing, product pricing, and profit planning.',
        },
        faq: [
          {
            q: 'How do I calculate markup percentage?',
            a: 'Markup % = ((Selling Price - Cost) / Cost) × 100. For an item costing $50 sold for $75: ((75 - 50) / 50) × 100 = 50% markup.',
          },
          {
            q: 'What is the difference between markup and profit margin?',
            a: 'Markup is based on cost: (Profit / Cost) × 100. Profit margin is based on selling price: (Profit / Selling Price) × 100. A 50% markup equals a 33.33% profit margin. Same profit, different calculation base.',
          },
          {
            q: 'What is a typical retail markup?',
            a: 'Retail markup varies by industry. Grocery stores: 10-15%, clothing: 100-200%, jewelry: 200-300%, restaurants: 200-400%. Higher markup doesn\'t always mean higher profit due to overhead costs and sales volume.',
          },
          {
            q: 'How do I calculate selling price from markup?',
            a: 'Selling Price = Cost × (1 + Markup%). For a $50 item with 50% markup: $50 × 1.50 = $75 selling price.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'commission-calculator',
        title: 'Commission Calculator',
        description: 'Calculate sales commission based on percentage rate. Perfect for salespeople, real estate agents, and commission-based earnings.',
        formula: 'Commission = Sales Amount × (Commission Rate / 100)',
        example: {
          salesAmount: 50000,
          commissionRate: 5,
          commission: 2500,
          netProfit: 47500,
        },
        seo: {
          title: 'Commission Calculator - Calculate Sales Commission | PercentLab',
          description: 'Free commission calculator. Calculate sales commission based on percentage rate. Perfect for salespeople, real estate agents, and commission earnings.',
        },
        faq: [
          {
            q: 'How do I calculate sales commission?',
            a: 'Commission = Sales Amount × (Commission Rate / 100). For a $50,000 sale with 5% commission: $50,000 × 0.05 = $2,500 commission.',
          },
          {
            q: 'What is a typical commission rate?',
            a: 'Commission rates vary by industry. Real estate: 5-6% (split between agents), car sales: 20-25% of gross profit, insurance: 5-15%, retail: 1-5%, software sales: 10-20%. High-value, complex sales typically earn higher rates.',
          },
          {
            q: 'How do tiered commission structures work?',
            a: 'Tiered commissions increase as you hit sales targets. Example: 3% on first $50k, 5% on $50k-$100k, 7% above $100k. This incentivizes higher sales performance with increasing rewards.',
          },
          {
            q: 'Is commission calculated before or after expenses?',
            a: 'It depends on the agreement. Most retail commissions are on gross sales. Business-to-business may use gross profit (after direct costs). Always clarify the commission base in your contract.',
          },
        ],
        lastUpdated: '2025-11-13',
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
      {
        slug: 'weighted-grade',
        title: 'Weighted Grade Calculator',
        description: 'Calculate weighted course grades with different category weights. Perfect for classes with homework, tests, and final exam percentages.',
        formula: 'Weighted Grade = Σ(Grade × Weight) / Σ(Weight)',
        example: {
          homework: 85,
          tests: 78,
          final: 92,
          weightedGrade: 84.5,
        },
        seo: {
          title: 'Weighted Grade Calculator - Calculate Course Grade with Weights | PercentLab',
          description: 'Free weighted grade calculator. Calculate course grades with different category weights. Enter homework, tests, and exam grades with their weights for accurate grade calculation.',
        },
        faq: [
          {
            q: 'How do I calculate a weighted grade?',
            a: 'Multiply each grade by its weight, sum these products, then divide by the total weight. For example: Homework 85% (30%), Tests 78% (40%), Final 92% (30%): (85×0.30 + 78×0.40 + 92×0.30) = 84.5%.',
          },
          {
            q: 'What if my weights don\'t add up to 100%?',
            a: 'The calculator normalizes weights automatically. If you enter 30, 40, 20 (total 90%), it calculates proportionally. However, for accuracy, ensure your weights total 100%.',
          },
          {
            q: 'How much does my final exam affect my grade?',
            a: 'If your final is weighted 30%, it affects 30% of your total grade. To calculate impact: (Desired Grade - Current Weighted Grade) / Final Weight. Example: To get 90% with current 85% and final weighted 30%, you need (90 - 85×0.70) / 0.30 = 101.7% on the final.',
          },
          {
            q: 'What are typical course weight distributions?',
            a: 'Common distributions: Homework/Participation 20-30%, Tests/Quizzes 40-50%, Final Exam 20-30%, Projects 10-20%. Weights vary by course level and instructor.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'final-grade',
        title: 'Final Grade Calculator',
        description: 'Calculate what you need on your final exam to achieve a desired course grade. Enter current grade, final weight, and target grade.',
        formula: 'Required Final = (Target Grade - Current Grade × (1 - Final Weight)) / Final Weight',
        example: {
          currentGrade: 85,
          targetGrade: 90,
          finalWeight: 30,
          requiredFinal: 101.67,
        },
        seo: {
          title: 'Final Grade Calculator - What Do I Need on Final Exam | PercentLab',
          description: 'Free final grade calculator. Calculate what score you need on your final exam to achieve your target course grade. Enter current grade and final weight for instant results.',
        },
        faq: [
          {
            q: 'How do I calculate what I need on my final exam?',
            a: 'Formula: Required Final = (Target Grade - Current Grade × (1 - Final Weight)) / Final Weight. Example: Current 85%, want 90%, final worth 30%: (90 - 85 × 0.70) / 0.30 = 101.67%. You\'d need 101.67% (not possible without extra credit).',
          },
          {
            q: 'What if the required score is over 100%?',
            a: 'If the calculator shows over 100%, your target grade is mathematically impossible without extra credit. Consider a lower target grade or check with your professor about extra credit opportunities.',
          },
          {
            q: 'How does final exam weight affect what I need?',
            a: 'Higher final weight means it has more impact. With a 50% final, you can change your grade dramatically. With only 20%, the final has less impact on your overall grade.',
          },
          {
            q: 'Can I still get an A if I failed the midterm?',
            a: 'It depends on the weight distribution. Use the calculator: if you got 60% on a midterm worth 30% and want an A (90%), with a final worth 40% and other work at 90%, you\'d need: (90 - 60×0.30 - 90×0.30) / 0.40 = 90% on the final. Challenging but possible!',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'grade-needed',
        title: 'Grade Needed Calculator',
        description: 'Calculate the minimum grade needed on your next assignment to maintain or achieve a desired average.',
        formula: 'Grade Needed = (Target Average × Total Assignments) - Current Total Points',
        example: {
          currentAverage: 82,
          targetAverage: 85,
          assignmentsCompleted: 5,
          gradeNeeded: 97,
        },
        seo: {
          title: 'Grade Needed Calculator - Minimum Score to Reach Goal | PercentLab',
          description: 'Free grade needed calculator. Find the minimum grade needed on your next assignment to achieve your target average. Perfect for tracking academic goals.',
        },
        faq: [
          {
            q: 'How do I calculate the grade I need on my next assignment?',
            a: 'Formula: Grade Needed = (Target Average × Total Assignments) - Sum of Current Grades. Example: Current grades 80, 85, 80, 85, 80 (avg 82%), want 85% average after 6 assignments: (85 × 6) - 410 = 100. You need 100% on the next assignment.',
          },
          {
            q: 'What if all assignments aren\'t worth the same points?',
            a: 'This calculator assumes equal-weight assignments. For different point values, use the weighted grade calculator instead, or convert each assignment to a percentage first.',
          },
          {
            q: 'Can I use this to plan for multiple future assignments?',
            a: 'Yes, but it shows the average needed across remaining assignments. If you have 3 assignments left and need an average of 90% on them, you could get 85%, 90%, 95% (avg 90%).',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'semester-gpa',
        title: 'Semester GPA Calculator',
        description: 'Calculate your semester GPA and cumulative GPA. Enter course grades and credit hours for accurate GPA calculation on the 4.0 scale.',
        formula: 'GPA = Σ(Grade Points × Credit Hours) / Σ(Credit Hours)',
        example: {
          course1: 'A',
          credits1: 3,
          course2: 'B',
          credits2: 4,
          semesterGPA: 3.43,
        },
        seo: {
          title: 'Semester GPA Calculator - Calculate Term & Cumulative GPA | PercentLab',
          description: 'Free semester GPA calculator. Calculate term GPA and cumulative GPA on the 4.0 scale. Enter course grades and credit hours for accurate academic tracking.',
        },
        faq: [
          {
            q: 'How do I calculate my semester GPA?',
            a: 'Multiply each course grade (4.0 scale) by credit hours, sum these values, divide by total credits. Example: A (4.0) in 3-credit course + B (3.0) in 4-credit course: (4.0×3 + 3.0×4) / 7 = 24/7 = 3.43 GPA.',
          },
          {
            q: 'How do I calculate cumulative GPA?',
            a: 'Add your new semester grade points to previous cumulative grade points, then divide by total cumulative credits. Example: Previous 3.5 GPA × 30 credits = 105 points. Add new semester 3.8 × 15 credits = 57 points. New cumulative: 162 / 45 = 3.6 GPA.',
          },
          {
            q: 'Do all credit hours count equally?',
            a: 'Yes, credit hours weight each course. A 4-credit A (16 grade points) affects GPA more than a 1-credit A (4 grade points). This is why labs and seminars have less impact than lecture courses.',
          },
          {
            q: 'What GPA do I need to raise my cumulative GPA?',
            a: 'It depends on your current GPA and credits. To raise a 3.0 cumulative GPA (60 credits) to 3.2: you need (3.2 × 75) - (3.0 × 60) = 60 grade points in the next 15 credits = 4.0 GPA (straight A\'s).',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'class-average',
        title: 'Class Average Calculator',
        description: 'Calculate class average, median, and grade distribution. Perfect for teachers and students tracking class performance.',
        formula: 'Average = Σ(All Grades) / Number of Students',
        example: {
          grades: '85, 90, 78, 92, 88',
          average: 86.6,
          median: 88,
          highest: 92,
          lowest: 78,
        },
        seo: {
          title: 'Class Average Calculator - Calculate Mean, Median & Distribution | PercentLab',
          description: 'Free class average calculator. Calculate class mean, median, and grade distribution. Perfect for teachers and students analyzing class performance.',
        },
        faq: [
          {
            q: 'How do I calculate the class average?',
            a: 'Add all student grades and divide by the number of students. Example: Grades 85, 90, 78, 92, 88: (85+90+78+92+88) / 5 = 433 / 5 = 86.6% average.',
          },
          {
            q: 'What is the difference between mean and median?',
            a: 'Mean is the average (sum / count). Median is the middle value when sorted. For 78, 85, 88, 90, 92: mean = 86.6%, median = 88%. Median is less affected by outliers.',
          },
          {
            q: 'How do I calculate grade distribution?',
            a: 'Count how many students fall in each grade range. Example: 90-100% (A): 2 students, 80-89% (B): 2 students, 70-79% (C): 1 student. This shows A: 40%, B: 40%, C: 20% distribution.',
          },
          {
            q: 'Should I curve the grades?',
            a: 'Consider curving if the class average is significantly below your target (e.g., average 70% when you expect 80%). Common methods: add points to everyone, scale percentages, or adjust grade boundaries. Always discuss with department policy.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'grading-curve',
        title: 'Grading Curve Calculator',
        description: 'Apply grading curves including flat scaling, square root curve, and bell curve. Adjust class grades to desired average.',
        formula: 'Curved Grade = √(Original Grade × 100) or other curve formulas',
        example: {
          originalGrade: 64,
          curveType: 'square-root',
          curvedGrade: 80,
          improvement: 16,
        },
        seo: {
          title: 'Grading Curve Calculator - Curve Test Scores & Grades | PercentLab',
          description: 'Free grading curve calculator. Apply various curve methods including square root curve, flat scaling, and bell curve. Adjust grades to achieve desired class average.',
        },
        faq: [
          {
            q: 'How does a square root curve work?',
            a: 'Square root curve: √(Original × 100). This helps lower scores more than higher ones. Example: 64% becomes √(64 × 100) = √6400 = 80%. A 49% becomes √4900 = 70%. It\'s generous to struggling students.',
          },
          {
            q: 'What is a flat curve?',
            a: 'A flat curve adds the same points to everyone. If the highest score was 85/100, add 15 points to all students. Fair but doesn\'t change the relative distribution. Student with 70 becomes 85, student with 40 becomes 55.',
          },
          {
            q: 'How do I calculate the curve amount needed?',
            a: 'Determine your target average (e.g., 75%) and actual average (e.g., 65%). For flat curve: add the difference (10 points). For scaling: multiply all grades by (Target / Actual) = 75/65 = 1.154.',
          },
          {
            q: 'Is curving grades fair?',
            a: 'It depends on perspective. Pros: compensates for unexpectedly difficult tests, maintains consistent standards. Cons: can reward poor performance, may demotivate high achievers. Most fair when the test difficulty was misjudged.',
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
      {
        slug: 'currency-converter',
        title: 'Currency Percentage Calculator',
        description: 'Calculate percentage changes in currency exchange rates and conversion fees. Track forex gains and losses as percentages.',
        formula: 'Exchange Rate Change % = ((New Rate - Old Rate) / Old Rate) × 100',
        example: {
          oldRate: 1.20,
          newRate: 1.25,
          changePercent: 4.17,
          amount: 1000,
          converted: 1250,
        },
        seo: {
          title: 'Currency Percentage Calculator - Exchange Rate Changes | PercentLab',
          description: 'Free currency percentage calculator. Calculate exchange rate changes, conversion fees, and forex gains/losses as percentages. Track currency fluctuations.',
        },
        faq: [
          {
            q: 'How do I calculate percentage change in exchange rates?',
            a: 'Formula: ((New Rate - Old Rate) / Old Rate) × 100. Example: EUR/USD goes from 1.20 to 1.25: ((1.25 - 1.20) / 1.20) × 100 = 4.17% increase. Positive = strengthening, negative = weakening.',
          },
          {
            q: 'How much do currency conversion fees cost?',
            a: 'Conversion fees typically range from 1-3% for credit cards, 0.5-1% for currency exchange services, and 0.1-0.5% for online platforms. For $1,000 with 2% fee: fee = $1,000 × 0.02 = $20.',
          },
          {
            q: 'How do I calculate total cost including conversion fee?',
            a: 'Multiply the amount by (1 + fee percentage). For $1,000 with 2.5% fee: $1,000 × 1.025 = $1,025 total cost. The actual fee is $25.',
          },
          {
            q: 'What is the best way to minimize conversion fees?',
            a: 'Use services with low percentage fees (0.1-0.5% vs 2-3%), convert larger amounts less frequently to spread fixed fees, use no-foreign-transaction-fee credit cards, or try peer-to-peer currency platforms.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'compound-growth',
        title: 'Compound Growth Calculator',
        description: 'Calculate compound annual growth rate (CAGR) and compound growth over time. Track business growth, investments, and population changes.',
        formula: 'CAGR = ((Ending Value / Beginning Value)^(1/Years)) - 1',
        example: {
          startingValue: 10000,
          endingValue: 15000,
          years: 5,
          cagr: 8.45,
        },
        seo: {
          title: 'Compound Growth Calculator - CAGR & Growth Rate | PercentLab',
          description: 'Free compound growth calculator. Calculate CAGR (Compound Annual Growth Rate) and track growth over time. Perfect for business metrics and investment analysis.',
        },
        faq: [
          {
            q: 'What is CAGR and how do I calculate it?',
            a: 'CAGR (Compound Annual Growth Rate) is the mean annual growth rate over multiple years. Formula: ((Ending / Beginning)^(1/Years)) - 1. Example: $10,000 to $15,000 in 5 years: ((15000/10000)^(1/5)) - 1 = 1.0845 - 1 = 8.45% CAGR.',
          },
          {
            q: 'What is the difference between CAGR and average growth rate?',
            a: 'CAGR accounts for compounding (growth on growth), while simple average doesn\'t. If you grow 50% then -10%, simple average = 20%, but CAGR considers the actual path. CAGR is more accurate for multi-year analysis.',
          },
          {
            q: 'How do I use CAGR to predict future growth?',
            a: 'Multiply current value by (1 + CAGR)^Years. With 8.45% CAGR, $15,000 growing for 3 more years: $15,000 × (1.0845)^3 = $19,127. This assumes growth continues at the same rate.',
          },
          {
            q: 'What is a good CAGR?',
            a: 'It depends on context. Stock market: 7-10% is typical, tech startups: 20-40% is good, mature businesses: 3-5% is common. Compare against industry benchmarks and historical performance.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'loan-payment',
        title: 'Loan Payment Percentage Calculator',
        description: 'Calculate what percentage of income goes to loan payments. Determine debt-to-income ratio for financial planning.',
        formula: 'Debt-to-Income Ratio = (Total Monthly Debt Payments / Gross Monthly Income) × 100',
        example: {
          monthlyIncome: 5000,
          loanPayment: 1200,
          debtToIncome: 24,
        },
        seo: {
          title: 'Loan Payment Percentage Calculator - Debt-to-Income Ratio | PercentLab',
          description: 'Free loan payment percentage calculator. Calculate debt-to-income ratio and see what percentage of income goes to debt. Essential for loan applications and budgeting.',
        },
        faq: [
          {
            q: 'How do I calculate my debt-to-income ratio?',
            a: 'Divide total monthly debt payments by gross monthly income, multiply by 100. Example: $1,200 debt payments with $5,000 income: (1200 / 5000) × 100 = 24% DTI ratio.',
          },
          {
            q: 'What is a good debt-to-income ratio?',
            a: 'Lenders prefer: Under 36% is ideal, 36-43% is acceptable for mortgages, above 43% makes approval difficult. 28% or less for housing costs alone is considered healthy. Lower is always better for financial flexibility.',
          },
          {
            q: 'What counts as debt in DTI calculation?',
            a: 'Include: mortgage/rent, car loans, student loans, credit card minimum payments, personal loans. Exclude: utilities, groceries, insurance (unless it\'s financed), subscriptions. Use minimum payments, not full balances.',
          },
          {
            q: 'How can I improve my debt-to-income ratio?',
            a: 'Increase income (raises, side work), pay off debts (reduces payments), avoid new debt, refinance to lower monthly payments. Paying off smallest debts first shows quick improvement in DTI.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'budget-percentage',
        title: 'Budget Percentage Calculator',
        description: 'Calculate what percentage of budget goes to each expense category. Follow the 50/30/20 rule and track spending distribution.',
        formula: 'Category Percentage = (Category Spending / Total Budget) × 100',
        example: {
          income: 5000,
          housing: 1500,
          food: 600,
          housingPercent: 30,
          foodPercent: 12,
        },
        seo: {
          title: 'Budget Percentage Calculator - 50/30/20 Rule & Expense Distribution | PercentLab',
          description: 'Free budget percentage calculator. Calculate what percentage of income goes to each expense. Apply the 50/30/20 budgeting rule and track spending.',
        },
        faq: [
          {
            q: 'What is the 50/30/20 budgeting rule?',
            a: '50% for needs (housing, food, utilities, transportation), 30% for wants (entertainment, dining out, hobbies), 20% for savings and debt repayment. For $5,000 income: $2,500 needs, $1,500 wants, $1,000 savings.',
          },
          {
            q: 'How do I calculate what percentage of my budget goes to housing?',
            a: 'Divide housing costs by total income, multiply by 100. For $1,500 rent with $5,000 income: (1500 / 5000) × 100 = 30%. Financial experts recommend keeping housing under 28-30% of gross income.',
          },
          {
            q: 'What are recommended budget percentages for each category?',
            a: 'Housing: 25-30%, Food: 10-15%, Transportation: 10-15%, Savings: 20%, Debt: under 15%, Entertainment: 5-10%, Clothing: 3-5%, Healthcare: 5-10%. Adjust based on location and personal circumstances.',
          },
          {
            q: 'How do I track my budget percentages?',
            a: 'Track expenses for 1-3 months, categorize spending, calculate percentages. Compare to recommended ranges. Adjust high categories by moving money to aligned goals (reduce dining out 5%, increase savings 5%).',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'calorie-percentage',
        title: 'Calorie Percentage Calculator',
        description: 'Calculate macronutrient percentages (protein, carbs, fats) in your diet. Track calorie distribution for nutrition goals.',
        formula: 'Macro % = (Calories from Macro / Total Calories) × 100',
        example: {
          totalCalories: 2000,
          proteinCalories: 600,
          carbCalories: 900,
          fatCalories: 500,
          proteinPercent: 30,
          carbPercent: 45,
          fatPercent: 25,
        },
        seo: {
          title: 'Calorie Percentage Calculator - Macronutrient Distribution | PercentLab',
          description: 'Free calorie percentage calculator. Calculate macro percentages (protein, carbs, fats) in your diet. Track nutrition and meet fitness goals.',
        },
        faq: [
          {
            q: 'How do I calculate macronutrient percentages?',
            a: 'Convert grams to calories (protein: 4 cal/g, carbs: 4 cal/g, fat: 9 cal/g), then divide by total calories and multiply by 100. Example: 150g protein = 600 cal, out of 2000 total: (600/2000) × 100 = 30%.',
          },
          {
            q: 'What are ideal macronutrient percentages?',
            a: 'Balanced diet: 45-65% carbs, 20-35% fat, 10-35% protein. For weight loss: 40% carbs, 30% protein, 30% fat. For muscle gain: 40% carbs, 35% protein, 25% fat. Adjust based on activity level and goals.',
          },
          {
            q: 'How many grams of protein do I need?',
            a: 'For 30% protein in a 2000 calorie diet: 2000 × 0.30 = 600 calories from protein. Divide by 4 cal/g = 150g protein. General recommendations: 0.8-1g per lb bodyweight for active people, 1.2-1.6g for muscle building.',
          },
          {
            q: 'Why are macronutrient percentages important?',
            a: 'Different macros support different goals: protein builds muscle and aids recovery, carbs fuel workouts and brain function, fats support hormones and absorption. Tracking percentages ensures balanced nutrition for your specific goals.',
          },
        ],
        lastUpdated: '2025-11-13',
        schemaType: 'HowTo',
      },
      {
        slug: 'time-percentage',
        title: 'Time Percentage Calculator',
        description: 'Calculate what percentage of time has elapsed or remains. Track project progress, time allocation, and productivity.',
        formula: 'Time Elapsed % = (Time Spent / Total Time) × 100',
        example: {
          totalTime: 8,
          timeSpent: 3,
          percentElapsed: 37.5,
          percentRemaining: 62.5,
        },
        seo: {
          title: 'Time Percentage Calculator - Track Time Elapsed & Remaining | PercentLab',
          description: 'Free time percentage calculator. Calculate percentage of time elapsed or remaining. Perfect for project tracking, productivity, and time management.',
        },
        faq: [
          {
            q: 'How do I calculate what percentage of time has passed?',
            a: 'Divide time spent by total time, multiply by 100. Example: 3 hours into an 8-hour workday: (3 / 8) × 100 = 37.5% elapsed, 62.5% remaining. For dates: use days between dates.',
          },
          {
            q: 'How do I calculate time allocation percentages?',
            a: 'Track time on each activity, divide by total time. Working 8 hours: 4 hours on project A = 50%, 2 hours on meetings = 25%, 2 hours on emails = 25%. Helps identify time drains.',
          },
          {
            q: 'What is the 80/20 rule for time management?',
            a: 'The Pareto Principle: 80% of results come from 20% of efforts. Identify your highest-value 20% activities and allocate more time to them. Example: 20% of clients generate 80% of revenue.',
          },
          {
            q: 'How can I use time percentages for productivity?',
            a: 'Set target time allocations (40% deep work, 20% meetings, 20% communication, 20% admin), track actual time spent, compare to targets. Adjust schedule to align with goals. Review weekly.',
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
