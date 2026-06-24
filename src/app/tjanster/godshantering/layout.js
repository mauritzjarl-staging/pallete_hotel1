export async function generateMetadata() {
    return {
      title: 'Godshantering i Motala | Pallhotellet',
      description: 'Professionell godshantering i Motala med Pallhotellet. Vi utför lastning, lossning, orderhantering och ankomstkontroll för ett optimalt logistikflöde.',
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
        title: 'Godshantering i Motala | Pallhotellet',
        description: 'Professionell godshantering i Motala med Pallhotellet. Vi utför lastning, lossning, orderhantering och ankomstkontroll för ett optimalt logistikflöde.',
        url: 'https://pallhotellet.se/tjanster/godshantering',
        siteName: 'Pallhotellet',
        locale: 'sv_SE',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Godshantering i Motala | Pallhotellet',
        description: 'Professionell godshantering i Motala med Pallhotellet. Vi utför lastning, lossning, orderhantering och ankomstkontroll för ett optimalt logistikflöde.',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  