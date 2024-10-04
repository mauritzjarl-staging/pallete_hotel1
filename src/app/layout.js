import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientOnlyLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  const isLoginPage = pathname.startsWith('/login');

  return (
    <html lang="sv">
      <head>
        {/* GA Script */}
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
