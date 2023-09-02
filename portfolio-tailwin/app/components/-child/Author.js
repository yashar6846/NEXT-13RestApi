import Image from "next/image";
import Link from "next/link";

export default function Author() {
  return (
    <div className="auther flex py-5">
        <Image src={'/images/p2.jpg'} width={60} height={60} className=" rounded-full"></Image>
        <div className="flex flex-col justify-center px-4">
            <Link href={'/'} className="text-md font-bold text-gray-800 hover:text-gray-600" >Dog Auther</Link>
            <span className="text-sm text-gray-500">YASh Q</span>
        </div>
    </div>
  )
}
