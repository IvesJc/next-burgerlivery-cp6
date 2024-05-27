'use client'

import { useCartStore } from "@/store";
import Image from "next/image";
import { formatPrice } from "../lib/utils";
import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Checkout() {

    const router = useRouter();

    const useStore = useCartStore();

    const totalPrice = useStore.cart.reduce((acc, item) => {
        return acc + (item.value! * item.quantity!);
    }, 0);

    const handleButtonClick = () => {
        alert('Compra finalizada com sucesso!');
        router.push('/');
    };


    return (
        <div className="flex flex-col p-5 container">
            <div className="border-b border-red-700 my-4"></div>
            <h1 className='uppercase font-bold text-md h-full flex items-center text-red-700'>Meu Carrinho</h1>
            {
                useStore.cart.map((product) => (
                    <div key={product.title} className="flex justify-between my-4">
                        <Image
                            src={product.image}
                            width={100}
                            height={100}
                            alt={product.title}
                            className="object-cover w-24" />
                        <div>
                            <p>{product.title}</p>
                            <p>{formatPrice(product.value * product.quantity)}</p>
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
                ))
            }
            <div>
                <p className='uppercase font-bold text-md h-full flex items-center text-red-700'>Forma de Pagamento</p>
                <div className="flex items-center gap-1">
                    <input type="radio" name="payment" id="pix" />
                    <label htmlFor="pix" className='uppercase font-bold text-md text-red-700'>
                        Pix
                    </label>
                    <FaPix />
                </div>
                <div className="flex items-center gap-1">
                    <input type="radio" name="payment" id="debit" />
                    <label htmlFor="debit" className='uppercase font-bold text-md h-full text-red-700'>Cartão de Débito</label>
                    <FaRegCreditCard />
                </div>
                <div className="flex items-center gap-1">
                    <input type="radio" name="payment" id="credit" />
                    <label htmlFor="credit" className='uppercase font-bold text-md h-full text-red-700'>Cartão de Crédito</label>
                    <FaRegCreditCard />
                </div>
                <div className="flex items-center gap-1">
                    <input type="radio" name="payment" id="cash" />
                    <label htmlFor="cash" className='uppercase font-bold text-md h-full text-red-700'>Dinheiro</label>
                    <FaMoneyBillAlt />
                </div>
            </div>

            <p>Total: {formatPrice(totalPrice)}</p>

            {

                useStore.cart.length > 0 && (
                    <button
                        onClick={handleButtonClick}
                        className="w-full rounded-md bg-red-700 hover:bg-red-500 text-yellow font-bold py-2 px-4 mt-4">
                        Finalizar Compra
                    </button>
                )
            }

        </div>
    )
}
