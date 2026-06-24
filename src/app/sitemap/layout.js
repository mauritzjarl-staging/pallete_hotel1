export const metadata = {
  title: 'Sitemap | Pallhotellet.se',
  description: 'Sitemap över alla sidor på Pallhotellet.se. Hitta enkelt rätt lager- och logistiktjänst.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pallhotellet.se/sitemap',
    languages: {
      'sv-SE': 'https://pallhotellet.se/sitemap',
      'sv': 'https://pallhotellet.se/sitemap',
      'x-default': 'https://pallhotellet.se/sitemap',
    },
  },
};

export default function SitemapLayout({ children }) {
  return <>{children}</>;
}
