export async function generateMetadata() {
    return {
      title: 'Prisvärd inomhusförvaring i Motala Sverige - Från 59 SEK | Pallhotellet',
      description: 'Förvara dina varor säkert i centrala Motala. Vi erbjuder flexibla förvaringslösningar inomhus, inklusive pallförvaring och lagring av stora föremål.',
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: 'https://pallhotellet.se/tjanster/lagerhallning_inomhus',
        languages: {
          'sv-SE': 'https://pallhotellet.se/tjanster/lagerhallning_inomhus',
          'sv': 'https://pallhotellet.com/tjanster/lagerhallning_inomhus',
          'x-default': 'https://pallhotellet.com/tjanster/lagerhallning_inomhus',
        },
      },
      openGraph: {
        title: 'Prisvärd inomhusförvaring i Motala Sverige - Från 59 SEK | Pallhotellet',
        description: 'Förvara dina varor säkert i centrala Motala. Vi erbjuder flexibla förvaringslösningar inomhus, inklusive pallförvaring och lagring av stora föremål.',
        url: 'https://pallhotellet.se/tjanster/lagerhallning_inomhus',
        siteName: 'Pallhotellet',
        locale: 'sv_SE',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Prisvärd inomhusförvaring i Motala Sverige - Från 59 SEK | Pallhotellet',
        description: 'Förvara dina varor säkert i centrala Motala. Vi erbjuder flexibla förvaringslösningar inomhus, inklusive pallförvaring och lagring av stora föremål.',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  