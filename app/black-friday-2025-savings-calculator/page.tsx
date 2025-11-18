import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Tag, ShoppingCart } from 'lucide-react';
import { CountdownTimer } from '@/components/black-friday/countdown-timer';
import { MultiItemCalculator } from '@/components/black-friday/multi-item-calculator';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Black Friday 2025 Savings Calculator | Track Your Deals | PercentLab',
  description: 'Track all your Black Friday 2025 deals in one place. Compare multiple items, calculate total savings, and maximize your Nov 29 shopping. Free multi-item calculator.',
  alternates: {
    canonical: 'https://www.percentlab.app/black-friday-2025-savings-calculator',
  },
  keywords: [
    'black friday 2025',
    'savings calculator',
    'black friday deals tracker',
    'november 29 2025',
    'multi item calculator',
    'shopping savings',
    'deal comparison',
    'black friday total savings',
  ],
  openGraph: {
    title: 'Black Friday 2025 Savings Calculator | Track Your Deals',
    description: 'Track multiple Black Friday deals and calculate total savings for Nov 29, 2025.',
    type: 'article',
    url: 'https://www.percentlab.app/black-friday-2025-savings-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Friday 2025 Savings Calculator',
    description: 'Track all your Black Friday deals and maximize savings.',
  },
};

export default function Page() {
  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        name: 'How to Track Black Friday 2025 Savings',
        description: 'Track multiple deals and calculate total Black Friday savings',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Step 1',
            text: 'Add each item you plan to buy with its original price',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Step 2',
            text: 'Enter the discount percentage for each item',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Step 3',
            text: 'View your total savings across all items instantly',
          },
        ],
        totalTime: 'PT2M',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'When is Black Friday 2025?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Black Friday 2025 is on Friday, November 29, 2025. Sales typically begin on Thanksgiving evening (Thursday, November 28) and continue through Cyber Monday (December 1).',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I maximize my Black Friday 2025 savings?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Track all deals in advance, compare prices across stores, stack coupons with sale prices, use cashback apps, and sign up for early access emails from your favorite retailers.',
            },
          },
          {
            '@type': 'Question',
            name: 'What are typical Black Friday discount percentages?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Black Friday discounts typically range from 20% to 70% off. Electronics often see 20-40% off, clothing 30-50% off, and select doorbuster items can be 50-70% off.',
            },
          },
        ],
      },
    ],
  };

  const relatedBlackFridayPages = [
    { title: '20% Off Black Friday Calculator', slug: 'black-friday-calculator-20-off' },
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
        <div className="bg-gradient-to-r from-black via-red-600 to-black text-white p-4 rounded-lg mb-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
            <span className="font-bold text-lg">BLACK FRIDAY 2025 SPECIAL</span>
            <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-sm mt-1">Track all your deals in one place!</p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Black Friday 2025 Savings Calculator
          </h1>
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-3 rounded-lg text-xl font-bold mb-4">
            <ShoppingCart className="inline h-5 w-5 mr-2" />
            Track Multiple Deals
          </div>
          <p className="text-xl text-muted-foreground">
            Compare multiple Black Friday deals and calculate total savings for November 29, 2025
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-8 border-2 border-green-500">
          <CardHeader className="bg-green-50">
            <CardTitle>Why Track Your Black Friday Savings?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">
              Planning to buy multiple items on Black Friday? Our calculator lets you track all your deals, compare discounts, and see your <strong className="text-green-700">total savings</strong> in real-time. Stay within budget while maximizing your Black Friday 2025 deals!
            </p>
          </CardContent>
        </Card>

        {/* Multi-Item Calculator */}
        <MultiItemCalculator />

        {/* Ad Slot */}
        <div className="ad-slot my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Real Black Friday Shopping Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Real Black Friday 2025 Shopping Scenarios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Scenario 1 */}
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-bold text-lg mb-2">🏡 Home Office Setup</h3>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-3 gap-2">
                    <span>Gaming Laptop</span>
                    <span className="text-gray-600">$1,200 - 25% off</span>
                    <span className="text-green-700 font-semibold">Pay $900</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span>Monitor 27"</span>
                    <span className="text-gray-600">$300 - 30% off</span>
                    <span className="text-green-700 font-semibold">Pay $210</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span>Office Chair</span>
                    <span className="text-gray-600">$400 - 40% off</span>
                    <span className="text-green-700 font-semibold">Pay $240</span>
                  </div>
                  <div className="border-t pt-2 font-bold text-red-600">
                    Total Savings: $610 • You Pay: $1,350 (instead of $1,900)
                  </div>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-bold text-lg mb-2">🎮 Gaming Setup</h3>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-3 gap-2">
                    <span>PlayStation 5</span>
                    <span className="text-gray-600">$500 - 15% off</span>
                    <span className="text-green-700 font-semibold">Pay $425</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span>4K TV 55"</span>
                    <span className="text-gray-600">$600 - 30% off</span>
                    <span className="text-green-700 font-semibold">Pay $420</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span>Gaming Headset</span>
                    <span className="text-gray-600">$150 - 25% off</span>
                    <span className="text-green-700 font-semibold">Pay $112.50</span>
                  </div>
                  <div className="border-t pt-2 font-bold text-red-600">
                    Total Savings: $292.50 • You Pay: $957.50 (instead of $1,250)
                  </div>
                </div>
              </div>

              {/* Scenario 3 */}
              <div className="border-l-4 border-black pl-4">
                <h3 className="font-bold text-lg mb-2">👨‍👩‍👧 Family Shopping</h3>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-3 gap-2">
                    <span>Winter Coats (4)</span>
                    <span className="text-gray-600">$400 - 40% off</span>
                    <span className="text-green-700 font-semibold">Pay $240</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span>Kitchen Appliances</span>
                    <span className="text-gray-600">$300 - 35% off</span>
                    <span className="text-green-700 font-semibold">Pay $195</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span>Toys & Games</span>
                    <span className="text-gray-600">$200 - 50% off</span>
                    <span className="text-green-700 font-semibold">Pay $100</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span>Smart Watch</span>
                    <span className="text-gray-600">$250 - 20% off</span>
                    <span className="text-green-700 font-semibold">Pay $200</span>
                  </div>
                  <div className="border-t pt-2 font-bold text-red-600">
                    Total Savings: $415 • You Pay: $735 (instead of $1,150)
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Black Friday 2025 Shopping Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  1
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Make a list early</strong> - Track prices in October to know if Black Friday deals are truly good
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  2
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Set a budget</strong> - Use this calculator to plan your total spending before Nov 29
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  3
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Compare stores</strong> - Target, Best Buy, Walmart, and Amazon all have different deals
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  4
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Stack savings</strong> - Combine store sales with cashback apps (Rakuten, Honey) and credit card rewards
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white flex items-center justify-center font-semibold">
                  5
                </span>
                <span className="text-muted-foreground flex-1 pt-1">
                  <strong>Shop early</strong> - Many deals start Thanksgiving evening or even earlier online
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
              <h3 className="font-semibold text-lg mb-2">When is Black Friday 2025?</h3>
              <p className="text-muted-foreground">
                Black Friday 2025 is on Friday, November 29, 2025. Sales typically begin on Thanksgiving evening (Thursday, November 28) and continue through Cyber Monday (December 1).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How can I maximize my Black Friday 2025 savings?</h3>
              <p className="text-muted-foreground">
                Track all deals in advance using this calculator, compare prices across stores, stack coupons with sale prices, use cashback apps like Rakuten or Honey, and sign up for early access emails from your favorite retailers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">What are typical Black Friday discount percentages?</h3>
              <p className="text-muted-foreground">
                Black Friday discounts typically range from 20% to 70% off. Electronics often see 20-40% off, clothing 30-50% off, and select doorbuster items can be 50-70% off. The biggest savings are usually on TVs, laptops, and home goods.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Should I shop online or in-store for Black Friday 2025?</h3>
              <p className="text-muted-foreground">
                Both have advantages! Online shopping lets you compare prices faster and avoid crowds, while in-store shopping gives access to exclusive doorbuster deals. Many shoppers do both - ordering online Thursday night and hitting stores Friday morning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Which stores have the best Black Friday 2025 deals?</h3>
              <p className="text-muted-foreground">
                Best Buy (electronics), Target (variety), Walmart (everything), Amazon (online), Macy&apos;s (clothing), Kohl&apos;s (home goods + Kohl&apos;s Cash), and Home Depot (tools/appliances) typically offer the best deals. Compare prices across all of them!
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How do I avoid overspending on Black Friday?</h3>
              <p className="text-muted-foreground">
                Set a firm budget before shopping, make a list of needed items only, avoid impulse buys, and use this calculator to track your total spending in real-time. Unsubscribe from promotional emails after Black Friday to reduce temptation!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Related Calculators */}
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
                  className="flex items-center justify-between p-4 rounded-lg border-2 border-yellow-400 hover:bg-yellow-50 transition-colors group"
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
        <Card className="bg-gradient-to-r from-black to-red-900 text-white">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Dominate Black Friday 2025?</h3>
            <p className="mb-6 text-gray-200">
              Start tracking your deals now and maximize your November 29 savings!
            </p>
            <Link
              href="/black-friday-calculator-20-off"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-yellow-500 text-black hover:bg-yellow-400 h-12 px-8 py-2 transition-colors"
              aria-label="Calculate specific discounts"
            >
              <Zap className="mr-2 h-5 w-5" />
              Calculate Specific Discounts
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
