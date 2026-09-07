'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import {
  WidgetDef,
  WidgetWidth,
  buildSnippet,
  widgetEmbedUrl,
} from '@/data/widgets';

const WIDTHS: Array<{ value: WidgetWidth; label: string }> = [
  { value: '100%', label: 'Responsive' },
  { value: '480px', label: 'Medium' },
  { value: '360px', label: 'Compact' },
];

export function WidgetCard({ widget }: { widget: WidgetDef }) {
  const [width, setWidth] = useState<WidgetWidth>('100%');
  const [copied, setCopied] = useState(false);
  const snippet = buildSnippet(widget, width);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
    } catch {
      // Clipboard API unavailable (permissions/HTTP): select-and-copy fallback
      const ta = document.createElement('textarea');
      ta.value = snippet;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card id={widget.slug} className="scroll-mt-24">
      <CardHeader>
        <CardTitle>{widget.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{widget.blurb}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="overflow-hidden rounded-xl border bg-background">
          <iframe
            src={widgetEmbedUrl(widget)}
            width="100%"
            height={widget.height}
            className="w-full"
            loading="lazy"
            title={`${widget.title} live preview`}
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Size:</span>
          {WIDTHS.map((w) => (
            <Button
              key={w.value}
              variant={width === w.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setWidth(w.value)}
            >
              {w.label}
            </Button>
          ))}
        </div>
        <pre className="max-h-40 overflow-auto rounded-lg bg-muted p-3 font-mono text-xs leading-relaxed">
          {snippet}
        </pre>
        <Button onClick={handleCopy} className="w-full sm:w-auto">
          {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
          {copied ? 'Copied!' : 'Copy embed code'}
        </Button>
      </CardContent>
    </Card>
  );
}
