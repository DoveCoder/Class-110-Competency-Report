import "./cart.css"
import StoreContext from "../context/store-context";
import { useContext } from "react";
import ItemInCart from "./itemInCart";

const Cart = () => {
    // Global value
    const productsInCart = useContext(StoreContext).cart

    return(
        <div className="cart">
            <div className="header">
                <h1>Your Order</h1>
            </div>
            <div className="row">
                <h3>Items</h3>
                {productsInCart.map((p) => <ItemInCart data={p}></ItemInCart>)} 
            </div>
                <div className="col-3">
                    <h4>Total</h4>
                    <h3>$100</h3>

                    <hr />
                <div className="coupon">
                    <input type="text" placeholder="Do you have a coupon?" />
                    <button>Apply</button>
                    <hr />
                    <button>Checkout</button>
                </div>
            </div>

        </div>
    );
}

export default Cart;