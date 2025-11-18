import { z } from 'zod';

// Zod schemas for validation
export const percentOfSchema = z.object({
  percent: z.number().min(-Infinity).max(Infinity),
  number: z.number().min(-Infinity).max(Infinity),
});

export const percentageSchema = z.object({
  part: z.number().min(-Infinity).max(Infinity),
  whole: z.number().min(-Infinity).max(Infinity).refine((val) => val !== 0, {
    message: 'Whole number cannot be zero',
  }),
});

export const changeSchema = z.object({
  original: z.number().min(-Infinity).max(Infinity).refine((val) => val !== 0, {
    message: 'Original number cannot be zero',
  }),
  newValue: z.number().min(-Infinity).max(Infinity),
});

// Calculation functions
export function calculatePercentOf(percent: number, number: number): number {
  return (percent / 100) * number;
}

export function calculatePercentage(part: number, whole: number): number {
  if (whole === 0) throw new Error('Division by zero');
  return (part / whole) * 100;
}

export function calculatePercentageIncrease(
  original: number,
  newValue: number
): number {
  if (original === 0) throw new Error('Division by zero');
  return ((newValue - original) / Math.abs(original)) * 100;
}

export function calculatePercentageDecrease(
  original: number,
  newValue: number
): number {
  return calculatePercentageIncrease(original, newValue);
}

export function calculateIncreaseByPercent(
  original: number,
  percent: number
): number {
  return original + (original * percent) / 100;
}

export function calculateDecreaseByPercent(
  original: number,
  percent: number
): number {
  return original - (original * percent) / 100;
}

// Types for calculator results
export interface CalculationResult {
  result: number;
  formula: string;
  steps: string[];
  examples: string[];
}

// Check if a page should use US market examples
function isUSMarketPage(percent: number, number: number): boolean {
  const usPages = [
    { percent: 30, number: 50 },
    { percent: 20, number: 150 },
    { percent: 40, number: 200 },
    { percent: 75, number: 200 },
    { percent: 30, number: 200 },
  ];

  return usPages.some(page => page.percent === percent && page.number === number);
}

// Generate US market-specific examples
function getUSMarketExamples(percent: number, number: number, result: number): string[] {
  // Black Friday example
  const blackFridayExample = `Black Friday Deal: Save ${percent}% on a $${number} purchase! You save $${result.toFixed(2)} and pay only $${(number - result).toFixed(2)}.`;

  // Restaurant tip example
  const tipExample = `Restaurant Tip: For a $${number} meal, a ${percent}% tip would be $${result.toFixed(2)}, making your total $${(number + result).toFixed(2)}.`;

  // Sales tax example
  const taxExample = `Sales Tax: With ${percent}% tax on $${number}, you'll pay an additional $${result.toFixed(2)} for a total of $${(number + result).toFixed(2)}.`;

  return [blackFridayExample, tipExample, taxExample];
}

// Generate explanations
export function explainPercentOf(
  percent: number,
  number: number
): CalculationResult {
  const result = calculatePercentOf(percent, number);
  const useUSMarket = isUSMarketPage(percent, number);

  return {
    result,
    formula: `(${percent} ÷ 100) × ${number} = ${result.toFixed(2)}`,
    steps: [
      `Convert the percentage to a decimal by dividing by 100: ${percent} ÷ 100 = ${(percent / 100).toFixed(4)}`,
      `Multiply the decimal by the number: ${(percent / 100).toFixed(4)} × ${number} = ${result.toFixed(2)}`,
      `Therefore, ${percent}% of ${number} is ${result.toFixed(2)}`,
    ],
    examples: useUSMarket
      ? getUSMarketExamples(percent, number, result)
      : [
          `Shopping example: If a $${number} item has a ${percent}% discount, you save $${result.toFixed(2)}, paying $${(number - result).toFixed(2)}.`,
          `Tax example: A ${percent}% tax on $${number} adds $${result.toFixed(2)} to your bill, totaling $${(number + result).toFixed(2)}.`,
        ],
  };
}

