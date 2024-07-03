// src/application/userUseCase.js
const shoppingCartRepository = require('../ports/database/shoppingCartRepository');
const ShoppingCart = require('../domain/ShoppingCart');

async function getCart() {
    let totalPrice = 0;
    const data = await shoppingCartRepository.getCart();
    if (data.length > 0) {
        data.forEach(cart => {
            let price = cart.product.price * cart.quantity;
            totalPrice += price;
        });
    }
    return {
        totalPrice: totalPrice.toFixed(2),
        cart: data
    }
}

async function listProducts() {
     
    return await shoppingCartRepository.listProducts();
}

async function addProduct(cart) {
    const newProduct = new ShoppingCart(null, cart.product, cart.quantity);
    return await shoppingCartRepository.addProduct(newProduct);
}

async function deleteProduct(id) {
    return await shoppingCartRepository.deleteProduct(id);
}

async function updateProduct(id, quantity) {
    return await shoppingCartRepository.updateProduct(id, quantity);
}


module.exports = {
    getCart,
    addProduct,
    deleteProduct,
    listProducts,
    updateProduct
};