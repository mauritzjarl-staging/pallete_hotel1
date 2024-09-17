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
    <footer>
      <div className="leading-8 py-8 list-none bg-[#001D23]">
        <div className="flex justify-center flex-col md:flex-row px-10 text-[#808E91]">
          <div className="md:w-[30%] py-4 h-auto mt-10">
            <Image
            width={200}
            height={250}
             className="mb-5"
              src="/imgs/Pallhotellet.se.png"
            />
            <p className="text-sm md:w-9/12 hover:text-white">
            Vi hjälper dig med lagerhållning, godshantering, dokumentation och mycket annat!
            </p>
            <div className="flex my-5 gap-3">
              <Link href="#" className="border hover:text-white hover:border-white p-2 rounded-md border-[#808E91]">
                <FaFacebook />
              </Link>

              <Link href="#" className="border hover:text-white hover:border-white p-2 rounded-md border-[#808E91]">
                <FaTwitter />
              </Link>

              <Link href="#" className="border hover:text-white hover:border-white p-2 rounded-md border-[#808E91]">
                <IoLogoLinkedin />
              </Link>

              <Link href="#" className="border hover:text-white hover:border-white p-2 rounded-md border-[#808E91]">
                <FiInstagram />
              </Link>
            </div>
          </div>

          <div className="md:w-[29%] py-4 md:mt-10">
            <p className="text-2xl mb-5 font-medium text-white">Adress</p>
            <li className="hover:text-white my-3 text-sm">
              <Link href="#" className="flex">
                <IoLocationSharp size={16} />
                <p className="ms-3">Vickerkullavägen 2, 591 45 Motala</p>
              </Link>
            </li>
            <li className="hover:text-white my-3 text-sm">
              <Link href="#" className="flex">
                <MdEmail size={16} />
                <p className="ms-3">0141-21 50 44</p>
              </Link>
            </li>
            <li className="hover:text-white my-3 text-sm">
              <Link href="#" className="flex">
                <MdCall size={16} />
                <p className="ms-3">order@pallhotellet.se</p>
              </Link>
            </li>
          </div>

          <div className="md:w-3/12 py-4 md:mt-10">
            <p className="text-2xl mb-5 text-white font-medium">Snabblänkar</p>
            <li className="hover:text-white my-3 text-sm">
              <Link href="/">
                Hem
              </Link>
            </li>
            {/* <li className="hover:text-white my-3 text-sm">
              <Link href="/services">
                Hitta oss
              </Link>
            </li> */}
            <li className="hover:text-white my-3 text-sm">
              <Link href="/contact">
                Kontakt
              </Link>
            </li>
            <li className="hover:text-white my-3 text-sm">
              <Link href="/login">
                Logga in
              </Link>
            </li>
            <li className="hover:text-white my-3 text-sm">
              <Link href="/quotation">
                Offertförfrågan
              </Link>
            </li>
          </div>

        </div>

        <div className="md:w-10/12 mx-auto px-10 md:px-7">
          <p className=" ">
            <span className="text-white"> &copy; Pallhotellet</span>
            <span className="text-gray-400 hover:text-white"> &nbsp; 2024, All Rights Reserved. </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
