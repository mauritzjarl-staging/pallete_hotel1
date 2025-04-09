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
          src="/imgs/Pallhotellet.seTransparent.png"
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
              <Link href="/forgotpassword" className="text-orange-500 hover:text-orange-600">
                Glömt lösenordet?
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 text-sm rounded hover:bg-orange-600"
          >
            Logga in
          </button>
        </form>

        {/* Register link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Har du inget konto?{' '}
            <Link href="/register" className="text-orange-500 text-sm hover:text-orange-600">
              Registrera dig här
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
