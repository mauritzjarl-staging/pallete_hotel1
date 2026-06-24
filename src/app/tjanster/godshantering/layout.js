export async function generateMetadata() {
    return {
      title: 'Expert Godshantering i Motala Sverige - Lastning, lossning & orderhantering | Pallhotellet',
      description: 'Pallhotellet erbjuder heltäckande godshanteringstjänster med orderhantering, lastning/lossning och ankomstkontroll. Få en skräddarsydd logistiklösning.',
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: 'https://pallhotellet.se/tjanster/godshantering',
        languages: {
          'sv-SE': 'https://pallhotellet.se/tjanster/godshantering',
          'sv': 'https://pallhotellet.com/tjanster/godshantering',
          'x-default': 'https://pallhotellet.com/tjanster/godshantering',
        },
      },
      openGraph: {
        title: 'Expert Godshantering i Motala Sverige - Lastning, lossning & orderhantering | Pallhotellet',
        description: 'Pallhotellet erbjuder heltäckande godshanteringstjänster med orderhantering, lastning/lossning och ankomstkontroll. Få en skräddarsydd logistiklösning.',
        url: 'https://pallhotellet.se/tjanster/godshantering',
        siteName: 'Pallhotellet',
        locale: 'sv_SE',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Expert Godshantering i Motala Sverige - Lastning, lossning & orderhantering | Pallhotellet',
        description: 'Pallhotellet erbjuder heltäckande godshanteringstjänster med orderhantering, lastning/lossning och ankomstkontroll. Få en skräddarsydd logistiklösning.',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  