// Configuration for US market calculator pages

export interface USMarketPage {
  slug: string;
  percent: number;
  number: number;
}

// List of pages configured for US market
export const US_MARKET_PAGES: USMarketPage[] = [
  { slug: 'what-is-30-percent-of-50', percent: 30, number: 50 },
  { slug: 'what-is-20-percent-of-150', percent: 20, number: 150 },
  { slug: 'what-is-40-percent-of-200', percent: 40, number: 200 },
  { slug: 'what-is-75-percent-of-200', percent: 75, number: 200 },
  { slug: 'what-is-30-percent-of-200', percent: 30, number: 200 },
];

// Check if a slug is configured for US market
export function isUSMarketPage(slug: string): boolean {
  return US_MARKET_PAGES.some(page => page.slug === slug);
}

// Get US market specific examples
export function getUSMarketExamples(percent: number, number: number): string[] {
  const result = (percent / 100) * number;
  const remaining = number - result;

  return [
    `🛍️ Black Friday Shopping: A ${percent}% discount on a $${number} item saves you $${result.toFixed(2)}, bringing the price down to $${remaining.toFixed(2)}.`,
    `🍽️ Restaurant Tip: Leaving a ${percent}% tip on a $${number} meal means adding $${result.toFixed(2)} to your bill, for a total of $${(number + result).toFixed(2)}.`,
    `💰 Sales Tax: If the sales tax rate is ${percent}%, a $${number} purchase will have $${result.toFixed(2)} in tax, making the total $${(number + result).toFixed(2)}.`,
    `🎯 Savings Goal: Saving ${percent}% of your $${number} monthly budget means setting aside $${result.toFixed(2)} each month.`,
  ];
}

// Get US market FAQ items with schema
export function getUSMarketFAQ(percent: number, number: number) {
  const result = (percent / 100) * number;
  const remaining = number - result;

  return [
    {
      q: `How much is ${percent}% of $${number}?`,
      a: `${percent}% of $${number} is $${result.toFixed(2)}. To calculate this, convert ${percent}% to a decimal (${(percent / 100).toFixed(2)}) and multiply by ${number}: ${(percent / 100).toFixed(2)} × ${number} = $${result.toFixed(2)}.`,
    },
    {
      q: `How do I calculate ${percent}% off $${number}?`,
      a: `To find ${percent}% off $${number}, first calculate ${percent}% of ${number} which is $${result.toFixed(2)}, then subtract from the original: $${number} - $${result.toFixed(2)} = $${remaining.toFixed(2)}. You save $${result.toFixed(2)} and pay $${remaining.toFixed(2)}.`,
    },
    {
      q: `What is $${number} plus ${percent}% tax?`,
      a: `If the tax rate is ${percent}%, calculate ${percent}% of $${number} which is $${result.toFixed(2)}, then add to the original: $${number} + $${result.toFixed(2)} = $${(number + result).toFixed(2)}. The total with tax is $${(number + result).toFixed(2)}.`,
    },
    {
      q: `How much tip should I leave on a $${number} bill?`,
      a: `For a ${percent}% tip on a $${number} bill, calculate $${number} × 0.${(percent < 10 ? '0' : '')}${percent} = $${result.toFixed(2)}. Your total payment would be $${(number + result).toFixed(2)}.`,
    },
  ];
}
