import { DessertsType } from "../types/DessertsType";
import Desserts from "../components/Desserts";

async function getDesserts() {
    const res = await fetch('http://localhost:8000/desserts');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function Dessert() {

    const desserts = await getDesserts();

    return (
        <div className="container mx-auto max-w-7xl mx-auto pt-8 p-8 ">
            <h1 className='uppercase font-bold text-md h-full flex items-center text-red-700'>Cardapio</h1>
            <div className="grid grid-cols-3 gap-10">

                {desserts.map((desserts: DessertsType) => (
                    <Desserts key={desserts.title} desserts={desserts}></Desserts>
                ))}
            </div>
        </div>
    );
}
export default Dessert;