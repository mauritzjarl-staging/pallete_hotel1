// app/services/page.js
import Head from 'next/head'; // Import the Head component
import ServicesComponent from '../components/ServicesComponent'; // Import the client-side services component

export const metadata = {
  title: 'Lager, godshantering, förvaring inomhus och utomhus i Motela Sverige | Pallhotellet',
  description: 'Pallhotellet erbjuder inomhus- och utomhusförvaring, godshantering och lageruthyrning i Sverige. Vi erbjuder flexibla lagerlösningar för företag av alla storlekar.',
};

export default function ServicesPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.pallhotellet.se/services" /> {/* Add the canonical tag here */}
      </Head>
      
      <ServicesComponent /> {/* Client-side component */}
    </>
  );
}
