const products = [
    {
        name:"iphone",
        price: 65000
    },
    {
        name:"laptop",
        price: 90000
    }
]


export const addProducts = (req,res) =>
{
    const {name,price} = req.body;

    products.push({name, price});

    res.status(201).json({data : 'product added succesfully '});
}

export const getProducts = (req, res) =>
{
    console.log("fetching products");
    res.status(200).json({data : products, success : true})
}