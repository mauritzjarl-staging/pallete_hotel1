export const metadata = {
  title: 'Ange nytt lösenord | Pallhotellet',
  description: 'Ange ett nytt lösenord för ditt Pallhotellet-konto.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pallhotellet.se/newpassword',
    languages: {
      'sv-SE': 'https://pallhotellet.se/newpassword',
      'sv': 'https://pallhotellet.se/newpassword',
      'x-default': 'https://pallhotellet.se/newpassword',
    },
  },
};

export default function NewPasswordLayout({ children }) {
  return <>{children}</>;
}
