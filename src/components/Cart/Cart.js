import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // amk cart name props pathao tahole ami oke dekhabo
    console.log(cart); //array te ek ek kore add hochee inspact e 

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    //tofixed majhe majhe str hye jae
    const grandTotal = total + shipping + tax;
    //concatanation hoye jachee

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            {/* <p>Selected Items: {cart.length}</p> */}
            {/* eta thakbe  na */}
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
        // click korar por kaj hochee
    );
};

export default Cart;