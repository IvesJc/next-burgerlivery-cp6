import { HamburgersType } from "../types/HamburgersType";
import Hamburgers from "../components/Hamburgers";
import Link from "next/link";
import CardapioButton from "../components/CardapioButton";
import NavFoods from "../components/NavFoods";

async function getHamburgers() {
    const res = await fetch('http://localhost:8000/hamburgers');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function Hamburger() {

    const hamburgers = await getHamburgers();

    return (
        <div className="container mx-auto max-w-7xl mx-auto pt-8 p-8 ">
            <h1 className='uppercase font-bold text-md h-full flex items-center text-red-700'>Cardapio</h1>
            <NavFoods />
            <div className="grid grid-cols-3 gap-10">

                {hamburgers.map((hamburger: HamburgersType) => (
                    <Hamburgers key={hamburger.title} hamburger={hamburger}></Hamburgers>
                ))}
            </div>
        </div>
    );
}
export default Hamburger;