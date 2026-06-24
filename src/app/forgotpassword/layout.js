export const metadata = {
  title: 'Återställ lösenord | Pallhotellet',
  description: 'Återställ ditt lösenord på Pallhotellet för att få tillgång till ditt lagerkonto.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://pallhotellet.se/forgotpassword',
    languages: {
      'sv-SE': 'https://pallhotellet.se/forgotpassword',
      'sv': 'https://pallhotellet.com/forgotpassword',
      'x-default': 'https://pallhotellet.com/forgotpassword',
    },
  },
};

export default function ForgotPasswordLayout({ children }) {
  return <>{children}</>;
}
