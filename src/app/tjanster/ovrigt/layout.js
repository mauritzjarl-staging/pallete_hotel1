export async function generateMetadata() {
    return {
      title: 'Omfattande 3PL, dokumentation & distributionstjänster i Motala Sverige | Pallhotellet',
      description: 'Pallhotellet erbjuder 3PL-lösningar, dokumentation och distributionstjänster för att effektivisera ditt lagerflöde och optimera kostnaderna. Flexibel lagring och pålitlig logistik för ditt företag.',
      alternates: {
        canonical: 'https://pallhotellet.se/tjanster/ovrigt',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  