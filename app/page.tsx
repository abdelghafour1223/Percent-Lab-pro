import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CATEGORIES, getAllCalculators } from '@/data/calculators';
import {
  Calculator,
  DollarSign,
  GraduationCap,
  ShoppingCart,
  ArrowRight,
  BookOpen,
  Zap,
  Target,
} from 'lucide-react';

const iconMap = {
  'calculator': Calculator,
  'dollar-sign': DollarSign,
  'graduation-cap': GraduationCap,
  'shopping-cart': ShoppingCart,
};

export default function HomePage() {
  const allCalculators = getAllCalculators();
  const featuredCalculators = allCalculators.slice(0, 4); // One from each category

  // JSON-LD for SoftwareApplication
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PercentLab - Percentage Calculator Suite",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "description": "Free online percentage calculators organized by category. Calculate percentages, ROI, grades, discounts and more with step-by-step explanations."
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />

      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Percentage Calculators for Every Need
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose from our collection of specialized percentage calculators. Get instant results with detailed step-by-step explanations and real-world examples.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#categories">
                Browse Categories <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant results with our optimized calculation engine. No waiting, no delays.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Learn How It Works</h3>
                  <p className="text-sm text-muted-foreground">
                    Every calculation includes detailed step-by-step explanations to help you understand.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Specialized Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Purpose-built calculators for finance, education, shopping, and everyday calculations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories Overview */}
        <section id="categories" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Calculator Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Calculator;
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        <strong>{category.calculators.length}</strong> calculator{category.calculators.length !== 1 ? 's' : ''} available
                      </div>
                      <Button asChild className="w-full">
                        <Link href={`/calculators/${category.id}`}>
                          View Calculators <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      {category.comingSoon.length > 0 && (
                        <div className="text-xs text-muted-foreground">
                          + {category.comingSoon.length} more coming soon
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Featured Calculators */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCalculators.map((calculator) => {
              const category = CATEGORIES.find(cat =>
                cat.calculators.some(calc => calc.slug === calculator.slug)
              );
              return (
                <Card key={calculator.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{calculator.title}</CardTitle>
                    <CardDescription>{calculator.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="text-sm font-mono text-muted-foreground">
                          {calculator.formula}
                        </div>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={`/calculators/${category?.id}/${calculator.slug}`}>
                          Use Calculator <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Ad Slot */}
        <div className="ad-slot max-w-4xl mx-auto my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Blog CTA */}
        <section className="mb-16">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Learn More About Percentages</h3>
                  <p className="text-muted-foreground">
                    Explore our comprehensive guides, tutorials, and articles to master percentage calculations for real-world applications.
                  </p>
                </div>
                <Button asChild size="lg" variant="default">
                  <Link href="/blog">
                    Read Our Blog <BookOpen className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose PercentLab */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose PercentLab?</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground text-center mb-8">
              PercentLab is your comprehensive suite of percentage calculators, designed to handle every calculation scenario you encounter in daily life, work, or study.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">For Students</h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate grade percentages, understand test scores, and track academic progress with our education-focused calculators.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">For Professionals</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyze ROI, profit margins, and financial metrics with professional-grade calculators designed for business use.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">For Shoppers</h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate discounts, sales tax, tip amounts, and final prices with our everyday shopping calculators.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">For Everyone</h3>
                  <p className="text-sm text-muted-foreground">
                    Master basic percentage calculations with clear explanations, formulas, and real-world examples.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
