"use client"
import { useRouter } from 'next/navigation';
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
              <button 
                type="button"
                onClick={handleRedirect}
                aria-label="Gå tillbaka till inloggningssidan"
                className="focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full"
              >
                <SlArrowLeftCircle
                  className="text-gray-500 text-start text-5xl cursor-pointer"
                />
              </button>
            </div>

            
            <div className="flex px-6 justify-center  items-center">
              <img
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
                <label htmlFor="email" className="sr-only">E-postadress</label>
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
                aria-label="Återställ lösenord och skicka återställningslänk"
                className="w-full bg-[#FF6F0F] text-white px-4 py-3 rounded-md hover:bg-[#f07f3e] focus:ring-2 focus:ring-orange-500"
              >
                Återställa
              </button>
            </form>
          </section>
        </div>

      </div>

      {/* Info text to increase word count and add local SEO context */}
      <div className="mt-12 max-w-lg text-center text-xs text-gray-500 px-6 pb-8">
        <h2 className="font-semibold text-gray-600 mb-2">Återställ lösenord hos Pallhotellet</h2>
        <p className="mb-2">
          Har du glömt ditt lösenord? Ange din e-postadress ovan så skickar vi en länk för att återställa ditt lösenord. På så sätt kan du snabbt få tillgång till ditt konto hos Pallhotellet och fortsätta hantera dina lagertjänster i Motala.
        </p>
        <p>
          Vi värnar om din säkerhet. Se till att ange samma e-postadress som du registrerade ditt konto med. Om du har problem med att återställa ditt lösenord eller inte får något mejl, vänligen kontakta vår kundtjänst så hjälper vi dig vidare med dina lager- och logistikfrågor.
        </p>
      </div>
      </div>
  );
}