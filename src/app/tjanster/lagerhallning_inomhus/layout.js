export async function generateMetadata() {
    return {
      title: 'Prisvärd inomhusförvaring i Motela Sverige - Från 49 SEK | Pallhotellet',
      description: 'Förvara dina varor säkert i våra centralt belägna lager i Motala, Sverige. Vi erbjuder flexibla förvaringslösningar inomhus, inklusive pallförvaring och stora föremål.',
      alternates: {
        canonical: 'https://www.pallhotellet.se/tjanster/lagerhallning_inomhus',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  