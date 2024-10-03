export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/login', '/findus'],
      },
      sitemap: 'https://www.pallhotellet.se/sitemap.xml',
    }
  }
