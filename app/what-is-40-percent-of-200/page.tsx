import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ComparisonChart } from '@/components/percentage-chart';
import { ArrowRight } from 'lucide-react';

// Metadata for SEO
export const metadata: Metadata = {
  title: '40% of $200: Calculator [2025] | PercentLab',
  description: 'Calculate 40% of $200. The answer is $80.00. Learn the formula, see step-by-step calculations, and explore real-world US examples with our percentage calculator.',
  alternates: {
    canonical: 'https://www.percentlab.app/what-is-40-percent-of-200',
  },
  keywords: [
    '40 percent of 200',
    '40% of $200',
    'calculate 40 percent',
    'percentage calculator',
    'percent of number',
    'step-by-step calculation',
    'US calculator',
    'dollar percentage',
  ],
  openGraph: {
    title: '40% of $200: Calculator [2025]',
    description: 'Calculate 40% of $200 with detailed explanations and US examples. Free percentage calculator.',
    type: 'article',
    url: 'https://www.percentlab.app/what-is-40-percent-of-200',
  },
  twitter: {
    card: 'summary_large_image',
    title: '40% of $200: Calculator [2025]',
    description: 'Calculate 40% of $200 with step-by-step explanations.',
  },
};

export default function Page() {
  const percent = 40;
  const number = 200;
  const result = 80;

  // JSON-LD structured data with FAQ
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        name: 'How to Calculate 40% of $200',
        description: 'Step-by-step guide to calculate 40% of $200',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Step 1',
            text: 'Convert the percentage to a decimal by dividing by 100: 40 ÷ 100 = 0.4000',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Step 2',
            text: 'Multiply the decimal by the number: 0.4000 × $200 = $80.00',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Step 3',
            text: 'Therefore, 40% of $200 is $80.00',
          },
        ],
        totalTime: 'PT1M',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is 40% of $200?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '40% of $200 equals $80.00. To calculate this, convert 40% to a decimal (0.40) and multiply by $200: 0.40 × $200 = $80.00.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I calculate 40% of $200?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'To calculate 40% of $200: (1) Divide 40 by 100 to get 0.40, (2) Multiply 0.40 by $200 to get $80.00. The formula is: (40 ÷ 100) × $200 = $80.00.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are common uses for calculating 40% of $200?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Common uses include: Black Friday discounts (40% off a $200 item saves $80), calculating commissions or bonuses, and determining tax withholdings or retirement contributions.',
            },
          },
        ],
      },
    ],
  };

  const relatedPages = [
    { percent: 30, number: 200, slug: 'what-is-30-percent-of-200' },
    { percent: 50, number: 200, slug: 'what-is-50-percent-of-200' },
    { percent: 40, number: 100, slug: 'what-is-40-percent-of-100' },
    { percent: 40, number: 300, slug: 'what-is-40-percent-of-300' },
    { percent: 25, number: 200, slug: 'what-is-25-percent-of-200' },
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
            What is 40% of $200?
          </h1>
          <div className="text-6xl md:text-7xl font-bold text-primary my-6">
            $80.00
          </div>
          <p className="text-xl text-muted-foreground">
            Learn how to calculate 40% of $200 with our step-by-step guide
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Answer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">
              40% of $200 equals <strong className="text-foreground">$80.00</strong>. To calculate this, we convert the percentage to a decimal (40 ÷ 100 = 0.4000) and multiply it by $200.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              (40 ÷ 100) × $200 = $80.00
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
              label1={`40% ($80.00)`}
              label2={`60% ($120.00)`}
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              The chart shows how $80.00 relates to the total $200
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
                  Convert the percentage to a decimal by dividing by 100: 40 ÷ 100 = 0.4000
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  Multiply the decimal by the dollar amount: 0.4000 × $200 = $80.00
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  Therefore, 40% of $200 is $80.00
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
                  <strong>Black Friday Sale:</strong> If a $200 item has a 40% Black Friday discount, you save $80.00, paying only $120.00 for your purchase.
                </p>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Commission Example:</strong> A 40% commission on a $200 sale earns you $80.00 in earnings.
                </p>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Tax Withholding:</strong> If 40% of your $200 paycheck goes to taxes and deductions, that's $80.00 withheld, leaving you with $120.00 take-home pay.
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
              <h3 className="font-semibold text-lg mb-2">What is 40% of $200?</h3>
              <p className="text-muted-foreground">
                40% of $200 equals $80.00. To calculate this, convert 40% to a decimal (0.40) and multiply by $200: 0.40 × $200 = $80.00.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How do I calculate 40% of $200?</h3>
              <p className="text-muted-foreground">
                To calculate 40% of $200: (1) Divide 40 by 100 to get 0.40, (2) Multiply 0.40 by $200 to get $80.00. The formula is: (40 ÷ 100) × $200 = $80.00.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What are common uses for calculating 40% of $200?</h3>
              <p className="text-muted-foreground">
                Common uses include: Black Friday discounts (40% off a $200 item saves $80), calculating commissions or bonuses, and determining tax withholdings or retirement contributions.
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
              In this case, we're calculating 40% of $200:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>First, divide the percentage by 100: 40 ÷ 100 = 0.4000</li>
              <li>Then, multiply by the dollar amount: 0.4000 × $200 = $80.00</li>
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
