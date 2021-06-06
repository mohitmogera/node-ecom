const ProductCategories = require('../models/productcategories.model.js');


// Retrieve and return all categories from the database.
exports.findAll = (req, res) => {
    ProductCategories.find()
    .then(categories => {
        res.send(categories);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving categories."
        });
    });
};

// Find a single category with a categoryId

exports.find = (req,res) => {
    ProductCategories.find({categoryId : req.params.categoryId})
    .then(categories => {
        res.send(categories);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving categories."
        });
    });
};