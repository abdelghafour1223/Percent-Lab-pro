import { PercentageCalculator } from '@/components/percentage-calculator';
import { AdPlaceholder } from '@/components/adsense';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, Zap, BookOpen, TrendingUp, DollarSign, Target } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Free Percentage Calculator
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Calculate percentages instantly with detailed step-by-step explanations and real-life examples
        </p>
      </section>

      {/* Calculator */}
      <section className="mb-16">
        <PercentageCalculator />
      </section>

      {/* AdSense Placeholder */}
      <AdPlaceholder className="max-w-4xl mx-auto" />

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Use PercentLab?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Lightning Fast</h3>
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
                <h3 className="font-semibold text-lg">Learn How It Works</h3>
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
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Multiple Calculators</h3>
                <p className="text-sm text-muted-foreground">
                  Three powerful calculators in one: Percent Of, What Percent, and Increase/Decrease.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content Section */}
      <section className="mb-16 prose prose-gray dark:prose-invert max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Understanding Percentage Calculations</h2>

        <p className="text-lg text-muted-foreground">
          Percentages are one of the most commonly used mathematical concepts in everyday life. Whether you're calculating discounts while shopping, determining tax amounts, analyzing test scores, or tracking investment returns, understanding percentages is essential. PercentLab makes these calculations simple and educational.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Percent Of</h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate what percentage a number represents. Perfect for discounts, tips, and taxes. Formula: (P ÷ 100) × N
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">What Percent</h3>
                  <p className="text-sm text-muted-foreground">
                    Find what percentage one number is of another. Useful for grades, completion rates, and ratios. Formula: (Part ÷ Whole) × 100
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Percentage Change</h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate the percentage increase or decrease between two values. Essential for analyzing growth and trends. Formula: ((New - Old) ÷ |Old|) × 100
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Increase/Decrease By Percent</h3>
                  <p className="text-sm text-muted-foreground">
                    Add or subtract a percentage from a number. Great for calculating final prices after tax or discount. Formula: N ± (N × P ÷ 100)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-4">Common Percentage Use Cases</h3>

        <p>
          Percentages appear in countless real-world scenarios. Here are some of the most common situations where you'll need to calculate percentages:
        </p>

        <ul className="space-y-2 text-muted-foreground">
          <li><strong>Shopping & Retail:</strong> Calculate discounts, sales tax, and final prices</li>
          <li><strong>Finance & Banking:</strong> Interest rates, investment returns, loan calculations</li>
          <li><strong>Education:</strong> Test scores, grade calculations, academic performance</li>
          <li><strong>Business & Analytics:</strong> Growth rates, profit margins, market share</li>
          <li><strong>Health & Fitness:</strong> Body fat percentage, calorie calculations, progress tracking</li>
          <li><strong>Statistics:</strong> Data analysis, survey results, probability</li>
        </ul>

        <h3 className="text-2xl font-bold mt-12 mb-4">How to Use This Calculator</h3>

        <p>
          PercentLab provides three specialized calculators, each designed for specific percentage calculations:
        </p>

        <ol className="space-y-3 text-muted-foreground">
          <li>
            <strong>Percent Of Calculator:</strong> Enter a percentage and a number to find what that percentage represents. For example, "What is 20% of 200?" The answer is 40.
          </li>
          <li>
            <strong>What Percent Calculator:</strong> Enter two numbers to find what percentage the first number is of the second. For example, "50 is what percent of 200?" The answer is 25%.
          </li>
          <li>
            <strong>Increase/Decrease Calculator:</strong> Choose your operation (percentage change, increase by percent, or decrease by percent) and enter your values to see the result with full explanations.
          </li>
        </ol>

        <p className="mt-6">
          Each calculation includes the formula used, step-by-step solution, and practical real-life examples to help you understand and apply the concept.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do you calculate a percentage?</AccordionTrigger>
            <AccordionContent>
              To calculate a percentage, divide the part by the whole and multiply by 100. For example, if you scored 85 out of 100 on a test, your percentage is (85 ÷ 100) × 100 = 85%. Our calculator handles all these steps automatically and shows you the complete working.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What is 20% of 200?</AccordionTrigger>
            <AccordionContent>
              20% of 200 is 40. To calculate this, convert the percentage to a decimal (20 ÷ 100 = 0.20) and multiply by the number (0.20 × 200 = 40). Use our Percent Of calculator above for instant results with detailed explanations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How do I calculate percentage increase?</AccordionTrigger>
            <AccordionContent>
              To calculate percentage increase, subtract the original value from the new value, divide by the original value, and multiply by 100. Formula: ((New - Original) ÷ Original) × 100. For example, if a price increases from $100 to $120, the percentage increase is ((120 - 100) ÷ 100) × 100 = 20%.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How do I calculate percentage decrease?</AccordionTrigger>
            <AccordionContent>
              Percentage decrease uses the same formula as increase: ((Original - New) ÷ Original) × 100. The result will be negative, indicating a decrease. For example, if a price drops from $100 to $80, the change is ((80 - 100) ÷ 100) × 100 = -20% (a 20% decrease).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Can percentages be greater than 100%?</AccordionTrigger>
            <AccordionContent>
              Yes, percentages can exceed 100%. This commonly occurs when calculating percentage increases or when a part is larger than the reference whole. For example, if sales double from 100 to 200 units, that's a 100% increase. If they triple to 300 units, that's a 200% increase.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Is this calculator free to use?</AccordionTrigger>
            <AccordionContent>
              Yes, PercentLab is completely free to use with no registration required. You can perform unlimited calculations and access all features without any cost. We're supported by non-intrusive advertisements to keep the service free for everyone.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* AdSense Placeholder */}
      <AdPlaceholder className="max-w-4xl mx-auto" />
    </div>
  );
}
