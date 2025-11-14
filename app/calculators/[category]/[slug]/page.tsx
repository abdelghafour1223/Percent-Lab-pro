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
      title: 'Calculator Not Found | PercentLab',
    };
  }

  return {
    title: calculator.seo.title,
    description: calculator.seo.description,
    alternates: {
      canonical: `https://percentlab.app/calculators/${categoryId}/${slug}`,
    },
    openGraph: {
      title: calculator.seo.title,
      description: calculator.seo.description,
      url: `https://percentlab.app/calculators/${categoryId}/${slug}`,
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

  // JSON-LD Schemas - All 4 required schemas for enterprise SEO

  // 1. WebApplication Schema
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": calculator.title,
    "url": `https://percentlab.app/calculators/${categoryId}/${slug}`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": calculator.description,
    "featureList": [
      "Instant calculation",
      "Step-by-step explanation",
      "Real-world examples",
      "Mobile friendly",
      "Free to use"
    ],
    "browserRequirements": "Requires JavaScript"
  };

  // 2. FAQPage Schema
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

  // 3. HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to use ${calculator.title}`,
    "description": calculator.description,
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter your values",
        "text": `Enter the required values for ${calculator.title.toLowerCase()} calculation.`,
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Click Calculate",
        "text": "Click the calculate button to get your result.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Review the result",
        "text": "See your result with detailed step-by-step explanation and formula breakdown.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "View detailed steps",
        "text": "Review the complete mathematical breakdown and learn how the calculation works.",
        "position": 4
      }
    ],
    "totalTime": "PT1M"
  };

  // 4. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://percentlab.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators",
        "item": "https://percentlab.app/#categories"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category.title,
        "item": `https://percentlab.app/calculators/${categoryId}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": calculator.title,
        "item": `https://percentlab.app/calculators/${categoryId}/${slug}`
      }
    ]
  };

  return (
    <>
      {/* All 4 Structured Data Schemas for Enterprise SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
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
