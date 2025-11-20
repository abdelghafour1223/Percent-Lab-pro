'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TipCalculatorWidgetProps {
  defaultBill?: number;
  defaultTip?: number;
  defaultPeople?: number;
}

export function TipCalculatorWidget({
  defaultBill = 50,
  defaultTip = 15,
  defaultPeople = 1,
}: TipCalculatorWidgetProps) {
  const [billAmount, setBillAmount] = useState(defaultBill);
  const [tipPercent, setTipPercent] = useState(defaultTip);
  const [numPeople, setNumPeople] = useState(defaultPeople);

  const tipAmount = (tipPercent / 100) * billAmount;
  const totalWithTip = billAmount + tipAmount;
  const perPerson = numPeople > 0 ? totalWithTip / numPeople : totalWithTip;

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="bg-primary/5">
        <CardTitle className="text-center">Calculate Your Tip</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* Bill Amount */}
          <div className="space-y-2">
            <Label htmlFor="bill-amount" className="text-base font-semibold">
              Bill Amount
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                $
              </span>
              <Input
                id="bill-amount"
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(Number(e.target.value) || 0)}
                className="pl-7 text-lg h-12"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {/* Tip Percentage */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label htmlFor="tip-percent" className="text-base font-semibold">
                Tip Percentage
              </Label>
              <span className="text-2xl font-bold text-primary">{tipPercent}%</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[10, 15, 18, 20, 25].map((percent) => (
                <button
                  key={percent}
                  onClick={() => setTipPercent(percent)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    tipPercent === percent
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {percent}%
                </button>
              ))}
            </div>
            <Input
              id="tip-percent"
              type="number"
              value={tipPercent}
              onChange={(e) => setTipPercent(Number(e.target.value) || 0)}
              className="text-center"
              min="0"
              max="100"
              step="1"
            />
          </div>

          {/* Number of People */}
          <div className="space-y-2">
            <Label htmlFor="num-people" className="text-base font-semibold">
              Number of People
            </Label>
            <Input
              id="num-people"
              type="number"
              value={numPeople}
              onChange={(e) => setNumPeople(Number(e.target.value) || 1)}
              className="text-lg h-12"
              min="1"
              step="1"
            />
          </div>

          {/* Results */}
          <div className="border-t pt-6 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Tip Amount:</span>
              <span className="text-2xl font-bold text-primary">
                ${tipAmount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total with Tip:</span>
              <span className="text-2xl font-bold">
                ${totalWithTip.toFixed(2)}
              </span>
            </div>
            {numPeople > 1 && (
              <div className="flex justify-between items-center pt-3 border-t">
                <span className="text-muted-foreground">Per Person:</span>
                <span className="text-xl font-bold text-primary">
                  ${perPerson.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
