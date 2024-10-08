export async function generateMetadata() {
  return {
    title: 'Begär offert - Skräddarsydda lager- och logistiklösningar | Pallhotellet',
    description: 'Få en skräddarsydd offert för dina lager-, godshanterings- och logistikbehov. Kontakta Pallhotellet för en skräddarsydd lösning som passar dina affärsbehov.',
   alternates: {
      canonical: 'https://www.pallhotellet.se/offertförfrågan',
    },
  };
}

export default function GoodsHandlingLayout({ children }) {
  return <>{children}</>;
}
