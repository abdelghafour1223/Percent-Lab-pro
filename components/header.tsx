'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calculator } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { SearchBar } from '@/components/search';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', ariaLabel: 'Go to PercentLab homepage' },
    { href: '/#categories', label: 'Calculators', ariaLabel: 'Browse percentage calculators' },
    { href: '/blog', label: 'Blog', ariaLabel: 'Read PercentLab blog articles' },
    { href: '/faq', label: 'FAQ', ariaLabel: 'Frequently asked questions about PercentLab' },
    { href: '/about', label: 'About PercentLab', ariaLabel: 'Learn about PercentLab' },
    { href: '/contact', label: 'Contact', ariaLabel: 'Contact PercentLab support' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center gap-4 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0">
          <Calculator className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">PercentLab</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:block flex-1 max-w-md">
          <SearchBar />
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.ariaLabel}
                className={cn(
                  "transition-colors hover:text-primary relative whitespace-nowrap",
                  isActive ? "text-primary font-semibold" : "text-muted-foreground"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 ml-auto">
          <ThemeToggle />
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>

      {/* Search Bar - Mobile (below header) */}
      <div className="md:hidden border-t bg-background px-4 py-3">
        <SearchBar />
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', ariaLabel: 'Go to PercentLab homepage' },
    { href: '/#categories', label: 'Calculators', ariaLabel: 'Browse percentage calculators' },
    { href: '/blog', label: 'Blog', ariaLabel: 'Read PercentLab blog articles' },
    { href: '/faq', label: 'FAQ', ariaLabel: 'Frequently asked questions about PercentLab' },
    { href: '/about', label: 'About PercentLab', ariaLabel: 'Learn about PercentLab' },
    { href: '/contact', label: 'Contact', ariaLabel: 'Contact PercentLab support' },
  ];

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </Button>

      {open && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 top-[7.5rem] z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile menu */}
          <div className="fixed inset-x-0 top-[7.5rem] z-50 bg-background border-b shadow-lg lg:hidden">
            <nav className="flex flex-col space-y-1 p-4 max-h-[calc(100vh-7.5rem)] overflow-y-auto">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-label={item.ariaLabel}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary px-4 py-3 rounded-lg hover:bg-muted/50",
                      isActive ? "text-primary font-bold bg-primary/10" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
