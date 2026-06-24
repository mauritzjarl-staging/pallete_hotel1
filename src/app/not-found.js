import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5'; 

export const metadata = {
  title: 'Sidan hittades inte | Pallhotellet',
  description: 'Sidan du söker finns inte. Gå tillbaka till startsidan för att hitta det du letar efter hos Pallhotellet.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPage() {
  return (
    <div className="h-screen bg-[#182a2f] text-white flex flex-col justify-center items-center">
      {/* Heading and Error Message */}
      <div className="text-center space-y-4">
        <h1 className="text-7xl font-bold tracking-wide animate-pulse">404</h1>
        <p className="text-2xl md:text-3xl">Sidan hittades inte</p>
        <p className="text-lg md:text-xl text-gray-300">
          Sidan du letar efter finns inte eller har flyttats.
        </p>
      </div>

      {/* Back to Home Button */}
      <Link href="/"
          className="mt-8 text-white hover:border px-6 py-3 flex items-center space-x-2 rounded-md 
        bg-[#ff6300] transition-all duration-100 ease-in-out"
        >
          <IoArrowBack className="text-lg" />
          <span>Tillbaka till startsidan</span>
      </Link>

      {/* Decorative Animation */}
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#001d24] to-transparent opacity-80"></div>
    </div>
  );
}
