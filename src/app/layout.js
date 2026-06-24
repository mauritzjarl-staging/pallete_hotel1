import { headers } from 'next/headers';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from './components/header';
import Footer from './components/footer';
import "./globals.css";

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://pallhotellet.se'),
  title: 'Pallhotellet - Lager- och logistiklösningar',
  description: 'Vi hjälper dig med lagerhållning, godshantering, dokumentation och mycket mer i Motala.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pallhotellet.se',
    languages: {
      'sv-SE': 'https://pallhotellet.se',
      'sv': 'https://pallhotellet.com',
      'x-default': 'https://pallhotellet.com',
    },
  },
  openGraph: {
    title: 'Pallhotellet - Lager- och logistiklösningar',
    description: 'Vi hjälper dig med lagerhållning, godshantering, dokumentation och mycket mer i Motala.',
    url: 'https://pallhotellet.se',
    siteName: 'Pallhotellet',
    images: [
      {
        url: '/imgs/Rectangle4.webp',
        width: 800,
        height: 600,
        alt: 'Pallhotellet',
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pallhotellet - Lager- och logistiklösningar',
    description: 'Vi hjälper dig med lagerhållning, godshantering, dokumentation och mycket mer i Motala.',
    images: ['/imgs/Rectangle4.webp'],
  },
};

export default function RootLayout({ children }) {
  const headersList = headers();
  const host = headersList.get('host') || '';
  const canonicalUrl = host.includes('.com') ? 'https://pallhotellet.com/' : 'https://pallhotellet.se/';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Pallhotellet',
    'image': 'https://pallhotellet.se/imgs/Rectangle4.webp',
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
    <html lang="sv">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Facebook Pixel - loaded with lazyOnload strategy to reduce unused JS on initial load */}
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '1029384756'}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            className="hidden"
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '1029384756'}&ev=PageView&noscript=1`}
            alt="facebook pixel"
          />
        </noscript>
      </head>
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Google Analytics - Loaded using highly-optimized third-parties script module */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
      </body>
    </html>
  );
}
