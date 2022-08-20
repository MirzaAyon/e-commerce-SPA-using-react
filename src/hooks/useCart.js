import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    //products er value ek bar na pele close kore dae second bar r call korena, second bar call koranor jnno dependancy dite hbe 
    //data change korar jnno dependancy dibo
    return [cart, setCart];
}

export default useCart;
//use cart and useproduct er modhe diff holo useCart parameter ney