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
      } else if (isNaN(Number(value))) {
        newErrors[key] = 'Please enter a valid number';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateResult = () => {
    if (!validateInputs()) return;

    const values = Object.entries(inputs).reduce((acc, [key, value]) => {
      acc[key] = Number(value);
      return acc;
    }, {} as Record<string, number>);

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
    }

    return fields.map(field => (
      <div key={field.name} className="space-y-2.5 md:space-y-2">
        <Label htmlFor={field.name} className="text-base md:text-sm font-medium">
          {field.label}
        </Label>
        <Input
          id={field.name}
          type="number"
          step="any"
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
