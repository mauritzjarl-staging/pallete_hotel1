"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';
import Head from 'next/head';
import "./globals.css"
const montserrat = Montserrat({ subsets: ['latin'] });

export default function ClientOnlyLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  const islogga_inPage = pathname.startsWith('/logga_in, /sitemap');

  return (
    <>
      <Head>
          <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics Scripts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </Head>
      <html lang="sv">
        <body className={montserrat.className}>
          {!islogga_inPage && <Header />}
          <main>{children}</main>
          {!islogga_inPage && <Footer />}
        </body>
      </html>
    </>
  );
}
