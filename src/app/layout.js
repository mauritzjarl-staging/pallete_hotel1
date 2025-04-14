"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
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

  return (
    <html lang="sv">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics - with error handling */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
          onError={(e) => {
            console.error('Google Analytics failed to load', e);
            // Site will continue to load even if analytics fails
          }}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={montserrat.className}>
        {!islogga_inPage && <Header />}
        <main>{children}</main>
        {!islogga_inPage && <Footer />}
      </body>
    </html>
  );
}
