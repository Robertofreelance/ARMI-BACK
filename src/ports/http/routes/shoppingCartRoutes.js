// src/ports/http/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const shoppingCartController = require('../shoppingCartController');

router.get('/shoppingCart', shoppingCartController.getCart);
router.post('/shoppingCart', shoppingCartController.addProduct);
router.put('/shoppingCart/:id', shoppingCartController.updateProduct);
router.delete('/shoppingCart/:id', shoppingCartController.deleteProduct);
router.get('/products', shoppingCartController.listProducts);

module.exports = router;