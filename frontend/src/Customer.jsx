import axios from "axios";
import { useState } from "react";


const Customer = () =>
{
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [error, setError] = useState(false);
    const [name, setName] = useState('');
    const [age,setAge] = useState(0);
    const [customers, setCustomers] = useState([]);

    const showCustomers = async() =>
    {
        try{
            const response = await axios.get("http://localhost:8000/api/customer");
            if(response.status == 200)
            {
                setLoading(false);
                setCustomers(response.data.data);
            }else{
                setError(true);
            }
        }catch(err)
        {
            console.log(err);
            setError(true);
        }
    }

    const addCustomers = async(e) =>
    {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8000/api/customer', {name, age});
            if(response.status == 201)
            {
                window.alert('seccess');
            }else{
                setError(true);
            }
        }catch(err)
        {
            console.log(err)
            setError(true);
        }
    }


    return (
        <>
        <button onClick={showCustomers}>show all customers</button>
        <button onClick={() => setModal(!modal)}>Add a new Customer</button>


        {error ? <div>Error while connecting to backend</div> :
        customers.map((customer, index) =>
        {
            return (
                <div key={index}>
                    <h3>{customer.name}</h3>
                    <h5>{customer.age}</h5>
                </div>
            )
        })
        }

        {modal && 
        <div>
            <form onSubmit={addCustomers}>
                <label>name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>age</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>

                <button>Submit Now</button>
            </form>
        </div>
        }
        </>
    )
}


export default Customer;