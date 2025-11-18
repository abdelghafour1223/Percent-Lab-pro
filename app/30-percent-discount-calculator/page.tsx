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
        <div className="bg-gradient-to-r from-black via-red-600 to-black text-white p-4 rounded-lg mb-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
            <span className="font-bold text-lg">BLACK FRIDAY 2025 READY</span>
            <Zap className="h-5 w-5 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-sm mt-1">Perfect for holiday sales - Calculate 30% off discounts!</p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            30% Discount Calculator: Sale Savings
          </h1>
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-3 rounded-lg text-xl font-bold mb-4">
            <Percent className="inline h-5 w-5 mr-2" />
            Instant Results
          </div>
          <p className="text-xl text-muted-foreground">
            Calculate 30% off for Black Friday, Cyber Monday & holiday sales
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-8 border-2 border-green-500">
          <CardHeader className="bg-green-50">
            <CardTitle>Quick Answer Example</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">
              <strong className="text-2xl text-green-700">Save $150</strong> on a $500 item with 30% off!
            </p>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
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
            <CardTitle>Visual Discount Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
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
            <CardTitle className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-yellow-500" />
              Real Shopping Examples (30% Off)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* Electronics */}
              <h3 className="font-bold text-lg mt-4 mb-3 text-red-600">📱 Electronics & Tech</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold">MacBook Air M2</p>
                <p className="text-muted-foreground text-sm">
                  Was <span className="line-through">$1,000</span> • 30% off = <strong className="text-red-600">Save $300</strong> • Pay <strong className="text-green-700">$700</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold">Samsung 4K TV - 65&quot;</p>
                <p className="text-muted-foreground text-sm">
                  Was <span className="line-through">$800</span> • 30% off = <strong className="text-red-600">Save $240</strong> • Pay <strong className="text-green-700">$560</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold">iPad Pro 11&quot;</p>
                <p className="text-muted-foreground text-sm">
                  Was <span className="line-through">$700</span> • 30% off = <strong className="text-red-600">Save $210</strong> • Pay <strong className="text-green-700">$490</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold">AirPods Pro (2nd Gen)</p>
                <p className="text-muted-foreground text-sm">
                  Was <span className="line-through">$250</span> • 30% off = <strong className="text-red-600">Save $75</strong> • Pay <strong className="text-green-700">$175</strong>
                </p>
              </div>

              {/* Clothing & Fashion */}
              <h3 className="font-bold text-lg mt-6 mb-3 text-red-600">👗 Clothing & Fashion</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-semibold">Designer Leather Jacket</p>
                <p className="text-muted-foreground text-sm">
                  Was <span className="line-through">$300</span> • 30% off = <strong className="text-red-600">Save $90</strong> • Pay <strong className="text-green-700">$210</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-semibold">Winter Boots - Timberland</p>
                <p className="text-muted-foreground text-sm">
                  Was <span className="line-through">$180</span> • 30% off = <strong className="text-red-600">Save $54</strong> • Pay <strong className="text-green-700">$126</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="font-semibold">Wool Sweater</p>
                <p className="text-muted-foreground text-sm">
                  Was <span className="line-through">$90</span> • 30% off = <strong className="text-red-600">Save $27</strong> • Pay <strong className="text-green-700">$63</strong>
                </p>
              </div>

              {/* Home & Furniture */}
              <h3 className="font-bold text-lg mt-6 mb-3 text-red-600">🛋️ Home & Furniture</h3>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg border-l-4 border-black">
                <p className="font-semibold">Sectional Sofa</p>
                <p className="text-muted-foreground text-sm">
                  Was <span className="line-through">$1,500</span> • 30% off = <strong className="text-red-600">Save $450</strong> • Pay <strong className="text-green-700">$1,050</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg border-l-4 border-black">
                <p className="font-semibold">Mattress - King Size</p>
                <p className="text-muted-foreground text-sm">
                  Was <span className="line-through">$900</span> • 30% off = <strong className="text-red-600">Save $270</strong> • Pay <strong className="text-green-700">$630</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg border-l-4 border-black">
                <p className="font-semibold">Dining Table Set (6 chairs)</p>
                <p className="text-muted-foreground text-sm">
                  Was <span className="line-through">$600</span> • 30% off = <strong className="text-red-600">Save $180</strong> • Pay <strong className="text-green-700">$420</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg border-l-4 border-black">
                <p className="font-semibold">Instant Pot - 8 Quart</p>
                <p className="text-muted-foreground text-sm">
                  Was <span className="line-through">$120</span> • 30% off = <strong className="text-red-600">Save $36</strong> • Pay <strong className="text-green-700">$84</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Calculate */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Calculate 30% Off Discounts</CardTitle>
          </CardHeader>
          <CardContent>
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
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
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
            <CardTitle>Related Sale Calculators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {relatedPages.map((page) => (
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
            <h3 className="text-2xl font-bold mb-3">Need to Track Multiple Discounts?</h3>
            <p className="mb-6 text-gray-200">
              Use our multi-item calculator to track all your Black Friday savings!
            </p>
            <Link
              href="/black-friday-2025-savings-calculator"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-yellow-500 text-black hover:bg-yellow-400 h-12 px-8 py-2 transition-colors"
              aria-label="Track multiple Black Friday deals"
            >
              <Zap className="mr-2 h-5 w-5" />
              Track All My Deals
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
