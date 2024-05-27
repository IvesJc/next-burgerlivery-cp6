'use client'

import { useCartStore } from "@/store";
import { HamburgersType } from "../types/HamburgersType";
import { AppetizerType } from "../types/AppetizerType";
import { BeveragesType } from "../types/BeveragesType";
import { DessertsType } from "../types/DessertsType";

export default function Product({ product, valueSelection }: { product: HamburgersType | AppetizerType | BeveragesType | DessertsType, valueSelection: string }) {

    const { addProduct } = useCartStore();

    return (
        <button
            onClick={() => addProduct(product, valueSelection)}
            className="rounded-md bg-red-700 text-yellow font-bold text-center text-sm p-1"
        >Adicionar ao carrinho</button>

    )
}
