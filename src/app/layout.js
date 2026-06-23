"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from './components/header';
import Footer from './components/footer';
import "./globals.css";

const montserrat = Montserrat({ subsets: ['latin'] });

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Simplified analytics approach that won't block rendering
  useEffect(() => {
    // Safe analytics implementation that won't break your site
    try {
      if (window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
          page_path: pathname,
        });
      }
    } catch (error) {
      console.error("Analytics error:", error);
      // Continue rendering the site even if analytics fails
    }
  }, [pathname]);

  const islogga_inPage = pathname?.startsWith('/logga_in, /sitemap') || false;

  const canonicalUrl = typeof window !== 'undefined'
    ? (window.location.hostname.includes('.com') ? 'https://pallhotellet.com/' : 'https://pallhotellet.se/')
    : 'https://pallhotellet.se/';

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
        {!islogga_inPage && <Header />}
        <main>{children}</main>
        {!islogga_inPage && <Footer />}
        {/* Google Analytics - Loaded using highly-optimized third-parties script module */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
      </body>
    </html>
  );
}
