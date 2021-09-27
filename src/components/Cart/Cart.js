import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.addedDrink)
    return (
        <div className="cart">
            <h1>Your cart</h1>
            <h3>Amount of drinks:</h3>
            <h1>{props.addedDrink.length}</h1>
        </div>
    );
};

export default Cart;