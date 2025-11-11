'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PercentageChartProps {
  percentage: number;
  label?: string;
  className?: string;
}

export function PercentageChart({
  percentage,
  label,
  className,
}: PercentageChartProps) {
  // Clamp percentage between 0 and 100 for display
  const displayPercentage = Math.max(0, Math.min(100, Math.abs(percentage)));
  const isNegative = percentage < 0;

  return (
    <div className={cn('w-full space-y-2', className)}>
      {label && (
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{label}</span>
          <span className="font-medium text-foreground">
            {isNegative ? '-' : ''}
            {displayPercentage.toFixed(1)}%
          </span>
        </div>
      )}
      <div className="relative h-8 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          className={cn(
            'h-full rounded-full',
            isNegative
              ? 'bg-gradient-to-r from-red-500 to-red-600'
              : 'bg-gradient-to-r from-primary to-blue-600'
          )}
          initial={{ width: 0 }}
          animate={{ width: `${displayPercentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

interface ComparisonChartProps {
  value1: number;
  value2: number;
  label1: string;
  label2: string;
  className?: string;
}

export function ComparisonChart({
  value1,
  value2,
  label1,
  label2,
  className,
}: ComparisonChartProps) {
  const total = Math.abs(value1) + Math.abs(value2);
  const percentage1 = total > 0 ? (Math.abs(value1) / total) * 100 : 50;
  const percentage2 = total > 0 ? (Math.abs(value2) / total) * 100 : 50;

  return (
    <div className={cn('w-full space-y-2', className)}>
      <div className="flex h-10 w-full overflow-hidden rounded-lg bg-secondary">
        <motion.div
          className="flex items-center justify-center bg-primary text-xs font-medium text-primary-foreground"
          initial={{ width: 0 }}
          animate={{ width: `${percentage1}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {percentage1 > 15 && (
            <span className="px-2 truncate">{Math.abs(value1).toFixed(0)}</span>
          )}
        </motion.div>
        <motion.div
          className="flex items-center justify-center bg-blue-600 text-xs font-medium text-white"
          initial={{ width: 0 }}
          animate={{ width: `${percentage2}%` }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          {percentage2 > 15 && (
            <span className="px-2 truncate">{Math.abs(value2).toFixed(0)}</span>
          )}
        </motion.div>
      </div>
      <div className="flex justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-primary" />
          <span className="text-muted-foreground">{label1}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-blue-600" />
          <span className="text-muted-foreground">{label2}</span>
        </div>
      </div>
    </div>
  );
}
