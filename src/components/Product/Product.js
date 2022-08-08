import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    //inspact e showing pura shob products,eta na dileo hbe 
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            {/* <h2>This is product</h2> */}
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
        </div>
    );
};

export default Product;