// Programmatic SEO configuration for percentage calculation pages

export interface PSEOPage {
  percent: number;
  number: number;
  slug: string;
}

// Generate a comprehensive list of common percentage calculations
export function generatePSEOPages(): PSEOPage[] {
  const pages: PSEOPage[] = [];

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

// Get related calculations for a given page (restricted strictly to the 50 priority combinations)
export function getRelatedCalculations(percent: number, number: number, limit: number = 5): PSEOPage[] {
  const priorityPages = generatePSEOPages();

  // Filter out current page
  const candidates = priorityPages.filter((page) => !(page.percent === percent && page.number === number));

  // Score candidates by mathematical and contextual closeness
  const scored = candidates.map((page) => {
    let score = 0;
    const sameNumber = page.number === number;
    const samePercent = page.percent === percent;
    const percentDiff = Math.abs(page.percent - percent);
    const numberDiff = Math.abs(page.number - number);

    if (sameNumber) {
      // Highest relevance: same base amount with closest percentage step
      score = 100 - percentDiff;
    } else if (samePercent) {
      // Second relevance: same percentage with closest base amount
      score = 50 - (numberDiff / 20);
    } else {
      // Third relevance: nearby percentage and nearby base amount
      score = 20 - (percentDiff * 0.5) - (numberDiff / 50);
    }

    return { page, score };
  });

  // Sort descending by relevance score, with deterministic tie-breaking
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.page.percent !== b.page.percent) return a.page.percent - b.page.percent;
    return a.page.number - b.page.number;
  });

  return scored.slice(0, limit).map((s) => s.page);
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

// Define context types for PSEO differentiation
export type PercentageContext = 'rate' | 'service' | 'fraction' | 'extreme';
export type NumberContext = 'small' | 'medium' | 'large';

// Axis A: Percentage Semantics
export function getPercentageContext(percent: number): PercentageContext {
  if (percent <= 10) return 'rate';       // Taxes, interest, small fees
  if (percent <= 25) return 'service';    // Tipping, standard retail discounts
  if (percent < 75) return 'fraction';    // Half-offs, down payments, major sales
  return 'extreme';                       // Close to total, full completion
}

// Axis B: Base Amount Semantics
export function getNumberContext(number: number): NumberContext {
  if (number <= 100) return 'small';      // Meals, daily shopping, small bills
  if (number <= 500) return 'medium';     // Groceries, appliances, minor travel
  return 'large';                         // Rent, cars, salaries, investments
}

// Mathematical Identities
export function getMathematicalShortcut(percent: number): string | null {
  switch (percent) {
    case 5: return "To find 5%, easily calculate 10% by moving the decimal point one place to the left, then cut that number in half.";
    case 10: return "To find 10%, simply move the decimal point one place to the left.";
    case 20: return "To find 20%, move the decimal point one place to the left to get 10%, then double it.";
    case 25: return "To find 25%, simply divide the number by 4 (or cut it in half twice).";
    case 50: return "To find 50%, simply divide the number by 2 (cut it in half).";
    case 75: return "To find 75%, find 25% by dividing by 4, and then multiply by 3.";
    case 100: return "100% of any number is exactly the number itself.";
    default: return null;
  }
}

// Contextual CTA
export function getContextualCTA(percent: number): { title: string, button: string } {
  const context = getPercentageContext(percent);
  if (context === 'rate') return { title: 'Calculate Taxes & Fees Instantly', button: '💰 Calculate Tax & Fees' };
  if (context === 'service') return { title: 'Calculate Tips & Savings Instantly', button: '💰 Calculate Tips & Savings' };
  if (context === 'fraction') return { title: 'Calculate Major Discounts Instantly', button: '💰 Calculate Discounts' };
  return { title: 'Calculate Proportions Instantly', button: '💰 Calculate Percentages' };
}

