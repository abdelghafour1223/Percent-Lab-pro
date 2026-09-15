// Blog posts data — single source of truth for long-form articles.
// Each post follows the seo-content skill shape: Who/How/Why answered
// (byline + method + people-first purpose), E-E-A-T signals (dates,
// author, sources), quotable answer-first blocks for AI citability,
// worked examples with VERIFIED math, comparison tables, mistake
// callouts, FAQs (rendered visibly AND mirrored 1:1 in FAQPage JSON-LD),
// and 3-5 contextual internal links (never /calculators/common/*).

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  category: string; // must match a BLOG_CATEGORIES slug
  title: string; // H1, includes primary keyword
  metaTitle: string; // 50-60 chars
  metaDescription: string; // 150-160 chars
  keywords: string[];
  publishedAt: string; // ISO date
  updatedAt: string; // ISO date
  readingMinutes: number;
  intro: string[]; // answer-first opening (AI-citable, 40-60 words first)
  sections: BlogSection[];
  workedExamples: Array<{ title: string; steps: string[]; result: string }>;
  comparisonTable: {
    caption: string;
    headers: [string, string, string];
    rows: Array<[string, string, string]>;
  };
  mistakes: Array<{ title: string; text: string }>;
  faqs: Array<{ q: string; a: string }>;
  relatedLinks: Array<{ label: string; href: string; anchor: string }>;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-calculate-percentage',
    category: 'percentage-basics',
    title: 'How to Calculate Percentage in 3 Steps (With Formula)',
    metaTitle: 'How to Calculate Percentage: Formula + 3 Worked Examples',
    metaDescription:
      'Learn how to calculate percentage with the simple formula, 3 worked examples, mental-math shortcuts, and the mistakes everyone makes. Free calculators included.',
    keywords: [
      'how to calculate percentage',
      'percentage formula',
      'calculate percent of number',
      'percentage examples',
      'percent shortcut',
    ],
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    readingMinutes: 7,
    intro: [
      'To calculate a percentage, use Result = (Percentage ÷ 100) × Number. For example, 20% of 80 is (20 ÷ 100) × 80 = 0.20 × 80 = 16. Every percentage problem on this page reduces to this one formula rearranged three ways.',
      'Percentages answer three questions: what is X% of Y, Y is what percent of X, and Y is P% of what number. Confusing these three is the single most common error — each section below covers one form with a worked example you can verify.',
      'For mental math, anchor everything on 10%: move the decimal one place left (10% of 250 = 25). From there, 5% is half of 10%, 20% is double, 25% is divide by 4, and 50% is divide by 2.',
    ],
    sections: [
      {
        heading: 'The Only Percentage Formula You Need',
        paragraphs: [
          'A percent means "per hundred," so 20% is literally 20 per 100, or 0.20 as a decimal. Converting first and multiplying second never fails: divide the percent by 100, then multiply by the number. For 20% of 80: 20 ÷ 100 = 0.20, then 0.20 × 80 = 16.',
          'Going the other direction is the same idea in reverse. To turn a decimal into a percent, multiply by 100: 0.25 × 100 = 25%. To turn a fraction into a percent, divide then multiply by 100: 32 ÷ 40 = 0.8, then 0.8 × 100 = 80%.',
        ],
        bullets: [
          'Percent → decimal: divide by 100 (20% → 0.20)',
          'Decimal → percent: multiply by 100 (0.20 → 20%)',
          'Fraction → percent: divide, then × 100 (3/4 → 75%)',
        ],
      },
      {
        heading: 'The Three Forms (Know Which One You Need)',
        paragraphs: [
          'Form 1 finds a slice: X% of Y. Discounts, tips, and tax all use it. Form 2 finds a share: Y is what percent of X. Test scores and completion rates use it: (Part ÷ Whole) × 100. Form 3 finds the whole: 45 is 30% of what number. Divide the part by the decimal: 45 ÷ 0.30 = 150.',
          'Before calculating, ask which unknown you have: the slice, the share, or the whole. Picking the wrong form is why correct arithmetic still produces wrong answers.',
        ],
      },
      {
        heading: 'Mental-Math Shortcuts That Always Work',
        paragraphs: [
          'The 10% anchor handles nearly every everyday calculation. 10% of any number is one decimal shift left. Build from there: 5% is half of 10%, 20% is double 10%, 25% is divide by 4, 50% is divide by 2. For 15%, add 10% plus half again.',
          'Percentages are reversible: X% of Y equals Y% of X. So 12% of 50 is the same as 50% of 12, which is obviously 6. Flipping the numbers often turns hard mental math into trivial math.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Form 1: 20% of 80',
        steps: [
          'Convert the percent to a decimal: 20 ÷ 100 = 0.20.',
          'Multiply: 0.20 × 80 = 16.',
        ],
        result: '20% of 80 is 16.',
      },
      {
        title: 'Form 2: 30 is what percent of 120',
        steps: [
          'Divide part by whole: 30 ÷ 120 = 0.25.',
          'Multiply by 100: 0.25 × 100 = 25%.',
        ],
        result: '30 is 25% of 120.',
      },
      {
        title: 'Form 3: 12 is 15% of what number',
        steps: [
          'Convert the percent: 15 ÷ 100 = 0.15.',
          'Divide the part by the decimal: 12 ÷ 0.15 = 80.',
          'Check: 0.15 × 80 = 12.',
        ],
        result: 'The whole is 80.',
      },
    ],
    comparisonTable: {
      caption: 'Mental shortcuts that always work (shown on $200).',
      headers: ['Shortcut', 'Math', 'On $200'],
      rows: [
        ['10% — move decimal', '200 → 20.0', '$20'],
        ['5% — half of 10%', '20 ÷ 2', '$10'],
        ['20% — double 10%', '20 × 2', '$40'],
        ['25% — divide by 4', '200 ÷ 4', '$50'],
        ['50% — divide by 2', '200 ÷ 2', '$100'],
      ],
    },
    mistakes: [
      {
        title: 'Forgetting to divide by 100',
        text: '20 × 80 = 1,600 is not 20% of anything. Always convert the percent to a decimal first: 0.20 × 80 = 16.',
      },
      {
        title: 'Mixing up the three forms',
        text: '20% of 80 (16) is not 80 is what percent of 20 (400%). Name your unknown — slice, share, or whole — before touching numbers.',
      },
      {
        title: 'Confusing % with percentage points',
        text: 'A rate rising from 10% to 15% gains 5 percentage points but 50% relatively. Headlines exploit this — always check which one is meant.',
      },
    ],
    faqs: [
      {
        q: 'What is the formula to calculate percentage?',
        a: 'Result = (Percentage ÷ 100) × Number. For 20% of 80: (20 ÷ 100) × 80 = 0.20 × 80 = 16.',
      },
      {
        q: 'How do I calculate percentages in my head fast?',
        a: 'Anchor on 10% (move the decimal left: 10% of 250 = 25), then build: 5% is half of 10%, 20% is double, 25% is divide by 4, 50% is divide by 2.',
      },
      {
        q: 'How do I find what percent one number is of another?',
        a: 'Divide the part by the whole and multiply by 100. 30 out of 120 is (30 ÷ 120) × 100 = 25%.',
      },
      {
        q: 'What is the difference between percent and percentage points?',
        a: 'Going from 10% to 15% is +5 percentage points but a 50% relative increase ((15−10) ÷ 10 × 100). Always clarify which one a figure means.',
      },
    ],
    relatedLinks: [
      { label: 'Percent Of Calculator', href: '/calculators/basic-percent/percent-of', anchor: 'Calculate any X% of Y' },
      { label: 'What Percent Calculator', href: '/calculators/basic-percent/what-percent', anchor: 'Reverse percentage lookup' },
      { label: '50 common calculations', href: '/calculators/basic-percent/common-percentage-calculations', anchor: 'Browse worked examples' },
    ],
  },
  {
    slug: 'compound-interest-explained',
    category: 'finance',
    title: 'Compound Interest Explained: Formula, Examples, Rule of 72',
    metaTitle: 'Compound Interest Explained: Formula + Examples (2026)',
    metaDescription:
      'Compound interest explained simply: the A = P(1+r/n)^nt formula, 3 verified examples, the Rule of 72, and the fee mistake that costs thousands.',
    keywords: [
      'compound interest explained',
      'compound interest formula',
      'compound interest example',
      'rule of 72',
      'how does compound interest work',
    ],
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    readingMinutes: 8,
    intro: [
      'Compound interest means earning returns on your returns. The formula is A = P(1 + r/n)^(nt): $1,000 at 5% compounded yearly for 10 years grows to $1,000 × 1.05^10 = $1,628.89 — $628.89 of it pure compounding, not deposits.',
      'Time matters more than rate. Starting 10 years earlier beats a slightly higher return started late, because each year\'s growth becomes next year\'s base. That is why the first dollars you invest are the most powerful dollars of your life.',
      'The fastest estimator is the Rule of 72: divide 72 by your annual rate to get the years needed to double. At 6%, money doubles in 72 ÷ 6 = 12 years.',
    ],
    sections: [
      {
        heading: 'The Formula, Piece by Piece',
        paragraphs: [
          'A = P(1 + r/n)^(nt). P is your starting principal, r is the annual rate as a decimal (5% → 0.05), n is how many times per year interest compounds, and t is years. The exponent nt counts every compounding event.',
          'Compounding frequency matters but less than people think. Monthly compounding beats yearly compounding by a small margin at the same nominal rate — always compare APY (which includes compounding) rather than APR when choosing savings accounts.',
        ],
      },
      {
        heading: 'Why Starting Early Beats Higher Returns',
        paragraphs: [
          'Compare $5,000 invested at 7% for 30 years ($38,061) versus the same $5,000 at 9% for 20 years ($28,022). The lower rate wins because it compounds a full decade longer. Every year of delay must be compensated by meaningfully higher returns or bigger deposits.',
          'Contributions amplify the effect. Adding $200 monthly to that 7% account turns $38,061 into roughly $227,000 over 30 years — deposits provide fuel, compounding provides the engine.',
        ],
      },
      {
        heading: 'The Fee Mistake That Costs Thousands',
        paragraphs: [
          'A 1% annual fee on a $100,000 portfolio growing at 7% for 20 years costs about $60,000 in lost growth versus a 0.1% fee — the fee compounds against you exactly like returns compound for you. Expense ratios deserve the same scrutiny as returns.',
          'Verify any projection by checking the three inputs: real rate after inflation, compounding frequency, and whether contributions are included. Change one input at a time to see which drives the result.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Basic: $1,000 at 5% for 10 years (yearly)',
        steps: [
          'Write the inputs: P = 1000, r = 0.05, n = 1, t = 10.',
          'Apply the formula: A = 1000 × (1 + 0.05/1)^(1×10) = 1000 × 1.05^10.',
          'Compute: 1.05^10 ≈ 1.62889, so A ≈ $1,628.89.',
        ],
        result: 'Balance $1,628.89 — interest earned $628.89.',
      },
      {
        title: 'Monthly compounding: $5,000 at 4% for 5 years',
        steps: [
          'Inputs: P = 5000, r = 0.04, n = 12, t = 5 (60 periods).',
          'A = 5000 × (1 + 0.04/12)^60 ≈ 5000 × 1.22099.',
        ],
        result: 'Balance ≈ $6,105 — monthly compounding adds ~$8 over yearly.',
      },
      {
        title: 'Rule of 72: doubling at 6%',
        steps: [
          'Divide: 72 ÷ 6 = 12.',
          'Interpretation: money doubles roughly every 12 years at 6%.',
        ],
        result: '$10,000 at 6% ≈ $20,000 in 12 years.',
      },
    ],
    comparisonTable: {
      caption: 'What $10,000 becomes at different rates over time (yearly compounding).',
      headers: ['Rate', '10 years', '30 years'],
      rows: [
        ['3%', '$13,439', '$24,273'],
        ['5%', '$16,289', '$43,219'],
        ['7%', '$19,672', '$76,123'],
        ['9%', '$23,674', '$132,676'],
      ],
    },
    mistakes: [
      {
        title: 'Comparing APR instead of APY',
        text: 'APR ignores compounding while APY includes it. Two accounts quoting 4% can pay different amounts — always compare APY for savings.',
      },
      {
        title: 'Ignoring fees',
        text: 'A 1% fee compounds against you for decades. A fund earning 7% with a 1% fee behaves like 6% — over 20 years that gap costs tens of thousands.',
      },
      {
        title: 'Forgetting inflation',
        text: 'Nominal 7% at 3% inflation is roughly 4% real growth. Plan spending power in real terms, not statement balances.',
      },
    ],
    faqs: [
      {
        q: 'What is the compound interest formula?',
        a: 'A = P(1 + r/n)^(nt): principal × (1 + annual rate ÷ compounds per year)^(compounds × years). $1,000 at 5% yearly for 10 years = 1000 × 1.05^10 = $1,628.89.',
      },
      {
        q: 'What is the Rule of 72?',
        a: 'Divide 72 by your annual rate to estimate doubling time. At 6%, money doubles in 72 ÷ 6 = 12 years. It is an approximation, most accurate for rates between 4% and 12%.',
      },
      {
        q: 'Is compound interest better monthly or yearly?',
        a: 'Monthly compounding pays slightly more at the same nominal rate ($5,000 at 4% for 5 years: ≈$6,105 monthly vs ≈$6,083 yearly). Compare APY to decide — it already reflects frequency.',
      },
      {
        q: 'How much does a 1% fee cost long term?',
        a: 'Enormously. On $100,000 at 7% over 20 years, a 1% annual fee versus 0.1% costs roughly $60,000 in lost compounding. Fees compound against you.',
      },
    ],
    relatedLinks: [
      { label: 'Compound Interest Calculator', href: '/calculators/finance/compound-interest', anchor: 'Project your own growth' },
      { label: 'Investment Return Calculator', href: '/calculators/finance/investment-return', anchor: 'Analyze investment returns' },
      { label: 'ROI Calculator', href: '/calculators/finance/roi', anchor: 'Measure return on investment' },
    ],
  },
  {
    slug: 'what-grade-do-i-need-on-final',
    category: 'education',
    title: 'What Grade Do I Need on My Final? Exact Formula + Table',
    metaTitle: 'What Grade Do I Need on My Final? Formula + Examples',
    metaDescription:
      'Find exactly what grade you need on your final with the formula, 3 worked scenarios, a what-if table, and what it means when the answer tops 100%.',
    keywords: [
      'what grade do i need on my final',
      'final grade calculator',
      'how to calculate final grade',
      'final exam weight calculator',
      'grade needed calculator',
    ],
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    readingMinutes: 7,
    intro: [
      'The exact score you need is Final Needed = (Target − Current × (1 − Weight)) ÷ Weight. With an 85% current grade, a 90% target, and a 30% final: (90 − 85 × 0.70) ÷ 0.30 = 101.67% — meaning 90% is out of reach without extra credit.',
      'Your final can only move your grade by its weight. A 10% final barely dents an 85%, while a 40% final can rescue — or wreck — a whole semester. Knowing the weight tells you how much studying actually pays.',
      'If your answer tops 100%, lower the target one point at a time until it drops under 100. That reachable target is your real goal for finals week.',
    ],
    sections: [
      {
        heading: 'The Formula (And What Each Part Means)',
        paragraphs: [
          'Current × (1 − Weight) is the portion of your grade already locked in. Subtracting it from your target leaves the points the final must supply; dividing by the weight converts those points into the exam score required.',
          'Write the weight as a decimal: 30% becomes 0.30. A "20% final" means 80% of your grade is already decided before you sit down — the exam supplies only the last fifth.',
        ],
      },
      {
        heading: 'What-If Table: Same Student, Different Finals',
        paragraphs: [
          'Take a student at 85% who scores 78% on the final. At 10% weight the course lands at 84.3%; at 20% weight 83.6%; at 40% weight 82.2%. Same exam, three different semesters — weight is the story.',
          'Build your own table with target scores of 80, 85, 90, 95, and 100 before study week. It converts anxiety into a plan: you will see exactly which classes reward effort and which are mathematically settled.',
        ],
      },
      {
        heading: 'When the Answer Exceeds 100%',
        paragraphs: [
          'A result like 114% is the math telling you the target is impossible under current rules — no exam performance gets you there. Options: lower the target, earn extra credit, or check whether your syllabus drops the lowest score or curves.',
          'Near letter boundaries, tiny shifts flip GPA points: 89.5% versus 90% can be B+ versus A−. Verify your school\'s rounding and plus/minus cutoffs before assuming the letter.',
        ],
      },
    ],
    workedExamples: [
      {
        title: 'Reach case: 85% current, 90% target, 30% final',
        steps: [
          'Locked portion: 85 × (1 − 0.30) = 85 × 0.70 = 59.5.',
          'Points the final must supply: 90 − 59.5 = 30.5.',
          'Required score: 30.5 ÷ 0.30 = 101.67%.',
        ],
        result: '101.67% needed — 90% is out of reach without extra credit.',
      },
      {
        title: 'Boundary case: 75% current, 80% target, 20% final',
        steps: [
          'Locked portion: 75 × 0.80 = 60.',
          'Points needed: 80 − 60 = 20.',
          'Required score: 20 ÷ 0.20 = 100%.',
        ],
        result: 'Exactly 100% needed — possible, but perfection required.',
      },
      {
        title: 'Damage check: 82% current, 78% final, 25% weight',
        steps: [
          'Course grade = 82 × 0.75 + 78 × 0.25.',
          'Compute: 61.5 + 19.5 = 81.',
        ],
        result: 'Course lands at 81% — the final cost 1 point.',
      },
    ],
    comparisonTable: {
      caption: 'Same 78% final exam, different weights (student at 85%).',
      headers: ['Final weight', 'Course grade', 'Verdict'],
      rows: [
        ['10%', '84.3%', 'Barely moves'],
        ['20%', '83.6%', 'Small dent'],
        ['30%', '82.9%', 'Noticeable drop'],
        ['40%', '82.2%', 'Major event'],
      ],
    },
    mistakes: [
      {
        title: 'Averaging without weights',
        text: '(85 + 78) ÷ 2 = 81.5 looks right but ignores the syllabus. Always multiply each score by its weight first.',
      },
      {
        title: 'Assuming the final can erase the semester',
        text: 'A 10% final moves an 85% by at most 1.5 points even with a perfect score. Effort follows weight — study where weight lives.',
      },
      {
        title: 'Ignoring plus/minus cutoffs',
        text: 'The difference between 89.4% and 90% can be a full GPA-point step. Check rounding rules before celebrating or panicking.',
      },
    ],
    faqs: [
      {
        q: 'How do I calculate what I need on my final?',
        a: 'Use (Target − Current × (1 − Weight)) ÷ Weight. Example: (90 − 85 × 0.70) ÷ 0.30 = 101.67%, so 90% is unreachable without extra credit.',
      },
      {
        q: 'What if I need over 100% on my final?',
        a: 'The target is impossible under current rules. Lower the target one point at a time until the required score drops under 100, or seek extra credit or a curve.',
      },
      {
        q: 'Can one final drop me a whole letter grade?',
        a: 'Yes near cutoffs with 15–30%+ weight. An 85% student scoring 78% on a 40% final falls to 82.2% — check your plus/minus boundaries.',
      },
      {
        q: 'Do finals affect cumulative GPA directly?',
        a: 'No — the final changes the course grade, the course grade feeds semester GPA, and semester GPAs feed cumulative GPA. Track the chain with a GPA calculator.',
      },
    ],
    relatedLinks: [
      { label: 'Final Grade Calculator', href: '/calculators/education/final-grade', anchor: 'Calculate your exact final grade' },
      { label: 'Grade Needed Calculator', href: '/calculators/education/grade-needed', anchor: 'Find your required score' },
      { label: 'GPA Calculator', href: '/calculators/education/gpa-calculator', anchor: 'Convert grades to GPA' },
    ],
  },
  {
    slug: 'how-to-calculate-discounts-and-sales-tax',
    category: 'shopping',
    title: 'How to Calculate Discounts and Sales Tax (True Price)',
    metaTitle: 'Discount + Sales Tax: True Checkout Price Formula',
    metaDescription:
      'Stop guessing at checkout. The true-price formula, why 20% + 10% is not 30% off, a $200 worked example, and how to spot fake Black Friday deals.',
    keywords: [
      'how to calculate discount',
      'how to calculate sales tax',
      'discount and tax calculator',
      'stacking discounts math',
      'true price formula',
    ],
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    readingMinutes: 7,
    intro: [
      'Your true checkout price is (Original − Discount) × (1 + Tax Rate) + Fees. A $200 item at 30% off with 8% tax costs $200 × 0.70 × 1.08 = $151.20 — not the $140 the tag suggests and not the $160 you might fear.',
      'Sequential discounts multiply, they never add. "Extra 10% off" on top of 20% off is not 30% off: $100 → $80 → $72, a 28% total reduction. Retailers count on shoppers adding percentages that should be multiplied.',
      'Always compare out-the-door totals — price after discounts, plus tax, shipping, and fees. The biggest percent sign routinely loses to the smallest final number.',
    ],
    sections: [
      {
        heading: 'The True-Price Formula',
        paragraphs: [
          'Step one: subtract the discount from the original price. Step two: multiply by one plus the tax rate (8% → 1.08). Step three: add flat fees like shipping. Order matters — tax applies to the discounted price in most US states, which slightly favors the shopper.',
          'For the $200 example: discount takes it to $140, tax adds $11.20, total $151.20. Knowing the formula turns every shelf tag into a verifiable claim.',
        ],
      },
      {
        heading: 'Why Stacked Discounts Never Add Up',
        paragraphs: [
          'Each discount applies to an already-reduced price, so the second percent bites a smaller base. 20% then 10% removes $20 then $8 — $28 total, not $30. Three stacked 10%-offs remove 27.1%, not 30%.',
          'Coupons, cashback, and store credit follow the same rule in whatever order the register applies them. Ask which applies first on big purchases; the difference is real money.',
        ],
        bullets: [
          '20% + 10% = 28% total (not 30%)',
          '10% × 3 stacked = 27.1% total (not 30%)',
          '50% + 50% = 75% total (not free)',
        ],
      },
      {
        heading: 'Spotting Fake Black Friday Deals',
        paragraphs: [
          'Verify the "original" price over 30+ days of history — inflated reference prices are the most common trick. Compute the unit price for groceries and the out-the-door total for electronics before deciding anything is a deal.',
          'Compare against at least two other sellers with tax and shipping included. A genuine 25% clearance beats a theatrical "70% off" that started from a price nobody ever paid.',
        ],
      },
    ],
    workedExamples: [
      {
        title: '$200 at 30% off with 8% tax',
        steps: [
          'Discounted price: 200 × (1 − 0.30) = 200 × 0.70 = $140.00.',
          'Add tax: 140 × 1.08 = $151.20.',
        ],
        result: 'True checkout price: $151.20.',
      },
      {
        title: '20% off plus extra 10% off $100',
        steps: [
          'First discount: 100 × 0.80 = $80.00.',
          'Second discount: 80 × 0.90 = $72.00.',
          'Total reduction: (100 − 72) ÷ 100 = 28%.',
        ],
        result: 'Final $72.00 — a 28% deal, not 30%.',
      },
      {
        title: '$150 at 25% off with 6% tax',
        steps: [
          'Discounted price: 150 × 0.75 = $112.50.',
          'Add tax: 112.50 × 1.06 = $119.25.',
        ],
        result: 'True checkout price: $119.25.',
      },
    ],
    comparisonTable: {
      caption: 'What stacked discounts really total.',
      headers: ['Advertised stack', 'Real math', 'True total off'],
      rows: [
        ['20% + 10%', '0.80 × 0.90 = 0.72', '28%'],
        ['30% + 20%', '0.70 × 0.80 = 0.56', '44%'],
        ['50% + 50%', '0.50 × 0.50 = 0.25', '75%'],
        ['10% × 3', '0.90³ = 0.729', '27.1%'],
      ],
    },
    mistakes: [
      {
        title: 'Adding stacked percentages',
        text: '20% + 10% is 28%, not 30%. Percentages multiply across steps — adding them overstates every stacked deal.',
      },
      {
        title: 'Forgetting tax until the register',
        text: 'A $140 deal at 8% tax is $151.20 out the door. Always multiply by (1 + rate) before comparing sellers.',
      },
      {
        title: 'Trusting the reference price',
        text: '"Was $300" means nothing without history. Verify 30+ days of pricing before a big-ticket sale purchase.',
      },
    ],
    faqs: [
      {
        q: 'How do I calculate discount plus tax?',
        a: 'Use (Original − Discount) × (1 + Tax Rate). $200 at 30% off with 8% tax: 200 × 0.70 × 1.08 = $151.20.',
      },
      {
        q: 'Is 20% off plus 10% off the same as 30% off?',
        a: 'No — sequential discounts multiply: $100 → $80 → $72, a 28% total reduction. Retailers count on shoppers adding instead of multiplying.',
      },
      {
        q: 'How do I spot a fake sale price?',
        a: 'Check 30+ days of price history, compute unit prices, and compare out-the-door totals (tax + shipping + fees) across at least two sellers.',
      },
      {
        q: 'Do you pay tax on the original or sale price?',
        a: 'In most US states, sales tax applies to the discounted price — one small mercy. Add flat shipping fees after tax.',
      },
    ],
    relatedLinks: [
      { label: 'Discount Calculator', href: '/calculators/finance/discount', anchor: 'Calculate any discount' },
      { label: 'Sales Tax Calculator', href: '/calculators/finance/sales-tax', anchor: 'Find your checkout total' },
      { label: '25% off $100 explained', href: '/what-is-25-percent-of-100', anchor: 'See a worked quarter-off example' },
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogPost(category: string, slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.category === category && p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}
