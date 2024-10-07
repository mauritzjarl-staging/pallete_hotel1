// app/page.js
import HomeClientComponent from './components/HomeClientComponent';  // Import client-side component

export async function generateMetadata() {
  return {
    
    title: 'Lager & Logistiklösningar i Motela Sverige - Pallhotellet | Lasthanteringsexperter',
    description: 'Pålitligt lager i Sverige med flexibel lagring, sakkunnig lasthantering och dokumentationstjänster. Kontakta Pallhotellet för skräddarsydda lösningar.',
   alternates: {
      canonical: 'https://www.pallhotellet.se/',
    },
  };
}

export default function HomePage() {
  return (
      <HomeClientComponent />  
  );
}
