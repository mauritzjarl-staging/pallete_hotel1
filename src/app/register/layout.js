export const metadata = {
  title: 'Skapa konto | Pallhotellet',
  description: 'Registrera dig och skapa ett konto hos Pallhotellet för flexibel lagerhållning i Motala.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pallhotellet.se/register',
    languages: {
      'sv-SE': 'https://pallhotellet.se/register',
      'sv': 'https://pallhotellet.se/register',
      'x-default': 'https://pallhotellet.se/register',
    },
  },
};

export default function RegisterLayout({ children }) {
  return <>{children}</>;
}
