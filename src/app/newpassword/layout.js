export const metadata = {
  title: 'Ange nytt lösenord | Pallhotellet',
  description: 'Ange ett nytt lösenord för ditt Pallhotellet-konto.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://pallhotellet.se/newpassword',
    languages: {
      'sv-SE': 'https://pallhotellet.se/newpassword',
      'sv': 'https://pallhotellet.com/newpassword',
      'x-default': 'https://pallhotellet.com/newpassword',
    },
  },
};

export default function NewPasswordLayout({ children }) {
  return <>{children}</>;
}
