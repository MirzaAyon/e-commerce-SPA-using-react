import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //dataloead er 1st step
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
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
        // cart.push(product); //age evabe kortam
        const newCart = [...cart, Product];
        setCart(newCart);
        // addToDb(Product) eta dile obj obj show hbe

        addToDb(Product.id); //eta dbo ekhn update hbe
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
                <Cart cart={cart}></Cart>
                {/* cart name ekta state goto kal e create kore rakhsilam */}
            </div>
            {/* pasha pashi boshanor jnno flex korle bhalo hoto but jehetu width er ekta mamla ache tai grid korle shubidha  */}
        </div>
    );
};

export default Shop;