module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*', // Matches all paths
        destination: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/:path*`,
        permanent: true, // Permanent redirect (HTTP 301)
      },
    ];
  },
};