import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProductType } from './types/ProductType';

type CartState = {
    cart: ProductType[]
    // addProduct: (product: ProductType) => void,
    // removeProduct: (product: ProductType) => void,
    isOpen: boolean;
    toggleCart: () => void;

}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            isOpen: false,
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
        { name: 'cart-storage' }
    ),
);