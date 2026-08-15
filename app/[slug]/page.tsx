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
  generateRealWorldExamples,
  getContextualCTA
} from '@/lib/pseo';
import { formatNumber } from '@/lib/utils';
import { ArrowRight, Lightbulb, Briefcase, TrendingUp, HelpCircle } from 'lucide-react';

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
    title: `What is ${percent}% of ${number}?`,
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
      title: `What is ${percent}% of ${number}?`,
      description: `Easily calculate what is ${percent} percent of ${number}. The answer is ${formatNumber(result, 2)}. Use our free online percentage calculator for quick and accurate results.`,
      type: 'article',
      url: `https://www.percentlab.app/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `What is ${percent}% of ${number}?`,
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
  const ctaData = getContextualCTA(percent);

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

  // Generate FAQ items with strict 100% JSON-LD and visibility alignment
  const decimalValue = (percent / 100).toFixed(4).replace(/\.?0+$/, '');
  const faqItems: Array<{ question: string; answer: string }> = [];

  if (percent === 100) {
    faqItems.push({
      question: `What is 100% of $${number}?`,
      answer: `100% of $${number} is $${formatNumber(calculation.result, 2)}. In mathematics and personal finance, 100% represents the complete whole (1.00 as a decimal multiplier).`,
    });
    faqItems.push({
      question: `What is 100% written as a decimal?`,
      answer: `100% as a decimal is 1.0 (or 1). To convert any percentage to a decimal, divide by 100 (100 ÷ 100 = 1).`,
    });
  } else {
    faqItems.push({
      question: `How do I calculate ${percent}% of $${number} in my head?`,
      answer: `To calculate ${percent}% of $${number} mentally, convert ${percent}% to a decimal (${decimalValue}) and multiply by ${number}, which gives $${formatNumber(calculation.result, 2)}.`,
    });
    faqItems.push({
      question: `What is ${percent}% as a decimal?`,
      answer: `${percent}% as a decimal is ${decimalValue}. You find this by dividing the percentage by 100 (${percent} ÷ 100 = ${decimalValue}).`,
    });
    if (percent > 0 && percent < 100) {
      faqItems.push({
        question: `How much is left after subtracting ${percent}% from $${number}?`,
        answer: `After subtracting ${percent}% ($${formatNumber(calculation.result, 2)}) from $${number}, you have $${formatNumber(number - calculation.result, 2)} remaining (representing ${100 - percent}% of the original amount).`,
      });
    }
  }

  // FAQ Schema Markup (1:1 identical to visible FAQ section)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
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

        {/* Frequently Asked Questions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-muted/40 p-4 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2 text-base">
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
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

              <div className="mt-4 pt-3 border-t text-center">
                <Link
                  href="/calculators/basic-percent/common-percentage-calculations"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  aria-label="Browse all common percentage calculations directory"
                >
                  View all 50 common percentage calculations <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
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
            <h3 className="text-xl font-semibold mb-3">{ctaData.title}</h3>
            <p className="text-muted-foreground mb-6">
              Use our full-featured percentage calculator for discounts, tips, taxes, and more with detailed step-by-step explanations
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2"
              aria-label="Go to main percentage calculator"
            >
              {ctaData.button}
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
