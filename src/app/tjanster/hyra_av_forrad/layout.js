export async function generateMetadata() {
    return {
      title: 'Flexibel lageruthyrning i Motela Sverige - Anpassningsbara enheter | Pallhotellet',
      description: 'Hyr individuella förråd från 4m² och uppåt. Pallhotellet erbjuder anpassningsbara förvaringslösningar skräddarsydda efter dina specifika behov. Kontakta oss för flexibla uthyrningsalternativ.',
      alternates: {
        canonical: 'https://www.pallhotellet.se/tjanster/hyra_av_forrad',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  