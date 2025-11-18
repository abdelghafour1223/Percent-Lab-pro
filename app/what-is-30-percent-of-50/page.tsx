import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ComparisonChart } from '@/components/percentage-chart';
import { ArrowRight } from 'lucide-react';

// Metadata for SEO
export const metadata: Metadata = {
  title: '30% of $50: Calculator [2025] | PercentLab',
  description: 'Calculate 30% of $50. The answer is $15.00. Learn the formula, see step-by-step calculations, and explore real-world US examples with our percentage calculator.',
  alternates: {
    canonical: 'https://www.percentlab.app/what-is-30-percent-of-50',
  },
  keywords: [
    '30 percent of 50',
    '30% of $50',
    'calculate 30 percent',
    'percentage calculator',
    'percent of number',
    'step-by-step calculation',
    'US calculator',
    'dollar percentage',
  ],
  openGraph: {
    title: '30% of $50: Calculator [2025]',
    description: 'Calculate 30% of $50 with detailed explanations and US examples. Free percentage calculator.',
    type: 'article',
    url: 'https://www.percentlab.app/what-is-30-percent-of-50',
  },
  twitter: {
    card: 'summary_large_image',
    title: '30% of $50: Calculator [2025]',
    description: 'Calculate 30% of $50 with step-by-step explanations.',
  },
};

export default function Page() {
  const percent = 30;
  const number = 50;
  const result = 15;

  // JSON-LD structured data with FAQ
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        name: 'How to Calculate 30% of $50',
        description: 'Step-by-step guide to calculate 30% of $50',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Step 1',
            text: 'Convert the percentage to a decimal by dividing by 100: 30 ÷ 100 = 0.3000',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Step 2',
            text: 'Multiply the decimal by the number: 0.3000 × $50 = $15.00',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Step 3',
            text: 'Therefore, 30% of $50 is $15.00',
          },
        ],
        totalTime: 'PT1M',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is 30% of $50?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '30% of $50 equals $15.00. To calculate this, convert 30% to a decimal (0.30) and multiply by $50: 0.30 × $50 = $15.00.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I calculate 30% of $50?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'To calculate 30% of $50: (1) Divide 30 by 100 to get 0.30, (2) Multiply 0.30 by $50 to get $15.00. The formula is: (30 ÷ 100) × $50 = $15.00.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are common uses for calculating 30% of $50?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Common uses include: Black Friday discounts (30% off a $50 item saves $15), restaurant tips (30% tip on $50 is $15), and sales tax calculations in some US regions.',
            },
          },
        ],
      },
    ],
  };

  const relatedPages = [
    { percent: 20, number: 50, slug: 'what-is-20-percent-of-50' },
    { percent: 40, number: 50, slug: 'what-is-40-percent-of-50' },
    { percent: 30, number: 100, slug: 'what-is-30-percent-of-100' },
    { percent: 30, number: 200, slug: 'what-is-30-percent-of-200' },
    { percent: 25, number: 50, slug: 'what-is-25-percent-of-50' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What is 30% of $50?
          </h1>
          <div className="text-6xl md:text-7xl font-bold text-primary my-6">
            $15.00
          </div>
          <p className="text-xl text-muted-foreground">
            Learn how to calculate 30% of $50 with our step-by-step guide
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Answer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">
              30% of $50 equals <strong className="text-foreground">$15.00</strong>. To calculate this, we convert the percentage to a decimal (30 ÷ 100 = 0.3000) and multiply it by $50.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              (30 ÷ 100) × $50 = $15.00
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
              value1={result}
              value2={number - result}
              label1={`30% ($15.00)`}
              label2={`70% ($35.00)`}
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              The chart shows how $15.00 relates to the total $50
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
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  Convert the percentage to a decimal by dividing by 100: 30 ÷ 100 = 0.3000
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  Multiply the decimal by the dollar amount: 0.3000 × $50 = $15.00
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  Therefore, 30% of $50 is $15.00
                </span>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Ad Slot */}
        <div className="ad-slot my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Real-Life US Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Real-Life US Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Black Friday Sale:</strong> If a $50 item has a 30% Black Friday discount, you save $15.00, paying only $35.00 for your purchase.
                </p>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Restaurant Tip:</strong> A generous 30% tip on a $50 restaurant bill adds $15.00 to your total, making it $65.00.
                </p>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Sales Tax:</strong> In areas with 30% combined tax rates (though rare in the US), a $50 purchase would include $15.00 in taxes, totaling $65.00.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">What is 30% of $50?</h3>
              <p className="text-muted-foreground">
                30% of $50 equals $15.00. To calculate this, convert 30% to a decimal (0.30) and multiply by $50: 0.30 × $50 = $15.00.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How do I calculate 30% of $50?</h3>
              <p className="text-muted-foreground">
                To calculate 30% of $50: (1) Divide 30 by 100 to get 0.30, (2) Multiply 0.30 by $50 to get $15.00. The formula is: (30 ÷ 100) × $50 = $15.00.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What are common uses for calculating 30% of $50?</h3>
              <p className="text-muted-foreground">
                Common uses include: Black Friday discounts (30% off a $50 item saves $15), restaurant tips (30% tip on $50 is $15), and sales tax calculations in some US regions.
              </p>
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
              The general formula for calculating what a percentage of a dollar amount equals is:
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-center">
              Result = (Percentage ÷ 100) × Dollar Amount
            </div>
            <p className="text-muted-foreground">
              In this case, we're calculating 30% of $50:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>First, divide the percentage by 100: 30 ÷ 100 = 0.3000</li>
              <li>Then, multiply by the dollar amount: 0.3000 × $50 = $15.00</li>
            </ul>
            <p className="text-muted-foreground">
              This formula works for any percentage calculation with US dollars. You can use our calculator to try different values.
            </p>
          </CardContent>
        </Card>

        {/* Related Calculations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Related Calculations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {relatedPages.map((page) => {
                const pageResult = (page.percent / 100) * page.number;
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
                        = ${pageResult.toFixed(2)}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>

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
              💰 Calculate My Savings
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
