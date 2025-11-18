import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CATEGORIES, getCategoryById } from '@/data/calculators';
import { ArrowRight, Clock } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);

  if (!category) {
    return {
      title: 'Category Not Found | PercentLab',
    };
  }

  return {
    title: `${category.title} - Percentage Calculators | PercentLab`,
    description: `${category.description} Free online calculators with step-by-step explanations.`,
    alternates: {
      canonical: `https://www.percentlab.app/calculators/${categoryId}`,
    },
    openGraph: {
      title: `${category.title} | PercentLab`,
      description: category.description,
      url: `https://www.percentlab.app/calculators/${categoryId}`,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);

  if (!category) {
    notFound();
  }

  // JSON-LD for CollectionPage
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": category.title,
    "description": category.description,
    "url": `https://www.percentlab.app/calculators/${categoryId}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": category.calculators.length,
      "itemListElement": category.calculators.map((calc, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebPage",
          "name": calc.title,
          "description": calc.description,
          "url": `https://www.percentlab.app/calculators/${categoryId}/${calc.slug}`
        }
      }))
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
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
          <span className="text-foreground">{category.title}</span>
        </nav>

        {/* Category Header */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {category.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-4">
            {category.description}
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Badge variant="default" className="text-sm py-1.5 px-3">
              {category.calculators.length} {category.calculators.length === 1 ? 'Calculator' : 'Calculators'} Available
            </Badge>
            {category.comingSoon.length > 0 && (
              <Badge variant="outline" className="text-sm py-1.5 px-3">
                {category.comingSoon.length} Coming Soon
              </Badge>
            )}
          </div>
        </section>

        {/* Available Calculators */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Available Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.calculators.map((calculator) => (
              <Card key={calculator.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{calculator.title}</CardTitle>
                      <CardDescription>{calculator.description}</CardDescription>
                    </div>
                    {calculator.hasChart && (
                      <Badge variant="secondary" className="shrink-0">Chart</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">Formula</div>
                      <div className="text-sm font-mono">{calculator.formula}</div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">Example</div>
                      <div className="text-sm">
                        {Object.entries(calculator.example).map(([key, value], index, arr) => (
                          <span key={key}>
                            <strong>{key}:</strong> {value}
                            {index < arr.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/calculators/${categoryId}/${calculator.slug}`}>
                        Use Calculator <ArrowRight className="ml-2 h-4 w-4" aria-label="Navigate to calculator" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        {category.comingSoon.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.comingSoon.map((item) => (
                <Card key={item} className="opacity-60">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <Clock className="h-8 w-8 text-muted-foreground" aria-label="Coming soon calculator icon" />
                      <div className="text-sm font-medium capitalize">
                        {item.replace(/-/g, ' ')}
                      </div>
                      <Badge variant="outline" className="text-xs">Coming Soon</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Ad Slot */}
        <div className="ad-slot max-w-4xl mx-auto my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Other Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Explore Other Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CATEGORIES.filter(cat => cat.id !== categoryId).map((cat) => (
              <Card key={cat.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={`/calculators/${cat.id}`}>
                      View Calculators
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
