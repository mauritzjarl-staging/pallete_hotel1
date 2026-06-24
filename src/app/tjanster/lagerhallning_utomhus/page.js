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
          Lagerhållning utomhus
        </h1>
      </section>

      <section className="md:my-32 my-10 px-4 md:px-20 md:flex md:space-x-8">
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
          <section id="outdoor" className="space-y-10">
            <img
              src="/imgs/Service4.webp"
              alt="Warehouse"
              width={1000}
              height={500}
              className="w-full h-auto mb-6"
            />
            <div className="space-y-10 md:pe-5">
              <div className="md:space-y-5 space-y-3">
                <h2 className="text-2xl font-bold">Lagerhållning utomhus</h2>
                <p className="md:text-lg text-[#626262]">
                  Vi have plats för olika typer av skrymmande gods eller annat som kan
                  förvaras utomhus. Vi förfogar över mer än 100.000m2 utomhusyta som kan
                  användas till lagring. Våra utomhuslagerplatser är belägna i Motala,
                  Östergötland.
                </p>
              </div>

              <div className="border-t pt-8 mt-12 space-y-6 text-[#626262]">
                <h3 className="text-xl font-bold text-black">Säker utomhusförvaring för stora volymer i Motala</h3>
                <p>
                  Behöver din verksamhet lagra material som inte kräver inomhustemperaturer? Vår expansiva utomhusyta på över 100 000 m² i Motala erbjuder den perfekta ytan för skrymmande gods, byggmaterial, fordon, containers och andra storskaliga produkter. Hela utomhuslagret är inhägnat, belyst och övervakat för att säkerställa högsta möjliga trygghet för dina tillgångar.
                </p>
                
                <h4 className="text-lg font-semibold text-black">När passar utomhuslager hos Pallhotellet?</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Säsongsvaror:</strong> Perfekt för förvaring av maskiner, sommar- eller vinterutrustning under delar av året.</li>
                  <li><strong>Bygg och anläggning:</strong> Lagra stålkonstruktioner, rör, betongelement och tunga råvaror inför era kommande projekt.</li>
                  <li><strong>Containeruppställning:</strong> Goda möjligheter till uppställning och rangering av containrar på våra asfalterade och hårdgjorda ytor.</li>
                  <li><strong>Kostnadseffektivitet:</strong> Utomhuslagring är ett betydligt mer prisvärt alternativ för gods som tål skiftande väderlekar.</li>
                </ul>

                <p>
                  Vi erbjuder flexibla avtalsperioder och kan snabbt utöka er lagringsyta i takt med att era behov växer. Vår personal finns på plats för att assistera vid lossning och lastning med tunga truckar och maskiner. Kontakta oss för att få ett anpassat prisförslag för utomhusförvaring.
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