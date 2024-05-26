'use client'

import { useCartStore } from "@/store";
import { formatPrice } from "../lib/utils";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

type CheckoutButtonProps = {
    totalPrice: number
}
export default function CheckoutButton({ totalPrice }: CheckoutButtonProps) {

    const router = useRouter();
    const { user } = useUser();
    const useStore = useCartStore();
    
    const handleCheckout = async () => {
        if (!user) {
            useStore.toggleCart();
            router.push(`/sign-in?redirectUrl='/'`);
            return;
        }
        useStore.setCheckout('checkout')
    };

    return (
        <div> 
            <p>Total: {formatPrice(totalPrice)}</p>
            <button
                onClick={handleCheckout}
                className="w-full rounded-md bg-red-700 hover:bg-red-500 text-yellow font-bold py-2 px-4 mt-4">
                Finalizar Compra
            </button>
        </div>
    )
}