export function explainPercentage(
  part: number,
  whole: number
): CalculationResult {
  const result = calculatePercentage(part, whole);

  return {
    result,
    formula: `(${part} ÷ ${whole}) × 100 = ${result.toFixed(2)}%`,
    steps: [
      `Divide the part by the whole: ${part} ÷ ${whole} = ${(part / whole).toFixed(4)}`,
      `Multiply by 100 to convert to percentage: ${(part / whole).toFixed(4)} × 100 = ${result.toFixed(2)}%`,
      `Therefore, ${part} is ${result.toFixed(2)}% of ${whole}`,
    ],
    examples: [
      `Test score: If you got ${part} out of ${whole} questions correct, your score is ${result.toFixed(2)}%.`,
      `Progress tracking: Completing ${part} out of ${whole} tasks means you're ${result.toFixed(2)}% done.`,
    ],
  };
}

export function explainPercentageChange(
  original: number,
  newValue: number,
  isIncrease: boolean
): CalculationResult {
  const result = calculatePercentageIncrease(original, newValue);
  const changeType = result >= 0 ? 'increase' : 'decrease';
  const absResult = Math.abs(result);

  return {
    result,
    formula: `((${newValue} - ${original}) ÷ |${original}|) × 100 = ${result.toFixed(2)}%`,
    steps: [
      `Calculate the difference: ${newValue} - ${original} = ${(newValue - original).toFixed(2)}`,
      `Divide by the absolute original value: ${(newValue - original).toFixed(2)} ÷ ${Math.abs(original)} = ${((newValue - original) / Math.abs(original)).toFixed(4)}`,
      `Multiply by 100: ${((newValue - original) / Math.abs(original)).toFixed(4)} × 100 = ${result.toFixed(2)}%`,
      `This represents a ${absResult.toFixed(2)}% ${changeType}`,
    ],
    examples: [
      `Price change: If a product's price changed from $${Math.abs(original)} to $${Math.abs(newValue)}, that's a ${absResult.toFixed(2)}% ${changeType}.`,
      `Weight tracking: Going from ${Math.abs(original)} to ${Math.abs(newValue)} pounds is a ${absResult.toFixed(2)}% ${changeType}.`,
    ],
  };
}

export function explainIncreaseByPercent(
  original: number,
  percent: number
): CalculationResult {
  const result = calculateIncreaseByPercent(original, percent);
  const increase = result - original;

  return {
    result,
    formula: `${original} + (${original} × ${percent} ÷ 100) = ${result.toFixed(2)}`,
    steps: [
      `Calculate the increase amount: ${original} × ${percent}% = ${original} × ${(percent / 100).toFixed(4)} = ${increase.toFixed(2)}`,
      `Add to original: ${original} + ${increase.toFixed(2)} = ${result.toFixed(2)}`,
      `Therefore, increasing ${original} by ${percent}% gives ${result.toFixed(2)}`,
    ],
    examples: [
      `Salary raise: A ${percent}% raise on a $${original} salary increases it to $${result.toFixed(2)} (a $${increase.toFixed(2)} increase).`,
      `Investment growth: If $${original} grows by ${percent}%, you'll have $${result.toFixed(2)}.`,
    ],
  };
}

export function explainDecreaseByPercent(
  original: number,
  percent: number
): CalculationResult {
  const result = calculateDecreaseByPercent(original, percent);
  const decrease = original - result;

  return {
    result,
    formula: `${original} - (${original} × ${percent} ÷ 100) = ${result.toFixed(2)}`,
    steps: [
      `Calculate the decrease amount: ${original} × ${percent}% = ${original} × ${(percent / 100).toFixed(4)} = ${decrease.toFixed(2)}`,
      `Subtract from original: ${original} - ${decrease.toFixed(2)} = ${result.toFixed(2)}`,
      `Therefore, decreasing ${original} by ${percent}% gives ${result.toFixed(2)}`,
    ],
    examples: [
      `Discount: A ${percent}% discount on a $${original} item reduces the price to $${result.toFixed(2)} (saving $${decrease.toFixed(2)}).`,
      `Reduction: Reducing ${original} units by ${percent}% leaves ${result.toFixed(2)} units.`,
    ],
  };
}
