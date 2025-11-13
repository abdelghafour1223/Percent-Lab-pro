'use client';

import { useState, Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator as CalculatorType } from '@/data/calculators';
import { Copy, Check } from 'lucide-react';
import { ROIChart } from '@/components/charts/roi-chart';
import { DiscountChart } from '@/components/charts/discount-chart';

interface CalculatorFormProps {
  calculator: CalculatorType;
  categoryId: string;
}

interface CalculationResult {
  result: number;
  steps: string[];
  formula: string;
}

export function CalculatorForm({ calculator, categoryId }: CalculatorFormProps) {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result.result.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const validateInputs = (): boolean => {
    const newErrors: Record<string, string> = {};

    Object.keys(inputs).forEach(key => {
      const value = inputs[key];
      if (value === '' || value === undefined) {
        newErrors[key] = 'This field is required';
      } else if (key !== 'grades' && key !== 'curveType' && isNaN(Number(value))) {
        // Skip number validation for string fields
        newErrors[key] = 'Please enter a valid number';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateResult = () => {
    if (!validateInputs()) return;

    const values = Object.entries(inputs).reduce((acc, [key, value]) => {
      // Keep certain fields as strings (grades for class-average, curveType for grading-curve)
      if (key === 'grades' || key === 'curveType') {
        acc[key] = value as any;
      } else {
        acc[key] = Number(value);
      }
      return acc;
    }, {} as Record<string, any>);

    let calculationResult: CalculationResult;

    switch (calculator.slug) {
      case 'percent-of':
        calculationResult = calculatePercentOf(values.percentage, values.number);
        break;
      case 'percentage-increase':
        calculationResult = calculatePercentageIncrease(values.originalValue, values.newValue);
        break;
      case 'percentage-decrease':
        calculationResult = calculatePercentageDecrease(values.originalValue, values.newValue);
        break;
      case 'percentage-difference':
        calculationResult = calculatePercentageDifference(values.value1, values.value2);
        break;
      case 'what-percent':
        calculationResult = calculateWhatPercent(values.part, values.total);
        break;
      case 'roi':
        calculationResult = calculateROI(values.initialInvestment, values.finalValue);
        break;
      case 'profit-margin':
        calculationResult = calculateProfitMargin(values.revenue, values.cost);
        break;
      case 'sales-tax':
        calculationResult = calculateSalesTax(values.price, values.taxRate);
        break;
      case 'discount':
        calculationResult = calculateDiscount(values.originalPrice, values.discountPercent);
        break;
      case 'grade-percentage':
        calculationResult = calculateGradePercentage(values.pointsEarned, values.totalPoints);
        break;
      case 'gpa-calculator':
        calculationResult = calculateGPA(values);
        break;
      case 'test-score':
        calculationResult = calculateTestScore(values.pointsEarned, values.totalPoints);
        break;
      case 'tip-calculator':
        calculationResult = calculateTip(values.billAmount, values.tipPercent, values.numPeople || 1);
        break;
      case 'percentage-change':
        calculationResult = calculatePercentageChange(values.oldValue, values.newValue);
        break;
      case 'ratio-calculator':
        calculationResult = calculateRatio(values.valueA, values.valueB);
        break;
      // New Basic Percentage Calculators
      case 'reverse-percentage':
        calculationResult = calculateReversePercentage(values.finalValue, values.percentage, values.isIncrease === 1);
        break;
      case 'percentage-of-total':
        calculationResult = calculatePercentageOfTotal(values.value, values.total);
        break;
      case 'fraction-to-percent':
        calculationResult = calculateFractionToPercent(values.numerator, values.denominator);
        break;
      case 'percent-to-decimal':
        calculationResult = calculatePercentToDecimal(values.percentage);
        break;
      case 'decimal-to-percent':
        calculationResult = calculateDecimalToPercent(values.decimal);
        break;
      case 'percentage-calculator':
        calculationResult = calculatePercentOf(values.percentage, values.number);
        break;
      // New Financial Calculators
      case 'compound-interest':
        calculationResult = calculateCompoundInterest(values.principal, values.rate, values.years, values.compounds);
        break;
      case 'loan-interest':
        calculationResult = calculateLoanInterest(values.loanAmount, values.interestRate, values.loanTerm);
        break;
      case 'mortgage-calculator':
        calculationResult = calculateMortgage(values.homePrice, values.downPayment, values.interestRate, values.loanTerm);
        break;
      case 'investment-return':
        calculationResult = calculateInvestmentReturn(values.initialInvestment, values.finalValue, values.dividends || 0);
        break;
      case 'markup-percentage':
        calculationResult = calculateMarkup(values.cost, values.sellingPrice);
        break;
      case 'commission-calculator':
        calculationResult = calculateCommission(values.salesAmount, values.commissionRate);
        break;
      // New Education Calculators
      case 'weighted-grade':
        calculationResult = calculateWeightedGrade(values);
        break;
      case 'final-grade':
        calculationResult = calculateFinalGrade(values.currentGrade, values.targetGrade, values.finalWeight);
        break;
      case 'grade-needed':
        calculationResult = calculateGradeNeeded(values.currentAverage, values.targetAverage, values.assignmentsCompleted);
        break;
      case 'semester-gpa':
        calculationResult = calculateSemesterGPA(values);
        break;
      case 'class-average':
        calculationResult = calculateClassAverage(values.grades);
        break;
      case 'grading-curve':
        calculationResult = calculateGradingCurve(values.originalGrade, values.curveType || 'square-root');
        break;
      // New Daily Use Calculators
      case 'currency-converter':
        calculationResult = calculateCurrencyPercentage(values.oldRate, values.newRate, values.amount || 1000);
        break;
      case 'compound-growth':
        calculationResult = calculateCompoundGrowth(values.startingValue, values.endingValue, values.years);
        break;
      case 'loan-payment':
        calculationResult = calculateDebtToIncome(values.monthlyIncome, values.loanPayment);
        break;
      case 'budget-percentage':
        calculationResult = calculateBudgetPercentage(values.income, values.expense);
        break;
      case 'calorie-percentage':
        calculationResult = calculateCaloriePercentage(values.totalCalories, values.macroCalories);
        break;
      case 'time-percentage':
        calculationResult = calculateTimePercentage(values.totalTime, values.timeSpent);
        break;
      default:
        calculationResult = {
          result: 0,
          steps: ['Calculation not implemented'],
          formula: calculator.formula,
        };
    }

    setResult(calculationResult);
  };

  const calculatePercentOf = (percentage: number, number: number): CalculationResult => {
    const result = (percentage / 100) * number;
    return {
      result,
      formula: `(${percentage} ÷ 100) × ${number} = ${result.toFixed(2)}`,
      steps: [
        `Start with the formula: (percentage ÷ 100) × number`,
        `Convert ${percentage}% to decimal: ${percentage} ÷ 100 = ${(percentage / 100).toFixed(2)}`,
        `Multiply by ${number}: ${(percentage / 100).toFixed(2)} × ${number} = ${result.toFixed(2)}`,
        `Therefore, ${percentage}% of ${number} is ${result.toFixed(2)}`
      ]
    };
  };

  const calculateROI = (initialInvestment: number, finalValue: number): CalculationResult => {
    const gain = finalValue - initialInvestment;
    const roi = (gain / initialInvestment) * 100;
    return {
      result: roi,
      formula: `((${finalValue} - ${initialInvestment}) ÷ ${initialInvestment}) × 100 = ${roi.toFixed(2)}%`,
      steps: [
        `Start with the ROI formula: ((Final Value - Initial Investment) ÷ Initial Investment) × 100`,
        `Calculate the gain: ${finalValue} - ${initialInvestment} = ${gain.toFixed(2)}`,
        `Divide gain by initial investment: ${gain.toFixed(2)} ÷ ${initialInvestment} = ${(gain / initialInvestment).toFixed(4)}`,
        `Multiply by 100 to get percentage: ${(gain / initialInvestment).toFixed(4)} × 100 = ${roi.toFixed(2)}%`,
        `Your ROI is ${roi >= 0 ? 'a gain of' : 'a loss of'} ${Math.abs(roi).toFixed(2)}%`
      ]
    };
  };

  const calculateGradePercentage = (pointsEarned: number, totalPoints: number): CalculationResult => {
    if (totalPoints === 0) {
      return {
        result: 0,
        formula: 'Cannot divide by zero',
        steps: ['Total points cannot be zero']
      };
    }
    const percentage = (pointsEarned / totalPoints) * 100;
    const letterGrade = getLetterGrade(percentage);
    return {
      result: percentage,
      formula: `(${pointsEarned} ÷ ${totalPoints}) × 100 = ${percentage.toFixed(2)}%`,
      steps: [
        `Start with the formula: (points earned ÷ total points) × 100`,
        `Divide points earned by total: ${pointsEarned} ÷ ${totalPoints} = ${(pointsEarned / totalPoints).toFixed(4)}`,
        `Multiply by 100 to get percentage: ${(pointsEarned / totalPoints).toFixed(4)} × 100 = ${percentage.toFixed(2)}%`,
        `Your grade percentage is ${percentage.toFixed(2)}%`,
        `Letter Grade: ${letterGrade}`
      ]
    };
  };

  const calculateDiscount = (originalPrice: number, discountPercent: number): CalculationResult => {
    const discountAmount = (discountPercent / 100) * originalPrice;
    const finalPrice = originalPrice - discountAmount;
    return {
      result: finalPrice,
      formula: `${originalPrice} - (${originalPrice} × ${discountPercent}% ÷ 100) = ${finalPrice.toFixed(2)}`,
      steps: [
        `Start with the formula: Original Price - (Original Price × Discount % ÷ 100)`,
        `Calculate discount amount: ${originalPrice} × ${discountPercent}% ÷ 100 = ${discountAmount.toFixed(2)}`,
        `Subtract discount from original: ${originalPrice} - ${discountAmount.toFixed(2)} = ${finalPrice.toFixed(2)}`,
        `You save ${discountAmount.toFixed(2)} (${discountPercent}% off)`,
        `Final price: ${finalPrice.toFixed(2)}`
      ]
    };
  };

  const calculatePercentageIncrease = (originalValue: number, newValue: number): CalculationResult => {
    if (originalValue === 0) {
      return {
        result: 0,
        formula: 'Cannot calculate with zero original value',
        steps: ['Original value cannot be zero']
      };
    }
    const increase = newValue - originalValue;
    const percentageIncrease = (increase / originalValue) * 100;
    return {
      result: percentageIncrease,
      formula: `((${newValue} - ${originalValue}) ÷ ${originalValue}) × 100 = ${percentageIncrease.toFixed(2)}%`,
      steps: [
        `Start with the formula: ((New Value - Original Value) ÷ Original Value) × 100`,
        `Calculate the increase: ${newValue} - ${originalValue} = ${increase.toFixed(2)}`,
        `Divide by original value: ${increase.toFixed(2)} ÷ ${originalValue} = ${(increase / originalValue).toFixed(4)}`,
        `Multiply by 100: ${(increase / originalValue).toFixed(4)} × 100 = ${percentageIncrease.toFixed(2)}%`,
        `The percentage increase is ${percentageIncrease.toFixed(2)}%`
      ]
    };
  };

  const calculatePercentageDecrease = (originalValue: number, newValue: number): CalculationResult => {
    if (originalValue === 0) {
      return {
        result: 0,
        formula: 'Cannot calculate with zero original value',
        steps: ['Original value cannot be zero']
      };
    }
    const decrease = originalValue - newValue;
    const percentageDecrease = (decrease / originalValue) * 100;
    return {
      result: percentageDecrease,
      formula: `((${originalValue} - ${newValue}) ÷ ${originalValue}) × 100 = ${percentageDecrease.toFixed(2)}%`,
      steps: [
        `Start with the formula: ((Original Value - New Value) ÷ Original Value) × 100`,
        `Calculate the decrease: ${originalValue} - ${newValue} = ${decrease.toFixed(2)}`,
        `Divide by original value: ${decrease.toFixed(2)} ÷ ${originalValue} = ${(decrease / originalValue).toFixed(4)}`,
        `Multiply by 100: ${(decrease / originalValue).toFixed(4)} × 100 = ${percentageDecrease.toFixed(2)}%`,
        `The percentage decrease is ${percentageDecrease.toFixed(2)}%`
      ]
    };
  };

  const calculatePercentageDifference = (value1: number, value2: number): CalculationResult => {
    const difference = Math.abs(value1 - value2);
    const average = (value1 + value2) / 2;
    if (average === 0) {
      return {
        result: 0,
        formula: 'Cannot calculate with zero average',
        steps: ['Average of values cannot be zero']
      };
    }
    const percentageDifference = (difference / average) * 100;
    return {
      result: percentageDifference,
      formula: `|${value1} - ${value2}| ÷ ((${value1} + ${value2}) ÷ 2) × 100 = ${percentageDifference.toFixed(2)}%`,
      steps: [
        `Start with the formula: |V1 - V2| ÷ ((V1 + V2) ÷ 2) × 100`,
        `Calculate absolute difference: |${value1} - ${value2}| = ${difference.toFixed(2)}`,
        `Calculate average: (${value1} + ${value2}) ÷ 2 = ${average.toFixed(2)}`,
        `Divide difference by average: ${difference.toFixed(2)} ÷ ${average.toFixed(2)} = ${(difference / average).toFixed(4)}`,
        `Multiply by 100: ${(difference / average).toFixed(4)} × 100 = ${percentageDifference.toFixed(2)}%`,
        `The percentage difference is ${percentageDifference.toFixed(2)}%`
      ]
    };
  };

  const calculateWhatPercent = (part: number, total: number): CalculationResult => {
    if (total === 0) {
      return {
        result: 0,
        formula: 'Cannot divide by zero',
        steps: ['Total cannot be zero']
      };
    }
    const percentage = (part / total) * 100;
    return {
      result: percentage,
      formula: `(${part} ÷ ${total}) × 100 = ${percentage.toFixed(2)}%`,
      steps: [
        `Start with the formula: (Part ÷ Total) × 100`,
        `Divide part by total: ${part} ÷ ${total} = ${(part / total).toFixed(4)}`,
        `Multiply by 100: ${(part / total).toFixed(4)} × 100 = ${percentage.toFixed(2)}%`,
        `${part} is ${percentage.toFixed(2)}% of ${total}`
      ]
    };
  };

  const calculateProfitMargin = (revenue: number, cost: number): CalculationResult => {
    if (revenue === 0) {
      return {
        result: 0,
        formula: 'Cannot calculate with zero revenue',
        steps: ['Revenue cannot be zero']
      };
    }
    const profit = revenue - cost;
    const profitMargin = (profit / revenue) * 100;
    const markup = cost !== 0 ? (profit / cost) * 100 : 0;
    return {
      result: profitMargin,
      formula: `((${revenue} - ${cost}) ÷ ${revenue}) × 100 = ${profitMargin.toFixed(2)}%`,
      steps: [
        `Start with the formula: (Profit ÷ Revenue) × 100`,
        `Calculate profit: ${revenue} - ${cost} = $${profit.toFixed(2)}`,
        `Calculate profit margin: (${profit.toFixed(2)} ÷ ${revenue}) × 100 = ${profitMargin.toFixed(2)}%`,
        `Calculate markup: (${profit.toFixed(2)} ÷ ${cost}) × 100 = ${markup.toFixed(2)}%`,
        `Profit Margin: ${profitMargin.toFixed(2)}% | Markup: ${markup.toFixed(2)}%`
      ]
    };
  };

  const calculateSalesTax = (price: number, taxRate: number): CalculationResult => {
    const taxAmount = (taxRate / 100) * price;
    const totalPrice = price + taxAmount;
    return {
      result: totalPrice,
      formula: `${price} + (${price} × ${taxRate}% ÷ 100) = ${totalPrice.toFixed(2)}`,
      steps: [
        `Start with the formula: Price + (Price × Tax Rate ÷ 100)`,
        `Calculate tax amount: ${price} × ${taxRate}% ÷ 100 = $${taxAmount.toFixed(2)}`,
        `Add tax to price: ${price} + ${taxAmount.toFixed(2)} = $${totalPrice.toFixed(2)}`,
        `Tax Amount: $${taxAmount.toFixed(2)}`,
        `Total Price with Tax: $${totalPrice.toFixed(2)}`
      ]
    };
  };

  const calculateGPA = (values: Record<string, number>): CalculationResult => {
    // For simplicity, we'll calculate based on single course inputs
    // In a full implementation, this would handle multiple courses
    const grade = values.gradePoints || 0;
    const credits = values.creditHours || 1;
    const gpa = grade; // Simplified - just return the grade point

    return {
      result: gpa,
      formula: `GPA = ${gpa.toFixed(2)}`,
      steps: [
        `Enter grade points on 4.0 scale (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0)`,
        `For weighted GPA, multiply grade points by credit hours`,
        `Divide total grade points by total credit hours`,
        `Your GPA: ${gpa.toFixed(2)}`
      ]
    };
  };

  const calculateTestScore = (pointsEarned: number, totalPoints: number): CalculationResult => {
    if (totalPoints === 0) {
      return {
        result: 0,
        formula: 'Cannot divide by zero',
        steps: ['Total points cannot be zero']
      };
    }
    const percentage = (pointsEarned / totalPoints) * 100;
    const letterGrade = getLetterGrade(percentage);
    return {
      result: percentage,
      formula: `(${pointsEarned} ÷ ${totalPoints}) × 100 = ${percentage.toFixed(2)}%`,
      steps: [
        `Start with the formula: (Points Earned ÷ Total Points) × 100`,
        `Divide points: ${pointsEarned} ÷ ${totalPoints} = ${(pointsEarned / totalPoints).toFixed(4)}`,
        `Multiply by 100: ${(pointsEarned / totalPoints).toFixed(4)} × 100 = ${percentage.toFixed(2)}%`,
        `Your test score is ${percentage.toFixed(2)}%`,
        `Letter Grade: ${letterGrade}`
      ]
    };
  };

  const calculateTip = (billAmount: number, tipPercent: number, numPeople: number): CalculationResult => {
    const tipAmount = (tipPercent / 100) * billAmount;
    const totalWithTip = billAmount + tipAmount;
    const perPerson = numPeople > 0 ? totalWithTip / numPeople : totalWithTip;
    return {
      result: totalWithTip,
      formula: `${billAmount} + (${billAmount} × ${tipPercent}% ÷ 100) = ${totalWithTip.toFixed(2)}`,
      steps: [
        `Start with the formula: Bill + (Bill × Tip % ÷ 100)`,
        `Calculate tip amount: ${billAmount} × ${tipPercent}% ÷ 100 = $${tipAmount.toFixed(2)}`,
        `Add tip to bill: ${billAmount} + ${tipAmount.toFixed(2)} = $${totalWithTip.toFixed(2)}`,
        numPeople > 1 ? `Split ${numPeople} ways: $${totalWithTip.toFixed(2)} ÷ ${numPeople} = $${perPerson.toFixed(2)} per person` : '',
        `Tip Amount: $${tipAmount.toFixed(2)} | Total: $${totalWithTip.toFixed(2)}`
      ].filter(Boolean)
    };
  };

  const calculatePercentageChange = (oldValue: number, newValue: number): CalculationResult => {
    if (oldValue === 0) {
      return {
        result: 0,
        formula: 'Cannot calculate with zero original value',
        steps: ['Old value cannot be zero']
      };
    }
    const change = newValue - oldValue;
    const percentageChange = (change / oldValue) * 100;
    const direction = percentageChange >= 0 ? 'increase' : 'decrease';
    return {
      result: percentageChange,
      formula: `((${newValue} - ${oldValue}) ÷ ${oldValue}) × 100 = ${percentageChange.toFixed(2)}%`,
      steps: [
        `Start with the formula: ((New - Old) ÷ Old) × 100`,
        `Calculate change: ${newValue} - ${oldValue} = ${change.toFixed(2)}`,
        `Divide by old value: ${change.toFixed(2)} ÷ ${oldValue} = ${(change / oldValue).toFixed(4)}`,
        `Multiply by 100: ${(change / oldValue).toFixed(4)} × 100 = ${percentageChange.toFixed(2)}%`,
        `This is a ${Math.abs(percentageChange).toFixed(2)}% ${direction}`
      ]
    };
  };

  const calculateRatio = (valueA: number, valueB: number): CalculationResult => {
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(Math.abs(valueA), Math.abs(valueB));
    const simplifiedA = valueA / divisor;
    const simplifiedB = valueB / divisor;
    const total = valueA + valueB;
    const percentA = total !== 0 ? (valueA / total) * 100 : 0;
    const percentB = total !== 0 ? (valueB / total) * 100 : 0;

    return {
      result: percentA,
      formula: `Ratio ${simplifiedA}:${simplifiedB} = ${percentA.toFixed(2)}% : ${percentB.toFixed(2)}%`,
      steps: [
        `Original ratio: ${valueA}:${valueB}`,
        `Find GCD (Greatest Common Divisor): ${divisor}`,
        `Simplified ratio: ${simplifiedA}:${simplifiedB}`,
        `Total parts: ${valueA} + ${valueB} = ${total}`,
        `Percentage A: (${valueA} ÷ ${total}) × 100 = ${percentA.toFixed(2)}%`,
        `Percentage B: (${valueB} ÷ ${total}) × 100 = ${percentB.toFixed(2)}%`
      ]
    };
  };

  const getLetterGrade = (percentage: number): string => {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
  };

  // New Basic Percentage Calculation Functions
  const calculateReversePercentage = (finalValue: number, percentage: number, isIncrease: boolean): CalculationResult => {
    const multiplier = isIncrease ? (1 + percentage / 100) : (1 - percentage / 100);
    if (multiplier === 0) {
      return { result: 0, formula: 'Cannot divide by zero', steps: ['Invalid percentage for decrease'] };
    }
    const originalValue = finalValue / multiplier;
    return {
      result: originalValue,
      formula: `${finalValue} ÷ ${multiplier.toFixed(4)} = ${originalValue.toFixed(2)}`,
      steps: [
        `Final value: $${finalValue}`,
        `Percentage ${isIncrease ? 'increase' : 'decrease'}: ${percentage}%`,
        `Multiplier: ${isIncrease ? '1 +' : '1 -'} ${percentage / 100} = ${multiplier.toFixed(4)}`,
        `Original value = ${finalValue} ÷ ${multiplier.toFixed(4)} = $${originalValue.toFixed(2)}`
      ]
    };
  };

  const calculatePercentageOfTotal = (value: number, total: number): CalculationResult => {
    if (total === 0) {
      return { result: 0, formula: 'Cannot divide by zero', steps: ['Total cannot be zero'] };
    }
    const percentage = (value / total) * 100;
    return {
      result: percentage,
      formula: `(${value} ÷ ${total}) × 100 = ${percentage.toFixed(2)}%`,
      steps: [
        `Value: ${value}`,
        `Total: ${total}`,
        `Percentage = (${value} ÷ ${total}) × 100`,
        `Result: ${percentage.toFixed(2)}% of total`
      ]
    };
  };

  const calculateFractionToPercent = (numerator: number, denominator: number): CalculationResult => {
    if (denominator === 0) {
      return { result: 0, formula: 'Cannot divide by zero', steps: ['Denominator cannot be zero'] };
    }
    const decimal = numerator / denominator;
    const percentage = decimal * 100;
    return {
      result: percentage,
      formula: `(${numerator} ÷ ${denominator}) × 100 = ${percentage.toFixed(2)}%`,
      steps: [
        `Fraction: ${numerator}/${denominator}`,
        `Divide: ${numerator} ÷ ${denominator} = ${decimal.toFixed(4)}`,
        `Convert to percentage: ${decimal.toFixed(4)} × 100 = ${percentage.toFixed(2)}%`
      ]
    };
  };

  const calculatePercentToDecimal = (percentage: number): CalculationResult => {
    const decimal = percentage / 100;
    return {
      result: decimal,
      formula: `${percentage}% ÷ 100 = ${decimal.toFixed(4)}`,
      steps: [
        `Percentage: ${percentage}%`,
        `Divide by 100: ${percentage} ÷ 100 = ${decimal.toFixed(4)}`,
        `Result: ${decimal.toFixed(4)}`
      ]
    };
  };

  const calculateDecimalToPercent = (decimal: number): CalculationResult => {
    const percentage = decimal * 100;
    return {
      result: percentage,
      formula: `${decimal} × 100 = ${percentage.toFixed(2)}%`,
      steps: [
        `Decimal: ${decimal}`,
        `Multiply by 100: ${decimal} × 100 = ${percentage.toFixed(2)}`,
        `Result: ${percentage.toFixed(2)}%`
      ]
    };
  };

  // New Financial Calculation Functions
  const calculateCompoundInterest = (principal: number, rate: number, years: number, compounds: number): CalculationResult => {
    const r = rate / 100;
    const amount = principal * Math.pow(1 + r / compounds, compounds * years);
    const interest = amount - principal;
    return {
      result: amount,
      formula: `A = ${principal}(1 + ${r.toFixed(4)}/${compounds})^(${compounds}×${years}) = $${amount.toFixed(2)}`,
      steps: [
        `Principal: $${principal}`,
        `Annual rate: ${rate}%`,
        `Years: ${years}`,
        `Compounds per year: ${compounds}`,
        `Final amount = ${principal} × (1 + ${(r / compounds).toFixed(6)})^${compounds * years}`,
        `Final amount: $${amount.toFixed(2)}`,
        `Interest earned: $${interest.toFixed(2)}`
      ]
    };
  };

  const calculateLoanInterest = (loanAmount: number, interestRate: number, loanTerm: number): CalculationResult => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const totalPaid = monthlyPayment * numPayments;
    const totalInterest = totalPaid - loanAmount;
    return {
      result: monthlyPayment,
      formula: `Monthly Payment: $${monthlyPayment.toFixed(2)}`,
      steps: [
        `Loan amount: $${loanAmount}`,
        `Annual rate: ${interestRate}%`,
        `Loan term: ${loanTerm} years`,
        `Monthly payment: $${monthlyPayment.toFixed(2)}`,
        `Total paid: $${totalPaid.toFixed(2)}`,
        `Total interest: $${totalInterest.toFixed(2)}`
      ]
    };
  };

  const calculateMortgage = (homePrice: number, downPayment: number, interestRate: number, loanTerm: number): CalculationResult => {
    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const totalPaid = monthlyPayment * numPayments;
    const totalInterest = totalPaid - loanAmount;
    return {
      result: monthlyPayment,
      formula: `Monthly Payment: $${monthlyPayment.toFixed(2)}`,
      steps: [
        `Home price: $${homePrice.toLocaleString()}`,
        `Down payment: $${downPayment.toLocaleString()}`,
        `Loan amount: $${loanAmount.toLocaleString()}`,
        `Interest rate: ${interestRate}%`,
        `Loan term: ${loanTerm} years`,
        `Monthly payment: $${monthlyPayment.toFixed(2)}`,
        `Total interest: $${totalInterest.toLocaleString()}`
      ]
    };
  };

  const calculateInvestmentReturn = (initialInvestment: number, finalValue: number, dividends: number): CalculationResult => {
    const totalReturn = ((finalValue - initialInvestment + dividends) / initialInvestment) * 100;
    return {
      result: totalReturn,
      formula: `((${finalValue} - ${initialInvestment} + ${dividends}) ÷ ${initialInvestment}) × 100 = ${totalReturn.toFixed(2)}%`,
      steps: [
        `Initial investment: $${initialInvestment}`,
        `Final value: $${finalValue}`,
        `Dividends: $${dividends}`,
        `Total gain: $${(finalValue - initialInvestment + dividends).toFixed(2)}`,
        `Total return: ${totalReturn.toFixed(2)}%`
      ]
    };
  };

  const calculateMarkup = (cost: number, sellingPrice: number): CalculationResult => {
    if (cost === 0) {
      return { result: 0, formula: 'Cannot divide by zero', steps: ['Cost cannot be zero'] };
    }
    const profit = sellingPrice - cost;
    const markup = (profit / cost) * 100;
    const profitMargin = (profit / sellingPrice) * 100;
    return {
      result: markup,
      formula: `((${sellingPrice} - ${cost}) ÷ ${cost}) × 100 = ${markup.toFixed(2)}%`,
      steps: [
        `Cost: $${cost}`,
        `Selling price: $${sellingPrice}`,
        `Profit: $${profit.toFixed(2)}`,
        `Markup: ${markup.toFixed(2)}%`,
        `Profit margin: ${profitMargin.toFixed(2)}%`
      ]
    };
  };

  const calculateCommission = (salesAmount: number, commissionRate: number): CalculationResult => {
    const commission = salesAmount * (commissionRate / 100);
    const netProfit = salesAmount - commission;
    return {
      result: commission,
      formula: `${salesAmount} × ${commissionRate}% = $${commission.toFixed(2)}`,
      steps: [
        `Sales amount: $${salesAmount}`,
        `Commission rate: ${commissionRate}%`,
        `Commission: $${commission.toFixed(2)}`,
        `Net after commission: $${netProfit.toFixed(2)}`
      ]
    };
  };

  // New Education Calculation Functions
  const calculateWeightedGrade = (values: Record<string, number>): CalculationResult => {
    const homework = values.homework || 0;
    const homeworkWeight = values.homeworkWeight || 30;
    const tests = values.tests || 0;
    const testsWeight = values.testsWeight || 40;
    const final = values.final || 0;
    const finalWeight = values.finalWeight || 30;

    const weightedGrade = (homework * homeworkWeight + tests * testsWeight + final * finalWeight) / (homeworkWeight + testsWeight + finalWeight);
    return {
      result: weightedGrade,
      formula: `Weighted Grade = ${weightedGrade.toFixed(2)}%`,
      steps: [
        `Homework: ${homework}% (weight: ${homeworkWeight}%)`,
        `Tests: ${tests}% (weight: ${testsWeight}%)`,
        `Final: ${final}% (weight: ${finalWeight}%)`,
        `Weighted grade = (${homework}×${homeworkWeight} + ${tests}×${testsWeight} + ${final}×${finalWeight}) ÷ 100`,
        `Result: ${weightedGrade.toFixed(2)}%`
      ]
    };
  };

  const calculateFinalGrade = (currentGrade: number, targetGrade: number, finalWeight: number): CalculationResult => {
    const requiredFinal = (targetGrade - currentGrade * (1 - finalWeight / 100)) / (finalWeight / 100);
    return {
      result: requiredFinal,
      formula: `Required Final = (${targetGrade} - ${currentGrade} × ${1 - finalWeight / 100}) ÷ ${finalWeight / 100} = ${requiredFinal.toFixed(2)}%`,
      steps: [
        `Current grade: ${currentGrade}%`,
        `Target grade: ${targetGrade}%`,
        `Final exam weight: ${finalWeight}%`,
        `Required score on final: ${requiredFinal.toFixed(2)}%`,
        requiredFinal > 100 ? 'Note: This target is not achievable without extra credit' : `You need ${requiredFinal.toFixed(2)}% on the final exam`
      ]
    };
  };

  const calculateGradeNeeded = (currentAverage: number, targetAverage: number, assignmentsCompleted: number): CalculationResult => {
    const gradeNeeded = targetAverage * (assignmentsCompleted + 1) - currentAverage * assignmentsCompleted;
    return {
      result: gradeNeeded,
      formula: `Grade Needed = ${targetAverage} × ${assignmentsCompleted + 1} - ${currentAverage} × ${assignmentsCompleted} = ${gradeNeeded.toFixed(2)}%`,
      steps: [
        `Current average: ${currentAverage}%`,
        `Target average: ${targetAverage}%`,
        `Assignments completed: ${assignmentsCompleted}`,
        `Grade needed on next assignment: ${gradeNeeded.toFixed(2)}%`,
        gradeNeeded > 100 ? 'Note: This score may not be achievable' : `You need ${gradeNeeded.toFixed(2)}% on your next assignment`
      ]
    };
  };

  const calculateSemesterGPA = (values: Record<string, number>): CalculationResult => {
    const gradePoints = values.gradePoints || 0;
    const creditHours = values.creditHours || 0;
    const gpa = gradePoints;
    return {
      result: gpa,
      formula: `GPA = ${gpa.toFixed(2)}`,
      steps: [
        `Grade points: ${gradePoints}`,
        `Credit hours: ${creditHours}`,
        `Semester GPA: ${gpa.toFixed(2)}`
      ]
    };
  };

  const calculateClassAverage = (gradesStr: string): CalculationResult => {
    const grades = gradesStr.toString().split(',').map(g => parseFloat(g.trim())).filter(g => !isNaN(g));
    if (grades.length === 0) {
      return { result: 0, formula: 'No valid grades', steps: ['Please enter comma-separated grades'] };
    }
    const sum = grades.reduce((a, b) => a + b, 0);
    const average = sum / grades.length;
    const sortedGrades = [...grades].sort((a, b) => a - b);
    const median = sortedGrades.length % 2 === 0
      ? (sortedGrades[sortedGrades.length / 2 - 1] + sortedGrades[sortedGrades.length / 2]) / 2
      : sortedGrades[Math.floor(sortedGrades.length / 2)];

    return {
      result: average,
      formula: `Average = ${sum.toFixed(2)} ÷ ${grades.length} = ${average.toFixed(2)}%`,
      steps: [
        `Grades: ${grades.join(', ')}`,
        `Number of students: ${grades.length}`,
        `Total: ${sum.toFixed(2)}`,
        `Average (mean): ${average.toFixed(2)}%`,
        `Median: ${median.toFixed(2)}%`,
        `Highest: ${Math.max(...grades).toFixed(2)}%`,
        `Lowest: ${Math.min(...grades).toFixed(2)}%`
      ]
    };
  };

  const calculateGradingCurve = (originalGrade: number, curveType: string): CalculationResult => {
    let curvedGrade = originalGrade;
    let explanation = '';

    if (curveType === 'square-root') {
      curvedGrade = Math.sqrt(originalGrade * 100);
      explanation = `√(${originalGrade} × 100) = √${originalGrade * 100} = ${curvedGrade.toFixed(2)}%`;
    } else if (curveType === 'flat') {
      const boost = 10;
      curvedGrade = originalGrade + boost;
      explanation = `${originalGrade} + ${boost} points = ${curvedGrade.toFixed(2)}%`;
    }

    return {
      result: curvedGrade,
      formula: explanation,
      steps: [
        `Original grade: ${originalGrade}%`,
        `Curve type: ${curveType}`,
        `Curved grade: ${curvedGrade.toFixed(2)}%`,
        `Improvement: +${(curvedGrade - originalGrade).toFixed(2)} points`
      ]
    };
  };

  // New Daily Use Calculation Functions
  const calculateCurrencyPercentage = (oldRate: number, newRate: number, amount: number): CalculationResult => {
    if (oldRate === 0) {
      return { result: 0, formula: 'Cannot divide by zero', steps: ['Old rate cannot be zero'] };
    }
    const changePercent = ((newRate - oldRate) / oldRate) * 100;
    const converted = amount * newRate;
    return {
      result: changePercent,
      formula: `((${newRate} - ${oldRate}) ÷ ${oldRate}) × 100 = ${changePercent.toFixed(2)}%`,
      steps: [
        `Old exchange rate: ${oldRate}`,
        `New exchange rate: ${newRate}`,
        `Percentage change: ${changePercent.toFixed(2)}%`,
        `$${amount} converts to ${converted.toFixed(2)} units`
      ]
    };
  };

  const calculateCompoundGrowth = (startingValue: number, endingValue: number, years: number): CalculationResult => {
    if (startingValue === 0 || years === 0) {
      return { result: 0, formula: 'Invalid input', steps: ['Starting value and years must be greater than zero'] };
    }
    const cagr = (Math.pow(endingValue / startingValue, 1 / years) - 1) * 100;
    return {
      result: cagr,
      formula: `CAGR = ((${endingValue} ÷ ${startingValue})^(1/${years}) - 1) × 100 = ${cagr.toFixed(2)}%`,
      steps: [
        `Starting value: $${startingValue}`,
        `Ending value: $${endingValue}`,
        `Years: ${years}`,
        `Growth ratio: ${(endingValue / startingValue).toFixed(4)}`,
        `CAGR: ${cagr.toFixed(2)}%`
      ]
    };
  };

  const calculateDebtToIncome = (monthlyIncome: number, loanPayment: number): CalculationResult => {
    if (monthlyIncome === 0) {
      return { result: 0, formula: 'Cannot divide by zero', steps: ['Monthly income cannot be zero'] };
    }
    const dti = (loanPayment / monthlyIncome) * 100;
    return {
      result: dti,
      formula: `(${loanPayment} ÷ ${monthlyIncome}) × 100 = ${dti.toFixed(2)}%`,
      steps: [
        `Monthly income: $${monthlyIncome}`,
        `Loan payment: $${loanPayment}`,
        `Debt-to-income ratio: ${dti.toFixed(2)}%`,
        dti < 36 ? 'Excellent DTI ratio!' : dti < 43 ? 'Acceptable DTI ratio' : 'High DTI ratio - consider reducing debt'
      ]
    };
  };

  const calculateBudgetPercentage = (income: number, expense: number): CalculationResult => {
    if (income === 0) {
      return { result: 0, formula: 'Cannot divide by zero', steps: ['Income cannot be zero'] };
    }
    const percentage = (expense / income) * 100;
    return {
      result: percentage,
      formula: `(${expense} ÷ ${income}) × 100 = ${percentage.toFixed(2)}%`,
      steps: [
        `Total income: $${income}`,
        `Expense: $${expense}`,
        `Percentage of budget: ${percentage.toFixed(2)}%`,
        `Remaining budget: $${(income - expense).toFixed(2)} (${(100 - percentage).toFixed(2)}%)`
      ]
    };
  };

  const calculateCaloriePercentage = (totalCalories: number, macroCalories: number): CalculationResult => {
    if (totalCalories === 0) {
      return { result: 0, formula: 'Cannot divide by zero', steps: ['Total calories cannot be zero'] };
    }
    const percentage = (macroCalories / totalCalories) * 100;
    return {
      result: percentage,
      formula: `(${macroCalories} ÷ ${totalCalories}) × 100 = ${percentage.toFixed(2)}%`,
      steps: [
        `Total calories: ${totalCalories}`,
        `Macro calories: ${macroCalories}`,
        `Percentage: ${percentage.toFixed(2)}%`
      ]
    };
  };

  const calculateTimePercentage = (totalTime: number, timeSpent: number): CalculationResult => {
    if (totalTime === 0) {
      return { result: 0, formula: 'Cannot divide by zero', steps: ['Total time cannot be zero'] };
    }
    const percentElapsed = (timeSpent / totalTime) * 100;
    const percentRemaining = 100 - percentElapsed;
    return {
      result: percentElapsed,
      formula: `(${timeSpent} ÷ ${totalTime}) × 100 = ${percentElapsed.toFixed(2)}%`,
      steps: [
        `Total time: ${totalTime} hours`,
        `Time spent: ${timeSpent} hours`,
        `Percent elapsed: ${percentElapsed.toFixed(2)}%`,
        `Percent remaining: ${percentRemaining.toFixed(2)}%`,
        `Time remaining: ${(totalTime - timeSpent).toFixed(2)} hours`
      ]
    };
  };

  const renderFormFields = () => {
    const fields: { name: string; label: string; placeholder: string }[] = [];

    switch (calculator.slug) {
      case 'percent-of':
        fields.push(
          { name: 'percentage', label: 'Percentage (%)', placeholder: 'e.g., 20' },
          { name: 'number', label: 'Number', placeholder: 'e.g., 500' }
        );
        break;
      case 'percentage-increase':
        fields.push(
          { name: 'originalValue', label: 'Original Value', placeholder: 'e.g., 100' },
          { name: 'newValue', label: 'New Value', placeholder: 'e.g., 125' }
        );
        break;
      case 'percentage-decrease':
        fields.push(
          { name: 'originalValue', label: 'Original Value', placeholder: 'e.g., 200' },
          { name: 'newValue', label: 'New Value', placeholder: 'e.g., 150' }
        );
        break;
      case 'percentage-difference':
        fields.push(
          { name: 'value1', label: 'Value 1', placeholder: 'e.g., 100' },
          { name: 'value2', label: 'Value 2', placeholder: 'e.g., 120' }
        );
        break;
      case 'what-percent':
        fields.push(
          { name: 'part', label: 'Part Value', placeholder: 'e.g., 25' },
          { name: 'total', label: 'Total Value', placeholder: 'e.g., 200' }
        );
        break;
      case 'roi':
        fields.push(
          { name: 'initialInvestment', label: 'Initial Investment ($)', placeholder: 'e.g., 1000' },
          { name: 'finalValue', label: 'Final Value ($)', placeholder: 'e.g., 1500' }
        );
        break;
      case 'profit-margin':
        fields.push(
          { name: 'revenue', label: 'Revenue ($)', placeholder: 'e.g., 1000' },
          { name: 'cost', label: 'Cost ($)', placeholder: 'e.g., 600' }
        );
        break;
      case 'sales-tax':
        fields.push(
          { name: 'price', label: 'Price Before Tax ($)', placeholder: 'e.g., 100' },
          { name: 'taxRate', label: 'Tax Rate (%)', placeholder: 'e.g., 8.5' }
        );
        break;
      case 'discount':
        fields.push(
          { name: 'originalPrice', label: 'Original Price ($)', placeholder: 'e.g., 100' },
          { name: 'discountPercent', label: 'Discount (%)', placeholder: 'e.g., 20' }
        );
        break;
      case 'grade-percentage':
        fields.push(
          { name: 'pointsEarned', label: 'Points Earned', placeholder: 'e.g., 85' },
          { name: 'totalPoints', label: 'Total Points', placeholder: 'e.g., 100' }
        );
        break;
      case 'gpa-calculator':
        fields.push(
          { name: 'gradePoints', label: 'Grade Points (4.0 Scale)', placeholder: 'e.g., 3.5' },
          { name: 'creditHours', label: 'Credit Hours', placeholder: 'e.g., 3' }
        );
        break;
      case 'test-score':
        fields.push(
          { name: 'pointsEarned', label: 'Points Earned', placeholder: 'e.g., 42' },
          { name: 'totalPoints', label: 'Total Points', placeholder: 'e.g., 50' }
        );
        break;
      case 'tip-calculator':
        fields.push(
          { name: 'billAmount', label: 'Bill Amount ($)', placeholder: 'e.g., 50' },
          { name: 'tipPercent', label: 'Tip Percentage (%)', placeholder: 'e.g., 20' },
          { name: 'numPeople', label: 'Number of People (Optional)', placeholder: 'e.g., 2' }
        );
        break;
      case 'percentage-change':
        fields.push(
          { name: 'oldValue', label: 'Old Value', placeholder: 'e.g., 100' },
          { name: 'newValue', label: 'New Value', placeholder: 'e.g., 150' }
        );
        break;
      case 'ratio-calculator':
        fields.push(
          { name: 'valueA', label: 'Value A', placeholder: 'e.g., 4' },
          { name: 'valueB', label: 'Value B', placeholder: 'e.g., 6' }
        );
        break;
      // New Basic Percentage Calculators
      case 'reverse-percentage':
        fields.push(
          { name: 'finalValue', label: 'Final Value', placeholder: 'e.g., 120' },
          { name: 'percentage', label: 'Percentage (%)', placeholder: 'e.g., 20' },
          { name: 'isIncrease', label: 'Is Increase? (1=Yes, 0=No)', placeholder: '1 or 0' }
        );
        break;
      case 'percentage-of-total':
        fields.push(
          { name: 'value', label: 'Value', placeholder: 'e.g., 30' },
          { name: 'total', label: 'Total', placeholder: 'e.g., 100' }
        );
        break;
      case 'fraction-to-percent':
        fields.push(
          { name: 'numerator', label: 'Numerator', placeholder: 'e.g., 3' },
          { name: 'denominator', label: 'Denominator', placeholder: 'e.g., 4' }
        );
        break;
      case 'percent-to-decimal':
        fields.push(
          { name: 'percentage', label: 'Percentage (%)', placeholder: 'e.g., 75' }
        );
        break;
      case 'decimal-to-percent':
        fields.push(
          { name: 'decimal', label: 'Decimal', placeholder: 'e.g., 0.85' }
        );
        break;
      case 'percentage-calculator':
        fields.push(
          { name: 'percentage', label: 'Percentage (%)', placeholder: 'e.g., 50' },
          { name: 'number', label: 'Number', placeholder: 'e.g., 100' }
        );
        break;
      // New Financial Calculators
      case 'compound-interest':
        fields.push(
          { name: 'principal', label: 'Principal ($)', placeholder: 'e.g., 10000' },
          { name: 'rate', label: 'Annual Interest Rate (%)', placeholder: 'e.g., 5' },
          { name: 'years', label: 'Years', placeholder: 'e.g., 10' },
          { name: 'compounds', label: 'Compounds per Year', placeholder: 'e.g., 12' }
        );
        break;
      case 'loan-interest':
        fields.push(
          { name: 'loanAmount', label: 'Loan Amount ($)', placeholder: 'e.g., 20000' },
          { name: 'interestRate', label: 'Annual Interest Rate (%)', placeholder: 'e.g., 6' },
          { name: 'loanTerm', label: 'Loan Term (Years)', placeholder: 'e.g., 5' }
        );
        break;
      case 'mortgage-calculator':
        fields.push(
          { name: 'homePrice', label: 'Home Price ($)', placeholder: 'e.g., 300000' },
          { name: 'downPayment', label: 'Down Payment ($)', placeholder: 'e.g., 60000' },
          { name: 'interestRate', label: 'Annual Interest Rate (%)', placeholder: 'e.g., 4.5' },
          { name: 'loanTerm', label: 'Loan Term (Years)', placeholder: 'e.g., 30' }
        );
        break;
      case 'investment-return':
        fields.push(
          { name: 'initialInvestment', label: 'Initial Investment ($)', placeholder: 'e.g., 10000' },
          { name: 'finalValue', label: 'Final Value ($)', placeholder: 'e.g., 12500' },
          { name: 'dividends', label: 'Dividends ($)', placeholder: 'e.g., 500' }
        );
        break;
      case 'markup-percentage':
        fields.push(
          { name: 'cost', label: 'Cost ($)', placeholder: 'e.g., 50' },
          { name: 'sellingPrice', label: 'Selling Price ($)', placeholder: 'e.g., 75' }
        );
        break;
      case 'commission-calculator':
        fields.push(
          { name: 'salesAmount', label: 'Sales Amount ($)', placeholder: 'e.g., 50000' },
          { name: 'commissionRate', label: 'Commission Rate (%)', placeholder: 'e.g., 5' }
        );
        break;
      // New Education Calculators
      case 'weighted-grade':
        fields.push(
          { name: 'homework', label: 'Homework Grade (%)', placeholder: 'e.g., 85' },
          { name: 'homeworkWeight', label: 'Homework Weight (%)', placeholder: 'e.g., 30' },
          { name: 'tests', label: 'Tests Grade (%)', placeholder: 'e.g., 78' },
          { name: 'testsWeight', label: 'Tests Weight (%)', placeholder: 'e.g., 40' },
          { name: 'final', label: 'Final Grade (%)', placeholder: 'e.g., 92' },
          { name: 'finalWeight', label: 'Final Weight (%)', placeholder: 'e.g., 30' }
        );
        break;
      case 'final-grade':
        fields.push(
          { name: 'currentGrade', label: 'Current Grade (%)', placeholder: 'e.g., 85' },
          { name: 'targetGrade', label: 'Target Grade (%)', placeholder: 'e.g., 90' },
          { name: 'finalWeight', label: 'Final Exam Weight (%)', placeholder: 'e.g., 30' }
        );
        break;
      case 'grade-needed':
        fields.push(
          { name: 'currentAverage', label: 'Current Average (%)', placeholder: 'e.g., 82' },
          { name: 'targetAverage', label: 'Target Average (%)', placeholder: 'e.g., 85' },
          { name: 'assignmentsCompleted', label: 'Assignments Completed', placeholder: 'e.g., 5' }
        );
        break;
      case 'semester-gpa':
        fields.push(
          { name: 'gradePoints', label: 'Grade Points (4.0 Scale)', placeholder: 'e.g., 3.5' },
          { name: 'creditHours', label: 'Credit Hours', placeholder: 'e.g., 15' }
        );
        break;
      case 'class-average':
        fields.push(
          { name: 'grades', label: 'Student Grades (comma-separated)', placeholder: 'e.g., 85, 90, 78, 92, 88' }
        );
        break;
      case 'grading-curve':
        fields.push(
          { name: 'originalGrade', label: 'Original Grade (%)', placeholder: 'e.g., 64' },
          { name: 'curveType', label: 'Curve Type (square-root or flat)', placeholder: 'square-root' }
        );
        break;
      // New Daily Use Calculators
      case 'currency-converter':
        fields.push(
          { name: 'oldRate', label: 'Old Exchange Rate', placeholder: 'e.g., 1.20' },
          { name: 'newRate', label: 'New Exchange Rate', placeholder: 'e.g., 1.25' },
          { name: 'amount', label: 'Amount to Convert', placeholder: 'e.g., 1000' }
        );
        break;
      case 'compound-growth':
        fields.push(
          { name: 'startingValue', label: 'Starting Value ($)', placeholder: 'e.g., 10000' },
          { name: 'endingValue', label: 'Ending Value ($)', placeholder: 'e.g., 15000' },
          { name: 'years', label: 'Years', placeholder: 'e.g., 5' }
        );
        break;
      case 'loan-payment':
        fields.push(
          { name: 'monthlyIncome', label: 'Monthly Income ($)', placeholder: 'e.g., 5000' },
          { name: 'loanPayment', label: 'Loan Payment ($)', placeholder: 'e.g., 1200' }
        );
        break;
      case 'budget-percentage':
        fields.push(
          { name: 'income', label: 'Total Income ($)', placeholder: 'e.g., 5000' },
          { name: 'expense', label: 'Expense ($)', placeholder: 'e.g., 1500' }
        );
        break;
      case 'calorie-percentage':
        fields.push(
          { name: 'totalCalories', label: 'Total Daily Calories', placeholder: 'e.g., 2000' },
          { name: 'macroCalories', label: 'Macro Calories', placeholder: 'e.g., 600' }
        );
        break;
      case 'time-percentage':
        fields.push(
          { name: 'totalTime', label: 'Total Time (hours)', placeholder: 'e.g., 8' },
          { name: 'timeSpent', label: 'Time Spent (hours)', placeholder: 'e.g., 3' }
        );
        break;
    }

    return fields.map(field => (
      <div key={field.name} className="space-y-2.5 md:space-y-2">
        <Label htmlFor={field.name} className="text-base md:text-sm font-medium">
          {field.label}
        </Label>
        <Input
          id={field.name}
          type={field.name === 'grades' || field.name === 'curveType' ? 'text' : 'number'}
          step={field.name === 'grades' || field.name === 'curveType' ? undefined : 'any'}
          placeholder={field.placeholder}
          value={inputs[field.name] || ''}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          className={`min-h-[48px] md:min-h-[40px] text-base ${errors[field.name] ? 'border-destructive' : ''}`}
        />
        {errors[field.name] && (
          <p className="text-sm md:text-xs text-destructive font-medium">{errors[field.name]}</p>
        )}
      </div>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Calculate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderFormFields()}
            </div>
            <Button
              onClick={calculateResult}
              className="w-full min-h-[48px] md:min-h-[44px] text-base md:text-sm font-semibold"
              size="lg"
            >
              Calculate
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Result Display */}
      {result && (
        <>
          <Card className="border-primary/50">
            <CardHeader>
              <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xl md:text-2xl">
                <span>Result</span>
                <Button
                  variant="outline"
                  size="default"
                  onClick={handleCopy}
                  className="gap-2 min-h-[44px] w-full sm:w-auto text-base sm:text-sm"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy
                    </>
                  )}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center px-2 md:px-0">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-4 break-words">
                  {result.result.toFixed(2)}
                  {calculator.slug === 'roi' || calculator.slug === 'grade-percentage' ? '%' : ''}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-mono break-words px-2">
                  {result.formula}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step-by-Step Explanation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Step-by-Step Explanation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 md:space-y-3">
                {result.steps.map((step, index) => (
                  <li key={index} className="flex gap-3 md:gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 md:w-6 md:h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground text-base md:text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Visualization with Chart.js */}
          {calculator.hasChart && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Visualization</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <Suspense fallback={
                  <div className="bg-muted/30 rounded-lg p-8 text-center text-muted-foreground">
                    Loading chart...
                  </div>
                }>
                  {calculator.slug === 'roi' && inputs.initialInvestment && inputs.finalValue && (
                    <ROIChart
                      initialInvestment={Number(inputs.initialInvestment)}
                      finalValue={Number(inputs.finalValue)}
                      roi={result.result}
                    />
                  )}
                  {calculator.slug === 'discount' && inputs.originalPrice && inputs.discountPercent && (
                    <DiscountChart
                      originalPrice={Number(inputs.originalPrice)}
                      discountPercent={Number(inputs.discountPercent)}
                      finalPrice={result.result}
                    />
                  )}
                </Suspense>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
