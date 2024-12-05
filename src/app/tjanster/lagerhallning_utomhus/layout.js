export async function generateMetadata() {
    return {
      title: 'Expansiv utomhusförråd i Motala Sverige - 100 000 m² Tillgänglig | Pallhotellet',
      description: 'Behöver du plats för skrymmande varor? Pallhotellet erbjuder 100 000 m² utomhusförråd i Motala, Sverige, perfekt för stora föremål som kan förvaras utomhus. Kontakta oss för mer information.',
      alternates: {
        canonical: 'https://pallhotellet.se/tjanster/lagerhallning_utomhus',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  