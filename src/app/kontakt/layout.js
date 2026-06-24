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
      'sv': 'https://pallhotellet.se/kontakt',
      'x-default': 'https://pallhotellet.se/kontakt',
    },
  },
};

export default function KontaktLayout({ children }) {
  return <>{children}</>;
}