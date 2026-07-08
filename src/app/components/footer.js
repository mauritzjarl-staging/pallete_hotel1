"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  const pathname = usePathname();
  const excludedPaths = ["/logga_in", "/register", "/forgotpassword", "/newpassword", "/sitemap"];
  if (excludedPaths.some(path => pathname?.startsWith(path))) {
    return null;
  }

  return (
    <footer className="md:px-10 px-5 bg-[#001D23]">
      <div className="leading-8 py-8 list-none md:px-20 px-10">
        <div className="flex lg:justify-between justify-center flex-col lg:flex-row text-[#808E91] lg:gap-8 gap-4">
          <div className="py-4 h-auto mt-10 lg:w-4/12">
            <img loading="lazy"
              width={200}
              height={250}
              className="mb-5"
              src="/imgs/Pallhotellet.se.webp"
              alt="logo"
            />
            <p className="text-sm lg:w-10/12 hover:text-white lg:mt-10">
              Vi hjälper dig med lagerhållning, godshantering, dokumentation
              och mycket annat!
            </p>
            <div className="flex flex-wrap my-5 gap-3">
              <Link
                href="https://www.facebook.com/share/1AW57zVRFg/"
                target="_blank"
                rel="noopener noreferrer me"
                className="border hover:text-white hover:border-white
                 p-2 rounded-md border-[#808E91]"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>

              <Link
                href="https://x.com/pallhotellet"
                target="_blank"
                rel="noopener noreferrer me"
                className="border hover:text-white hover:border-white p-2 rounded-md border-[#808E91]"
                aria-label="X (Twitter)"
              >
                <FaTwitter />
              </Link>

              <Link
                href="https://instagram.com/pallhotellet"
                target="_blank"
                rel="noopener noreferrer me"
                className="border hover:text-white hover:border-white p-2 rounded-md border-[#808E91]"
                aria-label="Instagram"
              >
                <FiInstagram />
              </Link>

              <Link
                href="https://linkedin.com/company/pallhotellet"
                target="_blank"
                rel="noopener noreferrer me"
                className="border hover:text-white hover:border-white p-2 rounded-md border-[#808E91]"
                aria-label="LinkedIn"
              >
                <IoLogoLinkedin />
              </Link>

              <Link
                href="https://www.youtube.com/@pallhotellet"
                target="_blank"
                rel="noopener noreferrer me"
                className="border hover:text-white hover:border-white p-2 rounded-md border-[#808E91]"
                aria-label="YouTube"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          <div className="py-4 lg:mt-20 lg:w-4/12">
            <p className="text-lg mb-5 font-semibold text-white">Adress</p>
            <li className="hover:text-white my-3 text-sm">
              <Link
                href="https://www.google.com/maps?q=Pallhotellet+AB,+Vickerkullavägen+2,+591+45+Motala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <IoLocationSharp size={16} />
                <p className="ms-3">Vickerkullavägen 2, 591 45 Motala</p>
              </Link>
            </li>


            <li className="hover:text-white my-3 text-sm">
              <Link href="tel:+46141215044" className="flex items-center">
                <MdCall size={16} />
                <p className="ms-3">+46 141 21 50 44
                </p>
              </Link>
            </li>

            <li
              className="hover:text-white my-3 text-sm"
              dangerouslySetInnerHTML={{
                __html: `<!--email_off--><a target="_blank" href="mailto:info@pallhotellet.se" class="flex items-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0-2-.9-2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg><span class="ms-3">info@pallhotellet.se</span></a><!--/email_off-->`
              }}
            />
          </div>

          <div className="py-4 lg:mt-20">
            <p className="text-lg mb-5 text-white font-semibold">Snabblänkar</p>
            <li className="hover:text-white my-3 text-sm">
              <Link href="/">Hem</Link>
            </li>
            {/* <li className="hover:text-white my-3 text-sm">
              <Link href="/tjanster">
                Hitta oss
              </Link>
            </li> */}
            <li className="hover:text-white my-3 text-sm">
              <Link href="/kontakt">Kontakt</Link>
            </li>
            <li className="hover:text-white my-3 text-sm">
              <Link href="/logga_in">Logga in</Link>
            </li>
            <li className="hover:text-white my-3 text-sm">
              <Link href="/offertforfragan">Offertförfrågan</Link>
            </li>
          </div>
        </div>

        <div>
          <p className="flex text-lg flex-wrap md:justify-start justify-center">
            <span className="text-primary"> Pall</span>
            <span className="text-white me-2">hotellet.se</span>
            <span className="text-gray-400 hover:text-white">
              2024, Alla rättigheter förbehållna
            </span>
          </p>
          <p className="text-center text-[#808E91] text-sm mt-6">
            Version: 1.0.1
          </p>
        </div>
      </div>
    </footer>
  );
}
