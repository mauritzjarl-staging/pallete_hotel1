"use client";
import React from "react";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { usePathname } from "next/navigation";

const page = () => {
    const pathname = usePathname(); 
  return (
    <div className="w-full">
      <section className="relative bg-[url('/imgs/Frame5892.webp')] bg-cover text-center bg-center md:h-[500px] h-[200px] pt-10 flex justify-center items-center">
        <h1 className="relative text-white font-bold px-5 text-3xl md:text-5xl text-center z-10">
          Övrigt
        </h1>
      </section>

      <section className="md:my-32 my-10 px-4 md:px-20 md:flex md:space-x-8">
        {/* Tab Navigation */}
           {/* Tab Navigation */}
           <div className="md:w-3/12 bg-[#F3F3F3] h-full space-y-5 md:text-lg py-10 my-10 md:my-0 px-1 list-none">
      <Link href="/tjanster/lagerhallning_inomhus">
        <li className={`text-center w-full md:py-3 py-2  ${pathname === '/tjanster/lagerhallning_inomhus' ? 'bg-orange-500 text-white' : 'hover:text-orange-500'}`}>
          Lagerhållning inomhus
        </li>
      </Link>
      <Link href="/tjanster/lagerhallning_utomhus">
        <li className={`text-center w-full md:py-3 py-2  ${pathname === '/tjanster/lagerhallning_utomhus' ? 'bg-orange-500 text-white' : 'hover:text-orange-500'}`}>
          Lagerhållning utomhus
        </li>
      </Link>
      <Link href="/tjanster/hyra_av_forrad">
        <li className={`text-center w-full md:py-3 py-2  ${pathname === '/tjanster/hyra_av_forrad' ? 'bg-orange-500 text-white' : 'hover:text-orange-500'}`}>
          Hyra av förråd
        </li>
      </Link>
      <Link href="/tjanster/godshantering">
        <li className={`text-center w-full md:py-3 py-2  ${pathname === '/tjanster/godshantering' ? 'bg-orange-500 text-white' : 'hover:text-orange-500'}`}>
          Godshantering
        </li>
      </Link>
      <Link href="/tjanster/ovrigt">
        <li className={`text-center w-full md:py-3 py-2  ${pathname === '/tjanster/ovrigt' ? 'bg-orange-500 text-white' : 'hover:text-orange-500'}`}>
          Övrigt
        </li>
      </Link>
    </div>

        {/* Tab Content */}
        <div className="md:w-9/12">
        <section id="other" className="space-y-10">
    <img
      src="/imgs/Service1.webp"
      alt="Warehouse"
      width={1000}
      height={500}
      className="w-full h-auto mb-6"
    />
    <div className="space-y-10 md:pe-5">
      <div className="md:space-y-5 space-y-3">
        <h2 className="text-2xl font-bold">Dokumentation </h2>
        <p className="md:text-lg text-[#626262]">
          Att välja Pallhotellet för dina lagerbehov innebär att du inte bara
          får tillgång till flexibla och kostnadseffektiva lagerlösningar. Det
          innebär också att du får en partner som är engagerad i att lösa ditt
          företags unika utmaningar och hjälpa dig att optimera ditt lagerflöde.
        </p>
        <h2 className="text-2xl font-bold">Distribution</h2>
        <p className="md:text-lg text-[#626262]">
          När du väljer oss för dina lagerbehov kommer du att upplever fördelarna
          med optimerad lagerhantering. Genom att endast betala för det utrymme
          du faktiskt använder kan du optimera ditt lager och eliminera onödiga
          kostnader. Vi hjälper er gärna även med att hitta pålitliga och
          kontinuerliga distributionslösningar.
        </p>
        <h2 className="text-2xl font-bold">3pl lösningar</h2>
        <p className="md:text-lg text-[#626262]">
          Vi tar hand om hela ditt flöde från att hantera dina in- och
          utleveranser, distribution och documentation. Detta innebär att du kan
          lägga större fokus på ditt företags kärnverksamhet, vilket främjar
          effektivitet inom ditt företag. Dessutom är vårt erbjudande utformat
          för att vara så flexibelt som möjligt, vilket ger dig friheten att
          anpassa ditt lagerutrymme efter dina behov, då när du behöver det!
        </p>
      </div>

      <div className="border-t pt-8 mt-12 space-y-6 text-[#626262]">
        <h3 className="text-xl font-bold text-black">Flexibla tredjepartslogistik (3PL) lösningar i Motala</h3>
        <p>
          Att hantera logistik, lagerhållning och distribution på egen hand kan vara både tidskrävande och kostsamt för växande företag. Genom att överlåta er logistikkedja till oss på Pallhotellet får ni en professionell 3PL-partner som sköter allt från inkommande leveranser till slutlig distribution. Vi skräddarsyr lösningar utifrån era specifika behov och erbjuder fullständig flexibilitet.
        </p>
        
        <h4 className="text-lg font-semibold text-black">Våra heltäckande logistiktjänster omfattar:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Omfattande dokumentation:</strong> Vi sköter all nödvändig dokumentation, inklusive fraktsedlar, tullhandlingar och lagerrapportering för full spårbarhet.</li>
          <li><strong>Effektiv distribution:</strong> Vi samarbetar med ledande transportörer för att garantera snabba och säkra leveranser till era kunder i hela Norden.</li>
          <li><strong>Skräddarsydd 3PL:</strong> Från e-handelslogistik med plock och pack till industriella flöden – vi anpassar oss efter era system och rutiner.</li>
        </ul>

        <p>
          Med vår strategiska placering i Motala, Östergötland, har vi ett utmärkt utgångsläge för att distribuera varor över hela Sverige. Vi hjälper er att sänka era fasta logistikkostnader och omvandla dem till rörliga kostnader som följer er försäljningsvolym. Kontakta oss för att prata om hur vi kan optimera er verksamhet med effektiva 3PL-tjänster och pålitlig distribution.
        </p>
      </div>
    </div>
    <Link href="/offertforfragan">
      <button
        className="mt-10 flex items-center mx-auto md:mx-0 text-[#ff6300] hover:text-white
                 hover:bg-[#ff6300] border-[#ff6300] border-2 text-nowrap md:py-3 py-2 
                  px-3 md:px-4 lg:px-8  
            rounded-md"
      >
        Offertförfrågan
        <span className="bg-white rounded-full border-[#ff6300] border-2 p-1 ms-3">
          <IoArrowForward className="text-orange-500" size={23} />
        </span>
      </button>
    </Link>
  </section>
        </div>
      </section>
    </div>
  );
};

export default page;