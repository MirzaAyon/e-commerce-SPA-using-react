import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useproducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    //usestate er bodole nijeder banano usestate mane useProducts use korlam
    const [cart, setCart] = useCart(products)
    return (
        <div>
            {/* <h2>This is orders : {products.length}
            </h2>
            <p>Cart has : {cart.length}</p> */}
            {/* kintu orders e mot koyta eta na dekhay item koyta sheta dekhachee */}
            {/* hobar kotha 5 dekhae 3  */}

            <div className='shop-container'>
                <div className='review-items-container'>
                    {
                        cart.map(product => <ReviewItem key={product.id} product={product} >

                        </ReviewItem>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>

            </div>

        </div>
    );
};

export default Orders;