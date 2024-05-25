import Link from "next/link";
import Logo from "../assets/hamburger-color.png";
import Image from 'next/image'
import Cart from "../assets/shoppingCart.svg";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";


function Navbar() {
    return (
        <nav className="top-0 w-full flex items-center h-24 px-8 bg-yellow text-gray-200">
            <div className="flex items-center justify-between h-full w-full px-4 ">
                <Link href='/' className='uppercase font-bold text-md h-full flex items-center text-red-700'>
                    <Image
                        src={Logo}
                        width={30}
                        height={30}
                        alt="Burgerlivery Logo"
                    />
                    Burgerlivery
                </Link>
                <div>
                    <ul className="sm:flex ">
                        <Link href="/home">
                            <li className="ml-10 mt-2 uppercase hover:border-b text-red-700 font-bold">
                                Home
                            </li>
                        </Link>
                        <Link href="/cardapio">
                            <li className="ml-10 mt-2 uppercase hover:border-b text-red-700 font-bold">
                                Cardápio
                            </li>
                        </Link>
                        <Link href="/sobre">
                            <li className="ml-10 mt-2 uppercase hover:border-b text-red-700 font-bold">
                                Sobre
                            </li>
                        </Link>
                        <Link href="/contato">
                            <li className="ml-10 mt-2 uppercase hover:border-b text-red-700 font-bold">
                                Contato
                            </li>
                        </Link>
                        <Link href="/cadastro">
                            <li className="ml-10 uppercase hover:bg-yellow hover:text-red-700 text-yellow font-bold bg-red-700 p-2 rounded-full">
                                Cadastre-se
                            </li>
                        </Link>
                        {/* <Link href="/login">
                            <li className="ml-10 mt-2 uppercase hover:border-b text-red-700 font-bold">
                                Login
                            </li>
                        </Link> */}
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="ml-10 uppercase hover:border-b text-red-700 font-bold">
                                    Login
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <Link href="/carrinho">
                            <li className="ml-10 mr-10 mt-2 uppercase hover:border-b text-red-700 font-bold">
                                <Image
                                    src={Cart}
                                    height={20}
                                    alt="Hamburguer"
                                />
                            </li>
                        </Link>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;