const mongoose = require('mongoose');

const ProductCategoriesSchema = mongoose.Schema({
    categoryName: String,
    categoryId:String
}, {
    timestamps: true
});

module.exports = mongoose.model('ProductCategories', ProductCategoriesSchema);