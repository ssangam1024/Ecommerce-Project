import { Link } from 'react-router';
import Logo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/mobile-logo.png";
import CheckoutcartLock from '../../assets/images/icons/checkout-lock-icon.png';
import type { Cart } from '../../types/Cart.ts';
import './CheckoutHeader.css';

type CheckoutHeaderProps = {
    cart: Cart;
}

export function CheckoutHeader({ cart }: CheckoutHeaderProps) {
    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });

    return (
        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                    <Link to="/">
                        <img className="logo" src={Logo} />
                        <img className="mobile-logo" src={MobileLogo} />
                    </Link>
                </div>

                <div className="checkout-header-middle-section">
                    Checkout (<Link className="return-to-home-link"
                        to="/">{totalQuantity} items</Link>)
                </div>

                <div className="checkout-header-right-section">
                    <img src={CheckoutcartLock} />
                </div>
            </div>
        </div>
    );
}
