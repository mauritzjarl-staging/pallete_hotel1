// "use client";
// import "./globals.css";
// import { Montserrat } from "next/font/google";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import { usePathname } from 'next/navigation';
// import { Metadata } from 'next';

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "700"], // Adjust as needed
// });

// export default function ClientOnlyLayout({ children }) {
//   const pathname = usePathname();
//   const isLoginPage = pathname.startsWith('/login');

//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" href="/imgs/Pall.png" />
//         <title>PallHotellet.se</title>
        
//         <meta name="description" content="PallHotellet Sweden" />
//       </head>
//       <body className={montserrat.className}>
//         {!isLoginPage && <Header />}
//         <main>{children}</main>
//         {!isLoginPage && <Footer />}
//       </body>
//     </html>
//   );
// }



import './globals.css';
import { Montserrat } from 'next/font/google';
import ClientOnlyLayout from './clientonlylayout'; // Import the ClientOnlyLayout

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// Metadata for the app
export const metadata = {
  title: 'PallHotellet.se',
  description: 'PallHotellet Sweden - Your Comfort Hotel',
  icons: {
    icon: '/imgs/Pall.png',
  },
  alternates: {
    canonical: 'https://www.pallhotellet.se',
  },
};

// RootLayout is the main layout wrapper for the app
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ClientOnlyLayout>{children}</ClientOnlyLayout>
      </body>
    </html>
  );
}
