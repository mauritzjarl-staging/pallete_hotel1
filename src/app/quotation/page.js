import QuotationForm from '../components/QuotationForm';  // Import client-side form component

export const metadata = {
  title: 'Begär offert - Skräddarsydda lager- och logistiklösningar | Pallhotellet',
  description: 'Få en skräddarsydd offert för dina lager-, godshanterings- och logistikbehov. Kontakta Pallhotellet för en skräddarsydd lösning som passar dina affärsbehov.',
};

export default function QuotationPage() {
  return (
    <>
    <Head>
    <link rel="canonical" href="https://www.pallhotellet.se/quotation" /> 
  </Head>
      <QuotationForm />
      </>
  );
}
