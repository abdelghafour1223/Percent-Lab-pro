'use client';

import Link from 'next/link';
import { Calculator } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Calculator className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">PercentLab</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            Calculator
          </Link>
          <Link
            href="/faq"
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            FAQ
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
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
        <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur md:hidden">
          <nav className="flex flex-col space-y-4 p-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-lg font-medium transition-colors hover:text-primary"
            >
              Calculator
            </Link>
            <Link
              href="/faq"
              onClick={() => setOpen(false)}
              className="text-lg font-medium transition-colors hover:text-primary"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-lg font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-lg font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

import * as React from 'react';
