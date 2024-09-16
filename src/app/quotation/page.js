import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBorderColor } from "react-icons/md";
// import MapComponent from "../components/MapComponent";
import dynamic from "next/dynamic";

// Dynamically import MapComponent with SSR disabled
const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

const QuoteForm = () => {
  return (
    <>
      <section className="flex items-center justify-center text-white bg-center bg-cover bg-[url('/imgs/contactus.png')] py-56">
        <div className=" mx-auto flex justify-center items-center h-full">
          <h1 className="text-white text-5xl font-bold">Offertförfrågan</h1>
        </div>
      </section>

      <section className="h-[500px]">
        <MapComponent />
      </section>

      <section className="py-12 px-6 md:px-9 text-black w-full flex flex-col lg:flex-row gap-12 items-start justify-center">
        <div className="w-full lg:w-4/12 px-8">
          <h2 className="text-xl font-bold mb-1 mt-16">Kontakt</h2>
          <h3 className="text-lg font-semibold mb-4">Pallhotellet</h3>
          <div className="space-y-4 text-lg">
            <div className="flex items-center">
              <CiLocationOn size={20} />
              <p className="ml-4">Viskrullavägen 2, 591 465 Motala</p>
            </div>
            <div className="flex items-center">
              <PiPhoneCallThin size={20} />
              <p className="ml-4">Tel: 0141-21 50 44</p>
            </div>
            <div className="flex items-center">
              <AiOutlineMail size={20} />
              <p className="ml-4">
                Email:{" "}
                <a
                  href="mailto:order@pallhotellet.se"
                  className="text-orange-500 hover:text-orange-300"
                >
                  order@pallhotellet.se
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-10/12 px-8 ">
          <h2 className="text-3xl font-bold mb-8">Offertförfrågan</h2>
          <form className="flex flex-col gap-6">
            {/* Contact Form */}
            {/* 1. Företagsuppgifter */}
            <div>
              <h2 className="text-lg font-bold mb-6"> 1. Företagsuppgifter </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Namn"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Efternamn"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
                <input
                  name="phone"
                  placeholder="Telefon"
                  className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Företag"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="orgNr"
                  placeholder="OrgNr"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="border-t-2 border-[#A0ABBB] my-6"></div>
            </div>

            {/* 2. Hyra av lageryta */}
            <div>
              <h2 className="text-lg font-bold mb-4">2. Hyra av lageryta</h2>
              {/* Kallager */}
              <p className="mb-4 font-semibold">2.1 Kallager</p>
              <div className="mb-6">
                <label className="flex items-center mb-3">
                  <input type="checkbox" className="mr-2 size-6" />
                  <p>Vill hyra pallplatser INOMHUS I KALLAGER</p>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="number"
                    name="pallplatserKallager"
                    placeholder="Antal pallplatser"
                    className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                  />
                  <input
                    type="number"
                    name="monthsPerYearKallager"
                    placeholder="Antal månader per år"
                    className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                  />
                  <input
                    type="date"
                    name="fromDateKallager"
                    placeholder="Från och med"
                    className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                  />
                  <input
                    type="date"
                    name="toDateKallager"
                    placeholder="Till och med"
                    className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                  />
                  <input
                    type="text"
                    name="Pallvikt/snitt"
                    placeholder="Pallvikt/snitt"
                    className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                  />
                  <input
                    type="text"
                    name="Antalkragar"
                    placeholder="Antal kragar"
                    className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                  />
                </div>
              </div>
              <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>
              {/* Varmager */}
              <div className="mb-6 ">
                <p className="mb-4 font-semibold">2.2 Varmlager </p>
                <label className="flex items-center mb-3">
                  <input type="checkbox" className="mr-2 size-6" />
                  Vill hyra pallplatser INOMHUS I UPPVÄRMT LAGER
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="number"
                    name="pallplatserVarmager"
                    placeholder="Antal pallplatser"
                    className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                  />
                  <input
                    type="number"
                    name="monthsPerYearVarmager"
                    placeholder="Antal månader per år"
                    className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                  />
                  <input
                    type="date"
                    name="fromDateVarmager"
                    placeholder="Från och med"
                    className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                  />
                  <input
                    type="date"
                    name="toDateVarmager"
                    placeholder="Till och med"
                    className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                  />
                </div>
              </div>
              <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>
              {/* Section 2.3 - Utomhusförvaring */}
              <h2 className="mb-4 font-semibold">2.3 Utomhusförvaring</h2>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="utomhusforvaring"
                  className="mr-2 size-6"
                />

                <label htmlFor="utomhusforvaring">
                  Vill hyra av inhägnat LAGERYTA UTOMHUS
                </label>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Yta i m2"
                  className="p-2 border rounded focus:outline-orange-500"
                />
                <input
                  type="text"
                  placeholder="Höjd"
                  className="p-2 border rounded focus:outline-orange-500"
                />
                <input
                  type="text"
                  placeholder="Bredd"
                  className="p-2 border rounded focus:outline-orange-500"
                />
                <input
                  type="text"
                  placeholder="Längd"
                  className="p-2 border rounded focus:outline-orange-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <input
                  type="date"
                  placeholder="Från och med"
                  className="p-2 border rounded focus:outline-orange-500"
                />
                <input
                  type="date"
                  placeholder="Till och med"
                  className="p-2 border rounded focus:outline-orange-500"
                />
                <select className="p-2 border rounded focus:outline-orange-500">
                  <option>Typ av gods</option>
                  <option>Skrymmande</option>
                  <option>Ej skrymmande</option>
                </select>
              </div>
              <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>
              {/* Section 2.4 - Hyra av förråd */}
              <h2 className="mb-4 font-semibold ">2.4 Hyra av förråd</h2>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="forrad" className="mr-2 size-6" />
                <label htmlFor="forrad">Vill hyra INOMHUSFÖRRÅD</label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Ytan i m2"
                  className="p-2 border rounded focus:outline-orange-500"
                />
                <input
                  type="date"
                  placeholder="Från och med"
                  className="p-2 border rounded focus:outline-orange-500"
                />
                <input
                  type="date"
                  placeholder="Till och med"
                  className="p-2 border rounded focus:outline-orange-500"
                />
              </div>
            </div>
            <div className="border-t-2 border-[#A0ABBB] my-6"></div>

            {/* Section 3 - Inlastning / utlastning */}
            <h2 className="text-lg font-semibold mb-2">
              3. Inlastning / utlastning
            </h2>
            <p className="mb-4 font-semibold">
              3.1 Hur ofta skall godset lastas in och ut?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <select className="p-2 h-12 border rounded focus:outline-orange-500">
                <option>Antal inlastningar i månaden</option>
                {/* Add more options as needed */}
              </select>
              <select className="p-2 h-12 border rounded focus:outline-orange-500">
                <option>Antal utlastningar i månaden</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>
            {/* Section 3.2 - Lossning, ompackning */}
            <h3 className="mb-4 font-semibold">3.2 Lossning, ompackning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="gaffeltruck"
                  className="mr-2 size-6   "
                />
                <label htmlFor="gaffeltruck">
                  Lossning/lastning lastbil med gaffeltruck önskas
                </label>
              </div>
              <input
                type="text"
                placeholder="Antal timmar"
                className="p-2 border focus:outline-orange-500 rounded"
              />

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="container"
                  className="mr-2 size-6 "
                />
                <label htmlFor="container">
                  Lossning/lastning av container önskas
                </label>
              </div>
              <input
                type="text"
                placeholder="Antal timmar"
                className="p-2 focus:outline-orange-500 border rounded"
              />

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="ompackning"
                  className="mr-2 size-6"
                />
                <label htmlFor="ompackning">Ompackning och plock önskas</label>
              </div>
              <input
                type="text"
                placeholder="Antal timmar"
                className="p-2 focus:outline-orange-500 border rounded"
              />
            </div>
            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>
            {/* Additional Checkboxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="containerhandling"
                  className="mr-2 size-6"
                />

                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                <label htmlFor="containerhandling">
                  Containerhantering/packetering
                </label>
                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>
              </div>
              <div></div> {/* Empty column */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="skrymmande"
                  className="mr-2 size-6 "
                />
                <label htmlFor="skrymmande">Hantering av skrymmande gods</label>
              </div>
              <div></div> {/* Empty column */}
            </div>

            {/* Section 3.3 - Redskap och maskiner */}
            
            <h3 className="text-md font-semibold mb-4">
              3.3 Redskap och maskiner
            </h3>
            <div className="flex flex-col mb-6">

              <div className="flex my-5">
                <div className="md:w-1/2">
                <input
                  type="checkbox"
                  id="handtruck"
                  className="mr-2 size-6"
                />
                <label htmlFor="handtruck">Handtruck önskas</label>
                </div>
                <input
                  type="text"
                  placeholder="Antal timmar"
                  className="p-2 border focus:outline-orange-500 rounded md:w-1/2 "
                />
              </div>

              <div className="flex my-5">
                <div className="md:w-1/2">
                  <input
                    type="checkbox"
                    id="gaffeltruck2"
                    className="mr-2 size-6   "
                  />
                  <label htmlFor="gaffeltruck2">Gaffeltruck önskas</label>
                </div>
                <div className="md:w-1/2">
                  <input
                    type="text"
                    placeholder="Antal timmar"
                    className="p-2 border focus:outline-orange-500 rounded"
                  />
                </div>
              </div>

              <div className="flex my-5">
                <div className="md:w-1/2">
                  <input
                    type="checkbox"
                    id="travers"
                    className="mr-2 size-6"
                  />
                  <label htmlFor="travers">Travers önskas (max 7ton)</label>
                </div>
                <div className="md:w-1/2">
                  <input
                    type="text"
                    placeholder="Antal timmar"
                    className="p-2 border focus:outline-orange-500 rounded"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="bg-white w-full">
                <h2 className="text-lg font-bold mb-6 text-gray-900">
                  4. Kringtjänster
                </h2>

                {/* First Section */}
                <div className="mb-4 flex">
                  <label className="flex items-center md:w-1/2 ">
                    <input type="checkbox" className="form-checkbox size-6 me-2" />
                    <span>Hjälp med dokumentation föradrar</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Antal timmar"
                    className="mt-2 p-2 border rounded  focus:border-orange-500 md:w-1/2 "
                  />
                </div>
                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                {/* Second Section */}

                <div className="mb-4 flex">
                  <label className="flex items-center md:w-1/2">
                    <input type="checkbox" className="form-checkbox size-6 me-2" />
                    <span>Orderhantering & inköp</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Antal timmar"
                    className="mt-2  p-2 border rounded  focus:border-orange-500 md:w-1/2"
                  />
                </div>



                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>
                {/* Third Section */}
                <div className="mb-4">
                  <label className="md:flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox size-6" />
                    <span>Upphandling / hantering av gods orders</span>
                  </label>
                  <div className="flex space-x-4 m-7">
                    <input
                      type="text"
                      placeholder="Upphandlingsprocess"
                      className=" p-2 border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Leveransmetod"
                      className=" p-2 border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>
                {/* Fourth Section */}
                <div className="mb-4 md:flex py-4 justify-between">
                  <label className="flex items-center space-x-4">
                    <input type="checkbox" className="form-checkbox size-7" />
                    <span>
                      Behöver hjälp för kringfunktioner såsom montering,
                      underhåll och etc. Kontakta oss gärna för mer info!
                    </span>
                  </label>
                </div>

                {/* Fifth Section */}
                <div className="mb-6  py-4">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox size-6" />
                    <span>
                      Behöver förslag på en komplett lösning, kontakta oss gärna
                      för mer info!
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white py-3 md:w-full rounded-lg hover:bg-orange-600"
                  >
                    Skicka In
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default QuoteForm;