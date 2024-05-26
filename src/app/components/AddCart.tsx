'use client'

import { useCartStore } from "@/store";
import { HamburgersType } from "../types/HamburgersType";
import { AppetizerType } from "../types/AppetizerType";
import { BeveragesType } from "../types/BeveragesType";

export default function Product({ product }: { product: HamburgersType | AppetizerType | BeveragesType }) {

    const { addProduct } = useCartStore();

    return (
        <button
            onClick={() => addProduct(product)}
            className="rounded-md bg-red-700 text-yellow font-bold text-center text-sm p-1"
        >Adicionar ao carrinho</button>

    )
}
