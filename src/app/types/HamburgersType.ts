export type HamburgersType = {
    quantity: number;
    index: number;
    title: string;
    description: string;
    values: {
        single: number,
        combo: number
    };
    image: string;
}