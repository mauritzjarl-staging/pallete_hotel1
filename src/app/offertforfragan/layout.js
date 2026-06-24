export const metadata = {
  title: 'Offertförfrågan | Pallhotellet',
  description: 'Fyll i vårt offertformulär för att få ett prisförslag på lagerhållning, förråd eller godshantering i Motala.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pallhotellet.se/offertforfragan',
    languages: {
      'sv-SE': 'https://pallhotellet.se/offertforfragan',
      'sv': 'https://pallhotellet.com/offertforfragan',
      'x-default': 'https://pallhotellet.com/offertforfragan',
    },
  },
};

export default function OffertforfraganLayout({ children }) {
  return <>{children}</>;
}