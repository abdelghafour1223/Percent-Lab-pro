'use client';

import * as React from 'react';

interface AdSenseProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

export function AdSense({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
}: AdSenseProps) {
  React.useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`my-8 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-0000000000000000'}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}

// Placeholder for development
export function AdPlaceholder({ className = '' }: { className?: string }) {
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID) {
    return null;
  }

  return (
    <div className={`my-8 ${className}`}>
      <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center">
        <p className="text-sm text-muted-foreground">Ad Placeholder</p>
        <p className="text-xs text-muted-foreground/60 mt-1">
          AdSense will appear here in production
        </p>
      </div>
    </div>
  );
}
