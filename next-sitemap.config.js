/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.percentlab.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Disable index sitemap for smaller sites
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/server-sitemap.xml', '/icon.svg', '/opengraph-image.png'],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },

  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/faq' || path === '/about') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/contact' || path === '/privacy-policy' || path === '/terms-of-use') {
      priority = 0.5;
      changefreq = 'monthly';
    } else if (path.startsWith('/what-is-')) {
      // Programmatic SEO pages
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
