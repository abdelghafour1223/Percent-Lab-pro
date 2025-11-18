import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ComparisonChart } from '@/components/percentage-chart';
import { ArrowRight, Zap, Tag, Calculator } from 'lucide-react';
import { CountdownTimer } from '@/components/black-friday/countdown-timer';
import { DiscountCalculator } from '@/components/black-friday/discount-calculator';

// Metadata for SEO
export const metadata: Metadata = {
  title: '10% Off $75 Calculator [Instant Answer] | PercentLab',
  description: '10% off $75 equals $67.50. Quick calculation guide with real examples for restaurant bills, clothing, and accessories. Free calculator included.',
  alternates: {
    canonical: 'https://www.percentlab.app/10-percent-off-75-dollars',
  },
  keywords: [
    '10% off 75',
    '10 percent off $75',
    '$75 with 10% discount',
    'how much is 10% off 75 dollars',
    '10 off 75',
    'restaurant discount',
    'clothing discount calculator',
  ],
  openGraph: {
    title: '10% Off $75 Calculator [Instant Answer]',
    description: '10% off $75 = $67.50. See examples and calculate instantly.',
    type: 'article',
    url: 'https://www.percentlab.app/10-percent-off-75-dollars',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10% Off $75 Calculator',
    description: 'Quick answer: 10% off $75 equals $67.50. Free calculator.',
  },
};

