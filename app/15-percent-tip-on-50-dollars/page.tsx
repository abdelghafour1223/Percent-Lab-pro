import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TipCalculatorWidget } from '@/components/tip-calculator-widget';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// Metadata for SEO
export const metadata: Metadata = {
  title: '15% Tip on $50: Quick Calculator + Restaurant Guide [2025]',
  description: '15% tip on $50 = $7.50. Free calculator with restaurant examples, holiday tipping guide, and bill splitting. Perfect for Thanksgiving and Christmas dining 2025.',
  alternates: {
    canonical: 'https://www.percentlab.app/15-percent-tip-on-50-dollars',
  },
  keywords: [
    '15 percent tip on 50 dollars',
    '15% tip on $50',
    'tip calculator',
    'restaurant tipping guide',
    'how to calculate 15% tip',
    'bill splitting calculator',
    'thanksgiving tipping 2025',
    'christmas tipping guide',
    'holiday tipping etiquette',
    'restaurant tip guide',
  ],
  openGraph: {
    title: '15% Tip on $50: Quick Calculator + Restaurant Guide [2025]',
    description: '15% tip on $50 = $7.50. Free calculator with restaurant examples, holiday tipping guide, and bill splitting.',
    type: 'article',
    url: 'https://www.percentlab.app/15-percent-tip-on-50-dollars',
  },
  twitter: {
    card: 'summary_large_image',
    title: '15% Tip on $50: Quick Calculator + Restaurant Guide [2025]',
    description: '15% tip on $50 = $7.50. Calculator with restaurant examples and holiday tipping guide.',
  },
};

