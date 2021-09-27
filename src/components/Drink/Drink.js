import React from 'react';
import './Drink.css';

const Drink = (props) => {
    const {strDrink,strDrinkThumb}=props.drink;
    const {handleCart}=props;
    return (
        <div className="drink">
            <div className="drink-img">
                <img src={strDrinkThumb} alt="" />
            </div>
            <div className="drink-name">
                <h3>{strDrink.slice(0,20)}</h3>
            </div>
            <div className="btn">
                <button onClick={()=>handleCart(props.drink)}>Drink Now</button>
            </div>
        </div>
    );
};

export default Drink;