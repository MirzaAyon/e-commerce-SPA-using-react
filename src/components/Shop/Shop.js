import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //dataloead er 1st step
    const [products, setProducts] = useState([])
    //dataload er 2nd step
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        //regular data ashche kina console kore dekhbo
    }, []);
    const handleAddToCart = (Product) => {
        console.log('clciked')
        console.log(Product)
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {/* <h3>This is for products : {products.length}</h3> */}
                {/* evabe products length dibo ui te product ashe kina check korar jnno */}
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        // normal destructuring na kore ekhan theke pathalam
                        ></Product>
                    )
                }
            </div>
            <div className='cart-container'>
                <h4>Order summary</h4>
            </div>
            {/* pasha pashi boshanor jnno flex korle bhalo hoto but jehetu width er ekta mamla ache tai grid korle shubidha  */}
        </div>
    );
};

export default Shop;