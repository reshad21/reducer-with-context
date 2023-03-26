import React from 'react';
import { useProducts } from './../context/ProductProvider';
import Cart from './Cart';

const Home = () => {
    // console.log(useProducts());
    // const a = useProducts();
    // console.log(a);

    // const { state } = useProducts();
    // console.log(state);
    // const { loading, products, error } = state;
    // console.log({
    //     loading, products, error
    // });

    const { state: { products }, state: { loading }, state: { error } } = useProducts();
    console.log(products, loading, error);


    return (
        <div>
            {
                products.map(product => <Cart product={product}></Cart>)
            }
        </div>
    );
};

export default Home;