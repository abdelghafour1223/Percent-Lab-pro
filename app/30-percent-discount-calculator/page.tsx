import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ComparisonChart } from '@/components/percentage-chart';
import { ArrowRight, Zap, Tag, Percent } from 'lucide-react';
import { CountdownTimer } from '@/components/black-friday/countdown-timer';
import { DiscountCalculator } from '@/components/black-friday/discount-calculator';

// Metadata for SEO
export const metadata: Metadata = {
  title: '30% Discount Calculator: Sale Savings [2025] | PercentLab',
  description: 'Calculate 30% off discounts instantly. Perfect for Black Friday, Cyber Monday, and holiday sales. See real US shopping examples with our free 30% discount calculator.',
  alternates: {
    canonical: 'https://www.percentlab.app/30-percent-discount-calculator',
  },
  keywords: [
    '30 percent discount',
    '30% off calculator',
    'discount calculator',
    'black friday 30 off',
    'cyber monday calculator',
    'holiday sales calculator',
    '30 percent off',
    'shopping discount calculator',
  ],
  openGraph: {
    title: '30% Discount Calculator: Sale Savings [2025]',
    description: 'Calculate 30% off discounts for Black Friday, Cyber Monday, and sales.',
    type: 'article',
    url: 'https://www.percentlab.app/30-percent-discount-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: '30% Discount Calculator [2025]',
    description: 'Calculate 30% off discounts instantly for all your shopping.',
  },
};

