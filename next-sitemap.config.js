/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.percentlab.app',
  // generateRobotsTxt is DISABLED — robots.txt is handled by app/robots.ts
  generateRobotsTxt: false,
  // Sitemap is handled by app/sitemap.ts — this config is kept for reference only
  exclude: ['/api/*', '/admin/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Higher priority for homepage and calculators
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    else if (path.startsWith('/calculators')) priority = 0.9;
    else if (path.startsWith('/what-is')) priority = 0.8;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
