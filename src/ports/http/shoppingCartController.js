const shoppingCartUseCases = require('../../application/shoppingCartUseCases');

async function getCart(req, res) {
    try {
        const shoppingCart = await shoppingCartUseCases.getCart();
        res.json(shoppingCart);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al obtener el carrito' });
    }
}

async function listProducts(req, res) {
    try {
        const products = await shoppingCartUseCases.listProducts();
        res.json(products);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al obtener el productos' });
    }
}

async function addProduct(req, res) {
    try {
        const newshoppingCart = req.body;
        const createdProduct = await shoppingCartUseCases.addProduct(newshoppingCart);
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error al añadir producto al carrito' });
    }
}

async function addProduct(req, res) {
    try {
        const newshoppingCart = req.body;
        const createdProduct = await shoppingCartUseCases.addProduct(newshoppingCart);
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error al añadir producto al carrito' });
    }
}

async function deleteProduct(req, res) {
    try {
        const productToDelete = req.params.id;
        const updatedCart = await shoppingCartUseCases.deleteProduct(productToDelete);
        res.status(200).json({ deleted: updatedCart });
    } catch (error) {
        res.status(500).json({ error: 'Error al editar el carrito' });
    }
}

async function updateProduct(req, res) {
    try {
        const idToModify = req.params.id;
        const productModified = req.body;
        const updatedCart = await shoppingCartUseCases.updateProduct(idToModify, productModified);
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json({ error: 'Error al editar el carrito' });
    }
}

module.exports = {
    getCart,
    listProducts,
    addProduct,
    deleteProduct,
    updateProduct,
};