// Generate handwritten introduction based on A×B context
export function generateIntroduction(percent: number, number: number, result: number): string {
  if (percent === 100) {
    return `Calculating 100% of $${number} is straightforward: 100% represents the entire quantity, so the answer is exactly $${result.toFixed(2)}. In mathematics, percentages represent parts per hundred, and 100% corresponds to 1.00 as a decimal multiplier. Whether you are tracking a fully funded budget, measuring a completed savings goal, or verifying full allocation of resources, understanding this direct identity is fundamental to financial calculations.`;
  }

  const pContext = getPercentageContext(percent);
  const nContext = getNumberContext(number);
  const shortcut = getMathematicalShortcut(percent);

  let intro = `Need to find ${percent}% of $${number}? The answer is exactly $${result.toFixed(2)}. `;

  if (pContext === 'rate' && nContext === 'small') {
    intro += `This type of calculation is very common for everyday small expenses, like adding local sales tax to a retail purchase or calculating a minor fee.`;
  } else if (pContext === 'rate') {
    intro += `You'll frequently encounter this calculation when dealing with larger financial decisions, such as determining an annual interest rate, commission on a major sale, or property taxes.`;
  } else if (pContext === 'service' && nContext === 'small') {
    intro += `Whether you're calculating a standard restaurant tip on a meal or figuring out a typical retail discount, knowing this amount is essential for daily spending.`;
  } else if (pContext === 'service' && nContext === 'medium') {
    intro += `You'll frequently need this calculation when dealing with mid-sized purchases, like figuring out the savings on discounted electronics, appliances, or analyzing service invoices.`;
  } else if (pContext === 'service' && nContext === 'large') {
    intro += `This calculation frequently appears in larger financial scenarios, such as budgeting for rent deposits, allocating freelance income, or evaluating significant business invoices.`;
  } else if (pContext === 'fraction' && nContext === 'small') {
    intro += `Understanding this calculation is helpful for everyday situations like splitting a small bill, calculating a partial payment, or figuring out how much of a daily budget remains.`;
  } else if (pContext === 'extreme' && nContext === 'small') {
    intro += `At ${percent}%, you're looking at nearly the entire value, which is useful for measuring almost completed small savings goals or finalizing minor expenses.`;
  } else if (pContext === 'fraction' && nContext === 'medium') {
    intro += `This calculation frequently appears during major retail sales events or when determining a substantial down payment for mid-range purchases like electronics or appliances.`;
  } else if (pContext === 'fraction') {
    intro += `This percentage is typically used for significant financial milestones, such as a major down payment on a vehicle, dividing a large inheritance, or calculating massive business discounts.`;
  } else if (pContext === 'extreme') {
    intro += `At ${percent}%, you're looking at nearly the entire value, a calculation often used to measure nearly completed savings goals or almost fully funded project budgets.`;
  } else {
    intro += `Understanding this calculation helps you make confident financial decisions, whether you are budgeting, shopping, or managing investments.`;
  }

  if (shortcut) {
    intro += ` ${shortcut}`;
  }

  return intro;
}

// Generate practical uses section with strict honesty gating
export function generatePracticalUses(percent: number, number: number, result: number): Array<{title: string; description: string}> {
  if (percent === 100) {
    return [
      {
        title: 'Full Budget Allocation',
        description: `Allocating 100% of your $${number} budget toward a dedicated project means utilizing the entire $${result.toFixed(2)}, leaving zero remaining for other categories.`,
      },
      {
        title: 'Savings Goal Completion',
        description: `Reaching 100% of a $${number} savings target indicates that you have successfully reached the entire $${result.toFixed(2)} milestone.`,
      },
      {
        title: 'Resource Allocation',
        description: `Assigning 100% of a $${number} fund to an investment or expense ensures full deployment of all available capital.`,
      },
      {
        title: 'Mathematical Identity',
        description: `Because 100% = 1.0 in decimal form, multiplying $${number} by 1.0 always yields the exact original value of $${result.toFixed(2)}.`,
      },
    ];
  }

  const uses: Array<{title: string; description: string}> = [];

  // 1. Retail Discount (5-90%)
  if (percent >= 5 && percent <= 90) {
    uses.push({
      title: 'Shopping & Retail',
      description: `When stores advertise a ${percent}% discount on a $${number} item, you'll immediately know you're saving $${result.toFixed(2)}. This helps you compare deals and decide if a promotion is truly worth it.`
    });
  }

  // 2. Restaurant Tipping (15-25%)
  if (percent >= 15 && percent <= 25) {
    uses.push({
      title: 'Restaurant Tipping',
      description: `For a $${number} bill, a ${percent}% tip comes out to $${result.toFixed(2)}. Knowing this calculation ensures you tip appropriately without needing a calculator.`
    });
  }

  // 3. Sales Tax Calculation (1-10%)
  if (percent >= 1 && percent <= 10) {
    uses.push({
      title: 'Sales Tax Calculation',
      description: `If your local sales tax rate is ${percent}%, then a $${number} purchase will have $${result.toFixed(2)} added in taxes, bringing your total to $${(number + result).toFixed(2)}.`
    });
  }

  // 4. Down Payment / Deposit (20-75%)
  if (percent >= 20 && percent < 100) {
    uses.push({
      title: 'Down Payments & Deposits',
      description: `When paying a ${percent}% upfront deposit on a $${number} total balance, you'll need $${result.toFixed(2)} readily available to secure the purchase.`
    });
  }

  // 5. Business & Finance (fallback / always relevant)
  if (uses.length < 3) {
    uses.push({
      title: 'Business & Finance',
      description: `Whether calculating commission rates, profit margins, or investment returns, knowing that ${percent}% of $${number} equals $${result.toFixed(2)} is fundamental to financial planning.`
    });
  }

  return uses.slice(0, 4);
}

