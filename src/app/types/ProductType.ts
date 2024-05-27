export interface ProductApiResponse<T = {}> {
    image: string | string[];
    title: string;
    description: string;
    value?: T;
    values?: T;
    quantity: number;
}
