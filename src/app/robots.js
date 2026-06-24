export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/'],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/sitemap.xml`,
  }
}