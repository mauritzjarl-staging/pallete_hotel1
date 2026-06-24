export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/', '/logga_in', '/register', '/forgotpassword', '/newpassword'],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/sitemap.xml`,
  }
}