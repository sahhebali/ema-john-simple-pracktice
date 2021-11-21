import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }
    // const total = cart.reduce((previews, product) => previews + product.price, 0)

    const shiping = 15;
    const tax = (total + shiping) * 10;
    const grandTotal = total + shiping + tax;
    return (
        <div>
            <h3>Ordered Summary</h3>
            <h5>Items Ordered : {props.cart.length} </h5>
            <p>total : {total.toFixed(2)}</p>
            <p>Shiping : {shiping}</p>
            <p>tax : {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;