import { BeveragesType } from "../types/BeveragesType";
import Beverages from "../components/Beverages";
import NavFoods from "../components/NavFoods";

async function getBeverages() {
    const res = await fetch('http://localhost:8000/beverages');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function Beverage() {

    const beverages = await getBeverages();

    return (
        <div className="container mx-auto max-w-7xl mx-auto pt-8 p-8 ">
            <h1 className='uppercase font-bold text-md h-full flex items-center text-red-700'>Cardapio</h1>
            <NavFoods />
            <div className="grid grid-cols-3 gap-10">

                {beverages.map((beverage: BeveragesType) => (
                    <Beverages key={beverage.title} beverage={beverage}></Beverages>
                ))}
            </div>
        </div>
    );
}
export default Beverage;