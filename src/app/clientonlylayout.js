"use client"; // This marks the component as a client-side component

import Header from './components/header';
import Footer from './components/footer';
import { usePathname } from 'next/navigation';

export default function ClientOnlyLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname.startsWith('/login');

  return (
    <>
      {!isLoginPage && <Header />} {/* Conditionally render Header */}
      <main>{children}</main>
      {!isLoginPage && <Footer />} {/* Conditionally render Footer */}
    </>
  );
}
