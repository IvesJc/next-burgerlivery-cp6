import { ProductApiResponse } from "./ProductType";

interface AppetizerValues {
    small: number;
    large: number;
}
export type AppetizerType = ProductApiResponse<AppetizerValues>;
