
import { Router } from "express";
import { getProducts, addProducts } from "../controllers/product.js";

const router = Router();

router.get('/', getProducts);
router.post('/', addProducts);

export default router;