export async function generateMetadata() {
    return {
      title: 'Omfattande 3PL, dokumentation & distributionstjänster i Motala Sverige | Pallhotellet',
      description: 'Pallhotellet erbjuder 3PL-lösningar, dokumentation och distributionstjänster. Effektivisera ditt lagerflöde med flexibel lagring och pålitlig logistik.',
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
        title: 'Omfattande 3PL, dokumentation & distributionstjänster i Motala Sverige | Pallhotellet',
        description: 'Pallhotellet erbjuder 3PL-lösningar, dokumentation och distributionstjänster. Effektivisera ditt lagerflöde med flexibel lagring och pålitlig logistik.',
        url: 'https://pallhotellet.se/tjanster/ovrigt',
        siteName: 'Pallhotellet',
        locale: 'sv_SE',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Omfattande 3PL, dokumentation & distributionstjänster i Motala Sverige | Pallhotellet',
        description: 'Pallhotellet erbjuder 3PL-lösningar, dokumentation och distributionstjänster. Effektivisera ditt lagerflöde med flexibel lagring och pålitlig logistik.',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  