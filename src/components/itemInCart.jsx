import "./itemInCart.css";

const ItemInCart = (props) => 
{
    <div className="item-cart">
        <div className="info">
            <h4>{props.data.title}</h4>
            <label>{props.data.category}</label>
        

        <label> {props.data.price} </label>
        <label>{props.data.quantity}</label>
        <label>{props.data.price * props.data.quantity}</label>
        </div>

    </div>
}

export default ItemInCart;