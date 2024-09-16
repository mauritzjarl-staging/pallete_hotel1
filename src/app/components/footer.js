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
          <div className="md:w-4/12 h-auto mt-10">
            <Image
              width={250}
              height={250}
             className="mb-5"
              src="/imgs/Pallhotellet.se.png"
            />
            <p className="text-sm md:w-8/12 w-4/6 hover:text-white">
              Diam dolor diam ipsum sit. Aliqa diam amet diam at eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita.
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

          <div className="md:w-3/12  mt-10">
            <p className="text-2xl mb-5 font-medium text-white">Address</p>
            <li className="hover:text-white my-3 text-sm">
              <Link href="#" className="flex">
                <IoLocationSharp size={16} />
                <p className="ms-3">59196 Motala Sweden</p>
              </Link>
            </li>
            <li className="hover:text-white my-3  text-sm">
              <Link href="#" className="flex">
                <MdCall size={16} />
                <p className="ms-3">info@pallhotellet.se</p>
              </Link>
            </li>
            <li className="hover:text-white my-3 text-sm">
              <Link href="#" className="flex">
                <MdEmail size={16} />
                <p className="ms-3">+012 345 67890</p>
              </Link>
            </li>
          </div>

          <div className="md:w-3/12  mt-10">
            <p className="text-2xl mb-5 text-white font-medium">Quick Links</p>
            <li className="hover:text-white my-3 text-sm">
              <Link href="/">
                <i className="fa-solid font-extrabold text-[0.8rem] fa-chevron-right me-2"></i>
                Home
              </Link>
            </li>
            <li className="hover:text-white my-3 text-sm">
              <Link href="#">
                <i className="fa-solid font-extrabold text-[0.8rem] fa-chevron-right me-2"></i>
                Contact
              </Link>
            </li>
            <li className="hover:text-white my-3 text-sm">
              <Link href="#">
                <i className="fa-solid font-extrabold text-[0.8rem] fa-chevron-right me-2"></i>
                Request for quotation
              </Link>
            </li>
            <li className="hover:text-white my-3 text-sm">
              <Link href="#">
                <i className="fa-solid font-extrabold text-[0.8rem] fa-chevron-right me-2"></i>
                Terms & Conditions
              </Link>
            </li>
            <li className="hover:text-white my-3 text-sm">
              <Link href="#">
                <i className="fa-solid font-extrabold text-[0.8rem] fa-chevron-right me-2"></i>
                Login
              </Link>
            </li>
          </div>

        </div>

        <div className="md:w-10/12 mx-auto px-10 ">
          <p className="flex items-center content-center ">
            <span className="text-white"> &copy; Pallethotel </span>
            <span className="text-gray-400 hover:text-white"> &nbsp; 2024, All Rights Reserved. </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
