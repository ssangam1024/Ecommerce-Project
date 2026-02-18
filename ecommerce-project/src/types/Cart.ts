import type { Product } from "./products";

export type CartItem ={
    productId: string;
    quantity: number;
    deliveryOptionId: string;
    product: Product;
}

export type Cart = CartItem[];

export type Loadcart= () => Promise<void>;
