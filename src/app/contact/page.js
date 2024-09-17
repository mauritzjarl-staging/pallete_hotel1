import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
// import MapComponent from "../components/MapComponent";
import dynamic from "next/dynamic";


// Dynamically import MapComponent with SSR disabled
const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

const ContactPage = () => {
  return (
    <>
      <section className="flex items-center justify-center text-white bg-center bg-cover bg-[url('/imgs/contactus.png')] py-56">
        <div className=" mx-auto flex justify-center items-center h-full">
          <h1 className="text-white text-5xl font-bold">Kontakt</h1>
        </div>
      </section>
      <section className="h-[500px]">
          <MapComponent />
      </section>

      <section className="py-12 px-6 md:px-9 text-black w-full flex flex-col lg:flex-row gap-12 items-start justify-center">
        {/* Contact Information */}
        <div className="w-full lg:w-5/12 p-8">
          <h2 className="text-xl font-bold mb-1 mt-16">Kontakt oss</h2>
          <h3 className="text-lg font-semibold mb-4">Pallhotellet</h3>
          <div className="space-y-4 text-lg">
            <div className="flex items-center">
              <CiLocationOn size={20} />
              <p className="ml-4">Vickerkullavägen 2, 591 45 Motala</p>
            </div>
            <div className="flex items-center">
              <PiPhoneCallThin size={20} />
              <p className="ml-4">0141-21 50 44</p>
            </div>
            <div className="flex items-center">
              <AiOutlineMail size={20} />      
              <p className="ml-4">
                Email:{" "}
                <a
                  href="mailto:order@pallhotellet.se"
                  className="text-orange-500 hover:text-orange-300"
                >
                  order@pallhotelletet.se
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-9/12  p-8 ">
          <h2 className="text-3xl font-bold mb-8">Kontakta oss</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col">
              <input
                id="first-name"
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="Förnamn *"
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <input
                id="last-name"
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="Efternamn *"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <input
                id="email"
                type="email"
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="Email *"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <input
                id="phone"
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="Telefonnummer"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col sm:col-span-1">
              <input
                id="company"
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="Företag"
              />
            </div>

            {/* OrgNr */}
            <div className="flex flex-col sm:col-span-1">
              <input
                id="orgnr"
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="OrgNr"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col sm:col-span-2">
              <textarea
                id="message"
                rows={4}
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="Meddelande"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-4 rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition duration-300"
              >
                Skicka meddelande
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
