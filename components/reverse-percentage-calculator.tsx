'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator, Copy, Check } from 'lucide-react';

export function ReversePercentageCalculator() {
  const [finalPrice, setFinalPrice] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const [result, setResult] = useState<{
    originalPrice: number;
    amountSaved: number;
    discountAmount: number;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<{ finalPrice?: string; discountPercent?: string }>({});

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(`$${result.originalPrice.toFixed(2)}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const validateInputs = (): boolean => {
    const newErrors: { finalPrice?: string; discountPercent?: string } = {};

    if (!finalPrice || isNaN(Number(finalPrice)) || Number(finalPrice) <= 0) {
      newErrors.finalPrice = 'Please enter a valid price';
    }

    if (!discountPercent || isNaN(Number(discountPercent)) || Number(discountPercent) <= 0 || Number(discountPercent) >= 100) {
      newErrors.discountPercent = 'Please enter a discount between 0 and 100';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateOriginalPrice = () => {
    if (!validateInputs()) return;

    const final = Number(finalPrice);
    const discount = Number(discountPercent);

    // Formula: Original Price = Final Price / (1 - Discount/100)
    const multiplier = 1 - discount / 100;
    const original = final / multiplier;
    const saved = original - final;
    const discountAmt = original * (discount / 100);

    setResult({
      originalPrice: original,
      amountSaved: saved,
      discountAmount: discountAmt,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateOriginalPrice();
    }
  };

  return (
    <Card className="mb-8 border-2 border-primary">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
          <Calculator className="h-6 w-6" />
          Interactive Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 md:px-6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Final Price Input */}
          <div>
            <Label htmlFor="finalPrice" className="text-base mb-2 block">
              Final Price (after discount)
            </Label>
            <Input
              id="finalPrice"
              type="number"
              placeholder="e.g., 80"
              value={finalPrice}
              onChange={(e) => {
                setFinalPrice(e.target.value);
                if (errors.finalPrice) setErrors({ ...errors, finalPrice: undefined });
              }}
              onKeyPress={handleKeyPress}
              className={`text-lg ${errors.finalPrice ? 'border-red-500' : ''}`}
            />
            {errors.finalPrice && (
              <p className="text-red-500 text-sm mt-1">{errors.finalPrice}</p>
            )}
          </div>

          {/* Discount Percentage Input */}
          <div>
            <Label htmlFor="discountPercent" className="text-base mb-2 block">
              Discount Percentage (%)
            </Label>
            <Input
              id="discountPercent"
              type="number"
              placeholder="e.g., 20"
              value={discountPercent}
              onChange={(e) => {
                setDiscountPercent(e.target.value);
                if (errors.discountPercent) setErrors({ ...errors, discountPercent: undefined });
              }}
              onKeyPress={handleKeyPress}
              className={`text-lg ${errors.discountPercent ? 'border-red-500' : ''}`}
            />
            {errors.discountPercent && (
              <p className="text-red-500 text-sm mt-1">{errors.discountPercent}</p>
            )}
          </div>
        </div>

        {/* Calculate Button */}
        <Button
          onClick={calculateOriginalPrice}
          size="lg"
          className="w-full md:w-auto min-h-[48px] text-base font-semibold"
        >
          <Calculator className="mr-2 h-5 w-5" />
          Calculate Original Price
        </Button>

        {/* Results Display */}
        {result && (
          <div className="mt-8 space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6 rounded-lg border-2 border-green-500 dark:border-green-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Results</h3>
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              <div className="space-y-4">
                {/* Original Price */}
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Original Price</p>
                  <p className="text-3xl font-bold text-green-700 dark:text-green-500">
                    ${result.originalPrice.toFixed(2)}
                  </p>
                </div>

                {/* Amount Saved */}
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Amount Saved</p>
                  <p className="text-2xl font-bold text-red-600 dark:text-red-500">
                    ${result.amountSaved.toFixed(2)}
                  </p>
                </div>

                {/* Discount Amount */}
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Discount Amount</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-500">
                    ${result.discountAmount.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Calculation Breakdown */}
              <div className="mt-6 bg-muted/50 dark:bg-muted/20 p-4 rounded-lg">
                <h4 className="font-bold mb-3 text-sm">Calculation Breakdown:</h4>
                <div className="space-y-2 text-sm font-mono">
                  <p>1. Discount as decimal: {discountPercent}% = {(Number(discountPercent) / 100).toFixed(2)}</p>
                  <p>2. Multiplier: 1 - {(Number(discountPercent) / 100).toFixed(2)} = {(1 - Number(discountPercent) / 100).toFixed(2)}</p>
                  <p>3. Original Price: ${finalPrice} ÷ {(1 - Number(discountPercent) / 100).toFixed(2)} = ${result.originalPrice.toFixed(2)}</p>
                  <p className="pt-2 border-t border-muted-foreground/20 font-bold">
                    ✓ You saved ${result.amountSaved.toFixed(2)} with this {discountPercent}% discount!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
