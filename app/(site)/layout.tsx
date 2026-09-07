import Script from 'next/script';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';

// Site chrome (Header/Footer/Analytics/Ads) lives here — NOT in the root
// layout — so chromeless routes like /embed/* skip it entirely while all
// public URLs stay byte-identical (route groups don't affect paths).
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PercentLab',
    url: 'https://www.percentlab.app/',
    logo: 'https://www.percentlab.app/logo.svg',
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
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Analytics />
      {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      )}
    </>
  );
}
