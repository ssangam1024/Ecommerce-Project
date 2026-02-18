import dayjs from 'dayjs';
import type { CartItem } from '../../types/Cart';
import type { DeliveryOptions as DeliveryOptionType } from '../../types/deliveryOptions';


type DeliveryOption = {
    cartItem: CartItem;
    deliveryOptions: DeliveryOptionType[];

}


export function DeliveryDate({ cartItem, deliveryOptions }: DeliveryOption) {
    const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    })!;
    return(
        <div className="delivery-date">
        Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
    </div> 
    );
}