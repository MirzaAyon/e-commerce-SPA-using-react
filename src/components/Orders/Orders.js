import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useproducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    //usestate er bodole nijeder banano usestate mane useProducts use korlam
    const [cart, setCart] = useCart(products)
    return (
        <div>
            <h2>This is orders : {products.length}
            </h2>
            <p>Cart has : {cart.length}</p>
            {/* kintu orders e mot koyta eta na dekhay item koyta sheta dekhachee */}
            {/* hobar kotha 5 dekhae 3  */}
        </div>
    );
};

export default Orders;