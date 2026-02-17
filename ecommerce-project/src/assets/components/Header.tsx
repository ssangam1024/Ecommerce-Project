import { Link, useNavigate, useSearchParams } from 'react-router';
import CartIcon from '../images/icons/cart-icon.png';
import SearchIcon from '../images/icons/search-icon.png';
import LogoWhite from '../images/logo-white.png';
import MobileLogoWhite from '../images/mobile-logo-white.png';
import './Header.css'
import { useState } from 'react';

type HeaderProps = {
    cart: {
        productId: string;
        quantity: number;
        deliveryOptionId: string;
    }[];
}

export function Header({ cart=[] }: HeaderProps){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const searchText = searchParams.get('search');
    const [search, setSearch] = useState(searchText || '');
    let totalQuantity = 0;

    cart.forEach( ( cartItem )=> {
        totalQuantity += cartItem.quantity;
    });
    const updateSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
      };
    
      const searchProducts =() => {
        navigate(`/?search= ${search}`);
      };

    return(
        <div className="header">
            <div className="left-section">
            <Link to="/" className="header-link">
                <img className="logo"
                src={LogoWhite} />
                <img className="mobile-logo"
                src={MobileLogoWhite} />
            </Link>
            </div>
    
            <div className="middle-section">
            <input className="search-bar" type="text" placeholder="Search" onChange={updateSearchInput} />
    
            <button className="search-button" onChange={searchProducts}>
                <img className="search-icon" src={SearchIcon} />
            </button>
            </div>
    
            <div className="right-section">
            <Link className="orders-link header-link" to="/orders">
    
                <span className="orders-text">Orders</span>
            </Link>
    
            <Link className="cart-link header-link" to="/checkout">
                <img className="cart-icon" src={CartIcon} />
                <div className="cart-quantity"> {totalQuantity} </div>
                <div className="cart-text">Cart</div>
            </Link>
            </div>
             </div>
    );
}