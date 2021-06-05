const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productName: String,
    categoryId: String,
    productDescription: String,
    productImage:String,
    maxQuantity:Number,
    unitPrice:Number,
    weight: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Products', ProductSchema);