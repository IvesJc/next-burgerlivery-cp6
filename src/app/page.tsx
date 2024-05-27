import Button from "./components/Button";
import HomeBg from "../app/assets/bg-top.jpg";
import Image from 'next/image'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Layout from "./layout";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="flex items-center h-[calc(100vh - 73px)]">
        <div className="ml-20">
          <h1 className="h1 font-bold text-5xl leading-20 mb-4 ">Hamburgers para todos os gostos</h1>
          <p className="mb-4">Nós fazemos deliciosos hamburgers e entregamos na sua porta</p>
            <Link href="/hamburgers" className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full">
              Peça agora
            </Link>
        </div>
        <Image
          src={HomeBg}
          height={300}
          alt="Hamburguer"
          className="grow-0 clip-ellipse w-[96%] mt-20"
        />
      </div>
    </>
  );
}
