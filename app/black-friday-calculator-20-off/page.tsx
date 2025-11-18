import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ComparisonChart } from '@/components/percentage-chart';
import { ArrowRight, Zap, Tag } from 'lucide-react';
import { CountdownTimer } from '@/components/black-friday/countdown-timer';
import { DiscountCalculator } from '@/components/black-friday/discount-calculator';

// Metadata for SEO
export const metadata: Metadata = {
  title: '20% Off Black Friday Calculator 2025 [Free Tool] | PercentLab',
  description: 'Calculate Black Friday 20% off discounts instantly. See real examples from electronics, clothing, and home goods. Free calculator for Nov 29, 2025 savings.',
  alternates: {
    canonical: 'https://www.percentlab.app/black-friday-calculator-20-off',
  },
  keywords: [
    'black friday calculator',
    '20% off calculator',
    'black friday 2025',
    'discount calculator',
    'black friday savings',
    'november 29 2025',
    '20 percent off',
    'black friday deals calculator',
  ],
  openGraph: {
    title: '20% Off Black Friday Calculator 2025 [Free Tool]',
    description: 'Calculate your Black Friday 20% off savings instantly. Free tool for Nov 29, 2025 deals.',
    type: 'article',
    url: 'https://www.percentlab.app/black-friday-calculator-20-off',
  },
  twitter: {
    card: 'summary_large_image',
    title: '20% Off Black Friday Calculator 2025',
    description: 'Calculate Black Friday 20% discounts instantly with real examples.',
  },
};

