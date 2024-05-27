'use client'

import { useCartStore } from "@/store";
import { formatPrice } from "../lib/utils";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

type CheckoutButtonProps = {
    totalPrice: number
}
export default function CheckoutButton({ totalPrice }: CheckoutButtonProps) {

    return (
        <div> 
            <p>Total: {formatPrice(totalPrice)}</p>
            <Link href="/checkout" >
            <button
                className="w-full rounded-md bg-red-700 hover:bg-red-500 text-yellow font-bold py-2 px-4 mt-4">
                Finalizar Compra
            </button>
            </Link>
        </div>
    )
}