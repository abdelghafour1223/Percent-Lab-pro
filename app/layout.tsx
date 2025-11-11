import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://percentlab.app'),
  title: {
    default: 'PercentLab - Free Online Percentage Calculator with Step-by-Step Solutions',
    template: '%s | PercentLab',
  },
  description:
    'Free percentage calculator with detailed explanations. Calculate percentages, increases, decreases, and more. Fast, accurate, and easy to use with real-life examples.',
  keywords: [
    'percentage calculator',
    'percent calculator',
    'percentage increase',
    'percentage decrease',
    'calculate percentage',
    'percent of',
    'percentage change',
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
    url: 'https://percentlab.app',
    title: 'PercentLab - Free Online Percentage Calculator',
    description:
      'Free percentage calculator with detailed explanations. Calculate percentages, increases, decreases, and more.',
    siteName: 'PercentLab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PercentLab - Free Online Percentage Calculator',
    description:
      'Free percentage calculator with detailed explanations. Calculate percentages, increases, decreases, and more.',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col antialiased">
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
      </body>
    </html>
  );
}
