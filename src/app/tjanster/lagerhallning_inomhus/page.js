
"use client"
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
          Lagerhållning inomhus
        </p>
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
          <section id="indoor" className="space-y-10">
            <Image
              src="/imgs/Service5.png"
              alt="Warehouse"
              width={1000}
              height={500}
              // unoptimized={true}
              className="w-full h-auto mb-6"
            />
            <div className="space-y-10 md:pe-5">
              <div className="md:space-y-5 space-y-3">
                <h2 className="text-2xl font-bold">Lagerhållning inomhus</h2>
                <p className="md:text-lg text-[#626262]">
                  Lagerhåll dina varor i något av våra lager! Våra lager är
                  placerade mitt i Sverige, Motala Östergötland, och ligger bra
                  till för distribution till de flesta storstadsregioner i
                  Sverige.
                </p>
                <p className="md:text-lg text-[#626262]">
                  På våra lager förvaras produkter i pallställ i långa rader och
                  på höga höjder. Våra lager lämpar sig utmärkt för kunder inom
                  såväl grossistverksamhet som industri, e-handel etc.
                  Pallagring passar även bra buffertlager Vi kan förutom
                  pallagring erbjuda lagring av skrymmande gods och stora paket.
                </p>
                <p className="md:text-lg text-[#626262]">
                  Vi förfogar över stora lagerytor så vi kan alltid anpassa det
                  till just era önskemål och krav. På våra lager finns bade
                  lastkaj, travers, gaffeltruck, m.fl. Prisförslag fr.59kr /pall
                  och mån
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
