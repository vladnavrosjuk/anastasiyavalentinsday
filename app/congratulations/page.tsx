"use client"
import Link from "next/link"

export default function Congratulations() {
  return (
    <div className="bg-white p-4 shadow-xl rounded-xl container m-auto max-w-screen-md">
      <h2 className="text-2xl text-center">Поздравляю!</h2>
      <img src="/mm2.gif" className="mt-4 mx-auto w-1/3"/>
      <p className="text-center mt-4">Ура! Ты справилась! Вот твой подарок!</p>
      {/* Feel free to remove this button if not needed */}
      <div className="flex items-center justify-center mt-4">
          Твой подарок находится там, где настаивается мой)
      </div>
    </div>
  )
}
