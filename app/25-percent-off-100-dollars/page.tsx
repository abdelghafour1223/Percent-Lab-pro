import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ComparisonChart } from '@/components/percentage-chart';
import { ArrowRight, Zap, Tag, Calculator } from 'lucide-react';
import { CountdownTimer } from '@/components/black-friday/countdown-timer';
import { DiscountCalculator } from '@/components/black-friday/discount-calculator';

// Metadata for SEO
export const metadata: Metadata = {
  title: '25% Off $100: Quick Calculator + Examples [2025] | PercentLab',
  description: '25% off $100 equals $75. Learn how to calculate this discount, see real shopping examples, and use our free calculator for all 25% off $100 scenarios.',
  alternates: {
    canonical: 'https://www.percentlab.app/25-percent-off-100-dollars',
  },
  keywords: [
    '25% off 100',
    '25 percent off $100',
    '$100 with 25% discount',
    'how much is 25% off 100 dollars',
    '25 off 100',
    'discount calculator $100',
    'black friday 100 dollar deals',
  ],
  openGraph: {
    title: '25% Off $100: Quick Calculator + Examples',
    description: '25% off $100 = $75. See examples and calculate any 25% discount.',
    type: 'article',
    url: 'https://www.percentlab.app/25-percent-off-100-dollars',
  },
  twitter: {
    card: 'summary_large_image',
    title: '25% Off $100 Calculator',
    description: 'Quick answer: 25% off $100 equals $75. Free calculator included.',
  },
};

