import { useEffect, useState } from "react";

import Item from "./item";
import "./catalog.css"
import DataService from "../services/dataService"

const Catalog = () => {
    const [itemList, setItemList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [itemsToDisplay, setItemsToDisplay] = useState([]);

    const loadCatalog = async () => {
        let service = new DataService();
        let catalog = await service.getCatalog();
        console.log("the data", catalog);

        // find the list of unique catagories 
        let cats = [];
        for (let i = 0; i < catalog.length; i++) {
            let product = catalog[i];

            // if the category does not exist inside the cats array
            // add it
            if (!cats.includes(product.category)) {
                cats.push(product.category);
            }

        }

        // cats = await service.getCategories();


        // console.log("unique cats", cats);
        setCategories(cats);
       
        setItemList(catalog);
        setItemsToDisplay(catalog);
    };


    const handleFilter = (cat) => {
        console.log("Filter", cat);

        // 1 clear previous data
        setItemsToDisplay([]);

        // 2 filter from the item list into the items to display list.
        let results = [];
        for (let i = 0; i < itemList.length; i++) {
            let product = itemList[i];

            if (product.category === cat) {
                results.push(product);
            }
        }

        setItemsToDisplay(results);
    };

    const resetFilter = () => {
        setItemsToDisplay(itemList);
    }

    useEffect(() => {
        loadCatalog();

    }, [])

    return (
        <div>
            <div className="catalog">
                <h1>Welcome to Pen Pro!</h1>
                <h3>Currently have {itemList.length} products.</h3>

                <div className="filters">
                    <button onClick={resetFilter} className="btn btn-sm btn-dark"> All </button>
                    { categories.map((cat ) =>(
                        <button onClick={ () => { handleFilter(cat) } } className="btn btn-sm btn-info"> {cat} </button>
                    )) }
                </div>

                {itemsToDisplay.map(( product) => ( <Item data={product}></Item>))}
            </div>
        </div>
        
        
    );
}

export default Catalog;