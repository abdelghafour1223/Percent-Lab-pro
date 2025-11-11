'use client';

import * as React from 'react';
import { Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PercentageChart, ComparisonChart } from '@/components/percentage-chart';
import {
  percentOfSchema,
  percentageSchema,
  changeSchema,
  explainPercentOf,
  explainPercentage,
  explainPercentageChange,
  explainIncreaseByPercent,
  explainDecreaseByPercent,
  type CalculationResult,
} from '@/lib/calculator';
import { formatNumber } from '@/lib/utils';

export function PercentageCalculator() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Percentage Calculator</CardTitle>
        <CardDescription>
          Calculate percentages, increases, decreases, and more with detailed explanations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="percent-of" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="percent-of">Percent Of</TabsTrigger>
            <TabsTrigger value="what-percent">What Percent</TabsTrigger>
            <TabsTrigger value="change">Increase/Decrease</TabsTrigger>
          </TabsList>

          <TabsContent value="percent-of">
            <PercentOfCalculator />
          </TabsContent>

          <TabsContent value="what-percent">
            <WhatPercentCalculator />
          </TabsContent>

          <TabsContent value="change">
            <ChangeCalculator />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function PercentOfCalculator() {
  const [percent, setPercent] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [result, setResult] = React.useState<CalculationResult | null>(null);
  const [error, setError] = React.useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    try {
      const validated = percentOfSchema.parse({
        percent: parseFloat(percent),
        number: parseFloat(number),
      });
      const calcResult = explainPercentOf(validated.percent, validated.number);
      setResult(calcResult);
    } catch (err) {
      setError('Please enter valid numbers');
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="percent">Percentage (%)</Label>
          <Input
            id="percent"
            type="number"
            placeholder="e.g., 20"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="number">Of Number</Label>
          <Input
            id="number"
            type="number"
            placeholder="e.g., 200"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
          />
        </div>
      </div>

      <Button onClick={handleCalculate} className="w-full" size="lg">
        Calculate & Explain
      </Button>

      {error && (
        <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
          {error}
        </div>
      )}

      <AnimatePresence mode="wait">
        {result && <ResultDisplay result={result} type="percent-of" input1={parseFloat(percent)} input2={parseFloat(number)} />}
      </AnimatePresence>
    </div>
  );
}

