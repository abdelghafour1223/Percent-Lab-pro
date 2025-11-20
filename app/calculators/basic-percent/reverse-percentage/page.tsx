import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ComparisonChart } from '@/components/percentage-chart';
import { ArrowRight, Calculator, ShoppingCart, TrendingUp, GraduationCap, Zap, AlertCircle } from 'lucide-react';
import { CountdownTimer } from '@/components/black-friday/countdown-timer';
import { ReversePercentageCalculator } from '@/components/reverse-percentage-calculator';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Reverse Percentage Calculator: Find Original Price [2025] | PercentLab',
  description: 'Calculate the original price before discount. Perfect for verifying Black Friday deals and shopping sales. Free calculator with step-by-step guide and real examples.',
  alternates: {
    canonical: 'https://www.percentlab.app/calculators/basic-percent/reverse-percentage',
  },
  keywords: [
    'reverse percentage calculator find original price',
    'original price calculator',
    'find price before discount',
    'verify black friday deals',
    'reverse percentage',
    'calculate original price',
    'price before discount calculator',
    'black friday verification',
  ],
  openGraph: {
    title: 'Reverse Percentage Calculator: Find Original Price [2025]',
    description: 'Calculate the original price before discount. Perfect for verifying Black Friday deals.',
    type: 'article',
    url: 'https://www.percentlab.app/calculators/basic-percent/reverse-percentage',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reverse Percentage Calculator: Find Original Price [2025]',
    description: 'Verify Black Friday deals and calculate original prices before discounts.',
  },
};

