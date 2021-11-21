import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handelAddtoCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>product: {product.length}</h3>
                {
                    product.map(product => <Product
                        product={product}
                        handelAddtoCart={handelAddtoCart}
                    >
                    </Product>)
                }
            </div>
            <div className="crat-container">
                <Cart cart={cart}></Cart>
            </div>



        </div>
    );
};

export default Shop;