// Per-slug enrichment for the 22 GSC-flagged PSEO pages ("Crawled - currently
// not indexed", Sep 2026). Each entry adds content that is UNIQUE to its exact
// numbers: a mental-math hook, two FAQs with exact figures (rendered visibly
// AND merged into the FAQPage JSON-LD 1:1), and contextual internal links.
// After enrichment, slugs leave PSEO_NOINDEX_SLUGS and re-enter the sitemap.

export interface PseoEnrichment {
  hook: string;
  faqs: Array<{ q: string; a: string }>;
  links: Array<{ label: string; href: string; anchor: string }>;
}

const ENRICHMENT: Record<string, PseoEnrichment> = {
  // ---------------- Batch 1 ----------------
  'what-is-100-percent-of-100': {
    hook: 'No math needed: 100% is the identity. The decimal is 1.0, and 1.0 x 100 = 100. Whenever a percent calculation feels hard, ask whether it is secretly a 100% case in disguise.',
    faqs: [
      {
        q: 'What does 100% of a $100 budget mean in practice?',
        a: 'It means the entire $100.00 is allocated and $0.00 remains. If you assign 100% of a $100 budget to one project, every other category gets zero — that is the discipline (and the danger) of a full allocation.',
      },
      {
        q: 'How do I verify a 100% calculation?',
        a: 'Convert to a decimal: 100 / 100 = 1.0. Multiply: 1.0 x 100 = 100. Any number times 1.0 is itself, so if your answer differs from the starting number, recheck the steps.',
      },
    ],
    links: [
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
      { label: 'Reverse: what percent is it?', href: '/calculators/basic-percent/what-percent', anchor: 'Try the What Percent Calculator' },
    ],
  },
  'what-is-75-percent-of-200': {
    hook: 'Think in quarters: 25% of 200 is 200 / 4 = 50, and 75% is three quarters — 50 x 3 = 150. Any 75% problem becomes easy once you find 25% first.',
    faqs: [
      {
        q: 'What is 75% off $200?',
        a: 'The discount is $150.00, so you pay $200 - $150 = $50.00. A 75% clearance sounds dramatic because it is: you keep only one quarter of the original price.',
      },
      {
        q: 'How do I double-check that 75% of 200 is 150?',
        a: 'Two checks: add the remainder — 150 + 50 = 200, the full amount. Or divide back: 150 / 200 = 0.75 = 75%. Both confirm the answer.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-10-percent-of-50': {
    hook: 'Move the decimal one place left: 50 becomes 5.00. That is the entire 10% trick — no multiplication required, and it works for any number.',
    faqs: [
      {
        q: 'How much is 10% sales tax on $50?',
        a: 'The tax is $5.00, so the total is $50 + $5 = $55.00. In states with roughly 10% combined rates, the move-the-decimal trick gives you the checkout total in seconds.',
      },
      {
        q: 'What is a 10% tip on a $50 bill?',
        a: 'The tip is $5.00, for a $55.00 total. Ten percent is a starting baseline — double it for a standard 20% gratuity ($10.00).',
      },
    ],
    links: [
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
    ],
  },
  'what-is-50-percent-of-300': {
    hook: 'Half of anything is division by 2: 300 / 2 = 150. Fifty percent questions are free points — answer them before reaching for a calculator.',
    faqs: [
      {
        q: 'How do I split a $300 bill 50/50?',
        a: 'Each share is $150.00. Compute 50% of 300 (150), then verify: 150 + 150 = 300, the full bill.',
      },
      {
        q: 'What is a 50% deposit on $300?',
        a: 'The upfront payment is $150.00, leaving a $150.00 balance. Half-now-half-later splits are the most common deposit structure for mid-size services.',
      },
    ],
    links: [
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
      { label: 'Reverse: what percent is it?', href: '/calculators/basic-percent/what-percent', anchor: 'Try the What Percent Calculator' },
    ],
  },
  'what-is-5-percent-of-100': {
    hook: 'Find 10% first (move the decimal: 100 becomes 10), then halve it: 10 / 2 = 5. Every 5% problem is a 10% problem cut in half.',
    faqs: [
      {
        q: 'What is a 5% fee on $100?',
        a: 'The fee is $5.00, so you receive $100 - $5 = $95.00. Small percentages like this are typical for platform fees and payment processing.',
      },
      {
        q: 'How do I verify that 5% of 100 is 5?',
        a: 'Convert: 5 / 100 = 0.05. Multiply: 0.05 x 100 = 5. Or reason it out: 5% is half of 10%, and 10% of 100 is 10, so half is 5.',
      },
    ],
    links: [
      { label: 'Add fees and tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax and fees' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-25-percent-of-200': {
    hook: 'Divide by 4: 200 / 4 = 50. Twenty-five percent is exactly one quarter, so every 25% question is a division-by-4 question.',
    faqs: [
      {
        q: 'What is 25% off $200?',
        a: 'The discount is $50.00, so you pay $200 - $50 = $150.00. Quarter-off sales are common for electronics and appliances.',
      },
      {
        q: 'Why does dividing by 4 give 25%?',
        a: 'Because 25/100 simplifies to 1/4. So 25% of 200 = 200 / 4 = 50. Check it: 50 x 4 = 200, the whole amount.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-5-percent-of-1000': {
    hook: 'Ten percent of 1,000 is 100 (move the decimal), so 5% is half: 100 / 2 = 50. On four-figure amounts, the 10%-then-halve route avoids decimal-place errors.',
    faqs: [
      {
        q: 'What is a 5% commission on a $1,000 sale?',
        a: 'The commission is $50.00, leaving $950.00. Freelance and referral commissions in the 3-10% band all work the same way: decimal first, then multiply.',
      },
      {
        q: 'How much is left after a 5% deduction from $1,000?',
        a: '$950.00 remains ($1,000 - $50). The remaining 95% is 0.95 x 1,000 = 950 — a useful cross-check on the same numbers.',
      },
    ],
    links: [
      { label: 'Add fees and tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax and fees' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-40-percent-of-100': {
    hook: 'Build from 10%: 10% of 100 is 10, and four of those chunks make 40 — 10 x 4 = 40. Scaling up from 10% beats raw multiplication for every multiple of ten.',
    faqs: [
      {
        q: 'What is 40% off $100?',
        a: 'The discount is $40.00, so you pay $60.00. Forty-percent sales usually mark end-of-season clearances rather than everyday prices.',
      },
      {
        q: 'What is a 40% deposit on $100?',
        a: 'The upfront payment is $40.00, with a $60.00 balance due later. Verify the split adds up: 40 + 60 = 100.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-25-percent-of-50': {
    hook: 'One quarter of 50: 50 / 4 = 12.50. When the division is not clean, keep the .50 — dropping it is the classic quarter-percent error on small bills.',
    faqs: [
      {
        q: 'What is 25% off $50?',
        a: 'The discount is $12.50, so you pay $50 - $12.50 = $37.50. Always keep the fifty cents: rounding to $12 silently overcharges you.',
      },
      {
        q: 'How do I verify that 25% of 50 is 12.50?',
        a: 'Multiply back by 4: 12.50 x 4 = 50.00, the whole. Since 25% is one quarter, four copies must rebuild the original exactly.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
    ],
  },
  'what-is-30-percent-of-50': {
    hook: 'Stack three 10% chunks: 10% of 50 is 5, so 30% is 5 + 5 + 5 = 15. Chunking from 10% works for any multiple of ten.',
    faqs: [
      {
        q: 'What is 30% off $50?',
        a: 'The discount is $15.00, so you pay $35.00. Thirty-percent discounts are the backbone of mid-season retail sales.',
      },
      {
        q: 'How do I sanity-check 30% of 50 in my head?',
        a: 'Add three 10% chunks: 5 + 5 + 5 = 15. If chunking and the formula (0.30 x 50 = 15) agree, the answer is solid.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-30-percent-of-200': {
    hook: 'Ten percent of 200 is 20, triple it: 20 x 3 = 60. Moving the decimal first keeps the zeros under control on larger bases.',
    faqs: [
      {
        q: 'What is a 30% deposit on $200?',
        a: 'The upfront payment is $60.00, leaving a $140.00 balance. Contractors and event venues commonly ask 25-35% upfront — this is that math.',
      },
      {
        q: 'What is 30% off $200?',
        a: 'The discount is $60.00, so you pay $140.00. Note the symmetry: deposit math and discount math are the same subtraction from opposite sides.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
    ],
  },
  // ---------------- Batch 2 ----------------
  'what-is-50-percent-of-100': {
    hook: 'The benchmark halving: 100 / 2 = 50. Half-off is the reference discount every shopper knows — if a deal cannot beat 50% of 100, it cannot beat $50.',
    faqs: [
      {
        q: 'What is 50% off $100?',
        a: 'The discount is $50.00, so you pay $50.00. True half-price is rarer than labels suggest — verify against the pre-sale price before celebrating.',
      },
      {
        q: 'How do I split $100 evenly?',
        a: 'Each half is $50.00. Compute 50% of 100, then confirm: 50 + 50 = 100.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-20-percent-of-400': {
    hook: 'Ten percent of 400 is 40, double it: 40 x 2 = 80. The find-10%-then-double route is the standard 20% shortcut on any base.',
    faqs: [
      {
        q: 'What is a 20% tip on a $400 bill?',
        a: 'The tip is $80.00, for a $480.00 total. On large group dining bills, compute 10% ($40) first, then double — it prevents the most common big-bill error.',
      },
      {
        q: 'What is 20% off $400?',
        a: 'The discount is $80.00, so you pay $320.00. For furniture and appliance sales, that $80 gap is worth the thirty seconds of math.',
      },
    ],
    links: [
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
    ],
  },
  'what-is-20-percent-of-500': {
    hook: 'Ten percent of 500 is 50, double it: 50 x 2 = 100. Round bases like 500 make the 20% pattern obvious — learn it here, reuse it everywhere.',
    faqs: [
      {
        q: 'What is a 20% deposit on $500?',
        a: 'The upfront payment is $100.00, leaving a $400.00 balance. A clean fifth down is the classic structure for mid-size bookings.',
      },
      {
        q: 'How do I verify that 20% of 500 is 100?',
        a: 'Divide back: 100 / 500 = 0.20 = 20%. Or scale down: 20% of 5 is 1, and 500 is a hundred 5s, so a hundred 1s = 100.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-20-percent-of-250': {
    hook: 'Ten percent of 250 is 25, double it: 25 x 2 = 50. Odd bases still surrender to the 10%-then-double method.',
    faqs: [
      {
        q: 'What is 20% off $250?',
        a: 'The discount is $50.00, so you pay $200.00. A round $200 final price is exactly why retailers love 20%-off-$250 tags.',
      },
      {
        q: 'What is a 20% tip on $250?',
        a: 'The tip is $50.00, for a $300.00 total. Ten percent is $25, doubled — no calculator needed at the table.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
    ],
  },
  'what-is-20-percent-of-300': {
    hook: 'Ten percent of 300 is 30, double it: 30 x 2 = 60. Same pattern as every 20% problem on this page — master one, master all eleven.',
    faqs: [
      {
        q: 'What is a 20% commission on a $300 sale?',
        a: 'The commission is $60.00, leaving $240.00. Sales roles quoting a flat fifth all reduce to this exact calculation.',
      },
      {
        q: 'What is 20% off $300?',
        a: 'The discount is $60.00, so you pay $240.00. Cross-check with the deposit framing: $60 now + $240 later = $300.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-10-percent-of-250': {
    hook: 'Move the decimal: 250 becomes 25.00. One digit shift, zero arithmetic — the 10% trick never gets harder than this.',
    faqs: [
      {
        q: 'How much is 10% tax on $250?',
        a: 'The tax is $25.00, for a $275.00 total. Where combined rates sit near 10%, the decimal-shift trick prices the checkout in your head.',
      },
      {
        q: 'What is a 10% deposit on $250?',
        a: 'The upfront payment is $25.00, leaving a $225.00 balance. Small good-faith deposits on rentals and bookings follow this shape.',
      },
    ],
    links: [
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
    ],
  },
  'what-is-25-percent-of-250': {
    hook: 'Quarter it: 250 / 4 = 62.50. Halve twice instead — 250 / 2 = 125, then 125 / 2 = 62.50 — if division by 4 feels awkward.',
    faqs: [
      {
        q: 'What is 25% off $250?',
        a: 'The discount is $62.50, so you pay $187.50. Keep the fifty cents on both numbers: rounding either side corrupts the total.',
      },
      {
        q: 'How do I verify that 25% of 250 is 62.50?',
        a: 'Rebuild the whole: 62.50 x 4 = 250.00. Or halve twice: 250 to 125 to 62.50. Two agreeing routes means the answer holds.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-70-percent-of-100': {
    hook: 'Seven 10% chunks: 10 x 7 = 70. Seventy percent is one step past two-thirds — nearly the whole, with a meaningful slice left over.',
    faqs: [
      {
        q: 'What is 70% off $100?',
        a: 'The discount is $70.00, so you pay $30.00. Seventy-percent clearance means the store keeps less than a third — inspect final-sale terms before buying.',
      },
      {
        q: 'What does 70% of a $100 goal look like?',
        a: '$70.00 raised with $30.00 to go. Progress bars, savings targets, and funding meters all read this same fraction.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'How much did it drop?', href: '/calculators/basic-percent/percentage-decrease', anchor: 'Calculate percentage decrease' },
    ],
  },
  'what-is-10-percent-of-300': {
    hook: 'Move the decimal: 300 becomes 30.00. Trailing zeros vanish in 10% problems, which is why they are the mental-math anchor for every other percent.',
    faqs: [
      {
        q: 'What is a 10% fee on $300?',
        a: 'The fee is $30.00, leaving $270.00 net. Processing and service fees near 10% scale brutally — always price them before agreeing.',
      },
      {
        q: 'How do I verify that 10% of 300 is 30?',
        a: 'Multiply back by 10: 30 x 10 = 300. Ten percent means one tenth, and ten tenths rebuild the whole by definition.',
      },
    ],
    links: [
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
    ],
  },
  'what-is-25-percent-of-300': {
    hook: 'Quarter of 300: 300 / 4 = 75. Halving twice gives the same — 300 to 150 to 75 — pick whichever route your brain prefers.',
    faqs: [
      {
        q: 'What is a 25% deposit on $300?',
        a: 'The upfront payment is $75.00, leaving a $225.00 balance. Quarter-down structures are standard for custom orders and event deposits.',
      },
      {
        q: 'What is 25% off $300?',
        a: 'The discount is $75.00, so you pay $225.00. Note the deposit/discount mirror: $75 + $225 = $300 either way.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
    ],
  },
  'what-is-20-percent-of-50': {
    hook: 'Ten percent of 50 is 5, double it: 5 x 2 = 10. Small bills are where the 20% shortcut earns its keep — restaurant tables, not spreadsheets.',
    faqs: [
      {
        q: 'What is a 20% tip on a $50 bill?',
        a: 'The tip is $10.00, for a $60.00 total. The textbook standard gratuity: 10% ($5) doubled, computed before the server returns.',
      },
      {
        q: 'What is 20% off $50?',
        a: 'The discount is $10.00, so you pay $40.00. Same ten dollars as the tip above, subtracted instead of added — percent math is direction-agnostic.',
      },
    ],
    links: [
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
    ],
  },
  // ---------------- Batch 3 (Sep 2026): remaining 100-base cluster ----------------
  'what-is-10-percent-of-100': {
    hook: 'Move the decimal one place left: 100 becomes 10.00. Ten percent is the anchor for every other percent — master this one and the rest are arithmetic.',
    faqs: [
      {
        q: 'What is 10% sales tax on $100?',
        a: 'The tax is $10.00, for a $110.00 total. Where combined rates sit near 10%, the decimal-shift trick prices the checkout before the register finishes.',
      },
      {
        q: 'How do I verify that 10% of 100 is 10?',
        a: 'Convert: 10 / 100 = 0.10. Multiply: 0.10 x 100 = 10. Or multiply back: 10 x 10 = 100, the whole — ten tenths rebuild it by definition.',
      },
    ],
    links: [
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-15-percent-of-100': {
    hook: 'Stack 10% plus half again: 10% of 100 is 10, half of that is 5, and 10 + 5 = 15. Fifteen percent is the 10%-plus-half pattern you will reuse everywhere.',
    faqs: [
      {
        q: 'What is a 15% tip on a $100 bill?',
        a: 'The tip is $15.00, for a $115.00 total. Compute 10% ($10), halve it ($5), add: 10 + 5 = 15 — no calculator at the table.',
      },
      {
        q: 'What is 15% off $100?',
        a: 'The discount is $15.00, so you pay $85.00. Verify the mirror: 15 + 85 = 100, the full original price.',
      },
    ],
    links: [
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
    ],
  },
  'what-is-20-percent-of-100': {
    hook: 'Ten percent of 100 is 10, double it: 10 x 2 = 20. The find-10%-then-double route is the standard 20% shortcut on any base.',
    faqs: [
      {
        q: 'What is a 20% tip on a $100 bill?',
        a: 'The tip is $20.00, for a $120.00 total. Ten percent is $10, doubled — the textbook standard gratuity computed in two seconds.',
      },
      {
        q: 'What is 20% off $100?',
        a: 'The discount is $20.00, so you pay $80.00. Same twenty dollars as the tip above, subtracted instead of added.',
      },
    ],
    links: [
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
    ],
  },
  'what-is-25-percent-of-100': {
    hook: 'Quarter it: 100 / 4 = 25. Twenty-five percent is exactly one quarter, so every 25% question is a division-by-4 question.',
    faqs: [
      {
        q: 'What is 25% off $100?',
        a: 'The discount is $25.00, so you pay $75.00. Quarter-off sales are the backbone of mid-season retail — 25 + 75 = 100 either way.',
      },
      {
        q: 'How do I verify that 25% of 100 is 25?',
        a: 'Rebuild the whole: 25 x 4 = 100.00. Since 25% is one quarter, four copies must reconstruct the original exactly.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-30-percent-of-100': {
    hook: 'Stack three 10% chunks: 10 + 10 + 10 = 30. Chunking from 10% works for every multiple of ten and never needs raw multiplication.',
    faqs: [
      {
        q: 'What is 30% off $100?',
        a: 'The discount is $30.00, so you pay $70.00. Thirty-percent tags mark genuine mid-season sales — verify against the pre-sale price.',
      },
      {
        q: 'How do I sanity-check 30% of 100 in my head?',
        a: 'Add three 10% chunks: 10 + 10 + 10 = 30. If chunking and the formula (0.30 x 100 = 30) agree, the answer is solid.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-60-percent-of-100': {
    hook: 'Six 10% chunks: 10 x 6 = 60. Sixty percent is past the halfway mark — think majority share, supermajority votes, and dominant proportions.',
    faqs: [
      {
        q: 'What does 60% of a $100 budget mean?',
        a: 'It means $60.00 allocated and $40.00 remaining. Six tenths committed, four tenths free — the classic majority-split shape.',
      },
      {
        q: 'How do I verify that 60% of 100 is 60?',
        a: 'Convert: 60 / 100 = 0.60. Multiply: 0.60 x 100 = 60. Or chunk it: six 10% pieces of 10 add to exactly 60.',
      },
    ],
    links: [
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
      { label: 'Reverse: what percent is it?', href: '/calculators/basic-percent/what-percent', anchor: 'Try the What Percent Calculator' },
    ],
  },
  'what-is-75-percent-of-100': {
    hook: 'Think in quarters: 25% of 100 is 25, and 75% is three quarters — 25 x 3 = 75. Any 75% problem becomes easy once you find 25% first.',
    faqs: [
      {
        q: 'What is 75% off $100?',
        a: 'The discount is $75.00, so you pay $25.00. A 75% clearance sounds dramatic because it is: you keep only one quarter of the original price.',
      },
      {
        q: 'How do I double-check that 75% of 100 is 75?',
        a: 'Two checks: add the remainder — 75 + 25 = 100, the full amount. Or divide back: 75 / 100 = 0.75 = 75%. Both confirm the answer.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-80-percent-of-100': {
    hook: 'Eight 10% chunks: 10 x 8 = 80. Eighty percent is four fifths — nearly the whole, with a meaningful slice left over.',
    faqs: [
      {
        q: 'What does 80% of a $100 goal look like?',
        a: '$80.00 raised with $20.00 to go. Progress bars, savings targets, and funding meters all read this same fraction.',
      },
      {
        q: 'How do I verify that 80% of 100 is 80?',
        a: 'Convert: 80 / 100 = 0.80. Multiply: 0.80 x 100 = 80. Or reason it: eight tenths of a hundred is eight tens.',
      },
    ],
    links: [
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
      { label: 'How much did it drop?', href: '/calculators/basic-percent/percentage-decrease', anchor: 'Calculate percentage decrease' },
    ],
  },
  'what-is-90-percent-of-100': {
    hook: 'Nine 10% chunks: 10 x 9 = 90. Ninety percent is all but a tenth — the last mile of almost-finished goals.',
    faqs: [
      {
        q: 'What does 90% of a $100 goal look like?',
        a: '$90.00 raised with $10.00 to go. The final tenth is often the hardest — plan for it instead of assuming it arrives alone.',
      },
      {
        q: 'How do I verify that 90% of 100 is 90?',
        a: 'Convert: 90 / 100 = 0.90. Multiply: 0.90 x 100 = 90. Cross-check: the remaining 10% is 10, and 90 + 10 = 100.',
      },
    ],
    links: [
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
      { label: 'Reverse: what percent is it?', href: '/calculators/basic-percent/what-percent', anchor: 'Try the What Percent Calculator' },
    ],
  },
  // ---------------- Batch 3b (Sep 2026): 200 / 50 / 150 clusters ----------------
  'what-is-10-percent-of-200': {
    hook: 'Move the decimal: 200 becomes 20.00. On round hundreds the 10% trick is pure digit-shifting — zero arithmetic required.',
    faqs: [
      {
        q: 'How much is 10% tax on $200?',
        a: 'The tax is $20.00, for a $220.00 total. Where combined rates sit near 10%, the decimal-shift trick prices the checkout in your head.',
      },
      {
        q: 'How do I verify that 10% of 200 is 20?',
        a: 'Multiply back by 10: 20 x 10 = 200. Ten percent means one tenth, and ten tenths rebuild the whole by definition.',
      },
    ],
    links: [
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-20-percent-of-200': {
    hook: 'Ten percent of 200 is 20, double it: 20 x 2 = 40. Moving the decimal first keeps the zeros under control on larger bases.',
    faqs: [
      {
        q: 'What is 20% off $200?',
        a: 'The discount is $40.00, so you pay $160.00. For mid-range electronics and appliances, that $40 gap is worth thirty seconds of math.',
      },
      {
        q: 'What is a 20% tip on a $200 bill?',
        a: 'The tip is $40.00, for a $240.00 total. On large group dining bills, compute 10% ($20) first, then double — it prevents the classic big-bill error.',
      },
    ],
    links: [
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
    ],
  },
  'what-is-50-percent-of-200': {
    hook: 'Half of anything is division by 2: 200 / 2 = 100. Fifty percent questions are free points — answer them before reaching for a calculator.',
    faqs: [
      {
        q: 'What is 50% off $200?',
        a: 'The discount is $100.00, so you pay $100.00. True half-price is rarer than labels suggest — verify against the pre-sale price before celebrating.',
      },
      {
        q: 'How do I split a $200 bill 50/50?',
        a: 'Each share is $100.00. Compute 50% of 200, then confirm: 100 + 100 = 200, the full bill.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-50-percent-of-50': {
    hook: 'Half of 50: 50 / 2 = 25. Small even splits like this are the fastest percent problems you will ever meet.',
    faqs: [
      {
        q: 'What is 50% off $50?',
        a: 'The discount is $25.00, so you pay $25.00. Half of fifty is the cleanest split in retail — 25 + 25 = 50.',
      },
      {
        q: 'How do I split $50 evenly?',
        a: 'Each half is $25.00. Compute 50% of 50, then confirm the halves rebuild the whole: 25 + 25 = 50.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Reverse: what percent is it?', href: '/calculators/basic-percent/what-percent', anchor: 'Try the What Percent Calculator' },
    ],
  },
  'what-is-75-percent-of-50': {
    hook: 'Quarter it first: 25% of 50 is 12.50, triple it: 12.50 x 3 = 37.50. Keep the fifty cents — dropping it is the classic small-bill error.',
    faqs: [
      {
        q: 'What is 75% of a $50 savings goal?',
        a: '$37.50 saved with $12.50 to go. Three quarters done means the finish line is one careful quarter away.',
      },
      {
        q: 'How do I verify that 75% of 50 is 37.50?',
        a: 'Rebuild the whole: 37.50 + 12.50 = 50.00. Or divide back: 37.50 / 50 = 0.75 = 75%. Both routes must agree.',
      },
    ],
    links: [
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
    ],
  },
  'what-is-10-percent-of-150': {
    hook: 'Move the decimal: 150 becomes 15.00. One digit shift, zero arithmetic — the 10% trick never gets harder than this.',
    faqs: [
      {
        q: 'How much is 10% tax on $150?',
        a: 'The tax is $15.00, for a $165.00 total. Where combined rates sit near 10%, the decimal-shift trick prices the checkout before the register finishes.',
      },
      {
        q: 'What is a 10% fee on $150?',
        a: 'The fee is $15.00, leaving $135.00 net. Processing and service fees near 10% scale fast — always price them before agreeing.',
      },
    ],
    links: [
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
    ],
  },
  'what-is-20-percent-of-150': {
    hook: 'Ten percent of 150 is 15, double it: 15 x 2 = 30. Odd bases still surrender to the 10%-then-double method.',
    faqs: [
      {
        q: 'What is 20% off $150?',
        a: 'The discount is $30.00, so you pay $120.00. A round $120 final price is exactly why retailers love 20%-off-$150 tags.',
      },
      {
        q: 'What is a 20% tip on $150?',
        a: 'The tip is $30.00, for a $180.00 total. Ten percent is $15, doubled — no calculator needed at the table.',
      },
    ],
    links: [
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
    ],
  },
  'what-is-25-percent-of-150': {
    hook: 'Quarter of 150: 150 / 4 = 37.50. Halve twice instead — 150 / 2 = 75, then 75 / 2 = 37.50 — if division by 4 feels awkward.',
    faqs: [
      {
        q: 'What is 25% off $150?',
        a: 'The discount is $37.50, so you pay $112.50. Keep the fifty cents on both numbers: rounding either side corrupts the total.',
      },
      {
        q: 'How do I verify that 25% of 150 is 37.50?',
        a: 'Rebuild the whole: 37.50 x 4 = 150.00. Or halve twice: 150 to 75 to 37.50. Two agreeing routes means the answer holds.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-50-percent-of-150': {
    hook: 'Half of 150: 150 / 2 = 75. Halving an odd hundred still lands clean — split the hundred (50) and the fifty (25), then add.',
    faqs: [
      {
        q: 'What is 50% off $150?',
        a: 'The discount is $75.00, so you pay $75.00. Half of 150 is the textbook even split: 75 + 75 = 150.',
      },
      {
        q: 'How do I split a $150 bill 50/50?',
        a: 'Each share is $75.00. Compute 50% of 150, then confirm: 75 + 75 = 150, the full bill.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Reverse: what percent is it?', href: '/calculators/basic-percent/what-percent', anchor: 'Try the What Percent Calculator' },
    ],
  },
  // ---------------- Batch 3c (Sep 2026): 1000 / 500 / 400 + remainder ----------------
  'what-is-10-percent-of-1000': {
    hook: 'Move the decimal: 1,000 becomes 100.00. On four-figure amounts the 10% shift avoids the decimal-place errors that plague manual math.',
    faqs: [
      {
        q: 'How much is 10% tax on $1,000?',
        a: 'The tax is $100.00, for a $1,100.00 total. On four-figure purchases the decimal shift prices the checkout before any calculator loads.',
      },
      {
        q: 'How do I verify that 10% of 1000 is 100?',
        a: 'Multiply back by 10: 100 x 10 = 1,000. Ten percent means one tenth, and ten tenths rebuild the whole by definition.',
      },
    ],
    links: [
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-15-percent-of-1000': {
    hook: 'Find 10% first (1,000 becomes 100), halve it for 5% (50), add: 100 + 50 = 150. The 10%-plus-half route scales cleanly to four figures.',
    faqs: [
      {
        q: 'What is a 15% commission on a $1,000 sale?',
        a: 'The commission is $150.00, leaving $850.00. Compute 10% ($100), add half ($50): 100 + 50 = 150 — the standard mid-tier gratuity scaled up.',
      },
      {
        q: 'How do I verify that 15% of 1000 is 150?',
        a: 'Convert: 15 / 100 = 0.15. Multiply: 0.15 x 1,000 = 150. Or chunk it: 10% (100) plus 5% (50) must total exactly 150.',
      },
    ],
    links: [
      { label: 'Add fees and tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax and fees' },
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
    ],
  },
  'what-is-20-percent-of-1000': {
    hook: 'Ten percent of 1,000 is 100, double it: 100 x 2 = 200. Round thousands make the 20% pattern obvious — learn it here, reuse it everywhere.',
    faqs: [
      {
        q: 'What is 20% off $1,000?',
        a: 'The discount is $200.00, so you pay $800.00. On furniture and appliance sales, that $200 gap is worth far more than thirty seconds of math.',
      },
      {
        q: 'What is a 20% deposit on $1,000?',
        a: 'The upfront payment is $200.00, leaving an $800.00 balance. A clean fifth down is the classic structure for large bookings.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-25-percent-of-1000': {
    hook: 'Quarter it: 1,000 / 4 = 250. Halve twice instead — 1,000 / 2 = 500, then 500 / 2 = 250 — if division by 4 feels awkward on big numbers.',
    faqs: [
      {
        q: 'What is a 25% deposit on $1,000?',
        a: 'The upfront payment is $250.00, leaving a $750.00 balance. Quarter-down structures are standard for custom orders and event deposits.',
      },
      {
        q: 'How do I verify that 25% of 1000 is 250?',
        a: 'Rebuild the whole: 250 x 4 = 1,000.00. Or halve twice: 1,000 to 500 to 250. Two agreeing routes means the answer holds.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
    ],
  },
  'what-is-50-percent-of-1000': {
    hook: 'Half of a thousand: 1,000 / 2 = 500. Fifty percent on four figures is the reference split — half-now-half-later on rent, cars, and salaries.',
    faqs: [
      {
        q: 'What is 50% off $1,000?',
        a: 'The discount is $500.00, so you pay $500.00. Half of a thousand is the cleanest large split in retail: 500 + 500 = 1,000.',
      },
      {
        q: 'How do I split $1,000 evenly?',
        a: 'Each half is $500.00. Compute 50% of 1,000, then confirm: 500 + 500 = 1,000, the full amount.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Reverse: what percent is it?', href: '/calculators/basic-percent/what-percent', anchor: 'Try the What Percent Calculator' },
    ],
  },
  'what-is-10-percent-of-500': {
    hook: 'Move the decimal: 500 becomes 50.00. Round hundreds like 500 make the 10% pattern unmistakable — learn it here, reuse it everywhere.',
    faqs: [
      {
        q: 'How much is 10% tax on $500?',
        a: 'The tax is $50.00, for a $550.00 total. Where combined rates sit near 10%, the decimal-shift trick prices the checkout in your head.',
      },
      {
        q: 'What is a 10% deposit on $500?',
        a: 'The upfront payment is $50.00, leaving a $450.00 balance. Small good-faith deposits on rentals and bookings follow this shape.',
      },
    ],
    links: [
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
    ],
  },
  'what-is-25-percent-of-500': {
    hook: 'Quarter of 500: 500 / 4 = 125. Halving twice gives the same — 500 to 250 to 125 — pick whichever route your brain prefers.',
    faqs: [
      {
        q: 'What is a 25% deposit on $500?',
        a: 'The upfront payment is $125.00, leaving a $375.00 balance. Quarter-down structures are standard for custom orders and event deposits.',
      },
      {
        q: 'What is 25% off $500?',
        a: 'The discount is $125.00, so you pay $375.00. Note the deposit/discount mirror: 125 + 375 = 500 either way.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
    ],
  },
  'what-is-15-percent-of-200': {
    hook: 'Ten percent of 200 is 20, half again is 10, add: 20 + 10 = 30. The 10%-plus-half pattern handles every 15% problem on any base.',
    faqs: [
      {
        q: 'What is a 15% tip on a $200 bill?',
        a: 'The tip is $30.00, for a $230.00 total. Compute 10% ($20), halve it ($10), add: 20 + 10 = 30 — done before the server returns.',
      },
      {
        q: 'What is 15% off $200?',
        a: 'The discount is $30.00, so you pay $170.00. Verify the mirror: 30 + 170 = 200, the full original price.',
      },
    ],
    links: [
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
    ],
  },
  'what-is-40-percent-of-200': {
    hook: 'Build from 10%: 10% of 200 is 20, and four of those chunks make 40 — 20 x 4 = 80. Scaling up from 10% beats raw multiplication for every multiple of ten.',
    faqs: [
      {
        q: 'What is 40% off $200?',
        a: 'The discount is $80.00, so you pay $120.00. Forty-percent sales usually mark end-of-season clearances rather than everyday prices.',
      },
      {
        q: 'What is a 40% deposit on $200?',
        a: 'The upfront payment is $80.00, with a $120.00 balance due later. Verify the split adds up: 80 + 120 = 200.',
      },
    ],
    links: [
      { label: 'Calculate the sale price', href: '/calculators/finance/discount', anchor: 'Use the Discount Calculator' },
      { label: 'Any percent of any number', href: '/calculators/basic-percent/percent-of', anchor: 'Use the Percent Of Calculator' },
    ],
  },
  'what-is-10-percent-of-400': {
    hook: 'Move the decimal: 400 becomes 40.00. Trailing zeros vanish in 10% problems, which is why they are the mental-math anchor for every other percent.',
    faqs: [
      {
        q: 'What is a 10% fee on $400?',
        a: 'The fee is $40.00, leaving $360.00 net. Processing and service fees near 10% scale brutally — always price them before agreeing.',
      },
      {
        q: 'How do I verify that 10% of 400 is 40?',
        a: 'Multiply back by 10: 40 x 10 = 400. Ten percent means one tenth, and ten tenths rebuild the whole by definition.',
      },
    ],
    links: [
      { label: 'Add tax to any price', href: '/calculators/finance/sales-tax', anchor: 'Calculate sales tax' },
      { label: 'Tip on any bill', href: '/calculators/daily/tip-calculator', anchor: 'Calculate restaurant tip' },
    ],
  },
};

export function getPseoEnrichment(slug: string): PseoEnrichment | null {
  return ENRICHMENT[slug] ?? null;
}
