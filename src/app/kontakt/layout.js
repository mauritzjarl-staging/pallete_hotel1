export const metadata = {
  title: 'Kontakta oss | Pallhotellet',
  description: 'Hör av dig till oss på Pallhotellet för flexibel lagerhållning, godshantering, eller hyra av förråd i Motala.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pallhotellet.se/kontakt',
    languages: {
      'sv-SE': 'https://pallhotellet.se/kontakt',
      'sv': 'https://pallhotellet.com/kontakt',
      'x-default': 'https://pallhotellet.com/kontakt',
    },
  },
};

export default function KontaktLayout({ children }) {
  return <>{children}</>;
}