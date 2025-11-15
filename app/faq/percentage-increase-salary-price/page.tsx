import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Calculate Percentage Increase for Salary or Price | Complete Guide',
  description:
    'Learn how to calculate percentage increase for salary raises, price changes, and growth rates. Step-by-step examples, formulas, visual guides, and practical tips for understanding percentage increases.',
  openGraph: {
    title: 'How to Calculate Percentage Increase for Salary or Price',
    description:
      'Master percentage increase calculations for salary negotiations, price analysis, and financial planning. Complete guide with examples and calculators.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I calculate the percentage increase for a salary or price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To calculate percentage increase, subtract the original value from the new value, divide by the original value, then multiply by 100. Formula: ((New Value - Original Value) ÷ Original Value) × 100. For example, if salary increases from $50,000 to $55,000: ((55,000 - 50,000) ÷ 50,000) × 100 = 10% increase.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between percentage increase and percentage point increase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Percentage increase is the relative change (multiplied value), while percentage point increase is the absolute difference. If interest rates go from 3% to 5%, that\'s a 2 percentage point increase, but a 66.67% percentage increase ((5-3)/3 × 100).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can percentage increase be more than 100%?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, percentage increase can exceed 100%. If a value doubles, that\'s a 100% increase. If it triples, that\'s a 200% increase. For example, a stock price going from $50 to $200 represents a 300% increase.',
      },
    },
  ],
};

export default function PercentageIncreaseSalaryPricePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
        <nav className="text-sm mb-6">
          <Link href="/faq" className="text-primary hover:underline">
            ← Back to FAQ
          </Link>
        </nav>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            How do I calculate the percentage increase for a salary or price?
          </h1>

          <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
            <p className="text-lg font-semibold mb-2">Quick Answer:</p>
            <p className="mb-0">
              To calculate percentage increase, subtract the original value from the new value, divide by the original value, then multiply by 100. For example, if your salary increases from $50,000 to $55,000, the percentage increase is: ((55,000 - 50,000) ÷ 50,000) × 100 = 10%.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Percentage Increase</h2>

          <p>
            Percentage increase is a fundamental calculation used in countless real-world situations—from evaluating salary raises and tracking price inflation to measuring business growth and analyzing investment returns. Understanding how to calculate and interpret percentage increases empowers you to make informed financial decisions.
          </p>

          <p>
            Whether you're negotiating a salary, comparing prices over time, analyzing market trends, or tracking your personal finances, knowing how to calculate percentage increase gives you valuable insight into relative changes and growth rates.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Percentage Increase Formula</h2>

          <p>
            The formula for calculating percentage increase is straightforward:
          </p>

          <div className="bg-muted p-6 rounded-lg font-mono text-center text-lg mb-6">
            Percentage Increase = ((New Value - Original Value) ÷ Original Value) × 100
          </div>

          <p>
            This formula has three key components:
          </p>
          <ul>
            <li><strong>Original Value:</strong> The starting amount (old salary, previous price, initial investment)</li>
            <li><strong>New Value:</strong> The ending amount (new salary, current price, final value)</li>
            <li><strong>Difference:</strong> New Value minus Original Value (the actual increase in absolute terms)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Step-by-Step Calculation Guide</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 1: Identify the Original and New Values</h3>
          <p>
            Determine which value is your starting point (original) and which is your endpoint (new). This is crucial—swapping them will give you the wrong result.
          </p>

          <div className="bg-muted p-4 rounded-lg mb-4">
            <p className="font-semibold mb-2">Example: Salary Increase</p>
            <ul className="list-none space-y-1 mb-0">
              <li>• Original Salary: $50,000</li>
              <li>• New Salary: $55,000</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 2: Calculate the Absolute Difference</h3>
          <p>
            Subtract the original value from the new value to find the actual increase amount.
          </p>

          <div className="bg-muted p-4 rounded-lg mb-4 font-mono">
            Difference = New Value - Original Value<br />
            Difference = $55,000 - $50,000 = $5,000
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 3: Divide by the Original Value</h3>
          <p>
            This step converts the absolute increase into a decimal proportion relative to the starting value.
          </p>

          <div className="bg-muted p-4 rounded-lg mb-4 font-mono">
            Proportion = Difference ÷ Original Value<br />
            Proportion = $5,000 ÷ $50,000 = 0.1
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 4: Multiply by 100 to Get Percentage</h3>
          <p>
            Convert the decimal proportion to a percentage by multiplying by 100.
          </p>

          <div className="bg-muted p-4 rounded-lg mb-4 font-mono">
            Percentage Increase = Proportion × 100<br />
            Percentage Increase = 0.1 × 100 = 10%
          </div>

          <div className="bg-green-50 dark:bg-green-950 border-2 border-green-500 p-6 rounded-lg mb-6">
            <p className="font-semibold text-green-700 dark:text-green-300 mb-2">✓ Final Answer:</p>
            <p className="text-lg mb-0">
              A salary increase from $50,000 to $55,000 represents a <strong className="text-green-700 dark:text-green-300">10% increase</strong>.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Visual Representation</h2>

          <div className="flex justify-center my-8 w-full">
            <svg viewBox="0 0 900 550" className="w-full h-auto min-w-0" style={{ maxWidth: '900px' }}>
              {/* Background */}
              <rect width="900" height="550" fill="#f8f9fa" className="dark:fill-slate-800"/>

              {/* Formula Box */}
              <rect x="250" y="20" width="400" height="80" fill="#e9ecef" className="dark:fill-slate-700" rx="8"/>
              <text x="450" y="50" textAnchor="middle" fontFamily="monospace" fontSize="16" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">
                Formula: ((New - Original) ÷ Original) × 100
              </text>
              <text x="450" y="80" textAnchor="middle" fontFamily="monospace" fontSize="16" className="fill-slate-700 dark:fill-slate-300">
                ((55,000 - 50,000) ÷ 50,000) × 100 = 10%
              </text>

              {/* Starting Point Label */}
              <text x="450" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">
                Starting Point
              </text>

              {/* Measurement line above blue bar */}
              <line x1="300" y1="160" x2="500" y2="160" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="1.5"/>
              <line x1="300" y1="155" x2="300" y2="165" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="1.5"/>
              <line x1="500" y1="155" x2="500" y2="165" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="1.5"/>
              <text x="400" y="153" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" className="fill-slate-600 dark:fill-slate-400">
                200px (100%)
              </text>

              {/* Original Bar (Blue) - EXACTLY 200px wide */}
              <rect x="300" y="180" width="200" height="80" fill="#3B82F6" rx="6"/>
              <text x="400" y="230" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" fill="white">
                $50,000 (100%)
              </text>

              {/* Arrow with label (moved to the right) */}
              <text x="580" y="200" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#dc3545">
                10%
              </text>
              <path d="M 545 220 L 560 235 L 545 250" fill="none" stroke="#dc3545" strokeWidth="3"/>
              <line x1="555" y1="235" x2="555" y2="305" stroke="#dc3545" strokeWidth="3"/>
              <polygon points="555,305 550,295 560,295" fill="#dc3545"/>

              {/* New Amount Bar (Green) - EXACTLY 200px wide */}
              <rect x="300" y="320" width="200" height="80" fill="#10B981" rx="6"/>
              <text x="400" y="370" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" fill="white">
                $50,000
              </text>

              {/* Orange extension - EXACTLY 20px wide */}
              <rect x="500" y="320" width="20" height="80" fill="#F59E0B" rx="6"/>

              {/* Labels for the orange section (moved away from overlap) */}
              <text x="530" y="345" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">
                +$5K
              </text>
              <text x="530" y="365" fontFamily="Arial, sans-serif" fontSize="13" className="fill-slate-600 dark:fill-slate-400">
                = $55,000
              </text>
              <text x="530" y="382" fontFamily="Arial, sans-serif" fontSize="11" className="fill-slate-500 dark:fill-slate-500">
                (110% of original)
              </text>

              {/* Measurement for orange section */}
              <line x1="500" y1="410" x2="520" y2="410" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="1.5"/>
              <line x1="500" y1="405" x2="500" y2="415" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="1.5"/>
              <line x1="520" y1="405" x2="520" y2="415" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="1.5"/>
              <text x="510" y="428" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" className="fill-slate-600 dark:fill-slate-400" fontWeight="bold">
                20px
              </text>
              <text x="510" y="443" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" className="fill-slate-500 dark:fill-slate-500" fontStyle="italic">
                (10% of 200px)
              </text>

              {/* After Increase Label */}
              <text x="400" y="455" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">
                After 10% Increase
              </text>

              {/* Total measurement line below */}
              <line x1="300" y1="470" x2="520" y2="470" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="1.5"/>
              <line x1="300" y1="465" x2="300" y2="475" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="1.5"/>
              <line x1="520" y1="465" x2="520" y2="475" className="stroke-slate-600 dark:stroke-slate-400" strokeWidth="1.5"/>
              <text x="410" y="488" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" className="fill-slate-600 dark:fill-slate-400">
                220px (110%)
              </text>
              {/* Legend at bottom */}
              <rect x="200" y="505" width="500" height="35" fill="#fff" stroke="#ddd" strokeWidth="1" rx="4" className="dark:fill-slate-700 dark:stroke-slate-600"/>
              <circle cx="220" cy="522" r="7" fill="#3B82F6"/>
              <text x="235" y="527" fontFamily="Arial, sans-serif" fontSize="13" className="fill-slate-900 dark:fill-slate-100">
                Original Amount
              </text>
              <circle cx="370" cy="522" r="7" fill="#10B981"/>
              <text x="385" y="527" fontFamily="Arial, sans-serif" fontSize="13" className="fill-slate-900 dark:fill-slate-100">
                Base Amount
              </text>
              <circle cx="520" cy="522" r="7" fill="#F59E0B"/>
              <text x="535" y="527" fontFamily="Arial, sans-serif" fontSize="13" className="fill-slate-900 dark:fill-slate-100">
                10% Increase
              </text>
            </svg>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Real-World Examples</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Example 1: Annual Salary Raise</h3>
          <div className="bg-muted p-6 rounded-lg mb-6">
            <p className="font-semibold mb-3">Scenario: You receive your annual performance review</p>
            <ul className="list-none space-y-2 mb-4">
              <li>• Current salary: $60,000 per year</li>
              <li>• New salary: $63,600 per year</li>
              <li>• What's your raise percentage?</li>
            </ul>
            <div className="border-t border-border pt-4 space-y-2 font-mono text-sm">
              <p>Step 1: Difference = $63,600 - $60,000 = $3,600</p>
              <p>Step 2: Divide by original = $3,600 ÷ $60,000 = 0.06</p>
              <p>Step 3: Convert to percentage = 0.06 × 100 = 6%</p>
              <p className="font-bold text-green-600 dark:text-green-400 pt-2 border-t border-border">
                Answer: You received a 6% salary increase
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Example 2: Product Price Increase</h3>
          <div className="bg-muted p-6 rounded-lg mb-6">
            <p className="font-semibold mb-3">Scenario: Your favorite subscription service raised prices</p>
            <ul className="list-none space-y-2 mb-4">
              <li>• Old monthly price: $9.99</li>
              <li>• New monthly price: $12.99</li>
              <li>• What's the percentage increase?</li>
            </ul>
            <div className="border-t border-border pt-4 space-y-2 font-mono text-sm">
              <p>Step 1: Difference = $12.99 - $9.99 = $3.00</p>
              <p>Step 2: Divide by original = $3.00 ÷ $9.99 = 0.3003...</p>
              <p>Step 3: Convert to percentage = 0.3003 × 100 = 30.03%</p>
              <p className="font-bold text-red-600 dark:text-red-400 pt-2 border-t border-border">
                Answer: The subscription increased by approximately 30%
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Example 3: Stock Price Growth</h3>
          <div className="bg-muted p-6 rounded-lg mb-6">
            <p className="font-semibold mb-3">Scenario: You bought stock and it appreciated in value</p>
            <ul className="list-none space-y-2 mb-4">
              <li>• Purchase price: $125 per share</li>
              <li>• Current price: $175 per share</li>
              <li>• What's your gain percentage?</li>
            </ul>
            <div className="border-t border-border pt-4 space-y-2 font-mono text-sm">
              <p>Step 1: Difference = $175 - $125 = $50</p>
              <p>Step 2: Divide by original = $50 ÷ $125 = 0.4</p>
              <p>Step 3: Convert to percentage = 0.4 × 100 = 40%</p>
              <p className="font-bold text-green-600 dark:text-green-400 pt-2 border-t border-border">
                Answer: Your stock increased 40% in value
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Example 4: Rent Increase</h3>
          <div className="bg-muted p-6 rounded-lg mb-6">
            <p className="font-semibold mb-3">Scenario: Your landlord is raising the rent</p>
            <ul className="list-none space-y-2 mb-4">
              <li>• Current monthly rent: $1,500</li>
              <li>• New monthly rent: $1,650</li>
              <li>• What's the percentage increase?</li>
            </ul>
            <div className="border-t border-border pt-4 space-y-2 font-mono text-sm">
              <p>Step 1: Difference = $1,650 - $1,500 = $150</p>
              <p>Step 2: Divide by original = $150 ÷ $1,500 = 0.1</p>
              <p>Step 3: Convert to percentage = 0.1 × 100 = 10%</p>
              <p className="font-bold text-orange-600 dark:text-orange-400 pt-2 border-t border-border">
                Answer: Rent is increasing by 10%
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Common Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-blue-50 dark:bg-blue-950 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">💼 Career & Income</h3>
              <ul className="text-sm space-y-2 mb-0">
                <li>• Annual salary raises</li>
                <li>• Promotion compensation</li>
                <li>• Hourly wage increases</li>
                <li>• Bonus growth year-over-year</li>
                <li>• Freelance rate adjustments</li>
              </ul>
            </div>

            <div className="bg-purple-50 dark:bg-purple-950 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-lg font-semibold mb-3 text-purple-700 dark:text-purple-300">💰 Investments & Assets</h3>
              <ul className="text-sm space-y-2 mb-0">
                <li>• Stock price appreciation</li>
                <li>• Real estate value growth</li>
                <li>• Portfolio returns</li>
                <li>• Retirement account growth</li>
                <li>• Cryptocurrency gains</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-950 p-5 rounded-lg border border-red-200 dark:border-red-800">
              <h3 className="text-lg font-semibold mb-3 text-red-700 dark:text-red-300">🛒 Prices & Costs</h3>
              <ul className="text-sm space-y-2 mb-0">
                <li>• Inflation tracking</li>
                <li>• Rent increases</li>
                <li>• Utility bill changes</li>
                <li>• Subscription price hikes</li>
                <li>• Grocery price inflation</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950 p-5 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-300">📊 Business & Analytics</h3>
              <ul className="text-sm space-y-2 mb-0">
                <li>• Revenue growth rates</li>
                <li>• Customer base expansion</li>
                <li>• Sales performance</li>
                <li>• Website traffic growth</li>
                <li>• Conversion rate improvements</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Important Concepts & Edge Cases</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Percentage Increase vs. Percentage Point Increase</h3>
          <p>
            These terms are often confused but represent very different things:
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-6 my-4 rounded-r-lg">
            <p className="font-semibold mb-3">Example: Interest Rate Change</p>
            <p className="mb-2">If an interest rate goes from 3% to 5%:</p>
            <ul className="space-y-2 mb-0">
              <li>
                <strong>Percentage point increase:</strong> 5% - 3% = 2 percentage points
              </li>
              <li>
                <strong>Percentage increase:</strong> ((5 - 3) ÷ 3) × 100 = 66.67%
              </li>
            </ul>
            <p className="mt-3 text-sm">
              The rate went up by 2 percentage points, which is a 66.67% increase relative to the original 3%.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Can Percentage Increase Exceed 100%?</h3>
          <p>
            Absolutely! Percentage increase can be any positive number:
          </p>
          <ul>
            <li><strong>100% increase:</strong> Value doubles (from 100 to 200)</li>
            <li><strong>200% increase:</strong> Value triples (from 100 to 300)</li>
            <li><strong>300% increase:</strong> Value quadruples (from 100 to 400)</li>
          </ul>

          <div className="bg-muted p-5 rounded-lg my-4">
            <p className="font-semibold mb-2">Example: Stock Price Boom</p>
            <p className="mb-2">A stock goes from $25 to $125:</p>
            <p className="font-mono text-sm">
              ((125 - 25) ÷ 25) × 100 = (100 ÷ 25) × 100 = 400% increase
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              The stock increased by 400%, meaning it's now 5 times its original value.
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Negative Results = Decrease, Not Increase</h3>
          <p>
            If the new value is lower than the original, your result will be negative. This indicates a decrease, not an increase.
          </p>

          <div className="bg-muted p-5 rounded-lg my-4">
            <p className="font-semibold mb-2">Example: Price Reduction</p>
            <p className="mb-2">A product goes from $100 to $80:</p>
            <p className="font-mono text-sm">
              ((80 - 100) ÷ 100) × 100 = (-20 ÷ 100) × 100 = -20%
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              The negative sign indicates a 20% decrease, not an increase.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Practical Tips for Salary Negotiations</h2>

          <p>
            Understanding percentage increases is especially valuable during salary negotiations:
          </p>

          <div className="space-y-4 my-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">1. Know Industry Standards</h3>
              <p className="text-sm text-muted-foreground">
                Research typical salary increases in your field. Cost-of-living adjustments are often 2-3%, merit raises 3-5%, and promotion raises 10-20% or more. Use this as leverage.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">2. Calculate Your Worth</h3>
              <p className="text-sm text-muted-foreground">
                If you've taken on additional responsibilities or improved performance significantly, calculate what percentage increase reflects that added value. Don't just accept the first offer.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">3. Consider Total Compensation</h3>
              <p className="text-sm text-muted-foreground">
                Base salary is important, but also calculate percentage increases in benefits, bonuses, stock options, and other perks. A smaller base increase with better benefits might be more valuable.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">4. Frame Your Request Effectively</h3>
              <p className="text-sm text-muted-foreground">
                Instead of asking for "$5,000 more," frame it as "a 10% increase to bring my compensation in line with market rates and my contributions." Percentages often sound more reasonable than absolute numbers.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">5. Account for Inflation</h3>
              <p className="text-sm text-muted-foreground">
                If annual inflation is 3-4% and you get a 2% raise, you're actually losing purchasing power. A raise below inflation is effectively a pay cut in real terms.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h2>

          <ul>
            <li>
              <strong>Swapping the original and new values:</strong> Always divide by the original (starting) value, not the new value. This is a common error that gives incorrect results.
            </li>
            <li>
              <strong>Forgetting to multiply by 100:</strong> If you get 0.15 and forget to multiply by 100, you might think it's a 0.15% increase when it's actually 15%.
            </li>
            <li>
              <strong>Confusing percentage increase with the new total:</strong> A 25% increase doesn't make the new value 25% of the original—it makes it 125% of the original (original + 25% more).
            </li>
            <li>
              <strong>Not considering the time period:</strong> A 10% increase over 5 years is very different from a 10% annual increase. Always clarify the timeframe.
            </li>
            <li>
              <strong>Applying percentages incorrectly in reverse:</strong> If something increases 50% then decreases 50%, you don't end up where you started. (100 → 150 → 75, not back to 100).
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Related Calculators</h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <Link
              href="/calculators/basic-percent/percentage-increase"
              className="block p-6 bg-primary/5 hover:bg-primary/10 rounded-lg border border-primary/20 transition-colors no-underline"
            >
              <h3 className="text-lg font-semibold mb-2 text-primary">Percentage Increase Calculator</h3>
              <p className="text-sm text-muted-foreground mb-0">
                Instantly calculate percentage increase between any two values. Perfect for salary, price, and growth calculations.
              </p>
            </Link>

            <Link
              href="/calculators/basic-percent/percentage-decrease"
              className="block p-6 bg-primary/5 hover:bg-primary/10 rounded-lg border border-primary/20 transition-colors no-underline"
            >
              <h3 className="text-lg font-semibold mb-2 text-primary">Percentage Decrease Calculator</h3>
              <p className="text-sm text-muted-foreground mb-0">
                Calculate percentage decrease for price drops, discounts, and value reductions with detailed explanations.
              </p>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">
                Is a 5% salary increase good?
              </h3>
              <p>
                It depends on context. A 5% raise typically exceeds inflation (usually 2-4% annually), so it represents real growth in purchasing power. For a standard annual review, 3-5% is common. However, for a promotion or if you've significantly expanded your role, you might expect 10-20% or more. Research industry standards for your position and performance level.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">
                How do I calculate what my new salary will be after a percentage increase?
              </h3>
              <p>
                Multiply your current salary by (1 + percentage increase as a decimal). For example, a $60,000 salary with a 7% increase: $60,000 × 1.07 = $64,200. Or calculate the increase amount ($60,000 × 0.07 = $4,200) and add it to the original ($60,000 + $4,200 = $64,200).
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">
                Why does a 50% increase followed by a 50% decrease not return to the original value?
              </h3>
              <p>
                Because percentages are calculated relative to different base values. If you start with 100 and increase by 50%, you get 150. Then decreasing 150 by 50% gives you 75, not 100. The second percentage (50% of 150 = 75) is based on a larger number, so the absolute decrease is bigger than the absolute increase was.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">
                What's the difference between a 10% raise and a $10,000 raise?
              </h3>
              <p>
                A percentage raise is relative to your current salary, while a dollar amount is fixed. For someone making $50,000, a 10% raise is $5,000 (new salary: $55,000). For someone making $100,000, a 10% raise is $10,000 (new salary: $110,000). A fixed $10,000 raise is 20% for the first person but only 10% for the second. Higher earners benefit more from percentage-based raises.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">
                How do I compare multiple percentage increases over time?
              </h3>
              <p>
                For annual increases, multiply them together (as decimals plus 1), don't add them. If you get 5% year 1 and 8% year 2, the total increase is: (1.05 × 1.08) - 1 = 1.134 - 1 = 0.134 = 13.4% total, not 13%. This accounts for compounding—the second year's percentage applies to the already-increased amount.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20">
            <h2 className="text-2xl font-semibold mb-3">Calculate Your Percentage Increase Now</h2>
            <p className="text-muted-foreground mb-4">
              Whether you're evaluating a salary offer, tracking investment growth, or analyzing price changes, our free Percentage Increase Calculator provides instant, accurate results with detailed step-by-step explanations.
            </p>
            <Link
              href="/calculators/basic-percent/percentage-increase"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 no-underline"
            >
              Calculate Percentage Increase
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
