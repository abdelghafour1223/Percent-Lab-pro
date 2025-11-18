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
    <Card className="mb-8 border-2 border-yellow-500 shadow-xl">
      <CardHeader className="bg-gradient-to-r from-yellow-50 to-red-50">
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-green-600" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Original Price ($)</label>
            <input
              type="number"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-lg"
              placeholder="Enter price"
            />
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
            <div className="text-center space-y-3">
              <div>
                <p className="text-sm text-gray-600 mb-1">You Save</p>
                <p className="text-4xl font-bold text-red-600">${savingsAmount.toFixed(2)}</p>
              </div>
              <div className="border-t border-yellow-300 pt-3">
                <p className="text-sm text-gray-600 mb-1">Final Price</p>
                <p className="text-3xl font-bold text-green-700">${finalPrice.toFixed(2)}</p>
              </div>
              <div className="text-xs text-gray-500">
                {discountPercent}% OFF • Original: ${parseFloat(originalPrice || '0').toFixed(2)}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Share Deal
            </button>
            <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors">
              Save Result
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
