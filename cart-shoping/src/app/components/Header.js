import Link from 'next/link'

export default function Header() {
  return (
    <header>
    <nav className="flex justify-between items-center h-12 px-4 shadow-md bg-gray-800 text-white">
      <Link href="/" className="text-lg font-bold">
        Amazon Shopping Cart
      </Link>
            <div className="">
                <span className=" font-bold text-orange-600 ml-4 mt-1 text-center w-4 ">0</span>
                <Link href="/cart">Cart</Link>
            </div>
        </nav>
    </header>
  )
}
