import React, { useState } from 'react';

const QuantityPicker = (props) => {

    const [quantity, setQuantity] = useState(props.minimum);

    const increase = () => {
        console.log("increase quantity");
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val); // notify parent that the child has changed
    }

    const decrease = () => {
        console.log("decrease quantity");
        let newVal = quantity - 1
        if (newVal >= props.minimum) {
            setQuantity(newVal);
            props.onChange(newVal);
        } else {
            alert("Quantity can not be set below zero!");
        }
    }

    return (
        <div className="quantity-picker">
            <button onClick={ increase } className="btn-success"> + </button>
            <label> { quantity } </label>
            <button disabled={ props.minimum === quantity } onClick={ decrease } className="btn-danger"> - </button>                                
        </div>
    );
}

export default QuantityPicker;