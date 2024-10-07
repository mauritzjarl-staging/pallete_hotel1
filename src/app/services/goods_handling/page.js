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
        Godshantering
        </p>
      </section>

      <section className="md:my-32 my-10 px-4 md:px-20 md:flex md:space-x-8">
        {/* Tab Navigation */}
           {/* Tab Navigation */}
           <div className="md:w-3/12 bg-[#F3F3F3] h-full space-y-5 md:text-lg py-10 my-10 md:my-0 px-1 list-none">
      <Link href="/services/indoor_storage">
        <li className={`text-center w-full md:py-3 py-2  ${pathname === '/services/indoor_storage' ? 'bg-orange-500 text-white' : 'hover:text-orange-500'}`}>
          Lagerhållning inomhus
        </li>
      </Link>
      <Link href="/services/outdoor_storage">
        <li className={`text-center w-full md:py-3 py-2  ${pathname === '/services/outdoor_storage' ? 'bg-orange-500 text-white' : 'hover:text-orange-500'}`}>
          Lagerhållning utomhus
        </li>
      </Link>
      <Link href="/services/storage_rent">
        <li className={`text-center w-full md:py-3 py-2  ${pathname === '/services/storage_rent' ? 'bg-orange-500 text-white' : 'hover:text-orange-500'}`}>
          Hyra av förråd
        </li>
      </Link>
      <Link href="/services/goods_handling">
        <li className={`text-center w-full md:py-3 py-2  ${pathname === '/services/goods_handling' ? 'bg-orange-500 text-white' : 'hover:text-orange-500'}`}>
          Godshantering
        </li>
      </Link>
      <Link href="/services/miscellaneous">
        <li className={`text-center w-full md:py-3 py-2  ${pathname === '/services/miscellaneous' ? 'bg-orange-500 text-white' : 'hover:text-orange-500'}`}>
          Övrigt
        </li>
      </Link>
    </div>

        {/* Tab Content */}
        <div className="md:w-9/12">
        <section id="cargo" className="space-y-10">
    <Image
      src="/imgs/Service2.png"
      alt="Warehouse"
      width={1000}
      height={500}
      className="w-full h-auto mb-6"
      //  unoptimized={true} // Disable Next.js image optimization
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
    </div>
    <Link href="/quotation">
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