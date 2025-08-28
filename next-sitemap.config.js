/* eslint-disable @typescript-eslint/no-require-imports */
// Import your fruit datasets (apple.json, later pear.json, etc.)
const fruitDataApple = require('./src/data/apple.json');
// If you add more fruits later, require them here and add to DATASETS
// const fruitDataPear = require('./src/data/pear.json');
// const fruitDataPlum = require('./src/data/plum.json');

// Import blog posts JSON
const blogPostsData = require('./src/data/blogPosts.json');
/* eslint-enable @typescript-eslint/no-require-imports */

/** @type {import('next-sitemap').IConfig} */

// Base site URL
const ORIGIN = 'https://www.euroduokalem.com';

// Supported locales
const LOCALES = ['en', 'sr', 'ru'];

// Put all fruit datasets into one array for merging
const DATASETS = [
  fruitDataApple,
  // fruitDataPear,
  // fruitDataPlum,
];

// Helper: return full URLs for each locale given a path
const withLocales = (path) =>
  LOCALES.map((lng) => ({
    loc: `${ORIGIN}/${lng}${path.startsWith('/') ? '' : '/'}${path}`,
  }));

// Helper: merge multiple fruit JSONs for one locale into one object
function getLocaleFruitMap(locale) {
  return DATASETS.reduce((acc, ds) => {
    const src = ds?.[locale];
    if (src && typeof src === 'object') {
      Object.assign(acc, src);
    }
    return acc;
  }, {});
}

const config = {
  siteUrl: ORIGIN,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,

  alternateRefs: LOCALES.map((lng) => ({
    href: `${ORIGIN}/${lng}`,
    hreflang: lng,
  })),

  transform: async (cfg, path) => ({
    loc: path,
    changefreq: cfg.changefreq,
    priority: cfg.priority,
    lastmod: new Date().toISOString(),
    alternateRefs: cfg.alternateRefs,
  }),

  additionalPaths: async () => {
    const extra = [];

    // ----------------------------
    // 1) Static section pages
    // ----------------------------
    ['/seedlings', '/about-us', '/blog'].forEach((p) => {
      withLocales(p).forEach(({ loc }) =>
        extra.push({
          loc,
          changefreq: 'weekly',
          priority: p === '/seedlings' ? 0.9 : 0.8,
          lastmod: new Date().toISOString(),
        })
      );
    });

    // ----------------------------
    // 2) Seedlings (fruit-level only)
    // ----------------------------
    LOCALES.forEach((lng) => {
      const fruitMap = getLocaleFruitMap(lng);

      Object.keys(fruitMap).forEach((fruitKey) => {
        extra.push({
          loc: `${ORIGIN}/${lng}/seedlings/${fruitKey}`,
          changefreq: 'weekly',
          priority: 0.85,
          lastmod: new Date().toISOString(),
        });
      });
    });

    // ----------------------------
    // 3) Blog posts (by ID)
    // ----------------------------
    const posts = Array.isArray(blogPostsData?.blogPosts)
      ? blogPostsData.blogPosts
      : [];

    posts.forEach((p) => {
      LOCALES.forEach((lng) => {
        extra.push({
          loc: `${ORIGIN}/${lng}/blog/${p.id}`,
          changefreq: 'weekly',
          priority: 0.6,
          lastmod: new Date().toISOString(),
        });
      });
    });

    return extra;
  },
};

module.exports = config;
