import Product from "../model/Product.js";
const createProduct = async (data) => {
  return await Product.create(data);
};

const deleteProductById = async (id) => {
  return await Product.findByIdAndDelete(id);
};
const getProductById = async (id) => {
  return await Product.findById(id);
};
const getAllProduct = async () => {
  return await Product.find({});
};

export default {
  createProduct,  
  deleteProductById,
  getProductById,
  getAllProduct,
};
