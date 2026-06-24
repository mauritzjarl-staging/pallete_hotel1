export const metadata = {
  title: 'Logga in | Pallhotellet',
  description: 'Logga in på ditt konto hos Pallhotellet för att hantera dina lagertjänster.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pallhotellet.se/logga_in',
    languages: {
      'sv-SE': 'https://pallhotellet.se/logga_in',
      'sv': 'https://pallhotellet.com/logga_in',
      'x-default': 'https://pallhotellet.com/logga_in',
    },
  },
};

export default function LoggaInLayout({ children }) {
  return <>{children}</>;
}
