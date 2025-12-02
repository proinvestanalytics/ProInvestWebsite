const { writeFileSync } = require('fs');

const BASE_URL = 'https://proinvest.trade';
const today = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/products/teamops', changefreq: 'weekly', priority: '0.9' },
  { path: '/products/proinvest-ecosystem', changefreq: 'monthly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.6' },
  { path: '/feature-request', changefreq: 'weekly', priority: '0.5' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');
