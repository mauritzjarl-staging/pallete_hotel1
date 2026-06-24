"use client";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const QuoteForm = () => {
  // Initial form state
  const initialFormState = {
    // Main fields
    name: "",
    aftername: "",
    email: "",
    telephone: "",
    foretag: "",
    orgnr: "",

    // Checkbox: kallager
    kallager: {
      isChecked: false,
      antalpallplaster: "", // Number of pallet places
      snitt: "", // Average
      antalKragar: "", // Number of collars
      franOchMed: null, // From date
      tillOchMed: null, // To date
    },

    // Checkbox: varmlager
    varmlager: {
      isChecked: false,
      antalpallplaster: "",
      snitt: "",
      antalKragar: "",
      franOchMed: null,
      tillOchMed: null,
    },

    // Checkbox: utomhusforvaring
    utomhusforvaring: {
      isChecked: false,
      ytaIM2: "", // Area in m²
      hojd: "", // Height
      bredd: "", // Width
      langd: "", // Length
      franOchMed: null,
      tillOchMed: null,
      typAvGods: "", // Type of goods (dropdown selection)
    },

    // Checkbox: hyra av forrad
    hyraAvForrad: {
      isChecked: false,
      ytanIM2: "", // Area in m²
      franOchMed: null,
      tillOchMed: null,
    },

    // tjanster without subfields
    tjanster: {
      // 3.1 Lossning, ompackning
      lossningLastbilGaffeltruckOnskas: false,
      lossningLastningContainerOnskas: false,
      ompackningPlockOnskas: false,
      containerhanteringPacketering: false,
      hanteringSkrymmandeGods: false,

      // 3.2 Redskap och maskiner
      handtruckOnskas: false,
      gaffeltruckOnskas: false,
      traversOnskas: false,

      // Kringtjänster
      hjalpDokumentationOnskas: false,
      hjalpOrderhanteringOnskas: false,
      behoverHjalpKringtjansterMerInfo: false,
      behoverForslagKomplett3plLosning: false,
    },
  };

  const [formState, setFormState] = useState(initialFormState);

  // Loading state to manage submission status
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (section, field) => {
    if (field) {
      // For tjanster and nested fields
      setFormState((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: !prevState[section][field],
        },
      }));
    } else {
      // For main checkboxes
      setFormState((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          isChecked: !prevState[section].isChecked,
        },
      }));
    }
  };

  const handleInputChange = (section, field, value) => {
    if (field) {
      setFormState((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: value,
        },
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [section]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Disable the submit button

    try {
      const response = await fetch("/api/offert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        // Show success toast
        toast.success("Tack för ditt mail, vi kontaktar dig inom kort!");

        // Clear the form by resetting the form state to initial values
        setFormState(initialFormState);
      } else {
        // Show error toast with response status text
        toast.error("Fel: " + response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error toast
      toast.error("Ett fel inträffade. Försök igen.");
    } finally {
      setLoading(false); // Re-enable the submit button
    }
  };

  return (
    <>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <section className="flex items-center justify-center text-white bg-center bg-cover bg-[url('/imgs/contactus.webp')] md:py-56 pt-32 pb-20">
        <div className="mx-auto flex justify-center items-center h-full">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Offertförfrågan - Tjänster som önskas
          </h1>
        </div>
      </section>

      <section className="py-12 px-4 md:px-9 text-black w-full flex flex-col lg:flex-row gap-12 items-start justify-center">
        <div className="w-full lg:w-4/12 px-8">
          <h2 className="text-lg font-semibold mb-4">Pallhotellet</h2>
          <div className="space-y-4 text-lg">
            <div className="flex items-center">
              <Link
                href="https://www.google.com/maps?q=Pallhotellet+AB,+Vickerkullavägen+2,+591+45+Motala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <CiLocationOn size={20} />
                <p className="ms-3">Vickerkullavägen 2, 591 45 Motala</p>
              </Link>
            </div>
            <div className="flex items-center">
            <Link href="tel:+46141215044" className="flex items-center">
                <PiPhoneCallThin size={20} />
                <p className="ms-3">+46 141 21 50 44
                </p>
              </Link>
            </div>
            <div 
              className="flex items-center"
              dangerouslySetInnerHTML={{
                __html: `<!--email_off--><a target="_blank" href="mailto:info@pallhotellet.se" class="flex items-center"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" class="inline" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><span class="ms-3">info@pallhotellet.se</span></a><!--/email_off-->`
              }}
            />
          </div>
        </div>
        <div className="w-full lg:w-10/12 px-8">
          <h2 className="text-3xl font-bold mb-8">Offertförfrågan för tjänster som önskas hos Pallhotellet</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* 1. Företagsuppgifter */}
            <div>
              <h2 className="text-2xl font-bold mb-6">1. Företagsuppgifter</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Namn</label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      handleInputChange("name", null, e.target.value)
                    }
                    placeholder="Namn *"
                    className="w-full focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="aftername" className="sr-only">Efternamn</label>
                  <input
                    required
                    type="text"
                    name="aftername"
                    id="aftername"
                    value={formState.aftername}
                    onChange={(e) =>
                      handleInputChange("aftername", null, e.target.value)
                    }
                    placeholder="Efternamn *"
                    className="w-full focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      handleInputChange("email", null, e.target.value)
                    }
                    placeholder="Email *"
                    className="w-full focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="sr-only">Telefon</label>
                  <input
                    required
                    name="telephone"
                    id="telephone"
                    value={formState.telephone}
                    onChange={(e) =>
                      handleInputChange("telephone", null, e.target.value)
                    }
                    placeholder="Telefon *"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                  />
                </div>
                <div>
                  <label htmlFor="foretag" className="sr-only">Företag</label>
                  <input
                    required
                    type="text"
                    name="foretag"
                    id="foretag"
                    value={formState.foretag}
                    onChange={(e) =>
                      handleInputChange("foretag", null, e.target.value)
                    }
                    placeholder="Företag *"
                    className="w-full focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="orgnr" className="sr-only">OrgNr</label>
                  <input
                    required
                    type="text"
                    name="orgnr"
                    id="orgnr"
                    value={formState.orgnr}
                    onChange={(e) =>
                      handleInputChange("orgnr", null, e.target.value)
                    }
                    placeholder="OrgNr *"
                    className="w-full focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="border-t-2 border-[#A0ABBB] my-6"></div>
            </div>

            {/* 2. Hyra av lageryta */}
            <div>
              <h2 className="text-2xl font-bold mb-3">2. Hyra av lageryta</h2>
              {/* Kallager */}
              <p className="mb-4 font-semibold">2.1 Kallager</p>
              <div className="my-10">
                <label className="flex md:items-center mb-3">
                  <div className="w-2/12 md:w-auto md:me-3">
                    <input
                      type="checkbox"
                      className="mr-2 size-6"
                      checked={formState.kallager.isChecked}
                      onChange={() => handleCheckboxChange("kallager")}
                    />
                  </div>
                  <div className="w-10/12">
                    Vill hyra pallplatser INOMHUS I KALLAGER
                  </div>
                </label>

                {formState.kallager.isChecked && (
                  <div className="">
                    <div className="flex md:justify-between flex-wrap md:flex-nowrap space-y-5 md:space-y-0 my-5 md:space-x-4 ">
                      <input
                        type="number"
                        name="antalpallplaster"
                        placeholder="Antal pallplatser"
                        value={formState.kallager.antalpallplaster}
                        onChange={(e) =>
                          handleInputChange(
                            "kallager",
                            "antalpallplaster",
                            e.target.value
                          )
                        }
                        className="p-3 border border-gray-300 rounded-md focus:outline-orange-500 w-full  md:w-6/12"
                      />
                      <div className="md:w-6/12 md:space-x-5 flex flex-wrap md:flex-nowrap space-y-5 md:space-y-0 ">
                        <input
                          type="text"
                          name="snitt"
                          placeholder="Pallvikt/snitt"
                          value={formState.kallager.snitt}
                          onChange={(e) =>
                            handleInputChange(
                              "kallager",
                              "snitt",
                              e.target.value
                            )
                          }
                          className="p-3 border border-gray-300 rounded-md focus:outline-orange-500 w-full  md:w-6/12"
                        />
                        <input
                          type="text"
                          name="antalKragar"
                          placeholder="Antal kragar"
                          value={formState.kallager.antalKragar}
                          onChange={(e) =>
                            handleInputChange(
                              "kallager",
                              "antalKragar",
                              e.target.value
                            )
                          }
                          className="p-3 border border-gray-300 rounded-md focus:outline-orange-500 w-full  md:w-6/12"
                        />
                      </div>
                    </div>

                    <div className="flex md:space-x-3 flex-wrap md:flex-nowrap space-y-5 md:space-y-0">
                      <div className="relative w-full">
                        <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                          <DatePicker
                            selected={formState.kallager.franOchMed}
                            onChange={(date) =>
                              handleInputChange("kallager", "franOchMed", date)
                            }
                            placeholderText="Från och med"
                            dateFormat="yyyy-MM-dd"
                            className="focus:outline-none w-full bg-transparent"
                          />
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                          <DatePicker
                            selected={formState.kallager.tillOchMed}
                            onChange={(date) =>
                              handleInputChange("kallager", "tillOchMed", date)
                            }
                            placeholderText="Till och med"
                            dateFormat="yyyy-MM-dd"
                            className="focus:outline-none w-full bg-transparent"
                          />
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

              {/* Varmlager */}
              <div className="my-10">
                <p className="my-5 font-semibold">2.2 Varmlager</p>
                <label className="flex md:items-center my-10">
                  <div className="w-2/12 md:w-auto md:me-3">
                    <input
                      type="checkbox"
                      checked={formState.varmlager.isChecked}
                      onChange={() => handleCheckboxChange("varmlager")}
                      className="mr-2 size-6"
                    />
                  </div>
                  <div className="w-10/12">
                    Vill hyra pallplatser INOMHUS I UPPVÄRMT LAGER
                  </div>
                </label>

                {formState.varmlager.isChecked && (
                  <div className="">
                    <div className="flex md:justify-between flex-wrap md:flex-nowrap space-y-5 md:space-y-0 my-5 md:space-x-4">
                      <input
                        type="number"
                        name="antalpallplaster"
                        placeholder="Antal pallplatser"
                        value={formState.varmlager.antalpallplaster}
                        onChange={(e) =>
                          handleInputChange(
                            "varmlager",
                            "antalpallplaster",
                            e.target.value
                          )
                        }
                        className="p-3 border border-gray-300 rounded-md focus:outline-orange-500 w-full  md:w-6/12"
                      />
                      <div className="md:w-6/12 md:space-x-5 flex-wrap md:flex-nowrap space-y-5 md:space-y-0 flex">
                        <input
                          type="text"
                          name="snitt"
                          placeholder="Pallvikt/snitt"
                          value={formState.varmlager.snitt}
                          onChange={(e) =>
                            handleInputChange(
                              "varmlager",
                              "snitt",
                              e.target.value
                            )
                          }
                          className="p-3 border border-gray-300 rounded-md focus:outline-orange-500 w-full  md:w-6/12"
                        />
                        <input
                          type="text"
                          name="antalKragar"
                          placeholder="Antal kragar"
                          value={formState.varmlager.antalKragar}
                          onChange={(e) =>
                            handleInputChange(
                              "varmlager",
                              "antalKragar",
                              e.target.value
                            )
                          }
                          className="p-3 border border-gray-300 rounded-md focus:outline-orange-500 w-full  md:w-6/12"
                        />
                      </div>
                    </div>

                    <div className="flex md:space-x-3 flex-wrap md:flex-nowrap space-y-5 md:space-y-0 ">
                      <div className="relative w-full">
                        <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                          <DatePicker
                            selected={formState.varmlager.franOchMed}
                            onChange={(date) =>
                              handleInputChange("varmlager", "franOchMed", date)
                            }
                            placeholderText="Från och med"
                            dateFormat="yyyy-MM-dd"
                            className="focus:outline-none w-full bg-transparent"
                          />
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                          <DatePicker
                            selected={formState.varmlager.tillOchMed}
                            onChange={(date) =>
                              handleInputChange("varmlager", "tillOchMed", date)
                            }
                            placeholderText="Till och med"
                            dateFormat="yyyy-MM-dd"
                            className="focus:outline-none w-full bg-transparent"
                          />
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

              {/* Utomhusförvaring */}
              <h2 className="my-5 font-semibold">2.3 Utomhusförvaring</h2>
              <div className="flex md:items-center my-10">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    id="utomhusforvaring"
                    checked={formState.utomhusforvaring.isChecked}
                    onChange={() => handleCheckboxChange("utomhusforvaring")}
                    className="mr-2 size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="utomhusforvaring">
                    Vill hyra av inhägnat LAGERYTA UTOMHUS
                  </label>
                </div>
              </div>

              {formState.utomhusforvaring.isChecked && (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <input
                      type="text"
                      placeholder="Yta i m2"
                      value={formState.utomhusforvaring.ytaIM2}
                      onChange={(e) =>
                        handleInputChange(
                          "utomhusforvaring",
                          "ytaIM2",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Höjd"
                      value={formState.utomhusforvaring.hojd}
                      onChange={(e) =>
                        handleInputChange(
                          "utomhusforvaring",
                          "hojd",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Bredd"
                      value={formState.utomhusforvaring.bredd}
                      onChange={(e) =>
                        handleInputChange(
                          "utomhusforvaring",
                          "bredd",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Längd"
                      value={formState.utomhusforvaring.langd}
                      onChange={(e) =>
                        handleInputChange(
                          "utomhusforvaring",
                          "langd",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded focus:outline-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="relative w-full">
                      <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                        <DatePicker
                          selected={formState.utomhusforvaring.franOchMed}
                          onChange={(date) =>
                            handleInputChange(
                              "utomhusforvaring",
                              "franOchMed",
                              date
                            )
                          }
                          placeholderText="Från och med"
                          dateFormat="yyyy-MM-dd"
                          className="focus:outline-none w-full bg-transparent"
                        />
                        <FaCalendarAlt className="text-gray-400" />
                      </div>
                    </div>
                    <div className="relative w-full">
                      <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                        <DatePicker
                          selected={formState.utomhusforvaring.tillOchMed}
                          onChange={(date) =>
                            handleInputChange(
                              "utomhusforvaring",
                              "tillOchMed",
                              date
                            )
                          }
                          placeholderText="Till och med"
                          dateFormat="yyyy-MM-dd"
                          className="focus:outline-none w-full bg-transparent"
                        />
                        <FaCalendarAlt className="text-gray-400" />
                      </div>
                    </div>
                    <select
                      value={formState.utomhusforvaring.typAvGods}
                      onChange={(e) =>
                        handleInputChange(
                          "utomhusforvaring",
                          "typAvGods",
                          e.target.value
                        )
                      }
                      className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                    >
                      <option value="">Typ av gods</option>
                      <option value="skrymmande">Skrymmande</option>
                      <option value="ej-skrymmande">Ej skrymmande</option>
                    </select>
                  </div>
                </>
              )}
              <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

              {/* Hyra av förråd */}
              <h2 className="my-5 font-semibold">2.4 Hyra av förråd</h2>
              <div className="flex md:items-center my-10">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    checked={formState.hyraAvForrad.isChecked}
                    onChange={() => handleCheckboxChange("hyraAvForrad")}
                    id="hyraAvForrad"
                    className="size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="hyraAvForrad">Vill hyra INOMHUSFÖRRÅD</label>
                </div>
              </div>

              {formState.hyraAvForrad.isChecked && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Ytan i m2"
                    value={formState.hyraAvForrad.ytanIM2}
                    onChange={(e) =>
                      handleInputChange(
                        "hyraAvForrad",
                        "ytanIM2",
                        e.target.value
                      )
                    }
                    className="p-2 border rounded focus:outline-orange-500"
                  />
                  <div className="relative w-full">
                    <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                      <DatePicker
                        selected={formState.hyraAvForrad.franOchMed}
                        onChange={(date) =>
                          handleInputChange("hyraAvForrad", "franOchMed", date)
                        }
                        placeholderText="Från och med"
                        dateFormat="yyyy-MM-dd"
                        className="focus:outline-none w-full bg-transparent"
                      />
                      <FaCalendarAlt className="text-gray-400" />
                    </div>
                  </div>
                  <div className="relative w-full">
                    <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                      <DatePicker
                        selected={formState.hyraAvForrad.tillOchMed}
                        onChange={(date) =>
                          handleInputChange("hyraAvForrad", "tillOchMed", date)
                        }
                        placeholderText="Till och med"
                        dateFormat="yyyy-MM-dd"
                        className="focus:outline-none w-full bg-transparent"
                      />
                      <FaCalendarAlt className="text-gray-400" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t-2 border-[#A0ABBB] mb-6"></div>

            {/* Section 3 - Inlastning / utlastning */}
            <h2 className="text-2xl font-semibold">
              3. Inlastning / utlastning
            </h2>

            {/* Lossning, ompackning */}
            <h3 className="font-semibold">3.1 Lossning, ompackning</h3>
            <div className="space-y-10">
              <div className="flex md:items-center">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    checked={
                      formState.tjanster.lossningLastbilGaffeltruckOnskas
                    }
                    onChange={() =>
                      handleCheckboxChange(
                        "tjanster",
                        "lossningLastbilGaffeltruckOnskas"
                      )
                    }
                    id="gaffeltruck"
                    className="size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="gaffeltruck">
                    Lossning/lastning lastbil med gaffeltruck
                  </label>
                </div>
              </div>

              <div className="flex md:items-center">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    checked={formState.tjanster.lossningLastningContainerOnskas}
                    onChange={() =>
                      handleCheckboxChange(
                        "tjanster",
                        "lossningLastningContainerOnskas"
                      )
                    }
                    id="container"
                    className="mr-2 size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="container">
                    Lossning/lastning av container
                  </label>
                </div>
              </div>

              <div className="flex md:items-center">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    checked={formState.tjanster.ompackningPlockOnskas}
                    onChange={() =>
                      handleCheckboxChange("tjanster", "ompackningPlockOnskas")
                    }
                    id="ompackning"
                    className="mr-2 size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="ompackning">
                    Ompackning och plock
                  </label>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

            {/* Additional Checkboxes */}
            <div className="flex md:items-center">
              <div className="w-2/12 md:w-auto md:me-3">
                <input
                  type="checkbox"
                  id="containerhanteringPacketering"
                  checked={formState.tjanster.containerhanteringPacketering}
                  onChange={() =>
                    handleCheckboxChange(
                      "tjanster",
                      "containerhanteringPacketering"
                    )
                  }
                  className="mr-2 size-6"
                />
              </div>
              <div className="w-10/12">
                <label htmlFor="containerhanteringPacketering">
                  Containerhantering /packetering
                </label>
              </div>
            </div>

            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

            <div className="flex md:items-center">
              <div className="w-2/12 md:w-auto md:me-3">
                <input
                  type="checkbox"
                  id="hanteringSkrymmandeGods"
                  checked={formState.tjanster.hanteringSkrymmandeGods}
                  onChange={() =>
                    handleCheckboxChange("tjanster", "hanteringSkrymmandeGods")
                  }
                  className="mr-2 size-6"
                />
              </div>
              <div className="w-10/12">
                <label htmlFor="hanteringSkrymmandeGods">
                  Hantering av skrymmande gods
                </label>
              </div>
            </div>

            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

            {/* Section 3.3 - Redskap och maskiner */}
            <h3 className="text-md font-semibold mb-4">
              3.2 Redskap och maskiner
            </h3>

            <div className="mb-6 space-y-10">
              <div className="w-full flex flex-wrap">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    checked={formState.tjanster.handtruckOnskas}
                    onChange={() =>
                      handleCheckboxChange("tjanster", "handtruckOnskas")
                    }
                    id="handtruck"
                    className="mr-2 size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="handtruck">Handtruck</label>
                </div>
              </div>

              <div className="flex md:items-center">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    checked={formState.tjanster.gaffeltruckOnskas}
                    onChange={() =>
                      handleCheckboxChange("tjanster", "gaffeltruckOnskas")
                    }
                    id="gaffeltruck2"
                    className="mr-2 size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="gaffeltruck2">Gaffeltruck</label>
                </div>
              </div>

              <div className="flex md:items-center">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    checked={formState.tjanster.traversOnskas}
                    onChange={() =>
                      handleCheckboxChange("tjanster", "traversOnskas")
                    }
                    id="travers"
                    className="mr-2 size-6"
                  />
                </div>
                <div>
                  <label htmlFor="travers">Travers (max 7ton)</label>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

            {/* Section 4 - Kringtjänster */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white w-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  4. Kringtjänster
                </h2>

                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                {/* Order Management */}
                <div className="my-10 space-y-5">
                  <label className="flex">
                    <div className="w-2/12 md:w-auto md:me-3">
                      <input
                        type="checkbox"
                        className="size-6 me-2"
                        checked={formState.tjanster.hjalpDokumentationOnskas}
                        onChange={() =>
                          handleCheckboxChange(
                            "tjanster",
                            "hjalpDokumentationOnskas"
                          )
                        }
                      />
                    </div>
                    <div className="w-10/12">
                      Hjälp med dokumentation
                    </div>
                  </label>
                </div>

                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                {/* Upphandling */}
                <div className="my-10">
                  <label className="flex md:items-center">
                    <div className="w-2/12 md:w-auto md:me-3">
                      <input
                        type="checkbox"
                        checked={formState.tjanster.hjalpOrderhanteringOnskas}
                        onChange={() =>
                          handleCheckboxChange(
                            "tjanster",
                            "hjalpOrderhanteringOnskas"
                          )
                        }
                        className="size-6"
                      />
                    </div>
                    <div className="w-10/12">
                      Hjälp med orderhantering
                    </div>
                  </label>
                </div>

                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                {/* Kringfunktioner */}
                <div className="my-10">
                  <label className="flex md:items-center">
                    <div className="w-2/12 md:w-auto md:me-3">
                      <input
                        type="checkbox"
                        className="me-2 size-6"
                        checked={
                          formState.tjanster.behoverHjalpKringtjansterMerInfo
                        }
                        onChange={() =>
                          handleCheckboxChange(
                            "tjanster",
                            "behoverHjalpKringtjansterMerInfo"
                          )
                        }
                      />
                    </div>
                    <div className="w-10/12">
                      Behöver hjälp med andra kringtjänster, såsom montering,
                      underhåll etc. Vi önskar mer info.
                    </div>
                  </label>
                </div>

                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                {/* Complete Solution */}
                <div className="my-10">
                  <label className="flex md:items-center">
                    <div className="w-2/12 md:w-auto md:me-3">
                      <input
                        type="checkbox"
                        className="me-2 size-6"
                        checked={
                          formState.tjanster.behoverForslagKomplett3plLosning
                        }
                        onChange={() =>
                          handleCheckboxChange(
                            "tjanster",
                            "behoverForslagKomplett3plLosning"
                          )
                        }
                      />
                    </div>
                    <div className="w-10/12">
                      Behöver förslag till en komplett 3pl lösning, önskar gärna
                      mer info.
                    </div>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`my-3 flex items-center mx-auto md:mx-0 ${
                      loading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:text-[#ff6300]"
                    } text-white hover:bg-white bg-[#ff6300] border-[#ff6300] border-2 text-nowrap md:py-3 py-2 px-3 md:px-4 lg:px-8 rounded-md`}
                  >
                    {loading ? "Skickar..." : "Skicka"}
                    <span className="bg-white rounded-full border-[#ff6300] border-2 p-1 ms-3">
                      <IoArrowForward className="text-[#ff6300]" size={23} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="border-t pt-8 mt-12 space-y-6 text-[#626262]">
            <h2 className="text-xl font-bold text-black">Hur går en offertförfrågan till hos Pallhotellet?</h2>
            <p>
              Vi på Pallhotellet strävar efter att göra logistik- och lagerprocessen så transparent och smidig som möjligt för alla våra kunder. När ni fyller i vårt detaljerade offertformulär har ni möjlighet att ange precis vilka volymer och specifika tjänster som önskas för er verksamhet i Motala. Detta inkluderar allt från kallager och tempererat varmlager till containerlossning, omlastning och kompletta 3PL-lösningar.
            </p>
            <p>
              Efter att ni har skickat in er offertförfrågan gör vi en noggrann analys av era behov. Vårt mål är att erbjuda en skräddarsydd helhetslösning där ni endast betalar för den yta och de logistiktjänster som önskas och faktiskt används. Vi återkopplar snabbt med ett tydligt prisförslag, oftast inom en arbetsdag. Har ni frågor inför er förfrågan är ni alltid välkomna att kontakta oss direkt på telefon eller e-post.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuoteForm;
