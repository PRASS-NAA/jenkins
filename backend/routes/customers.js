import { Router } from "express";
import { getCustomers, postCustomers } from "../controllers/customer.js";
const router = Router();

router.get("/", getCustomers);

router.post("/", postCustomers);

export default router;