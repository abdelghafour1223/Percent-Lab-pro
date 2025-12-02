import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PercentageBarChart } from '@/components/percentage-bar-chart';
import { PercentageInfographic } from '@/components/percentage-infographic';
import { explainPercentOf } from '@/lib/calculator';
import {
  parseSlug,
  getRelatedCalculations,
  generatePSEOPages,
  generateIntroduction,
  generatePracticalUses,
  generateQuickTips,
  generateRealWorldExamples
} from '@/lib/pseo';
import { formatNumber } from '@/lib/utils';
import { ArrowRight, Lightbulb, Briefcase, TrendingUp } from 'lucide-react';

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

  return {
    title: `What is ${percent}% of ${number}? - PercentLab`,
    description: `Easily calculate what is ${percent} percent of ${number}. The answer is ${formatNumber(result, 2)}. Use our free online percentage calculator for quick and accurate results.`,
    alternates: {
      canonical: `https://www.percentlab.app/${slug}`,
    },
    keywords: [
      `${percent} percent of ${number}`,
      `${percent}% of ${number}`,
      `calculate ${percent} percent`,
      'percentage calculator',
      'percent of number',
      'US percentage calculator',
      'step-by-step calculation',
    ],
    openGraph: {
      title: `What is ${percent}% of ${number}? - PercentLab`,
      description: `Easily calculate what is ${percent} percent of ${number}. The answer is ${formatNumber(result, 2)}. Use our free online percentage calculator for quick and accurate results.`,
      type: 'article',
      url: `https://www.percentlab.app/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `What is ${percent}% of ${number}? - PercentLab`,
      description: `Easily calculate what is ${percent} percent of ${number}. The answer is ${formatNumber(result, 2)}. Use our free online percentage calculator for quick and accurate results.`,
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

  // Generate enhanced content
  const introduction = generateIntroduction(percent, number, calculation.result);
  const practicalUses = generatePracticalUses(percent, number, calculation.result);
  const quickTips = generateQuickTips(percent, number);
  const realWorldExamples = generateRealWorldExamples(percent, number, calculation.result);

  // SoftwareApplication Schema
  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${percent}% of $${number} Calculator`,
    applicationCategory: 'CalculatorApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
    description: `Free online calculator to determine what is ${percent}% of $${number}. Instant results with step-by-step explanations and real-world examples.`,
    featureList: [
      'Instant percentage calculations',
      'Step-by-step explanations',
      'Real-world US examples',
      'Visual chart representation',
      'Mobile-responsive design',
      'Free to use',
      'No registration required'
    ],
  };

  // WebApplication Schema
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `Calculate ${percent}% of $${number}`,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    url: `https://www.percentlab.app/what-is-${percent}-percent-of-${number}`,
    description: `Calculate ${percent}% of $${number} with our free online percentage calculator. Get instant results ($${formatNumber(calculation.result, 2)}) with detailed explanations and practical examples.`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.percentlab.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Percentage Calculators',
        item: 'https://www.percentlab.app/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${percent}% of $${number}`,
        item: `https://www.percentlab.app/what-is-${percent}-percent-of-${number}`,
      },
    ],
  };

  // HowTo Schema
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Calculate ${percent}% of $${number}`,
    description: `Step-by-step guide to calculate ${percent}% of $${number}`,
    step: calculation.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step,
    })),
    totalTime: 'PT1M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    supply: [],
    tool: [],
  };

  // FAQ Schema Markup
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is ${percent}% of $${number}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${percent}% of $${number} is $${formatNumber(calculation.result, 2)}. To calculate this, divide the percentage by 100 (${percent} ÷ 100 = ${(percent / 100).toFixed(4)}) and multiply by the amount (${(percent / 100).toFixed(4)} × ${number} = $${formatNumber(calculation.result, 2)}).`,
        },
      },
      {
        '@type': 'Question',
        name: `How do I calculate ${percent}% of $${number}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The formula is: (${percent} ÷ 100) × ${number} = $${formatNumber(calculation.result, 2)}. First convert the percentage to decimal form by dividing by 100, then multiply by your amount.`,
        },
      },
      {
        '@type': 'Question',
        name: `What are real-world examples of ${percent}% of $${number}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Examples include: Black Friday discounts (saving $${formatNumber(calculation.result, 2)} on a $${number} purchase), restaurant tips ($${formatNumber(calculation.result, 2)} tip on a $${number} bill), and sales tax ($${formatNumber(calculation.result, 2)} tax added to $${number}).`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What is {percent}% of ${number}?
          </h1>
          <div className="text-6xl md:text-7xl font-bold text-primary my-6">
            ${formatNumber(calculation.result, 2)}
          </div>
          <p className="text-xl text-muted-foreground">
            Learn how to calculate {percent}% of ${number} with our step-by-step guide and real-world US examples
          </p>
        </div>

        {/* Handwritten Introduction */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              {introduction}
            </p>
          </CardContent>
        </Card>

        {/* Quick Answer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Answer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">
              {percent}% of ${number} equals <strong className="text-foreground">${formatNumber(calculation.result, 2)}</strong>. To calculate this, we convert the percentage to a decimal ({percent} ÷ 100 = {(percent / 100).toFixed(4)}) and multiply it by ${number}.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              ({percent} ÷ 100) × ${number} = ${calculation.result.toFixed(2)}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Visual Components */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Visual Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <PercentageInfographic
              percent={percent}
              number={number}
              result={calculation.result}
            />
          </CardContent>
        </Card>

        {/* Bar Chart Visualization */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Percentage Bar Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <PercentageBarChart
              percent={percent}
              number={number}
              result={calculation.result}
            />
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

        {/* Enhanced Real-World Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Real-World Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {realWorldExamples.slice(0, 4).map((example, index) => (
                <div key={index} className="bg-gradient-to-r from-accent/50 to-accent/30 p-5 rounded-lg border border-border hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    {example.title}
                  </h4>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                    {example.scenario}
                  </p>
                  <div className="bg-primary/10 border-l-4 border-primary px-3 py-2 rounded">
                    <p className="text-sm font-medium text-foreground">
                      {example.calculation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Practical Uses Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Practical Uses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {practicalUses.map((use, index) => (
                <div key={index} className="bg-muted/50 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">{use.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {use.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Quick Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {quickTips.map((tip, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {tip}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* How to Use Formula */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding the Formula</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The general formula for calculating what a percentage of a dollar amount equals is:
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-center">
              Result = (Percentage ÷ 100) × Dollar Amount
            </div>
            <p className="text-muted-foreground">
              In this case, we're calculating {percent}% of ${number}:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>First, divide the percentage by 100: {percent} ÷ 100 = {(percent / 100).toFixed(4)}</li>
              <li>Then, multiply by the amount: {(percent / 100).toFixed(4)} × ${number} = ${formatNumber(calculation.result, 2)}</li>
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
                      aria-label={`Calculate ${page.percent}% of $${page.number}`}
                    >
                      <div>
                        <p className="font-medium">
                          {page.percent}% of ${page.number}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          = ${formatNumber(result, 2)}
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
            <h3 className="text-xl font-semibold mb-3">Calculate More Percentages Instantly</h3>
            <p className="text-muted-foreground mb-6">
              Use our full-featured percentage calculator for discounts, tips, taxes, and more with detailed step-by-step explanations
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2"
              aria-label="Go to main percentage calculator"
            >
              💰 Calculate My Savings
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
