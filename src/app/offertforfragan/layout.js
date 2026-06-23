export async function generateMetadata() {
  return {
    title: 'Begär offert - Skräddarsydda lager- och logistiklösningar | Pallhotellet',
    description: 'Få en skräddarsydd offert för dina lager- och logistikbehov. Kontakta Pallhotellet för en flexibel lösning som passar just ditt företag.',
    alternates: {
      canonical: 'https://pallhotellet.se/offertforfragan',
      languages: {
        'sv-SE': 'https://pallhotellet.se/offertforfragan',
        'sv': 'https://pallhotellet.com/offertforfragan',
        'x-default': 'https://pallhotellet.com/offertforfragan',
      },
    },
    openGraph: {
      title: 'Begär offert - Skräddarsydda lager- och logistiklösningar | Pallhotellet',
      description: 'Få en skräddarsydd offert för dina lager- och logistikbehov. Kontakta Pallhotellet för en flexibel lösning som passar just ditt företag.',
      url: 'https://pallhotellet.se/offertforfragan',
      siteName: 'Pallhotellet',
      locale: 'sv_SE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Begär offert - Skräddarsydda lager- och logistiklösningar | Pallhotellet',
      description: 'Få en skräddarsydd offert för dina lager- och logistikbehov. Kontakta Pallhotellet för en flexibel lösning som passar just ditt företag.',
    },
  };
}

export default function GoodsHandlingLayout({ children }) {
  return <>{children}</>;
}