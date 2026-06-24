export async function generateMetadata() {
    return {
      title: 'Flexibel lageruthyrning i Motala Sverige - Anpassningsbara enheter | Pallhotellet',
      description: 'Hyr individuella förråd från 4m² och uppåt. Pallhotellet erbjuder flexibla förvaringslösningar skräddarsydda efter dina specifika behov. Kontakta oss idag.',
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: 'https://pallhotellet.se/tjanster/hyra_av_forrad',
        languages: {
          'sv-SE': 'https://pallhotellet.se/tjanster/hyra_av_forrad',
          'sv': 'https://pallhotellet.com/tjanster/hyra_av_forrad',
          'x-default': 'https://pallhotellet.com/tjanster/hyra_av_forrad',
        },
      },
      openGraph: {
        title: 'Flexibel lageruthyrning i Motala Sverige - Anpassningsbara enheter | Pallhotellet',
        description: 'Hyr individuella förråd från 4m² och uppåt. Pallhotellet erbjuder flexibla förvaringslösningar skräddarsydda efter dina specifika behov. Kontakta oss idag.',
        url: 'https://pallhotellet.se/tjanster/hyra_av_forrad',
        siteName: 'Pallhotellet',
        locale: 'sv_SE',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Flexibel lageruthyrning i Motala Sverige - Anpassningsbara enheter | Pallhotellet',
        description: 'Hyr individuella förråd från 4m² och uppåt. Pallhotellet erbjuder flexibla förvaringslösningar skräddarsydda efter dina specifika behov. Kontakta oss idag.',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  