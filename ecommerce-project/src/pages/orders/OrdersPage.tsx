import axios from 'axios';
import { useState, useEffect } from 'react';
import { Header } from '../../assets/components/Header';
import type { Cart as CartType, Loadcart } from '../../types/Cart';
import { OrdersGrid } from './OrdersGrid';
import { type Orders } from '../../types/Orders';
import './OrdersPage.css'


type OrdersPageProps = {
    cart: CartType;
    loadCart: Loadcart;
};


export function OrdersPage({ cart, loadCart }: OrdersPageProps) {
    const [orders, setOrders] = useState<Orders>([]);

    useEffect(() => {
        const fectOrdersData = async() => {
            const response = await axios.get('/api/orders?expand=products');
            setOrders(response.data);
        }
        fectOrdersData();
    }, []);

    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/svg+xml" href="../assets/images/orders-favicon.png" />

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders} loadCart={loadCart} />
            </div>
        </>
    );
}