export default function Page() {
  const percent = 25;
  const originalPrice = 100;
  const savings = 25;
  const finalPrice = 75;

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        name: 'How to Calculate 25% Off $100',
        description: 'Step-by-step calculation for 25% discount on $100',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Step 1',
            text: 'Convert 25% to decimal: 25 ÷ 100 = 0.25',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Step 2',
            text: 'Calculate discount: $100 × 0.25 = $25',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Step 3',
            text: 'Subtract from original: $100 - $25 = $75',
          },
        ],
        totalTime: 'PT30S',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is 25% off $100?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '25% off $100 equals $75. You save $25 and pay $75. The calculation is: $100 × 0.25 = $25 discount, then $100 - $25 = $75 final price.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much do you save with 25% off $100?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You save $25 with 25% off $100. This is calculated by multiplying $100 by 0.25, which equals $25.',
            },
          },
          {
            '@type': 'Question',
            name: 'What items cost around $100 on Black Friday?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Common $100 items on Black Friday include: designer jeans, sneakers, small kitchen appliances, wireless earbuds, fitness trackers, and some video games or accessories.',
            },
          },
        ],
      },
    ],
  };

  const relatedPages = [
    { title: '20% Off Black Friday Calculator', slug: 'black-friday-calculator-20-off' },
    { title: '30% Discount Calculator', slug: '30-percent-discount-calculator' },
    { title: '10% Off $75', slug: '10-percent-off-75-dollars' },
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
          <p className="text-xs md:text-sm mt-1">Perfect for $100 shopping deals!</p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
            25% Off $100: Quick Calculator
          </h1>
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-700 dark:text-green-500 my-6">
            $75
          </div>
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 dark:from-yellow-600 dark:to-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-xl font-bold mb-4">
            <Calculator className="inline h-4 w-4 md:h-5 md:w-5 mr-2" />
            You Save $25
          </div>
          <p className="text-base md:text-xl text-muted-foreground px-4">
            Instant answer plus real shopping examples
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-8 border-2 border-green-500 dark:border-green-700">
          <CardHeader className="bg-green-50 dark:bg-green-950/20">
            <CardTitle className="text-base md:text-lg">Quick Answer</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              <strong className="text-xl md:text-2xl text-green-700 dark:text-green-500 block mb-2">25% off $100 = $75</strong>
            </p>
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              When an item costs $100 and has a 25% discount, you save $25 and pay $75.
            </p>
            <div className="bg-muted dark:bg-muted/50 p-3 md:p-4 rounded-lg font-mono text-xs md:text-sm overflow-x-auto">
              $100 × 0.25 = $25 discount → $100 - $25 = $75 final price
            </div>
          </CardContent>
        </Card>

        {/* Interactive Calculator */}
        <DiscountCalculator
          defaultPrice="100"
          discountPercent={25}
          title="25% Off Calculator (Try Different Amounts)"
        />

        {/* Visual Representation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Visual Breakdown: $100 with 25% Off</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <ComparisonChart
              value1={savings}
              value2={finalPrice}
              label1={`You Save ($${savings})`}
              label2={`You Pay ($${finalPrice})`}
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              25% of $100 is $25, leaving you to pay $75
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
              Common $100 Shopping Scenarios (25% Off)
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <div className="space-y-3">
              {/* Fashion */}
              <h3 className="font-bold text-base md:text-lg mt-4 mb-3 text-red-600 dark:text-red-500">👟 Fashion & Apparel</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-600">
                <p className="font-semibold text-sm md:text-base">Nike Air Max Sneakers</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$100</span> • 25% off = <strong className="text-red-600 dark:text-red-500">Save $25</strong> • Pay <strong className="text-green-700 dark:text-green-500">$75</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-600">
                <p className="font-semibold text-sm md:text-base">Levi&apos;s Designer Jeans</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$100</span> • 25% off = <strong className="text-red-600 dark:text-red-500">Save $25</strong> • Pay <strong className="text-green-700 dark:text-green-500">$75</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-600">
                <p className="font-semibold text-sm md:text-base">Winter Coat</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$100</span> • 25% off = <strong className="text-red-600 dark:text-red-500">Save $25</strong> • Pay <strong className="text-green-700 dark:text-green-500">$75</strong>
                </p>
              </div>

              {/* Tech & Electronics */}
              <h3 className="font-bold text-base md:text-lg mt-6 mb-3 text-red-600 dark:text-red-500">🎧 Tech & Electronics</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-600">
                <p className="font-semibold text-sm md:text-base">Wireless Earbuds</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$100</span> • 25% off = <strong className="text-red-600 dark:text-red-500">Save $25</strong> • Pay <strong className="text-green-700 dark:text-green-500">$75</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-600">
                <p className="font-semibold text-sm md:text-base">Fitness Tracker - Fitbit</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$100</span> • 25% off = <strong className="text-red-600 dark:text-red-500">Save $25</strong> • Pay <strong className="text-green-700 dark:text-green-500">$75</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-600">
                <p className="font-semibold text-sm md:text-base">Portable Bluetooth Speaker</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$100</span> • 25% off = <strong className="text-red-600 dark:text-red-500">Save $25</strong> • Pay <strong className="text-green-700 dark:text-green-500">$75</strong>
                </p>
              </div>

              {/* Home & Kitchen */}
              <h3 className="font-bold text-base md:text-lg mt-6 mb-3 text-red-600 dark:text-red-500">🍳 Home & Kitchen</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-black dark:border-gray-700">
                <p className="font-semibold text-sm md:text-base">Ninja Air Fryer</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$100</span> • 25% off = <strong className="text-red-600 dark:text-red-500">Save $25</strong> • Pay <strong className="text-green-700 dark:text-green-500">$75</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-black dark:border-gray-700">
                <p className="font-semibold text-sm md:text-base">Cuisinart Coffee Maker</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$100</span> • 25% off = <strong className="text-red-600 dark:text-red-500">Save $25</strong> • Pay <strong className="text-green-700 dark:text-green-500">$75</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-black dark:border-gray-700">
                <p className="font-semibold text-sm md:text-base">Bed Sheets Set (Queen)</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$100</span> • 25% off = <strong className="text-red-600 dark:text-red-500">Save $25</strong> • Pay <strong className="text-green-700 dark:text-green-500">$75</strong>
                </p>
              </div>

              {/* Restaurants & Dining */}
              <h3 className="font-bold text-base md:text-lg mt-6 mb-3 text-red-600 dark:text-red-500">🍽️ Dining</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-green-600 dark:border-green-700">
                <p className="font-semibold text-sm md:text-base">Restaurant Bill for Two</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Total <span className="line-through">$100</span> • 25% off (gift card) = <strong className="text-red-600 dark:text-red-500">Save $25</strong> • Pay <strong className="text-green-700 dark:text-green-500">$75</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Step-by-Step: How to Calculate 25% Off $100</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  1
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Convert percentage to decimal:</strong> 25% = 25 ÷ 100 = 0.25
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  2
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Calculate discount amount:</strong> $100 × 0.25 = $25
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  3
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Subtract from original price:</strong> $100 - $25 = $75
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  ✓
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Result:</strong> You save $25 and pay $75
                </span>
              </li>
            </ol>

            <div className="mt-6 p-3 md:p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border-2 border-yellow-300 dark:border-yellow-600">
              <p className="font-semibold mb-2 text-sm md:text-base">Quick Mental Math Trick:</p>
              <p className="text-xs md:text-sm text-muted-foreground">
                To find 25% of any number, divide by 4. Since $100 ÷ 4 = $25, you save $25!
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
              <h3 className="font-semibold text-lg mb-2">What is 25% off $100?</h3>
              <p className="text-muted-foreground">
                25% off $100 equals $75. You save $25 and pay $75. The calculation is: $100 × 0.25 = $25 discount, then $100 - $25 = $75 final price.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How much do you save with 25% off $100?</h3>
              <p className="text-muted-foreground">
                You save $25 with 25% off $100. This is calculated by multiplying $100 by 0.25, which equals $25.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What items cost around $100 on Black Friday?</h3>
              <p className="text-muted-foreground">
                Common $100 items on Black Friday include: designer jeans, Nike sneakers, small kitchen appliances (air fryers, coffee makers), wireless earbuds, fitness trackers, winter coats, and some video games or accessories.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Is 25% off a good deal?</h3>
              <p className="text-muted-foreground">
                Yes, 25% off is a solid discount. For a $100 item, you&apos;re saving $25, which is significant. On Black Friday or during sales, 25% off is common and worth taking advantage of, especially on items you already planned to buy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How do I calculate 25% off in my head?</h3>
              <p className="text-muted-foreground">
                Easy trick: 25% is the same as 1/4 (one quarter). So divide the price by 4 to get your savings. For $100: $100 ÷ 4 = $25 savings. Then subtract: $100 - $25 = $75 final price.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What&apos;s better: $25 off or 25% off?</h3>
              <p className="text-muted-foreground">
                For a $100 item, they&apos;re the same ($25 saved). But for items over $100, 25% off saves you more. For items under $100, a flat $25 off is better. Always compare both to get the best deal!
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
            <h3 className="text-xl md:text-2xl font-bold mb-3">Calculate Other Black Friday Discounts</h3>
            <p className="mb-6 text-gray-200 dark:text-gray-300 text-sm md:text-base">
              Track all your Black Friday 2025 savings with our multi-item calculator!
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
