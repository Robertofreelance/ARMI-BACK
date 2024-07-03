// src/ports/database/userRepository.js
const fs = require('fs-extra');
const path = require('path');
const CART_FILE = path.join(__dirname, '../../../data/shoppingCart.json');
const PRODUCTS_FILE = path.join(__dirname, "../../../data/products.json")

async function getCart() {
    const data = await fs.readFile(CART_FILE);
    return JSON.parse(data);
}

async function addProduct(product) {
    const shoppingCart = await getCart();
    const newShoppingCart = { ...product, id: Date.now().toString() };
    shoppingCart.push(newShoppingCart);
    await fs.writeFile(CART_FILE, JSON.stringify(shoppingCart, null, 2));
    return newShoppingCart;
}

async function listProducts() {
    const data = await fs.readFile(PRODUCTS_FILE);
    return JSON.parse(data);
}

async function deleteProduct(id) {
    const shoppingCart = await getCart();
    const olderCartDocument = shoppingCart.find((cart) => cart.id === id);
    if(!olderCartDocument) {
        throw new Error("NOT FOUND");
    }
    const filteredCart = shoppingCart.filter((cart) => cart.id !== id);
    await fs.writeFile(CART_FILE, JSON.stringify(filteredCart, null, 2));
    return id
}

async function updateProduct(id, quantity) {
    const shoppingCart = await getCart();
    const olderCartDocument = shoppingCart.find((cart) => cart.id === id);
    if(!olderCartDocument) {
        throw new Error("NOT FOUND");
    }
    const newCart = shoppingCart.map((cart) => {
        let actual = cart;
        if(actual.id === id) {
            actual.quantity = quantity.quantity;
        }
        return actual;
    });
    await fs.writeFile(CART_FILE, JSON.stringify(newCart, null, 2));
    return {...olderCartDocument, quantity: quantity.quantity};
}

module.exports = {
    getCart,
    addProduct,
    listProducts,
    deleteProduct,
    updateProduct
};