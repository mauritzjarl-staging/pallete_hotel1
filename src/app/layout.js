"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import { usePathname } from 'next/navigation';
import Script from 'next/script'; // Import Script component for GA

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ClientOnlyLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname.startsWith('/login');

  return (
    <html lang="sv">
      <head>
        {/* Google Analytics Script */}
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
      </head>
      <body className={montserrat.className}>
        {!isLoginPage && <Header />}
        <main>{children}</main>
        {!isLoginPage && <Footer />}
      </body>
    </html>
  );
}
