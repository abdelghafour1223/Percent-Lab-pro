import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { WidgetCard } from '@/components/widget-card';
import { WIDGETS } from '@/data/widgets';

export const metadata: Metadata = {
  title: 'Free Embeddable Percentage Calculators for Your Website | PercentLab',
  description:
    'Embed a free PercentLab calculator on your blog or store in 30 seconds. Copy-paste widget code for percent, discount, and tip calculators — no signup, with live preview.',
  alternates: {
    canonical: 'https://www.percentlab.app/widgets',
  },
};

const STEPS = [
  {
    title: '1. Pick a widget',
    text: 'Choose the calculator your readers need below. Each preview is the real tool, running live.',
  },
  {
    title: '2. Copy the code',
    text: 'Hit "Copy embed code". The snippet keeps your site fast with lazy loading and a responsive frame.',
  },
  {
    title: '3. Paste it anywhere',
    text: 'Drop it into any blog post, sidebar, or product page. It works in WordPress, Shopify, and plain HTML — no signup, free forever.',
  },
];

export default function WidgetsPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Free Calculator Widgets for Your Website
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Give your readers a working calculator in 30 seconds. Copy, paste,
          done — no signup, no cost, and it updates itself forever.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {STEPS.map((step) => (
          <Card key={step.title}>
            <CardContent className="pt-6">
              <h2 className="font-semibold mb-2">{step.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-8">
        {WIDGETS.map((widget) => (
          <WidgetCard key={widget.slug} widget={widget} />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Looking for the full versions?{' '}
        <Link href="/" className="text-primary hover:underline">
          Browse all PercentLab calculators
        </Link>
        .
      </p>
    </div>
  );
}
