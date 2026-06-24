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
          Hyra av förråd hos Pallhotellet
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
          <section id="rental" className="space-y-10">
            <img
              src="/imgs/Service3.webp"
              alt="Warehouse"
              width={1000}
              height={500}
              className="w-full h-auto mb-6"
            />
            <div className="space-y-10 md:pe-5">
              <div className="md:space-y-5 space-y-3">
                <h2 className="text-2xl font-bold">Hyra av säkra förråd på Pallhotellet</h2>
                <p className="md:text-lg text-[#626262]">
                  Vi kan erbjuda er olika typer av enskilda förråd. Storleken på dessa
                  varierar från 4m2 och uppåt. Vi kan även anpassa ditt nya förråd helt
                  efter era behov.
                </p>
              </div>

              <div className="border-t pt-8 mt-12 space-y-6 text-[#626262]">
                <h3 className="text-xl font-bold text-black">Hyr säkert förråd och self-storage i Motala</h3>
                <p>
                  Behöver du frigöra yta hemma eller på kontoret? Pallhotellet erbjuder flexibel förrådshyrning för både privatpersoner och företag i Motala. Våra förrådsenheter är rena, torra och uppvärmda, vilket gör dem perfekta för förvaring av möbler, flyttlådor, arkivmaterial eller säsongsutrustning.
                </p>
                
                <h4 className="text-lg font-semibold text-black">Varför hyra förråd hos oss?</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Flexibla storlekar:</strong> Hyr allt från mindre förvaringsboxar på 4 m² till stora lagerenheter anpassade efter din verksamhet.</li>
                  <li><strong>Hög säkerhet:</strong> Vår anläggning är utrustad med passerkontroll, modern kameraövervakning och larm för att skydda dina ägodelar.</li>
                  <li><strong>Enkel åtkomst:</strong> Som kund har du smidig tillgång till ditt förråd under generösa öppettider, med bra parkerings- och lastmöjligheter.</li>
                  <li><strong>Inga dolda avgifter:</strong> Tydliga hyresavtal med flexibla uppsägningstider som passar dina unika behov.</li>
                </ul>

                <p>
                  Att hyra förråd hos oss är ett enkelt sätt att få mer ordning i tillvaron. Vi hjälper dig gärna att beräkna hur stort utrymme du behöver så att du inte betalar för mer än nödvändigt. Kontakta oss idag för att boka ditt förråd eller för att få mer information om våra förvaringsmöjligheter.
                </p>
              </div>
            </div>
            
            <Link href="/offertforfragan">
              <button
                className="mt-10 flex items-center mx-auto md:mx-0 text-primary hover:text-white
                         hover:bg-primary border-primary border-2 text-nowrap md:py-3 py-2 
                          px-3 md:px-4 lg:px-8  
                    rounded-md"
              >
                Offertförfrågan
                <span className="bg-white rounded-full border-primary border-2 p-1 ms-3">
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