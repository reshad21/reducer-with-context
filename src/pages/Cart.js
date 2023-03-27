import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const Cart = () => {
    const { state: { cart, loading, error }, } = useProducts();
    console.log(cart, loading, error);


    let content;

    if (loading) {
        content = <p>Loading</p>;
    }
    
    if (error) {
        content = <p>Somethings went wrong</p>;
    }

    if (!loading && !error && cart.length === 0) {
        content = <p>Nothing to show product list is empty</p>;
    }

    if (!loading && !error && cart.length) {
        content = cart.map(product => <ProductCard product={product}></ProductCard>);
    }


    return (
        <div className='grid grid-cols-4 gap-4'>
            {content}
        </div>
    );
};

export default Cart;