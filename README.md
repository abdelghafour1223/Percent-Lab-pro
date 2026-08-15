# PercentLab - Category-First Percentage Calculator Suite

A comprehensive percentage calculator suite built with Next.js 15, TypeScript, and Tailwind CSS. Features category-organized calculators with detailed step-by-step explanations, data-driven architecture, and excellent performance.

🌐 **Live Site:** [percentlab.app](https://percentlab.app)

## Features

- 📚 **Category-First Architecture**: Calculators organized by use case (Basic, Finance, Education, Daily)
- 🧮 **Multiple Calculator Types**:
  - Basic Percentages: Percent of calculator
  - Finance: ROI calculator
  - Education: Grade percentage calculator
  - Daily Use: Discount calculator
- 🧠 **Step-by-Step Explanations**: Detailed calculation breakdowns with formulas
- 📊 **Visual Charts**: Chart.js visualizations for select calculators (ROI, Discount)
- 🎨 **Dark/Light Mode**: System-aware theme switching
- 📱 **Mobile-First**: Fully responsive design with WCAG AA contrast
- 🚀 **Excellent Performance**: Lighthouse scores 95+ (Performance, SEO, Accessibility, Best Practices)
- 🔍 **SEO Optimized**: Structured data (JSON-LD), meta tags, and auto-generated sitemap
- 📊 **Data-Driven**: Single source of truth in `data/calculators.ts` manifest
- 🌍 **Geo-Blocking**: Edge middleware blocks Arabic countries while allowing search engine bots
- 💰 **Monetization Ready**: Google AdSense placeholders
- 📊 **Analytics**: Google Analytics 4 with Do Not Track support
- ♿ **Accessible**: Proper ARIA labels, keyboard navigation, and focus states
- 🧪 **Tested**: Unit tests (Jest) and E2E tests (Playwright)
- 📄 **Legal**: GDPR/CCPA compliant privacy policy and terms of use

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Validation**: Zod
- **Charts**: Chart.js (planned)
- **Testing**: Jest + React Testing Library + Playwright
- **Deployment**: Vercel (with Edge Middleware)
- **Analytics**: Google Analytics 4
- **Ads**: Google AdSense

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/percentlab.git
cd percentlab
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Site Configuration
SITE_URL=http://localhost:3000

# Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google AdSense (optional)
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-0000000000000000

# Google Site Verification (optional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run unit tests with Jest
- `npm run test:e2e` - Run E2E tests with Playwright
- `npm run generate:pseo` - Generate programmatic SEO pages (legacy)

## Project Structure

```
percentlab/
├── app/                                    # Next.js App Router pages
│   ├── calculators/                        # Calculator routes
│   │   └── [category]/                     # Category landing pages
│   │       ├── page.tsx                    # Category page
│   │       └── [slug]/                     # Calculator detail pages
│   │           └── page.tsx                # Calculator page
│   ├── [slug]/                             # Dynamic PSEO pages (48 combinations)
│   │   └── page.tsx                        # Dynamic route handler
│   ├── about/                              # About page
│   ├── contact/                            # Contact form page
│   ├── faq/                                # FAQ page
│   ├── privacy-policy/                     # Privacy policy
│   ├── terms-of-use/                       # Terms of use
│   ├── sitemap.ts                          # Native App Router sitemap
│   ├── robots.ts                           # Native App Router robots.txt
│   ├── layout.tsx                          # Root layout with providers
│   ├── page.tsx                            # Homepage (categories overview)
│   └── globals.css                         # Global styles
├── components/                             # React components
│   ├── ui/                                 # shadcn/ui components (Button, Card, etc.)
│   ├── calculator-form.tsx                 # Interactive calculator component
│   ├── header.tsx                          # Site header with navigation
│   ├── footer.tsx                          # Site footer with category links
│   ├── theme-provider.tsx                  # Theme context provider
│   ├── theme-toggle.tsx                    # Dark/light mode toggle
│   ├── adsense.tsx                         # AdSense components
│   └── analytics.tsx                       # GA4 integration
├── data/                                   # Data manifest
│   ├── calculators.ts                      # Single source of truth for calculators
│   └── blog.ts                             # Blog categories manifest
├── lib/                                    # Utility functions
│   ├── __tests__/                          # Unit tests
│   ├── calculator.ts                       # Core calculation logic
│   ├── pseo.ts                             # Programmatic SEO utilities
│   └── utils.ts                            # Helper functions
├── e2e/                                    # E2E tests
│   └── calculator.spec.ts                  # Playwright tests
├── middleware.ts                           # Edge middleware (host normalization)
├── jest.config.js                          # Jest configuration
├── playwright.config.ts                    # Playwright configuration
└── tailwind.config.ts                      # Tailwind configuration
```

## Data-Driven Architecture

### Calculator Manifest

All calculator data is defined in `data/calculators.ts`:

```typescript
export interface Calculator {
  slug: string;
  title: string;
  description: string;
  formula: string;
  example: { [key: string]: number | string };
  seo: { title: string; description: string };
  faq: Array<{ q: string; a: string }>;
  lastUpdated: string;
  hasChart?: boolean;
  schemaType?: 'HowTo' | 'FAQPage';
}

export interface Category {
  id: string;
  title: string;
  description: string;
  calculators: Calculator[];
  comingSoon: string[];
  icon?: string;
}
```

### Current Categories & Calculators

1. **Basic Percentages** (`basic-percent`)
   - Percent Of Calculator
   - Coming Soon: what-percent, increase-decrease, percentage-change, reverse-percentage

2. **Financial Calculators** (`finance`)
   - ROI Calculator (with chart)
   - Coming Soon: profit-margin, compound-interest, loan-interest, mortgage-calculator

3. **Education Calculators** (`education`)
   - Grade Percentage Calculator
   - Coming Soon: gpa-calculator, weighted-grade, final-grade, grade-needed

4. **Daily Use Calculators** (`daily`)
   - Discount Calculator (with chart)
   - Coming Soon: tip-calculator, tax-calculator, markup-calculator, commission-calculator

### Adding a New Calculator

1. Add calculator data to `data/calculators.ts`:

```typescript
{
  slug: 'new-calculator',
  title: 'New Calculator',
  description: 'Calculate something new',
  formula: 'result = input × factor',
  example: { input: 100, factor: 2, result: 200 },
  seo: {
    title: 'New Calculator | PercentLab',
    description: 'Free online new calculator...'
  },
  faq: [
    { q: 'Question?', a: 'Answer.' }
  ],
  lastUpdated: '2025-11-12',
  hasChart: false,
  schemaType: 'HowTo'
}
```

2. Add calculation logic to `components/calculator-form.tsx` in the `calculateResult()` function

3. Run build - pages and sitemap are generated automatically:

```bash
npm run build
```

## Sitemap Generation

The sitemap is dynamically provided by Next.js App Router at `app/sitemap.ts` (`/sitemap.xml`) from the central data manifests and PSEO generator:

The sitemap includes:
- Static informational pages (`/`, `/about`, `/contact`, `/faq`, `/privacy-policy`, `/terms-of-use`, `/blog`)
- All calculator category hubs (`/calculators/[category]`)
- All individual calculator pages (`/calculators/[category]/[slug]`) with `lastmod` timestamps
- Blog category pages (`/blog/[category]`)
- Sub-FAQ guide pages
- Standalone landing/calculation pages
- Dynamic programmatic calculation pages (`/what-is-X-percent-of-Y`)

Priorities and change frequencies are configured directly in `app/sitemap.ts`.

## Testing

### Unit Tests

Run unit tests for calculation utilities:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

Generate coverage report:

```bash
npm test -- --coverage
```

### E2E Tests

Run end-to-end tests with Playwright:

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run E2E tests
npm run test:e2e

# Run tests in UI mode
npx playwright test --ui

# Run tests in headed mode
npx playwright test --headed

# Run specific test file
npx playwright test e2e/calculator.spec.ts
```

## Geo-Blocking

The site uses Edge Middleware to block traffic from Arabic countries while allowing search engine bots.

### Testing Geo-Blocking

To test geo-blocking locally, you can simulate different countries using curl:

```bash
# Test from a blocked country (e.g., Saudi Arabia)
curl -H "x-vercel-ip-country: SA" http://localhost:3000
# Should return 451 status

# Test from an allowed country (e.g., United States)
curl -H "x-vercel-ip-country: US" http://localhost:3000
# Should return 200 status

# Test as Googlebot (should always be allowed)
curl -H "user-agent: Googlebot" -H "x-vercel-ip-country: SA" http://localhost:3000
# Should return 200 status
```

### Blocked Countries

MA, DZ, TN, LY, EG, SD, SO, MR, EH, SA, AE, QA, KW, BH, OM, YE, IQ, SY, JO, LB, PS, DJ, KM

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The Edge Middleware will automatically work on Vercel with access to geo-location headers.

### Environment Variables for Production

Set these in your Vercel project settings:

```env
SITE_URL=https://percentlab.app
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-0000000000000000
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

## Performance Optimization

### Lighthouse Scores

Target scores (all 95+):
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Build Output

```
Route Performance:
- Homepage: ~1 kB First Load JS
- Category pages: ~1 kB First Load JS
- Calculator pages: ~5 kB First Load JS
- Total pages: 67 (static)
- Middleware: 35 kB (edge optimized)
```

### Optimization Strategies

1. **System Fonts**: Using system font stack (no web fonts)
2. **Static Generation**: All pages pre-rendered at build time
3. **Image Optimization**: Using `next/image` component
4. **Minimal Dependencies**: Careful selection of lightweight packages
5. **Edge Middleware**: Fast geo-blocking at the edge
6. **Code Splitting**: Automatic code splitting via Next.js
7. **CSS-in-JS**: Tailwind CSS for optimal bundle size
8. **Data-Driven**: Single manifest reduces code duplication

## SEO Features

### Structured Data (JSON-LD)

- **SoftwareApplication**: Homepage (main application)
- **CollectionPage**: Category pages with ItemList
- **HowTo**: Calculator pages with step-by-step instructions
- **FAQPage**: FAQ sections with Q&A

### Routes

1. **Homepage** (`/`): Categories overview, featured calculators, blog CTA
2. **Category Pages** (`/calculators/[category]`): List of calculators in category
3. **Calculator Pages** (`/calculators/[category]/[slug]`): Interactive calculator with form, results, FAQ
4. **Legacy pSEO Pages** (`/[slug]`): 50 pre-rendered percentage calculations
5. **Static Pages**: About, Contact, FAQ, Privacy Policy, Terms of Use

### Internal Linking

- Homepage links to all categories
- Category pages link to all calculators in category
- Calculator pages show related calculators
- Footer contains links to all categories
- Breadcrumbs on all pages

## Privacy & Legal

- **GDPR Compliant**: Privacy policy covers EU requirements
- **CCPA Compliant**: Covers California residents
- **Do Not Track**: Respects DNT browser signals
- **Cookie-less by Default**: Minimal cookie usage
- **No Personal Data**: Calculator runs client-side
- **Transparent**: Clear disclosure of analytics and ads

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For questions or support:
- **Email**: contact@percentlab.app
- **GitHub Issues**: [Report a bug](https://github.com/yourusername/percentlab/issues)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Validation with [Zod](https://zod.dev/)

---

Made with ❤️ by PercentLab
