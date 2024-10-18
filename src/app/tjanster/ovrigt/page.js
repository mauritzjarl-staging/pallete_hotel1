"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { usePathname } from "next/navigation";

const page = () => {
    const pathname = usePathname(); 
  return (
    <div>
      <section className="relative bg-[url('/imgs/Frame5892.png')] bg-cover text-center bg-center md:h-[500px] h-[200px] pt-10 flex justify-center items-center">
        <p className="relative text-white font-bold px-5 text-3xl md:text-5xl text-center z-10">
        Övrigt
        </p>
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
    <Image
      src="/imgs/Service1.png"
      alt="Warehouse"
      width={1000}
      height={500}
      className="w-full h-auto mb-6"
      //  unoptimized={true} // Disable Next.js image optimization
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
          När du väljer oss för dina lagerbehov kommer du att uppleva fördelarna
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
    </div>
    <Link href="/offertförfrågan">
      <button
        className="mt-10 flex items-center mx-auto md:mx-0 text-[#ff6300] hover:text-white
                 hover:bg-[#ff6300] border-[#ff6300] border-2 text-nowrap md:py-3 py-2 
                  px-3 md:px-4 lg:px-8  
            rounded-md"
      >
        Offertförfrågan
        <span className="bg-white rounded-full border-[#ff6300] border-2 p-1 ms-3">
          <IoArrowForward color="orange" size={23} />
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