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
                src="/imgs/Pallhotellet.seTransparent.webp"
                alt="Pallhotellet Logo"
                className="h-8 w-auto"  
                height={500}  
                width={500}   
              />
            </div>
          </div>
          <section className="bg-white p-12  mx-auto rounded-xl shadow-lg w-[449px]">
            <div className="text-2xl font-bold  text-[#505050] mb-6">
              <h1 className="flex justify-center mx-auto w-4/6">Återställ lösenordet</h1>
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
      <div className="mt-12 max-w-xl text-center text-xs text-gray-500 px-6 pb-8">
        <h2 className="font-semibold text-gray-600 mb-2">Återställ lösenordet hos Pallhotellet</h2>
        <p className="mb-4 text-justify sm:text-center">
          Har du glömt lösenordet till kontot? Ingen fara, ange e-postadressen i fältet ovan så skickar vi omedelbart en återställningslänk. Genom att återställa lösenordet kan du som kund snabbt logga in igen på användarkontot hos oss på Pallhotellet för att fortsätta hantera alla bokade lagertjänster, se aktiva offertförfrågningar och administrera lagerhållning i Motala. Vi ser till att återställningsprocessen är både säker och snabb för att minska onödigt driftstopp för företagets logistikverksamhet.
        </p>
        <p className="mb-4 text-justify sm:text-center">
          Vi sätter säkerheten främst på Pallhotellet. Kom ihåg att ange precis samma e-postadress som registrerades när kontot skapades. Om e-postadressen stämmer överens med vårt register skickas instruktionerna inom kort. Skulle det uppstå problem med att återställa lösenordet eller om mejlet inte kommer fram, rekommenderar vi att kontrollera skräpposten eller kontakta vår kundsupport direkt för personlig hjälp med logistik- och lagerkontot.
        </p>
        <p className="mb-6 text-justify sm:text-center">
          Som en ledande leverantör av lager- och logistiktjänster i Östergötland erbjuder Pallhotellet flexibla lösningar för alla typer av gods. Vi hjälper företag att effektivisera logistiken med tjänster som kallager, tempererat inomhuslager, säker utomhusförvaring samt komplett tredjepartslogistik (3PL). Vår målsättning är att erbjuda pålitliga tjänster som frigör tid för er kärnverksamhet. Följ gärna våra sociala medier för att ta del av uppdateringar och nyheter om hur vi utvecklar våra säkra lagringsalternativ.
        </p>
        <div className="flex justify-center space-x-6 text-sm font-semibold border-t pt-4">
          <Link href="https://www.facebook.com/share/1AW57zVRFg/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500">Facebook</Link>
          <Link href="https://instagram.com/pallhotellet" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500">Instagram</Link>
          <Link href="https://linkedin.com/company/pallhotellet" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500">LinkedIn</Link>
        </div>
      </div>
      </div>
  );
}