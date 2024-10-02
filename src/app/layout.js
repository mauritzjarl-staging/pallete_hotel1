"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import { usePathname } from 'next/navigation';
import { Metadata } from 'next';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust as needed
});

export default function ClientOnlyLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname.startsWith('/login');

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/imgs/Pall.png" />
      </head>
      <body className={montserrat.className}>
        {!isLoginPage && <Header />}
        <main>{children}</main>
        {!isLoginPage && <Footer />}
      </body>
    </html>
  );
}

