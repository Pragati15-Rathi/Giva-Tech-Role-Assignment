// productController.js
const productModel = require('../models/productModel');

const getProducts = async (req, res) => {
    const products = await productModel.getAllProducts();
    res.json(products);
};

const createProduct = async (req, res) => {
    const newProduct = await productModel.addProduct(req.body);
    res.status(201).json(newProduct);
};

const editProduct = async (req, res) => {
    const updatedProduct = await productModel.updateProduct(req.params.id, req.body);
    res.json(updatedProduct);
};

const removeProduct = async (req, res) => {
    await productModel.deleteProduct(req.params.id);
    res.sendStatus(204);
};

module.exports = { getProducts, createProduct, editProduct, removeProduct };
