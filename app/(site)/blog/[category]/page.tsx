import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BLOG_CATEGORIES, getBlogCategoryBySlug, getRelatedBlogCategories } from '@/data/blog';
import {
  Calculator,
  DollarSign,
  GraduationCap,
  ShoppingCart,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  'calculator': Calculator,
  'dollar-sign': DollarSign,
  'graduation-cap': GraduationCap,
  'shopping-cart': ShoppingCart,
};

interface BlogCategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getBlogCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: {
      canonical: `https://www.percentlab.app/blog/${categorySlug}`,
    },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `https://www.percentlab.app/blog/${categorySlug}`,
      type: 'website',
    },
  };
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getBlogCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const relatedCategories = getRelatedBlogCategories(categorySlug, 3);
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Calculator;

  // Hub content per category (seo-content skill: 800+ word equivalent depth,
  // unique per hub to avoid thin/duplicate "Coming Soon" signals that cause
  // Crawled - currently not indexed)
  const hubContent: Record<string, {
    intro: string[];
    guides: Array<{ title: string; desc: string; href: string; anchor: string }>;
    faqs: Array<{ q: string; a: string }>;
  }> = {
    'percentage-basics': {
      intro: [
        'Percentages express a part of a whole as hundredths. Mastering the three core forms — percent-of, what-percent, and percent-change — covers 90% of everyday calculations, from shopping discounts to data interpretation.',
        'Start with the formula Result = (Percentage ÷ 100) × Number. For example, 20% of 80 is (20 ÷ 100) × 80 = 16. Our calculators show every step so you learn the method, not just the answer.',
        'Common pitfalls include confusing percentage points with percent change, and forgetting to convert back from decimals. Each guide below links to a live calculator where you can practice with your own numbers.',
      ],
      guides: [
        { title: 'Percent Of — The Foundation', desc: 'Calculate X% of Y with step-by-step breakdowns and mental-math shortcuts.', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
        { title: 'What Percent — Reverse Lookup', desc: 'Find what percentage one number is of another, with fraction shortcuts.', href: '/calculators/basic-percent/what-percent', anchor: 'Try What Percent' },
        { title: '50 Common Calculations Directory', desc: 'Instant answers for the most-searched values (50–1000) with full working.', href: '/calculators/basic-percent/common-percentage-calculations', anchor: 'Browse 50 Common Calculations' },
      ],
      faqs: [
        { q: 'What is the fastest way to calculate 10% of any number?', a: 'Move the decimal one place left. 10% of 250 is 25.0. Double it for 20%, halve it for 5%.' },
        { q: 'How do I convert a fraction to a percent?', a: 'Divide part by whole, multiply by 100. 32 out of 40 is (32 ÷ 40) × 100 = 80%.' },
        { q: 'What is the difference between percent and percentage points?', a: 'Going from 10% to 15% is +5 percentage points, but a 50% relative increase. Always clarify which you mean.' },
      ],
    },
    finance: {
      intro: [
        'Financial percentages — ROI, interest, margins, tax — decide whether money grows or leaks. A 1% fee difference compounded over 20 years can cost tens of thousands, so precision matters.',
        'Use ROI = ((Gain − Cost) ÷ Cost) × 100 for investments, and compound growth A = P(1 + r/n)^(nt) for savings. Our finance calculators expose every input so you can audit the math.',
        'Below are the highest-impact tools: discount and tax for spending, compound interest and mortgage for wealth building. Each includes US-specific examples.',
      ],
      guides: [
        { title: 'Discount + Sales Tax — True Cost', desc: 'Combine discounts and tax to see what you actually pay at checkout.', href: '/calculators/finance/discount', anchor: 'Calculate Your Discount' },
        { title: 'Compound Interest — Growth Engine', desc: 'Project savings growth with contributions, rate, and compounding frequency.', href: '/calculators/finance/compound-interest', anchor: 'Project Investment Growth' },
        { title: 'Mortgage — Monthly Payment', desc: 'Estimate principal + interest before you talk to a lender.', href: '/calculators/finance/mortgage-calculator', anchor: 'Estimate Mortgage Payment' },
      ],
      faqs: [
        { q: 'What is a good ROI percentage?', a: 'Context-dependent: 7–10% annualized is a common long-term stock-market benchmark before inflation; compare against risk and fees.' },
        { q: 'How do I calculate profit margin vs markup?', a: 'Margin = (Profit ÷ Revenue) × 100. Markup = (Profit ÷ Cost) × 100. A $20 profit on $80 cost is 25% margin but 33.3% markup.' },
        { q: 'Should I use APR or APY?', a: 'APR ignores compounding, APY includes it. For savings, compare APY; for loans, compare APR plus fees.' },
      ],
    },
    education: {
      intro: [
        'Grades are weighted percentages. A 90% exam worth 40% of your course counts far more than a 100% quiz worth 5%. Understanding weights prevents end-of-term surprises.',
        'Final grade = Σ(score × weight) ÷ Σ(weights). Our education calculators handle weighted averages, GPA scales, curves, and "what do I need on the final?" scenarios.',
        'Teachers, students, and parents use these tools to plan study effort where it moves the needle most.',
      ],
      guides: [
        { title: 'Final Grade — Course Outcome', desc: 'Combine assignments, exams, and weights into one predicted grade.', href: '/calculators/education/final-grade', anchor: 'Calculate Final Grade' },
        { title: 'Grade Needed — Target Planning', desc: 'Work backwards: what score do you need on the final to hit your goal?', href: '/calculators/education/grade-needed', anchor: 'Find Required Grade' },
        { title: 'Weighted Grade — Fair Averages', desc: 'Correctly average categories with different weights.', href: '/calculators/education/weighted-grade', anchor: 'Calculate Weighted Average' },
      ],
      faqs: [
        { q: 'How do I calculate my GPA from percentages?', a: 'Convert each course percent to a 4.0 point (e.g., 90–100 = 4.0 varies by school), multiply by credits, divide by total credits.' },
        { q: 'What score do I need on the final to pass?', a: 'Needed = (Target − Current × (1 − FinalWeight)) ÷ FinalWeight. Use our Grade Needed calculator for instant answers.' },
        { q: 'How does a grading curve work?', a: 'Curves adjust scores relative to class performance (e.g., bell curve or flat boost). Check your syllabus — curves vary widely.' },
      ],
    },
    shopping: {
      intro: [
        'Smart shoppers think in final price, not discount percent. A 30% off $200 ($140) beats 50% off $100 ($50 saved vs $60 saved) only when you compare absolute savings and need.',
        'True price = (Original − Discount) × (1 + TaxRate) + Fees. Stack coupons, cashback, and tax correctly — order matters when discounts compound.',
        'Use the tools below before checkout, especially during Black Friday when inflated "original" prices are common.',
      ],
      guides: [
        { title: 'Discount — Real Savings', desc: 'See savings and final price for any percent-off deal.', href: '/calculators/finance/discount', anchor: 'Calculate Discount Savings' },
        { title: 'Sales Tax — Checkout Total', desc: 'Add state + local tax to avoid register shock.', href: '/calculators/finance/sales-tax', anchor: 'Find Total With Tax' },
        { title: 'Tip — Dine With Confidence', desc: 'Standard 15–25% gratuity math for any bill size.', href: '/calculators/daily/tip-calculator', anchor: 'Calculate Tip' },
      ],
      faqs: [
        { q: 'Is 20% off plus 10% off the same as 30% off?', a: 'No. Sequential discounts multiply: $100 → $80 → $72 (28% total), not $70. Retailers count on this confusion.' },
        { q: 'How do I spot a fake Black Friday deal?', a: 'Track price history, verify the "original" price over 30+ days, and compute unit prices. Our Black Friday hub shows verification steps.' },
        { q: 'Should I include tax when comparing deals?', a: 'Yes — always compare out-the-door totals including tax, shipping, and fees.' },
      ],
    },
  };

  const content = hubContent[categorySlug] ?? hubContent['percentage-basics'];

  // JSON-LD for CategoryPage + BreadcrumbList
  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": category.title,
    "description": category.description,
    "url": `https://www.percentlab.app/blog/${categorySlug}`,
  };

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
        "name": "Blog",
        "item": "https://www.percentlab.app/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category.title,
        "item": `https://www.percentlab.app/blog/${categorySlug}`
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 md:mb-8">
          <Link href="/" className="hover:text-primary transition-colors" aria-label="Go to PercentLab homepage">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary transition-colors" aria-label="Browse all blog articles">
            Blog
          </Link>
          <span>/</span>
          <span className="text-foreground">{category.title}</span>
        </nav>

        {/* Category Header */}
        <section className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <IconComponent className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {category.title}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {category.description}
          </p>
        </section>

        {/* Learning Hub — substantive unique content per category */}
        <section className="mb-12 md:mb-16 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">What You Will Learn</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {content.intro.map((para, i) => (
              <p key={i} className="text-base">{para}</p>
            ))}
          </div>
        </section>

        {/* Guides — deep internal links to calculators (crawl + relevance) */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">Start With These Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {content.guides.map((g) => (
              <Card key={g.href} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{g.desc}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={g.href} aria-label={g.anchor}>
                      {g.anchor} <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ — visible, 1:1 with potential schema later */}
        <section className="mb-12 md:mb-16 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Common Questions</h2>
          <div className="space-y-4">
            {content.faqs.map((f, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{f.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Last updated: <time dateTime="2026-09-07">September 7, 2026</time>
            {' '}· Reviewed by <Link href="/about" className="text-primary hover:underline">PercentLab Editorial Team</Link>
          </p>
        </section>

        {/* Ad Slot */}
        <div className="ad-slot max-w-4xl mx-auto my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Related Categories */}
        {relatedCategories.length > 0 && (
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">Explore Other Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {relatedCategories.map((relatedCat) => {
                const RelatedIcon = iconMap[relatedCat.icon as keyof typeof iconMap] || Calculator;
                return (
                  <Card key={relatedCat.slug} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <RelatedIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{relatedCat.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedCat.description}
                          </p>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="w-full mt-3">
                        <Link href={`/blog/${relatedCat.slug}`}>
                          Explore <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
