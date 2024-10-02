import QuotationForm from '../components/QuotationForm';  // Import client-side form component

export const metadata = {
  title: 'Request a Quote - PallHotellet',
  description: 'Request a quote from PallHotellet for our premium storage and hotel services. We offer tailored solutions to meet your needs.',
};

export default function QuotationPage() {
  return (
      <QuotationForm />
  );
}
