import Image from "next/image";
import Logo from "../assets/hamburger-color.png";
import Link from "next/link";
import { FaYoutube, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="fixed bottom-0 bg-yellow py-1 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-6 justify-center w-full">
          {/* logo */}
          <Link href={'#'}>
            <Image
              src={Logo}
              width={50}
              height={50}
              alt="" />
          </Link>

          {/* social icons */}
          <div className="flex gap-x-6 text-xl text-red-700">
            <Link href={'#'}>
              <FaYoutube />
            </Link>
            <Link href={'#'}>
              <FaFacebook />
            </Link>
            <Link href={'#'}>
              <FaInstagram />
            </Link>
            <Link href={'#'}>
              <FaPinterest />
            </Link>
          </div>
          <div className="text-red-700 font-medium">
            Copyright &copy; Ives Chiba 2024. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;