export default function Page() {
  const percent = 20;
  const examplePrice = 500;
  const savings = 100;

  // JSON-LD structured data with FAQ
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        name: 'How to Calculate 20% Off Black Friday Discount',
        description: 'Step-by-step guide to calculate Black Friday 20% discount savings',
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
            text: 'Multiply by 0.20 (20% as a decimal) to find your savings',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Step 3',
            text: 'Subtract the savings from the original price to get the final price',
          },
        ],
        totalTime: 'PT1M',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much do I save with 20% off on Black Friday?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'With a 20% discount, you save $20 for every $100 spent. For example, a $500 TV would save you $100, costing only $400.',
            },
          },
          {
            '@type': 'Question',
            name: 'When is Black Friday 2025?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Black Friday 2025 is on November 29, 2025. Most sales start on Thanksgiving evening (Nov 28) and run through the weekend.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is 20% off a good Black Friday deal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '20% off is a solid discount, especially on big-ticket items like TVs, laptops, and furniture. However, some retailers offer deeper discounts (30-50% off) on select items during Black Friday.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which stores offer 20% Black Friday discounts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Major US retailers like Target, Best Buy, Walmart, Amazon, Macy\'s, and Kohl\'s typically offer 20% off deals during Black Friday.',
            },
          },
        ],
      },
    ],
  };

  const relatedBlackFridayPages = [
    { title: 'Black Friday 2025 Savings Calculator', slug: 'black-friday-2025-savings-calculator' },
    { title: '30% Discount Calculator', slug: '30-percent-discount-calculator' },
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
        <div className="bg-gradient-to-r from-black via-red-600 to-black dark:from-red-900 dark:via-yellow-900 dark:to-black text-white p-3 sm:p-4 rounded-lg mb-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
            <span className="font-bold text-base sm:text-lg">BLACK FRIDAY 2025 SPECIAL</span>
            <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-sm mt-1">Free calculator for instant savings calculations!</p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            20% Off Black Friday Calculator 2025
          </h1>
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-3 rounded-lg text-xl font-bold mb-4">
            <Tag className="inline h-5 w-5 mr-2" />
            Free Tool - Instant Results
          </div>
          <p className="text-xl text-muted-foreground">
            Calculate your Black Friday savings instantly with 20% off deals
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-8 border-2 border-green-500">
          <CardHeader className="bg-green-50">
            <CardTitle>Quick Answer Example</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">
              <strong className="text-2xl text-green-700">You save $100</strong> on a $500 item with 20% off!
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              $500 × 0.20 = $100 savings • Final price: $400
            </div>
          </CardContent>
        </Card>

        {/* Interactive Calculator */}
        <DiscountCalculator
          defaultPrice="500"
          discountPercent={20}
          title="20% Off Black Friday Calculator"
        />

        {/* Visual Representation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Visual Savings Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ComparisonChart
              value1={savings}
              value2={examplePrice - savings}
              label1={`Your Savings ($${savings})`}
              label2={`You Pay ($${examplePrice - savings})`}
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Example: $500 item with 20% Black Friday discount
            </p>
          </CardContent>
        </Card>

        {/* Ad Slot */}
        <div className="ad-slot my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Real Black Friday Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Real Black Friday 2025 Examples (20% Off)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* Electronics */}
              <h3 className="font-bold text-lg mt-4 mb-3 text-red-600">📺 Electronics Deals</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-700">
                <p className="font-semibold">4K Smart TV - 55&quot;</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$500</span> • 20% off = <strong className="text-red-600">Save $100</strong> • Pay <strong className="text-green-700">$400</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-700">
                <p className="font-semibold">Gaming Laptop - RTX 4060</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$800</span> • 20% off = <strong className="text-red-600">Save $160</strong> • Pay <strong className="text-green-700">$640</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-700">
                <p className="font-semibold">Apple iPad Air</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$600</span> • 20% off = <strong className="text-red-600">Save $120</strong> • Pay <strong className="text-green-700">$480</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-700">
                <p className="font-semibold">Sony Wireless Headphones</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$300</span> • 20% off = <strong className="text-red-600">Save $60</strong> • Pay <strong className="text-green-700">$240</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-700">
                <p className="font-semibold">Nintendo Switch OLED</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$350</span> • 20% off = <strong className="text-red-600">Save $70</strong> • Pay <strong className="text-green-700">$280</strong>
                </p>
              </div>

              {/* Clothing */}
              <h3 className="font-bold text-lg mt-6 mb-3 text-red-600">👕 Clothing Deals</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-700">
                <p className="font-semibold">Winter Jacket - North Face</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$200</span> • 20% off = <strong className="text-red-600">Save $40</strong> • Pay <strong className="text-green-700">$160</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-700">
                <p className="font-semibold">Designer Jeans</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$100</span> • 20% off = <strong className="text-red-600">Save $20</strong> • Pay <strong className="text-green-700">$80</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-red-500 dark:border-red-700">
                <p className="font-semibold">Nike Running Shoes</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$120</span> • 20% off = <strong className="text-red-600">Save $24</strong> • Pay <strong className="text-green-700">$96</strong>
                </p>
              </div>

              {/* Home Goods */}
              <h3 className="font-bold text-lg mt-6 mb-3 text-red-600">🏠 Home Goods Deals</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-black dark:border-gray-600">
                <p className="font-semibold">Dyson Vacuum Cleaner</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$400</span> • 20% off = <strong className="text-red-600">Save $80</strong> • Pay <strong className="text-green-700">$320</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-black dark:border-gray-600">
                <p className="font-semibold">KitchenAid Stand Mixer</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$450</span> • 20% off = <strong className="text-red-600">Save $90</strong> • Pay <strong className="text-green-700">$360</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/10 dark:to-red-950/10 p-3 sm:p-4 rounded-lg border-l-4 border-black dark:border-gray-600">
                <p className="font-semibold">Memory Foam Mattress - Queen</p>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Was <span className="line-through">$700</span> • 20% off = <strong className="text-red-600">Save $140</strong> • Pay <strong className="text-green-700">$560</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Calculate */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Calculate 20% Off Black Friday Discounts</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  1
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Find the original price</strong> - Look at the product tag or website listing
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  2
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Calculate savings</strong> - Multiply the price by 0.20 (that&apos;s 20% as a decimal)
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  3
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Get final price</strong> - Subtract the savings from the original price
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  ✓
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Example:</strong> $500 TV → $500 × 0.20 = $100 savings → Final: $400
                </span>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Black Friday 2025 - Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">How much do I save with 20% off on Black Friday?</h3>
              <p className="text-muted-foreground">
                With a 20% discount, you save $20 for every $100 spent. For example, a $500 TV would save you $100, costing only $400.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">When is Black Friday 2025?</h3>
              <p className="text-muted-foreground">
                Black Friday 2025 is on November 29, 2025. Most sales start on Thanksgiving evening (Nov 28) and run through the weekend.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Is 20% off a good Black Friday deal?</h3>
              <p className="text-muted-foreground">
                20% off is a solid discount, especially on big-ticket items like TVs, laptops, and furniture. However, some retailers offer deeper discounts (30-50% off) on select items during Black Friday.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Which stores offer 20% Black Friday discounts?</h3>
              <p className="text-muted-foreground">
                Major US retailers like Target, Best Buy, Walmart, Amazon, Macy&apos;s, and Kohl&apos;s typically offer 20% off deals during Black Friday. Some stores combine percentages with doorbuster prices for even bigger savings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I stack coupons with 20% Black Friday sales?</h3>
              <p className="text-muted-foreground">
                This depends on the retailer. Some stores allow stacking store coupons with Black Friday discounts, while others exclude sale items from additional promotions. Always check the fine print!
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What&apos;s the best way to maximize Black Friday savings?</h3>
              <p className="text-muted-foreground">
                Compare prices across stores, use cashback apps (Rakuten, Honey), stack with credit card rewards, and sign up for store emails to get early access codes. The 20% discount is just the starting point!
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Do online Black Friday deals match in-store 20% discounts?</h3>
              <p className="text-muted-foreground">
                Most major retailers offer the same 20% discounts both online and in-store, but some doorbuster deals are in-store only. Shopping online helps you avoid crowds and compare prices faster.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How do I calculate 20% off without a calculator?</h3>
              <p className="text-muted-foreground">
                Quick mental math: Find 10% by moving the decimal left one place, then double it. Example: $500 → 10% = $50 → 20% = $100. Subtract from original: $500 - $100 = $400.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Related Black Friday Calculators */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Related Black Friday Calculators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {relatedBlackFridayPages.map((page) => (
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
            <h3 className="text-2xl font-bold mb-3">Ready for Black Friday 2025?</h3>
            <p className="mb-6 text-gray-200">
              Calculate all your Black Friday savings and track the best deals!
            </p>
            <Link
              href="/black-friday-2025-savings-calculator"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-yellow-500 text-black hover:bg-yellow-400 h-12 px-8 py-2 transition-colors"
              aria-label="Track all Black Friday savings"
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
