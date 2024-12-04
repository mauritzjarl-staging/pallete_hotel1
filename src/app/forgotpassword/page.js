export default function PAGE() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] sm:w-[26rem]">
        <h1 className="text-2xl font-bold text-gray-500 mb-6">Återställ ditt lösenord</h1>
        <form className="space-y-4 px-5">
          <div>
            <label htmlFor="email" className="text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ange din e-postadress"
              className="w-full p-2 border bg-zinc-200 border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
          >
            Skicka återställningslänk
          </button>
        </form>
      </div>
    </div>
  );
}