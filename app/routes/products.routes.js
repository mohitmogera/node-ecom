module.exports = (app) => {
    const products = require('../controllers/products.controller.js');


    // Retrieve all categories
    app.get('/products', products.findAll);

    // Retrieve a single CategoryId with noteId
    app.get('/products/:categoryId', products.find);
   
}