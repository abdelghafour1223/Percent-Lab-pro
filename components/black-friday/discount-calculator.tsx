'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

interface DiscountCalculatorProps {
  defaultPrice?: string;
  discountPercent: number;
  title?: string;
}

export function DiscountCalculator({
  defaultPrice = '500',
  discountPercent,
  title = 'Black Friday Calculator'
}: DiscountCalculatorProps) {
  const [originalPrice, setOriginalPrice] = useState(defaultPrice);
  const [savingsAmount, setSavingsAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    const price = parseFloat(originalPrice) || 0;
    const savings = (price * discountPercent) / 100;
    const final = price - savings;
    setSavingsAmount(savings);
    setFinalPrice(final);
  }, [originalPrice, discountPercent]);

  return (
    <Card className="mb-8 border-2 border-yellow-500 dark:border-yellow-600 shadow-xl w-full">
      <CardHeader className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/30 dark:to-red-950/30">
        <CardTitle className="flex items-center gap-2 text-base md:text-lg">
          <DollarSign className="h-5 w-5 text-green-600 dark:text-green-500" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 px-4 md:px-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm md:text-base font-medium mb-2 text-foreground">Original Price ($)</label>
            <input
              type="number"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              className="w-full min-h-[44px] p-3 md:p-4 border-2 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:focus:ring-yellow-600 dark:focus:border-yellow-600 text-base md:text-lg bg-background text-foreground dark:bg-muted dark:border-muted"
              placeholder="Enter price"
            />
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 md:p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-700">
            <div className="text-center space-y-3">
              <div>
                <p className="text-sm md:text-base text-muted-foreground mb-1">You Save</p>
                <p className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-500">${savingsAmount.toFixed(2)}</p>
              </div>
              <div className="border-t border-yellow-300 dark:border-yellow-800 pt-3">
                <p className="text-sm md:text-base text-muted-foreground mb-1">Final Price</p>
                <p className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-500">${finalPrice.toFixed(2)}</p>
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {discountPercent}% OFF • Original: ${parseFloat(originalPrice || '0').toFixed(2)}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-black dark:bg-gray-900 hover:bg-gray-800 dark:hover:bg-gray-700 text-white min-h-[44px] px-4 md:px-6 py-3 rounded-lg font-semibold transition-colors text-sm md:text-base">
              Share Deal
            </button>
            <button className="flex-1 bg-yellow-500 dark:bg-yellow-600 hover:bg-yellow-600 dark:hover:bg-yellow-700 text-black dark:text-white min-h-[44px] px-4 md:px-6 py-3 rounded-lg font-semibold transition-colors text-sm md:text-base">
              Save Result
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
