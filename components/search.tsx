'use client';

import * as React from 'react';
import Link from 'next/link';
import { Search, Calculator, X } from 'lucide-react';
import { searchCalculators, getPopularCalculators, SearchResult } from '@/lib/search';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export function SearchBar() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const searchRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listboxId = React.useId();

  // Debounced search
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length > 0) {
        const searchResults = searchCalculators(query, 8);
        setResults(searchResults);
        setIsOpen(true);
      } else {
        // Show popular calculators when empty
        const popular = getPopularCalculators(5);
        setResults(popular);
        setIsOpen(isFocused);
      }
    }, 200); // 200ms debounce

    return () => clearTimeout(timer);
  }, [query, isFocused]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsOpen(true);
    // Show popular calculators on focus if no query
    if (query.trim().length === 0) {
      const popular = getPopularCalculators(5);
      setResults(popular);
    }
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleSelect = () => {
    setIsOpen(false);
    setIsFocused(false);
    setQuery('');
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-sm">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          role="combobox"
          placeholder="Search calculators..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          className="pl-9 pr-9 h-10"
          aria-label="Search calculators"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls={isOpen ? listboxId : undefined}
          aria-haspopup="listbox"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
            tabIndex={-1}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div
          id={listboxId}
          role="listbox"
          aria-label="Calculator search results"
          className="absolute top-full mt-2 w-full bg-background border rounded-lg shadow-lg z-50 max-h-[400px] overflow-y-auto"
        >
          {/* Header */}
          <div className="px-3 py-2 border-b bg-muted/50" role="presentation">
            <p className="text-xs font-medium text-muted-foreground">
              {query.trim().length > 0 ? (
                <>
                  Found {results.length} result{results.length !== 1 ? 's' : ''}
                </>
              ) : (
                'Popular Calculators'
              )}
            </p>
          </div>

          {/* Results List */}
          <div className="py-2" role="presentation">
            {results.map((result, index) => (
              <Link
                key={`${result.categoryId}-${result.calculator.slug}-${index}`}
                href={result.url}
                onClick={handleSelect}
                role="option"
                aria-selected="false"
                className="block px-3 py-2.5 hover:bg-muted/50 transition-colors focus:bg-muted/50 focus:outline-none"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <Calculator className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-sm truncate">
                        {result.calculator.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="flex-shrink-0 text-xs"
                      >
                        {result.categoryTitle}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {result.calculator.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query.trim().length > 0 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-background border rounded-lg shadow-lg z-50 p-4">
          <div className="text-center text-sm text-muted-foreground">
            <p className="font-medium mb-1">No calculators found</p>
            <p className="text-xs">Try different keywords or browse all categories</p>
          </div>
        </div>
      )}
    </div>
  );
}
