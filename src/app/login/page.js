export default function Login() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Wrapper for the logo */}
        <div className="mb-6">
          <img
            src="/imgs/Pallhotellet.seTransparent.png"
            alt="Pallhotellet Logo"
            className="h-8 w-auto"
          />
        </div>
  
        {/* Login form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Välkommen till Pallhotellet!
          </h1>
          <form className="space-y-4">
            <div>
           
              <input
                type="email"
                placeholder="Ditt mail "
                className="w-full p-2 border border-gray-300 rounded mt-1  focus:outline-orange-500"
                required
              />
            </div>
            <div>
              
              <input 
                type="password"
                placeholder="Ditt lösenord"
                className="w-full p-2 border border-gray-300 rounded mt-1  focus:outline-orange-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
            >
            Logga in
            </button>
          </form>
        </div>
      </div>
    );
  }
  