import HomeClientComponent from './components/HomeClientComponent';  // Import client-side component

export async function generateMetadata() {
  let canonicalUrl = 'https://pallhotellet.se/';
  let title = 'Lager- och logistiklösningar i Motala med Pallhotellet.se';
  const domainUrl = process.env.DOMAIN_URL || '';
  // Determine the canonical URL based on the host
  if (domainUrl.includes('.com')) {
    canonicalUrl = 'https://pallhotellet.com/';
    title = 'Lager- och logistiklösningar i Motala med Pallhotellet.com';
  }
  else if (domainUrl.includes('.se')) {
    canonicalUrl = 'https://pallhotellet.se/';
    title = 'Lager- och logistiklösningar i Motala med Pallhotellet.se';
  }
  else {
    // Fallback or default domain handling
    canonicalUrl = 'https://pallhotellet.se/';
    title = 'Lager- och logistiklösningar i Motala med Pallhotellet.se';
  }

  return {
    title:title,
    description: 'Vi har det du behöver. Vi tar hand om din lagring och godshantering med sakkunnig personal i Motala. Kontakta oss för att få hjälp. Upptäck mer!',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'sv-SE': 'https://pallhotellet.se/',
        'sv': 'https://pallhotellet.com/',
        'x-default': 'https://pallhotellet.com/',
      },
    },
    openGraph: {
      title: title,
      description: 'Vi har det du behöver. Vi tar hand om din lagring och godshantering med sakkunnig personal i Motala. Kontakta oss för att få hjälp. Upptäck mer!',
      url: canonicalUrl,
      siteName: 'Pallhotellet',
      images: [
        {
          url: `${canonicalUrl}imgs/Rectangle4.png`,
          width: 800,
          height: 600,
          alt: 'Pallhotellet - Lager- och logistiklösningar',
        },
      ],
      locale: 'sv_SE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: 'Vi har det du behöver. Vi tar hand om din lagring och godshantering med sakkunnig personal i Motala. Kontakta oss för att få hjälp. Upptäck mer!',
      images: [`${canonicalUrl}imgs/Rectangle4.png`],
    },
  };
}

export default function HomePage() {
  let canonicalUrl = 'https://pallhotellet.se/';
  const domainUrl = process.env.DOMAIN_URL || '';
  if (domainUrl.includes('.com')) {
    canonicalUrl = 'https://pallhotellet.com/';
  }
  else if (domainUrl.includes('.se')) {
    canonicalUrl = 'https://pallhotellet.se/';
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Pallhotellet',
    'image': 'https://pallhotellet.se/imgs/Rectangle4.png',
    '@id': `${canonicalUrl}#organization`,
    'url': canonicalUrl,
    'telephone': '0141-21 50 44',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Vickerkullavägen 2',
      'addressLocality': 'Motala',
      'postalCode': '591 45',
      'addressCountry': 'SE'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 58.5369,
      'longitude': 15.0374
    },
    'sameAs': [
      'https://www.facebook.com/share/1AW57zVRFg/',
      'https://www.facebook.com/chriss.mauritz.1',
      'https://x.com/pallhotellet',
      'https://instagram.com/pallhotellet',
      'https://linkedin.com/company/pallhotellet',
      'https://www.youtube.com/@pallhotellet'
    ],
    'description': 'Vi har det du behöver. Vi tar hand om din lagring och godshantering med sakkunnig personal i Motala. Kontakta oss för att få hjälp. Upptäck mer!'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClientComponent />
    </>
  );
}
