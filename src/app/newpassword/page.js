// src/app/newpassword/page.js
'use client';  // Mark this component as a Client Component

import { useState } from 'react'
import { useRouter } from 'next/navigation'  // Correct router import for Client Components
import Link from 'next/link'
import { SlArrowLeftCircle } from "react-icons/sl";

export default function NewPassword() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Lösenorden matchar inte!')
      return
    }
    console.log('Nytt lösenord inställt:', password)
    router.push('/logga_in')  // Redirect to login page after setting the new password
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-teal-500">
      {/* Logo */}
      <div className="mb-6 flex items-center space-x-4">
        <button 
          type="button"
          onClick={() => router.push('/logga_in')}
          aria-label="Gå tillbaka till inloggningssidan"
          className="focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full text-white text-3xl"
        >
          <SlArrowLeftCircle className="h-8 w-auto" />
        </button>
        <img
          src="/imgs/Pallhotellet.seTransparent.webp"
          alt="Pallhotellet Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* New Password Form */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] sm:w-[26rem]">
        <div className="flex flex-col w-4/6 text-center justify-center items-center mx-auto mb-6">
          <h1 className="text-2xl font-bold mb-6 text-gray-500">
            Ange nytt lösenord
          </h1>
          <p className="text-sm text-gray-600">
            Ange ett nytt lösenord som du kommer att använda för att logga in på ditt konto.
          </p>
        </div>

        <form className="space-y-4 px-5" onSubmit={handleSubmit}>
          {/* New Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700">Nytt lösenord</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Nytt lösenord"
              className="w-full p-2 border bg-[#F5F5F5] text-sm px-4 border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700">Bekräfta lösenord</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Bekräfta lösenord"
              className="w-full p-2 border bg-[#F5F5F5] text-sm px-4 border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            aria-label="Spara det nya lösenordet och uppdatera kontot"
            className="w-full bg-orange-500 text-white p-2 text-sm rounded hover:bg-orange-600"
          >
            Fortsätta
          </button>
        </form>

        {/* Redirect to Login */}
        {/* <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Har du redan ett konto?{' '}
            <Link href="/logga_in" className="text-orange-500 text-sm hover:text-orange-600">
              Logga in här
            </Link>
          </p>
        </div> */}
      </div>

      {/* Info text to increase word count and add local SEO context */}
      <div className="mt-12 max-w-lg text-center text-xs text-gray-500 px-6 pb-8">
        <h2 className="font-semibold text-gray-600 mb-2">Ange ett nytt lösenord för ditt Pallhotellet-konto</h2>
        <p className="mb-2">
          Här kan du ställa in ett nytt och säkert lösenord för ditt konto hos Pallhotellet. Genom att ha ett uppdaterat lösenord säkerställer du att obehöriga inte kommer åt din information rörande lagertjänster, bokningar och logistikförfrågningar i Motala.
        </p>
        <p>
          Vi rekommenderar att du väljer ett starkt lösenord med en kombination av bokstäver, siffror och specialtecken. När du har angett och bekräftat ditt nya lösenord kan du genast logga in igen och fortsätta hantera dina pågående lagringstjänster eller granska nya offerter.
        </p>
      </div>
      </div>
  )
}
