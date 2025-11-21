import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CATEGORIES, getAllCalculators } from '@/data/calculators';
import {
  Calculator,
  DollarSign,
  GraduationCap,
  ShoppingCart,
  ArrowRight,
  BookOpen,
  Zap,
  Target,
  TrendingUp,
  Home,
  Percent,
  Scale,
} from 'lucide-react';

// Priority calculators for internal linking - 8 high-value tools
const priorityCalculators = [
  {
    title: 'Discount Calculator',
    description: 'Calculate savings on any purchase',
    href: '/calculators/finance/discount',
    icon: ShoppingCart,
    badge: 'Most Popular',
    anchor: 'Calculate Your Discount Now',
  },
  {
    title: 'Mortgage Calculator',
    description: 'Estimate your monthly payments',
    href: '/calculators/finance/mortgage-calculator',
    icon: Home,
    badge: 'High Demand',
    anchor: 'Find Your Mortgage Payment',
  },
  {
    title: 'Final Grade Calculator',
    description: 'Calculate your course grade',
    href: '/calculators/education/final-grade',
    icon: GraduationCap,
    badge: 'Popular',
    anchor: 'Calculate Your Final Grade',
  },
  {
    title: 'Sales Tax Calculator',
    description: 'Find your total cost with tax',
    href: '/calculators/finance/sales-tax',
    icon: DollarSign,
    badge: null,
    anchor: 'Find Your Total Cost',
  },
  {
    title: 'Compound Interest Calculator',
    description: 'Calculate investment growth',
    href: '/calculators/finance/compound-interest',
    icon: TrendingUp,
    badge: null,
    anchor: 'Calculate Investment Growth',
  },
  {
    title: 'Weighted Grade Calculator',
    description: 'Calculate weighted averages',
    href: '/calculators/education/weighted-grade',
    icon: Calculator,
    badge: null,
    anchor: 'Calculate Weighted Grades',
  },
  {
    title: 'Grade Needed Calculator',
    description: 'Find what grade you need to pass',
    href: '/calculators/education/grade-needed',
    icon: Target,
    badge: null,
    anchor: 'What Grade Do I Need?',
  },
  {
    title: 'Ratio Calculator',
    description: 'Compare numbers easily',
    href: '/calculators/daily/ratio-calculator',
    icon: Scale,
    badge: null,
    anchor: 'Compare Numbers Easily',
  },
];

const iconMap = {
  'calculator': Calculator,
  'dollar-sign': DollarSign,
  'graduation-cap': GraduationCap,
  'shopping-cart': ShoppingCart,
};

