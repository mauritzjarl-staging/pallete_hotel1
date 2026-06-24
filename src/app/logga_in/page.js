// pages/logga_in.js
'use client';  // Mark as a client-side component

import Link from 'next/link'

export default function LoggaIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex flex-col items-center mt-8 justify-center min-h-[80vh] bg-gray-300">
      {/* Wrapper for the logo */}
      <div className="my-6">
        <img
          src="/imgs/Pallhotellet.seTransparent.webp"
          alt="Pallhotellet Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* Login form */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] sm:w-[26rem] mb-8 mt-8">
        <div className="flex flex-col w-4/6 text-center justify-center items-center mx-auto mb-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-500">
            Välkommen till Pallhotellet!
          </h1>
        </div>

        <form className="space-y-4 px-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">E-postadress</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ditt mail"
              className="w-full p-2 border bg-[#F5F5F5] text-sm px-4 border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Lösenord</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ditt lösenord"
              className="w-full p-2 border bg-[#F5F5F5] px-4 text-sm border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Forgot password link */}
          <div className="flex justify-end text-center">
            <p className="text-sm text-gray-600">
              <Link href="/forgotpassword" aria-label="Återställ glömt lösenord" className="text-orange-500 hover:text-orange-600">
                Glömt lösenordet?
              </Link>
            </p>
          </div>

          <button
            type="submit"
            aria-label="Klicka för att logga in på ditt konto"
            className="w-full bg-orange-500 text-white p-2 text-sm rounded hover:bg-orange-600"
          >
            Logga in
          </button>
        </form>

        {/* Register link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Har du inget konto?{' '}
            <Link href="/register" aria-label="Skapa ett nytt konto" className="text-orange-500 text-sm hover:text-orange-600">
              Registrera dig här
            </Link>
          </p>
        </div>
      </div>

      {/* Info text to increase word count and add local SEO context */}
      <div className="mt-12 max-w-xl text-center text-xs text-gray-500 px-6 pb-8">
        <h2 className="font-semibold text-gray-600 mb-2">Om Pallhotellet – Flexibel lagerhantering i Motala</h2>
        <p className="mb-4 text-justify sm:text-center">
          Välkommen till Pallhotellet. Vi erbjuder trygga, säkra och mycket moderna lagertjänster för både företag och privatpersoner. Oavsett om ni har behov av tillfällig eller långvarig pallagring, tempererad inomhusförvaring (varmlager), rymlig utomhuslagring på hårdgjorda ytor, eller vill hyra ett enskilt och säkert förråd för self-storage, har vi den perfekta lösningen för er i våra välbevakade och strategiskt belägna lokaler i Motala, Östergötland. Våra lagerlokaler är utrustade med moderna säkerhetssystem för att skydda era tillgångar.
        </p>
        <p className="mb-4 text-justify sm:text-center">
          Genom att logga in på ert användarkonto på vår hemsida kan ni enkelt administrera era bokade lagerplatser, granska pågående offertförfrågningar för era logistikbehov, uppdatera företagets kontaktuppgifter och hålla direktkontakt med vår kundservice. Vi fokuserar ständigt på högsta möjliga säkerhet, flexibla avtalsvillkor och ett personligt bemötande för att garantera att ert gods hanteras på absolut bästa sätt från mottagning till distribution.
        </p>
        <p className="mb-6 text-justify sm:text-center">
          Har ni glömt era inloggningsuppgifter eller har frågor om hur vår inloggningsportal fungerar? Vill ni veta mer om hur vi kan hjälpa er med tredjepartslogistik (3PL), containerlossning, orderplock eller andra kringtjänster? Tveka inte att höra av er till oss på Pallhotellet. Vi hjälper er gärna att optimera ert lagerflöde, sänka era fasta kostnader och effektivisera hela logistikkedjan. Följ oss gärna på våra sociala kanaler för att hålla er uppdaterade om nyheter och erbjudanden.
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
