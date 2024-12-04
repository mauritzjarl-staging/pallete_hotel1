"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { SlArrowLeftCircle } from "react-icons/sl";

export default function forgotpassword() {
  const router = useRouter();  // Initialize useRouter
  const handleRedirect = () => {
    router.push('/logga_in');  // Redirect to /login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <div>

        <div className="w-full">
         
          <div className="flex items-center w-full px-2 py-6">
         
            <div className="flex">
              <SlArrowLeftCircle
                onClick={handleRedirect}  
                className="text-gray-500 text-start text-5xl cursor-pointer"
              />
            </div>

            
            <div className="flex px-6 justify-center  items-center">
              <Image
                src="/imgs/Pallhotellet.seTransparent.png"
                alt="Pallhotellet Logo"
                className="h-8 w-auto"  
                height={500}  
                width={500}   
              />
            </div>
          </div>
          <section className="bg-white p-12  mx-auto rounded-xl shadow-lg w-[449px]">
            <div className="text-2xl font-bold  text-[#505050] mb-6">
              <h1 className="flex justify-center mx-auto w-4/6">Återställ ditt lösenord</h1>
            </div>

            <form className="space-y-4 px-5">
              <div>
               
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e-post"
                  className="w-full px-4 py-3 border border-gray-300  bg-[#F5F5F5] rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6F0F] text-white px-4 py-3 rounded-md hover:bg-[#f07f3e] focus:ring-2 focus:ring-orange-500"
              >
                Återställa
              </button>
            </form>
          </section>
        </div>

      </div>
    </div>
  );
}