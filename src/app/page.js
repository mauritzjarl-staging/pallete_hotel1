"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import ProgressBar from "./components/ProgressBar";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useState, useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

export default function HomePage() {
  const sliderRef = useRef(null); // Create a ref to access the Slider compone

  // Reusable SliderContent Component
  const SliderContent = () => (
    <div className="py-auto flex flex-col items-center space-y-10 text-white md:mt-10">
      <div>
        <h1 className="text-center md:text-5xl lg:text-7xl text-3xl px-10 font-bold mx-auto">
          Från 49 kronor per pall!
        </h1>
      </div>
      <div>
        <p className="xl:text-xl lg:text-">Hyr din pallplats hos oss!</p>
      </div>
      <button className="bg-[#ff6300] flex items-center hover:border-white text-white border-2 border-[#ff6300] text-nowrap py-2 md:py-3 font-bold px-3 md:px-5 lg:px-10 text-center rounded-md text-sm">
        UPPTÄCK MER{" "}
        <span className="bg-white rounded-full p-1 ms-3">
          <IoArrowForward color="orange" size={20} />
        </span>
      </button>
    </div>
  );

  // Banner slider settings

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer z-10"
        onClick={onClick}
      >
        <GrNext size={30} />
      </div>
    );
  };

  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white cursor-pointer z-10"
        onClick={onClick}
      >
        <GrPrevious size={30} />
      </div>
    );
  };

  const BannerSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  // Slick Slider settings
  const sliderSettings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  // Testomonial slider settings

  const testimonials = [
    {
      image: "/imgs/Ellipse3.png",
      text: " Tempor ut dolore lorem kasd vero ipsum sit eirmod sit.  Ipsum diam justo sed vero dolor duo. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
      name: "Donor Name 1",
      profession: "Profession 1",
    },
    {
      image: "/imgs/Ellipse3.png",
      text: " Tempor ut dolore lorem kasd vero ipsum sit eirmod sit.  Ipsum diam justo sed vero dolor duo. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
      name: "Donor Name 2",
      profession: "Profession 2",
    },
    {
      image: "/imgs/Ellipse3.png",
      text: " Tempor ut dolore lorem kasd vero ipsum sit eirmod sit.  Ipsum diam justo sed vero dolor duo. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
      name: "Donor Name 3",
      profession: "Profession 3",
    },
    {
      image: "/imgs/Ellipse3.png",
      text: " Tempor ut dolore lorem kasd vero ipsum sit eirmod sit.  Ipsum diam justo sed vero dolor duo. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.",
      name: "Donor Name 4",
      profession: "Profession 4",
    },
  ];

  // Set the initial active slide to be the middle one
  const [activeSlide, setActiveSlide] = useState(
    Math.floor(testimonials.length / 2)
  );

  const handleSlideChange = (next) => {
    setActiveSlide(next);
  };

  const testimonialSettings = {
    centerMode: true,
    centerPadding: "0px", // No padding around the slides
    slidesToShow: 3,
    autoplay: true,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => handleSlideChange(next),
  };

  // Slider settings for What We Offer section

  const solutionSettings = {
    slidesToShow: 3,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url('/imgs/Frame5892.png')] bg-cover bg-center h-screen  flex justify-center md:px-20 items-center">
        <div className="w-full max-w-5xl">
          <Slider {...BannerSlider}>
            <SliderContent />
            <SliderContent />
            <SliderContent />
            <SliderContent />
            <SliderContent />
          </Slider>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-[#08343D] lg:flex items-center justify-around px-10 md:px-20 text-white lg:py-4 py-14">
        <div className="flex items-center mx-6 mb-6 space-x-5 md:space-x-14">
          <Image
            src="/imgs/Layer_1.png"
            alt="Flexible warehousing"
            width={64}
            height={64}
          />
          <div className="pe-5">
            <h3 className="xl:text-xl md:text-sm font-bold text-sm lg:font-bold md:font-medium">
              Flexible warehousing
            </h3>
            <p className="text-[0.6rem] md:text-[0.9rem]">
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed vero dolor duo.
            </p>
          </div>
        </div>

        <div className="flex items-center mx-6 mb-6 space-x-5 md:space-x-14">
          <Image
            src="/imgs/Layer_2.png"
            alt="Fast order processing"
            width={64}
            height={64}
          />
          <div className="pe-5">
            <h3 className="xl:text-xl md:text-sm font-bold text-sm lg:font-bold md:font-medium">
              Fast order processing
            </h3>
            <p className="text-[0.6rem] md:text-[0.9rem]">
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed vero dolor duo.
            </p>
          </div>
        </div>

        <div className="flex items-center mx-6 mb-6 space-x-5 md:space-x-14">
          <Image
            src="/imgs/Layer_3.png"
            alt="More efficient flow"
            width={64}
            height={64}
          />
          <div className="pe-5">
            <h3 className="xl:text-xl md:text-sm font-bold text-sm lg:font-bold md:font-medium">
              More efficient flow
            </h3>
            <p className="text-[0.6rem] md:text-[0.9rem]">
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed vero dolor duo.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Section3 --> */}

      <section className="flex md:flex-row flex-col md:px-20 px-10 my-10">
        {/* <!--col-1 Text --> */}
        <div className="md:pe-8 inline-flex justify-center flex-col space-y-6 md:w-6/12 w-full text-center md:text-start">
          <div>
            <p className="bg-[#FF6F0F17] text-[#ff6300] inline-block p-4 text-lg">
              VILKA VI ÄR
            </p>
          </div>
          <p className="md:text-4xl text-lg font-bold md:w-5/6 leading-loose">
            Vi hjälper dig med lagerhållning, godshantering, dokumentation och
            mycket mer.
          </p>
          <p className="text-gray-500">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <p className="bg-[#7d7d7d21] text-gray-500 p-[2rem] pl-5 place-content-around ">
            Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet
            lorem sit clita duo justo erat amet <br />
            <span className="text-orange-600 mt-5">Christopher Jarl, CEO</span>
          </p>
          <div className="flex sm:space-x-8 text-wrap flex-col justify-center md:justify-start sm:flex-row space-y-5 sm:space-y-0">
            <Link href="/">
              <button
                className="bg-[#ff6300] flex items-center justify-around text-white border-2 border-[#ff6300] text-nowrap md:py-3 py-2  font-bold px-3 md:px-5 lg:px-10  
           text-center rounded-md"
              >
                Läs mer
                <span className="bg-white rounded-full p-1 ms-3">
                  {" "}
                  <IoArrowForward color="orange" size={22} />
                </span>
              </button>
            </Link>

            <Link href="/contact">
              <button
                className="flex items-center justify-around text-[#ff6300] border-2 border-[#ff6300] text-nowrap md:py-3 py-2 font-bold px-3 md:px-4 lg:px-8  
           text-center rounded-md"
              >
                Kontakta oss
                <span className="bg-[#ff6300] rounded-full p-1 ms-3">
              
                  <IoArrowForward color="white" size={23} />
                </span>
              </button>
            </Link>
           
          </div>
        </div>
        {/* <!--col-2 side Image --> */}
        <div className="my-10 md:my-0 p-10 md:w-6/12 w-full">
          <div className="relative">
            <Image
              src="/imgs/Rectangle4.png"
              width={500}
              height={200}
              alt="Background Image"
              className="w-full h-full "
            />
            <div className="absolute top-0 -left-10 border-8 border-white">
              <Image
                src="/imgs/image2.png"
                width={500}
                height={300}
                alt="Overlay Image"
                className="md:w-[6rem] lg:w-[9rem] xl:w-[12rem] w-[7rem] sm:w-[9rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slider: What We Offer */}

      <section className="bg-[#7d7d7d21] p-10 md:px-20">
        <div className="text-center space-y-4">
          <p className="bg-[#FF6F0F17] text-[#ff6300] p-3 inline-block">
            VAD VI ERBJUDER
          </p>
          <p className="md:text-[2rem] text-[1.2rem] font-bold md:w-4/12 mx-auto">
            Vi erbjuder flexibla och skräddarsydda lösningar
          </p>
        </div>

        <Slider {...solutionSettings}>
          <div className="md:px-5 mt-10">
            <div className=" rounded-t-3xl flex flex-col justify-center item-center text-center border-t-8 pb-0 mb-0 border-[#ff6300] bg-white">
              <div>
                <p className="inline-block px-2 rounded-md py-2 bg-[#ff6300] text-[1.2rem] -mt-1 text-white md:w-5/12 w-8/12 font-semibold">
                  Lagring
                </p>
              </div>
              <p className="px-2 mt-8 text-[1.3rem] font-bold">
                Strumpa för allas behov
              </p>
              <p className="text-[#989898] py-4 w-11/12 md:w-8/12 mx-auto text-[1rem]">
                Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet
                diam et eos
              </p>
              {/* <!-- Greybox1 --> */}
              <div className="p-6">
                <ProgressBar
                  total={10000}
                  current={4950}
                  totalLabel="pallet capacity"
                  currentLabel="pallets in stock"
                />
              </div>
              {/* <!-- Greybox Image --> */}
              <div className="w-full mt-4">
                <Image
                  width={1000}
                  height={500}
                  src="/imgs/Rectangle12.png"
                  alt="Grey box"
                />
              </div>
            </div>
          </div>

          {/* 2nd Box  */}

          <div className="md:px-5 mt-10">
            <div className=" rounded-t-3xl flex flex-col justify-center item-center text-center border-t-8 pb-0 mb-0 border-[#ff6300] bg-white">
              <div>
                <p className="inline-block px-2 rounded-md py-2 bg-[#ff6300] text-[1.2rem] -mt-1 text-white md:w-5/12 w-8/12 font-semibold">
                  Godshantering
                </p>
              </div>
              <p className="px-2 mt-8 text-[1.3rem] font-bold">
                Vi tar hand om dina varor
              </p>
              <p className="text-[#989898] py-4 w-11/12 md:w-8/12 mx-auto text-[1rem]">
                Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet
                diam et eos
              </p>
              {/* <!-- Greybox1 --> */}
              <div className="p-6">
                <ProgressBar
                  total={10}
                  current={4}
                  totalLabel="customers as ml"
                  currentLabel="existing customers"
                />
              </div>
              {/* <!-- Greybox Image --> */}
              <div className="w-full mt-4">
                <Image
                  width={1000}
                  height={500}
                  src="/imgs/Rectangle13.png"
                  alt="Grey box"
                />
              </div>
            </div>
          </div>

          <div className="md:px-5 mt-10">
            <div className=" rounded-t-3xl flex flex-col justify-center item-center text-center border-t-8 pb-0 mb-0 border-[#ff6300] bg-white">
              <div>
                <p className="inline-block px-2 rounded-md py-2 bg-[#ff6300] text-[1.2rem] -mt-1 text-white md:w-5/12 w-8/12 font-semibold">
                  Dokumentation
                </p>
              </div>
              <p className="px-2 mt-8 text-[1.3rem] font-bold">
                Vi tar hand om ditt lager
              </p>
              <p className="text-[#989898] py-4 w-11/12 md:w-8/12 mx-auto text-[1rem]">
                Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet
                diam et eos
              </p>
              {/* <!-- Greybox1 --> */}
              <div className="p-6">
                <ProgressBar
                  total={5}
                  current={1}
                  totalLabel="customers as ml"
                  currentLabel="Customer"
                />
              </div>
              {/* <!-- Greybox Image --> */}
              <div className="w-full mt-4">
                <Image
                  width={1000}
                  height={500}
                  src="/imgs/Rectangle14.png"
                  alt="Grey box"
                />
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* Services section / 3-Images  */}

      <section className="my-10 bg-[url('/imgs/Frame5894.png')] p-10 md:p-24">
        <div className="flex flex-col justify-center lg:flex-row">
          <div className="lg:w-3/12 w-full lg:pt-44">
            <div className="relative my-10 lg:my-0 flex justify-center">
              <div>
                <Image
                  width={350}
                  height={200}
                  src="/imgs/Rectangle12.png"
                  alt="Grey box"
                />
              </div>
              <div className="absolute top-0">
                <p
                  className="text-center rounded-md py-1 bg-[#ff6300] text-[1.2rem]
             text-white px-8 inline font-semibold"
                >
                  Lagring
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-6/12 w-full text-white lg:px-10">
            <div className="text-center space-y-10 mb-10 md:mb-40">
              <p className="md:px-7 px-5 text-3xl font-bold">
                Skalbara och flexibla lagerplatser från 49 kr per pall och månad
              </p>
              <p className="text-lg">
                Att välja Pallhotellet för dina lagerbehov innebär att du inte
                bara får tillgång till flexibla och kostnadseffektiva
                lagerlösningar. Det innebär också att du får en partner som är
                engagerad i att lösa ditt företags unika utmaningar och hjälpa
                dig att optimera ditt lagerflöde. När du väljer oss för dina
                lagerbehov kommer du att uppleva fördelarna med optimerad
                lagerhantering. Genom att endast betala för det utrymme du
                faktiskt använder kan du optimera ditt lager och eliminera
                onödiga kostnader. Detta kan vara särskilt fördelaktigt för
                företag med varierande lagerbehov eller för de som bedriver
                säsongsbaserad verksamhet.
              </p>
              <p className="text-lg">
                Vårt engagemang att hantera dina in- och utleveranser innebär
                att du kan lägga större fokus på ditt företags kärnverksamhet,
                vilket främjar effektivitet inom ditt företag. Dessutom är vårt
                erbjudande utformat för att vara så flexibelt som möjligt,
                vilket ger dig friheten att anpassa ditt lagerutrymme efter dina
                behov, när du behöver det.
              </p>
            </div>
            <div className="lg:relative my-10">
              <div className="flex justify-center mt-10 lg:my-0 lg:absolute lg:-top-20 lg:right-0">
                <div className="flex justify-center relative">
                  <div>
                    <Image
                      width={350}
                      height={200}
                      src="/imgs/Rectangle14.png"
                      alt="Grey box"
                    />
                  </div>
                  <div className="absolute top-0">
                    <p
                      className="text-center rounded-md py-1 bg-[#ff6300] text-[1.2rem]
             text-white px-8 inline font-semibold"
                    >
                      Godshantering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/12 w-full">
            <div className="flex justify-center relative">
              <Image
                width={350}
                height={200}
                src="/imgs/Rectangle13.png"
                alt="Grey box"
              />
              <div className="absolute top-0">
                <p
                  className="text-center rounded-md py-1 bg-[#ff6300] text-[1.2rem]
             text-white px-8 inline font-semibold"
                >
                  Godshantering
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}

      <section className="md:py-20 py-10 flex justify-center flex-col px-10">
        <div className="text-center space-y-8">
          <p className="bg-[#FF6F0F17] text-[#ff6300] inline text-xl font-semiobold p-3">
            Vår personal
          </p>
          <p className="md:text-4xl text-3xl font-bold md:w-2/12 w-5/12 mx-auto">
            Vår personal är vår styrka
          </p>
        </div>

        <div className="my-10">
          {/* Regular layout for medium and larger screens */}
          <div className="hidden md:flex flex-col md:flex-row justify-center md:space-x-10 space-y-5 md:space-y-0">
            <div className="bg-[#f4f4f4] rounded-md text-center flex justify-center flex-col">
              <Image src="/imgs/1.png" alt="Staff 1" width={300} height={300} />
              <p className="py-8 text-xl">Sylvain</p>
            </div>
            <div className="bg-[#F4F4F4] rounded-md text-center flex justify-center flex-col">
              <Image src="/imgs/2.png" alt="Staff 2" width={300} height={300} />
              <p className="py-8 text-xl">Toby</p>
            </div>
            <div className="bg-[#F4F4F4] rounded-md text-center flex justify-center flex-col">
              <Image src="/imgs/3.png" alt="Staff 3" width={300} height={300} />
              <p className="py-8 text-xl">Elma</p>
            </div>
          </div>

          {/* Slick Slider for small screens */}
          <div className="md:hidden px-10">
            <Slider {...sliderSettings}>
              <div>
                <div className="bg-[#f4f4f4] rounded-md text-center flex justify-center flex-col">
                  <Image
                    src="/imgs/1.png"
                    alt="Staff 1"
                    width={800}
                    height={300}
                  />
                  <p className="py-8 text-xl">Sylvain</p>
                </div>
              </div>
              <div>
                <div className="bg-[#F4F4F4] rounded-md text-center flex justify-center flex-col">
                  <Image
                    src="/imgs/2.png"
                    alt="Staff 2"
                    width={800}
                    height={300}
                  />
                  <p className="py-8 text-xl">Toby</p>
                </div>
              </div>
              <div>
                <div className="bg-[#F4F4F4] rounded-md text-center flex justify-center flex-col">
                  <Image
                    src="/imgs/3.png"
                    alt="Staff 3"
                    width={800}
                    height={300}
                  />
                  <p className="py-8 text-xl">Elma</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Last Testimonial-Slider Section */}

      <section className="relative pt-10 md:pb-20 pb-10 px-10 md:px-[65px] bg-gray-100">
        <div className="text-center space-y-8 my-10">
          <p className="bg-[#FF6F0F17] text-[#ff6300] text-xl font-semibold p-3 inline">
            TESTIMONIALS
          </p>
          <p className="md:text-[2rem] text-[1.2rem] font-bold">
            Trusted By Thousands of People
          </p>
        </div>
        {/* Custom navigation buttons */}
        <div className="flex justify-center ">
          <div className="absolute transform z-20 translate-y-1/2 space-x-52">
            <button
              aria-label="Previous Slide"
              onClick={() => sliderRef.current.slickPrev()} // Use the ref to trigger slickPrev
            >
              <GrPrevious className="text-[#ff6300] text-3xl" />
            </button>

            <button
              aria-label="Next Slide"
              onClick={() => sliderRef.current.slickNext()} // Use the ref to trigger slickNext
            >
              <GrNext className="text-[#ff6300] text-3xl" />
            </button>
          </div>
        </div>
        <Slider ref={sliderRef} {...testimonialSettings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${
                activeSlide === index ? "active" : "inactive"
              }`}
            >
              <div className="pb-10 relative ">
                <Image
                  src={testimonial.image}
                  className="mx-auto rounded-full"
                  alt={`Client-Img ${index + 1}`}
                  width={90}
                  height={90}
                />
              </div>

              <div
                className={` text-white bg-[#ff6300] 
                  text-center md:mx-8 mx-2 ${
                    activeSlide === index ? "opacity-100" : ""
                  }
                   bg-[#ff6300] rounded-lg md:p-10 p-4 space-y-2 text-white`}
              >
                <p>{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p>{testimonial.profession}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}
