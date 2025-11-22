'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PercentageBarChartProps {
  percent: number;
  number: number;
  result: number;
  className?: string;
}

export function PercentageBarChart({
  percent,
  number,
  result,
  className,
}: PercentageBarChartProps) {
  const remainder = number - result;
  const percentRemainder = 100 - percent;

  return (
    <div className={cn('w-full space-y-6', className)}>
      {/* Main Bar Chart */}
      <div className="space-y-3">
        <div className="text-sm font-medium text-muted-foreground">
          Percentage Breakdown
        </div>
        <div className="relative h-16 w-full overflow-hidden rounded-xl bg-secondary border-2 border-border">
          <div className="flex h-full">
            {/* Percent portion */}
            <motion.div
              className="relative flex items-center justify-center bg-gradient-to-r from-primary via-blue-500 to-blue-600 text-white font-semibold"
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {percent >= 10 && (
                <motion.span
                  className="text-sm px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {percent}%
                </motion.span>
              )}
            </motion.div>

            {/* Remainder portion */}
            <motion.div
              className="relative flex items-center justify-center bg-gradient-to-r from-slate-300 to-slate-400 text-slate-700 font-semibold"
              initial={{ width: 0 }}
              animate={{ width: `${percentRemainder}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              {percentRemainder >= 10 && (
                <motion.span
                  className="text-sm px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  {percentRemainder}%
                </motion.span>
              )}
            </motion.div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-gradient-to-r from-primary to-blue-600" />
            <span className="text-muted-foreground">
              <span className="font-semibold text-foreground">{percent}%</span> = ${result.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-gradient-to-r from-slate-300 to-slate-400" />
            <span className="text-muted-foreground">
              <span className="font-semibold text-foreground">{percentRemainder}%</span> = ${remainder.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Value Bars for Comparison */}
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{percent}% portion</span>
            <span className="font-semibold">${result.toFixed(2)}</span>
          </div>
          <div className="relative h-10 w-full overflow-hidden rounded-lg bg-secondary">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-end pr-3 text-white text-xs font-medium"
              initial={{ width: 0 }}
              animate={{ width: `${(result / number) * 100}%` }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            >
              {(result / number) * 100 >= 15 && `$${result.toFixed(2)}`}
            </motion.div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{percentRemainder}% portion</span>
            <span className="font-semibold">${remainder.toFixed(2)}</span>
          </div>
          <div className="relative h-10 w-full overflow-hidden rounded-lg bg-secondary">
            <motion.div
              className="h-full bg-gradient-to-r from-slate-300 to-slate-400 flex items-center justify-end pr-3 text-slate-700 text-xs font-medium"
              initial={{ width: 0 }}
              animate={{ width: `${(remainder / number) * 100}%` }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            >
              {(remainder / number) * 100 >= 15 && `$${remainder.toFixed(2)}`}
            </motion.div>
          </div>
        </div>

        <div className="pt-2 border-t border-border">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-muted-foreground">Total (100%)</span>
            <span className="text-foreground">${number.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
