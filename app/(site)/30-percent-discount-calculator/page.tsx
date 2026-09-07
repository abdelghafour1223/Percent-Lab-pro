import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ComparisonChart } from '@/components/percentage-chart';
import { ArrowRight, Zap, Tag, Percent } from 'lucide-react';
import { CountdownTimer } from '@/components/black-friday/countdown-timer';
import { DiscountCalculator } from '@/components/black-friday/discount-calculator';

// Metadata for SEO
export const metadata: Metadata = {
  title: '30% Off Black Friday Calculator 2025',
  description: 'Calculate 30% discount instantly. Learn 3 easy methods (mental math, calculator, formula) + Black Friday shopping guide. Save $300 on $1,000 purchases. Free calculator 2025.',
  alternates: {
    canonical: 'https://www.percentlab.app/30-percent-discount-calculator',
  },
  keywords: [
    '30% off black friday',
    'black friday 30 percent off',
    'black friday calculator 30',
    '30 off black friday 2025',
    'black friday discount calculator',
    'cyber monday 30% off',
    '30 percent black friday deals',
    'black friday savings 30%',
  ],
  openGraph: {
    title: '30% Off Black Friday Calculator 2025',
    description: 'Calculate 30% off Black Friday discounts instantly. Your 2025 specialist.',
    type: 'article',
    url: 'https://www.percentlab.app/30-percent-discount-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: '30% Off Black Friday Calculator 2025',
    description: 'Black Friday 30% off calculator - instant savings calculations.',
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
            name: 'How do I calculate 30% discount without a calculator?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Use the "times 3" method: Find 10% by moving the decimal left, then multiply by 3. For $100: 10% = $10, so 30% = $10 × 3 = $30 discount. Pay $70.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much is 30% off $500?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '30% off $500 = $150 discount. You pay $350. Quick calculation: $500 × 0.70 = $350.',
            },
          },
          {
            '@type': 'Question',
            name: 'What\'s the quickest way to calculate 30% discount in a store?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Move the decimal left to find 10% ($100 → $10), then multiply by 3 ($10 × 3 = $30). Subtract from price: $100 - $30 = $70. Takes 5 seconds!',
            },
          },
          {
            '@type': 'Question',
            name: 'When do Black Friday sales typically offer 30% off?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '30% off is common during Black Friday (Nov 29, 2025) for electronics, clothing, and home goods. Cyber Monday online retailers match Black Friday deals. Also expect 30% off during Memorial Day, July 4th, and Labor Day weekends.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I stack 30% off with other discounts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Usually no—most retailers don\'t allow discount stacking. However, some allow 30% off sale price (already reduced items), store credit card additional 5-10% (check terms), or cashback rewards (separate from store discount).',
            },
          },
          {
            '@type': 'Question',
            name: 'Is 30% off a better deal than $30 off?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It depends on the original price. On $100: 30% off = $30 off (same deal). On $150: 30% off = $45 off (better than $30 off). On $80: 30% off = $24 off (worse than $30 off). Rule: If price > $100, percentage discounts are usually better.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much money do I save with 30% off $1,000?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You save $300 and pay $700. Discount: $1,000 × 0.30 = $300. Final price: $1,000 - $300 = $700. Or directly: $1,000 × 0.70 = $700.',
            },
          },
        ],
      },
    ],
  };

  const relatedPages = [
    { title: '20% Off Black Friday Calculator', slug: 'black-friday-calculator-20-off' },
    { title: 'Black Friday 2025 Savings', slug: 'black-friday-2025-savings-calculator' },
    { title: '25% Off Black Friday Deals', slug: '25-percent-off-100-dollars' },
    { title: '10% Off Black Friday Savings', slug: '10-percent-off-75-dollars' },
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
            <span className="font-bold text-base md:text-lg">BLACK FRIDAY 2025 CALCULATOR SPECIALIST</span>
            <Zap className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 dark:text-yellow-300 animate-pulse" />
          </div>
          <p className="text-xs md:text-sm mt-1">Master Black Friday with 30% off calculations - the biggest savings!</p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
            30% Off Black Friday Calculator
          </h1>
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 dark:from-yellow-600 dark:to-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-xl font-bold mb-4">
            <Percent className="inline h-4 w-4 md:h-5 md:w-5 mr-2" />
            Instant Black Friday Savings
          </div>
          <p className="text-base md:text-xl text-muted-foreground px-4">
            Your Black Friday 2025 specialist for 30% off deals - electronics, furniture, fashion & more
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
          title="30% Off Black Friday Calculator (Try Different Amounts)"
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

        {/* Black Friday Examples */}
        <Card className="mb-8 border-2 border-yellow-500 dark:border-yellow-600">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20">
            <CardTitle className="flex items-center gap-2 text-base md:text-lg">
              <Zap className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
              30% Off Black Friday Examples
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <p className="text-sm text-muted-foreground mb-6 mt-4">
              The biggest Black Friday 2025 savings - 30% off on premium items!
            </p>

            <div className="space-y-4">
              {/* TV Deals */}
              <div className="bg-black dark:bg-gray-900 text-white p-4 md:p-5 rounded-lg">
                <h3 className="font-bold text-lg md:text-xl mb-2 text-yellow-400 dark:text-yellow-300">
                  📺 30% Off Black Friday TV Deals
                </h3>
                <p className="text-sm md:text-base mb-3">
                  65&quot; OLED TV: Was $1,500 → <span className="font-bold text-green-400">Pay $1,050</span> (Save $450)
                </p>
                <p className="text-sm md:text-base">
                  55&quot; Smart TV: Was $700 → <span className="font-bold text-green-400">Pay $490</span> (Save $210)
                </p>
              </div>

              {/* Laptop Deals */}
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 md:p-5 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                <h3 className="font-bold text-lg md:text-xl mb-2 text-blue-700 dark:text-blue-400">
                  💻 30% Off Black Friday Laptop Deals
                </h3>
                <p className="text-sm md:text-base mb-3 text-gray-700 dark:text-gray-300">
                  MacBook Air: Was $1,200 → <span className="font-bold text-green-700 dark:text-green-400">Pay $840</span> (Save $360)
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  Gaming Laptop: Was $1,800 → <span className="font-bold text-green-700 dark:text-green-400">Pay $1,260</span> (Save $540)
                </p>
              </div>

              {/* Furniture */}
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/30 p-4 md:p-5 rounded-lg border-2 border-amber-300 dark:border-amber-700">
                <h3 className="font-bold text-lg md:text-xl mb-2 text-amber-700 dark:text-amber-400">
                  🛋️ 30% Off Black Friday Furniture
                </h3>
                <p className="text-sm md:text-base mb-3 text-gray-700 dark:text-gray-300">
                  Sectional Sofa: Was $2,000 → <span className="font-bold text-green-700 dark:text-green-400">Pay $1,400</span> (Save $600)
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  Dining Set: Was $1,000 → <span className="font-bold text-green-700 dark:text-green-400">Pay $700</span> (Save $300)
                </p>
              </div>

              {/* Fashion */}
              <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-950/30 dark:to-rose-950/30 p-4 md:p-5 rounded-lg border-2 border-pink-300 dark:border-pink-700">
                <h3 className="font-bold text-lg md:text-xl mb-2 text-pink-700 dark:text-pink-400">
                  👗 30% Off Black Friday Fashion
                </h3>
                <p className="text-sm md:text-base mb-3 text-gray-700 dark:text-gray-300">
                  Designer Coat: Was $400 → <span className="font-bold text-green-700 dark:text-green-400">Pay $280</span> (Save $120)
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  Leather Jacket: Was $500 → <span className="font-bold text-green-700 dark:text-green-400">Pay $350</span> (Save $150)
                </p>
              </div>

              {/* Appliances */}
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 p-4 md:p-5 rounded-lg border-2 border-green-300 dark:border-green-700">
                <h3 className="font-bold text-lg md:text-xl mb-2 text-green-700 dark:text-green-400">
                  🏠 30% Off Black Friday Appliances
                </h3>
                <p className="text-sm md:text-base mb-3 text-gray-700 dark:text-gray-300">
                  Robot Vacuum: Was $600 → <span className="font-bold text-green-700 dark:text-green-400">Pay $420</span> (Save $180)
                </p>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  Air Purifier: Was $300 → <span className="font-bold text-green-700 dark:text-green-400">Pay $210</span> (Save $90)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

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

        {/* How to Calculate - Expanded with 3 Methods */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">How to Calculate 30% Discount - 3 Easy Methods</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            {/* Method 1: Mental Math */}
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🧮</span>
                Method 1: Quick Mental Math (No Calculator Needed)
              </h3>
              <p className="text-muted-foreground mb-4">
                Perfect for in-store shopping when you want quick estimates.
              </p>

              <ol className="space-y-4 mb-6">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                    1
                  </span>
                  <span className="text-muted-foreground flex-1 pt-1">
                    <strong>Find 10% by moving decimal left</strong><br/>
                    $100.00 → <strong className="text-green-700 dark:text-green-500">$10.00</strong> (this is 10%)
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                    2
                  </span>
                  <span className="text-muted-foreground flex-1 pt-1">
                    <strong>Multiply by 3 to get 30%</strong><br/>
                    $10.00 × 3 = <strong className="text-green-700 dark:text-green-500">$30.00</strong> (this is 30%)
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                    3
                  </span>
                  <span className="text-muted-foreground flex-1 pt-1">
                    <strong>Subtract from original price</strong><br/>
                    $100.00 - $30.00 = <strong className="text-green-700 dark:text-green-500">$70.00</strong> ✅
                  </span>
                </li>
              </ol>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-semibold mb-2">Real Example - MacBook Air:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Original: $1,000</li>
                  <li>• 10% = $100</li>
                  <li>• 30% = $100 × 3 = $300</li>
                  <li>• Pay: $1,000 - $300 = <strong className="text-green-700 dark:text-green-500">$700</strong> ✅</li>
                </ul>
              </div>
            </div>

            <hr className="my-8 border-muted" />

            {/* Method 2: Multiply by 0.70 */}
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📱</span>
                Method 2: Multiply by 0.70 (Fastest for Calculator)
              </h3>
              <p className="text-muted-foreground mb-4">
                If you have a calculator or phone, this is the quickest method.
              </p>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">Formula: Final Price = Original Price × 0.70</p>
                <p className="text-sm text-muted-foreground">
                  <strong>Why 0.70?</strong> Because 100% - 30% = 70% = 0.70. You&apos;re paying 70% of the original price.
                </p>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-muted-foreground"><strong>Examples:</strong></p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• $100 × 0.70 = <strong className="text-green-700 dark:text-green-500">$70</strong></li>
                  <li>• $500 × 0.70 = <strong className="text-green-700 dark:text-green-500">$350</strong></li>
                  <li>• $1,000 × 0.70 = <strong className="text-green-700 dark:text-green-500">$700</strong></li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-sm text-muted-foreground mb-2">
                  For any discount, subtract the percentage from 100 and convert to decimal:
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground ml-4">
                  <li>• 20% off → × 0.80</li>
                  <li>• <Link href="/25-percent-off-100-dollars" className="text-blue-600 dark:text-blue-400 hover:underline">25% off</Link> → × 0.75</li>
                  <li>• 30% off → × 0.70</li>
                  <li>• 40% off → × 0.60</li>
                </ul>
              </div>
            </div>

            <hr className="my-8 border-muted" />

            {/* Method 3: The Complete Formula */}
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📐</span>
                Method 3: The Complete Formula
              </h3>

              <div className="bg-muted dark:bg-muted/50 p-4 rounded-lg mb-4">
                <p className="font-mono text-sm md:text-base font-semibold mb-4">
                  Discount Amount = Original Price × (Discount % ÷ 100)
                </p>

                <div className="space-y-3 text-sm md:text-base">
                  <p className="font-semibold">Step-by-step:</p>
                  <div className="space-y-2 text-muted-foreground ml-4">
                    <p>Original Price: $100</p>
                    <p>Discount %: 30</p>
                    <p className="pt-2">Discount Amount = $100 × (30 ÷ 100)</p>
                    <p>Discount Amount = $100 × 0.30</p>
                    <p>Discount Amount = $30</p>
                    <p className="pt-2 font-semibold text-green-700 dark:text-green-500">
                      Final Price = $100 - $30 = $70
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-semibold mb-2">Or directly calculate final price:</p>
                <div className="space-y-1 text-sm text-muted-foreground ml-4">
                  <p>Final Price = Original Price × (1 - Discount %)</p>
                  <p>Final Price = $100 × (1 - 0.30)</p>
                  <p>Final Price = $100 × 0.70</p>
                  <p className="font-semibold text-green-700 dark:text-green-500">Final Price = $70</p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-muted" />

            {/* Which Method to Use Table */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">💡 Which Method Should You Use?</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Situation</th>
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Best Method</th>
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-muted-foreground/20 p-3"><strong>In-store shopping</strong></td>
                      <td className="border border-muted-foreground/20 p-3">Method 1 (Mental Math)</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Quick estimates without phone</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-muted-foreground/20 p-3"><strong>Online shopping</strong></td>
                      <td className="border border-muted-foreground/20 p-3">Method 2 (×0.70)</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Fastest with calculator</td>
                    </tr>
                    <tr>
                      <td className="border border-muted-foreground/20 p-3"><strong>Exact calculations</strong></td>
                      <td className="border border-muted-foreground/20 p-3">Method 3 (Formula)</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Most accurate, shows full math</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-muted-foreground/20 p-3"><strong>Large purchases</strong></td>
                      <td className="border border-muted-foreground/20 p-3">Method 2 or 3</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Avoid mental math errors</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Discount Comparison Tables */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Compare Discount Percentages</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <p className="text-muted-foreground mb-6">
              Understanding how different discounts affect prices helps you evaluate Black Friday deals.
            </p>

            {/* Table 1: On $100 Purchase */}
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-4">On $100 Purchase</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Discount</th>
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">You Save</th>
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">You Pay</th>
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Value Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-muted-foreground/20 p-3">10% off</td>
                      <td className="border border-muted-foreground/20 p-3">$10</td>
                      <td className="border border-muted-foreground/20 p-3">$90</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Fair</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-muted-foreground/20 p-3">15% off</td>
                      <td className="border border-muted-foreground/20 p-3">$15</td>
                      <td className="border border-muted-foreground/20 p-3">$85</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Decent</td>
                    </tr>
                    <tr>
                      <td className="border border-muted-foreground/20 p-3"><Link href="/black-friday-calculator-20-off" className="text-blue-600 dark:text-blue-400 hover:underline">20% off</Link></td>
                      <td className="border border-muted-foreground/20 p-3">$20</td>
                      <td className="border border-muted-foreground/20 p-3">$80</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Good</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-muted-foreground/20 p-3"><Link href="/25-percent-off-100-dollars" className="text-blue-600 dark:text-blue-400 hover:underline">25% off</Link></td>
                      <td className="border border-muted-foreground/20 p-3">$25</td>
                      <td className="border border-muted-foreground/20 p-3">$75</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Great</td>
                    </tr>
                    <tr className="bg-yellow-50 dark:bg-yellow-950/20">
                      <td className="border border-yellow-500 p-3 font-bold">30% off ⭐</td>
                      <td className="border border-yellow-500 p-3 font-bold">$30</td>
                      <td className="border border-yellow-500 p-3 font-bold">$70</td>
                      <td className="border border-yellow-500 p-3 font-bold text-green-700 dark:text-green-500">Excellent</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-muted-foreground/20 p-3">40% off</td>
                      <td className="border border-muted-foreground/20 p-3">$40</td>
                      <td className="border border-muted-foreground/20 p-3">$60</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Outstanding</td>
                    </tr>
                    <tr>
                      <td className="border border-muted-foreground/20 p-3">50% off</td>
                      <td className="border border-muted-foreground/20 p-3">$50</td>
                      <td className="border border-muted-foreground/20 p-3">$50</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Rare</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: On $500 Purchase */}
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-4">On $500 Purchase</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Discount</th>
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">You Save</th>
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">You Pay</th>
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-muted-foreground/20 p-3">20% off</td>
                      <td className="border border-muted-foreground/20 p-3">$100</td>
                      <td className="border border-muted-foreground/20 p-3">$400</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Standard sale</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-muted-foreground/20 p-3">25% off</td>
                      <td className="border border-muted-foreground/20 p-3">$125</td>
                      <td className="border border-muted-foreground/20 p-3">$375</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Good Black Friday deal</td>
                    </tr>
                    <tr className="bg-yellow-50 dark:bg-yellow-950/20">
                      <td className="border border-yellow-500 p-3 font-bold">30% off ⭐</td>
                      <td className="border border-yellow-500 p-3 font-bold">$150</td>
                      <td className="border border-yellow-500 p-3 font-bold">$350</td>
                      <td className="border border-yellow-500 p-3 font-bold text-green-700 dark:text-green-500">Excellent deal</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-muted-foreground/20 p-3">40% off</td>
                      <td className="border border-muted-foreground/20 p-3">$200</td>
                      <td className="border border-muted-foreground/20 p-3">$300</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Clearance, last season</td>
                    </tr>
                    <tr>
                      <td className="border border-muted-foreground/20 p-3">50% off</td>
                      <td className="border border-muted-foreground/20 p-3">$250</td>
                      <td className="border border-muted-foreground/20 p-3">$250</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Final clearance, damaged box</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: On $1,000 Purchase */}
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-4">On $1,000 Purchase (Electronics, Furniture)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Discount</th>
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">You Save</th>
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">You Pay</th>
                      <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Typical Products</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-muted-foreground/20 p-3">15% off</td>
                      <td className="border border-muted-foreground/20 p-3">$150</td>
                      <td className="border border-muted-foreground/20 p-3">$850</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">New model laptops, TVs</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-muted-foreground/20 p-3">20% off</td>
                      <td className="border border-muted-foreground/20 p-3">$200</td>
                      <td className="border border-muted-foreground/20 p-3">$800</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Older model electronics</td>
                    </tr>
                    <tr className="bg-yellow-50 dark:bg-yellow-950/20">
                      <td className="border border-yellow-500 p-3 font-bold">30% off ⭐</td>
                      <td className="border border-yellow-500 p-3 font-bold">$300</td>
                      <td className="border border-yellow-500 p-3 font-bold">$700</td>
                      <td className="border border-yellow-500 p-3 font-bold text-green-700 dark:text-green-500">Previous gen, open-box</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-muted-foreground/20 p-3">40% off</td>
                      <td className="border border-muted-foreground/20 p-3">$400</td>
                      <td className="border border-muted-foreground/20 p-3">$600</td>
                      <td className="border border-muted-foreground/20 p-3 text-sm text-muted-foreground">Floor models, refurbished</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Shopping Tips */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <h3 className="text-lg font-bold mb-4">💡 Discount Shopping Tips</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2 text-green-700 dark:text-green-500">Good Deals (20-30% off):</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✅ New season items</li>
                    <li>✅ Popular brands</li>
                    <li>✅ Current year models</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2 text-blue-700 dark:text-blue-500">Great Deals (30-40% off):</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✅ Last season items</li>
                    <li>✅ Overstocked products</li>
                    <li>✅ Previous year models</li>
                  </ul>
                </div>

                <div className="md:col-span-2">
                  <p className="font-semibold mb-2 text-orange-700 dark:text-orange-500">Too Good to Be True (50%+ off):</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>⚠️ Check for damage</li>
                    <li>⚠️ Verify original price wasn&apos;t inflated</li>
                    <li>⚠️ May be final sale (no returns)</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to Expect 30% Off Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">When Do Stores Offer 30% Off Sales?</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <p className="text-muted-foreground mb-6">
              Plan your major purchases around these key shopping periods for 30% or more discounts.
            </p>

            {/* Major Sale Events */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                🛍️ Major Sale Events 2025
              </h3>

              <div className="space-y-6">
                {/* Black Friday */}
                <div className="bg-gradient-to-r from-black to-red-900 dark:from-gray-900 dark:to-red-950 text-white p-5 rounded-lg">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    Black Friday (November 29, 2025)
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Best Categories:</strong> Electronics, TVs, laptops, gaming</li>
                    <li><strong>Typical Discount:</strong> 25-40% off</li>
                    <li><strong className="text-yellow-400">Pro Tip:</strong> Start online Thursday night for early access</li>
                  </ul>
                </div>

                {/* Cyber Monday */}
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 p-5 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-blue-900 dark:text-blue-400">
                    <span className="text-2xl">💻</span>
                    Cyber Monday (December 2, 2025)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Best Categories:</strong> Online retailers, tech, software</li>
                    <li><strong>Typical Discount:</strong> 30-40% off</li>
                    <li><strong className="text-blue-700 dark:text-blue-400">Pro Tip:</strong> Amazon, Best Buy, Target have doorbusters</li>
                  </ul>
                </div>

                {/* Memorial Day */}
                <div className="bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-950/20 dark:to-blue-950/20 p-5 rounded-lg border-2 border-red-300 dark:border-red-700">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-red-900 dark:text-red-400">
                    <span className="text-2xl">🏖️</span>
                    Memorial Day Weekend (May 24-26, 2025)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Best Categories:</strong> Furniture, mattresses, appliances</li>
                    <li><strong>Typical Discount:</strong> 30-50% off</li>
                    <li><strong className="text-red-700 dark:text-red-400">Pro Tip:</strong> Major appliance upgrade time</li>
                  </ul>
                </div>

                {/* July 4th */}
                <div className="bg-gradient-to-r from-red-100 to-blue-100 dark:from-red-950/30 dark:to-blue-950/30 p-5 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-blue-900 dark:text-blue-400">
                    <span className="text-2xl">🎆</span>
                    July 4th Weekend (July 3-6, 2025)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Best Categories:</strong> Summer items, grills, outdoor furniture</li>
                    <li><strong>Typical Discount:</strong> 30-40% off</li>
                    <li><strong className="text-blue-700 dark:text-blue-400">Pro Tip:</strong> Retailers clearing summer inventory</li>
                  </ul>
                </div>

                {/* Labor Day */}
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 p-5 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2 text-orange-900 dark:text-orange-400">
                    <span className="text-2xl">🏗️</span>
                    Labor Day Weekend (August 30 - Sept 1, 2025)
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>Best Categories:</strong> Back-to-school, mattresses, home goods</li>
                    <li><strong>Typical Discount:</strong> 25-35% off</li>
                    <li><strong className="text-orange-700 dark:text-orange-400">Pro Tip:</strong> Last chance for summer clearance</li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="my-8 border-muted" />

            {/* Seasonal Clearance */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">📅 Seasonal Clearance (40-60% off)</h3>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-red-50 dark:from-green-950/20 dark:to-red-950/20 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold mb-2">After Christmas (Dec 26 - Jan 15):</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Holiday decor (50-75% off)</li>
                    <li>• Winter clothing (40-60% off)</li>
                    <li>• Toys and games (30-50% off)</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold mb-3">End of Season Sales:</p>
                  <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                    <li><strong>Winter → Spring (Feb-March):</strong> Winter coats, boots</li>
                    <li><strong>Spring → Summer (May-June):</strong> Spring fashion</li>
                    <li><strong>Summer → Fall (Aug-Sept):</strong> Summer clothing, patio furniture</li>
                    <li><strong>Fall → Winter (Nov-Dec):</strong> Fall items before Black Friday</li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="my-8 border-muted" />

            {/* Store-Specific Sale Calendars */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">🏪 Store-Specific Sale Calendars</h3>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2 text-purple-900 dark:text-purple-400">Department Stores (Macy&apos;s, Nordstrom, Kohl&apos;s):</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Monthly &quot;Friends & Family&quot; events (20-30% off)</li>
                    <li>• Semi-annual sales (June, December)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2 text-blue-900 dark:text-blue-400">Electronics (Best Buy, B&H Photo):</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• <Link href="/black-friday-calculator-20-off" className="text-blue-600 dark:text-blue-400 hover:underline">Black Friday</Link>, Cyber Monday (biggest)</li>
                    <li>• Back to School (July-August)</li>
                    <li>• Super Bowl weekend (TVs)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2 text-amber-900 dark:text-amber-400">Furniture (Ashley, Wayfair, West Elm):</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• President&apos;s Day, Memorial Day, Labor Day</li>
                    <li>• Clearance before new collections arrive</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2 text-green-900 dark:text-green-400">Online Retailers (Amazon, Target.com):</p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Prime Day (July) - Amazon</li>
                    <li>• Circle Week (varies) - Target</li>
                    <li>• Flash sales (check daily)</li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="my-8 border-muted" />

            {/* Tips Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
              <h3 className="text-lg font-bold mb-4">💡 How to Never Miss a 30% Off Sale</h3>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li><strong>1. Sign up for email alerts</strong> - First to know about sales</li>
                <li><strong>2. Follow on social media</strong> - Flash sale announcements</li>
                <li><strong>3. Download store apps</strong> - App-exclusive discounts</li>
                <li><strong>4. Set price alerts</strong> - CamelCamelCamel, Honey, Slickdeals</li>
                <li><strong>5. Shop Tuesday-Thursday</strong> - Quieter, better stock</li>
              </ol>
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
              <h3 className="font-semibold text-lg mb-2">How do you calculate 30% off?</h3>
              <p className="text-muted-foreground">
                To calculate 30% off: multiply the price by 0.30 to get the discount amount, then subtract it from the original price. For example: $500 × 0.30 = $150 discount, so you pay $350.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How do I calculate 30% discount without a calculator?</h3>
              <p className="text-muted-foreground">
                Use the &quot;times 3&quot; method: Find 10% by moving the decimal left, then multiply by 3. For $100: 10% = $10, so 30% = $10 × 3 = $30 discount. Pay $70.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Is 30% off better than Buy One Get One Free (BOGO)?</h3>
              <p className="text-muted-foreground">
                Yes! 30% off one item ($70 on $100) is better than BOGO (two items for $200 = $100 each). However, BOGO is better if you need two items and would buy them anyway.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How much is 30% off $500?</h3>
              <p className="text-muted-foreground">
                30% off $500 = <strong>$150 discount</strong>. You pay <strong>$350</strong>. Quick math: $500 × 0.70 = $350 or (10% = $50, so 30% = $150).
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">What&apos;s the quickest way to calculate 30% discount in a store?</h3>
              <p className="text-muted-foreground">
                Move the decimal left to find 10% ($100 → $10), then multiply by 3 ($10 × 3 = $30). Subtract from price: $100 - $30 = $70. Takes 5 seconds!
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">When do Black Friday sales typically offer 30% off?</h3>
              <p className="text-muted-foreground">
                30% off is common during <strong>Black Friday (Nov 29, 2025)</strong>, electronics, clothing, and home goods. <strong>Cyber Monday</strong> online retailers match Black Friday deals. Also expect 30% off during Memorial Day, July 4th, and Labor Day weekends.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Can I stack 30% off with other discounts?</h3>
              <p className="text-muted-foreground">
                Usually <strong>no</strong>—most retailers don&apos;t allow discount stacking. However, some allow 30% off sale price (already reduced items), store credit card additional 5-10% (check terms), or cashback rewards (separate from store discount). <strong>Pro tip:</strong> Ask at checkout if combining is allowed—policies vary by store.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How do I verify a store&apos;s &quot;30% off&quot; claim is real?</h3>
              <p className="text-muted-foreground">
                1. Check original price online before sale (Google Shopping, CamelCamelCamel for Amazon). 2. Calculate expected price: Original × 0.70. 3. Compare to sale price shown. 4. Be wary if &quot;original price&quot; seems inflated—some retailers raise prices before sales.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Is 30% off a better deal than $30 off?</h3>
              <p className="text-muted-foreground">
                <strong>It depends on the original price:</strong> On $100: 30% off = $30 off = Same deal. On $150: 30% off = $45 off &gt; $30 off = 30% better. On $80: 30% off = $24 off &lt; $30 off = $30 better. <strong>Rule:</strong> If price &gt; $100, percentage discounts are usually better. If price &lt; $100, flat discounts may be better.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How much money do I save with 30% off $1,000?</h3>
              <p className="text-muted-foreground">
                You save <strong>$300</strong> and pay <strong>$700</strong>. Discount: $1,000 × 0.30 = $300. Final price: $1,000 - $300 = $700. Or directly: $1,000 × 0.70 = $700.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">What&apos;s better for Black Friday: 30% off or 25% off + free shipping?</h3>
              <p className="text-muted-foreground">
                <strong>Calculate both:</strong> 30% off $100 = Pay $70 + shipping (e.g., $5-10) = $75-80 total. 25% off $100 + free ship = Pay $75 + $0 = $75 total. If shipping &gt; $5, the second deal is often better. Always calculate the total cost including shipping!
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Do all stores offer 30% off during Black Friday?</h3>
              <p className="text-muted-foreground">
                No, discount amounts vary: <strong>Electronics:</strong> 10-30% (high-ticket items). <strong>Clothing:</strong> 30-50% (fast fashion, seasonal). <strong>Furniture:</strong> 20-40% (clearance models). <strong>Toys:</strong> 20-30% (popular items). 30% is a <strong>solid discount</strong> but not the deepest. Watch for 40-50% off on older inventory.
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
