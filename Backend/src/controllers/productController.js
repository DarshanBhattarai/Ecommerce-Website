import productServices from "../services/productServices.js";
const createProduct = async (req, res) => {
    const product = req.body;
    if (!product) {
        return res.status(400).json({ message: "All fields are required" });
    }
   
    try {
        const data = await productServices.createProduct(product);
        res.status(201).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}
 
const getAllProduct = async (req, res) => {
    try {
        const data = await productServices.getAllProduct();
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}
const getProductById = async (req, res) => {
    try {
        if(!req.params.id) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const id = req.params.id;
        const data = await productServices.getProductById(id);
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}



const deleteProductById = async (req, res) => {
    try {
        const data = await productServices.deleteProductById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

export { createProduct, getAllProduct, getProductById, deleteProductById };