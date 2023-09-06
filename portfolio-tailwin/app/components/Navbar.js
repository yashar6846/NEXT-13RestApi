
import Image from 'next/image'
import Link from 'next/link';
import {FaArtstation,FaWarehouse } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 px-4 bg-green-500'>
      <div className=' max-w-container h-full mx-outo py-1 font-titleFont flex items-center justify-between'>
         <div className=''>
        
          <image src={"https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"} width={60} height={60}/>
         </div>
         <div>
         <ul>
         <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-blue-600
        cursor-pointer duration-300 nav-link'><FaWarehouse /></Link>
         </ul>
         </div>
      </div>
    
    </div>
  )
}
