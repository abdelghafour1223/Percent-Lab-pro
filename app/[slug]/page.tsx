import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ComparisonChart } from '@/components/percentage-chart';
import { explainPercentOf } from '@/lib/calculator';
import { parseSlug, getRelatedCalculations, generatePSEOPages, formatSlug } from '@/lib/pseo';
import { formatNumber } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  const pages = generatePSEOPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

// Check if a page should use US market features
function isUSMarketPage(percent: number, number: number): boolean {
  const usPages = [
    { percent: 30, number: 50 },
    { percent: 20, number: 150 },
    { percent: 40, number: 200 },
    { percent: 75, number: 200 },
    { percent: 30, number: 200 },
  ];

  return usPages.some(page => page.percent === percent && page.number === number);
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = parseSlug(slug);

  if (!data) {
    return {
      title: 'Page Not Found',
    };
  }

  const { percent, number } = data;
  const result = (percent / 100) * number;
  const useUSMarket = isUSMarketPage(percent, number);

  const titleText = useUSMarket
    ? `${percent}% of $${number}: Calculator [2025]`
    : `What is ${percent}% of ${number}? = ${formatNumber(result, 2)} | PercentLab`;

  return {
    title: titleText,
    description: `Calculate ${percent}% of ${number}. The answer is ${formatNumber(result, 2)}. Learn the formula, see step-by-step calculations, and explore real-world examples with our percentage calculator.`,
    alternates: {
      canonical: `https://percentlab.app/${slug}`,
    },
    keywords: [
      `${percent} percent of ${number}`,
      `${percent}% of ${number}`,
      `calculate ${percent} percent`,
      'percentage calculator',
      'percent of number',
      'step-by-step calculation',
    ],
    openGraph: {
      title: `What is ${percent}% of ${number}? Answer: ${formatNumber(result, 2)}`,
      description: `Calculate ${percent}% of ${number} with detailed explanations and examples. Free percentage calculator.`,
      type: 'article',
      url: `https://percentlab.app/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `What is ${percent}% of ${number}? Answer: ${formatNumber(result, 2)}`,
      description: `Calculate ${percent}% of ${number} with step-by-step explanations.`,
    },
  };
}

export default async function PSEOPage({ params }: PageProps) {
  const { slug } = await params;
  const data = parseSlug(slug);

  if (!data) {
    notFound();
  }

  const { percent, number } = data;
  const calculation = explainPercentOf(percent, number);
  const relatedPages = getRelatedCalculations(percent, number, 5);
  const useUSMarket = isUSMarketPage(percent, number);

  // JSON-LD structured data for HowTo
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Calculate ${percent}% of ${useUSMarket ? `$${number}` : number}`,
    description: `Step-by-step guide to calculate ${percent}% of ${useUSMarket ? `$${number}` : number}`,
    step: calculation.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step,
    })),
    totalTime: 'PT1M',
  };

  // FAQ Schema for US market pages
  const faqJsonLd = useUSMarket ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is ${percent}% of $${number}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${percent}% of $${number} equals $${calculation.result.toFixed(2)}. To calculate this, convert ${percent}% to a decimal (${(percent / 100).toFixed(4)}) and multiply by ${number}.`
        }
      },
      {
        '@type': 'Question',
        name: `How do I calculate ${percent}% of $${number}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `To calculate ${percent}% of $${number}, divide ${percent} by 100 to get ${(percent / 100).toFixed(4)}, then multiply by ${number}. The result is $${calculation.result.toFixed(2)}.`
        }
      },
      {
        '@type': 'Question',
        name: `How can I use this in real life?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: calculation.examples.join(' ')
        }
      }
    ]
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {useUSMarket && faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What is {percent}% of {useUSMarket ? `$${number}` : number}?
          </h1>
          <div className="text-6xl md:text-7xl font-bold text-primary my-6">
            {useUSMarket ? `$${formatNumber(calculation.result, 2)}` : formatNumber(calculation.result, 2)}
          </div>
          <p className="text-xl text-muted-foreground">
            Learn how to calculate {percent}% of {useUSMarket ? `$${number}` : number} with our step-by-step guide
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Answer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">
              {percent}% of {useUSMarket ? `$${number}` : number} equals <strong className="text-foreground">{useUSMarket ? `$${formatNumber(calculation.result, 2)}` : formatNumber(calculation.result, 2)}</strong>. To calculate this, we convert the percentage to a decimal ({percent} ÷ 100 = {(percent / 100).toFixed(4)}) and multiply it by {number}.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              {calculation.formula}
            </div>
          </CardContent>
        </Card>

        {/* Visual Representation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Visual Representation</CardTitle>
          </CardHeader>
          <CardContent>
            <ComparisonChart
              value1={calculation.result}
              value2={number - calculation.result}
              label1={`${percent}% (${useUSMarket ? `$${formatNumber(calculation.result, 2)}` : formatNumber(calculation.result, 2)})`}
              label2={`${100 - percent}% (${useUSMarket ? `$${formatNumber(number - calculation.result, 2)}` : formatNumber(number - calculation.result, 2)})`}
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              The chart shows how {useUSMarket ? `$${formatNumber(calculation.result, 2)}` : formatNumber(calculation.result, 2)} relates to the total {useUSMarket ? `$${number}` : number}
            </p>
          </CardContent>
        </Card>

        {/* Step by Step */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Step-by-Step Calculation</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {calculation.steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground flex-1 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Ad Slot */}
        <div className="ad-slot my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Real-Life Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Real-Life Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {calculation.examples.map((example, index) => (
                <div key={index} className="bg-accent/50 p-4 rounded-lg">
                  <p className="text-muted-foreground">{example}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How to Use Formula */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding the Formula</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The general formula for calculating what a percentage of a number equals is:
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-center">
              Result = (Percentage ÷ 100) × Number
            </div>
            <p className="text-muted-foreground">
              In this case, we're calculating {percent}% of {useUSMarket ? `$${number}` : number}:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>First, divide the percentage by 100: {percent} ÷ 100 = {(percent / 100).toFixed(4)}</li>
              <li>Then, multiply by the number: {(percent / 100).toFixed(4)} × {number} = {useUSMarket ? `$${formatNumber(calculation.result, 2)}` : formatNumber(calculation.result, 2)}</li>
            </ul>
            <p className="text-muted-foreground">
              This formula works for any percentage calculation. You can use our calculator above to try different values.
            </p>
          </CardContent>
        </Card>

        {/* Related Calculations */}
        {relatedPages.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Related Calculations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {relatedPages.map((page) => {
                  const result = (page.percent / 100) * page.number;
                  return (
                    <Link
                      key={page.slug}
                      href={`/${page.slug}`}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors group"
                      aria-label={`Calculate ${page.percent}% of ${page.number}`}
                    >
                      <div>
                        <p className="font-medium">
                          {page.percent}% of {page.number}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          = {formatNumber(result, 2)}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Suggested Guides */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Suggested Guides (Coming Soon)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/blog/percentage-basics"
                className="flex flex-col p-4 rounded-lg border hover:bg-accent transition-colors group"
                aria-label="Read guide on percentage basics"
              >
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Percentage Basics
                </h4>
                <p className="text-sm text-muted-foreground">
                  Master fundamental percentage calculations
                </p>
              </Link>
              <Link
                href="/blog/finance"
                className="flex flex-col p-4 rounded-lg border hover:bg-accent transition-colors group"
                aria-label="Read guide on finance and money percentages"
              >
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Finance & Money
                </h4>
                <p className="text-sm text-muted-foreground">
                  Learn financial percentage applications
                </p>
              </Link>
              <Link
                href="/blog/education"
                className="flex flex-col p-4 rounded-lg border hover:bg-accent transition-colors group"
                aria-label="Read guide on education and grades"
              >
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  Education & Grades
                </h4>
                <p className="text-sm text-muted-foreground">
                  Understand grade calculations
                </p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card>
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Need to Calculate Other Percentages?</h3>
            <p className="text-muted-foreground mb-6">
              Use our full-featured percentage calculator for any calculation with detailed explanations
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2"
              aria-label="Go to main percentage calculator"
            >
              {useUSMarket ? '💰 Calculate My Savings' : 'Go to Calculator'}
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
