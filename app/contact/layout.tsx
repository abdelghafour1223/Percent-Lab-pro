import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the PercentLab team. Send us your feedback, questions, or calculator suggestions.',
  alternates: {
    canonical: 'https://www.percentlab.app/contact',
  },
  openGraph: {
    title: 'Contact Us',
    description:
      'Get in touch with the PercentLab team. Send us your feedback, questions, or calculator suggestions.',
    url: 'https://www.percentlab.app/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
