export async function generateMetadata() {
  return {
    title: 'Kontakta Pallhotellet - Lager- och logistiklösningar i Motala Sverige',
    description: 'Ta kontakt med Pallhotellet för alla dina lager-, godshanterings- och logistikbehov. Kontakta oss idag för skräddarsydda förvaringslösningar och experthjälp.',
   alternates: {
      canonical: 'https://pallhotellet.se/kontakt',
    },
  };
}

export default function GoodsHandlingLayout({ children }) {
  return <>{children}</>;
}
 