export default function Page() {
  const percent = 30;
  const examplePrice = 500;
  const savings = 150;

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        name: 'How to Calculate 30% Discount',
        description: 'Step-by-step guide to calculate 30% off any price',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Step 1',
            text: 'Take the original price of the item',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Step 2',
            text: 'Multiply by 0.30 to find the discount amount',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Step 3',
            text: 'Subtract the discount from the original price to get the final price',
          },
        ],
        totalTime: 'PT1M',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do you calculate 30% off?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'To calculate 30% off: multiply the price by 0.30 to get the discount amount, then subtract it from the original price. For example: $500 × 0.30 = $150 discount, so you pay $350.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is 30% off a good discount?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, 30% off is a strong discount, especially for big-ticket items. It\'s common during Black Friday, Cyber Monday, and seasonal clearance sales.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is 30% of $100?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '30% of $100 is $30. With a 30% discount, you would save $30 and pay $70.',
            },
          },
        ],
      },
    ],
  };

  const relatedPages = [
    { title: '20% Off Black Friday Calculator', slug: 'black-friday-calculator-20-off' },
    { title: 'Black Friday 2025 Savings', slug: 'black-friday-2025-savings-calculator' },
    { title: '25% Off $100', slug: '25-percent-off-100-dollars' },
    { title: '10% Off $75', slug: '10-percent-off-75-dollars' },
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
            <span className="font-bold text-base md:text-lg">BLACK FRIDAY 2025 READY</span>
            <Zap className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 dark:text-yellow-300 animate-pulse" />
          </div>
          <p className="text-xs md:text-sm mt-1">Perfect for holiday sales - Calculate 30% off discounts!</p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
            30% Discount Calculator: Sale Savings
          </h1>
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 dark:from-yellow-600 dark:to-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-xl font-bold mb-4">
            <Percent className="inline h-4 w-4 md:h-5 md:w-5 mr-2" />
            Instant Results
          </div>
          <p className="text-base md:text-xl text-muted-foreground px-4">
            Calculate 30% off for Black Friday, Cyber Monday & holiday sales
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-8 border-2 border-green-500 dark:border-green-700">
          <CardHeader className="bg-green-50 dark:bg-green-950/20">
            <CardTitle className="text-base md:text-lg">Quick Answer Example</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              <strong className="text-xl md:text-2xl text-green-700 dark:text-green-500 block mb-2">Save $150</strong> on a $500 item with 30% off!
            </p>
            <div className="bg-muted dark:bg-muted/50 p-3 md:p-4 rounded-lg font-mono text-xs md:text-sm overflow-x-auto">
              $500 × 0.30 = $150 discount • Final price: $350
            </div>
          </CardContent>
        </Card>

        {/* Interactive Calculator */}
        <DiscountCalculator
          defaultPrice="500"
          discountPercent={30}
          title="30% Off Discount Calculator"
        />

        {/* Visual Representation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Visual Discount Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <ComparisonChart
              value1={savings}
              value2={examplePrice - savings}
              label1={`30% Savings ($${savings})`}
              label2={`You Pay ($${examplePrice - savings})`}
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Example: $500 item with 30% discount
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
              Real Shopping Examples (30% Off)
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <div className="space-y-3">
              {/* Electronics */}
              <h3 className="font-bold text-base md:text-lg mt-4 mb-3 text-red-600 dark:text-red-500">📱 Electronics & Tech</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-600">
                <p className="font-semibold text-sm md:text-base">MacBook Air M2</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$1,000</span> • 30% off = <strong className="text-red-600 dark:text-red-500">Save $300</strong> • Pay <strong className="text-green-700 dark:text-green-500">$700</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-600">
                <p className="font-semibold text-sm md:text-base">Samsung 4K TV - 65&quot;</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$800</span> • 30% off = <strong className="text-red-600 dark:text-red-500">Save $240</strong> • Pay <strong className="text-green-700 dark:text-green-500">$560</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-600">
                <p className="font-semibold text-sm md:text-base">iPad Pro 11&quot;</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$700</span> • 30% off = <strong className="text-red-600 dark:text-red-500">Save $210</strong> • Pay <strong className="text-green-700 dark:text-green-500">$490</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-600">
                <p className="font-semibold text-sm md:text-base">AirPods Pro (2nd Gen)</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$250</span> • 30% off = <strong className="text-red-600 dark:text-red-500">Save $75</strong> • Pay <strong className="text-green-700 dark:text-green-500">$175</strong>
                </p>
              </div>

              {/* Clothing & Fashion */}
              <h3 className="font-bold text-base md:text-lg mt-6 mb-3 text-red-600 dark:text-red-500">👗 Clothing & Fashion</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-600">
                <p className="font-semibold text-sm md:text-base">Designer Leather Jacket</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$300</span> • 30% off = <strong className="text-red-600 dark:text-red-500">Save $90</strong> • Pay <strong className="text-green-700 dark:text-green-500">$210</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-600">
                <p className="font-semibold text-sm md:text-base">Winter Boots - Timberland</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$180</span> • 30% off = <strong className="text-red-600 dark:text-red-500">Save $54</strong> • Pay <strong className="text-green-700 dark:text-green-500">$126</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-600">
                <p className="font-semibold text-sm md:text-base">Wool Sweater</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$90</span> • 30% off = <strong className="text-red-600 dark:text-red-500">Save $27</strong> • Pay <strong className="text-green-700 dark:text-green-500">$63</strong>
                </p>
              </div>

              {/* Home & Furniture */}
              <h3 className="font-bold text-base md:text-lg mt-6 mb-3 text-red-600 dark:text-red-500">🛋️ Home & Furniture</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-black dark:border-gray-700">
                <p className="font-semibold text-sm md:text-base">Sectional Sofa</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$1,500</span> • 30% off = <strong className="text-red-600 dark:text-red-500">Save $450</strong> • Pay <strong className="text-green-700 dark:text-green-500">$1,050</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-black dark:border-gray-700">
                <p className="font-semibold text-sm md:text-base">Mattress - King Size</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$900</span> • 30% off = <strong className="text-red-600 dark:text-red-500">Save $270</strong> • Pay <strong className="text-green-700 dark:text-green-500">$630</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-black dark:border-gray-700">
                <p className="font-semibold text-sm md:text-base">Dining Table Set (6 chairs)</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$600</span> • 30% off = <strong className="text-red-600 dark:text-red-500">Save $180</strong> • Pay <strong className="text-green-700 dark:text-green-500">$420</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-3 md:p-4 rounded-lg border-l-4 border-black dark:border-gray-700">
                <p className="font-semibold text-sm md:text-base">Instant Pot - 8 Quart</p>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Was <span className="line-through">$120</span> • 30% off = <strong className="text-red-600 dark:text-red-500">Save $36</strong> • Pay <strong className="text-green-700 dark:text-green-500">$84</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Calculate */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">How to Calculate 30% Off Discounts</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  1
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Find the original price</strong> - Check the price tag before discount
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  2
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Calculate the discount</strong> - Multiply price by 0.30 (that&apos;s 30% as a decimal)
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  3
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Subtract to get final price</strong> - Original price minus discount = what you pay
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  ✓
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Example:</strong> $500 item → $500 × 0.30 = $150 discount → Pay $350
                </span>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6 space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">How do you calculate 30% off?</h3>
              <p className="text-muted-foreground">
                To calculate 30% off: multiply the price by 0.30 to get the discount amount, then subtract it from the original price. For example: $500 × 0.30 = $150 discount, so you pay $350.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Is 30% off a good discount?</h3>
              <p className="text-muted-foreground">
                Yes, 30% off is a strong discount, especially for big-ticket items like electronics, furniture, and appliances. It&apos;s common during Black Friday, Cyber Monday, and seasonal clearance sales.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What is 30% of $100?</h3>
              <p className="text-muted-foreground">
                30% of $100 is $30. With a 30% discount, you would save $30 and pay $70.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">When do stores offer 30% off?</h3>
              <p className="text-muted-foreground">
                Stores commonly offer 30% off during Black Friday (Nov 29, 2025), Cyber Monday, Memorial Day, July 4th, Labor Day, and end-of-season clearance sales. Sign up for store emails to catch these deals!
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How much is 30% off $200?</h3>
              <p className="text-muted-foreground">
                30% off $200 saves you $60, so the final price is $140. ($200 × 0.30 = $60 discount)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I use coupons on top of 30% off sales?</h3>
              <p className="text-muted-foreground">
                It depends on the store&apos;s policy. Some retailers allow stacking coupons with percentage discounts, while others exclude sale items from additional promotions. Always check the terms or ask a sales associate!
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What&apos;s the formula for calculating 30% off?</h3>
              <p className="text-muted-foreground">
                Formula: Final Price = Original Price - (Original Price × 0.30). Or simplified: Final Price = Original Price × 0.70.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Related Calculators */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Related Sale Calculators</CardTitle>
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
            <h3 className="text-xl md:text-2xl font-bold mb-3">Need to Track Multiple Discounts?</h3>
            <p className="mb-6 text-gray-200 dark:text-gray-300 text-sm md:text-base">
              Use our multi-item calculator to track all your Black Friday savings!
            </p>
            <Link
              href="/black-friday-2025-savings-calculator"
              className="inline-flex items-center justify-center rounded-md text-sm md:text-base font-medium bg-yellow-500 dark:bg-yellow-600 text-black dark:text-white hover:bg-yellow-400 dark:hover:bg-yellow-500 min-h-[44px] h-12 px-6 md:px-8 py-2 transition-colors"
              aria-label="Track multiple Black Friday deals"
            >
              <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Track All My Deals
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
