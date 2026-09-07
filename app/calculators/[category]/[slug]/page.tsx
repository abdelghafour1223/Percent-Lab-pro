import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CATEGORIES, getCalculatorBySlug, getRelatedCalculators } from '@/data/calculators';
import { FRACTION_PERCENT_PAGES, getFractionPageData } from '@/lib/fraction-pages';
import { formatNumber } from '@/lib/utils';
import { CalculatorForm } from '@/components/calculator-form';
import { ArrowRight } from 'lucide-react';

interface CalculatorPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];

  for (const category of CATEGORIES) {
    for (const calculator of category.calculators) {
      params.push({
        category: category.id,
        slug: calculator.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const { category: categoryId, slug } = await params;
  const calculator = getCalculatorBySlug(categoryId, slug);

  if (!calculator) {
    return {
      title: 'Calculator Not Found',
    };
  }

  return {
    title: calculator.seo.title,
    description: calculator.seo.description,
    alternates: {
      canonical: `https://www.percentlab.app/calculators/${categoryId}/${slug}`,
    },
    openGraph: {
      title: calculator.seo.title,
      description: calculator.seo.description,
      url: `https://www.percentlab.app/calculators/${categoryId}/${slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: calculator.seo.title,
      description: calculator.seo.description,
    },
  };
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { category: categoryId, slug } = await params;
  const calculator = getCalculatorBySlug(categoryId, slug);
  const category = CATEGORIES.find(cat => cat.id === categoryId);

  if (!calculator || !category) {
    notFound();
  }

  const relatedCalculators = getRelatedCalculators(categoryId, slug, 3);

  // JSON-LD Schemas - Consolidated for crawl efficiency (seo-schema skill)
  // NOTE: HowTo rich results removed Sept 2023 → HowTo intentionally omitted.
  // Single SoftwareApplication (not duplicated WebApplication) to stay well
  // under Googlebot 2MB HTML fetch limit.

  // 1. SoftwareApplication Schema - Calculator Tool with enhanced SEO content
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": calculator.title,
    "url": `https://www.percentlab.app/calculators/${categoryId}/${slug}`,
    "applicationCategory": calculator.webAppSchema?.applicationCategory || "CalculatorApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": calculator.webAppSchema?.detailedDescription || calculator.description,
    "featureList": calculator.webAppSchema?.featureList || [
      "Instant calculation results",
      "Step-by-step explanation",
      "Real-world examples with formulas",
      "Mobile and desktop friendly",
      "Free to use with no registration",
      "Privacy-focused - no data storage"
    ],
    "browserRequirements": "Requires JavaScript",
    "potentialAction": {
      "@type": "CalculateAction",
      "name": `Calculate ${calculator.title.toLowerCase()}`,
      "description": `Perform ${calculator.title.toLowerCase()} calculations instantly`,
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://www.percentlab.app/calculators/${categoryId}/${slug}`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      }
    }
  };

  // 2. FAQPage Schema (kept — 1:1 with visible FAQ; no rich-result benefit
  // since May 2026 retirement, but useful for AI citability)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": calculator.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  // 3. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.percentlab.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators",
        "item": "https://www.percentlab.app/#categories"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category.title,
        "item": `https://www.percentlab.app/calculators/${categoryId}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": calculator.title,
        "item": `https://www.percentlab.app/calculators/${categoryId}/${slug}`
      }
    ]
  };

  return (
    <>
      {/* 3 Structured Data Schemas: SoftwareApplication + FAQ + Breadcrumb */}
      {/* 1. Calculator-specific SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      {/* 2. FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* 3. BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors" aria-label="Go to PercentLab homepage">
            Home
          </Link>
          <span>/</span>
          <Link href="/#categories" className="hover:text-primary transition-colors" aria-label="Browse all calculator categories">
            Categories
          </Link>
          <span>/</span>
          <Link href={`/calculators/${categoryId}`} className="hover:text-primary transition-colors" aria-label={`View all ${category.title} calculators`}>
            {category.title}
          </Link>
          <span>/</span>
          <span className="text-foreground">{calculator.title}</span>
        </nav>

        {/* Page Header */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {calculator.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {calculator.description}
          </p>
        </section>

        {/* Calculator Form */}
        <section className="mb-12">
          <CalculatorForm calculator={calculator} categoryId={categoryId} />
        </section>

        {/* Ad Slot */}
        <div className="ad-slot max-w-4xl mx-auto my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Formula & Example */}
        <section className="mb-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Formula</h3>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono">{calculator.formula}</code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Example</h3>
                <div className="space-y-2">
                  {Object.entries(calculator.example).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Complete Guide — long-form depth below the tool (seo-content skill).
            Rendered only when calculator.guide exists. Tool profile styling:
            quiet hierarchy, hairline dividers, dense table with tabular
            numbers and row hover, no decorative noise. */}
        {calculator.guide && (
          <section className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Complete Guide</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Reviewed by <Link href="/about" className="text-primary hover:underline">PercentLab Editorial Team</Link>
              {' '}· Last updated: <time dateTime={calculator.lastUpdated}>{calculator.lastUpdated}</time>
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              {calculator.guide.intro.map((para, i) => (
                <p key={i} className="text-base">{para}</p>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">Worked examples</h3>
            <div className="space-y-4 mb-8">
              {calculator.guide.workedExamples.map((ex, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-3">{ex.title}</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground mb-3">
                      {ex.steps.map((step, j) => (
                        <li key={j}>{step}</li>
                      ))}
                    </ol>
                    <p className="text-sm font-medium text-foreground border-t pt-3">{ex.result}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">{calculator.guide.comparisonTable.caption}</h3>
            <div className="overflow-x-auto rounded-lg border mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    {calculator.guide.comparisonTable.headers.map((h) => (
                      <th key={h} scope="col" className="text-left font-semibold px-4 py-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="tabular-nums">
                  {calculator.guide.comparisonTable.rows.map((row, i) => (
                    <tr key={i} className="border-b last:border-0 hover:bg-muted/40 transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className={`px-4 py-3 ${j === 0 ? 'text-muted-foreground' : 'font-medium'}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mb-4">Mistakes to avoid</h3>
            <div className="space-y-4 mb-8">
              {calculator.guide.mistakes.map((m, i) => (
                <div key={i} className="border-l-2 border-primary/60 pl-4">
                  <h4 className="font-semibold text-foreground">{m.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>

            {calculator.guide.relatedLinks && calculator.guide.relatedLinks.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Continue with</h3>
                <div className="flex flex-wrap gap-3">
                  {calculator.guide.relatedLinks.map((link) => (
                    <Button key={link.href} asChild variant="outline" size="lg" className="min-h-[48px] font-semibold">
                      <Link href={link.href} aria-label={link.anchor}>
                        {link.label} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* FAQ Section */}
        <section className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {calculator.faq.map((item, index) => (
              <AccordionItem key={`faq-${index}`} value={`faq-${index}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Common Score Conversions — inverse-percentage cluster pages (allowlist-driven) */}
        {slug === 'fraction-to-percent' && FRACTION_PERCENT_PAGES.length > 0 && (
          <section className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Common Score Conversions</h2>
            <p className="text-muted-foreground mb-6">
              Step-by-step answers for the most-searched &quot;out of&quot; score conversions, with a
              prefilled calculator for each one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FRACTION_PERCENT_PAGES.map((page) => {
                const percentLabel = formatNumber(getFractionPageData(page).percentage, 2).replace(/\.00$/, '');
                return (
                  <Link
                    key={page.slug}
                    href={`/${page.slug}`}
                    className="group flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors"
                    aria-label={`See what ${page.part} out of ${page.whole} is as a percent`}
                  >
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        What Is {page.part} Out of {page.whole} as a Percent?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {page.part}/{page.whole} = {percentLabel}% — steps, simplified fraction &amp; score breakdown
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Calculators */}
        {relatedCalculators.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCalculators.map((relatedCalc) => {
                const relatedCategory = CATEGORIES.find(cat =>
                  cat.calculators.some(calc => calc.slug === relatedCalc.slug)
                );
                return (
                  <Card key={relatedCalc.slug} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">{relatedCalc.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {relatedCalc.description}
                      </p>
                      <Link
                        href={`/calculators/${relatedCategory?.id}/${relatedCalc.slug}`}
                        className="inline-flex items-center text-sm text-primary hover:underline"
                        aria-label={`Try ${relatedCalc.title} calculator`}
                      >
                        Try Calculator <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Popular Calculations - Show only for percent-of calculator */}
        {slug === 'percent-of' && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Popular Percentage Calculations</h2>
            <p className="text-muted-foreground mb-6">Quick answers to the most common percentage questions</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { percent: 10, number: 100 },
                { percent: 15, number: 100 },
                { percent: 20, number: 100 },
                { percent: 25, number: 100 },
                { percent: 20, number: 150 },
                { percent: 30, number: 200 },
                { percent: 10, number: 500 },
                { percent: 15, number: 200 },
                { percent: 50, number: 100 },
                { percent: 25, number: 200 },
                { percent: 10, number: 1000 },
                { percent: 20, number: 500 },
              ].map(({ percent, number }) => {
                const result = (percent / 100) * number;
                return (
                  <Link
                    key={`${percent}-${number}`}
                    href={`/what-is-${percent}-percent-of-${number}`}
                    className="group p-4 rounded-lg border bg-card hover:shadow-lg hover:border-primary/50 transition-all"
                  >
                    <div className="text-center space-y-2">
                      <div className="text-sm font-medium text-muted-foreground">
                        {percent}% of ${number}
                      </div>
                      <div className="text-xl font-bold text-primary">
                        ${result.toFixed(2)}
                      </div>
                      <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-1">
                        View Details <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Learning Hub CTA */}
        <section className="mb-12 max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 pb-6">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Want to improve your percentage skills?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                  Visit our Learning Hub for tutorials and in-depth guides on percentage calculations.
                </p>
                <Button asChild size="lg" className="min-h-[48px] text-base font-semibold">
                  <Link href="/blog">
                    Visit Learning Hub <ArrowRight className="ml-2 h-4 w-4" aria-label="Navigate to learning hub" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Last Updated */}
        <div className="text-center text-sm text-muted-foreground">
          Last updated: {calculator.lastUpdated}
        </div>
      </div>
    </>
  );
}
