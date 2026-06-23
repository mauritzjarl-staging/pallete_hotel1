export async function generateMetadata() {
  return {
    title: 'Kontakta Pallhotellet - Lager- och logistiklösningar i Motala Sverige',
    description: 'Ta kontakt med Pallhotellet för dina lager- och logistikbehov. Kontakta oss idag för skräddarsydda förvaringslösningar och experthjälp.',
    alternates: {
      canonical: 'https://pallhotellet.se/kontakt',
      languages: {
        'sv-SE': 'https://pallhotellet.se/kontakt',
        'sv': 'https://pallhotellet.com/kontakt',
        'x-default': 'https://pallhotellet.com/kontakt',
      },
    },
    openGraph: {
      title: 'Kontakta Pallhotellet - Lager- och logistiklösningar i Motala Sverige',
      description: 'Ta kontakt med Pallhotellet för dina lager- och logistikbehov. Kontakta oss idag för skräddarsydda förvaringslösningar och experthjälp.',
      url: 'https://pallhotellet.se/kontakt',
      siteName: 'Pallhotellet',
      locale: 'sv_SE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Kontakta Pallhotellet - Lager- och logistiklösningar i Motala Sverige',
      description: 'Ta kontakt med Pallhotellet för dina lager- och logistikbehov. Kontakta oss idag för skräddarsydda förvaringslösningar och experthjälp.',
    },
  };
}

export default function GoodsHandlingLayout({ children }) {
  return <>{children}</>;
}
 