// src/app/register/page.js
'use client';  // Mark this component as a Client Component

import { useState } from 'react'
import { useRouter } from 'next/navigation'  // Correct router import for Client Components
import Link from 'next/link'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('') // Added state for phoneNumber
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Lösenorden matchar inte!')
      return
    }
    console.log('Registrering med:', name, email, phoneNumber, password) // Added phoneNumber to console log
    router.push('/') // Redirect to home page after successful registration
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-10 bg-gray-300">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/imgs/Pallhotellet.seTransparent.webp"
          alt="Pallhotellet Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* Register form */}
      <div className="bg-white p-8 rounded-xl mt-4 shadow-lg w-[90%] sm:w-[26rem]">
        <div className="flex flex-col w-4/6 text-center justify-center items-center mx-auto ">
          <h1 className="text-2xl font-bold mb-6 text-gray-500">
          Välkommen till 
          Pallhotellet!
          </h1>
        </div>

        <form className="space-y-4 px-5" onSubmit={handleSubmit}>
          {/* Full name field */}
          <div>
            <label htmlFor="name" className="sr-only">Användarnamn</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Användarnamn"
              className="w-full p-2 border bg-[#F5F5F5] text-sm px-8 border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="email" className="sr-only">E-postadress</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ditt mail "
              className="w-full p-2 border bg-[#F5F5F5] text-sm px-8 border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone Number field */}
          <div>
            <label htmlFor="phoneNumber" className="sr-only">Telefonnummer</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Telefonnummer"
              className="w-full p-2 border bg-[#F5F5F5] text-sm px-8 border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          {/* Password field */}
          <div>
            <label htmlFor="password" className="sr-only">Lösenord</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Lösenord"
              className="w-full p-2 border bg-[#F5F5F5] text-sm px-8 border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password field */}
          <div>
            <label htmlFor="confirmPassword" className="sr-only">Bekräfta lösenord</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Bekräfta lösenord"
              className="w-full p-2 border bg-[#F5F5F5] text-sm px-8 border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            aria-label="Skapa konto och registrera dig"
            className="w-full bg-orange-500 text-white p-2 text-sm rounded hover:bg-orange-600"
          >
            Anmäl dig
          </button>
        </form>

        {/* Login link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Har du redan ett konto?{' '}
            <Link href="/logga_in" aria-label="Gå till logga in sidan" className="text-orange-500 text-sm hover:text-orange-600">
              Logga in här
            </Link>
          </p>
        </div>
      </div>

      {/* Info text to increase word count and add local SEO context */}
      <div className="mt-12 max-w-lg text-center text-xs text-gray-500 px-6 pb-8">
        <h2 className="font-semibold text-gray-600 mb-2">Skapa konto på Pallhotellet i Motala</h2>
        <p className="mb-2">
          Genom att registrera ett konto hos oss får du full insyn i dina lagringstjänster och din godshantering. Vi erbjuder flexibla logistik- och lagerlösningar som är skräddarsydda för dina specifika behov.
        </p>
        <p>
          Registreringen är enkel och ger dig direkt tillgång till vår kundportal där du kan skicka in offertförfrågningar, hantera pågående bokningar och kommunicera med vårt supportteam. Vårt moderna pallager och förråd i Motala står redo att ta emot dina varor på ett tryggt och säkert sätt.
        </p>
      </div>
      </div>
  )
}
