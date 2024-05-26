export type AppetizerType = {
    quantity: number;
    index: number;
    title: string;
    description: string;
    value: {
        small: number,
        large: number
    };
    image: string;
}