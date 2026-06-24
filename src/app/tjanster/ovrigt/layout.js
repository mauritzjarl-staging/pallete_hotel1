export async function generateMetadata() {
    return {
      title: 'Tredjepartslogistik (3PL) & distribution i Motala | Pallhotellet',
      description: 'Professionella 3PL-lösningar, distribution och dokumentation i Motala med Pallhotellet. Vi optimerar och hanterar era lagerflöden effektivt.',
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: 'https://pallhotellet.se/tjanster/ovrigt',
        languages: {
          'sv-SE': 'https://pallhotellet.se/tjanster/ovrigt',
          'sv': 'https://pallhotellet.com/tjanster/ovrigt',
          'x-default': 'https://pallhotellet.com/tjanster/ovrigt',
        },
      },
      openGraph: {
        title: 'Tredjepartslogistik (3PL) & distribution i Motala | Pallhotellet',
        description: 'Professionella 3PL-lösningar, distribution och dokumentation i Motala med Pallhotellet. Vi optimerar och hanterar era lagerflöden effektivt.',
        url: 'https://pallhotellet.se/tjanster/ovrigt',
        siteName: 'Pallhotellet',
        locale: 'sv_SE',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Tredjepartslogistik (3PL) & distribution i Motala | Pallhotellet',
        description: 'Professionella 3PL-lösningar, distribution och dokumentation i Motala med Pallhotellet. Vi optimerar och hanterar era lagerflöden effektivt.',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  