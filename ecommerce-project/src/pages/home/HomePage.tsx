import axios from 'axios';
import {useEffect, useState} from'react';
import { Header } from '../../assets/components/Header';
import type{ Cart, Loadcart} from '../../types/Cart';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css'
import { useSearchParams } from 'react-router';

type HomePageProps = {
    cart: Cart;
    loadCart: Loadcart;
}

export function HomePage({cart, loadCart}: HomePageProps) {
    const [products, setProducts ] = useState([]);
    const[searchParams] = useSearchParams();

    const search = searchParams.get('search');
    
    useEffect(() => {
        const getHomeData = async () => {
            const urlPath = search ? `/api/products?search=${search}` : '/api/products';
            const response = await axios.get(urlPath);
            setProducts(response.data);
        }
        getHomeData();
       
    }, [search] );
   

    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href="../../assets/images/icons/home-favicon.png" />

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}