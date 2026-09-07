import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.percentlab.app'),

  title: {
    default: 'PercentLab - Free Percentage Calculator & Tools',
    template: '%s | PercentLab',
  },
  alternates: {
    // NOTE: child pages override this with their own self-referencing
    // canonical. Keep root as absolute URL to avoid inheriting a
    // relative "/" canonical on pages that forget to set one.
    canonical: 'https://www.percentlab.app/',
  },
  description:
    'Free percentage calculator with step-by-step solutions. Calculate percentages, increases, decreases and more with detailed explanations and examples.',
  keywords: [
    'percentage calculator',
    'percent calculator',
    'percent of number',
    'percentage increase',
    'percentage decrease',
    'calculate percentage',
    'percent of',
    'percentage change',
    'step-by-step calculation',
    'online calculator',
  ],
  authors: [{ name: 'PercentLab' }],
  creator: 'PercentLab',
  publisher: 'PercentLab',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.percentlab.app',
    title: 'PercentLab - Free Online Percentage Calculator',
    description:
      'Free percentage calculator with detailed explanations. Calculate percentages, increases, decreases, and more.',
    siteName: 'PercentLab',
    images: ['/opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PercentLab - Free Online Percentage Calculator',
    description:
      'Free percentage calculator with detailed explanations. Calculate percentages, increases, decreases, and more.',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': '2D132559A5A87D89B25589B29928083A',
      'p:domain_verify': '7ac34e0ff4153e43915ba6b4922f5840',
    },
  },
  icons: {
    icon: [
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon1.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // NOTE: site chrome (Header/Footer/Analytics/Ads/Organization schema)
  // lives in app/(site)/layout.tsx so chromeless routes (/embed/*) skip it.
  // Root keeps only html/body + theme + global CSS.
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
