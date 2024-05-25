'use client'

import { useCartStore } from "@/store";
import { ProductType } from "../types/ProductType";

export default function Product({ product }: { product: ProductType}) {

    const { addProduct } = useCartStore();

    return (
        <button
            onClick={() => addProduct(product)}
            className="rounded-md bg-red-700 text-yellow font-bold text-center text-sm p-1"
        >Adicionar ao carrinho</button>

    )
}
