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

    const { state: { products, loading, error }, } = useProducts();
    console.log(products, loading, error);


    let content;

    if (loading) {
        content = <p>Loading</p>;
    }
    
    if (error) {
        content = <p>Somethings went wrong</p>;
    }

    if (!loading && !error && products.length === 0) {
        content = <p>Nothing to show product list is empty</p>;
    }

    if (!loading && !error && products.length) {
        content = products.map(product => <ProductCard product={product}></ProductCard>);
    }


    return (
        <div className='grid grid-cols-4 gap-4'>
            {content}
        </div>
    );
};

export default Home;