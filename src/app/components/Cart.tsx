'use client'
import { useCartStore } from "@/store";
import Image from "next/image";
import shoppingCart from "../assets/shoppingCart.svg";


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
                        2
                    </span>
                </li>
            </div>

            {
                useStore.isOpen && (
                    <div 
                    onClick={() => useStore.toggleCart()}
                    className="fixed w-full h-screen bg-black bg-opacity-50 z-50 top-0 left-0">
                        <div 
                        onClick={(e) => e.stopPropagation()}
                        className="absolute font-bold text-red-700 uppercase right-0 top-0 w-1/3 h-screen bg-yellow p-12 overflow-y-scroll">
                            <h1>Meu Carrinho</h1>
                            {
                                useStore.cart.map((product) => (
                                    <div key={product.index}>{product.title}</div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )

}