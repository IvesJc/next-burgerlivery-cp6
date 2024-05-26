import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { HamburgersType } from './app/types/HamburgersType';
import { DessertsType } from './app/types/DessertsType';
import { BeveragesType } from './app/types/BeveragesType';
import { AppetizerType } from './app/types/AppetizerType';

type CartState = {
    cart: (HamburgersType | DessertsType | BeveragesType | AppetizerType)[],
    addProduct: (product: HamburgersType | BeveragesType | AppetizerType | DessertsType) => void,
    removeProduct: (product: HamburgersType | BeveragesType | AppetizerType | DessertsType) => void,
    isOpen: boolean;
    toggleCart: () => void;
    onCheckout: string;
    setCheckout: (checkout: string) => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            addProduct: (item) =>
                set((state) => {
                    const product = state.cart.find((p) => p.title === item.title);
                    if (product) {
                        const updatedCart = state.cart.map((p) => {
                            if (p.title === item.title) {
                                return { ...p, quantity: p.quantity ? p.quantity + 1 : 1 };
                            }
                            return p;
                        });
                        return { cart: updatedCart };
                    } else {
                        return { cart: [...state.cart, { ...item, quantity: 1 }] }
                    }
                })
            ,
            removeProduct: (item) =>
                set((state) => {
                    const existingProduct = state.cart.find((p) => p.title === item.title);
                    if (existingProduct && existingProduct.quantity! > 1) {
                        const updatedCart = state.cart.map((p) => {
                            if (p.title === item.title) {
                                return { ...p, quantity: p.quantity! - 1 };
                            }
                            return p;
                            });
                            return { cart: updatedCart };
                        }else{
                            const filteredCart = state.cart.filter((p) => p.title !== item.title);	
                            return { cart: filteredCart };
                        }
                })
            ,
            isOpen: false,
        toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
        onCheckout: 'cart',
        setCheckout: (checkout) => set(() => ({ onCheckout: checkout })),
    }),
{ name: 'cart-storage' }
    ),
);
