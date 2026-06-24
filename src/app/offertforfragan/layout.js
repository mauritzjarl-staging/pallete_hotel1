export const metadata = {
  title: 'Offertförfrågan - Logistiktjänster som önskas | Pallhotellet',
  description: 'Fyll i vårt offertformulär för att specificera vilka logistiktjänster som önskas hos Pallhotellet i Motala och få ett anpassat prisförslag.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pallhotellet.se/offertforfragan',
    languages: {
      'sv-SE': 'https://pallhotellet.se/offertforfragan',
      'sv': 'https://pallhotellet.se/offertforfragan',
      'x-default': 'https://pallhotellet.se/offertforfragan',
    },
  },
};

export default function OffertforfraganLayout({ children }) {
  return <>{children}</>;
}