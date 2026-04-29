export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://viriatusbrunch.pt/sitemap.xml',
  };
}
