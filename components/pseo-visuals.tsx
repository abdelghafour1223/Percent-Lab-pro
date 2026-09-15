'use client';

import dynamic from 'next/dynamic';

function ChartSkeleton() {
  return <div className="h-48 animate-pulse rounded-lg bg-muted" aria-hidden="true" />;
}

// Below-the-fold PSEO visualizations. Loaded client-side only so
// framer-motion stays out of the initial bundle (saves ~50 kB First
// Load JS on all 50 programmatic pages). Skeletons preserve layout
// stability (no CLS) while the chunks hydrate.
export const LazyPercentageBarChart = dynamic(
  () => import('@/components/percentage-bar-chart').then((m) => m.PercentageBarChart),
  { ssr: false, loading: ChartSkeleton }
);

export const LazyPercentageInfographic = dynamic(
  () => import('@/components/percentage-infographic').then((m) => m.PercentageInfographic),
  { ssr: false, loading: ChartSkeleton }
);
