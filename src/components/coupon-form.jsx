import "./coupon-form.css";

const CouponForm = () => {
    const handleSubmit = () => {
        console.log("Clicked");
    }

    return(
        <div className="coupon-form">
            <div>
                <label htmlFor="coupon-code">Coupon Code</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="coupon-discount">Discount</label>
                <input type="number" />
            </div>

            <div className="my-control">
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        
        
    )
}

export default CouponForm;