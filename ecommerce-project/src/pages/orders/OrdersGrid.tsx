import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";
import { type Loadcart } from "../../types/Cart"; 
import { type Orders } from "../../types/Orders"; 


type OrdersGridProps = {
    orders: Orders;
    loadCart: Loadcart;
};

export function OrdersGrid({ orders, loadCart}: OrdersGridProps) {
    return (
        <div className="orders-grid">
            {orders.map((order) => {
                return (
                    <div key={order.id} className="order-container">

                        <OrderHeader order={order} />

                        <OrderDetailsGrid order={order}  loadCart={loadCart} />
                    </div>
                )
            })}

        </div>
    );
}