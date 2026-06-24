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
          Godshantering
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
          <section id="cargo" className="space-y-10">
            <img
              src="/imgs/Service2.webp"
              alt="Warehouse"
              width={1000}
              height={500}
              className="w-full h-auto mb-6"
            />
            <div className="space-y-10 md:pe-5">
              <div className="md:space-y-5 space-y-3">
                <h2 className="text-2xl font-bold">Godshantering</h2>
                <p className="md:text-lg text-[#626262]">
                  I samband med lagerhållning hos oss kan vår personal hjälpa till med
                  hantering av ordrar, bokning, lossning/lastning samt ankomstkontroll.
                  Upplägget gör vi tillsammans med er för att får en helhetslösning som
                  är den bästa för just dig och dina behov.
                </p>
              </div>

              <div className="border-t pt-8 mt-12 space-y-6 text-[#626262]">
                <h3 className="text-xl font-bold text-black">Varför välja Pallhotellet för godshantering i Motala?</h3>
                <p>
                  Effektiv och professionell logistik är nyckeln till en framgångsrik verksamhet. När du överlåter din godshantering till oss på Pallhotellet, kan du lita på att dina varor tas om hand med största noggrannhet. Vårt team i Motala har lång erfarenhet av allt från godsmottagning och lossning till noggrann ankomstkontroll och avvikelsehantering.
                </p>
                
                <h4 className="text-lg font-semibold text-black">Våra tjänster inom godshantering omfattar:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Lossning och lastning:</strong> Vi hanterar både containers, trailers och distributionsbilar snabbt och säkert.</li>
                  <li><strong>Ankomstkontroll:</strong> Vi kontrollerar godsets skick, stämmer av mot fraktsedlar och dokumenterar eventuella transportskador direkt.</li>
                  <li><strong>Orderplock och packning:</strong> Behöver du plocka enskilda artiklar eller packa om pallar inför vidareleverans? Vi ordnar det effektivt.</li>
                  <li><strong>Lagerhantering & Inventering:</strong> Vi håller koll på ditt lagersaldo och ser till att dina produkter lagras under optimala förhållanden.</li>
                </ul>

                <p>
                  Vi arbetar flexibelt och anpassar oss efter dina unika processer och system. Genom att integrera vår personal och vårt lager i din logistikkedja kan du minska dina fasta kostnader och fokusera på din kärnverksamhet. Kontakta oss gärna för att diskutera hur vi kan underlätta ditt logistikflöde med anpassad godshantering.
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