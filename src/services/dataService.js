import axios from 'axios';

var catalog = [
    {
        id: "product 1",
        title: "MontBlack",
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.co.uk%2Fpin%2F649925789947469572%2F&psig=AOvVaw1joiGBCFiHkgykyi_NaSZD&ust=1636824981507000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNis4q6uk_QCFQAAAAAdAAAAABAH',
        price: 399.99,
        category: "ball point",
        stock: 34,
        minimum: 1
    },
    {
        id: "product 2",
        title: "Pix",
        image: "https://www.montblanc.com/variants/images/34480784411792216/A/w636.jpg",
        price: 199.99,
        category: "ball point",
        stock: 22,
        minimum: 1
    },
    {
        id: "product 3",
        title: "Lamy",
        image:'https://m.media-amazon.com/images/I/51YFidImpzL._AC_SX466_.jpg',
        price: 49.99,
        category: "ball point",
        stock: 200,
        minimum: 1
    },
    {
        id: "product 4",
        title: "Time",
        image:'https://cdn.shopify.com/s/files/1/0006/3622/products/Time-for-Paper-Gel-Pen-by-Marks_600x.png?v=1610214042',
        price: 10,
        category: "gel pen",
        stock: 150,
        minimum: 1
    },
    {
        id: "product 5",
        title: "Quil",
        image:'https://i5.walmartimages.com/asr/80e70769-9aa1-47a1-96a1-45a862f491a6_1.77e2db3315f90681fcfc4b0dab8c5ad1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        price: 30,
        category: "feather pen",
        stock: 99,
        minimum: 1
    },
]

class DataService 
{
    async getCatalog() 
    {
        // call the server to get catalog
        let res = await axios.get("http://127.0.0.1:5000/api/catalog");
        console.log(res);
        return res.data; // = an array of objects

        // return catalog;
    }

    // get categories
    
    async getCatagories()
    {
        let res = await axios.get("http://127.0.0.1:5000/api/catagories");
        console.log(res);
        return res.data;
    }

    async saveProduct(prod) {
        let res = await axios.post("http://127.0.0.1:5000/api/catalog", prod);
        console.log("saving result ", res.data);
        return res.data;
    }

    saveItem() 
    {

    }

    saveOrder() 
    {

    }
}

export default DataService;