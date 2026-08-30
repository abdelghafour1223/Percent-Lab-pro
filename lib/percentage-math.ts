// Shared, framework-free math helpers for percentage calculations.
// These are the canonical implementations; UI components and future pages
// must delegate to them instead of re-implementing the math inline.

/**
 * Library contract for zero-denominator / zero-divisor division:
 * every shared helper THROWS a RangeError('Division by zero').
 * (This mirrors lib/calculator.ts `calculatePercentage`, the pre-existing
 * lib-level convention. UI formatters catch these errors and render their
 * own sentinel messages — see components/calculator-form.tsx.)
 */

/**
 * Convert a part/whole ratio to its percentage (part / whole) * 100.
 * Deterministic, no rounding applied — callers own formatting.
 * @throws RangeError when whole is 0
 */
export function calculateFractionPercentage(part: number, whole: number): number {
  if (whole === 0) throw new RangeError('Division by zero');
  return (part / whole) * 100;
}

/**
 * Greatest common divisor of two integers (Euclid).
 * Sign convention: always returns a non-negative value; gcd(0, 0) = 0.
 * Inputs are truncated to integers (non-integer input throws TypeError).
 * @throws TypeError when a or b is not an integer
 */
export function gcd(a: number, b: number): number {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new TypeError('gcd() requires integers');
  }
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x;
}

/**
 * Simplify a fraction using its GCD.
 * Sign convention: the denominator is always normalized to positive;
 * the numerator carries the sign. gcd(0, 0) = 0 keeps 0/0 unchanged.
 * @throws TypeError when numerator or denominator is not an integer
 */
export function simplifyFraction(
  numerator: number,
  denominator: number
): { numerator: number; denominator: number } {
  if (!Number.isInteger(numerator) || !Number.isInteger(denominator)) {
    throw new TypeError('simplifyFraction() requires integers');
  }
  const divisor = gcd(numerator, denominator);
  if (divisor === 0) {
    return { numerator, denominator }; // 0/0 unchanged
  }
  const sign = denominator < 0 ? -1 : 1;
  // "+ 0" normalizes -0 (e.g. sign * 0) to +0 so 0/n always yields 0/1 cleanly.
  return {
    numerator: (sign * numerator) / divisor + 0,
    denominator: (sign * denominator) / divisor + 0,
  };
}

/**
 * Letter grade on the common US 10-point scale — the exact semantics of the
 * existing production logic (components/calculator-form.tsx getLetterGrade):
 * >= 90 A, >= 80 B, >= 70 C, >= 60 D, otherwise F. No plus/minus grades.
 */
export function getLetterGrade(percentage: number): string {
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'F';
}
