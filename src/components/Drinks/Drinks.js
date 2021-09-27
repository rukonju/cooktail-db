
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Drink from '../Drink/Drink';
import './Drinks.css'

const Drinks = () => {
    const [drink,setDrink]=useState([])
    const [drinks,setDrinks]=useState([]);

    useEffect(()=>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
            .then(res=>res.json())
            .then(data=>setDrinks(data.drinks))
    },[])

    const handleCart=drinks=>{
        const newDrink=[...drink,drinks]
        setDrink(newDrink)
    }
    
    return (
        <div>
            <div className="container">
                <div className="drinks-container">
                    {
                        drinks.map(drink=> <Drink key={drink.idDrink} drink={drink} handleCart={handleCart}></Drink>)
                    }
                </div>
                <div className="cart-container">
                    <Cart addedDrink={drink}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Drinks;