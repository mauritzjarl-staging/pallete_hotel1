// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        // Redirect all .com domains to the .se domain
        {
          source: '/(.*)',
          has: [{ type: 'host', value: 'www.pallhotellet.com' }],
          destination: 'https://www.pallhotellet.se/:path*',
          permanent: true,
        },
        {
          source: '/(.*)',
          has: [{ type: 'host', value: 'pallhotellet.com' }],
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
      ];
    },
  };
  
  export default nextConfig;
  