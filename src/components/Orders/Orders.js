import React from 'react';
import useProducts from '../../hooks/useproducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    //usestate er bodole nijeder banano usestate mane useProducts use korlam
    return (
        <div>
            <h2>This is orders : {products.length}</h2>
        </div>
    );
};

export default Orders;