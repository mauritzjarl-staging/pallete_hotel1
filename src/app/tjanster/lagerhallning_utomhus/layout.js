export async function generateMetadata() {
    return {
      title: 'Lagerhållning utomhus i Motala | Pallhotellet',
      description: 'Kostnadseffektiv lagerhållning utomhus i Motala med Pallhotellet. Upptäck vårt öppna utomhuslager på 100 000 m² för skrymmande och tungt gods.',
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: 'https://pallhotellet.se/tjanster/lagerhallning_utomhus',
        languages: {
          'sv-SE': 'https://pallhotellet.se/tjanster/lagerhallning_utomhus',
          'sv': 'https://pallhotellet.se/tjanster/lagerhallning_utomhus',
          'x-default': 'https://pallhotellet.se/tjanster/lagerhallning_utomhus',
        },
      },
      openGraph: {
        title: 'Lagerhållning utomhus i Motala | Pallhotellet',
        description: 'Kostnadseffektiv lagerhållning utomhus i Motala med Pallhotellet. Upptäck vårt öppna utomhuslager på 100 000 m² för skrymmande och tungt gods.',
        url: 'https://pallhotellet.se/tjanster/lagerhallning_utomhus',
        siteName: 'Pallhotellet',
        locale: 'sv_SE',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Lagerhållning utomhus i Motala | Pallhotellet',
        description: 'Kostnadseffektiv lagerhållning utomhus i Motala med Pallhotellet. Upptäck vårt öppna utomhuslager på 100 000 m² för skrymmande och tungt gods.',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  