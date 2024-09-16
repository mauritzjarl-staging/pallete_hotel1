"use client";
import React, { useState } from 'react';
import { useEffect } from 'react';
import Image from "next/image";
import { IoArrowForward } from 'react-icons/io5';

// Define all tab content as separate components
const LagerhallningInomhus = () => (
        <section id="indoor" className='space-y-10'>
            <Image
                src="/imgs/Service5.png"
                alt="Warehouse"
                width={1000}
                height={500}
                unoptimized={true} // Disable Next.js image optimization
                className="w-full h-auto mb-6"
            />
            <div className="space-y-10 md:pe-5">
                <div className="md:space-y-10 space-y-7">
                    <h2 className="text-2xl font-bold">Lagerhållning inomhus</h2>
                    <p className='md:text-lg text-[#626262]'>
                        Lagerhåll  dina varor i något av våra lager! Våra lager är placerade mitt i  Sverige, Motala Östergötland och ligger bra till för distribution till  de flesta storstadsregioner i Sverige.
                        På våra lager förvaras produkter i pallställ i långa rader och på höga  höjder. Detta lager är perfekt för kunder inom såväl grossist verksamhet  som industri, e-handel etc. Pallagring passar bra med snabbrörliga  produkter, men även som buffertlager
                    </p>
                    <p className='md:text-lg text-[#626262]'>
                        Vi kan förutom pallagring erbjuda lagring av skrymmande gods och stora  paket. Vi förfogar över stora lagerytor så vi kan alltid anpassa det  till just era önskemål och krav.
                        På våra lager finns bade travers, gaffel lastare, m.fl. Vi har lastkaj,  kan lossa lastbilar utanför lastkajen eller använda vår inomhus travers.
                        Prisförslag fr.49kr /pall och mån
                    </p>
                </div>
            </div>
            <button
                className="bg-[#ff6300] flex items-center hover:border-white
         text-white border-2 border-[#ff6300] text-nowrap py-2 md:py-3 font-bold
          px-3 md:px-5 lg:px-10 text-center rounded-md"
            >
                Offertförfrågan <span className="bg-white rounded-full p-1 ms-3"><IoArrowForward color="black" size={20} /></span>
            </button>
        </section>
);

// Define the content for other tabs similarly...
const LagerhallningUtomhus = () => (
        <section  id="outdoor" className='space-y-10'>
            <Image
                src="/imgs/Service4.png"
                alt="Warehouse"
                width={1000}
                height={500}
                className="w-full h-auto mb-6"
                 unoptimized={true} // Disable Next.js image optimization
            />
            <div className="space-y-10 md:pe-5">
                <div className="md:space-y-10 space-y-7">
                    <h2 className="text-2xl font-bold">Lagerhållning utomhus</h2>
                    <p className='md:text-lg text-[#626262]'>
                        Vi har plats för containers, olika typer av skrymmande gods eller annat  som kan förvaras utomhus. Vi förfogar över mer än 100.000m2 yta utomhus  som kan användas till lagring. Våra utomhus lagerplatser är framförallt  belägna i Motala, Östergötland.
                    </p>
                </div>
            </div>
            <button
                className="bg-[#ff6300] flex items-center hover:border-white
         text-white border-2 border-[#ff6300] text-nowrap py-2 md:py-3 font-bold
          px-3 md:px-5 lg:px-10 text-center rounded-md"
            >
                Offertförfrågan <span className="bg-white rounded-full p-1 ms-3"><IoArrowForward color="black" size={20} /></span>
            </button>
        </section>
);



const HyraAvForbind = () => (
        <section id="rental" className='space-y-10'>
            <Image
                src="/imgs/Service3.png"
                alt="Warehouse"
                width={1000}
                height={500}
                className="w-full h-auto mb-6"
                 unoptimized={true} // Disable Next.js image optimization
            />
            <div className="space-y-10 md:pe-5">
                <div className="md:space-y-10 space-y-7">
                    <h2 className="text-2xl font-bold"> Hyra av förråd</h2>
                    <p className='md:text-lg text-[#626262]'>
                        Vi kan erbjuda er olika typer av enskilda förråd. Storleken på dessa  varierar från 4m2 och uppåt. Vi kan även anpassa ditt nya förråd helt  efter era behov.
                    </p>
                </div>
            </div>
            <button
                className="bg-[#ff6300] flex items-center hover:border-white
         text-white border-2 border-[#ff6300] text-nowrap py-2 md:py-3 font-bold
          px-3 md:px-5 lg:px-10 text-center rounded-md"
            >
                Offertförfrågan <span className="bg-white rounded-full p-1 ms-3"><IoArrowForward color="black" size={20} /></span>
            </button>
        </section>
);

// kasjhcvsa

const Godshantering = () => (
        <section  id="cargo" className='space-y-10'>
            <Image
                src="/imgs/Service2.png"
                alt="Warehouse"
                width={1000}
                height={500}
                className="w-full h-auto mb-6"
                 unoptimized={true} // Disable Next.js image optimization
            />
            <div className="space-y-10 md:pe-5">
                <div className="md:space-y-10 space-y-7">
                    <h2 className="text-2xl font-bold">Godshantering</h2>
                    <p className='md:text-lg text-[#626262]'>
                        I samband med lagerhållning hos oss kan vår personal hjälpa till med  hantering av ordrar, bokning, lossning/lastning samt ankomstkontroll.  Upplägget gör vi tillsammans med er för att får en helhetslösning som är  den bästa för just dig och dina behov.
                    </p>
                </div>
            </div>
            <button
                className="bg-[#ff6300] flex items-center hover:border-white
     text-white border-2 border-[#ff6300] text-nowrap py-2 md:py-3 font-bold
      px-3 md:px-5 lg:px-10 text-center rounded-md"
            >
                Offertförfrågan <span className="bg-white rounded-full p-1 ms-3"><IoArrowForward color="black" size={20} /></span>
            </button>
        </section>
);

const Ovrigt = () => (
        <section  id="other" className='space-y-10'>
            <Image
                src="/imgs/Service1.png"
                alt="Warehouse"
                width={1000}
                height={500}
                className="w-full h-auto mb-6"
                 unoptimized={true} // Disable Next.js image optimization
            />
            <div className="space-y-10 md:pe-5">
                <div className="md:space-y-10 space-y-7">
                    <h2 className="text-2xl font-bold">Dokumentation </h2>
                    <p className='md:text-lg text-[#626262]'>
                        Att välja Pallhotellet för dina lagerbehov innebär att du inte bara får  tillgång till flexibla och kostnadseffektiva lagerlösningar. Det innebär  också att du får en partner som är engagerad i att lösa ditt företags  unika utmaningar och hjälpa dig att optimera  ditt lagerflöde.
                    </p>
                    <h2 className="text-2xl font-bold">Distribution</h2>
                    <p className='md:text-lg text-[#626262]'>
                        När du väljer oss för dina lagerbehov kommer du att uppleva fördelarna  med optimerad lagerhantering. Genom att endast betala för det utrymme du  faktiskt använder kan du optimera ditt lager och eliminera onödiga  kostnader. Detta kan vara särskilt fördelaktigt  för företag med varierande lagerbehov eller för de som bedriver  säsongsbaserad verksamhet
                    </p>
                    <h2 className="text-2xl font-bold">3pl lösningar</h2>
                    <p className='md:text-lg text-[#626262]'>
                        Vårt engagemang att hantera dina in- och utleveranser innebär att du kan  lägga större fokus på ditt företags kärnverksamhet, vilket främjar  effektivitet inom ditt företag. Dessutom är vårt erbjudande utformat för  att vara så flexibelt som möjligt, vilket ger  dig friheten att anpassa ditt lagerutrymme efter dina behov, när du  behöver det
                    </p>
                </div>
            </div>
            <button
                className="bg-[#ff6300] flex items-center hover:border-white
     text-white border-2 border-[#ff6300] text-nowrap py-2 md:py-3 font-bold
      px-3 md:px-5 lg:px-10 text-center rounded-md"
            >
                Offertförfrågan <span className="bg-white rounded-full p-1 ms-3"><IoArrowForward color="black" size={20} /></span>
            </button>
        </section>
);

const Page = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Define the tabs with their labels and corresponding components
    const tabs = [
        { id: 0, label: 'Lagerhållning inomhus', component: <LagerhallningInomhus /> },
        { id: 1, label: 'Lagerhållning utomhus', component: <LagerhallningUtomhus /> },
        { id: 2, label: 'Hyra av förbind', component: <HyraAvForbind /> },
        { id: 3, label: 'Godshantering', component: <Godshantering /> },
        { id: 4, label: 'Övrigt', component: <Ovrigt /> },
    ];

    useEffect(() => {
        const hash = window.location.hash.replace("#", ""); // Get the hash from the URL (without the #)
        
        const tabMap = {
            indoor: 0,      // Map each hash to the corresponding tab index
            outdoor: 1,
            rental: 2,
            cargo: 3,
            other: 4,
        };
    
        if (hash && tabMap[hash] !== undefined) {
            setActiveTab(tabMap[hash]);  // Set the tab based on the hash
        }
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-[url('/imgs/Frame5892.png')] bg-cover text-center bg-center h-[500px] flex justify-center items-center">
                <p className="relative text-white font-bold text-3xl md:text-5xl text-center z-10">
                {tabs[activeTab].label}
                </p>
            </section>

            {/* Tab Section */}
            <section className="md:my-32 my-10 px-4 md:px-20 md:flex md:space-x-8">
                {/* Tab Navigation */}
                <div className="md:w-3/12 bg-[#F3F3F3] h-full space-y-5 md:text-lg py-10 my-10 md:my-0 px-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex justify-center w-full md:py-3 py-2 ${activeTab === tab.id ? 'bg-orange-500 text-white' : 'border-transparent text-black hover:text-orange-500'
                                } focus:outline-none`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="md:w-9/12">
                    {tabs[activeTab].component}
                </div>
            </section>
        </div>
    );
};

export default Page;
