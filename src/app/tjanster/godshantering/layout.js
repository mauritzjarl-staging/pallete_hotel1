export async function generateMetadata() {
    return {
      title: 'Expert Godshantering i Motela Sverige - Lastning, lossning & orderhantering | Pallhotellet',
      description: 'Pallhotellet tillhandahåller heltäckande godshanteringstjänster, inklusive orderhantering, lastning/lossning och ankomstkontroll. Få en skräddarsydd lösning för dina logistikbehov.',
      alternates: {
        canonical: 'https://www.pallhotellet.se/tjanster/godshantering',
      },
    };
  }
  
  export default function GoodsHandlingLayout({ children }) {
    return <>{children}</>;
  }
  