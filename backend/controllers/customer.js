let customers = [
    {
        name:"prass",
        age:21
    },
    {
        name:"sai",
        age:20
    }
]

export const getCustomers = (req,res) =>
{
    console.log("fetching all customers ");
    res.status(200).json({data : customers, success : true})
}

export const postCustomers = (req, res) =>
{

    const { name, age} = req.body;
    customers.push({name, age});
    console.log("creating a new customer ");
    res.status(201).json({data : 'customer added succesfully '});
}