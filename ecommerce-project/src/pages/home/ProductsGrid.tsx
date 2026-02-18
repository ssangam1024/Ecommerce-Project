import { Product } from "./Product";
import { type Product as ProductType } from "../../types/products"; 
import {type Loadcart} from '../../types/Cart';  

type ProductsGridProps = {
    products: ProductType[];
    loadCart: Loadcart;
};

export function ProductsGrid({products, loadCart}: ProductsGridProps) {
   
    return (
        <div className="products-grid">
            {products.map((product) => {

                return (
                    <Product key={product.id} product={product} loadCart={loadCart} />
                );
            }
            )}

        </div>
    );
}