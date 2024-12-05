import HomeClientComponent from './components/HomeClientComponent';  // Import client-side component

export async function generateMetadata() {
  // Get the host from the request headers
  const host = typeof window !== 'undefined' ? window.location.host : 'pallhotellet.se'; // Default to .se for server-side rendering

  let canonicalUrl;

  // Determine the canonical URL based on the host
  if (host.includes('.com')) {
    canonicalUrl = 'https://pallhotellet.com/';
  } else {
    canonicalUrl = 'https://pallhotellet.se/';
  }

  return {
    title: 'Logistik- och lagerlösningar i Motala, Östergötland - Pallhotellet.se ',
    
    description: 'Lagerhållning från 59kr per pall, sakkunnig personal, flexibel lagring, lasthantering och dokumentationstjänster. Kontakta oss på Pallhotellet för skräddarsydda lösningar.',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function HomePage() {
  return (
    <HomeClientComponent />  
  );
}
