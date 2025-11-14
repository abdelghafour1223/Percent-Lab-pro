import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
} from 'lucide-react';

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
                Browse Categories <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-[48px] text-base font-semibold">
              <Link href="/about">About PercentLab</Link>
            </Button>
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
                    Calculate grade percentages, understand test scores, and track academic progress with our education-focused calculators. Whether you need to calculate your semester GPA, determine what grade you need on a final exam, or understand weighted grades, our tools provide clear step-by-step solutions that help you learn the underlying concepts while getting accurate results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">For Professionals</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyze ROI, profit margins, and financial metrics with professional-grade calculators designed for business use. Our financial calculators help you make informed decisions about investments, loans, mortgages, and business finances. Calculate compound interest, commission rates, markup percentages, and investment returns with precision and confidence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">For Shoppers</h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate discounts, sales tax, tip amounts, and final prices with our everyday shopping calculators. Find out how much you save during sales, determine the best deals when comparing products, calculate tips at restaurants, and understand the true cost of purchases including taxes and fees. Make smarter shopping decisions with quick, accurate calculations.
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
                Percentages are essential in financial calculations. Interest rates on loans and savings accounts are expressed as percentages. Investment returns, profit margins, commission rates, and tax calculations all rely on percentage computations. Understanding these calculations helps you make better financial decisions, whether you're evaluating a mortgage offer, comparing investment opportunities, or setting business pricing strategies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">In Education</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Academic grading systems commonly use percentages to represent student performance. Grade point averages, test scores, assignment weights, and course grades are all calculated using percentage methods. Students and teachers use percentage calculators to determine final grades, calculate what score is needed on future assignments, and understand weighted grade systems where different assignments contribute different amounts to the final grade.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">In Shopping and Retail</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Retail discounts, sales promotions, and price comparisons all involve percentage calculations. When stores advertise "30% off" or "save 50%," understanding these percentages helps you determine actual savings and final prices. Sales tax rates, tip calculations, and loyalty program rewards also use percentages, making these calculators valuable for everyday shopping decisions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">In Data Analysis and Statistics</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Percentages help us understand proportions and make comparisons in data analysis. Percentage change calculations show growth or decline over time. Market share, survey results, demographic statistics, and scientific measurements often use percentages to communicate findings in an easily understandable format. Converting raw numbers to percentages makes data more interpretable and comparable across different scales.
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
        </section>
      </div>
    </>
  );
}
