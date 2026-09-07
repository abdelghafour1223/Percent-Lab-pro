import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CalculatorForm } from '@/components/calculator-form';
import { getCalculatorBySlug } from '@/data/calculators';
import { WIDGETS, SITE_URL } from '@/data/widgets';

interface EmbedPageProps {
  params: Promise<{ category: string; slug: string }>;
}

// Closed set: only shipped widgets exist. Anything else 404s.
export const dynamicParams = false;

export async function generateStaticParams() {
  return WIDGETS.map((w) => ({ category: w.category, slug: w.slug }));
}

export async function generateMetadata({ params }: EmbedPageProps): Promise<Metadata> {
  const { category: categoryId, slug } = await params;
  const calculator = getCalculatorBySlug(categoryId, slug);

  if (!calculator) {
    return { title: 'Widget Not Found', robots: { index: false, follow: false } };
  }

  return {
    // Utility surface, not a search destination: never indexed, but equity
    // flows out through the followed credit link below.
    title: `${calculator.title} — Embed Widget | PercentLab`,
    robots: { index: false, follow: true },
  };
}

export default async function EmbedPage({ params }: EmbedPageProps) {
  const { category: categoryId, slug } = await params;
  const calculator = getCalculatorBySlug(categoryId, slug);
  const widget = WIDGETS.find((w) => w.category === categoryId && w.slug === slug);

  if (!calculator || !widget) {
    notFound();
  }

  const canonical = `${SITE_URL}/calculators/${categoryId}/${slug}`;

  return (
    <div className="mx-auto w-full max-w-[480px] px-4 py-5">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold">{calculator.title}</p>
        <Link
          href="/"
          target="_blank"
          rel="noopener"
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
          aria-label="PercentLab home"
        >
          PercentLab
        </Link>
      </div>
      <CalculatorForm calculator={calculator} categoryId={categoryId} />
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Powered by{' '}
        <Link
          href={canonical}
          target="_blank"
          rel="noopener"
          className="font-medium text-primary hover:underline"
        >
          PercentLab {calculator.title}
        </Link>
      </p>
    </div>
  );
}
