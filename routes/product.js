import express from "express";
import {getProduct} from "../controllers/product.js";

const router = express.Router();

/* READ */

router.get("/productos",getProduct);

export default router;