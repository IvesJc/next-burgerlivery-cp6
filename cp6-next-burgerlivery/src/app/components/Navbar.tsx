import Link from "next/link";
import Logo from "../../assets/hamburger-color.png";
import Image from 'next/image'


function Navbar() {
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-yellow text-gray-200">
            <Link href='/' className='uppercase font-bold text-md h-12 flex items-center text-red'>
                <Image
                    src={Logo}
                    width={30}
                    height={30}
                    alt="Burgerlivery Logo"
                />
                Burgerlivery
            </Link>
        </nav>
    )
}

export default Navbar;