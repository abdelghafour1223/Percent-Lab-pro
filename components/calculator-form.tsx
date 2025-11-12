'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator as CalculatorType } from '@/data/calculators';
import { Copy, Check } from 'lucide-react';

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
      case 'roi':
        calculationResult = calculateROI(values.initialInvestment, values.finalValue);
        break;
      case 'grade-percentage':
        calculationResult = calculateGradePercentage(values.pointsEarned, values.totalPoints);
        break;
      case 'discount':
        calculationResult = calculateDiscount(values.originalPrice, values.discountPercent);
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
      case 'roi':
        fields.push(
          { name: 'initialInvestment', label: 'Initial Investment ($)', placeholder: 'e.g., 1000' },
          { name: 'finalValue', label: 'Final Value ($)', placeholder: 'e.g., 1500' }
        );
        break;
      case 'grade-percentage':
        fields.push(
          { name: 'pointsEarned', label: 'Points Earned', placeholder: 'e.g., 85' },
          { name: 'totalPoints', label: 'Total Points', placeholder: 'e.g., 100' }
        );
        break;
      case 'discount':
        fields.push(
          { name: 'originalPrice', label: 'Original Price ($)', placeholder: 'e.g., 100' },
          { name: 'discountPercent', label: 'Discount (%)', placeholder: 'e.g., 20' }
        );
        break;
    }

    return fields.map(field => (
      <div key={field.name} className="space-y-2">
        <Label htmlFor={field.name}>{field.label}</Label>
        <Input
          id={field.name}
          type="number"
          step="any"
          placeholder={field.placeholder}
          value={inputs[field.name] || ''}
          onChange={(e) => handleInputChange(field.name, e.target.value)}
          className={errors[field.name] ? 'border-destructive' : ''}
        />
        {errors[field.name] && (
          <p className="text-sm text-destructive">{errors[field.name]}</p>
        )}
      </div>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Input Form */}
      <Card>
        <CardHeader>
          <CardTitle>Calculate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderFormFields()}
            </div>
            <Button onClick={calculateResult} className="w-full" size="lg">
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
              <CardTitle className="flex items-center justify-between">
                Result
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopy}
                  className="gap-2"
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
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                  {result.result.toFixed(2)}
                  {calculator.slug === 'roi' || calculator.slug === 'grade-percentage' ? '%' : ''}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {result.formula}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step-by-Step Explanation */}
          <Card>
            <CardHeader>
              <CardTitle>Step-by-Step Explanation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {result.steps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Visualization (placeholder for Chart.js) */}
          {calculator.hasChart && (
            <Card>
              <CardHeader>
                <CardTitle>Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-8 text-center text-muted-foreground">
                  Chart visualization coming soon (Chart.js integration)
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
