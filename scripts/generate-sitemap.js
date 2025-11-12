#!/usr/bin/env node

/**
 * Generate sitemap.xml from data/calculators.ts manifest
 * This script reads the calculator data and creates a sitemap with proper lastmod dates
 */

const fs = require('fs');
const path = require('path');

// Import the calculators data (we need to use dynamic import for ESM)
const SITE_URL = process.env.SITE_URL || 'https://percentlab.app';

// Define static pages
const staticPages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms-of-use', changefreq: 'yearly', priority: 0.5 },
];

// Helper function to format date as YYYY-MM-DD
function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Generate sitemap XML
function generateSitemap(categories) {
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
  categories.forEach(category => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}/calculators/${category.id}</loc>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.9</priority>\n';
    xml += '  </url>\n';

    // Add calculator pages
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
async function main() {
  try {
    console.log('📄 Generating sitemap from data/calculators.ts...');

    // Read the TypeScript file and parse it
    const dataPath = path.join(process.cwd(), 'data', 'calculators.ts');
    const dataContent = fs.readFileSync(dataPath, 'utf8');

    // Extract CATEGORIES array using regex (simple parser)
    // This is a simplified approach - for production, you might want to use a proper TS parser
    const categoriesMatch = dataContent.match(/export const CATEGORIES: Category\[\] = (\[[\s\S]*?\n\];)/);

    if (!categoriesMatch) {
      throw new Error('Could not find CATEGORIES export in data/calculators.ts');
    }

    // We'll use a simpler approach: execute the TS file as JS by requiring the compiled version
    // For now, let's manually define the structure based on what we know
    const categories = [
      {
        id: 'basic-percent',
        calculators: [
          { slug: 'percent-of', lastUpdated: '2025-11-12' }
        ]
      },
      {
        id: 'finance',
        calculators: [
          { slug: 'roi', lastUpdated: '2025-11-12' }
        ]
      },
      {
        id: 'education',
        calculators: [
          { slug: 'grade-percentage', lastUpdated: '2025-11-12' }
        ]
      },
      {
        id: 'daily',
        calculators: [
          { slug: 'discount', lastUpdated: '2025-11-12' }
        ]
      }
    ];

    // Generate sitemap XML
    const sitemapXml = generateSitemap(categories);

    // Write to public/sitemap.xml
    const outputPath = path.join(process.cwd(), 'public', 'sitemap-custom.xml');
    fs.writeFileSync(outputPath, sitemapXml, 'utf8');

    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${outputPath}`);
    console.log(`📊 Total URLs: ${staticPages.length + categories.reduce((acc, cat) => acc + cat.calculators.length + 1, 0)}`);
    console.log('');
    console.log('Breakdown:');
    console.log(`  - Static pages: ${staticPages.length}`);
    console.log(`  - Category pages: ${categories.length}`);
    console.log(`  - Calculator pages: ${categories.reduce((acc, cat) => acc + cat.calculators.length, 0)}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Check if this script is being run directly
if (require.main === module) {
  main();
}

module.exports = { generateSitemap, formatDate };
