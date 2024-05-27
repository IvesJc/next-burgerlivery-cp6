import { ProductApiResponse } from "./ProductType";

interface HamburgerValues {
    single: number;
    combo: number;
}
export type HamburgersType = ProductApiResponse<HamburgerValues>;