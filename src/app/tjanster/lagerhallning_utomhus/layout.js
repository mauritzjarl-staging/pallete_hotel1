export async function generateMetadata() {
    return {
      title: 'Expansiv utomhusförråd i Motala Sverige - 100 000 m² Tillgänglig | Pallhotellet',
      description: 'Behöver du plats för skrymmande varor? Pallhotellet erbjuder 100 000 m² utomhuslager i Motala, perfekt för stora föremål. Kontakta oss för mer info.',
      alternates: {
        canonical: 'https://pallhotellet.se/tjanster/lagerhallning_utomhus',
        languages: {
          'sv-SE': 'https://pallhotellet.se/tjanster/lagerhallning_utomhus',
          'sv': 'https://pallhotellet.com/tjanster/lagerhallning_utomhus',
          'x-default': 'https://pallhotellet.com/tjanster/lagerhallning_utomhus',
        },
      },
      openGraph: {
        title: 'Expansiv utomhusförråd i Motala Sverige - 100 000 m² Tillgänglig | Pallhotellet',
        description: 'Behöver du plats för skrymmande varor? Pallhotellet erbjuder 100 000 m² utomhuslager i Motala, perfekt för stora föremål. Kontakta oss för mer info.',
        url: 'https://pallhotellet.se/tjanster/lagerhallning_utomhus',
        siteName: 'Pallhotellet',
        locale: 'sv_SE',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Expansiv utomhusförråd i Motala Sverige - 100 000 m² Tillgänglig | Pallhotellet',
        description: 'Behöver du plats för skrymmande varor? Pallhotellet erbjuder 100 000 m² utomhuslager i Motala, perfekt för stora föremål. Kontakta oss för mer info.',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  