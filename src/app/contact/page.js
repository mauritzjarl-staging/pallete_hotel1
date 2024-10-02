import ContactForm from '../components/ContactForm';  // Import client-side form component
import Head from 'next/head';

export const metadata = {
  title: 'Kontakta Pallhotellet - Lager- och logistiklösningar i Motela Sverige',
  description: 'Ta kontakt med Pallhotellet för alla dina lager-, godshanterings- och logistikbehov. Kontakta oss idag för skräddarsydda förvaringslösningar och experthjälp.',
};

export default function ContactPage() {
  return (
    <>
    <Head>
    <link rel="canonical" href="https://www.pallhotellet.se/contact" /> 
  </Head>
      <ContactForm />  
      </>
  );
}