// Generate actionable quick tips
export function generateQuickTips(percent: number, number: number): string[] {
  const selectedTips: string[] = [];

  selectedTips.push(`To calculate ${percent}% manually, you can just multiply the original amount by its decimal equivalent. Since ${percent} ÷ 100 = ${(percent / 100).toFixed(4).replace(/\.?0+$/, '')}, you multiply ${(percent / 100).toFixed(4).replace(/\.?0+$/, '')} × $${number} = $${((percent / 100) * number).toFixed(2)}.`);

  selectedTips.push(`Double-check your work: If ${percent}% of $${number} is $${((percent / 100) * number).toFixed(2)}, then the remaining ${100 - percent}% should be $${(number - (percent / 100) * number).toFixed(2)}, adding up perfectly to the original $${number}.`);

  if (percent >= 15 && percent <= 25) {
    selectedTips.push(`When figuring out percentages around this range, it's often easier to find 10% first (just move the decimal once to get $${(number * 0.1).toFixed(2)}) and then double it or add half as needed.`);
  } else if (percent >= 1 && percent <= 10) {
    selectedTips.push(`For small rates like taxes or fees, consider rounding $${number} to the nearest ten or hundred to estimate the extra cost quickly in your head before calculating the exact amount.`);
  } else if (percent > 50) {
    selectedTips.push(`Since ${percent}% is more than half, a quick way to estimate is to find 50% ($${(number * 0.5).toFixed(2)}) and know your final answer will be somewhat higher than that.`);
  } else {
    selectedTips.push(`A helpful mental trick: percentages are reversible! ${percent}% of $${number} is exactly the same as ${number}% of $${percent}. Sometimes flipping the numbers makes the mental math much easier.`);
  }

  return selectedTips;
}

// Generate diverse real-world examples with strict honesty gating
export function generateRealWorldExamples(percent: number, number: number, result: number): Array<{title: string; scenario: string; calculation: string}> {
  if (percent === 100) {
    return [
      {
        title: 'Full Budget Allocation',
        scenario: `Allocating 100% of a $${number} budget toward a dedicated project means utilizing the entire amount.`,
        calculation: `Total allocated: $${result.toFixed(2)} | Remaining budget: $0.00`,
      },
      {
        title: 'Complete Goal Achievement',
        scenario: `Reaching 100% of a $${number} savings target means you have successfully met your full goal.`,
        calculation: `Amount saved: $${result.toFixed(2)} | Target: $${number.toFixed(2)}`,
      },
      {
        title: 'Mathematical Full Value',
        scenario: `In mathematics, 100% represents the complete whole (1.00 as a decimal multiplier).`,
        calculation: `100% × $${number} = $${result.toFixed(2)}`,
      },
    ];
  }

  const examples: Array<{title: string; scenario: string; calculation: string}> = [];

  // 1. Retail Discount (realistic for standard sales 5% to 90%)
  if (percent >= 5 && percent <= 90) {
    examples.push({
      title: 'Retail Store Discount',
      scenario: `You are shopping for an item originally priced at $${number} with a ${percent}% discount during a promotion.`,
      calculation: `Your savings: $${result.toFixed(2)} | Final price: $${(number - result).toFixed(2)}`,
    });
  }

  // 2. Restaurant Tip (realistic for standard US gratuity range 15% to 25%)
  if (percent >= 15 && percent <= 25) {
    examples.push({
      title: 'Restaurant Gratuity',
      scenario: `After a meal costing $${number} before tip, you decide to leave a ${percent}% tip for quality service.`,
      calculation: `Tip amount: $${result.toFixed(2)} | Total with tip: $${(number + result).toFixed(2)}`,
    });
  }

  // 3. Sales Tax (realistic for US state/local sales tax rates 1% to 10%)
  if (percent >= 1 && percent <= 10) {
    examples.push({
      title: 'Sales Tax (State / Local)',
      scenario: `You are purchasing a $${number} item in an area with a ${percent}% sales tax rate.`,
      calculation: `Tax amount: $${result.toFixed(2)} | Total cost: $${(number + result).toFixed(2)}`,
    });
  }

  // 4. Investment Return (realistic for standard annual portfolio growth 3% to 30%)
  if (percent >= 3 && percent <= 30) {
    examples.push({
      title: 'Investment Portfolio Growth',
      scenario: `As an illustrative scenario, a hypothetical ${percent}% gain on a $${number} investment would yield this profit.`,
      calculation: `Profit earned: $${result.toFixed(2)} | New balance: $${(number + result).toFixed(2)}`,
    });
  }

  // 5. Down Payment / Deposit (relevant context for higher percentages 20% to 75%)
  if (percent >= 20 && percent < 100 && examples.length < 3) {
    examples.push({
      title: 'Down Payment or Deposit',
      scenario: `Paying a ${percent}% upfront deposit on a $${number} total balance.`,
      calculation: `Upfront payment: $${result.toFixed(2)} | Remaining balance: $${(number - result).toFixed(2)}`,
    });
  }

  return examples;
}
