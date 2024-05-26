import { ProductType } from "../types/ProductType";
import Product from "../components/Product";

async function getProducts() {
    const res = await fetch('http://localhost:8000/hamburgers');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function Cardapio() {

    const products = await getProducts();

    return (
        <div className="container mx-auto max-w-7xl mx-auto pt-8 p-8 ">
            <h1 className='uppercase font-bold text-md h-full flex items-center text-red-700'>Cardapio</h1>
            <div className="grid grid-cols-3 gap-10">

                {products.map((product: ProductType) => (
                    <Product key={product.title} product={product}></Product>
                ))}
            </div>
        </div>
    );
}
export default Cardapio;