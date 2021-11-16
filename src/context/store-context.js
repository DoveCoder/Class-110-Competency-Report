import React from 'react';

// Describes the data that will be saved on the context.
export default React.createContext({
    // data that needs to be stored
    cart: [], // Array
    user: {}, // Object

    // Functions that allow modification to the data
    addProductToCart: (product) => {},
    removeProductFromCart: (productId) => {},

});