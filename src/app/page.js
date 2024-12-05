import HomeClientComponent from './components/HomeClientComponent';  // Import client-side component

export async function generateMetadata() {
  let canonicalUrl;
  let title;
  // Determine the canonical URL based on the host
  if (process.env.DOMAIN_URL.includes('.com')) {
    canonicalUrl = 'https://pallhotellet.com/';
    title = 'Logistik- och lagerlösningar i Motala, Östergötland - Pallhotellet.com';
  }
  else if (process.env.DOMAIN_URL.includes('.se')) {
    canonicalUrl = 'https://pallhotellet.se/';
    title = 'Logistik- och lagerlösningar i Motala, Östergötland - Pallhotellet.se';
  }
  else {
    // Fallback or default domain handling
    canonicalUrl = 'https://pallethotellet.com/';
    title = 'Logistik- och lagerlösningar i Motala, Östergötland - Pallhotellet.com';
  }

  return {
    title:title,
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
