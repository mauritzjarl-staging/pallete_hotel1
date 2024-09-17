"use client"; // Enable client-side interactivity
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

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
      if (
        !event.target.closest(".dropdown-container") &&
        !event.target.closest(".dropdown-btn")
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`text-white justify-between items-center w-full fixed top-0 left-0 z-50 pb-2`}
    >
      <div className="px-20 mx-auto border border-gray-700 text-gray-400 hidden md:flex justify-between items-center py-2">
        <div className="flex md:text-sm xl:text-lg text-sm items-center space-x-6">
          <div className="hover:text-white flex items-center space-x-3">
            <p>591 45 Motala, Sweden.</p>
            <FaLocationDot />
          </div>
          <div className="hover:text-white flex items-center space-x-3">
            <p>info@pallhotellet.se</p>
            <MdEmail />
          </div>
        </div>
        <div className="flex text-sm md:text-sm xl:text-lg items-center">
          <p className="hover:text-white">Följ oss:</p>
          <div className="px-4 cursor-pointer md:space-x-4 space-x-2 flex">
            <FaFacebook className="hover:text-white" />
            <FaTwitter className="hover:text-white" />
            <IoLogoLinkedin className="hover:text-white" />
            <FiInstagram className="hover:text-white" />
          </div>
        </div>
      </div>

      <div className="flex md:justify-center justify-around md:px-10">
        <div
          id="stickyDiv"
          className={` text-white flex justify-between items-center
             w-full px-8 py-4 ${
               isSticky ? "bg-[#001d24] fixed top-0 z-50 md:px-20" : "relative"
             }`}
        >
          <div className="lg:w-5/12 lg:h-auto">
            <Link href="/">
              <Image
                src="/imgs/Pallhotellet.se.png"
                alt="Logo"
                width={200}
                height={250}
              />
            </Link>
          </div>

          {/* Mobile menu toggler */}
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <GiHamburgerMenu /> {/* Mobile menu icon */}
            </button>
          </div>

          <div className="lg:w-7/12 hidden md:flex items-center justify-between space-x-2">
            {/* Desktop menu */}
            <ul
              id="menu"
              className="hidden md:flex text-nowrap lg:space-x-5 md:space-x-2 font-semibold "
            >
              <li
                className={`${
                  pathname === "/" ? "text-[#ff6300]" : "hover:text-[#ff6300]"
                }`}
              >
                <Link href="/">Hem</Link>
              </li>
              {/* <li
                className={`${
                  pathname === "/findus"
                    ? "text-[#ff6300]"
                    : "hover:text-[#ff6300]"
                }`}
              >
                <Link href="/findus">Hitta oss</Link>
              </li> */}
              <li
                className={`relative group dropdown-container ${
                  pathname.startsWith("/services")
                    ? "text-[#ff6300]"
                    : "hover:text-[#ff6300]"
                }`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <Link href="/services">Tjänster</Link>
                  <FaCaretDown />
                </div>

                {/* Dropdown */}
                {dropdownOpen && (
                  <ul className="absolute bg-white rounded font-medium text-[#001d24] py-2 z-50">
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      <Link href="/services#indoor">Lagerhållning inomhus</Link>
                    </li>
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      <Link href="/services#outdoor">
                        Lagerhållning utomhus
                      </Link>
                    </li>
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      <Link href="/services#rental">Hyra av förbind</Link>
                    </li>
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      <Link href="/services#cargo">Godshantering</Link>
                    </li>
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      <Link href="/services#other">Övrigt</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`${
                  pathname === "/contact"
                    ? "text-[#ff6300]"
                    : "hover:text-[#ff6300]"
                }`}
              >
                <Link href="/contact">Kontakt</Link>
              </li>
              <li
                className={`${
                  pathname === "/login"
                    ? "text-[#ff6300]"
                    : "hover:text-[#ff6300]"
                }`}
              >
                <Link href="/login">Logga in</Link>
              </li>
            </ul>

            {/* Request for Quotation Button (Desktop) */}
            <div className="border-2 hidden md:block outline-2 xl:px-6 md:px-2 border-[#ff6300] rounded-md">
              <button className="hover:text-[#ff6300] md:py-2 py-1 font-medium">
                <Link href="/quotation">Offertförfrågan</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only shown when toggled */}

      {menuOpen && (
        <div className="md:hidden bg-[#001d24] text-white p-4">
          <ul className="space-y-4">
            <li className="text-white hover:text-[#ff6300]">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Hem
              </Link>
            </li>
            <li className="text-white hover:text-[#ff6300]">
              <Link href="/findus" onClick={() => setMenuOpen(false)}>
                Hitta oss
              </Link>
            </li>
            <li
              className={` group dropdown-container ${
                pathname.startsWith("/services")
                  ? "text-[#ff6300]"
                  : "hover:text-[#ff6300]"
              }`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <Link href="/services">Tjänster</Link>
                <FaCaretDown />
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <ul className="bg-white text-[#001d24] text-md pt-5 pb-3 z-50 rounded">
                  <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                    <Link
                      href="/services#indoor"
                      onClick={() => setMenuOpen(false)}
                    >
                      Lagerhållning inomhus
                    </Link>
                  </li>
                  <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                    <Link
                      href="/services#outdoor"
                      onClick={() => setMenuOpen(false)}
                    >
                      Lagerhållning utomhus
                    </Link>
                  </li>
                  <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                    <Link
                      href="/services#rental"
                      onClick={() => setMenuOpen(false)}
                    >
                      Hyra av förbind
                    </Link>
                  </li>
                  <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                    <Link
                      href="/services#cargo"
                      onClick={() => setMenuOpen(false)}
                    >
                      Godshantering
                    </Link>
                  </li>
                  <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                    <Link
                      href="/services#other"
                      onClick={() => setMenuOpen(false)}
                    >
                      Övrigt
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="text-white hover:text-[#ff6300]">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Kontakt
              </Link>
            </li>
            <li className="text-white hover:text-[#ff6300]">
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                Logga in
              </Link>
            </li>
          </ul>

          {/* Mobile Request for Quotation Button */}
          <div className="mt-4 border-2 border-[#ff6300] rounded-md">
            <button
              className="w-full py-2 text-sm hover:text-[#ff6300]"
              onClick={() => setMenuOpen(false)}
            >
              <Link href="/quotation">Offertförfrågan</Link>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
