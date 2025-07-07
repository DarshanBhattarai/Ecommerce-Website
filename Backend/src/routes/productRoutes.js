import express from "express";
import { createProduct, getAllProduct, deleteProductById } from "../controllers/productController.js";


const router = express.Router();

router.get("/product", (req, res) => {
    res.send("Product Route");
});

router.post("/createProduct", createProduct);

router.get("/getAllProduct", getAllProduct);
router.get("/getAllProduct/:id", getAllProduct);
router.delete("/deleteProduct/:id", deleteProductById);

export default router;