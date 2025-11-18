import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'FAQ - Percentage Calculator Questions & Answers',
  description:
    'Frequently asked questions about percentage calculations. Learn how to calculate percentages, understand formulas, and solve common percentage problems.',
  openGraph: {
    title: 'FAQ - Percentage Calculator',
    description:
      'Find answers to common questions about percentage calculations and how to use our calculator.',
  },
};

export default function FAQPage() {
  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you calculate a percentage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate what percentage one number is of another, divide the part by the whole and multiply by 100. The formula is: Percentage = (Part ÷ Whole) × 100. For example, if you scored 85 out of 100 on a test: (85 ÷ 100) × 100 = 85%."
        }
      },
      {
        "@type": "Question",
        "name": "What is 20% of 200?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "20% of 200 is 40. To calculate it: 1) Convert the percentage to a decimal: 20 ÷ 100 = 0.20, 2) Multiply by the number: 0.20 × 200 = 40. The formula is (20 ÷ 100) × 200 = 40."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate percentage increase?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate percentage increase, use this formula: Percentage Increase = ((New Value - Original Value) ÷ Original Value) × 100. For example, if a stock price increases from $100 to $120: 1) Find the difference: 120 - 100 = 20, 2) Divide by the original: 20 ÷ 100 = 0.20, 3) Multiply by 100: 0.20 × 100 = 20%. The stock price increased by 20%."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate percentage decrease?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Percentage decrease uses the same formula as increase. The result will be negative, indicating a decrease: Percentage Change = ((New Value - Original Value) ÷ Original Value) × 100. For example, if a price drops from $100 to $80: 1) Find the difference: 80 - 100 = -20, 2) Divide by the original: -20 ÷ 100 = -0.20, 3) Multiply by 100: -0.20 × 100 = -20%. The negative result (-20%) indicates a 20% decrease."
        }
      },
      {
        "@type": "Question",
        "name": "How do I add or subtract a percentage from a number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To increase a number by a percentage: Result = Original + (Original × Percentage ÷ 100). Example: Increase 100 by 20%: 100 + (100 × 20 ÷ 100) = 100 + 20 = 120. To decrease a number by a percentage: Result = Original - (Original × Percentage ÷ 100). Example: Decrease 100 by 20%: 100 - (100 × 20 ÷ 100) = 100 - 20 = 80."
        }
      },
      {
        "@type": "Question",
        "name": "Can percentages be greater than 100%?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, percentages can definitely exceed 100%. This commonly occurs when: 1) Percentage increases - If sales double from 100 to 200 units, that's a 100% increase. If they triple to 300, that's a 200% increase. 2) When part exceeds whole - If you compare 150 to 100, then 150 is 150% of 100. 3) Growth rates - A stock that goes from $50 to $200 has grown by 300%. There's no upper limit to percentages in mathematics."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between percentage and percentile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While they sound similar, percentage and percentile are different concepts: Percentage is a proportion out of 100. Example: Getting 90 out of 100 questions correct is 90%. Percentile is a rank in a distribution. Example: Being in the 90th percentile means you scored higher than 90% of people, not that you got 90% correct."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is this percentage calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator is highly accurate and uses standard mathematical formulas that are mathematically proven. All calculations are performed using JavaScript's number precision, which provides accuracy to approximately 15-17 decimal places. For display purposes, we typically round results to 2-4 decimal places, but the underlying calculation maintains full precision. This is more than sufficient for virtually all practical applications, from financial calculations to scientific work."
        }
      },
      {
        "@type": "Question",
        "name": "Is this percentage calculator free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PercentLab is completely free to use with no restrictions. You can perform unlimited calculations, access all calculator types, view detailed step-by-step explanations for every calculation, and use the calculator on any device without registration. The service is supported by non-intrusive advertisements, which allow us to keep it free for everyone. We don't require registration, subscriptions, or any form of payment."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this calculator on my phone or tablet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! PercentLab is fully responsive and works seamlessly on all devices including mobile phones (iOS and Android), tablets (iPad, Android tablets), desktop computers (Windows, macOS, and Linux), and all modern browsers (Chrome, Safari, Firefox, Edge). The interface automatically adapts to your screen size, ensuring a smooth experience whether you're using a small phone screen or a large desktop monitor."
        }
      }
    ]
  };

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about calculating percentages
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="border rounded-lg px-6">
          <AccordionTrigger className="text-left">
            How do you calculate a percentage?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground mb-3">
              To calculate what percentage one number is of another, divide the part by the whole and multiply by 100. The formula is:
            </p>
            <div className="bg-muted p-3 rounded font-mono text-sm mb-3">
              Percentage = (Part ÷ Whole) × 100
            </div>
            <p className="text-muted-foreground">
              For example, if you scored 85 out of 100 on a test: (85 ÷ 100) × 100 = 85%. Use our "What Percent" calculator tab for instant results with detailed step-by-step explanations.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-lg px-6">
          <AccordionTrigger className="text-left">
            What is 20% of 200?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground mb-3">
              20% of 200 is 40. Here's how to calculate it:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-3">
              <li>Convert the percentage to a decimal: 20 ÷ 100 = 0.20</li>
              <li>Multiply by the number: 0.20 × 200 = 40</li>
            </ol>
            <div className="bg-muted p-3 rounded font-mono text-sm mb-3">
              (20 ÷ 100) × 200 = 40
            </div>
            <p className="text-muted-foreground">
              Use our "Percent Of" calculator tab above for instant results with visual charts and real-life examples.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border rounded-lg px-6">
          <AccordionTrigger className="text-left">
            How do I calculate percentage increase?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground mb-3">
              To calculate percentage increase, use this formula:
            </p>
            <div className="bg-muted p-3 rounded font-mono text-sm mb-3">
              Percentage Increase = ((New Value - Original Value) ÷ Original Value) × 100
            </div>
            <p className="text-muted-foreground mb-3">
              Example: If a stock price increases from $100 to $120:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Find the difference: 120 - 100 = 20</li>
              <li>Divide by the original: 20 ÷ 100 = 0.20</li>
              <li>Multiply by 100: 0.20 × 100 = 20%</li>
            </ol>
            <p className="text-muted-foreground mt-3">
              The stock price increased by 20%. Use our "Increase/Decrease" calculator tab to do this automatically.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border rounded-lg px-6">
          <AccordionTrigger className="text-left">
            How do I calculate percentage decrease?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground mb-3">
              Percentage decrease uses the same formula as increase. The result will be negative, indicating a decrease:
            </p>
            <div className="bg-muted p-3 rounded font-mono text-sm mb-3">
              Percentage Change = ((New Value - Original Value) ÷ Original Value) × 100
            </div>
            <p className="text-muted-foreground mb-3">
              Example: If a price drops from $100 to $80:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Find the difference: 80 - 100 = -20</li>
              <li>Divide by the original: -20 ÷ 100 = -0.20</li>
              <li>Multiply by 100: -0.20 × 100 = -20%</li>
            </ol>
            <p className="text-muted-foreground mt-3">
              The negative result (-20%) indicates a 20% decrease. Our calculator shows this clearly with visual representations.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border rounded-lg px-6">
          <AccordionTrigger className="text-left">
            How do I add or subtract a percentage from a number?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground mb-3">
              To increase a number by a percentage:
            </p>
            <div className="bg-muted p-3 rounded font-mono text-sm mb-3">
              Result = Original + (Original × Percentage ÷ 100)
            </div>
            <p className="text-muted-foreground mb-3">
              Example: Increase 100 by 20%: 100 + (100 × 20 ÷ 100) = 100 + 20 = 120
            </p>
            <p className="text-muted-foreground mb-3">
              To decrease a number by a percentage:
            </p>
            <div className="bg-muted p-3 rounded font-mono text-sm mb-3">
              Result = Original - (Original × Percentage ÷ 100)
            </div>
            <p className="text-muted-foreground">
              Example: Decrease 100 by 20%: 100 - (100 × 20 ÷ 100) = 100 - 20 = 80. Use our "Increase/Decrease" calculator and select "Increase By %" or "Decrease By %" for these calculations.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border rounded-lg px-6">
          <AccordionTrigger className="text-left">
            Can percentages be greater than 100%?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground mb-3">
              Yes, percentages can definitely exceed 100%. This commonly occurs in several situations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Percentage increases:</strong> If sales double from 100 to 200 units, that's a 100% increase. If they triple to 300, that's a 200% increase.
              </li>
              <li>
                <strong>When part exceeds whole:</strong> If you compare 150 to 100, then 150 is 150% of 100.
              </li>
              <li>
                <strong>Growth rates:</strong> A stock that goes from $50 to $200 has grown by 300%.
              </li>
            </ul>
            <p className="text-muted-foreground mt-3">
              There's no upper limit to percentages in mathematics. Our calculator handles any percentage value, whether it's less than 1% or greater than 1000%.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border rounded-lg px-6">
          <AccordionTrigger className="text-left">
            What's the difference between percentage and percentile?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground mb-3">
              While they sound similar, percentage and percentile are different concepts:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-3">
              <li>
                <strong>Percentage:</strong> A proportion out of 100. Example: Getting 90 out of 100 questions correct is 90%.
              </li>
              <li>
                <strong>Percentile:</strong> A rank in a distribution. Example: Being in the 90th percentile means you scored higher than 90% of people, not that you got 90% correct.
              </li>
            </ul>
            <p className="text-muted-foreground">
              This calculator is designed for percentage calculations. Percentiles are used in statistics and standardized testing to show relative position in a group.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8" className="border rounded-lg px-6">
          <AccordionTrigger className="text-left">
            How accurate is this percentage calculator?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground mb-3">
              Our calculator is highly accurate and uses standard mathematical formulas that are mathematically proven. All calculations are performed using JavaScript's number precision, which provides accuracy to approximately 15-17 decimal places.
            </p>
            <p className="text-muted-foreground mb-3">
              For display purposes, we typically round results to 2-4 decimal places, but the underlying calculation maintains full precision. This is more than sufficient for virtually all practical applications, from financial calculations to scientific work.
            </p>
            <p className="text-muted-foreground">
              Every formula we use has been verified and tested extensively. The calculations are performed entirely in your browser, ensuring consistent, reliable results every time.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9" className="border rounded-lg px-6">
          <AccordionTrigger className="text-left">
            Is this percentage calculator free to use?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground mb-3">
              Yes, PercentLab is completely free to use with no restrictions. You can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-3">
              <li>Perform unlimited calculations</li>
              <li>Access all calculator types (Percent Of, What Percent, Increase/Decrease)</li>
              <li>View detailed step-by-step explanations for every calculation</li>
              <li>Use the calculator on any device without registration</li>
            </ul>
            <p className="text-muted-foreground">
              The service is supported by non-intrusive advertisements, which allow us to keep it free for everyone. We don't require registration, subscriptions, or any form of payment.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10" className="border rounded-lg px-6">
          <AccordionTrigger className="text-left">
            Can I use this calculator on my phone or tablet?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-muted-foreground mb-3">
              Absolutely! PercentLab is fully responsive and works seamlessly on all devices:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-3">
              <li><strong>Mobile phones:</strong> iOS (iPhone) and Android</li>
              <li><strong>Tablets:</strong> iPad, Android tablets, and other tablet devices</li>
              <li><strong>Desktop computers:</strong> Windows, macOS, and Linux</li>
              <li><strong>Browsers:</strong> Chrome, Safari, Firefox, Edge, and other modern browsers</li>
            </ul>
            <p className="text-muted-foreground">
              The interface automatically adapts to your screen size, ensuring a smooth experience whether you're using a small phone screen or a large desktop monitor. All features, including the visual charts and step-by-step explanations, work perfectly on mobile devices.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">In-Depth Guides</h2>
        <p className="text-muted-foreground mb-6">
          Explore our comprehensive guides for detailed explanations, examples, and practical tips.
        </p>

        <Link
          href="/faq/monthly-expenses-percentage"
          className="block p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900 dark:hover:to-blue-800 rounded-lg border-2 border-blue-200 dark:border-blue-800 transition-all hover:shadow-md group"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                How do I calculate the percentage of my monthly expenses?
              </h3>
              <p className="text-muted-foreground mb-3">
                Learn to track your budget percentages, apply the 50/30/20 rule, and understand where your money goes each month.
              </p>
              <span className="text-sm font-medium text-primary">
                Read Full Guide →
              </span>
            </div>
            <svg
              className="w-6 h-6 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>

        <Link
          href="/faq/percentage-increase-salary-price"
          className="block p-6 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 hover:from-green-100 hover:to-green-200 dark:hover:from-green-900 dark:hover:to-green-800 rounded-lg border-2 border-green-200 dark:border-green-800 transition-all hover:shadow-md group"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                How do I calculate the percentage increase for a salary or price?
              </h3>
              <p className="text-muted-foreground mb-3">
                Master percentage increase calculations for salary negotiations, price analysis, and understanding growth rates.
              </p>
              <span className="text-sm font-medium text-primary">
                Read Full Guide →
              </span>
            </div>
            <svg
              className="w-6 h-6 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
        <p className="text-muted-foreground mb-4">
          Can't find the answer you're looking for? Feel free to reach out to us.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          aria-label="Contact PercentLab support team"
        >
          Contact Us
        </a>
      </div>
    </div>
    </>
  );
}
