'use client'
import { useCartStore } from "@/store";
import Image from "next/image";
import shoppingCart from "../assets/shoppingCart.svg";
import CartDrawer from "./CartDrawer";


export default function Cart() {
    const useStore = useCartStore();

    return (
        <>
            <div
                onClick={() => useStore.toggleCart()}
                className="flex items-center cursor-pointer relative">
                <li className="ml-10 mr-10 mt-2 uppercase hover:border-b text-red-700 font-bold">
                    <Image
                        src={shoppingCart}
                        height={20}
                        alt="Hamburguer"
                    />
                    <span className="bg-red-700 text-yellow rounded-full font-bold h-5 w-5 flex items-center justify-center absolute -top-2 right-7">
                        {useStore.cart?.length}
                    </span>
                </li>
            </div>

            {
                !useStore.isOpen && (
                    <CartDrawer />
                )
            }
        </>
    )

}