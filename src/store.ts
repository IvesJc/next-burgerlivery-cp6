import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { HamburgersType } from './app/types/HamburgersType';
import { DessertsType } from './app/types/DessertsType';
import { BeveragesType } from './app/types/BeveragesType';
import { AppetizerType } from './app/types/AppetizerType';

type CartProduct = {
    title: string;
    image: string;
    value: number;
    quantity: number;
}
type CartState = {
    cart: CartProduct[],
    addProduct: (product: (HamburgersType | BeveragesType | AppetizerType | DessertsType | CartProduct), valueSelection?: string) => void,
    removeProduct: (product: (HamburgersType | BeveragesType | AppetizerType | DessertsType | CartProduct)) => void,
    isOpen: boolean;
    toggleCart: () => void;
    onCheckout: string;
    setCheckout: (checkout: string) => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            addProduct: (item, valueSelection) =>
                set((state) => {
                    let updatedTitle = item.title;
                    if (valueSelection) {
                        updatedTitle += " " + valueSelection
                    }

                    const existingProduct = state.cart.find((p) => p.title === updatedTitle);
                    if (existingProduct) {
                        const updatedCart = state.cart.map((p) => {
                            if (p.title === updatedTitle) {
                                return { ...p, quantity: p.quantity ? p.quantity + 1 : 1 };
                            }
                            return p;
                        });
                        return { cart: updatedCart };
                    }

                    const title = updatedTitle;
                    
                    let valuesPropName: string;
                    if ("values" in item) {
                        valuesPropName = "values";
                    } else {
                        valuesPropName = "value";
                    }

                    let value: number;
                    if (typeof item[valuesPropName] === "number") {
                        value = item[valuesPropName] as number;
                    } else {
                        value = item[valuesPropName][valueSelection];
                    }

                    let image: string;
                    if (Array.isArray(item.image)) {
                        if (valueSelection === "small" || valueSelection === "single") {
                            image = item.image[0];
                        } else {
                            image = item.image[1];
                        }
                    } else {
                        image = item.image;
                    }
                    
                    return { cart: [...state.cart, { title, image, value, quantity: 1 }] }
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
