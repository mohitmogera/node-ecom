const Products = require('../models/products.model');


// Retrieve and return all categories from the database.
exports.findAll = (req, res) => {
    Products.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving categories."
        });
    });
};


exports.find = (req,res) => {
    Products.find({categoryId : req.params.categoryId})
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving categories."
        });
    });
};