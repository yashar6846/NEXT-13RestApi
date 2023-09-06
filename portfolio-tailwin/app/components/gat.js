// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Logo
        </Link>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="filter" className="text-white hover:text-gray-300">
              About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:text-gray-300">
             Services
              </Link>
            </li>
            <li>
              <Link href="/contact">
                {/* <a className="text-white hover:text-gray-300">Contact</a> */}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
