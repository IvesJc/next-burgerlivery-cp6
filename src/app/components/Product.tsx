import { ProductType } from "../types/ProductType"
import ProductImage from "./ProductImage"

type ProductProps = {
    product: ProductType
}

export default function Product({ product }: ProductProps) {
    return (
        <div className="flex flex-col shadow-lg hover:shadow-2xl bg-yellow p-5">
            <div className="relative max-h-72 flex-1">
                <ProductImage product={product} fill />
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">
                <p className="w-40 truncate">{product.title}</p>
            </div>
            <div className="flex justify-between font-bold text-red-700 my-3">{product.values.single}</div>
            <button className="rounded-md bg-red-700 text-yellow font-bold text-center text-sm p-1">Adicionar ao carrinho</button>
        </div>


    )

}
