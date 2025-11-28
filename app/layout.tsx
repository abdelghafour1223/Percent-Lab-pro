import type { Metadata } from 'next';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.percentlab.app'),
  alternates: {
    canonical: 'https://www.percentlab.app',
  },
  title: {
    default: 'PercentLab - Free Percentage Calculator & Tools',
    template: '%s | PercentLab',
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
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PercentLab',
    url: 'https://www.percentlab.app/',
    logo: 'https://www.percentlab.app/logo.png',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61584195726259',
      'https://x.com/percentlab',
      'https://www.youtube.com/@Percentlab',
      'https://www.threads.net/@percentlab_app',
      'https://www.pinterest.com/percentlab/',
      'https://www.instagram.com/percentlab_app/',
      'https://www.linkedin.com/in/percentlab-app/',
      'https://www.reddit.com/user/Percentlab/',
      'https://www.quora.com/profile/Percentlab',
      'https://medium.com/@percentlab-app',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            strategy="lazyOnload"
            crossOrigin="anonymous"
          />
        )}
      </body>
    </html>
  );
}
