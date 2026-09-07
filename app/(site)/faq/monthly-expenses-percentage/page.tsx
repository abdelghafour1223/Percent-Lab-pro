import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Calculate Percentage of Monthly Expenses - Budget Guide',
  description:
    'Learn how to calculate what percentage each expense category represents of your monthly budget. Complete guide with examples, the 50/30/20 rule, step-by-step instructions, and practical tips for budget management.',
  alternates: {
    canonical: 'https://www.percentlab.app/faq/monthly-expenses-percentage',
  },
  openGraph: {
    title: 'How to Calculate Percentage of Monthly Expenses',
    description:
      'Master budget percentage calculations with our comprehensive guide. Learn to track spending, apply the 50/30/20 rule, and optimize your monthly expenses.',
    url: 'https://www.percentlab.app/faq/monthly-expenses-percentage',
    type: 'article',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I calculate the percentage of my monthly expenses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To calculate the percentage of your monthly expenses, divide each expense category by your total monthly income or budget, then multiply by 100. Formula: (Expense Amount ÷ Total Income) × 100 = Percentage. For example, if you spend $1,200 on rent and earn $4,000, your housing percentage is (1,200 ÷ 4,000) × 100 = 30%.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the 50/30/20 budgeting rule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 50/30/20 rule is a budgeting framework where 50% of after-tax income goes to needs (housing, utilities, food, transportation), 30% to wants (entertainment, dining out, hobbies), and 20% to savings and debt repayment. This helps create a balanced financial plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are recommended budget percentages for major expense categories?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recommended budget percentages: Housing 25-30%, Transportation 10-15%, Food 10-15%, Insurance 10-25%, Savings 10-20%, Debt Payment 5-10%, Entertainment 5-10%, Personal Care 5%, Miscellaneous 5-10%. These are guidelines and may vary based on location and circumstances.',
      },
    },
  ],
};