export default function HomePage() {
  const allCalculators = getAllCalculators();
  const featuredCalculators = allCalculators.slice(0, 4); // One from each category

  // JSON-LD for SoftwareApplication
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PercentLab - Percentage Calculator Suite",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "description": "Free online percentage calculators organized by category. Calculate percentages, ROI, grades, discounts and more with step-by-step explanations."
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />

      <div className="container px-4 md:px-6 py-6 md:py-8 lg:py-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 px-2">
            Percentage Calculators for Every Need
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4 leading-relaxed">
            Choose from our collection of specialized percentage calculators. Get instant results with detailed step-by-step explanations and real-world examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0">
            <Button asChild size="lg" className="min-h-[48px] text-base font-semibold">
              <Link href="#categories">
                Start Calculating Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-[48px] text-base font-semibold">
              <Link href="/about">About PercentLab</Link>
            </Button>
          </div>

          {/* Quick Links to Popular Calculators */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 px-4">
            <span className="text-sm text-muted-foreground mr-2">Popular:</span>
            <Link href="/calculators/finance/discount" className="text-sm text-primary hover:underline font-medium">
              Discount Calculator
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/calculators/finance/mortgage-calculator" className="text-sm text-primary hover:underline font-medium">
              Mortgage Calculator
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/calculators/education/final-grade" className="text-sm text-primary hover:underline font-medium">
              Final Grade Calculator
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-semibold text-lg">Lightning Fast</h2>
                  <p className="text-sm text-muted-foreground">
                    Get instant results with our optimized calculation engine. No waiting, no delays.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-semibold text-lg">Learn How It Works</h2>
                  <p className="text-sm text-muted-foreground">
                    Every calculation includes detailed step-by-step explanations to help you understand.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-semibold text-lg">Specialized Tools</h2>
                  <p className="text-sm text-muted-foreground">
                    Purpose-built calculators for finance, education, shopping, and everyday calculations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories Overview */}
        <section id="categories" className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 px-4">Calculator Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {CATEGORIES.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Calculator;
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base sm:text-lg">{category.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        <strong>{category.calculators.length}</strong> calculator{category.calculators.length !== 1 ? 's' : ''} available
                      </div>
                      <Button asChild className="w-full min-h-[44px] text-base sm:text-sm font-semibold">
                        <Link href={`/calculators/${category.id}`}>
                          View Calculators <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      {category.comingSoon.length > 0 && (
                        <div className="text-xs text-muted-foreground">
                          + {category.comingSoon.length} more coming soon
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Featured Calculators */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 px-4">Featured Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {featuredCalculators.map((calculator) => {
              const category = CATEGORIES.find(cat =>
                cat.calculators.some(calc => calc.slug === calculator.slug)
              );
              return (
                <Card key={calculator.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">{calculator.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{calculator.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="text-xs sm:text-sm font-mono text-muted-foreground break-words">
                          {calculator.formula}
                        </div>
                      </div>
                      <Button asChild className="w-full min-h-[44px] text-base sm:text-sm font-semibold">
                        <Link href={`/calculators/${category?.id}/${calculator.slug}`}>
                          Use Calculator <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Quick Access Grid - 8 Priority Calculators */}
        <section className="mb-12 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 px-4">Quick Access Tools</h2>
            <p className="text-muted-foreground px-4">Jump directly to our most-used calculators</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {priorityCalculators.map((calc) => {
              const IconComponent = calc.icon;
              return (
                <Link
                  key={calc.href}
                  href={calc.href}
                  className="group relative p-4 md:p-5 rounded-xl border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-200"
                >
                  {calc.badge && (
                    <Badge className="absolute -top-2 -right-2 text-xs" variant="default">
                      {calc.badge}
                    </Badge>
                  )}
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm md:text-base leading-tight">{calc.title}</h3>
                    <p className="text-xs text-muted-foreground hidden sm:block">{calc.description}</p>
                    <span className="text-xs text-primary font-medium group-hover:underline flex items-center gap-1">
                      {calc.anchor} <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Hub Page Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/calculators/finance"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-colors"
            >
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Browse All Financial Tools</span>
              <ArrowRight className="h-3 w-3 text-primary" />
            </Link>
            <Link
              href="/calculators/education"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-colors"
            >
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Browse All Education Tools</span>
              <ArrowRight className="h-3 w-3 text-primary" />
            </Link>
          </div>
        </section>

        {/* Ad Slot */}
        <div className="ad-slot max-w-4xl mx-auto my-8 min-h-[100px] flex items-center justify-center bg-muted/30 rounded-lg border border-dashed border-muted-foreground/20">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>

        {/* Blog CTA */}
        <section className="mb-12 md:mb-16">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 pb-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 px-2 md:px-0">
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Learn More About Percentages</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Explore our comprehensive guides, tutorials, and articles to master percentage calculations for real-world applications.
                  </p>
                </div>
                <Button asChild size="lg" variant="default" className="min-h-[48px] text-base font-semibold w-full md:w-auto md:shrink-0">
                  <Link href="/blog">
                    Read Our Blog <BookOpen className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Understanding Percentages */}
        <section className="mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 px-4">Understanding Percentage Calculations</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none px-4 space-y-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              Percentages are fundamental mathematical concepts that represent parts of a whole as fractions of 100. The word "percent" comes from the Latin "per centum," meaning "by the hundred." Understanding percentages is essential for making informed decisions in finance, education, business, and everyday life.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Whether you're calculating discounts while shopping, determining your grade point average, analyzing investment returns, or figuring out tip amounts at restaurants, percentage calculations play a crucial role. Our suite of specialized calculators makes these computations quick, accurate, and easy to understand with step-by-step breakdowns of each calculation.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              PercentLab provides calculators for every percentage-related need. From basic percentage calculations to complex financial computations involving compound interest and investment returns, our tools are designed to help you understand not just the answer, but the process behind it. Each calculator includes detailed formulas, explanations, and real-world examples to enhance your understanding.
            </p>
          </div>
        </section>

        {/* Why Choose PercentLab */}
        <section className="mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 px-4">Why Choose PercentLab?</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none px-4">
            <p className="text-base sm:text-lg text-muted-foreground text-center mb-6 md:mb-8 leading-relaxed">
              PercentLab is your comprehensive suite of percentage calculators, designed to handle every calculation scenario you encounter in daily life, work, or study. Our platform stands out by providing not just answers, but complete understanding through detailed explanations and multiple calculation methods.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 not-prose">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">For Students</h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate grade percentages, understand test scores, and track academic progress with our education-focused calculators. Whether you need to calculate your semester GPA, <Link href="/calculators/education/grade-needed" className="text-primary hover:underline font-medium">find out what grade you need</Link> on a final exam, or understand <Link href="/calculators/education/weighted-grade" className="text-primary hover:underline font-medium">weighted grades</Link>, our tools provide clear step-by-step solutions. <Link href="/calculators/education/final-grade" className="text-primary hover:underline font-medium">Calculate your final grade</Link> with ease.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">For Professionals</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyze ROI, profit margins, and financial metrics with professional-grade calculators designed for business use. Our financial calculators help you make informed decisions about investments, loans, and business finances. <Link href="/calculators/finance/mortgage-calculator" className="text-primary hover:underline font-medium">Analyze mortgage payments</Link> for real estate decisions, <Link href="/calculators/finance/compound-interest" className="text-primary hover:underline font-medium">calculate compound interest</Link> for investments, and plan with precision and confidence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">For Shoppers</h3>
                  <p className="text-sm text-muted-foreground">
                    <Link href="/calculators/finance/discount" className="text-primary hover:underline font-medium">Calculate discounts</Link> and savings on any purchase, find your total cost with our <Link href="/calculators/finance/sales-tax" className="text-primary hover:underline font-medium">sales tax calculator</Link>, and determine final prices with our everyday shopping calculators. Find out how much you save during sales, determine the best deals when comparing products, and make smarter shopping decisions with quick, accurate calculations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">For Everyone</h3>
                  <p className="text-sm text-muted-foreground">
                    Master basic percentage calculations with clear explanations, formulas, and real-world examples. Whether you're calculating what percentage one number is of another, converting between fractions and percentages, or working with percentage increases and decreases, our intuitive tools make math accessible to everyone regardless of skill level.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Use PercentLab */}
        <section className="mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 px-4">How to Use PercentLab Calculators</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none px-4 space-y-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              Using our calculators is simple and straightforward. First, browse our categories to find the calculator that matches your needs. Each calculator is organized by use case, whether you need basic percentage calculations, financial computations, grade calculations, or everyday shopping math.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Once you've selected a calculator, simply enter your values into the provided fields. Our calculators include helpful placeholder text and labels to guide you. After entering your numbers, click the calculate button to instantly receive your result along with the formula used and a step-by-step breakdown of the calculation process.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Each result page includes detailed explanations to help you understand how the answer was derived. You'll see the formula used, the substitution of your values, and the mathematical steps taken to reach the final answer. This educational approach helps you learn percentage concepts while solving practical problems.
            </p>
          </div>
        </section>

        {/* Common Percentage Applications */}
        <section className="mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 px-4">Common Percentage Applications</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none px-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">In Finance and Business</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Percentages are essential in financial calculations. Interest rates on loans and savings accounts are expressed as percentages. Use our <Link href="/calculators/finance/compound-interest" className="text-primary hover:underline font-medium">compound interest calculator</Link> to see how investments grow over time, or our <Link href="/calculators/finance/mortgage-calculator" className="text-primary hover:underline font-medium">mortgage calculator</Link> to evaluate loan offers. Understanding these calculations helps you make better financial decisions and compare investment opportunities effectively.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">In Education</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Academic grading systems commonly use percentages to represent student performance. Use our <Link href="/calculators/education/final-grade" className="text-primary hover:underline font-medium">final grade calculator</Link> to determine course grades, our <Link href="/calculators/education/grade-needed" className="text-primary hover:underline font-medium">grade needed calculator</Link> to find what score you need on future assignments, or our <Link href="/calculators/education/weighted-grade" className="text-primary hover:underline font-medium">weighted grade calculator</Link> to understand how different assignments contribute to your final grade.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">In Shopping and Retail</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Retail discounts, sales promotions, and price comparisons all involve percentage calculations. When stores advertise "30% off" or "save 50%," use our <Link href="/calculators/finance/discount" className="text-primary hover:underline font-medium">discount calculator</Link> to determine actual savings and final prices. Our <Link href="/calculators/finance/sales-tax" className="text-primary hover:underline font-medium">sales tax calculator</Link> helps you understand the true cost of purchases including taxes and fees.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">In Data Analysis and Statistics</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Percentages help us understand proportions and make comparisons in data analysis. Our <Link href="/calculators/daily/ratio-calculator" className="text-primary hover:underline font-medium">ratio calculator</Link> helps you compare numbers and understand proportions easily. Percentage change calculations show growth or decline over time. Market share, survey results, and demographic statistics often use percentages to communicate findings in an easily understandable format.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 px-4">Frequently Asked Questions</h2>
          <div className="space-y-4 px-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is a percentage?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A percentage is a way of expressing a number as a fraction of 100. The symbol "%" means "per hundred." For example, 50% means 50 out of 100, or one half. Percentages make it easy to compare proportions and understand relative sizes regardless of the absolute numbers involved.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">How do I calculate a percentage of a number?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To calculate a percentage of a number, multiply the number by the percentage and divide by 100. For example, to find 20% of 80: (80 × 20) ÷ 100 = 16. Alternatively, you can convert the percentage to a decimal by dividing by 100 first, then multiply: 80 × 0.20 = 16. Our calculators handle this automatically with step-by-step explanations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What's the difference between percentage increase and percentage decrease?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Percentage increase shows how much a value has grown relative to its original amount, calculated as ((new value - original value) ÷ original value) × 100. Percentage decrease shows how much a value has declined, using the same formula but resulting in a negative number or expressing it as a positive decrease. For example, going from 50 to 60 is a 20% increase, while going from 60 to 50 is a 16.67% decrease.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Are these calculators free to use?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes, all PercentLab calculators are completely free to use with no registration required. We believe everyone should have access to accurate percentage calculation tools. Our platform is ad-supported to keep the service free while continuously improving and adding new calculators based on user needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">How accurate are the calculations?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our calculators use precise mathematical algorithms to ensure accuracy. Results are calculated using standard mathematical formulas and are typically displayed with appropriate decimal precision. For financial calculations, we follow industry-standard practices for rounding and precision to ensure results you can rely on for real-world applications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Can I use these calculators on mobile devices?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Absolutely! PercentLab is fully responsive and optimized for mobile phones, tablets, and desktop computers. Our interface adapts to your screen size, ensuring a smooth calculation experience whether you're at home, at work, or on the go. All calculators work seamlessly across different devices and browsers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What if I need help understanding a calculation?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Each calculator result includes a detailed step-by-step breakdown showing exactly how the answer was calculated. You'll see the formula used, the substitution of your specific values, and each mathematical operation performed. This educational approach helps you understand the process, not just the answer. Our blog also contains comprehensive guides and tutorials on percentage concepts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Do you offer calculators for business use?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes, our Financial Calculators category includes professional tools for business applications. Calculate profit margins, markup percentages, commission rates, ROI, compound interest, loan payments, and investment returns. These calculators are designed for accuracy and include the detailed reporting that professionals need for business decisions and financial planning.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 px-4">
            <Button asChild variant="outline" size="lg" className="min-h-[48px] text-base font-semibold">
              <Link href="/faq">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
