import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ComparisonChart } from '@/components/percentage-chart';
import { ArrowRight } from 'lucide-react';

// Metadata for SEO
export const metadata: Metadata = {
  title: '75% of $200: Calculator [2025] | PercentLab',
  description: 'Calculate 75% of $200. The answer is $150.00. Learn the formula, see step-by-step calculations, and explore real-world US examples with our percentage calculator.',
  alternates: {
    canonical: 'https://www.percentlab.app/what-is-75-percent-of-200',
  },
  keywords: [
    '75 percent of 200',
    '75% of $200',
    'calculate 75 percent',
    'percentage calculator',
    'percent of number',
    'step-by-step calculation',
    'US calculator',
    'dollar percentage',
  ],
  openGraph: {
    title: '75% of $200: Calculator [2025]',
    description: 'Calculate 75% of $200 with detailed explanations and US examples. Free percentage calculator.',
    type: 'article',
    url: 'https://www.percentlab.app/what-is-75-percent-of-200',
  },
  twitter: {
    card: 'summary_large_image',
    title: '75% of $200: Calculator [2025]',
    description: 'Calculate 75% of $200 with step-by-step explanations.',
  },
};

export default function Page() {
  const percent = 75;
  const number = 200;
  const result = 150;

  // JSON-LD structured data with FAQ
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        name: 'How to Calculate 75% of $200',
        description: 'Step-by-step guide to calculate 75% of $200',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Step 1',
            text: 'Convert the percentage to a decimal by dividing by 100: 75 ÷ 100 = 0.7500',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Step 2',
            text: 'Multiply the decimal by the number: 0.7500 × $200 = $150.00',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Step 3',
            text: 'Therefore, 75% of $200 is $150.00',
          },
        ],
        totalTime: 'PT1M',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is 75% of $200?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '75% of $200 equals $150.00. To calculate this, convert 75% to a decimal (0.75) and multiply by $200: 0.75 × $200 = $150.00.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I calculate 75% of $200?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'To calculate 75% of $200: (1) Divide 75 by 100 to get 0.75, (2) Multiply 0.75 by $200 to get $150.00. The formula is: (75 ÷ 100) × $200 = $150.00.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are common uses for calculating 75% of $200?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Common uses include: Calculating completion rates (75% of $200 budget spent is $150), determining majority shares, and calculating large tips or gratuities.',
            },
          },
        ],
      },
    ],
  };

  const relatedPages = [
    { percent: 50, number: 200, slug: 'what-is-50-percent-of-200' },
    { percent: 80, number: 200, slug: 'what-is-80-percent-of-200' },
    { percent: 75, number: 100, slug: 'what-is-75-percent-of-100' },
    { percent: 75, number: 300, slug: 'what-is-75-percent-of-300' },
    { percent: 70, number: 200, slug: 'what-is-70-percent-of-200' },
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
            What is 75% of $200?
          </h1>
          <div className="text-6xl md:text-7xl font-bold text-primary my-6">
            $150.00
          </div>
          <p className="text-xl text-muted-foreground">
            Learn how to calculate 75% of $200 with our step-by-step guide
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Answer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">
              75% of $200 equals <strong className="text-foreground">$150.00</strong>. To calculate this, we convert the percentage to a decimal (75 ÷ 100 = 0.7500) and multiply it by $200.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              (75 ÷ 100) × $200 = $150.00
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
              label1={`75% ($150.00)`}
              label2={`25% ($50.00)`}
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              The chart shows how $150.00 relates to the total $200
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
                  Convert the percentage to a decimal by dividing by 100: 75 ÷ 100 = 0.7500
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  Multiply the decimal by the dollar amount: 0.7500 × $200 = $150.00
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  Therefore, 75% of $200 is $150.00
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
                  <strong>Budget Spending:</strong> If you've spent 75% of your $200 weekly budget, you've used $150.00, leaving $50.00 for the rest of the week.
                </p>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Exceptional Tip:</strong> A generous 75% tip on a $200 restaurant bill (perhaps for exceptional service or large group) adds $150.00 to your total, making it $350.00.
                </p>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Black Friday Savings:</strong> If a $200 item originally cost $800 and is now 75% off, you save $150 on the current price, paying only $50.00.
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
              <h3 className="font-semibold text-lg mb-2">What is 75% of $200?</h3>
              <p className="text-muted-foreground">
                75% of $200 equals $150.00. To calculate this, convert 75% to a decimal (0.75) and multiply by $200: 0.75 × $200 = $150.00.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How do I calculate 75% of $200?</h3>
              <p className="text-muted-foreground">
                To calculate 75% of $200: (1) Divide 75 by 100 to get 0.75, (2) Multiply 0.75 by $200 to get $150.00. The formula is: (75 ÷ 100) × $200 = $150.00.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What are common uses for calculating 75% of $200?</h3>
              <p className="text-muted-foreground">
                Common uses include: Calculating completion rates (75% of $200 budget spent is $150), determining majority shares, and calculating large tips or gratuities.
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
              In this case, we're calculating 75% of $200:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>First, divide the percentage by 100: 75 ÷ 100 = 0.7500</li>
              <li>Then, multiply by the dollar amount: 0.7500 × $200 = $150.00</li>
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
