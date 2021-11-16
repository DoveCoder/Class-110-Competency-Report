import "./admin.css";
import { useState } from 'react';
import DataService from "../services/dataService";
import CouponForm from "./coupon-form"

const Admin = () => {

    const [product, setProduct] = useState({});

    const textChanged = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        if (name === 'price' || name === "discoount" || name === 'minimun') {
            value = parseFloat(value);
        }


        // create a copy of the state
        let prod = {...product};
        prod[name] = value;

        setProduct(prod);
    }

const handleSave = () => {
    console.log(product)

    // create a instance of the service
    // call service.saveProduct(product)

    let service = new DataService();
    service.saveProduct(product);
}

    return (
        <div className="admin-page">
            <section>
                <h1>Manage your products</h1>
                <div className="my-control">
                    <label>Price</label>
                    <input name='price' onChange={textChanged} type="number" />
                </div>
                <div className="my-control">
                    <label>Stock</label>
                    <input name='stock' onChange={textChanged} type="number" />
                </div>
                <div className='my-control'>
                    <label>Title</label>
                    <input name='title' onChange={textChanged} type="text" />
                </div>
                
                <div className='my-control'>
                    <label>Discount</label>
                    <input name='discount' onChange={textChanged} type="number" />
                </div>
                <div className='my-control'>
                    <label>Minimum</label>
                    <input name='minimum' onChange={textChanged} type="text" />
                </div>
                <div className='my-control'>
                    <label>Category</label>
                    <input name='category' onChange={textChanged} type="text" />
                </div>
                <div>
                    <label className="my-control">Image</label>
                    <input type="text" name="image" onChange={textChanged}/>
                </div>
                <button onClick={handleSave} className='my-control'>Submit</button>
            </section>
            
            <section>
                <CouponForm></CouponForm>
            </section>
        </div>

    )
}

export default Admin;