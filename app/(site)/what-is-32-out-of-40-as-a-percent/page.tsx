import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalculatorForm } from '@/components/calculator-form';
import { getCalculatorBySlug } from '@/data/calculators';
import { getFractionPage, getFractionPageData, buildFractionPageSchemas } from '@/lib/fraction-pages';
import { formatNumber } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const PAGE = getFractionPage('what-is-32-out-of-40-as-a-percent');

export async function generateMetadata(): Promise<Metadata> {
  if (!PAGE) return { title: 'Page Not Found' };
  const { part, whole } = PAGE;
  const percentLabel = formatNumber(getFractionPageData(PAGE).percentage, 2);
  const title = `What Is ${part} Out of ${whole} as a Percent?`;
  const description = `${part} out of ${whole} equals ${percentLabel}%. See the step-by-step conversion, the simplified fraction ${getFractionPageData(PAGE).simplified.numerator}/${getFractionPageData(PAGE).simplified.denominator}, the test-score breakdown, and a prefilled fraction-to-percent calculator.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.percentlab.app/${PAGE.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.percentlab.app/${PAGE.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function FractionPercentPage() {
  if (!PAGE) notFound();
  const { part, whole } = PAGE;
  const data = getFractionPageData(PAGE);
  const schemas = buildFractionPageSchemas(PAGE);
  const percentLabel = formatNumber(data.percentage, 2);
  const title = `What Is ${part} Out of ${whole} as a Percent?`;

  const fractionCalc = getCalculatorBySlug('basic-percent', 'fraction-to-percent');
  if (!fractionCalc) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
      />

      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
        {/* Breadcrumbs (matches BreadcrumbList schema) */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors" aria-label="Go to PercentLab homepage">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/calculators/basic-percent/fraction-to-percent"
            className="hover:text-primary transition-colors"
            aria-label="Open the Fraction to Percent calculator"
          >
            Fraction to Percent
          </Link>
          <span>/</span>
          <span className="text-foreground">{title}</span>
        </nav>

        {/* Immediate answer — server-rendered, visible without JavaScript */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
          <p className="text-3xl md:text-4xl font-bold text-primary">
            {part} out of {whole} = {percentLabel}%
          </p>
        </header>

        {/* Compact explanation — one block, no repeated formula essays */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Convert {part}/{whole} to a Percent</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">1</span>
                <span className="text-muted-foreground flex-1 pt-1">
                  Divide the part by the whole: <strong className="text-foreground font-mono">{part} ÷ {whole} = {formatNumber(data.decimal, 4)}</strong>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">2</span>
                <span className="text-muted-foreground flex-1 pt-1">
                  Multiply by 100: <strong className="text-foreground font-mono">{formatNumber(data.decimal, 4)} × 100 = {percentLabel}%</strong>
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">3</span>
                <span className="text-muted-foreground flex-1 pt-1">
                  The fraction simplifies to <strong className="text-foreground font-mono">{part}/{whole} = {data.simplified.numerator}/{data.simplified.denominator}</strong>, and the decimal form is <strong className="text-foreground font-mono">{formatNumber(data.decimal, 4)}</strong>.
                </span>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Prefilled calculator — the only client island on this page */}
        <section className="mb-12" aria-label={`${part} out of ${whole} as a percent calculator`}>
          <CalculatorForm
            calculator={fractionCalc}
            categoryId="basic-percent"
            initialValues={{ numerator: String(part), denominator: String(whole) }}
          />
        </section>

        {/* Score context */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{part}/{whole} as a Test Score</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <dt className="text-sm text-muted-foreground mb-1">Points correct</dt>
                <dd className="text-2xl font-bold text-foreground">{part}</dd>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <dt className="text-sm text-muted-foreground mb-1">Points missed</dt>
                <dd className="text-2xl font-bold text-foreground">{data.missed}</dd>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <dt className="text-sm text-muted-foreground mb-1">Percentage</dt>
                <dd className="text-2xl font-bold text-primary">{percentLabel}%</dd>
              </div>
            </dl>
            <p className="text-sm text-muted-foreground">
              On the common US 90/80/70/60 scale, {percentLabel}% is a {data.grade}. Grading systems vary by school.
            </p>
          </CardContent>
        </Card>

        {/* Nearby scores — compact, server-rendered, current row marked; no links to nonexistent pages */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Scores Near {part}/{whole}</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <caption className="sr-only">Percentage for scores near {part} out of {whole}</caption>
              <thead>
                <tr className="text-left text-muted-foreground border-b">
                  <th scope="col" className="py-2 font-medium">Score</th>
                  <th scope="col" className="py-2 font-medium">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {data.nearby.map((row) => (
                  <tr key={row.part} className={row.isCurrent ? 'bg-primary/5 font-semibold' : 'border-b last:border-0'}>
                    <td className="py-2">
                      {row.part}/{whole}
                      {row.isCurrent && <span className="ml-2 text-xs text-primary">(this page)</span>}
                    </td>
                    <td className="py-2">{row.percentageLabel}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* FAQ — visible HTML and FAQPage JSON-LD come from the exact same data */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {PAGE.faq.map((item) => (
                <div key={item.question} className="bg-muted/40 p-4 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2 text-base">{item.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related tools — same fraction/score intent only */}
        <Card>
          <CardHeader>
            <CardTitle>Related Percentage Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Link
                href="/calculators/basic-percent/fraction-to-percent"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors group"
                aria-label="Open the Fraction to Percent calculator"
              >
                <span className="font-medium">Fraction to Percent Calculator</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href="/calculators/education/test-score"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors group"
                aria-label="Open the Test Score calculator"
              >
                <span className="font-medium">Test Score Calculator</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link
                href="/calculators/education/grade-percentage"
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-colors group"
                aria-label="Open the Grade Percentage calculator"
              >
                <span className="font-medium">Grade Percentage Calculator</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
