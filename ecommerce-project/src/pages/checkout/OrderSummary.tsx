
import { DeliveryOptions } from './DeliveryOptions.jsx';
import { CartItemDetails } from './CartItemDetails.jsx';
import { DeliveryDate } from './DeliveryDate.jsx';
import type { Cart ,Loadcart, CartItem} from '../../types/Cart.js';
import type { DeliveryOptions as DeliveryOptionType } from '../../types/deliveryOptions.js';



type OrderSummaryProps = {
    cart: Cart;
    deliveryOptions: DeliveryOptionType[];
    loadCart: Loadcart;

}

export function OrderSummary({cart, deliveryOptions, loadCart, }: OrderSummaryProps) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem: CartItem) => {
                return (
                    <div key={cartItem.productId}
                        className="cart-item-container">
                        <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions}/>

                        <div className="cart-item-details-grid">
                            
                        <CartItemDetails cartItem={cartItem} loadCart={loadCart}/>

                        <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                        </div>
                    </div>
                );
            })}

        </div>
    );
}