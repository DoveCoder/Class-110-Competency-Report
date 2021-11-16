import React, { useState } from 'react';
import StoreContext from "./store-context";

const GlobalContext = (props) => 
{
    // state value
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({
        id: 12345,
        name: "Jimmy Newtron",
        email: "savethe@World.com",
    })

    // Functions
    const addProductToCart = (product) => 
    {
        console.log("Add to cart!");

        let copy = [...cart, product];
        copy.push(product);

        setCart(copy);
    }

    const removeProductFromCart = (productId) => 
    {
        console.log("Remove from cart!");
    }

    /*
    * left side is the abstract description for data/fns.
    * right side is the implementation for data/fns.
    * when someone call the abstract, will get the implementation.
    */
    return (<StoreContext.Provider value={{ // add and remove from store context.
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
    }}
    >
        {props.children}
    </StoreContext.Provider>

    )};

export default GlobalContext;