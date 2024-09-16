"use client"; // Enable client-side interactivity
import { useEffect, useState } from "react";
import Image from "next/image"; // Use Next.js Image for optimized loading
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa"; // Add caret down icon
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const headerSecondDiv = document.getElementById("stickyDiv");
        const stickyPoint = headerSecondDiv?.offsetTop || 0;
  
        if (window.pageYOffset > stickyPoint) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle dropdown for Tjänster
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container') && !event.target.closest('.dropdown-btn')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`text-white justify-between items-center w-full fixed top-0 left-0 z-50 py-2`}
    >
      <div className="container mx-auto w-[90%] text-gray-400 hidden md:flex justify-between items-center py-2">
        <div className="flex md:text-sm xl:text-lg text-sm items-center space-x-6">
          <div className="hover:text-white flex items-center space-x-3">
            <p>591 90 Motala, Sweden</p>
            <FaLocationDot />
          </div>
          <div className="hover:text-white flex items-center space-x-3">
            <p>info@pallhotellet.se</p>
            <MdEmail />
          </div>
        </div>
        <div className="flex text-sm md:text-sm xl:text-lg items-center">
          <p className="hover:text-white">Follow Us:</p>
          <div className="px-4 cursor-pointer md:space-x-4 space-x-2 flex">
            <FaFacebook className="hover:text-white" />
            <FaTwitter className="hover:text-white" />
            <IoLogoLinkedin className="hover:text-white" />
            <FiInstagram className="hover:text-white" />
          </div>
        </div>
      </div>

      {/* Second Div - Becomes sticky when scrolling */}
      <div className="flex justify-center">
        <div
          id="stickyDiv"
          className={`bg-[#001d24] text-white flex justify-between items-center w-full  md:px-0 md:w-[90%] py-4 ${isSticky ? "fixed top-0 z-50" : "relative"}`}
        >
          <div className="w-3/12 xl:w-1/5 md:w-2/12 ms-5 h-auto">
            <Image
              src="/imgs/Pallhotellet.se.png"
              alt="Logo"
              width={250}
              height={200}
              href="/"
            />
          </div>

          {/* Mobile menu toggler */}
          <div className="md:hidden px-10">
            <button className="text-white" onClick={toggleMenu}>
              <GiHamburgerMenu /> {/* Mobile menu icon */}
            </button>
          </div>

          {/* Desktop menu */}
          <ul
            id="menu"
            className="hidden md:flex md:text-xl lg:space-x-10 md:space-x-5"
          >
            <li className="hover:text-[#ff6300]">
              <Link href="/">Hem</Link>
            </li>
            <li className="hover:text-[#ff6300]">
              <Link href="/findus">Hitta oss</Link>
            </li>
            <li className="hover:text-[#ff6300] relative group dropdown-container">
              <div className="flex items-center space-x-3">
                <Link href="/services">Tjänster</Link>
                <button onClick={toggleDropdown} className=" dropdown-btn">
                  <FaCaretDown />
                </button>
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <ul
                  className="absolute bg-[#001d24] text-white text-md mt-3 space-y-2 py-2 px-5 rounded shadow-lg z-50"
                >
                  <li className="hover:text-white hover:border-2 p-2 rounded-md hover:border-[#ff6300] text-nowrap">
                    <Link href="/services#indoor">Lagerhållning inomhus</Link>
                  </li>
                  <li className="hover:text-white hover:border-2 p-2 rounded-md hover:border-[#ff6300] text-nowrap">
                    <Link href="/services#outdoor">Lagerhållning utomhus</Link>
                  </li>
                  <li className="hover:text-white hover:border-2 p-2 rounded-md hover:border-[#ff6300] text-nowrap">
                    <Link href="/services#rental">Hyra av förbind</Link>
                  </li>
                  <li className="hover:text-white hover:border-2 p-2 rounded-md hover:border-[#ff6300] text-nowrap">
                    <Link href="/services#cargo">Godshantering</Link>
                  </li>
                  <li className="hover:text-white hover:border-2 p-2 rounded-md hover:border-[#ff6300] text-nowrap">
                    <Link href="/services#other">Övrigt</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:text-[#ff6300]">
              <Link href="/contact">Kontakt</Link>
            </li>
            <li className="hover:text-[#ff6300]">
              <Link href="/login">Logga in</Link>
            </li>
          </ul>

          {/* Request for Quotation Button (Desktop) */}
          <div className="md:me-4 border-2 hidden md:block md:text-xl outline-2 xl:px-6 md:px-2 md:py-1 xl:py-2 border-[#ff6300] rounded-md">
            <button className="hover:text-[#ff6300] py-1 font-medium">
              <Link href="/quotation">
                Offertförfrågan
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only shown when toggled */}
      {menuOpen && (
        <div className="md:hidden bg-[#001d24] text-white p-4">
          <ul className="space-y-4 ">
            <li className="hover:text-[#ff6300] ">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#ff6300]">
              <Link href="/findus">Find Us</Link>
            </li>
            <li className="hover:text-[#ff6300]">
              <Link href="/service">Services</Link>
            </li>
            <li className="hover:text-[#ff6300]">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-[#ff6300]">
              <Link href="/login">Login</Link>
            </li>
          </ul>

          {/* Mobile Request for Quotation Button */}
          <div className="mt-4 border-2 border-[#ff6300] rounded-md">
            <button className="w-full py-2 text-sm hover:text-[#ff6300]">
              Request for quotation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
