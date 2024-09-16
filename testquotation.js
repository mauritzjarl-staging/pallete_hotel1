"use client";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import dynamic from "next/dynamic";

// Dynamically import MapComponent with SSR disabled
const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

const QuoteForm = () => {
  const [checkedSections, setCheckedSections] = useState({
    kallager: false,
    varmlager: false,
    utomhusforvaring: false,
    forrad: false,
    gaffeltruck: false,
    container: false,
    ompackning: false,
    handtruck: false,
    gaffeltruck2: false,
  });

  const handleCheckboxChange = (section) => {
    setCheckedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

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
                  <input
                    type="checkbox"
                    className="mr-2 size-6"
                    checked={checkedSections.kallager}
                    onChange={() => handleCheckboxChange("kallager")}
                  />
                  <p>Vill hyra pallplatser INOMHUS I KALLAGER</p>
                </label>

                {checkedSections.kallager && (
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
                )}
              </div>

              <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

              {/* Varmlager */}
              <div className="mb-6">
                <p className="mb-4 font-semibold">2.2 Varmlager</p>
                <label className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    checked={checkedSections.varmlager}
                    onChange={() => handleCheckboxChange("varmlager")}
                    className="mr-2 size-6"
                  />
                  Vill hyra pallplatser INOMHUS I UPPVÄRMT LAGER
                </label>

                {checkedSections.varmlager && (
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
                )}
              </div>

              <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

              {/* Utomhusförvaring */}
              <h2 className="mb-4 font-semibold">2.3 Utomhusförvaring</h2>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="utomhusforvaring"
                  checked={checkedSections.utomhusforvaring}
                  onChange={() => handleCheckboxChange("utomhusforvaring")}
                  className="mr-2 size-6"
                />
                <label htmlFor="utomhusforvaring">
                  Vill hyra av inhägnat LAGERYTA UTOMHUS
                </label>
              </div>

              {checkedSections.utomhusforvaring && (
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
              )}

              <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

              {/* Hyra av förråd */}
              <h2 className="mb-4 font-semibold">2.4 Hyra av förråd</h2>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  checked={checkedSections.forrad}
                  onChange={() => handleCheckboxChange("forrad")}
                  id="forrad"
                  className="mr-2 size-6"
                />
                <label htmlFor="forrad">Vill hyra INOMHUSFÖRRÅD</label>
              </div>

              {checkedSections.forrad && (
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
              )}
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
              </select>
              <select className="p-2 h-12 border rounded focus:outline-orange-500">
                <option>Antal utlastningar i månaden</option>
              </select>
            </div>

            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

            {/* Lossning, ompackning */}
            <h3 className="mb-4 font-semibold">3.2 Lossning, ompackning</h3>
            <div className="mb-6 space-y-5">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={checkedSections.gaffeltruck}
                  onChange={() => handleCheckboxChange("gaffeltruck")}
                  id="gaffeltruck"
                  className="mr-2 size-6"
                />
                <label htmlFor="gaffeltruck">
                  Lossning/lastning lastbil med gaffeltruck önskas
                </label>
                <div>
                  {checkedSections.gaffeltruck && (
                    <input
                      type="text"
                      placeholder="Antal timmar"
                      className="p-2 border focus:outline-orange-500 rounded"
                    />
                  )}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={checkedSections.container}
                  onChange={() => handleCheckboxChange("container")}
                  id="container"
                  className="mr-2 size-6"
                />
                <label htmlFor="container">
                  Lossning/lastning av container önskas
                </label>
                <div>
                  {checkedSections.container && (
                    <input
                      type="text"
                      placeholder="Antal timmar"
                      className="p-2 border focus:outline-orange-500 rounded"
                    />
                  )}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={checkedSections.ompackning}
                  onChange={() => handleCheckboxChange("ompackning")}
                  id="ompackning"
                  className="mr-2 size-6"
                />
                <label htmlFor="ompackning">Ompackning och plock önskas</label>
                <div>
                  {checkedSections.ompackning && (
                    <input
                      type="text"
                      placeholder="Antal timmar"
                      className="p-2 border focus:outline-orange-500 rounded"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* More sections can be updated similarly by adding their corresponding keys and handling */}
          </form>
        </div>
      </section>
    </>
  );
};

export default QuoteForm;
