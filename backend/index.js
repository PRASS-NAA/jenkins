import express from "express";
import cors from "cors";
import customerRoutes from './routes/customers.js';
import ProductRoutes from './routes/product.js';


const PORT = 8000;

const app = express();

app.use(cors());

app.use(express.json());


app.use('/api/customer', customerRoutes);
app.use('/api/products', ProductRoutes);

app.listen(PORT, () =>
{
    console.log(`Server Running on PORT ${PORT}`);
})