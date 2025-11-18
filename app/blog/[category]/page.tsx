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
  Clock,
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
      title: 'Category Not Found | PercentLab Blog',
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

        {/* Coming Soon Articles */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">Upcoming Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="opacity-60">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-start space-y-3">
                    <Clock className="h-8 w-8 text-muted-foreground" />
                    <div className="space-y-2 w-full">
                      <div className="h-5 bg-muted rounded w-3/4"></div>
                      <div className="h-3 bg-muted rounded w-full"></div>
                      <div className="h-3 bg-muted rounded w-full"></div>
                      <div className="h-3 bg-muted rounded w-2/3"></div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground mt-2">
                      Coming Soon
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
