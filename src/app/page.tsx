import Button from "./components/Button";
import HomeBg from "../app/assets/bg-top.jpg";
import Image from 'next/image'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Layout from "./layout";


export default function Home() {
  return (
    <>
      <div className="flex items-center h-[calc(100vh - 73px)]">
        <div className="ml-20">
          <h1 className="h1 font-bold text-5xl leading-20 mb-4 ">Hamburgers para todos os gostos</h1>
          <p>Nós fazemos deliciosos hamburgers e entregamos na sua porta</p>
          <Button text={"PEÇA AGORA"}></Button>
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