export default function Page() {
  const percent = 10;
  const originalPrice = 75;
  const savings = 7.5;
  const finalPrice = 67.5;

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        name: 'How to Calculate 10% Off $75',
        description: 'Step-by-step calculation for 10% discount on $75',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Step 1',
            text: 'Convert 10% to decimal: 10 ÷ 100 = 0.10',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Step 2',
            text: 'Calculate discount: $75 × 0.10 = $7.50',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Step 3',
            text: 'Subtract from original: $75 - $7.50 = $67.50',
          },
        ],
        totalTime: 'PT30S',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is 10% off $75?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '10% off $75 equals $67.50. You save $7.50 and pay $67.50. The calculation is: $75 × 0.10 = $7.50 discount, then $75 - $7.50 = $67.50 final price.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much do you save with 10% off $75?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You save $7.50 with 10% off $75. This is calculated by multiplying $75 by 0.10, which equals $7.50.',
            },
          },
          {
            '@type': 'Question',
            name: 'What costs around $75 in shopping?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Common $75 purchases include: restaurant bills for 2 people, casual shoes, jeans, small electronics, accessories, video games, and some sporting goods.',
            },
          },
        ],
      },
    ],
  };

  const relatedPages = [
    { title: '25% Off $100', slug: '25-percent-off-100-dollars' },
    { title: '20% Off Black Friday Calculator', slug: 'black-friday-calculator-20-off' },
    { title: '30% Discount Calculator', slug: '30-percent-discount-calculator' },
    { title: 'Black Friday 2025 Savings', slug: 'black-friday-2025-savings-calculator' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
        {/* Black Friday Banner */}
        <div className="bg-gradient-to-r from-black via-red-600 to-black dark:from-red-900 dark:via-yellow-900 dark:to-black text-white p-3 sm:p-4 rounded-lg mb-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
            <span className="font-bold text-base sm:text-lg">BLACK FRIDAY 2025</span>
            <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-sm mt-1">Quick calculator for $75 purchases!</p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            10% Off $75 Calculator
          </h1>
          <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-green-700 my-6">
            $67.50
          </div>
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-3 rounded-lg text-xl font-bold mb-4">
            <Calculator className="inline h-5 w-5 mr-2" />
            You Save $7.50
          </div>
          <p className="text-xl text-muted-foreground">
            Instant answer for restaurant bills, clothing & accessories
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-8 border-2 border-green-500">
          <CardHeader className="bg-green-50">
            <CardTitle>Quick Answer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">
              <strong className="text-2xl text-green-700">10% off $75 = $67.50</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              When something costs $75 and has a 10% discount, you save $7.50 and pay $67.50.
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              $75 × 0.10 = $7.50 discount → $75 - $7.50 = $67.50 final price
            </div>
          </CardContent>
        </Card>

        {/* Interactive Calculator */}
        <DiscountCalculator
          defaultPrice="75"
          discountPercent={10}
          title="10% Off Calculator (Try Different Amounts)"
        />

        {/* Visual Representation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Visual Breakdown: $75 with 10% Off</CardTitle>
          </CardHeader>
          <CardContent>
            <ComparisonChart
              value1={savings}
              value2={finalPrice}
              label1={`You Save ($${savings.toFixed(2)})`}
              label2={`You Pay ($${finalPrice.toFixed(2)})`}
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              10% of $75 is $7.50, leaving you to pay $67.50
            </p>
          </CardContent>
        </Card>

        {/* Ad Slot */}
        <div className="ad-slot my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Real Shopping Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-yellow-500" />
              Common $75 Shopping Scenarios (10% Off)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* Dining */}
              <h3 className="font-bold text-lg mt-4 mb-3 text-red-600">🍽️ Restaurants & Dining</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-700">
                <p className="font-semibold">Dinner for Two</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Bill <span className="line-through">$75</span> • 10% off (coupon) = <strong className="text-red-600">Save $7.50</strong> • Pay <strong className="text-green-700">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-700">
                <p className="font-semibold">Family Brunch</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Total <span className="line-through">$75</span> • 10% off (early bird) = <strong className="text-red-600">Save $7.50</strong> • Pay <strong className="text-green-700">$67.50</strong>
                </p>
              </div>

              {/* Fashion */}
              <h3 className="font-bold text-lg mt-6 mb-3 text-red-600">👕 Clothing & Shoes</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-700">
                <p className="font-semibold">Casual Sneakers</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600">Save $7.50</strong> • Pay <strong className="text-green-700">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-700">
                <p className="font-semibold">Designer T-Shirt</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600">Save $7.50</strong> • Pay <strong className="text-green-700">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-700">
                <p className="font-semibold">Summer Dress</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600">Save $7.50</strong> • Pay <strong className="text-green-700">$67.50</strong>
                </p>
              </div>

              {/* Electronics */}
              <h3 className="font-bold text-lg mt-6 mb-3 text-red-600">🎮 Electronics & Gaming</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-black dark:border-gray-600">
                <p className="font-semibold">Video Game (New Release)</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600">Save $7.50</strong> • Pay <strong className="text-green-700">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-black dark:border-gray-600">
                <p className="font-semibold">Wireless Mouse + Keyboard</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600">Save $7.50</strong> • Pay <strong className="text-green-700">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-black dark:border-gray-600">
                <p className="font-semibold">Phone Case + Screen Protector Bundle</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600">Save $7.50</strong> • Pay <strong className="text-green-700">$67.50</strong>
                </p>
              </div>

              {/* Accessories */}
              <h3 className="font-bold text-lg mt-6 mb-3 text-red-600">👜 Accessories</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-green-600 dark:border-green-700">
                <p className="font-semibold">Leather Wallet</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600">Save $7.50</strong> • Pay <strong className="text-green-700">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-green-600 dark:border-green-700">
                <p className="font-semibold">Sunglasses</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600">Save $7.50</strong> • Pay <strong className="text-green-700">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-green-600 dark:border-green-700">
                <p className="font-semibold">Watch (Casual)</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600">Save $7.50</strong> • Pay <strong className="text-green-700">$67.50</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Step-by-Step: How to Calculate 10% Off $75</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  1
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Convert percentage to decimal:</strong> 10% = 10 ÷ 100 = 0.10
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  2
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Calculate discount amount:</strong> $75 × 0.10 = $7.50
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  3
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Subtract from original price:</strong> $75 - $7.50 = $67.50
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  ✓
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Result:</strong> You save $7.50 and pay $67.50
                </span>
              </li>
            </ol>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
              <p className="font-semibold mb-2">Quick Mental Math Trick:</p>
              <p className="text-sm text-muted-foreground">
                To find 10% of any number, just move the decimal point one place to the left.
                $75.00 becomes $7.50 for the discount. Then subtract: $75 - $7.50 = $67.50!
              </p>
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
              <h3 className="font-semibold text-lg mb-2">What is 10% off $75?</h3>
              <p className="text-muted-foreground">
                10% off $75 equals $67.50. You save $7.50 and pay $67.50. The calculation is: $75 × 0.10 = $7.50 discount, then $75 - $7.50 = $67.50 final price.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How much do you save with 10% off $75?</h3>
              <p className="text-muted-foreground">
                You save $7.50 with 10% off $75. This is calculated by multiplying $75 by 0.10, which equals $7.50.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What costs around $75 in shopping?</h3>
              <p className="text-muted-foreground">
                Common $75 purchases include: restaurant bills for 2 people, casual sneakers, jeans, small electronics, video games, accessories like wallets or sunglasses, and some sporting goods.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Is 10% off a good discount?</h3>
              <p className="text-muted-foreground">
                10% off is a modest discount - good for everyday purchases or when combined with other offers. For a $75 item, you save $7.50. Look for deeper discounts (20-30% off) during major sales like Black Friday for bigger savings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How do I calculate 10% off in my head?</h3>
              <p className="text-muted-foreground">
                Easy trick: 10% is the same as dividing by 10 (or moving the decimal left one place). For $75, move the decimal: $75.00 → $7.50. That&apos;s your discount! Subtract it: $75 - $7.50 = $67.50.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">When should I use a 10% off coupon?</h3>
              <p className="text-muted-foreground">
                Use 10% off coupons for regular purchases when no better deals are available. Stack them with sales, cashback apps, or credit card rewards. For restaurants, 10% off is common for first-time customers or early bird specials.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What&apos;s 10% off other amounts?</h3>
              <p className="text-muted-foreground">
                Quick reference: 10% off $50 = $45 (save $5) • 10% off $100 = $90 (save $10) • 10% off $150 = $135 (save $15). Notice the pattern: just divide by 10 to get your savings!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Related Calculators */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Related Discount Calculators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {relatedPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="flex items-center justify-between p-4 rounded-lg border-2 border-yellow-400 dark:border-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors group"
                  aria-label={`Go to ${page.title}`}
                >
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-red-600" />
                    <p className="font-medium">{page.title}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-red-600 transition-colors" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-black to-red-900 dark:from-gray-900 dark:to-red-950 text-white">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-3">Calculate All Your Black Friday Discounts</h3>
            <p className="mb-6 text-gray-200">
              Track multiple items and maximize your Black Friday 2025 savings!
            </p>
            <Link
              href="/black-friday-2025-savings-calculator"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-yellow-500 text-black hover:bg-yellow-400 h-12 px-8 py-2 transition-colors"
              aria-label="Track all Black Friday deals"
            >
              <Zap className="mr-2 h-5 w-5" />
              Track All My Black Friday Deals
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
