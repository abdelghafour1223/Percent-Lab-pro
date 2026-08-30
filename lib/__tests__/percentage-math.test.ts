import {
  calculateFractionPercentage,
  gcd,
  simplifyFraction,
  getLetterGrade,
} from '../percentage-math';

describe('calculateFractionPercentage', () => {
  it('should calculate 32/40 = 80', () => {
    expect(calculateFractionPercentage(32, 40)).toBe(80);
  });

  it('should calculate 19/25 = 76', () => {
    expect(calculateFractionPercentage(19, 25)).toBe(76);
  });

  it('should calculate 5/8 = 62.5', () => {
    expect(calculateFractionPercentage(5, 8)).toBe(62.5);
  });

  it('should calculate 20/25 = 80 (same value as 32/40)', () => {
    expect(calculateFractionPercentage(20, 25)).toBe(80);
  });

  it('should calculate 7/8 = 87.5', () => {
    expect(calculateFractionPercentage(7, 8)).toBe(87.5);
  });

  it('should calculate 11/12 ≈ 91.666666... (repeating decimal)', () => {
    expect(calculateFractionPercentage(11, 12)).toBeCloseTo(91.66666666666666, 12);
  });

  it('should calculate 10/30 ≈ 33.333333... (repeating decimal)', () => {
    expect(calculateFractionPercentage(10, 30)).toBeCloseTo(33.33333333333333, 12);
  });

  it('should be exact for terminating decimals (no rounding applied)', () => {
    expect(calculateFractionPercentage(1, 2)).toBe(50);
    expect(calculateFractionPercentage(1, 4)).toBe(25);
  });

  it('should throw RangeError for zero denominator (library contract)', () => {
    expect(() => calculateFractionPercentage(5, 0)).toThrow(RangeError);
    expect(() => calculateFractionPercentage(5, 0)).toThrow('Division by zero');
  });
});

describe('gcd', () => {
  it('should compute basic positive cases', () => {
    expect(gcd(32, 40)).toBe(8);
    expect(gcd(10, 30)).toBe(10);
    expect(gcd(19, 25)).toBe(1);
    expect(gcd(12, 18)).toBe(6);
  });

  it('should return the other value when one argument is 0', () => {
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(5, 0)).toBe(5);
  });

  it('should define gcd(0, 0) = 0', () => {
    expect(gcd(0, 0)).toBe(0);
  });

  it('should be non-negative regardless of argument signs', () => {
    expect(gcd(-32, 40)).toBe(8);
    expect(gcd(32, -40)).toBe(8);
    expect(gcd(-32, -40)).toBe(8);
  });

  it('should handle equal arguments', () => {
    expect(gcd(7, 7)).toBe(7);
    expect(gcd(-7, 7)).toBe(7);
  });

  it('should throw TypeError for non-integer input', () => {
    expect(() => gcd(3.5, 2)).toThrow(TypeError);
    expect(() => gcd(3, 2.5)).toThrow(TypeError);
  });
});

describe('simplifyFraction', () => {
  it('should simplify 32/40 to 4/5', () => {
    expect(simplifyFraction(32, 40)).toEqual({ numerator: 4, denominator: 5 });
  });

  it('should simplify 10/30 to 1/3', () => {
    expect(simplifyFraction(10, 30)).toEqual({ numerator: 1, denominator: 3 });
  });

  it('should leave already-simplified 19/25 unchanged', () => {
    expect(simplifyFraction(19, 25)).toEqual({ numerator: 19, denominator: 25 });
  });

  it('should leave already-simplified 5/8 unchanged', () => {
    expect(simplifyFraction(5, 8)).toEqual({ numerator: 5, denominator: 8 });
  });

  it('should normalize the sign to the numerator (positive denominator)', () => {
    expect(simplifyFraction(-32, 40)).toEqual({ numerator: -4, denominator: 5 });
    expect(simplifyFraction(32, -40)).toEqual({ numerator: -4, denominator: 5 });
    expect(simplifyFraction(-32, -40)).toEqual({ numerator: 4, denominator: 5 });
  });

  it('should keep 0/denominator as 0/1', () => {
    expect(simplifyFraction(0, 40)).toEqual({ numerator: 0, denominator: 1 });
    expect(simplifyFraction(0, -5)).toEqual({ numerator: 0, denominator: 1 });
  });

  it('should leave 0/0 unchanged (gcd = 0 guard)', () => {
    expect(simplifyFraction(0, 0)).toEqual({ numerator: 0, denominator: 0 });
  });

  it('should handle whole numbers', () => {
    expect(simplifyFraction(40, 8)).toEqual({ numerator: 5, denominator: 1 });
  });

  it('should throw TypeError for non-integer input', () => {
    expect(() => simplifyFraction(2.5, 4)).toThrow(TypeError);
    expect(() => simplifyFraction(2, 4.5)).toThrow(TypeError);
  });
});

describe('getLetterGrade (extracted production semantics)', () => {
  it('should map 90 to A and above to A', () => {
    expect(getLetterGrade(90)).toBe('A');
    expect(getLetterGrade(100)).toBe('A');
  });

  it('should map 80 to B and below 90 to B', () => {
    expect(getLetterGrade(80)).toBe('B');
    expect(getLetterGrade(89.99)).toBe('B');
  });

  it('should map 79.99 to C', () => {
    expect(getLetterGrade(79.99)).toBe('C');
  });

  it('should map 70 to C and below 80 to C', () => {
    expect(getLetterGrade(70)).toBe('C');
  });

  it('should map 62.5 to D', () => {
    expect(getLetterGrade(62.5)).toBe('D');
    expect(getLetterGrade(60)).toBe('D');
  });

  it('should map 59.99 to F and 0 to F', () => {
    expect(getLetterGrade(59.99)).toBe('F');
    expect(getLetterGrade(0)).toBe('F');
    expect(getLetterGrade(25)).toBe('F');
  });

  it('should not introduce plus/minus grades', () => {
    expect(getLetterGrade(95)).toBe('A');
    expect(getLetterGrade(85)).toBe('B');
    expect(getLetterGrade(75)).toBe('C');
    expect(getLetterGrade(65)).toBe('D');
  });
});
