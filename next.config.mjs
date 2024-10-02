/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect all .com domains to the .se domain
      {
        source: '/(.*)',
        has: [{ type: 'host', value: 'pallhotellet.se' }],
        destination: 'https://www.pallhotellet.se/:path*',
        permanent: true,
      },
      {
        source: '/(.*)',
        has: [{ type: 'host', value: 'www.pallhotellet' }],
        destination: 'https://www.pallhotellet.se/:path*',
        permanent: true,
      },
      // Redirect non-www .se domain to the www.pallhotellet.se domain
      {
        source: '/(.*)',
        has: [{ type: 'host', value: 'pallhotellet.se' }],
        destination: 'https://www.pallhotellet.se/:path*',
        permanent: true,
      },

      // Redirect user-friendly service URLs to query-based URLs (services)
      {
        source: '/services/indoor',
        destination: '/services?tab=indoor',
        permanent: true,
      },
      {
        source: '/services/outdoor',
        destination: '/services?tab=outdoor',
        permanent: true,
      },
      {
        source: '/services/rental',
        destination: '/services?tab=rental',
        permanent: true,
      },
      {
        source: '/services/cargo',
        destination: '/services?tab=cargo',
        permanent: true,
      },
      {
        source: '/services/other',
        destination: '/services?tab=other',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
