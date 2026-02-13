import dayjs from "dayjs";
import axios from "axios";
import { Fragment } from 'react'

import Buyagain from '../../assets/images/icons/buy-again.png'

export function OrderDetailsGrid({order, loadCart}){
    const addToCart = async (productId) => {
        await axios.post('/api/cart-items', {
          productId,
          quantity: 1
        });
        await loadCart();
      };
    return(
        <div className="order-details-grid">
                            {order.products.map((orderproduct) => {
                                return (
                                    <Fragment key={orderproduct.product.id}>
                                        <div className="product-image-container">
                                            <img src={orderproduct.product.image} />
                                        </div>

                                        <div className="product-details">
                                            <div className="product-name">
                                                {orderproduct.product.name}
                                            </div>
                                            <div className="product-delivery-date">
                                                Arriving on: {dayjs(orderproduct.estimateDeliveryTimeMs).format('MMMM D')}
                                            </div>
                                            <div className="product-quantity">
                                                Quantity: {orderproduct.quantity}
                                            </div>
                                            <button className="buy-again-button button-primary"
                                                onClick={() => addToCart(orderproduct.product.id)}>
                                                <img className="buy-again-icon" src={Buyagain} />
                                                <span className="buy-again-message">Add to Cart</span>
                                            </button>
                                        </div>

                                        <div className="product-actions">
                                            <a 
                                            href={`/tracking/${order.id}/${orderproduct.product.id}`}>
                                                <button className="track-package-button button-secondary">
                                                    Track package
                                                </button>
                                            </a>
                                        </div>
                                    </Fragment>
                                );
                            })}

                        </div>
    );
}