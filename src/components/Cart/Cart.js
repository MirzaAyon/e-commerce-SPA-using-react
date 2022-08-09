import React from 'react';

const Cart = ({ cart }) => {
    // amk cart name props pathao tahole ami oke dekhabo

    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
        </div>
        // click korar por kaj hochee
    );
};

export default Cart;