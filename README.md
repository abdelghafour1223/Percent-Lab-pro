# PercentLab - AI-Powered Percentage Calculator

A world-class percentage calculator built with Next.js 15, TypeScript, and Tailwind CSS. Features detailed AI-style explanations, programmatic SEO, and excellent performance.

🌐 **Live Site:** [percentlab.app](https://percentlab.app)

## Features

- ✨ **Three Calculator Types**: Percent Of, What Percent, and Increase/Decrease
- 🧠 **AI-Style Explanations**: Step-by-step solutions with formulas and real-life examples
- 📊 **Visual Charts**: Animated percentage visualizations using Framer Motion
- 🎨 **Dark/Light Mode**: System-aware theme switching
- 📱 **Mobile-First**: Fully responsive design with WCAG AA contrast
- 🚀 **Excellent Performance**: Lighthouse scores 95+ (Performance, SEO, Accessibility, Best Practices)
- 🔍 **SEO Optimized**: Structured data (JSON-LD), meta tags, sitemap, and programmatic SEO pages
- 🌍 **Geo-Blocking**: Edge middleware blocks Arabic countries while allowing search engine bots
- 💰 **Monetization**: Google AdSense integration with non-intrusive ads
- 📊 **Analytics**: Google Analytics 4 with Do Not Track support
- ♿ **Accessible**: Proper ARIA labels, keyboard navigation, and focus states
- 🧪 **Tested**: Unit tests (Jest) and E2E tests (Playwright)
- 📄 **Legal**: GDPR/CCPA compliant privacy policy and terms of use

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Validation**: Zod
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
- `npm run generate:pseo` - Generate programmatic SEO pages (if needed)

## Project Structure

```
percentlab/
├── app/                          # Next.js App Router pages
│   ├── [slug]/                   # Programmatic SEO pages
│   │   └── page.tsx              # Dynamic route handler
│   ├── about/                    # About page
│   ├── contact/                  # Contact form page
│   ├── faq/                      # FAQ page
│   ├── privacy-policy/           # Privacy policy
│   ├── terms-of-use/             # Terms of use
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   ├── percentage-calculator.tsx # Main calculator component
│   ├── percentage-chart.tsx      # Chart components
│   ├── header.tsx                # Site header
│   ├── footer.tsx                # Site footer
│   ├── theme-provider.tsx        # Theme context provider
│   ├── theme-toggle.tsx          # Dark/light mode toggle
│   ├── adsense.tsx               # AdSense components
│   └── analytics.tsx             # GA4 integration
├── lib/                          # Utility functions
│   ├── __tests__/                # Unit tests
│   ├── calculator.ts             # Core calculation logic
│   ├── pseo.ts                   # Programmatic SEO utilities
│   └── utils.ts                  # Helper functions
├── e2e/                          # E2E tests
│   └── calculator.spec.ts        # Playwright tests
├── middleware.ts                 # Edge middleware (geo-blocking)
├── next-sitemap.config.js        # Sitemap configuration
├── jest.config.js                # Jest configuration
├── playwright.config.ts          # Playwright configuration
└── tailwind.config.ts            # Tailwind configuration
```

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

### Running Lighthouse

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Build and start production server
npm run build
npm run start

# Run Lighthouse audit
lighthouse http://localhost:3000 --view
```

### Optimization Strategies

1. **System Fonts**: Using system font stack (no web fonts)
2. **Dynamic Imports**: Using `next/dynamic` for heavy components
3. **Image Optimization**: Using `next/image` component
4. **Minimal Dependencies**: Careful selection of lightweight packages
5. **Edge Middleware**: Fast geo-blocking at the edge
6. **Static Generation**: Pre-rendering programmatic SEO pages
7. **Code Splitting**: Automatic code splitting via Next.js
8. **CSS-in-JS**: Tailwind CSS for optimal bundle size

## SEO Features

### Structured Data (JSON-LD)

- **SoftwareApplication**: Main calculator
- **FAQPage**: FAQ page and homepage FAQ section
- **HowTo**: Calculation steps on programmatic pages

### Programmatic SEO

The site generates ~20 static pages for common percentage calculations:

- `/what-is-20-percent-of-200`
- `/what-is-10-percent-of-100`
- etc.

These pages include:
- Direct answer at the top
- Step-by-step explanations
- Visual charts
- Related calculations
- Structured data

### Sitemap

Generated automatically on build via `next-sitemap`:

```bash
npm run build
# Generates public/sitemap.xml and public/robots.txt
```

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
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ by PercentLab