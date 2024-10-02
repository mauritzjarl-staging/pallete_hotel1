// app/page.js
import HomeClientComponent from './components/HomeClientComponent';  // Import client-side component

export const metadata = {
  title: 'Lager & Logistiklösningar i Motela Sverige - Pallhotellet | Lasthanteringsexperter',
  description: 'Pålitligt lager i Sverige med flexibel lagring, sakkunnig lasthantering och dokumentationstjänster. Kontakta Pallhotellet för skräddarsydda lösningar.',
};

export default function HomePage() {
  return (
    <>
    <Head>
    <link rel="canonical" href="https://www.pallhotellet.se/" /> 
  </Head>
      <HomeClientComponent />  
      </>
  );
}
