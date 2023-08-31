import Image from "next/image"
import { CiSearch,CiBank,CiMenuBurger,CiLocationArrow1,CiSquarePlus } from "react-icons/ci";
import { HiHeart,HiUsers } from "react-icons/hi";

function Header() {
  return (
    <div className=" shadow-sm border-b bg-white sticky top-0 z-50">
    <div className="flex items-center justify-between mx-5 xl:mx-auto max-w-6xl">
        <div className="relative hidden lg:inline-grid w-24 h-12 cursor-pointer">
        <Image
            src="http://localhost:3000/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2a%2FInstagram_logo.svg%2F1280px-Instagram_logo.svg.png&w=1920&q=75"
            layout="fill"
            alt="Instagram Logo"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://cdn.icon-icons.com/icons2/2715/PNG/512/instagram_logo_icon_172387.png"
            layout="fill"
            alt="Instagram Logo"
            objectFit="contain"
          />
        </div>

        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <CiSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="search..."
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4 ">
            <CiBank className="navBtn" />
            <CiMenuBurger className="w-6 h-6 md:hidden cursor-pointer"/>
            <div className="navBtn relative">
                <CiLocationArrow1 className="navBtn "/>
                <div className=" absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
            </div>
            <CiSquarePlus className="navBtn"/>
            <HiUsers className="navBtn"/>
            <HiHeart className="navBtn" />
           
        </div>
    </div>
    </div>
  )
}

export default Header