export default function Page() {
  const billAmount = 50;
  const tipPercent = 15;
  const tipAmount = 7.50;
  const totalWithTip = 57.50;

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        name: 'How to Calculate a 15% Tip on $50',
        description: 'Step-by-step guide to calculate a 15% tip on a $50 restaurant bill',
        totalTime: 'PT1M',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Find 10% of the bill',
            text: 'Move the decimal point one place to the left: $50.00 → $5.00 (this is 10%)',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Find 5% of the bill',
            text: 'Take half of 10%: $5.00 ÷ 2 = $2.50 (this is 5%)',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Add them together',
            text: 'Add 10% and 5%: $5.00 + $2.50 = $7.50 (this is 15%)',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Calculate total',
            text: 'Add tip to bill: $50.00 + $7.50 = $57.50',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is 15% tip on a $50 bill?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '15% tip on $50 is $7.50. Total bill with tip is $57.50. This is the standard tip for good service at most casual dining restaurants in the United States.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you calculate 15% quickly without a calculator?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Find 10% by moving the decimal one place left ($50 → $5), then find 5% by halving 10% ($5 ÷ 2 = $2.50). Add them: $5 + $2.50 = $7.50.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I tip 15% or 20% on a $50 bill?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '15% ($7.50) is standard for good service. Tip 20% ($10) for excellent service, large parties, or holiday dining. The difference is only $2.50.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I tip on the pre-tax or post-tax amount?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Traditional etiquette says pre-tax, but most people tip on the post-tax total for simplicity. On a $50 bill, the difference is typically only $0.50-1.00.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is 15% tip enough at expensive restaurants?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For upscale dining, 18-20% is more common. However, 15% is still acceptable if service was standard. On a $50 bill, consider $9-10 (18-20%) for fine dining.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much should I tip for takeout?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Takeout typically warrants 10% ($5 on $50) or $2-3 for the service. Full 15% is generous but not required since there\'s no table service.',
            },
          },
          {
            '@type': 'Question',
            name: 'What if service was bad?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If service was poor, speak to a manager first. If unresolved, 10% ($5) or less is acceptable. Never skip tipping entirely without addressing the issue—others may have worked on your meal.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I tip more during Thanksgiving or Christmas?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! On holidays like Thanksgiving (Nov 27, 2025) or Christmas, tip 20% ($10 on $50) to thank staff working when most people are home with family.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I split a $50 bill with 15% tip among 4 people?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Total with tip: $57.50. Divided by 4 = $14.38 per person. Round to $14.50 or $15 for easier math.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is it better to tip cash or credit card?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Servers often prefer cash (immediate access, no processing fees), but credit card tips are perfectly acceptable and tracked for taxes. Do what\'s convenient for you.',
            },
          },
          {
            '@type': 'Question',
            name: 'What\'s the difference between 15% tip and doubling the tax?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If sales tax is 7.5%, doubling gives you 15%—perfect for quick mental math! If tax is 8%, doubling gives 16%, which is slightly generous.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need to tip at buffets?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, but less—typically 10% ($5 on $50) since servers only bring drinks and clear plates. Some people tip $1-2 per person instead of a percentage.',
            },
          },
          {
            '@type': 'Question',
            name: 'Should I tip the same percentage for lunch and dinner?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, 15% is standard for both. Some people tip slightly less for lunch ($5-6 on $50 lunch), but servers work equally hard regardless of time.',
            },
          },
          {
            '@type': 'Question',
            name: 'What if automatic gratuity is already included?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Check your bill! If 15-20% gratuity is already added (common for large parties), you don\'t need to tip extra. Additional tipping is optional for exceptional service.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Venmo/Zelle change tipping etiquette when splitting?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When splitting digitally, round up your share to make it easy. If your share is $14.38, send $15—the extra goes to the server as a bonus.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-5xl mx-auto">
        {/* Hero Section - Instant Answer */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            15% Tip on $50: Quick Calculator + Restaurant Guide
          </h1>
          <div className="my-8 p-6 bg-primary/10 rounded-lg border-2 border-primary/20">
            <h2 className="text-xl font-semibold mb-4">Quick Answer</h2>
            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
              $7.50
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              Total bill with tip = <strong className="text-foreground">$57.50</strong>
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Perfect for casual dining, lunch, or standard restaurant service</span>
            </div>
          </div>
        </div>

        {/* Interactive Calculator */}
        <section className="mb-12">
          <TipCalculatorWidget defaultBill={50} defaultTip={15} defaultPeople={1} />
        </section>

        {/* Ad Slot */}
        <div className="ad-slot my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Real Restaurant Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Real Restaurant Scenarios ($50 Bill)</h2>
          <div className="grid gap-6">
            {/* Casual Dining */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🍕 Casual Dining (Applebee&apos;s, Chili&apos;s, TGI Friday&apos;s)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Bill</p>
                    <p className="font-semibold text-lg">$50.00</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">15% Standard Tip</p>
                    <p className="font-semibold text-lg text-primary">$7.50</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total</p>
                    <p className="font-semibold text-lg">$57.50</p>
                  </div>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg">
                  <p className="text-sm">
                    <strong>When to use:</strong> Good service, typical weekday dinner
                  </p>
                  <p className="text-sm mt-2">
                    <strong>What $50 gets you:</strong> 2 entrees + 1 appetizer, 2 drinks, standard wait service
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Fast Casual */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🍔 Fast Casual (Chipotle, Panera, Five Guys)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Bill</p>
                    <p className="font-semibold text-lg">$50.00</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">10-15% Tip</p>
                    <p className="font-semibold text-lg text-primary">$5.00 - $7.50</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total</p>
                    <p className="font-semibold text-lg">$55 - $57.50</p>
                  </div>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm">
                    <strong>Note:</strong> Counter service - tip jar optional, 10-15% if table service
                  </p>
                  <p className="text-sm mt-2">
                    <strong>What $50 gets you:</strong> Family meal for 3-4 people, multiple bowls/sandwiches, counter pickup
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Italian Restaurant */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🍝 Italian Restaurant (Olive Garden, Carrabba&apos;s)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Bill</p>
                    <p className="font-semibold text-lg">$50.00</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">15-18% Tip</p>
                    <p className="font-semibold text-lg text-primary">$7.50 - $9.00</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total</p>
                    <p className="font-semibold text-lg">$57.50 - $59</p>
                  </div>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg">
                  <p className="text-sm">
                    <strong>When to use:</strong> 15% minimum, 18% for attentive service
                  </p>
                  <p className="text-sm mt-2">
                    <strong>What $50 gets you:</strong> 2 pasta dishes, soup or salad, breadsticks, full table service
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Steakhouse */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🥩 Steakhouse (Texas Roadhouse, LongHorn)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Bill</p>
                    <p className="font-semibold text-lg">$50.00</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">18-20% Tip</p>
                    <p className="font-semibold text-lg text-primary">$9.00 - $10.00</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total</p>
                    <p className="font-semibold text-lg">$59 - $60</p>
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/20 p-3 rounded-lg border border-amber-200 dark:border-amber-900">
                  <p className="text-sm">
                    <strong>Premium service:</strong> Higher tips expected for upscale dining
                  </p>
                  <p className="text-sm mt-2">
                    <strong>What $50 gets you:</strong> 1 steak entree + side, appetizer, premium table service
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Breakfast/Brunch */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ☕ Breakfast/Brunch (IHOP, Denny&apos;s, First Watch)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Bill</p>
                    <p className="font-semibold text-lg">$50.00</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">15% Standard Tip</p>
                    <p className="font-semibold text-lg text-primary">$7.50</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total</p>
                    <p className="font-semibold text-lg">$57.50</p>
                  </div>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg">
                  <p className="text-sm">
                    <strong>Morning standard:</strong> 15% is typical for breakfast service
                  </p>
                  <p className="text-sm mt-2">
                    <strong>What $50 gets you:</strong> Breakfast for 3-4 people, pancakes, omelets, coffee, quick morning service
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Asian Restaurant */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🍜 Asian Restaurant (P.F. Chang&apos;s, Panda Express Sit-Down)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Bill</p>
                    <p className="font-semibold text-lg">$50.00</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">15-18% Tip</p>
                    <p className="font-semibold text-lg text-primary">$7.50 - $9.00</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total</p>
                    <p className="font-semibold text-lg">$57.50 - $59</p>
                  </div>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg">
                  <p className="text-sm">
                    <strong>Family style:</strong> 15% minimum, more for large group service
                  </p>
                  <p className="text-sm mt-2">
                    <strong>What $50 gets you:</strong> 3-4 entrees for sharing, rice/noodles, family-style service
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Calculate 15% Tip - Step by Step */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Calculate 15% Tip on $50</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Method 1 */}
            <Card className="border-2 border-primary/20">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-lg">Method 1: Quick Mental Math</CardTitle>
                <p className="text-sm text-muted-foreground font-normal">(Easiest)</p>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <p className="font-semibold mb-2">Step 1: Find 10%</p>
                  <p className="text-sm text-muted-foreground">
                    Move decimal left one place:<br />
                    $50.00 → <strong className="text-foreground">$5.00</strong> (this is 10%)
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Step 2: Find 5%</p>
                  <p className="text-sm text-muted-foreground">
                    Take half of 10%:<br />
                    $5.00 ÷ 2 = <strong className="text-foreground">$2.50</strong> (this is 5%)
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Step 3: Add them</p>
                  <p className="text-sm text-muted-foreground">
                    $5.00 + $2.50 = <strong className="text-primary text-lg">$7.50 ✓</strong>
                  </p>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm">
                    <strong>Total bill:</strong> $50.00 + $7.50 = <strong className="text-primary">$57.50</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Method 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Method 2: Multiply by 0.15</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-mono text-sm mb-2">$50 × 0.15 = <strong className="text-primary">$7.50</strong></p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">For total with tip:</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-mono text-sm">$50 × 1.15 = <strong className="text-primary">$57.50</strong></p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Method 3 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Method 3: The Formula</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-xs font-semibold mb-2">Tip Amount = Bill × (Tip % ÷ 100)</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-mono">Tip = $50 × (15 ÷ 100)</p>
                  <p className="font-mono">Tip = $50 × 0.15</p>
                  <p className="font-mono">Tip = <strong className="text-primary">$7.50</strong></p>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-xs font-semibold mb-2">Total Bill = Original + Tip</p>
                  <p className="font-mono text-sm">Total = $50 + $7.50 = <strong className="text-primary">$57.50</strong></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ad Slot */}
        <div className="ad-slot my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Tipping Guide by Service Quality */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When to Tip 15% vs Other Percentages</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Service Quality</th>
                      <th className="text-left p-3">Tip %</th>
                      <th className="text-left p-3">On $50 Bill</th>
                      <th className="text-left p-3">Total</th>
                      <th className="text-left p-3">When to Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">Exceptional</td>
                      <td className="p-3">20-25%</td>
                      <td className="p-3 text-primary font-semibold">$10.00-$12.50</td>
                      <td className="p-3">$60-$62.50</td>
                      <td className="p-3 text-muted-foreground">Outstanding service, special occasions</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">Great</td>
                      <td className="p-3">18-20%</td>
                      <td className="p-3 text-primary font-semibold">$9.00-$10.00</td>
                      <td className="p-3">$59-$60</td>
                      <td className="p-3 text-muted-foreground">Above average, attentive server</td>
                    </tr>
                    <tr className="border-b bg-primary/5 hover:bg-primary/10">
                      <td className="p-3 font-semibold">Good ⭐</td>
                      <td className="p-3 font-semibold">15-18%</td>
                      <td className="p-3 text-primary font-bold">$7.50-$9.00</td>
                      <td className="p-3 font-semibold">$57.50-$59</td>
                      <td className="p-3 font-semibold">Standard good service</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">Acceptable</td>
                      <td className="p-3">12-15%</td>
                      <td className="p-3">$6.00-$7.50</td>
                      <td className="p-3">$56-$57.50</td>
                      <td className="p-3 text-muted-foreground">Adequate but unremarkable</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">Poor</td>
                      <td className="p-3">10% or less</td>
                      <td className="p-3">$5.00 or less</td>
                      <td className="p-3">$55 or less</td>
                      <td className="p-3 text-muted-foreground">Speak to manager first</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">💡 The 15% Standard</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    15% is the baseline tip for <strong>acceptable to good service</strong> in most U.S. restaurants:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Server was friendly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Orders came correct</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Timely refills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>No major issues</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Tip more (18-20%) when:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Handling large groups</li>
                    <li>• Complex orders</li>
                    <li>• Holidays (working when others aren&apos;t)</li>
                    <li>• Outstanding recommendations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Holiday Tipping Guide 2025 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Holiday Season Tipping on $50 Bills 🎄</h2>
          <div className="grid gap-6">
            {/* Thanksgiving */}
            <Card className="border-amber-200 dark:border-amber-900">
              <CardHeader className="bg-amber-50 dark:bg-amber-950/20">
                <CardTitle className="flex items-center gap-2">
                  🦃 Thanksgiving 2025 (November 27)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Standard 15%</p>
                    <p className="font-semibold">$7.50 <span className="text-sm text-muted-foreground">(Total: $57.50)</span></p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Recommended 20%</p>
                    <p className="font-semibold text-primary">$10.00 <span className="text-sm">(Total: $60.00)</span></p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Why tip more on Thanksgiving?</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Restaurants open on holidays = staff working when most are home</li>
                    <li>• Often busier and more stressful shifts</li>
                    <li>• Show appreciation for holiday service</li>
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg">
                  <p className="font-semibold text-sm mb-1">Large party tip guide:</p>
                  <ul className="text-sm space-y-1">
                    <li>• 6-8 people: Expect 18% automatic gratuity ($9.00)</li>
                    <li>• 8+ people: Usually 20% automatic gratuity ($10.00)</li>
                    <li>• Always check bill for included gratuity</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Christmas */}
            <Card className="border-red-200 dark:border-red-900">
              <CardHeader className="bg-red-50 dark:bg-red-950/20">
                <CardTitle className="flex items-center gap-2">
                  🎄 Christmas Week (December 23-25, 2025)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Standard 15%</p>
                    <p className="font-semibold">$7.50 <span className="text-sm text-muted-foreground">(Total: $57.50)</span></p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Holiday Bonus 20-25%</p>
                    <p className="font-semibold text-primary">$10.00-$12.50 <span className="text-sm">(Total: $60-$62.50)</span></p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Christmas tipping etiquette:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• December 23-24: Consider 18-20% ($9-10)</li>
                    <li>• Christmas Day: 20-25% if restaurant is open ($10-12.50)</li>
                    <li>• Thank servers personally - many sacrifice family time</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* New Year's Eve */}
            <Card className="border-purple-200 dark:border-purple-900">
              <CardHeader className="bg-purple-50 dark:bg-purple-950/20">
                <CardTitle className="flex items-center gap-2">
                  🎉 New Year&apos;s Eve 2025 (December 31)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg">
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Automatic Gratuity:</strong> Most upscale restaurants add 20% automatically</li>
                    <li>• <strong>Fixed-price menus:</strong> Check if tip is included</li>
                    <li>• <strong>If not included:</strong> 20% minimum ($10.00)</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Pro Tip:</strong> NYE reservations often include mandatory gratuity. Check your bill!
                </p>
              </CardContent>
            </Card>

            {/* General Holiday */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎊 General Holiday Dining (Nov-Dec 2025)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 rounded hover:bg-muted/50">
                    <span>Regular nights:</span>
                    <span className="font-semibold">Standard 15% ($7.50)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded hover:bg-muted/50">
                    <span>Weekend nights:</span>
                    <span className="font-semibold">Consider 18% ($9.00)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded hover:bg-muted/50">
                    <span>Special events:</span>
                    <span className="font-semibold">20% recommended ($10.00)</span>
                  </div>
                </div>
                <div className="mt-4 bg-muted/50 p-3 rounded-lg">
                  <p className="font-semibold text-sm mb-2">Holiday party tip etiquette:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• 6+ people: Expect 18-20% automatic gratuity</li>
                    <li>• Private room: Often 20% mandatory</li>
                    <li>• Buffet-style: Still tip 10-15% for drink service</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Splitting Bill */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How to Split $50 Bill with Friends</h2>
          <Card>
            <CardHeader>
              <CardTitle>Total with 15% tip = $57.50</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">People</th>
                      <th className="text-left p-3">Per Person (Equal Split)</th>
                      <th className="text-left p-3">Mental Math Tip</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">2</td>
                      <td className="p-3 text-primary font-semibold">$28.75</td>
                      <td className="p-3 text-muted-foreground">~$29 each</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">3</td>
                      <td className="p-3 text-primary font-semibold">$19.17</td>
                      <td className="p-3 text-muted-foreground">~$19-20 each</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">4</td>
                      <td className="p-3 text-primary font-semibold">$14.38</td>
                      <td className="p-3 text-muted-foreground">~$14.50 each</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">5</td>
                      <td className="p-3 text-primary font-semibold">$11.50</td>
                      <td className="p-3 text-muted-foreground">~$11.50 each</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">6</td>
                      <td className="p-3 text-primary font-semibold">$9.58</td>
                      <td className="p-3 text-muted-foreground">~$9.50-10 each</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">💡 Quick Split Tips</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>For 2 people:</strong> Round to $30 each (extra goes to server)</li>
                    <li>• <strong>For 4 people:</strong> Round to $15 each (covers tip generously)</li>
                    <li>• <strong>For 5 people:</strong> Round to $12 each (easier math)</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Using Venmo/Zelle?</h3>
                  <p className="text-sm text-muted-foreground">
                    Send your share rounded up: $29 instead of $28.75 → Extra $0.25 × 2 = $0.50 bonus tip!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Compare Tip Percentages on $50</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Tip %</th>
                      <th className="text-left p-3">Calculation</th>
                      <th className="text-left p-3">Tip Amount</th>
                      <th className="text-left p-3">Total Bill</th>
                      <th className="text-left p-3">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">10%</td>
                      <td className="p-3 font-mono text-xs">$50 × 0.10</td>
                      <td className="p-3">$5.00</td>
                      <td className="p-3">$55.00</td>
                      <td className="p-3 text-muted-foreground">Counter service, takeout</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">12%</td>
                      <td className="p-3 font-mono text-xs">$50 × 0.12</td>
                      <td className="p-3">$6.00</td>
                      <td className="p-3">$56.00</td>
                      <td className="p-3 text-muted-foreground">Below average service</td>
                    </tr>
                    <tr className="border-b bg-primary/5 hover:bg-primary/10">
                      <td className="p-3 font-bold">15% ⭐</td>
                      <td className="p-3 font-mono text-xs font-semibold">$50 × 0.15</td>
                      <td className="p-3 font-bold text-primary">$7.50</td>
                      <td className="p-3 font-bold">$57.50</td>
                      <td className="p-3 font-semibold">Standard good service</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">18%</td>
                      <td className="p-3 font-mono text-xs">$50 × 0.18</td>
                      <td className="p-3 text-primary">$9.00</td>
                      <td className="p-3">$59.00</td>
                      <td className="p-3 text-muted-foreground">Great service, large party</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">20%</td>
                      <td className="p-3 font-mono text-xs">$50 × 0.20</td>
                      <td className="p-3 text-primary">$10.00</td>
                      <td className="p-3">$60.00</td>
                      <td className="p-3 text-muted-foreground">Excellent service, fine dining</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">22%</td>
                      <td className="p-3 font-mono text-xs">$50 × 0.22</td>
                      <td className="p-3 text-primary">$11.00</td>
                      <td className="p-3">$61.00</td>
                      <td className="p-3 text-muted-foreground">Outstanding, special occasion</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">25%</td>
                      <td className="p-3 font-mono text-xs">$50 × 0.25</td>
                      <td className="p-3 text-primary">$12.50</td>
                      <td className="p-3">$62.50</td>
                      <td className="p-3 text-muted-foreground">Exceptional or holiday service</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">The Difference:</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>10% vs 15%:</strong> Only $2.50 difference</li>
                  <li>• <strong>15% vs 20%:</strong> Only $2.50 difference</li>
                  <li>• <strong>Doubling the tax:</strong> If tax is 7-8%, doubling = 14-16% (close to 15%!)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ad Slot */}
        <div className="ad-slot my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">What is 15% tip on a $50 bill?</h3>
                <p className="text-muted-foreground">
                  15% tip on $50 is <strong className="text-foreground">$7.50</strong>. Total bill with tip is <strong className="text-foreground">$57.50</strong>. This is the standard tip for good service at most casual dining restaurants in the United States.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">How do you calculate 15% quickly without a calculator?</h3>
                <p className="text-muted-foreground">
                  Find 10% by moving the decimal one place left ($50 → $5), then find 5% by halving 10% ($5 ÷ 2 = $2.50). Add them: $5 + $2.50 = <strong className="text-foreground">$7.50</strong>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Should I tip 15% or 20% on a $50 bill?</h3>
                <p className="text-muted-foreground">
                  15% ($7.50) is standard for good service. Tip 20% ($10) for excellent service, large parties, or holiday dining. The difference is only $2.50.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Do I tip on the pre-tax or post-tax amount?</h3>
                <p className="text-muted-foreground">
                  Traditional etiquette says pre-tax, but most people tip on the post-tax total for simplicity. On a $50 bill, the difference is typically only $0.50-1.00.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Is 15% tip enough at expensive restaurants?</h3>
                <p className="text-muted-foreground">
                  For upscale dining, 18-20% is more common. However, 15% is still acceptable if service was standard. On a $50 bill, consider $9-10 (18-20%) for fine dining.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">How much should I tip for takeout?</h3>
                <p className="text-muted-foreground">
                  Takeout typically warrants 10% ($5 on $50) or $2-3 for the service. Full 15% is generous but not required since there&apos;s no table service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">What if service was bad?</h3>
                <p className="text-muted-foreground">
                  If service was poor, speak to a manager first. If unresolved, 10% ($5) or less is acceptable. Never skip tipping entirely without addressing the issue—others may have worked on your meal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Should I tip more during Thanksgiving or Christmas?</h3>
                <p className="text-muted-foreground">
                  Yes! On holidays like Thanksgiving (Nov 27, 2025) or Christmas, tip 20% ($10 on $50) to thank staff working when most people are home with family.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">How do I split a $50 bill with 15% tip among 4 people?</h3>
                <p className="text-muted-foreground">
                  Total with tip: $57.50. Divided by 4 = <strong className="text-foreground">$14.38 per person</strong>. Round to $14.50 or $15 for easier math.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Is it better to tip cash or credit card?</h3>
                <p className="text-muted-foreground">
                  Servers often prefer cash (immediate access, no processing fees), but credit card tips are perfectly acceptable and tracked for taxes. Do what&apos;s convenient for you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">What&apos;s the difference between 15% tip and doubling the tax?</h3>
                <p className="text-muted-foreground">
                  If sales tax is 7.5%, doubling gives you 15%—perfect for quick mental math! If tax is 8%, doubling gives 16%, which is slightly generous.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Do I need to tip at buffets?</h3>
                <p className="text-muted-foreground">
                  Yes, but less—typically 10% ($5 on $50) since servers only bring drinks and clear plates. Some people tip $1-2 per person instead of a percentage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Should I tip the same percentage for lunch and dinner?</h3>
                <p className="text-muted-foreground">
                  Yes, 15% is standard for both. Some people tip slightly less for lunch ($5-6 on $50 lunch), but servers work equally hard regardless of time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">What if automatic gratuity is already included?</h3>
                <p className="text-muted-foreground">
                  Check your bill! If 15-20% gratuity is already added (common for large parties), you don&apos;t need to tip extra. Additional tipping is optional for exceptional service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">How does Venmo/Zelle change tipping etiquette when splitting?</h3>
                <p className="text-muted-foreground">
                  When splitting digitally, round up your share to make it easy. If your share is $14.38, send $15—the extra goes to the server as a bonus.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Budget Planning */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Budget Planning for $50 Restaurant Meals</h2>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Dining Budget with 15% Tips</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Frequency</th>
                      <th className="text-left p-3">Bill per Meal</th>
                      <th className="text-left p-3">Tip per Meal</th>
                      <th className="text-left p-3">Total per Meal</th>
                      <th className="text-left p-3">Monthly Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">1x/week</td>
                      <td className="p-3">$50</td>
                      <td className="p-3 text-primary">$7.50</td>
                      <td className="p-3">$57.50</td>
                      <td className="p-3 font-semibold">$230-250/month</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">2x/week</td>
                      <td className="p-3">$50</td>
                      <td className="p-3 text-primary">$7.50</td>
                      <td className="p-3">$57.50</td>
                      <td className="p-3 font-semibold">$460-500/month</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">3x/week</td>
                      <td className="p-3">$50</td>
                      <td className="p-3 text-primary">$7.50</td>
                      <td className="p-3">$57.50</td>
                      <td className="p-3 font-semibold">$690-750/month</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-3 font-semibold">4x/week</td>
                      <td className="p-3">$50</td>
                      <td className="p-3 text-primary">$7.50</td>
                      <td className="p-3">$57.50</td>
                      <td className="p-3 font-semibold">$920-1000/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">💡 Money-Saving Tips</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold mb-1">Lunch vs Dinner: Same restaurant, smaller portions</p>
                      <p className="text-muted-foreground">• Lunch: $30-35 with tip</p>
                      <p className="text-muted-foreground">• Dinner: $50-60 with tip</p>
                      <p className="font-semibold text-primary">• Savings: $15-25 per meal</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Happy Hour: Many restaurants offer discounts 3-6pm</p>
                      <p className="text-muted-foreground">• Regular $50 meal → $35-40 with happy hour pricing</p>
                      <p className="text-muted-foreground">• Still tip 15% on original price before discount</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Skip the extras:</p>
                      <p className="text-muted-foreground">• No appetizer: Save $8-12</p>
                      <p className="text-muted-foreground">• Water instead of soda: Save $3-4</p>
                      <p className="text-muted-foreground">• Share dessert: Save $6-8</p>
                      <p className="font-semibold text-primary">• Total savings: $17-24 → New bill $26-33 + tip</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Related Calculators */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Related Tip & Percentage Calculators</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">💰 Other Tip Amounts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/calculators/daily/tip-calculator" className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors group">
                    <div>
                      <p className="font-medium">20% Tip on $50</p>
                      <p className="text-sm text-muted-foreground">= $10.00 tip</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                  <Link href="/calculators/daily/tip-calculator" className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors group">
                    <div>
                      <p className="font-medium">18% Tip on $50</p>
                      <p className="text-sm text-muted-foreground">= $9.00 tip</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                  <Link href="/calculators/daily/tip-calculator" className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors group">
                    <div>
                      <p className="font-medium">10% Tip on $50</p>
                      <p className="text-sm text-muted-foreground">= $5.00 tip</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🍽️ Different Bill Amounts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link href="/what-is-15-percent-of-40" className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors group">
                    <div>
                      <p className="font-medium">15% Tip on $40</p>
                      <p className="text-sm text-muted-foreground">= $6.00 tip</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                  <Link href="/what-is-15-percent-of-60" className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors group">
                    <div>
                      <p className="font-medium">15% Tip on $60</p>
                      <p className="text-sm text-muted-foreground">= $9.00 tip</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                  <Link href="/what-is-15-percent-of-100" className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors group">
                    <div>
                      <p className="font-medium">15% Tip on $100</p>
                      <p className="text-sm text-muted-foreground">= $15.00 tip</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Link href="/calculators/daily/tip-calculator" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    📊 Restaurant Tip Calculator
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate any tip percentage
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/calculators/basic-percent/percent-of" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    🔢 Percentage Calculator
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    General percentage calculations
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    ➗ All Calculators
                    <ArrowRight className="h-4 w-4 ml-auto" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Browse all our calculators
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6 text-center">
            <h3 className="text-2xl font-semibold mb-3">Master Restaurant Tipping</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Never overthink tipping again! Bookmark this page for quick reference or explore our other tipping calculators.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/calculators/daily/tip-calculator"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                aria-label="Go to tip calculator"
              >
                Calculate Any Tip Amount →
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
                aria-label="Browse all calculators"
              >
                More Percentage Calculators →
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <div className="text-center text-sm text-muted-foreground mt-12">
          <p><strong>Last Updated:</strong> November 2025</p>
          <p><strong>Next Holiday:</strong> Thanksgiving 2025 (November 27)</p>
        </div>
      </div>
    </>
  );
}
