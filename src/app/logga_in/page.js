"use client"

export default function logga_in() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    //   {/* Wrapper for the logo */}
    //   <div className="mb-6">
    //     <img
    //       src="/imgs/Pallhotellet.seTransparent.png"
    //       alt="Pallhotellet Logo"
    //       className="h-8 w-auto"
    //     />
    //   </div>

    //   {/* logga_in form */}
    //   <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    //     <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">
    //     Välkommen till Pallhotellet!
    //     </h1>
    //     <form className="space-y-4 px-5">
    //       <div>

    //         <input
    //           type="email"
    //           placeholder="Ditt mail "
    //           className="w-full p-2 border border-gray-300 rounded mt-1  focus:outline-orange-500"
    //           required
    //         />
    //       </div>
    //       <div>

    //         <input 
    //           type="password"
    //           placeholder="Ditt lösenord"
    //           className="w-full p-2 border border-gray-300 rounded mt-1  focus:outline-orange-500"
    //           required
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
    //       >
    //       Logga in
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      {/* Wrapper for the logo */}
      <div className="mb-6">
        <img
          src="/imgs/Pallhotellet.seTransparent.png"
          alt="Pallhotellet Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* logga_in form */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-[26rem]">
        <h1 className="text-2xl font-bold w-4/6 flex flex-col justify-between text-center mb-6 text-gray-900">
          Välkommen till Pallhotellet!
        </h1>
        <form className="space-y-4 px-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ditt mail"
              className="w-full p-2 border bg-zinc-300 border-gray-300 rounded mt-1 focus:outline-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600">Lösenord</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ditt lösenord"
              className="w-full p-2 border bg-zinc-300 border-gray-300 rounded mt-1 focus:outline-orange-500"
              required
            />
          </div>

          {/* Remember me checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-gray-600">Kom ihåg mig</label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
          >
            Logga in
          </button>
        </form>

        {/* Register link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Har du inget konto?{' '}
            <a href="/register" className="text-orange-500 hover:text-orange-600">
              Registrera dig här
            </a>
          </p>
        </div>
      </div>
    </div>

  );
}
