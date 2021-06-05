module.exports = (app) => {
    const categories = require('../controllers/categories.controller.js');


    // Retrieve all categories
    app.get('/categories', categories.findAll);

    // Retrieve a single CategoryId with noteId
    app.get('/categories/:categoryId', categories.findAll);
   
}