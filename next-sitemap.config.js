/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.percentlab.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/server-sitemap.xml', '/icon.svg', '/opengraph-image.png'],

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
    ],
    additionalSitemaps: [],
  },

  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    // ✅ lastmod ثابت حسب نوع الصفحة — مش new Date() كل مرة
    let lastmod = '2025-11-13';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
      lastmod = '2026-01-18';
    } else if (path === '/faq' || path === '/about') {
      priority = 0.8;
      changefreq = 'monthly';
      lastmod = '2026-01-18';
    } else if (path === '/contact' || path === '/privacy-policy' || path === '/terms-of-use') {
      priority = 0.5;
      changefreq = 'monthly';
      lastmod = '2026-02-01';
    } else if (path.startsWith('/calculators/')) {
      priority = 0.7;
      changefreq = 'weekly';
      lastmod = '2025-11-13';
    } else if (path.startsWith('/what-is-')) {
      priority = 0.6;
      changefreq = 'monthly';
      lastmod = '2026-01-18';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod,
    };
  },
};
