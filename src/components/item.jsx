import QuantityPicker from "./quantityPicker";
import "./item.css";
import { useState, useContext } from "react";
import StoreContext from "../context/store-context";

const Item = (props) => {
    // State
    const [quantity, setQuantity] = useState(props.data.minimum);
    const addProduct = useContext(StoreContext).addProductToCart;

    // Functions
    const handleAdd = () => {
        let productForCart = {
            ...props.data,
            quantity: quantity,
        }
        addProduct(productForCart);
    };


    const onQuantityChange = (quantity) => {

        console.log("new quanity " + quantity);
        setQuantity(quantity);
    };

    const getTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return (
        <div className="item">

            <h5> {props.data.title || "No title"} </h5>

            <label className='total'> ${(props.data.price * quantity).toFixed(2)} </label>

            <img src={props.data.image} alt="Product" />

            <label className='price'> ${props.data.price.toFixed(2)} </label>


            <div className="controls">
                <QuantityPicker minimum={props.data.minimum} onChange={onQuantityChange} />
                <button onClick={handleAdd} classnpName="btn btn-sm btn-dark add-btn"> Add </button>
            </div>
        </div>
    );
}

export default Item;