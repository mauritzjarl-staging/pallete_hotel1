export async function generateMetadata() {
    return {
      title: 'Hyra av förråd i Motala | Pallhotellet',
      description: 'Hitta billigt och säkert att hyra av förråd i Motala hos Pallhotellet. Vi erbjuder flexibla förrådsenheter från 4 m² för privatpersoner och företag.',
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: 'https://pallhotellet.se/tjanster/hyra_av_forrad',
        languages: {
          'sv-SE': 'https://pallhotellet.se/tjanster/hyra_av_forrad',
          'sv': 'https://pallhotellet.se/tjanster/hyra_av_forrad',
          'x-default': 'https://pallhotellet.se/tjanster/hyra_av_forrad',
        },
      },
      openGraph: {
        title: 'Hyra av förråd i Motala | Pallhotellet',
        description: 'Hitta billigt och säkert att hyra av förråd i Motala hos Pallhotellet. Vi erbjuder flexibla förrådsenheter från 4 m² för privatpersoner och företag.',
        url: 'https://pallhotellet.se/tjanster/hyra_av_forrad',
        siteName: 'Pallhotellet',
        locale: 'sv_SE',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Hyra av förråd i Motala | Pallhotellet',
        description: 'Hitta billigt och säkert att hyra av förråd i Motala hos Pallhotellet. Vi erbjuder flexibla förrådsenheter från 4 m² för privatpersoner och företag.',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  