export default function MonthlyExpensesPercentagePage() {
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
            How do I calculate the percentage of my monthly expenses?
          </h1>

          <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <p className="text-lg font-semibold mb-2">Quick Answer:</p>
            <p className="mb-0">
              To calculate the percentage of your monthly expenses, divide each expense category by your total monthly income (or total budget), then multiply by 100. For example, if you spend $1,200 on rent from a $4,000 monthly income, your housing expense is 30% of your budget.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Budget Percentages</h2>

          <p>
            Calculating what percentage each expense represents of your monthly budget is fundamental to financial planning. This helps you identify where your money goes, spot overspending, and make informed decisions about your financial priorities.
          </p>

          <p>
            Whether you're tracking housing costs, food expenses, entertainment, or savings, understanding these percentages gives you clear insight into your spending patterns and helps you align your budget with recommended financial guidelines like the 50/30/20 rule.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Step-by-Step: Calculate Expense Percentages</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 1: Determine Your Total Monthly Income</h3>
          <p>
            Start with your after-tax monthly income. This is your take-home pay after all deductions (taxes, 401k contributions, health insurance, etc.). If you have multiple income sources, add them all together.
          </p>
          <div className="bg-muted p-4 rounded-lg mb-4">
            <p className="font-semibold mb-2">Example:</p>
            <ul className="list-none space-y-1 mb-0">
              <li>• Salary (after tax): $3,800</li>
              <li>• Side hustle: $200</li>
              <li className="font-semibold border-t border-border pt-2 mt-2">
                Total Monthly Income: $4,000
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 2: List All Your Expense Categories</h3>
          <p>
            Track and categorize all your monthly expenses. Common categories include:
          </p>
          <ul>
            <li><strong>Housing:</strong> Rent or mortgage, property taxes, HOA fees</li>
            <li><strong>Utilities:</strong> Electric, water, gas, internet, phone</li>
            <li><strong>Transportation:</strong> Car payment, insurance, gas, maintenance, public transit</li>
            <li><strong>Food:</strong> Groceries and dining out</li>
            <li><strong>Insurance:</strong> Health, life, disability (if not deducted from paycheck)</li>
            <li><strong>Debt Payments:</strong> Credit cards, student loans, personal loans</li>
            <li><strong>Savings:</strong> Emergency fund, retirement (beyond employer deductions), investments</li>
            <li><strong>Entertainment:</strong> Streaming services, hobbies, events</li>
            <li><strong>Personal Care:</strong> Haircuts, gym, clothing</li>
            <li><strong>Miscellaneous:</strong> Gifts, donations, unexpected expenses</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 3: Calculate Each Category's Percentage</h3>
          <p>
            Use this simple formula for each expense category:
          </p>
          <div className="bg-muted p-4 rounded-lg font-mono text-center text-lg mb-4">
            Percentage = (Expense Amount ÷ Total Income) × 100
          </div>

          <div className="bg-muted p-6 rounded-lg mb-6">
            <p className="font-semibold mb-4">Complete Example with $4,000 Monthly Income:</p>
            <div className="space-y-2 text-sm md:text-base">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span>Housing: $1,200</span>
                <span className="font-semibold">($1,200 ÷ $4,000) × 100 = 30%</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span>Transportation: $500</span>
                <span className="font-semibold">($500 ÷ $4,000) × 100 = 12.5%</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span>Food: $600</span>
                <span className="font-semibold">($600 ÷ $4,000) × 100 = 15%</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span>Utilities: $200</span>
                <span className="font-semibold">($200 ÷ $4,000) × 100 = 5%</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span>Insurance: $300</span>
                <span className="font-semibold">($300 ÷ $4,000) × 100 = 7.5%</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span>Savings: $600</span>
                <span className="font-semibold">($600 ÷ $4,000) × 100 = 15%</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span>Entertainment: $300</span>
                <span className="font-semibold">($300 ÷ $4,000) × 100 = 7.5%</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span>Debt Payment: $200</span>
                <span className="font-semibold">($200 ÷ $4,000) × 100 = 5%</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span>Personal Care: $100</span>
                <span className="font-semibold">($100 ÷ $4,000) × 100 = 2.5%</span>
              </div>
              <div className="flex justify-between items-center font-bold pt-2">
                <span>TOTAL: $4,000</span>
                <span className="text-green-600 dark:text-green-400">100%</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Visual Budget Breakdown</h2>

          <div className="flex justify-center my-8 w-full">
            <svg viewBox="0 0 900 550" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-0" style={{ maxWidth: '900px' }}>
              {/* Title */}
              <text
                x="450"
                y="35"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontSize="32"
                fontWeight="bold"
                className="fill-slate-900 dark:fill-slate-100"
              >
                Your Budget
              </text>

              {/* Note about visualization */}
              <text
                x="450"
                y="60"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontSize="13"
                className="fill-slate-600 dark:fill-slate-400"
                fontStyle="italic"
              >
                (Bar lengths adjusted for visual clarity while maintaining proportional relationships)
              </text>

              {/* Background grid lines */}
              <g opacity="0.15">
                <line x1="200" y1="85" x2="200" y2="470" stroke="#999" strokeWidth="1"/>
                <line x1="350" y1="85" x2="350" y2="470" stroke="#999" strokeWidth="1"/>
                <line x1="500" y1="85" x2="500" y2="470" stroke="#999" strokeWidth="1"/>
                <line x1="650" y1="85" x2="650" y2="470" stroke="#999" strokeWidth="1"/>
                <line x1="800" y1="85" x2="800" y2="470" stroke="#999" strokeWidth="1"/>
              </g>

              {/* Housing (30%) - base length 500px */}
              <text x="190" y="108" textAnchor="end" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="500" className="fill-slate-900 dark:fill-slate-100">Housing</text>
              <rect x="200" y="88" width="500" height="38" fill="#2196F3" rx="5"/>
              <text x="710" y="112" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">30%</text>

              {/* Food (15%) - 350px (base + 50% reduction) */}
              <text x="190" y="153" textAnchor="end" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="500" className="fill-slate-900 dark:fill-slate-100">Food</text>
              <rect x="200" y="133" width="350" height="38" fill="#4CAF50" rx="5"/>
              <text x="560" y="157" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">15%</text>

              {/* Savings (15%) - 350px */}
              <text x="190" y="198" textAnchor="end" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="500" className="fill-slate-900 dark:fill-slate-100">Savings</text>
              <rect x="200" y="178" width="350" height="38" fill="#FF9800" rx="5"/>
              <text x="560" y="202" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">15%</text>

              {/* Transport (12.5%) - 320px */}
              <text x="190" y="243" textAnchor="end" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="500" className="fill-slate-900 dark:fill-slate-100">Transport</text>
              <rect x="200" y="223" width="320" height="38" fill="#F44336" rx="5"/>
              <text x="530" y="247" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">12.5%</text>

              {/* Insurance (7.5%) - 250px */}
              <text x="190" y="288" textAnchor="end" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="500" className="fill-slate-900 dark:fill-slate-100">Insurance</text>
              <rect x="200" y="268" width="250" height="38" fill="#9C27B0" rx="5"/>
              <text x="460" y="292" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">7.5%</text>

              {/* Entertainment (7.5%) - 250px */}
              <text x="190" y="333" textAnchor="end" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="500" className="fill-slate-900 dark:fill-slate-100">Entertainment</text>
              <rect x="200" y="313" width="250" height="38" fill="#E91E63" rx="5"/>
              <text x="460" y="337" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">7.5%</text>

              {/* Utilities (5%) - 200px */}
              <text x="190" y="378" textAnchor="end" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="500" className="fill-slate-900 dark:fill-slate-100">Utilities</text>
              <rect x="200" y="358" width="200" height="38" fill="#009688" rx="5"/>
              <text x="410" y="382" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">5%</text>

              {/* Debt (5%) - 200px */}
              <text x="190" y="423" textAnchor="end" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="500" className="fill-slate-900 dark:fill-slate-100">Debt</text>
              <rect x="200" y="403" width="200" height="38" fill="#607D8B" rx="5"/>
              <text x="410" y="427" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">5%</text>

              {/* Other (2.5%) - 150px (more visible) */}
              <text x="190" y="468" textAnchor="end" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="500" className="fill-slate-900 dark:fill-slate-100">Other</text>
              <rect x="200" y="448" width="150" height="38" fill="#9E9E9E" rx="5"/>
              <text x="360" y="472" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" className="fill-slate-900 dark:fill-slate-100">2.5%</text>

              {/* Scale reference */}
              <text x="200" y="520" textAnchor="start" fontFamily="Arial, sans-serif" fontSize="13" className="fill-slate-600 dark:fill-slate-400">
                Note: Larger categories are proportionally accurate; smaller categories are scaled up slightly for visibility.
              </text>
            </svg>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">The 50/30/20 Budgeting Rule</h2>

          <p>
            One of the most popular budgeting frameworks is the 50/30/20 rule, which provides a simple guideline for allocating your after-tax income:
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border-2 border-blue-500">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50%</div>
              <h3 className="text-xl font-semibold mb-2">Needs</h3>
              <p className="text-sm mb-0">
                Essential expenses you can't avoid: housing, utilities, groceries, transportation, insurance, minimum debt payments.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border-2 border-green-500">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">30%</div>
              <h3 className="text-xl font-semibold mb-2">Wants</h3>
              <p className="text-sm mb-0">
                Discretionary spending: dining out, entertainment, hobbies, subscriptions, vacations, non-essential shopping.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg border-2 border-purple-500">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">20%</div>
              <h3 className="text-xl font-semibold mb-2">Savings & Debt</h3>
              <p className="text-sm mb-0">
                Emergency fund, retirement contributions, investments, extra debt payments beyond minimums.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Recommended Budget Percentages by Category</h2>

          <p>
            While the 50/30/20 rule is a great starting point, here are more detailed recommended percentages for specific categories:
          </p>

          <div className="bg-muted p-6 rounded-lg my-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="font-semibold">Housing</span>
                <span className="text-muted-foreground">25-30%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="font-semibold">Transportation</span>
                <span className="text-muted-foreground">10-15%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="font-semibold">Food (Groceries + Dining)</span>
                <span className="text-muted-foreground">10-15%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="font-semibold">Insurance (All Types)</span>
                <span className="text-muted-foreground">10-25%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="font-semibold">Savings & Investments</span>
                <span className="text-muted-foreground">10-20%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="font-semibold">Debt Payments</span>
                <span className="text-muted-foreground">5-10%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="font-semibold">Entertainment & Recreation</span>
                <span className="text-muted-foreground">5-10%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border">
                <span className="font-semibold">Personal Care</span>
                <span className="text-muted-foreground">5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Miscellaneous</span>
                <span className="text-muted-foreground">5-10%</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
            <p className="font-semibold mb-2">💡 Important Note:</p>
            <p className="mb-0">
              These percentages are guidelines, not rigid rules. Your ideal budget depends on your location (cost of living), income level, family size, and financial goals. Someone in New York City might spend 40% on housing, while someone in a rural area might spend 20%.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Practical Tips for Managing Budget Percentages</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">1. Track Consistently</h3>
          <p>
            Monitor your expenses for at least 2-3 months to get an accurate picture. Use budgeting apps, spreadsheets, or bank statements to categorize spending. The more data you have, the better you can identify patterns.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. Identify Problem Areas</h3>
          <p>
            Compare your percentages to recommended ranges. If you're spending 40% on housing and only 5% on savings, you might need to consider downsizing or finding ways to increase income. Focus on the categories that are furthest from recommended ranges first.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. Make Gradual Adjustments</h3>
          <p>
            Don't try to overhaul your entire budget overnight. If dining out is 15% and you want it at 8%, reduce it by 2-3% each month. Small, sustainable changes are more likely to stick than drastic cuts.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. Automate Savings</h3>
          <p>
            Set up automatic transfers to savings accounts right after payday. "Pay yourself first" by treating savings as a non-negotiable expense. This makes it easier to hit your 15-20% savings target.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">5. Review Quarterly</h3>
          <p>
            Recalculate your budget percentages every 3 months. Life changes—you get a raise, move to a new city, or your car is paid off. Regular reviews ensure your budget evolves with your circumstances.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Common Mistakes to Avoid</h2>

          <ul>
            <li>
              <strong>Forgetting irregular expenses:</strong> Don't forget annual or quarterly costs like car registration, property taxes, or holiday gifts. Divide these by 12 and include them in monthly calculations.
            </li>
            <li>
              <strong>Using gross income instead of net:</strong> Always calculate percentages based on after-tax income (take-home pay), not your gross salary.
            </li>
            <li>
              <strong>Being too rigid:</strong> Life happens. Some months you'll overspend in one category—that's okay. Look at averages over 3-6 months rather than judging yourself by one bad month.
            </li>
            <li>
              <strong>Ignoring small expenses:</strong> Those $5 coffee runs and $10 subscription services add up. Track everything, even small purchases.
            </li>
            <li>
              <strong>Not adjusting for life changes:</strong> When you get a raise, avoid lifestyle inflation. Try to maintain the same expense percentages and put the extra money toward savings or debt.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Related Calculators</h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <Link
              href="/calculators/daily/budget-percentage"
              className="block p-6 bg-primary/5 hover:bg-primary/10 rounded-lg border border-primary/20 transition-colors no-underline"
            >
              <h3 className="text-lg font-semibold mb-2 text-primary">Budget Percentage Calculator</h3>
              <p className="text-sm text-muted-foreground mb-0">
                Calculate what percentage of your budget goes to each expense category. Apply the 50/30/20 rule automatically.
              </p>
            </Link>

            <Link
              href="/calculators/basic-percent/percentage-of-total"
              className="block p-6 bg-primary/5 hover:bg-primary/10 rounded-lg border border-primary/20 transition-colors no-underline"
            >
              <h3 className="text-lg font-semibold mb-2 text-primary">Percentage of Total Calculator</h3>
              <p className="text-sm text-muted-foreground mb-0">
                Find what percentage each expense represents of your total monthly budget with detailed breakdowns.
              </p>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">
                What if my percentages don't match the recommended ranges?
              </h3>
              <p>
                Don't panic if your budget doesn't match recommendations perfectly. These are guidelines, not requirements. High-cost-of-living areas might require 35-40% for housing. Focus on what you can control: reduce discretionary spending, look for ways to increase income, or make long-term plans to reduce fixed costs. The goal is progress, not perfection.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">
                How do I handle variable income?
              </h3>
              <p>
                If your income fluctuates (freelance, commission-based, seasonal work), calculate percentages based on your average monthly income over the past 6-12 months. Budget based on your lowest income month to be safe, and use above-average months to build an emergency fund buffer.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">
                Should I calculate based on gross or net income?
              </h3>
              <p>
                Always use net (after-tax) income for budgeting percentages. This is your actual take-home pay after taxes, retirement contributions, and other deductions. If employer-deducted items like health insurance or 401k contributions are taken out before you see the money, they're already "spent" from a budgeting perspective.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2">
                What tools can I use to track expense percentages?
              </h3>
              <p>
                Use budgeting apps like Mint, YNAB (You Need A Budget), Personal Capital, or even a simple spreadsheet. Many banking apps now offer built-in spending categorization. For quick calculations, use our Budget Percentage Calculator to see instant breakdowns of where your money is going.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-semibold mb-3">Start Calculating Your Budget Percentages</h2>
            <p className="text-muted-foreground mb-4">
              Ready to take control of your monthly expenses? Use our free Budget Percentage Calculator to instantly see where your money is going and get personalized recommendations.
            </p>
            <Link
              href="/calculators/daily/budget-percentage"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 no-underline"
            >
              Calculate Your Budget Percentages
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
