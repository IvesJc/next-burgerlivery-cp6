import { useCartStore } from "@/store";
import { formatPrice } from "../lib/utils";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import CheckoutButton from "./CheckoutButton";


export default function CartDrawer() {

    const useStore = useCartStore();

    const totalPrice = useStore.cart.reduce((acc, item) => {
        return acc + (item.values.single! * item.quantity!);
    }, 0);

    return (
        <div
            onClick={() => useStore.toggleCart()}
            className="fixed w-full h-screen bg-black bg-opacity-50 z-50 top-0 left-0">
            <div
                onClick={(e) => e.stopPropagation()}
                className="absolute font-bold text-red-700 uppercase right-0 top-0 w-1/3 h-screen bg-yellow p-12 overflow-y-scroll">

                <button onClick={() => useStore.toggleCart()}
                    className="font-bold text-red-700 text-sm">
                    <IoMdArrowRoundBack />
                    Voltar para loja
                </button>
                <div className="border-b border-red-700 my-4"></div>
                <h1>Meu Carrinho</h1>
                {
                    useStore.cart.map((product) => (
                        <div key={product.index} className="flex justify-between my-4">
                            <Image
                                src={product.image[0]}
                                width={100} height={100}
                                alt={product.title}
                                className="object-cover w-24" />
                            <div>
                            <p>{product.title}</p>
                            <p>{formatPrice(product.values.single)}</p>
                            <button className="py-1 px-2 border border-red-700 rounded-md mt-2 text-sm mr-1"
                                onClick={() => useStore.addProduct(product)}>
                                Adicionar
                            </button>
                            <button className="py-1 px-2 border border-red-700 rounded-md mt-2 text-sm mr-1"
                                onClick={() => useStore.removeProduct(product)}>
                                Remover
                            </button>
                            </div>
                        </div>
                    ))}

                    {
                        useStore.cart.length > 0 && useStore.onCheckout === 'cart' &&(
                            <CheckoutButton totalPrice={totalPrice}/>
                        )
                    }

            </div>
        </div>
    )
}