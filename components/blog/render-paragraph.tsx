import Link from 'next/link';
import React from 'react';

// Minimal inline-link renderer for article prose.
// Authors write [label](/path) inside paragraph strings; anything else
// (including malformed markup or off-site URLs) renders as plain text,
// so a typo can never produce a broken or unsafe link.
const INLINE_LINK_RE = /\[([^\]]+)\]\((\/[^)]+)\)/g;

export function renderParagraph(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  INLINE_LINK_RE.lastIndex = 0;
  while ((match = INLINE_LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    nodes.push(
      <Link
        key={`${keyPrefix}-link-${i}`}
        href={href}
        className="text-primary hover:underline font-medium"
      >
        {label}
      </Link>
    );
    lastIndex = match.index + match[0].length;
    i += 1;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

// Test helper: extract every inline href from a paragraph string.
export function extractInlineHrefs(text: string): string[] {
  const hrefs: string[] = [];
  INLINE_LINK_RE.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = INLINE_LINK_RE.exec(text)) !== null) {
    hrefs.push(match[2]);
  }
  return hrefs;
}
