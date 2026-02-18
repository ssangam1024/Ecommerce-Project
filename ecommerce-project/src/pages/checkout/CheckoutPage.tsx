import axios from 'axios';
import { useState, useEffect } from 'react';
import { CheckoutHeader } from './checkoutHeader.jsx' 
import { OrderSummary } from './OrderSummary.js';
import { PaymentSummary } from './PaymentSummary.js';
import type { Cart, Loadcart } from '../../types/Cart';
import './CheckoutPages.css';

window.axios= axios;

type CheckoutPageProps = {
    cart: Cart;
    loadCart: Loadcart;
}

export function CheckoutPage({ cart, loadCart }: CheckoutPageProps) {
   
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        const fetchCheckoutData = async() => {
            const response = await  axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOptions(response.data);}

        fetchCheckoutData();
        
    }, []);
    useEffect(()=>{
        const fetchPaymentSummary = async() => {
            const response = await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);
        }
        fetchPaymentSummary();
    },[cart]);
    


    return (
        <>
            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="../images/cart-favicon.png" />

            <CheckoutHeader cart={cart} />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

                    <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
                </div>
            </div>
        </>
    );
}