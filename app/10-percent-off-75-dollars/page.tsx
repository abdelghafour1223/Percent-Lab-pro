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
        <div className="bg-gradient-to-r from-black via-red-600 to-black dark:from-gray-900 dark:via-red-900 dark:to-gray-900 text-white p-4 md:p-6 rounded-lg mb-6 text-center">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Zap className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 dark:text-yellow-300 animate-pulse" />
            <span className="font-bold text-base md:text-lg">BLACK FRIDAY 2025</span>
            <Zap className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 dark:text-yellow-300 animate-pulse" />
          </div>
          <p className="text-xs md:text-sm mt-1">Quick calculator for $75 purchases!</p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
            10% Off $75 Calculator
          </h1>
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-700 dark:text-green-500 my-6">
            $67.50
          </div>
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 dark:from-yellow-600 dark:to-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-xl font-bold mb-4">
            <Calculator className="inline h-4 w-4 md:h-5 md:w-5 mr-2" />
            You Save $7.50
          </div>
          <p className="text-base md:text-xl text-muted-foreground px-4">
            Instant answer for restaurant bills, clothing & accessories
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-8 border-2 border-green-500 dark:border-green-700">
          <CardHeader className="bg-green-50 dark:bg-green-950/20">
            <CardTitle className="text-base md:text-lg">Quick Answer</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              <strong className="text-xl md:text-2xl text-green-700 dark:text-green-500 block mb-2">10% off $75 = $67.50</strong>
            </p>
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              When something costs $75 and has a 10% discount, you save $7.50 and pay $67.50.
            </p>
            <div className="bg-muted dark:bg-muted/50 p-3 md:p-4 rounded-lg font-mono text-xs md:text-sm overflow-x-auto">
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
            <CardTitle className="text-base md:text-lg">Visual Breakdown: $75 with 10% Off</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
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
            <CardTitle className="flex items-center gap-2 text-base md:text-lg">
              <Tag className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
              Common $75 Shopping Scenarios (10% Off)
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <div className="space-y-3">
              {/* Dining */}
              <h3 className="font-bold text-base md:text-lg mt-4 mb-3 text-red-600 dark:text-red-500">🍽️ Restaurants & Dining</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-600">
                <p className="font-semibold text-sm md:text-base">Dinner for Two</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Bill <span className="line-through">$75</span> • 10% off (coupon) = <strong className="text-red-600 dark:text-red-500">Save $7.50</strong> • Pay <strong className="text-green-700 dark:text-green-500">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-600">
                <p className="font-semibold text-sm md:text-base">Family Brunch</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Total <span className="line-through">$75</span> • 10% off (early bird) = <strong className="text-red-600 dark:text-red-500">Save $7.50</strong> • Pay <strong className="text-green-700 dark:text-green-500">$67.50</strong>
                </p>
              </div>

              {/* Fashion */}
              <h3 className="font-bold text-base md:text-lg mt-6 mb-3 text-red-600 dark:text-red-500">👕 Clothing & Shoes</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-600">
                <p className="font-semibold text-sm md:text-base">Casual Sneakers</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600 dark:text-red-500">Save $7.50</strong> • Pay <strong className="text-green-700 dark:text-green-500">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-600">
                <p className="font-semibold text-sm md:text-base">Designer T-Shirt</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600 dark:text-red-500">Save $7.50</strong> • Pay <strong className="text-green-700 dark:text-green-500">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-600">
                <p className="font-semibold text-sm md:text-base">Summer Dress</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600 dark:text-red-500">Save $7.50</strong> • Pay <strong className="text-green-700 dark:text-green-500">$67.50</strong>
                </p>
              </div>

              {/* Electronics */}
              <h3 className="font-bold text-base md:text-lg mt-6 mb-3 text-red-600 dark:text-red-500">🎮 Electronics & Gaming</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-black dark:border-gray-700">
                <p className="font-semibold text-sm md:text-base">Video Game (New Release)</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600 dark:text-red-500">Save $7.50</strong> • Pay <strong className="text-green-700 dark:text-green-500">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-black dark:border-gray-700">
                <p className="font-semibold text-sm md:text-base">Wireless Mouse + Keyboard</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600 dark:text-red-500">Save $7.50</strong> • Pay <strong className="text-green-700 dark:text-green-500">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-black dark:border-gray-700">
                <p className="font-semibold text-sm md:text-base">Phone Case + Screen Protector Bundle</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600 dark:text-red-500">Save $7.50</strong> • Pay <strong className="text-green-700 dark:text-green-500">$67.50</strong>
                </p>
              </div>

              {/* Accessories */}
              <h3 className="font-bold text-base md:text-lg mt-6 mb-3 text-red-600 dark:text-red-500">👜 Accessories</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-green-600 dark:border-green-700">
                <p className="font-semibold text-sm md:text-base">Leather Wallet</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600 dark:text-red-500">Save $7.50</strong> • Pay <strong className="text-green-700 dark:text-green-500">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-green-600 dark:border-green-700">
                <p className="font-semibold text-sm md:text-base">Sunglasses</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600 dark:text-red-500">Save $7.50</strong> • Pay <strong className="text-green-700 dark:text-green-500">$67.50</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-green-600 dark:border-green-700">
                <p className="font-semibold text-sm md:text-base">Watch (Casual)</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$75</span> • 10% off = <strong className="text-red-600 dark:text-red-500">Save $7.50</strong> • Pay <strong className="text-green-700 dark:text-green-500">$67.50</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Step-by-Step: How to Calculate 10% Off $75</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
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

            <div className="mt-6 p-3 md:p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border-2 border-yellow-300 dark:border-yellow-600">
              <p className="font-semibold mb-2 text-sm md:text-base">Quick Mental Math Trick:</p>
              <p className="text-xs md:text-sm text-muted-foreground">
                To find 10% of any number, just move the decimal point one place to the left.
                $75.00 becomes $7.50 for the discount. Then subtract: $75 - $7.50 = $67.50!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6 space-y-6">
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
            <CardTitle className="text-base md:text-lg">Related Discount Calculators</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {relatedPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="flex items-center justify-between p-3 md:p-4 rounded-lg border-2 border-yellow-400 dark:border-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors group"
                  aria-label={`Go to ${page.title}`}
                >
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4 text-red-600 dark:text-red-500" />
                    <p className="font-medium text-sm md:text-base">{page.title}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Percentage Calculators */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Related Percentage Calculators</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link
                href="/calculators/basic-percent/percent-of"
                className="flex items-center justify-between p-3 md:p-4 rounded-lg border hover:bg-muted/50 transition-colors group"
                aria-label="Go to Percent Of Calculator"
              >
                <p className="font-medium text-sm md:text-base">Percent Of Calculator</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href="/calculators/basic-percent/percentage-decrease"
                className="flex items-center justify-between p-3 md:p-4 rounded-lg border hover:bg-muted/50 transition-colors group"
                aria-label="Go to Percentage Decrease Calculator"
              >
                <p className="font-medium text-sm md:text-base">Percentage Decrease Calculator</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href="/calculators/basic-percent/percentage-increase"
                className="flex items-center justify-between p-3 md:p-4 rounded-lg border hover:bg-muted/50 transition-colors group"
                aria-label="Go to Percentage Increase Calculator"
              >
                <p className="font-medium text-sm md:text-base">Percentage Increase Calculator</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href="/calculators/basic-percent/reverse-percentage"
                className="flex items-center justify-between p-3 md:p-4 rounded-lg border hover:bg-muted/50 transition-colors group"
                aria-label="Go to Reverse Percentage Calculator"
              >
                <p className="font-medium text-sm md:text-base">Reverse Percentage Calculator</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-black to-red-900 dark:from-gray-900 dark:to-red-950 text-white">
          <CardContent className="pt-6 px-4 md:px-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Calculate All Your Black Friday Discounts</h3>
            <p className="mb-6 text-gray-200 dark:text-gray-300 text-sm md:text-base">
              Track multiple items and maximize your Black Friday 2025 savings!
            </p>
            <Link
              href="/black-friday-2025-savings-calculator"
              className="inline-flex items-center justify-center rounded-md text-sm md:text-base font-medium bg-yellow-500 dark:bg-yellow-600 text-black dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-500 min-h-[44px] h-12 px-6 md:px-8 py-2 transition-colors"
              aria-label="Track all Black Friday deals"
            >
              <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Track All My Black Friday Deals
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
