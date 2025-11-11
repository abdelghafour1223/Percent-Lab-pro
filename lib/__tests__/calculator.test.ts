import {
  calculatePercentOf,
  calculatePercentage,
  calculatePercentageIncrease,
  calculateIncreaseByPercent,
  calculateDecreaseByPercent,
  explainPercentOf,
  explainPercentage,
  explainPercentageChange,
  explainIncreaseByPercent,
  explainDecreaseByPercent,
} from '../calculator';

describe('Calculator Functions', () => {
  describe('calculatePercentOf', () => {
    it('should calculate 20% of 200', () => {
      expect(calculatePercentOf(20, 200)).toBe(40);
    });

    it('should calculate 50% of 100', () => {
      expect(calculatePercentOf(50, 100)).toBe(50);
    });

    it('should calculate 10% of 50', () => {
      expect(calculatePercentOf(10, 50)).toBe(5);
    });

    it('should handle decimal percentages', () => {
      expect(calculatePercentOf(12.5, 80)).toBe(10);
    });

    it('should handle zero percentage', () => {
      expect(calculatePercentOf(0, 100)).toBe(0);
    });

    it('should handle percentages over 100%', () => {
      expect(calculatePercentOf(150, 100)).toBe(150);
    });
  });

  describe('calculatePercentage', () => {
    it('should calculate what percentage 50 is of 200', () => {
      expect(calculatePercentage(50, 200)).toBe(25);
    });

    it('should calculate what percentage 75 is of 100', () => {
      expect(calculatePercentage(75, 100)).toBe(75);
    });

    it('should handle values greater than whole', () => {
      expect(calculatePercentage(150, 100)).toBe(150);
    });

    it('should throw error for zero whole', () => {
      expect(() => calculatePercentage(50, 0)).toThrow('Division by zero');
    });

    it('should handle decimal values', () => {
      expect(calculatePercentage(12.5, 50)).toBe(25);
    });
  });

  describe('calculatePercentageIncrease', () => {
    it('should calculate percentage increase from 100 to 120', () => {
      expect(calculatePercentageIncrease(100, 120)).toBe(20);
    });

    it('should calculate percentage decrease from 100 to 80', () => {
      expect(calculatePercentageIncrease(100, 80)).toBe(-20);
    });

    it('should calculate 100% increase (doubling)', () => {
      expect(calculatePercentageIncrease(100, 200)).toBe(100);
    });

    it('should throw error for zero original', () => {
      expect(() => calculatePercentageIncrease(0, 100)).toThrow('Division by zero');
    });

    it('should handle negative original values', () => {
      const result = calculatePercentageIncrease(-100, -50);
      expect(result).toBeCloseTo(50, 5);
    });
  });

  describe('calculateIncreaseByPercent', () => {
    it('should increase 100 by 20%', () => {
      expect(calculateIncreaseByPercent(100, 20)).toBe(120);
    });

    it('should increase 50 by 10%', () => {
      expect(calculateIncreaseByPercent(50, 10)).toBe(55);
    });

    it('should handle 0% increase', () => {
      expect(calculateIncreaseByPercent(100, 0)).toBe(100);
    });

    it('should handle 100% increase', () => {
      expect(calculateIncreaseByPercent(100, 100)).toBe(200);
    });
  });

  describe('calculateDecreaseByPercent', () => {
    it('should decrease 100 by 20%', () => {
      expect(calculateDecreaseByPercent(100, 20)).toBe(80);
    });

    it('should decrease 50 by 10%', () => {
      expect(calculateDecreaseByPercent(50, 10)).toBe(45);
    });

    it('should handle 0% decrease', () => {
      expect(calculateDecreaseByPercent(100, 0)).toBe(100);
    });

    it('should handle 50% decrease', () => {
      expect(calculateDecreaseByPercent(100, 50)).toBe(50);
    });
  });

  describe('explainPercentOf', () => {
    it('should return calculation result with explanation', () => {
      const result = explainPercentOf(20, 200);
      expect(result.result).toBe(40);
      expect(result.formula).toContain('20');
      expect(result.formula).toContain('200');
      expect(result.steps).toHaveLength(3);
      expect(result.examples).toHaveLength(2);
    });

    it('should include steps in explanation', () => {
      const result = explainPercentOf(10, 100);
      expect(result.steps[0]).toContain('Convert');
      expect(result.steps[1]).toContain('Multiply');
      expect(result.steps[2]).toContain('Therefore');
    });
  });

  describe('explainPercentage', () => {
    it('should return calculation result with explanation', () => {
      const result = explainPercentage(50, 200);
      expect(result.result).toBe(25);
      expect(result.formula).toContain('50');
      expect(result.formula).toContain('200');
      expect(result.steps).toHaveLength(3);
      expect(result.examples).toHaveLength(2);
    });
  });

  describe('explainPercentageChange', () => {
    it('should explain percentage increase', () => {
      const result = explainPercentageChange(100, 120, true);
      expect(result.result).toBe(20);
      expect(result.formula).toContain('120');
      expect(result.formula).toContain('100');
      expect(result.steps).toHaveLength(4);
      expect(result.examples).toHaveLength(2);
    });

    it('should explain percentage decrease', () => {
      const result = explainPercentageChange(100, 80, false);
      expect(result.result).toBe(-20);
      expect(result.steps[3]).toContain('decrease');
    });
  });

  describe('explainIncreaseByPercent', () => {
    it('should explain increasing a number by a percentage', () => {
      const result = explainIncreaseByPercent(100, 20);
      expect(result.result).toBe(120);
      expect(result.formula).toContain('100');
      expect(result.formula).toContain('20');
      expect(result.steps).toHaveLength(3);
      expect(result.examples).toHaveLength(2);
    });
  });

  describe('explainDecreaseByPercent', () => {
    it('should explain decreasing a number by a percentage', () => {
      const result = explainDecreaseByPercent(100, 20);
      expect(result.result).toBe(80);
      expect(result.formula).toContain('100');
      expect(result.formula).toContain('20');
      expect(result.steps).toHaveLength(3);
      expect(result.examples).toHaveLength(2);
    });
  });
});
