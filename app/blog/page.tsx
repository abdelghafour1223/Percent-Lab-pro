import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BLOG_CATEGORIES } from '@/data/blog';
import {
  Calculator,
  DollarSign,
  GraduationCap,
  ShoppingCart,
  ArrowRight,
  Clock,
} from 'lucide-react';

const iconMap = {
  'calculator': Calculator,
  'dollar-sign': DollarSign,
  'graduation-cap': GraduationCap,
  'shopping-cart': ShoppingCart,
};

export const metadata: Metadata = {
  title: 'PercentLab Blog — Percentage Guides, Tutorials & Insights',
  description: 'Explore upcoming guides and tutorials to master percentage calculations, finance concepts, and practical real-world math.',
  alternates: {
    canonical: 'https://www.percentlab.app/blog',
  },
  openGraph: {
    title: 'PercentLab Blog — Percentage Guides, Tutorials & Insights',
    description: 'Explore upcoming guides and tutorials to master percentage calculations, finance concepts, and practical real-world math.',
    url: 'https://www.percentlab.app/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  // JSON-LD for Blog + BreadcrumbList
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "PercentLab Blog",
    "description": "Guides and tutorials to master percentage calculations, finance concepts, and practical real-world math.",
    "url": "https://www.percentlab.app/blog",
    "publisher": {
      "@type": "Organization",
      "name": "PercentLab",
      "url": "https://www.percentlab.app"
    }
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
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
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
          <span className="text-foreground">Blog</span>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 px-2">
            PercentLab Blog – Learn About Percentages
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4 leading-relaxed">
            Discover comprehensive guides, tutorials, and insights to master percentage calculations.
            From basic concepts to advanced financial applications, we're building a complete learning hub
            to help you understand percentages in every context.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Coming Soon – Tutorials & Articles</span>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 px-4">
            Browse Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {BLOG_CATEGORIES.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Calculator;
              return (
                <Card key={category.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base sm:text-lg">{category.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full min-h-[44px] text-base sm:text-sm font-semibold">
                      <Link href={`/blog/${category.slug}`}>
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Coming Soon Articles Grid */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 px-4">
            Upcoming Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="opacity-60">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <Clock className="h-10 w-10 text-muted-foreground" />
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground">
                      Coming Soon
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 pb-6 px-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Start Calculating Now
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                While we're building our learning hub, try our powerful calculators to solve your percentage problems instantly.
              </p>
              <Button asChild size="lg" className="min-h-[48px] text-base font-semibold">
                <Link href="/#categories">
                  Browse Calculators <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
