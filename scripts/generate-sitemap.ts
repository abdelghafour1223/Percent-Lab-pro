#!/usr/bin/env ts-node

/**
 * Generate sitemap.xml from data/calculators.ts manifest
 * This script reads the calculator data and creates a sitemap with proper lastmod dates
 *
 * Usage: npm run generate-sitemap
 * Or: npx ts-node scripts/generate-sitemap.ts
 */

import fs from 'fs';
import path from 'path';
import { CATEGORIES } from '../data/calculators';

const SITE_URL = process.env.SITE_URL || 'https://percentlab.app';

interface StaticPage {
  url: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

// Define static pages
const staticPages: StaticPage[] = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms-of-use', changefreq: 'yearly', priority: 0.5 },
];

// Helper function to format date as YYYY-MM-DD
function formatDate(date: string | Date): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Generate sitemap XML
function generateSitemap(): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add static pages
  staticPages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${page.url}</loc>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // Add category pages
  CATEGORIES.forEach(category => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}/calculators/${category.id}</loc>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.9</priority>\n';
    xml += '  </url>\n';

    // Add calculator pages with lastmod from manifest
    category.calculators.forEach(calculator => {
      xml += '  <url>\n';
      xml += `    <loc>${SITE_URL}/calculators/${category.id}/${calculator.slug}</loc>\n`;
      xml += `    <lastmod>${formatDate(calculator.lastUpdated)}</lastmod>\n`;
      xml += '    <changefreq>weekly</changefreq>\n';
      xml += '    <priority>0.8</priority>\n';
      xml += '  </url>\n';
    });
  });

  xml += '</urlset>';
  return xml;
}

// Main execution
function main() {
  try {
    console.log('📄 Generating sitemap from data/calculators.ts...');

    // Generate sitemap XML
    const sitemapXml = generateSitemap();

    // Write to public/sitemap-calculators.xml
    const outputPath = path.join(process.cwd(), 'public', 'sitemap-calculators.xml');
    fs.writeFileSync(outputPath, sitemapXml, 'utf8');

    const totalCalculators = CATEGORIES.reduce((acc, cat) => acc + cat.calculators.length, 0);
    const totalUrls = staticPages.length + CATEGORIES.length + totalCalculators;

    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${outputPath}`);
    console.log(`📊 Total URLs: ${totalUrls}`);
    console.log('');
    console.log('Breakdown:');
    console.log(`  - Static pages: ${staticPages.length}`);
    console.log(`  - Category pages: ${CATEGORIES.length}`);
    console.log(`  - Calculator pages: ${totalCalculators}`);
    console.log('');
    console.log('Category breakdown:');
    CATEGORIES.forEach(category => {
      console.log(`  - ${category.title}: ${category.calculators.length} calculator(s)`);
    });
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  main();
}

export { generateSitemap, formatDate };
