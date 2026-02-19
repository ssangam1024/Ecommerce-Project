import type { Product } from "./products";

export type Orders ={
    id: string;
    orderTimeMs: number;    
    totalCostCents: number;
    products: {
        id: string;
        name: string;
        priceCents: number;
        imageUrl: string;
        quantity: number;
        product: Product;
    }[];
}[];