import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, Heart, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About PercentLab - Free Percentage Calculator',
  description:
    'Learn about PercentLab, our mission to make percentage calculations simple and accessible for everyone with transparent, accurate, and educational tools.',
  openGraph: {
    title: 'About PercentLab',
    description:
      'Learn about PercentLab and our mission to make percentage calculations simple and accessible.',
  },
};

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          About PercentLab
        </h1>
        <p className="text-xl text-muted-foreground">
          Making percentage calculations simple, accurate, and educational
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            PercentLab was created with a simple goal: to provide a fast, accurate, and educational percentage calculator that anyone can use. We believe that understanding percentages shouldn't be complicated, and that's why we provide detailed explanations with every calculation.
          </p>
          <p className="text-muted-foreground mt-4">
            Whether you're a student learning about percentages for the first time, a professional making financial calculations, or someone shopping for the best deal, PercentLab is here to help you get accurate results instantly.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-semibold text-lg">Accurate Calculations</h2>
                <p className="text-sm text-muted-foreground">
                  Our calculator uses proven mathematical formulas to ensure every result is precise and reliable.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-semibold text-lg">Free Forever</h2>
                <p className="text-sm text-muted-foreground">
                  No registration, no hidden fees, no paywalls. Just free, unlimited calculations for everyone.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-semibold text-lg">Lightning Fast</h2>
                <p className="text-sm text-muted-foreground">
                  Built with modern web technologies for instant results without any delays or loading times.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-semibold text-lg">Privacy Focused</h2>
                <p className="text-sm text-muted-foreground">
                  We don't collect personal information. Your calculations stay private and secure.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How Our Calculators Work</h2>
          <p className="text-muted-foreground">
            PercentLab uses standard mathematical formulas that have been tested and verified for accuracy. Every calculation is performed in real-time in your browser using JavaScript, ensuring your data never leaves your device.
          </p>
          <p className="text-muted-foreground mt-4">
            We provide three types of percentage calculators:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>
              <strong>Percent Of:</strong> Calculates what a percentage of a number equals (e.g., 20% of 200 = 40)
            </li>
            <li>
              <strong>What Percent:</strong> Determines what percentage one number is of another (e.g., 40 is 20% of 200)
            </li>
            <li>
              <strong>Increase/Decrease:</strong> Calculates percentage change between values or applies percentage changes to numbers
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Educational Approach</h2>
          <p className="text-muted-foreground">
            We believe in not just giving you answers, but helping you understand how those answers are reached. That's why every calculation includes:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li><strong>The Formula:</strong> See the exact mathematical formula used</li>
            <li><strong>Step-by-Step Solution:</strong> Follow along with each step of the calculation</li>
            <li><strong>Real-Life Examples:</strong> Understand how the calculation applies to everyday situations</li>
            <li><strong>Visual Charts:</strong> See the proportion or comparison visualized</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            This educational approach helps students learn, professionals verify their work, and everyone build confidence in their understanding of percentages.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
          <p className="text-muted-foreground">
            We're committed to maintaining PercentLab as a free, accurate, and user-friendly resource. We continuously improve our calculators based on user feedback and ensure our formulas are mathematically sound.
          </p>
          <p className="text-muted-foreground mt-4">
            The site is supported by non-intrusive advertisements, which allow us to keep the service free for everyone. We respect your privacy and don't track personal information beyond basic analytics to improve the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            Have questions, suggestions, or feedback? We'd love to hear from you. Visit our{' '}
            <a href="/contact" className="text-primary hover:underline" aria-label="Visit our contact page">
              contact page
            </a>{' '}
            to get in touch with our team.
          </p>
        </section>
      </div>
    </div>
  );
}