function WhatPercentCalculator() {
  const [part, setPart] = React.useState('');
  const [whole, setWhole] = React.useState('');
  const [result, setResult] = React.useState<CalculationResult | null>(null);
  const [error, setError] = React.useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    try {
      const validated = percentageSchema.parse({
        part: parseFloat(part),
        whole: parseFloat(whole),
      });
      const calcResult = explainPercentage(validated.part, validated.whole);
      setResult(calcResult);
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Please enter valid numbers');
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="part">Part/Value</Label>
          <Input
            id="part"
            type="number"
            placeholder="e.g., 50"
            value={part}
            onChange={(e) => setPart(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="whole">Total/Whole</Label>
          <Input
            id="whole"
            type="number"
            placeholder="e.g., 200"
            value={whole}
            onChange={(e) => setWhole(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
          />
        </div>
      </div>

      <Button onClick={handleCalculate} className="w-full" size="lg">
        Calculate & Explain
      </Button>

      {error && (
        <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
          {error}
        </div>
      )}

      <AnimatePresence mode="wait">
        {result && <ResultDisplay result={result} type="what-percent" input1={parseFloat(part)} input2={parseFloat(whole)} />}
      </AnimatePresence>
    </div>
  );
}

function ChangeCalculator() {
  const [original, setOriginal] = React.useState('');
  const [newValue, setNewValue] = React.useState('');
  const [changeType, setChangeType] = React.useState<'percentage' | 'increase' | 'decrease'>('percentage');
  const [result, setResult] = React.useState<CalculationResult | null>(null);
  const [error, setError] = React.useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    try {
      if (changeType === 'percentage') {
        const validated = changeSchema.parse({
          original: parseFloat(original),
          newValue: parseFloat(newValue),
        });
        const calcResult = explainPercentageChange(
          validated.original,
          validated.newValue,
          validated.newValue >= validated.original
        );
        setResult(calcResult);
      } else if (changeType === 'increase') {
        const validated = percentOfSchema.parse({
          percent: parseFloat(newValue),
          number: parseFloat(original),
        });
        const calcResult = explainIncreaseByPercent(validated.number, validated.percent);
        setResult(calcResult);
      } else {
        const validated = percentOfSchema.parse({
          percent: parseFloat(newValue),
          number: parseFloat(original),
        });
        const calcResult = explainDecreaseByPercent(validated.number, validated.percent);
        setResult(calcResult);
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Please enter valid numbers');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 mb-4">
        <Button
          variant={changeType === 'percentage' ? 'default' : 'outline'}
          onClick={() => setChangeType('percentage')}
          className="flex-1"
        >
          % Change
        </Button>
        <Button
          variant={changeType === 'increase' ? 'default' : 'outline'}
          onClick={() => setChangeType('increase')}
          className="flex-1"
        >
          Increase By %
        </Button>
        <Button
          variant={changeType === 'decrease' ? 'default' : 'outline'}
          onClick={() => setChangeType('decrease')}
          className="flex-1"
        >
          Decrease By %
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="original">
            {changeType === 'percentage' ? 'Original Value' : 'Starting Number'}
          </Label>
          <Input
            id="original"
            type="number"
            placeholder="e.g., 100"
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="new-value">
            {changeType === 'percentage' ? 'New Value' : 'Percentage (%)'}
          </Label>
          <Input
            id="new-value"
            type="number"
            placeholder={changeType === 'percentage' ? 'e.g., 120' : 'e.g., 20'}
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCalculate()}
          />
        </div>
      </div>

      <Button onClick={handleCalculate} className="w-full" size="lg">
        Calculate & Explain
      </Button>

      {error && (
        <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
          {error}
        </div>
      )}

      <AnimatePresence mode="wait">
        {result && <ResultDisplay result={result} type="change" input1={parseFloat(original)} input2={parseFloat(newValue)} />}
      </AnimatePresence>
    </div>
  );
}

interface ResultDisplayProps {
  result: CalculationResult;
  type: 'percent-of' | 'what-percent' | 'change';
  input1: number;
  input2: number;
}

function ResultDisplay({ result, type, input1, input2 }: ResultDisplayProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(formatNumber(result.result, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 pt-6 border-t"
    >
      {/* Result */}
      <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Result</p>
            <p className="text-4xl font-bold text-primary">
              {formatNumber(result.result, 2)}
              {type === 'what-percent' && '%'}
            </p>
          </div>
          <Button variant="outline" size="icon" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Formula */}
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">Formula</h3>
        <div className="bg-muted p-4 rounded-lg font-mono text-sm">
          {result.formula}
        </div>
      </div>

      {/* Chart */}
      {type === 'percent-of' && (
        <PercentageChart percentage={(result.result / input2) * 100} label="Proportion" />
      )}
      {type === 'what-percent' && (
        <ComparisonChart
          value1={input1}
          value2={input2 - input1}
          label1={`${formatNumber(input1)} (${result.result.toFixed(1)}%)`}
          label2={`${formatNumber(input2 - input1)} (${(100 - result.result).toFixed(1)}%)`}
        />
      )}
      {type === 'change' && (
        <PercentageChart percentage={Math.abs(result.result)} label="Percentage Change" />
      )}

      {/* Steps */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Step-by-Step Solution</h3>
        <ol className="space-y-2">
          {result.steps.map((step, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-3"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                {index + 1}
              </span>
              <span className="text-muted-foreground flex-1">{step}</span>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Examples */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Real-Life Examples</h3>
        <div className="grid gap-3">
          {result.examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-accent/50 p-4 rounded-lg text-sm"
            >
              {example}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
