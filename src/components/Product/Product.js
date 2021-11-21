import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock } = props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="product-details">
                <h4 className="product-name">Name : {name}</h4>
                <p>By : {seller}</p>
                <p>$ : {price}</p>
                <p>Stock : {stock}</p>
                <button onClick={() => props.handelAddtoCart(props.product)} className="product-button"> {element}Add To Cart</button>
            </div>

        </div>
    );
};

export default Product;