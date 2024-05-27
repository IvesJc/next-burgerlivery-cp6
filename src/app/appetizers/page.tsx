import { AppetizerType } from "../types/AppetizerType";
import Appetizer from "../components/Appetizer";
import NavFoods from "../components/NavFoods";

async function getAppetizers() {
    const res = await fetch('http://localhost:8000/appetizers');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function Appetizers() {

    const appetizers = await getAppetizers();

    return (
        <div className="container mx-auto max-w-7xl mx-auto pt-8 p-8 ">
            <h1 className='uppercase font-bold text-md h-full flex items-center text-red-700'>Cardapio</h1>
            <NavFoods />
            <div className="grid grid-cols-3 gap-10">

                {appetizers.map((appetizer: AppetizerType) => (
                    <Appetizer key={appetizer.title} appetizer={appetizer}></Appetizer>
                ))}
            </div>
        </div>
    );
}
export default Appetizers;