'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Calculator, DollarSign, Percent, TrendingUp } from 'lucide-react';

interface PercentageInfographicProps {
  percent: number;
  number: number;
  result: number;
  className?: string;
}

export function PercentageInfographic({
  percent,
  number,
  result,
  className,
}: PercentageInfographicProps) {
  const remainder = number - result;

  return (
    <div className={cn('w-full', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Visual Circle Breakdown */}
        <div className="bg-gradient-to-br from-primary/10 via-blue-50 to-background rounded-xl p-6 border border-border">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h4 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
              <Percent className="h-4 w-4" />
              Visual Breakdown
            </h4>

            {/* Circular Progress */}
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  className="text-secondary"
                />

                {/* Animated progress circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: '0 251.2' }}
                  animate={{ strokeDasharray: `${(percent / 100) * 251.2} 251.2` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  className="text-3xl font-bold text-primary"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {percent}%
                </motion.div>
                <div className="text-xs text-muted-foreground">of total</div>
              </div>
            </div>

            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-primary">
                ${result.toFixed(2)}
              </div>
              <div className="text-xs text-muted-foreground">
                {percent}% of ${number}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Key Information Cards */}
        <div className="space-y-3">
          {/* Original Amount */}
          <motion.div
            className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-4 border border-border"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                  <DollarSign className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Original Amount</div>
                  <div className="text-lg font-bold">${number}</div>
                </div>
              </div>
              <div className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                100%
              </div>
            </div>
          </motion.div>

          {/* Percentage Portion */}
          <motion.div
            className="bg-gradient-to-r from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/20 rounded-lg p-4 border border-primary/30"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{percent}% Portion</div>
                  <div className="text-lg font-bold text-primary">${result.toFixed(2)}</div>
                </div>
              </div>
              <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-medium">
                {percent}%
              </div>
            </div>
          </motion.div>

          {/* Remainder */}
          <motion.div
            className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center">
                  <Calculator className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Remainder</div>
                  <div className="text-lg font-bold text-amber-700 dark:text-amber-300">
                    ${remainder.toFixed(2)}
                  </div>
                </div>
              </div>
              <div className="text-xs bg-amber-200 dark:bg-amber-800 text-amber-700 dark:text-amber-300 px-2 py-1 rounded font-medium">
                {(100 - percent)}%
              </div>
            </div>
          </motion.div>

          {/* Formula */}
          <motion.div
            className="bg-muted/50 rounded-lg p-3 border border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Formula</div>
            <div className="font-mono text-sm font-medium">
              ({percent} ÷ 100) × ${number} = ${result.toFixed(2)}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
