import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    //dataloead er 1st step
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    //dataload er 2nd step
    useEffect(() => {
        console.log('products load before fetch');
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log('products loaded');
            })
        //regular data ashche kina console kore dekhbo
    }, []);
    //cart take load krbo
    //code er bahirer theke load hbe tai side effect
    useEffect(() => {
        console.log('local storage first line', products);
        const storedCart = getStoredCart();
        console.log(storedCart);
        //shop er 22 no line e giye dekha jabe ja ja cart e add kora hoisilo shob show hochee
        const savedCart = [];
        for (const id in storedCart) {
            console.log(id); //id gula inspact e showing
            const addedProduct = products.find(Product => Product.id === id)
            console.log(addedProduct);
            //prothome product inspact e product gular details shoho info show hbe but reload dile undefined show hbe
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                console.log(addedProduct);
                //thakle inspact e show hbe 
                savedCart.push(addedProduct);
            }


        }
        setCart(savedCart);
        console.log('local storage finished');
    }, [products])
    //dependency dilam, products er maan joto bar change hbe toto bar etake call krbo
    //ekadhik dependancy thakle , diye ekadhik dite parbo
    //jodi products dependancy na ditam tahole maan ta ekbar e call korto

    const handleAddToCart = (Product) => {
        console.log('clciked')
        console.log(Product)
        // cart.push(product); //age evabe kortam
        const newCart = [...cart, Product];
        setCart(newCart);
        // addToDb(Product) eta dile obj obj show hbe
        //utitlies er addToDb er previous video ta valo kore dekhbo

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