export default function Page() {
  // JSON-LD structured data - Multiple schemas for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Reverse Percentage Calculator',
        'url': 'https://www.percentlab.app/calculators/basic-percent/reverse-percentage',
        'applicationCategory': 'CalculatorApplication',
        'operatingSystem': 'Any',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'description': 'Calculate the original price before discount. Perfect for verifying Black Friday deals and shopping sales.',
        'featureList': [
          'Find original price before discount',
          'Verify Black Friday deals',
          'Calculate reverse percentage',
          'Step-by-step calculation guide',
          'Real-world shopping examples'
        ]
      },
      {
        '@type': 'HowTo',
        'name': 'How to Calculate Original Price Before Discount',
        'description': 'Step-by-step guide to find the original price when you know the discounted price',
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': 'Step 1: Convert percentage to decimal',
            'text': 'Convert the discount percentage to decimal. For 20%, use 0.20',
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': 'Step 2: Subtract from 1',
            'text': 'Subtract the decimal from 1. For 20% discount: 1 - 0.20 = 0.80',
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'Step 3: Divide final price',
            'text': 'Divide the final price by the result. $80 ÷ 0.80 = $100 original price',
          },
        ],
        'totalTime': 'PT2M',
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How do I find the original price before a discount?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Divide the final price by (1 minus the discount rate). For example, if an item costs $80 after a 20% discount: $80 ÷ (1 - 0.20) = $80 ÷ 0.80 = $100.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How can I verify Black Friday deals are real?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Use the reverse percentage calculator to find the "original price" claimed in the ad. Then check if that price was actually charged before Black Friday. If the original price was inflated just before the sale, the deal may be fake.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What\'s the difference between forward and reverse percentage?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Forward percentage calculates the final price after a discount (e.g., 20% off $100 = $80). Reverse percentage works backward to find the original price when you only know the final price ($80 after 20% off = $100 original).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I use this calculator for percentage increases?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes! For increases, use the same formula. If something is now $120 after a 20% increase, the original was: $120 ÷ (1 + 0.20) = $120 ÷ 1.20 = $100.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do stores fake Black Friday discounts?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Some stores raise prices 2-3 weeks before Black Friday, then apply a "discount" that brings it back to the regular price. Use this calculator to verify the math matches their claims.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is 30% off better than "Buy One Get One 50% Off"?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Use the calculator to compare: 30% off one item vs. the effective discount of BOGO 50% (which is 25% off total). The 30% single discount is usually better.'
            }
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.percentlab.app'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Calculators',
            'item': 'https://www.percentlab.app/#categories'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Basic Percentage',
            'item': 'https://www.percentlab.app/calculators/basic-percent'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'Reverse Percentage Calculator',
            'item': 'https://www.percentlab.app/calculators/basic-percent/reverse-percentage'
          }
        ]
      }
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#categories" className="hover:text-primary transition-colors">
            Categories
          </Link>
          <span>/</span>
          <Link href="/calculators/basic-percent" className="hover:text-primary transition-colors">
            Basic Percentage
          </Link>
          <span>/</span>
          <span className="text-foreground">Reverse Percentage Calculator</span>
        </nav>

        {/* Black Friday Countdown Timer */}
        <CountdownTimer />

        {/* Hero Section */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Reverse Percentage Calculator: Find Original Price
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Verify Black Friday deals and calculate original prices before discounts
          </p>

          {/* Quick Answer Box */}
          <Card className="border-2 border-blue-500 dark:border-blue-700">
            <CardHeader className="bg-blue-50 dark:bg-blue-950/20">
              <CardTitle className="text-base md:text-lg">Quick Answer Example</CardTitle>
            </CardHeader>
            <CardContent className="px-4 md:px-6">
              <p className="text-base md:text-lg mb-4">
                <strong className="text-xl md:text-2xl text-blue-700 dark:text-blue-500 block mb-2">
                  Item costs $80 after 20% discount
                </strong>
                → Original Price was <strong className="text-green-700 dark:text-green-500">$100</strong><br />
                → You saved <strong className="text-red-600 dark:text-red-500">$20</strong>
              </p>
              <div className="bg-muted dark:bg-muted/50 p-3 md:p-4 rounded-lg font-mono text-xs md:text-sm">
                $80 ÷ (1 - 0.20) = $80 ÷ 0.80 = $100
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Calculator */}
        <ReversePercentageCalculator />

        {/* Ad Slot */}
        <div className="ad-slot my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Black Friday Verification Section */}
        <Card className="mb-8 border-2 border-yellow-500 dark:border-yellow-600">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20">
            <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
              <Zap className="h-6 w-6 text-yellow-600 dark:text-yellow-500" />
              Verify Black Friday 2025 Deals
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <p className="text-muted-foreground mb-6">
              Use this calculator to check if Black Friday discounts are real. Here are real-world examples:
            </p>

            <div className="space-y-6">
              {/* Example 1: 4K Smart TV */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 p-4 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📺</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">4K Smart TV</h3>
                    <div className="space-y-1 text-sm">
                      <p>• Listed at <strong>$420</strong> after "30% Black Friday discount"</p>
                      <p className="font-mono bg-white/50 dark:bg-black/20 p-2 rounded">
                        Original price: $420 ÷ (1 - 0.30) = $420 ÷ 0.70 = <strong className="text-blue-700 dark:text-blue-500">$600</strong>
                      </p>
                      <p className="text-green-700 dark:text-green-500">✅ Actual savings: <strong>$180</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 2: Gaming Laptop */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 p-4 rounded-lg border-l-4 border-purple-600">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💻</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Gaming Laptop</h3>
                    <div className="space-y-1 text-sm">
                      <p>• Listed at <strong>$800</strong> after "20% off"</p>
                      <p className="font-mono bg-white/50 dark:bg-black/20 p-2 rounded">
                        Original price: $800 ÷ (1 - 0.20) = $800 ÷ 0.80 = <strong className="text-purple-700 dark:text-purple-500">$1,000</strong>
                      </p>
                      <p className="text-green-700 dark:text-green-500">✅ Actual savings: <strong>$200</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 3: Nike Running Shoes */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 p-4 rounded-lg border-l-4 border-orange-600">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👟</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Nike Running Shoes</h3>
                    <div className="space-y-1 text-sm">
                      <p>• Listed at <strong>$80</strong> after "20% Black Friday sale"</p>
                      <p className="font-mono bg-white/50 dark:bg-black/20 p-2 rounded">
                        Original price: $80 ÷ (1 - 0.20) = $80 ÷ 0.80 = <strong className="text-orange-700 dark:text-orange-500">$100</strong>
                      </p>
                      <p className="text-green-700 dark:text-green-500">✅ Actual savings: <strong>$20</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 4: PlayStation 5 Bundle */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 p-4 rounded-lg border-l-4 border-green-600">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎮</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">PlayStation 5 Bundle</h3>
                    <div className="space-y-1 text-sm">
                      <p>• Listed at <strong>$425</strong> after "15% discount"</p>
                      <p className="font-mono bg-white/50 dark:bg-black/20 p-2 rounded">
                        Original price: $425 ÷ (1 - 0.15) = $425 ÷ 0.85 = <strong className="text-green-700 dark:text-green-500">$500</strong>
                      </p>
                      <p className="text-green-700 dark:text-green-500">✅ Actual savings: <strong>$75</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 5: AirPods Pro */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 p-4 rounded-lg border-l-4 border-red-600">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎧</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">AirPods Pro</h3>
                    <div className="space-y-1 text-sm">
                      <p>• Listed at <strong>$195</strong> after "25% Black Friday deal"</p>
                      <p className="font-mono bg-white/50 dark:bg-black/20 p-2 rounded">
                        Original price: $195 ÷ (1 - 0.25) = $195 ÷ 0.75 = <strong className="text-red-700 dark:text-red-500">$260</strong>
                      </p>
                      <p className="text-green-700 dark:text-green-500">✅ Actual savings: <strong>$65</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border-2 border-yellow-500 dark:border-yellow-600 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Spot Fake Discounts</h4>
                    <p className="text-sm text-muted-foreground">
                      Some retailers inflate the "original price" right before Black Friday. Always compare the calculated original price with historical prices on sites like CamelCamelCamel or Keepa for Amazon products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step-by-Step Guide Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">How to Calculate Original Price (Step-by-Step)</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            {/* Method 1 */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-primary">Method 1: Division Formula (Fastest)</h3>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg mb-4">
                <p className="font-bold text-lg mb-2">Formula:</p>
                <p className="font-mono text-base md:text-lg">
                  Original Price = Final Price ÷ (1 - Discount%)
                </p>
              </div>

              <p className="font-semibold mb-3">Example: Item costs $80 after 20% discount</p>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    1
                  </span>
                  <div className="flex-1 pt-2">
                    <strong>Convert percentage to decimal</strong>
                    <p className="text-muted-foreground mt-1">20% = 20 ÷ 100 = 0.20</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    2
                  </span>
                  <div className="flex-1 pt-2">
                    <strong>Subtract from 1</strong>
                    <p className="text-muted-foreground mt-1">1 - 0.20 = 0.80</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    3
                  </span>
                  <div className="flex-1 pt-2">
                    <strong>Divide final price by result</strong>
                    <p className="text-muted-foreground mt-1">$80 ÷ 0.80 = $100</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <div className="flex-1 pt-2">
                    <strong className="text-green-700 dark:text-green-500">The original price was $100</strong>
                  </div>
                </li>
              </ol>
            </div>

            {/* Method 2 */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary">Method 2: Find 1% First (No Calculator Needed)</h3>
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg mb-4">
                <p className="font-bold text-lg mb-2">Mental Math Method</p>
                <p className="text-muted-foreground">
                  Great for quick calculations without a calculator
                </p>
              </div>

              <p className="font-semibold mb-3">Example: Item costs $210 after 30% discount</p>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    1
                  </span>
                  <div className="flex-1 pt-2">
                    <strong>Determine what percentage the final price represents</strong>
                    <p className="text-muted-foreground mt-1">100% - 30% = 70%</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    2
                  </span>
                  <div className="flex-1 pt-2">
                    <strong>Find 1%</strong>
                    <p className="text-muted-foreground mt-1">$210 ÷ 70 = $3</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    3
                  </span>
                  <div className="flex-1 pt-2">
                    <strong>Find 100%</strong>
                    <p className="text-muted-foreground mt-1">$3 × 100 = $300</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <div className="flex-1 pt-2">
                    <strong className="text-green-700 dark:text-green-500">The original price was $300</strong>
                  </div>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Formula Explanation Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">The Formula Explained</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">Basic Formula</h3>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 p-6 rounded-lg border-2 border-purple-500 dark:border-purple-600">
                <p className="font-mono text-lg md:text-xl text-center font-bold">
                  Original Price = Final Price ÷ (1 - Discount Rate)
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">Why This Works</h3>
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <p>• If an item has 20% off, you're paying 80% (100% - 20%)</p>
                <p>• Dividing by 0.80 "reverses" the discount to find 100%</p>
                <p>• Think of it as: If $80 is 80%, what is 100%?</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Quick Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-muted-foreground/20 p-3 text-left">Discount</th>
                      <th className="border border-muted-foreground/20 p-3 text-left">You Pay</th>
                      <th className="border border-muted-foreground/20 p-3 text-left">Divide By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-muted-foreground/20 p-3">10% off</td>
                      <td className="border border-muted-foreground/20 p-3">90%</td>
                      <td className="border border-muted-foreground/20 p-3 font-mono">0.90</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-muted-foreground/20 p-3">20% off</td>
                      <td className="border border-muted-foreground/20 p-3">80%</td>
                      <td className="border border-muted-foreground/20 p-3 font-mono">0.80</td>
                    </tr>
                    <tr>
                      <td className="border border-muted-foreground/20 p-3">25% off</td>
                      <td className="border border-muted-foreground/20 p-3">75%</td>
                      <td className="border border-muted-foreground/20 p-3 font-mono">0.75</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-muted-foreground/20 p-3">30% off</td>
                      <td className="border border-muted-foreground/20 p-3">70%</td>
                      <td className="border border-muted-foreground/20 p-3 font-mono">0.70</td>
                    </tr>
                    <tr>
                      <td className="border border-muted-foreground/20 p-3">40% off</td>
                      <td className="border border-muted-foreground/20 p-3">60%</td>
                      <td className="border border-muted-foreground/20 p-3 font-mono">0.60</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="border border-muted-foreground/20 p-3">50% off</td>
                      <td className="border border-muted-foreground/20 p-3">50%</td>
                      <td className="border border-muted-foreground/20 p-3 font-mono">0.50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ad Slot */}
        <div className="ad-slot my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Use Cases Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">When to Use This Calculator</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Shopping & Black Friday */}
              <div className="bg-gradient-to-br from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/20 p-5 rounded-lg border-2 border-yellow-500 dark:border-yellow-600">
                <div className="flex items-center gap-3 mb-3">
                  <ShoppingCart className="h-8 w-8 text-yellow-600 dark:text-yellow-500" />
                  <h3 className="font-bold text-lg">Shopping & Black Friday</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Verify advertised Black Friday discounts are real</li>
                  <li>• Compare which store had the better original price</li>
                  <li>• Check if "sale prices" are actually discounted</li>
                  <li>• Calculate true savings on Cyber Monday deals</li>
                </ul>
              </div>

              {/* Budget Planning */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-5 rounded-lg border-2 border-green-500 dark:border-green-600">
                <div className="flex items-center gap-3 mb-3">
                  <Calculator className="h-8 w-8 text-green-600 dark:text-green-500" />
                  <h3 className="font-bold text-lg">Budget Planning</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Determine how much an item cost before markdown</li>
                  <li>• Track price history for price drop alerts</li>
                  <li>• Calculate reverse VAT/sales tax</li>
                  <li>• Analyze spending patterns over time</li>
                </ul>
              </div>

              {/* Business & Retail */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-5 rounded-lg border-2 border-purple-500 dark:border-purple-600">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-8 w-8 text-purple-600 dark:text-purple-500" />
                  <h3 className="font-bold text-lg">Business & Retail</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Find cost price from sale price</li>
                  <li>• Reverse engineer competitor pricing</li>
                  <li>• Calculate markup from discounted price</li>
                  <li>• Determine profit margins accurately</li>
                </ul>
              </div>

              {/* Education */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-5 rounded-lg border-2 border-blue-500 dark:border-blue-600">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                  <h3 className="font-bold text-lg">Education</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Learn percentage concepts in reverse</li>
                  <li>• Practice mathematical problem-solving</li>
                  <li>• Understand proportional relationships</li>
                  <li>• Master real-world math applications</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6 space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">How do I find the original price before a discount?</h3>
              <p className="text-muted-foreground">
                Divide the final price by (1 minus the discount rate). For example, if an item costs $80 after a 20% discount: $80 ÷ (1 - 0.20) = $80 ÷ 0.80 = $100. The formula reverses the discount calculation to reveal the starting price.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How can I verify Black Friday deals are real?</h3>
              <p className="text-muted-foreground">
                Use the reverse percentage calculator to find the "original price" claimed in the ad. Then check if that price was actually charged before Black Friday using price tracking tools like CamelCamelCamel or Keepa. If the original price was inflated just before the sale, the deal may be fake. Retailers sometimes raise prices 2-3 weeks before Black Friday to make discounts look bigger.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">What's the difference between forward and reverse percentage?</h3>
              <p className="text-muted-foreground">
                Forward percentage calculates the final price after applying a discount (e.g., 20% off $100 = $80). Reverse percentage works backward to find the original price when you only know the final price and discount percentage ($80 after 20% off = $100 original). Think of it as "undoing" the discount.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Can I use this calculator for percentage increases?</h3>
              <p className="text-muted-foreground">
                Yes! For increases, use a similar formula. If something is now $120 after a 20% increase, the original was: $120 ÷ (1 + 0.20) = $120 ÷ 1.20 = $100. Just change the minus to a plus in the formula when dealing with increases instead of decreases.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How do stores fake Black Friday discounts?</h3>
              <p className="text-muted-foreground">
                Some stores raise prices 2-3 weeks before Black Friday, then apply a "discount" that brings it back to the regular price or even higher. This is called "fake discounting" or "price anchoring." Use this calculator to verify the math matches their claims, and always check price history tools to see the actual price trend over time. In some jurisdictions, this practice is illegal.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Is 30% off better than "Buy One Get One 50% Off"?</h3>
              <p className="text-muted-foreground">
                Use the calculator to compare: 30% off one item saves you 30%. BOGO 50% off means you pay 100% + 50% = 150% for two items, or 75% per item on average, which is a 25% discount. So a straight 30% discount is better than BOGO 50% off if you're buying the same quantity.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How accurate is this calculator for tax calculations?</h3>
              <p className="text-muted-foreground">
                Very accurate for reverse tax calculations. If you know the final price including tax and the tax rate, you can find the pre-tax price. For example, if something costs $108 with 8% sales tax: $108 ÷ 1.08 = $100 pre-tax price. This is useful for budgeting and expense tracking.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">What if I know the discount amount instead of percentage?</h3>
              <p className="text-muted-foreground">
                If you know the discount amount (e.g., "Save $20"), first calculate the percentage: (Discount Amount ÷ Final Price) × 100. For example, if you save $20 on an $80 item: ($20 ÷ $80) × 100 = 25% discount. Then use that percentage in the reverse calculator to find the original price.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Related Calculators Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl">Related Calculators</CardTitle>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Black Friday Calculators */}
              <h3 className="col-span-full font-bold text-lg mt-2 mb-2 text-red-600 dark:text-red-500">
                🛍️ Black Friday Calculators
              </h3>

              <Link
                href="/black-friday-calculator-20-off"
                className="flex items-center justify-between p-4 rounded-lg border-2 border-yellow-400 dark:border-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors group"
              >
                <p className="font-medium">Black Friday 20% Off Calculator</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>

              <Link
                href="/black-friday-2025-savings-calculator"
                className="flex items-center justify-between p-4 rounded-lg border-2 border-yellow-400 dark:border-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors group"
              >
                <p className="font-medium">Black Friday 2025 Savings Calculator</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>

              <Link
                href="/30-percent-discount-calculator"
                className="flex items-center justify-between p-4 rounded-lg border-2 border-yellow-400 dark:border-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors group"
              >
                <p className="font-medium">30% Discount Calculator</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>

              <Link
                href="/25-percent-off-100-dollars"
                className="flex items-center justify-between p-4 rounded-lg border-2 border-yellow-400 dark:border-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-950/20 transition-colors group"
              >
                <p className="font-medium">25% Off $100 Calculator</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>

              {/* Percentage Calculators */}
              <h3 className="col-span-full font-bold text-lg mt-4 mb-2 text-blue-600 dark:text-blue-500">
                📊 Percentage Calculators
              </h3>

              <Link
                href="/calculators/basic-percent/percentage-decrease"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors group"
              >
                <p className="font-medium">Percentage Decrease Calculator</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>

              <Link
                href="/calculators/basic-percent/percentage-increase"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors group"
              >
                <p className="font-medium">Percentage Increase Calculator</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>

              <Link
                href="/calculators/basic-percent/percent-of"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors group"
              >
                <p className="font-medium">Percent Of Calculator</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>

              <Link
                href="/calculators/basic-percent/percentage-difference"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors group"
              >
                <p className="font-medium">Percentage Difference Calculator</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-yellow-500 via-red-500 to-black dark:from-yellow-700 dark:via-red-700 dark:to-gray-900 text-white mb-8">
          <CardContent className="pt-6 px-4 md:px-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Master Your Black Friday Shopping</h3>
            <p className="mb-6 text-gray-100 text-sm md:text-base">
              Never overpay again! Verify every deal and find the true value of your purchases.
            </p>
            <Link
              href="/black-friday-2025-savings-calculator"
              className="inline-flex items-center justify-center rounded-md text-sm md:text-base font-medium bg-white text-black hover:bg-gray-100 min-h-[44px] h-12 px-6 md:px-8 py-2 transition-colors"
            >
              <Zap className="mr-2 h-5 w-5" />
              Track All Black Friday Savings
            </Link>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <div className="text-center text-sm text-muted-foreground">
          Last updated: November 2025
        </div>
      </div>
    </>
  );
}
