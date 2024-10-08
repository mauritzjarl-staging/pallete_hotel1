import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <footer className="md:px-10 px-5 bg-[#001D23]">
      <div className="leading-8 py-8 list-none md:px-20 px-10">
        <div className="flex md:justify-between justify-center flex-col md:flex-row text-[#808E91]">
          <div className="py-4 h-auto mt-10 md:w-4/12">
            <Image
              width={200}
              height={250}
              className="mb-5"
              src="/imgs/Pallhotellet.se.png"
              alt="logo"
            />
            <p className="text-sm md:w-9/12 hover:text-white md:mt-10">
              Vi hjälper dig med lagerhållning, godshantering, dokumentation
              och mycket annat!
            </p>
            <div className="flex my-5 gap-3">
              <Link
                href="https://www.facebook.com/chriss.mauritz.1"
                target="_blank" 
                className="border hover:text-white hover:border-white
                 p-2 rounded-md border-[#808E91]"
                 alt="Facebook"
              >
                <FaFacebook />
              </Link>

              {/* <Link
                href="#"
                className="border hover:text-white hover:border-white p-2 rounded-md border-[#808E91]"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="border hover:text-white hover:border-white p-2 rounded-md border-[#808E91]"
              >
                <IoLogoLinkedin />
              </Link>

              <Link
                href="#"
                className="border hover:text-white hover:border-white p-2 rounded-md border-[#808E91]"
              >
                <FiInstagram />
              </Link> */}
            </div>
          </div>

          <div className="py-4 md:mt-20 md:w-4/12">
            <p className="text-lg mb-5 font-semibold text-white">Adress</p>
            <li className="hover:text-white my-3 text-sm">
  <Link 
    href="https://www.google.com/maps?q=Vickerkullavägen+2,+591+45+Motala" 
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

            <li className="hover:text-white my-3 text-sm">
              <Link
               target="_blank" 
                href="mailto:info@pallhotellet.se"
                className="flex items-center"
              >
                <MdEmail size={16} />
                <p className="ms-3">info@pallhotellet.se</p>
              </Link>
            </li>
          </div>

          <div className="py-4 md:mt-20">
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
              <Link href="/offertförfrågan">Offertförfrågan</Link>
            </li>
          </div>
        </div>

        <div>
          <p className="flex text-lg flex-wrap">
            <span className="text-[#ff6300]"> Pall</span>
            <span className="text-white me-2">hotellet.se</span>
            <span className="text-gray-400 hover:text-white">
              2024, Alla rättigheter förbehållna
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
