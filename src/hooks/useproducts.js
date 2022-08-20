import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return [products, setProducts];
    //ei 2 ta jinish ke return krbo
    //by default kono func theke only ekta jinish return korte pari, 2 ta jinish return korte parina
    //ekhane dekhte mone hochee 2 ta but actually 2 ta ke ekta array er packet er modhe declare korsi
}

//last e giye export korte hbe 
export default useProducts;