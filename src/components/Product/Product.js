import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    //inspact e showing pura shob products,eta na dileo hbe 
    const { name, img, seller, price, ratings } = props.product;
    // const handleAddToCart = () => {
    //     console.log('clciked')
    // }
    //eta ekhane rakha jabe na
    console.log(props) //inspact  e showing
    // const { handleAddToCart } = props;
    //evabe handle er khetre des kora lagbe na karon handle shop theke func er moto kore pathano hoise
    return (
        <div className='product'>
            {/* <h2>This is product</h2> */}
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
                <p> <small>Seller: {seller}</small> </p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;