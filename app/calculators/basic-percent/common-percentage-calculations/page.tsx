import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { generatePSEOPages } from '@/lib/pseo';
import { formatNumber } from '@/lib/utils';
import { ArrowRight, Calculator, ChevronRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Common Percentage Calculations - Quick Reference Directory',
  description:
    'Browse our directory of 50 common percentage calculations. Get instant answers and step-by-step guides for everyday numbers, shopping discounts, and tips.',
  alternates: {
    canonical: 'https://www.percentlab.app/calculators/basic-percent/common-percentage-calculations',
  },
  openGraph: {
    title: 'Common Percentage Calculations - Quick Reference Directory',
    description:
      'Browse our directory of 50 common percentage calculations with step-by-step explanations.',
    url: 'https://www.percentlab.app/calculators/basic-percent/common-percentage-calculations',
    type: 'website',
  },
};

export default function CommonPercentageCalculationsPage() {
  const allPages = generatePSEOPages();

  // Distinct base numbers in logical ascending order
  const baseNumbers = [50, 100, 150, 200, 250, 300, 400, 500, 1000];

  // Group calculations by base number
  const groupedCalculations = baseNumbers.map((num) => {
    const items = allPages
      .filter((p) => p.number === num)
      .sort((a, b) => a.percent - b.percent);
    return {
      number: num,
      items,
    };
  });

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.percentlab.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Basic Percentages',
        item: 'https://www.percentlab.app/calculators/basic-percent',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Common Calculations Directory',
        item: 'https://www.percentlab.app/calculators/basic-percent/common-percentage-calculations',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors" aria-label="Go to homepage">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            href="/calculators/basic-percent"
            className="hover:text-primary transition-colors"
            aria-label="Go to Basic Percentages category"
          >
            Basic Percentages
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">Common Calculations</span>
        </nav>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4 text-xs font-semibold uppercase tracking-wider">
            Directory &amp; Quick Lookup
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Common Percentage Calculations
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Instant answers, step-by-step mathematical solutions, and real-world examples for the 50 most frequently calculated percentages.
          </p>
        </div>

        {/* Fast Jump Anchor Links */}
        <div className="bg-muted/40 border rounded-xl p-4 sm:p-6 mb-12">
          <div className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Calculator className="h-4 w-4 text-primary" />
            Quick Jump to Amount:
          </div>
          <div className="flex flex-wrap gap-2">
            {baseNumbers.map((num) => (
              <a
                key={num}
                href={`#percentage-of-${num}`}
                className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg bg-background border hover:border-primary hover:text-primary transition-colors shadow-sm"
              >
                Percentages of ${num}
              </a>
            ))}
          </div>
        </div>

        {/* Grouped Calculations Grid */}
        <div className="space-y-12">
          {groupedCalculations.map((group) => (
            <section key={group.number} id={`percentage-of-${group.number}`} className="scroll-mt-24">
              <div className="flex items-center justify-between mb-4 border-b pb-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Percentage of ${group.number}
                </h2>
                <Badge variant="secondary">
                  {group.items.length} {group.items.length === 1 ? 'Calculation' : 'Calculations'}
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item) => {
                  const result = (item.percent / 100) * item.number;
                  return (
                    <Card
                      key={item.slug}
                      className="hover:shadow-md hover:border-primary/50 transition-all group"
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div>
                            <Link
                              href={`/${item.slug}`}
                              className="font-semibold text-base text-foreground group-hover:text-primary transition-colors block"
                            >
                              What is {item.percent}% of {item.number}?
                            </Link>
                            <span className="text-xs text-muted-foreground font-mono">
                              ({item.percent} ÷ 100) × {item.number}
                            </span>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-lg font-bold text-primary block">
                              ${formatNumber(result, 2)}
                            </span>
                          </div>
                        </div>

                        <div className="pt-2 border-t flex items-center justify-between text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                          <span>Step-by-step breakdown</span>
                          <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom Educational / Calculator Callout */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <HelpCircle className="h-8 w-8 text-primary mx-auto mb-3" />
          <h3 className="text-xl font-bold mb-2">Need a Custom Percentage Calculation?</h3>
          <p className="text-sm text-muted-foreground mb-6">
            If your exact numbers aren&apos;t listed above, use our interactive Percent Of Calculator to calculate any percentage with instant visual explanations.
          </p>
          <Button asChild size="lg">
            <Link href="/calculators/basic-percent/percent-of">
              Open Percent Of Calculator <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
