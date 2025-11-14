import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <h3 className="text-lg font-semibold mb-3">PercentLab</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Your go-to tool for accurate percentage calculations. Fast, free, and easy to use with detailed step-by-step explanations.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-sm font-semibold mb-3">Calculators</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/calculators/basic-percent" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Basic percentage calculators">
                  Basic Percentage Calculators
                </Link>
              </li>
              <li>
                <Link href="/calculators/finance" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Financial percentage calculators">
                  Financial Calculators
                </Link>
              </li>
              <li>
                <Link href="/calculators/education" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Education and grade calculators">
                  Education Calculators
                </Link>
              </li>
              <li>
                <Link href="/calculators/daily" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Daily use percentage calculators">
                  Daily Use Calculators
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors" aria-label="About PercentLab">
                  About PercentLab
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Frequently asked questions">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Contact PercentLab support">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} PercentLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
