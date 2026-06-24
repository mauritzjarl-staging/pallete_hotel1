export async function generateMetadata() {
    return {
      title: 'Lagerhållning inomhus i Motala | Pallhotellet',
      description: 'Säker och prisvärd lagerhållning inomhus i Motala hos Pallhotellet. Vi erbjuder flexibla lagringsenheter, pallplatser och förvaring av skrymmande gods.',
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: 'https://pallhotellet.se/tjanster/lagerhallning_inomhus',
        languages: {
          'sv-SE': 'https://pallhotellet.se/tjanster/lagerhallning_inomhus',
          'sv': 'https://pallhotellet.se/tjanster/lagerhallning_inomhus',
          'x-default': 'https://pallhotellet.se/tjanster/lagerhallning_inomhus',
        },
      },
      openGraph: {
        title: 'Lagerhållning inomhus i Motala | Pallhotellet',
        description: 'Säker och prisvärd lagerhållning inomhus i Motala hos Pallhotellet. Vi erbjuder flexibla lagringsenheter, pallplatser och förvaring av skrymmande gods.',
        url: 'https://pallhotellet.se/tjanster/lagerhallning_inomhus',
        siteName: 'Pallhotellet',
        locale: 'sv_SE',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Lagerhållning inomhus i Motala | Pallhotellet',
        description: 'Säker och prisvärd lagerhållning inomhus i Motala hos Pallhotellet. Vi erbjuder flexibla lagringsenheter, pallplatser och förvaring av skrymmande gods.',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  