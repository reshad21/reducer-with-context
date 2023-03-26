import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from './../context/ProductProvider';

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
        <div className='grid grid-cols-4 gap-4'>
            {
                products.map(product => <ProductCard product={product}></ProductCard>)
            }
        </div>
    );
};

export default Home;