"use client"
import Link from 'next/link';


export default function Home() {
  return (
    <div className="bg-white p-4 shadow-xl rounded-xl container m-auto max-w-screen-md">
      <h2 className="text-2xl text-center">Любимая Анастасия, с Днем Святого Валентина!</h2>
      <img src="/mm.gif" className="mt4 mx-auto w-1/3"/>
      <p className="text-center mt-4">Это валентинка-игра-пазл с нашими общими моментами и впечатлениями. В конце тебя ждет сюрприз, собери все пазлы чтобы узнать что это.</p>
      <p className="text-center mt-4">Не спеши, иногда детали цепляются друг за друга. Перед сборкой, раздвинь крайние детали по краям. Двигай экран пальцем, если не хватает места.</p>
      <div className="flex items-center justify-center mt-4">
        <Link href="/puzzles/1" className="focus:outline-none text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Начать</Link>
      </div>
    </div>
  )
}
