import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BLOG_POSTS, getBlogPost } from '@/data/blog-posts';
import { getBlogCategoryBySlug } from '@/data/blog';
import { ArrowRight, Clock, HelpCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getBlogPost(category, slug);

  if (!post) {
    return {
      title: 'Article Not Found',
      robots: { index: false, follow: false },
    };
  }

  const url = `https://www.percentlab.app/blog/${post.category}/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { category, slug } = await params;
  const post = getBlogPost(category, slug);

  if (!post) {
    notFound();
  }

  const categoryInfo = getBlogCategoryBySlug(post.category);
  const url = `https://www.percentlab.app/blog/${post.category}/${post.slug}`;
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    url,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    wordCount: post.intro.join(' ').split(/\s+/).length,
    author: {
      '@type': 'Organization',
      name: 'PercentLab Editorial Team',
      url: 'https://www.percentlab.app/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PercentLab',
      url: 'https://www.percentlab.app/',
    },
  };

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
        name: 'Blog',
        item: 'https://www.percentlab.app/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: categoryInfo?.title ?? 'Blog',
        item: `https://www.percentlab.app/blog/${post.category}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: url,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href={`/blog/${post.category}`}
            className="hover:text-primary transition-colors"
          >
            {categoryInfo?.title ?? post.category}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground font-medium" aria-current="page">
            {post.title}
          </span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-muted-foreground flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            {post.readingMinutes} min read · Published{' '}
            <time dateTime={post.publishedAt}>{post.publishedAt}</time> · Updated{' '}
            <time dateTime={post.updatedAt}>{post.updatedAt}</time>
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6 space-y-4">
            {post.intro.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </CardContent>
        </Card>

        {post.sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
            <div className="space-y-4">
              {section.paragraphs.map((para, i) => (
                <p key={i} className="text-base text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Worked Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-6">
              {post.workedExamples.map((example, index) => (
                <li key={index} className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {example.title}
                  </h3>
                  <ol className="space-y-2 pl-9">
                    {example.steps.map((step) => (
                      <li key={step} className="text-sm text-muted-foreground">
                        {step}
                      </li>
                    ))}
                  </ol>
                  <div className="ml-9 bg-primary/10 border-l-4 border-primary px-3 py-2 rounded">
                    <p className="text-sm font-medium">{example.result}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{post.comparisonTable.caption}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    {post.comparisonTable.headers.map((header) => (
                      <th key={header} className="text-left py-2 pr-4 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {post.comparisonTable.rows.map((row) => (
                    <tr key={row.join('|')} className="border-b last:border-0">
                      {row.map((cell) => (
                        <td key={cell} className="py-2 pr-4 text-muted-foreground tabular-nums">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Mistakes to Avoid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {post.mistakes.map((mistake, index) => (
                <div key={index} className="bg-muted/50 p-4 rounded-lg border">
                  <h3 className="font-semibold mb-1">{mistake.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{mistake.text}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="ad-slot my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {post.faqs.map((item, index) => (
                <div key={index} className="bg-muted/40 p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2 text-base">{item.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Try It Yourself</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {post.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors group"
                  aria-label={link.anchor}
                >
                  <p className="font-medium text-sm">{link.label}</p>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {relatedPosts.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Keep Reading</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.category}/${related.slug}`}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors group"
                  >
                    <p className="font-medium text-sm">{related.title}</p>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 text-center text-sm text-muted-foreground space-y-1">
          <p>
            Written by <Link href="/about" className="text-primary hover:underline">PercentLab Editorial Team</Link>
            {' '}· Last updated: <time dateTime={post.updatedAt}>{post.updatedAt}</time>
          </p>
        </div>
      </div>
    </>
  );
}
