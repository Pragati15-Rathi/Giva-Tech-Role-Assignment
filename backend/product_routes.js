// productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.editProduct);
router.delete('/:id', productController.removeProduct);

module.exports = router;
