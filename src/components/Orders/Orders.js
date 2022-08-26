import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useproducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    //usestate er bodole nijeder banano usestate mane useProducts use korlam
    const [cart, setCart] = useCart(products)
    const handleRemoveProduct = product => {
        // console.log(product);
        const rest = cart.filter(pd => pd.id !== product.id)
        //prottekta product er id er sathe compare kortesi ami jei product ta click korsi ota, jodi na match khae tahole ami ota select kortesi
        //matched ta baade baki gula select kortesi
        setCart(rest);
        removeFromDb(product.id);
    }
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
                        cart.map(product => <ReviewItem key={product.id} product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        >

                        </ReviewItem>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}>
                        <Link to="/inventory">
                            <button>Proceed Checkout</button>
                        </Link>
                    </Cart>
                </div>

            </div>

        </div>
    );
};

export default Orders;

/* 
......Quizs.......
4. Which props should you use to match exactly the path you gave for routing?
ans : You have selected "to" but correct answer is "no need of any props, by default all are exact.".

6.If you want to add style to your Link “ , which one should you use?
ans: Navlink and Custom active link


9.What is the purpose of useEffect hook? (Google it and then go to the reactjs.org link. And then also google what is side effect. Lear
    ans:You have selected "Set and update state in a component" but correct answer is "Load external data or interact outside of the component".

    10.useEffect( ()=> {
         fetch(‘/https://jsonplaceholder.typicode.com/users’)
          .then( res => res.json() )
          .then(data => setData(data) )
      } ) 
 If you miss the dependency how many times will it re-render?
 ans : You have selected "One Time" but correct answer is "Infinity Times".


 12.What is the name of the node module that you installed to have the react router in your React web application?

ans : You have selected "react-router" but correct answer is "react-router-dom"

*/