import Link from "next/link";
import {BiGlobe} from 'react-icons/bi'
import {FaUser,FaUserTimes } from 'react-icons/fa'

export default function Header() {
  return (
    <>
    <div className="bg-green-500 ">
      <div className="container mx-auto h-11 flex items-center justify-between">
        <Link href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
          <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
        </Link>
        <nav className="flex gap-8 text-sm font-semibold">
          <Link href="#" className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100"><BiGlobe size={20} />Turkesh</Link>
          <Link href="#" className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100"><FaUser size={20}/> Yap</Link>
          <Link href="#" className="flex items-center gap-x-2 text-white transition-all text-opacity-80 hover:text-opacity-100"><FaUserTimes size={20} />Kayit OL</Link>
        </nav>
      </div>
   </div> 

  <div className="p-4 m-3">
  <section className="grid gap-8 sm:max-xl:bg-blue-50 md:grid-cols-2 md:items-center md:text-left sm:max-xl:p-9">
   <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvimPzwOXCXDCFyo4gygMnyo_C3kJ6XoGCDQ&usqp=CAU" 
    alt=""
     className="w-full rounded-lg"
    />
   </div>
   <div>
   <h1 className="mb-2 text-4xl font-medium">Headline</h1>
   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nisi minus neque similique eligendi, sequi quidem fugiat. Id ab debitis aliquid nihil omnis impedit, pariatur totam libero, natus adipisci unde?</p>
   </div>
   </section>
  </div>
   </>
  )
}
