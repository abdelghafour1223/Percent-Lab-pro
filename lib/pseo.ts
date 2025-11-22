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

  // Generate top combinations for initial launch (~50 pages)
  const priorityCombinations = [
    // High-traffic combinations with 100
    { percent: 5, number: 100 },
    { percent: 10, number: 100 },
    { percent: 15, number: 100 },
    { percent: 20, number: 100 },
    { percent: 25, number: 100 },
    { percent: 30, number: 100 },
    { percent: 40, number: 100 },
    { percent: 50, number: 100 },
    { percent: 60, number: 100 },
    { percent: 70, number: 100 },
    { percent: 75, number: 100 },
    { percent: 80, number: 100 },
    { percent: 90, number: 100 },
    { percent: 100, number: 100 },

    // Popular with 200
    { percent: 10, number: 200 },
    { percent: 20, number: 200 },
    { percent: 25, number: 200 },
    { percent: 30, number: 200 },
    { percent: 50, number: 200 },
    { percent: 75, number: 200 },

    // Common with 50
    { percent: 10, number: 50 },
    { percent: 20, number: 50 },
    { percent: 25, number: 50 },
    { percent: 30, number: 50 },
    { percent: 50, number: 50 },
    { percent: 75, number: 50 },

    // Popular with 150
    { percent: 10, number: 150 },
    { percent: 20, number: 150 },
    { percent: 25, number: 150 },
    { percent: 50, number: 150 },

    // Large numbers with common percentages
    { percent: 5, number: 1000 },
    { percent: 10, number: 1000 },
    { percent: 15, number: 1000 },
    { percent: 20, number: 1000 },
    { percent: 25, number: 1000 },
    { percent: 50, number: 1000 },

    // Other common combinations
    { percent: 10, number: 500 },
    { percent: 20, number: 500 },
    { percent: 25, number: 500 },
    { percent: 15, number: 200 },
    { percent: 40, number: 200 },
    { percent: 10, number: 250 },
    { percent: 20, number: 250 },
    { percent: 25, number: 250 },
    { percent: 10, number: 300 },
    { percent: 20, number: 300 },
    { percent: 25, number: 300 },
    { percent: 50, number: 300 },
    { percent: 10, number: 400 },
    { percent: 20, number: 400 },
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

// Generate handwritten introduction based on percent and number
export function generateIntroduction(percent: number, number: number, result: number): string {
  const contexts = [
    `Whether you're shopping during a sale, calculating taxes, or figuring out tips at a restaurant, knowing how to quickly calculate ${percent}% of $${number} is an incredibly valuable skill. The answer is $${result.toFixed(2)}, and understanding this calculation can help you make smarter financial decisions every day. In this guide, we'll walk you through the simple formula, real-world applications, and practical tips that will make percentage calculations second nature. From Black Friday deals to business expenses, this skill applies to countless everyday situations.`,

    `Need to calculate ${percent}% of $${number}? You're not alone. This is one of the most common percentage calculations Americans make daily, whether it's figuring out discounts, calculating sales tax, or determining appropriate tips. The result is $${result.toFixed(2)}, and this straightforward calculation becomes even easier once you understand the underlying formula. We'll break down everything you need to know, from the basic math to practical real-world scenarios, ensuring you can tackle any percentage problem with confidence.`,

    `Understanding percentages is essential in modern life, and calculating ${percent}% of $${number} is a perfect example of how math applies to everyday situations. The answer—$${result.toFixed(2)}—appears frequently in shopping discounts, tax calculations, investment returns, and budget planning. This comprehensive guide will show you not only how to perform this calculation quickly and accurately, but also when and why you'll need it. Master this skill, and you'll find yourself making better financial decisions in stores, restaurants, and beyond.`,
  ];

  // Select introduction based on the sum of percent and number for consistency
  const index = (percent + number) % contexts.length;
  return contexts[index];
}

// Generate practical uses section
export function generatePracticalUses(percent: number, number: number, result: number): Array<{title: string; description: string}> {
  return [
    {
      title: 'Shopping & Retail',
      description: `When stores advertise a ${percent}% discount on a $${number} item, you'll immediately know you're saving $${result.toFixed(2)}. This helps you compare deals across different stores and decide whether a promotion is truly worth it.`,
    },
    {
      title: 'Restaurant Tipping',
      description: `For a $${number} meal, a ${percent}% tip comes out to $${result.toFixed(2)}. Knowing this calculation ensures you tip appropriately without needing a calculator, making the checkout process smooth and professional.`,
    },
    {
      title: 'Sales Tax Calculation',
      description: `If your local sales tax rate is ${percent}%, then a $${number} purchase will have $${result.toFixed(2)} added in taxes, bringing your total to $${(number + result).toFixed(2)}. Understanding this helps you budget accurately before reaching the register.`,
    },
    {
      title: 'Business & Finance',
      description: `Whether you're calculating commission rates, profit margins, or investment returns, knowing that ${percent}% of $${number} equals $${result.toFixed(2)} is fundamental to financial planning and decision-making in professional settings.`,
    },
  ];
}

// Generate quick tips
export function generateQuickTips(percent: number, number: number): string[] {
  const tips = [
    `For ${percent}%, think of it as ${(percent / 100).toFixed(2)} times the original amount—so ${(percent / 100).toFixed(2)} × $${number} = $${((percent / 100) * number).toFixed(2)}.`,
    `To calculate ${percent}% mentally, try breaking it down: ${percent}% is the same as ${percent / 10}% ten times. Calculate ${percent / 10}% of $${number} (${((percent / 10 / 100) * number).toFixed(2)}), then multiply by 10.`,
    `Double-check your work: If ${percent}% of $${number} is $${((percent / 100) * number).toFixed(2)}, then ${100 - percent}% should be $${(number - (percent / 100) * number).toFixed(2)}, and they should add up to $${number}.`,
    `Use the calculator on your phone for accuracy, but understanding the formula (${percent} ÷ 100 × $${number}) means you can estimate quickly even without technology.`,
    `Round for quick estimates: ${percent}% of $${number} is approximately $${Math.round((percent / 100) * number)}, which is close enough for most everyday decisions.`,
  ];

  // Return 4 tips, selected based on the values to ensure variety
  const selectedTips = [];
  selectedTips.push(tips[0]); // Always include the first tip
  selectedTips.push(tips[1]); // Always include mental math tip
  selectedTips.push(tips[2]); // Always include double-check tip

  // Add one more tip based on the percent value
  if (percent % 2 === 0) {
    selectedTips.push(tips[3]);
  } else {
    selectedTips.push(tips[4]);
  }

  return selectedTips;
}

// Generate diverse real-world examples
export function generateRealWorldExamples(percent: number, number: number, result: number): Array<{title: string; scenario: string; calculation: string}> {
  return [
    {
      title: 'Black Friday Electronics Deal',
      scenario: `You're shopping for a laptop during Black Friday and spot a $${number} model with a ${percent}% discount. This popular sales event often features percentage-based discounts across major retailers.`,
      calculation: `Your savings: $${result.toFixed(2)} | Final price: $${(number - result).toFixed(2)}`,
    },
    {
      title: 'Restaurant Bill & Gratuity',
      scenario: `After a great dinner, your bill comes to $${number} before tip. The standard tipping range in the US is 15-20%, and you've decided on ${percent}% for excellent service.`,
      calculation: `Tip amount: $${result.toFixed(2)} | Total with tip: $${(number + result).toFixed(2)}`,
    },
    {
      title: 'Sales Tax (State Dependent)',
      scenario: `You're purchasing a $${number} item in a state with a ${percent}% sales tax rate. Sales tax rates vary by state, ranging from 0% (Oregon, Delaware) to over 9% (Tennessee).`,
      calculation: `Tax amount: $${result.toFixed(2)} | Total cost: $${(number + result).toFixed(2)}`,
    },
    {
      title: 'Investment Returns',
      scenario: `Your $${number} investment has grown by ${percent}% this year. Understanding this percentage helps you track portfolio performance and make informed decisions about future investments.`,
      calculation: `Profit earned: $${result.toFixed(2)} | New value: $${(number + result).toFixed(2)}`,
    },
    {
      title: 'Real Estate Commission',
      scenario: `When selling property, real estate agents typically charge ${percent === 5 || percent === 6 ? 'around ' + percent : percent}% commission. On a $${number},000 home sale, this is a significant consideration.`,
      calculation: `Commission: $${result.toFixed(2)}${number >= 100 ? ',000' : ''} | Seller receives: $${(number - result).toFixed(2)}${number >= 100 ? ',000' : ''}`,
    },
  ];
}
