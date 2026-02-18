export type Cart = { 
    productId: string;
    quantity: number;
    deliveryOptionId: string;
}[];

export type Loadcart= () => Promise<void>;