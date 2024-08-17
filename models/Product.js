// models/Product.js
const mongoose = require('../db');

const productSchema = new mongoose.Schema({
    // Define product schema fields here if needed
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
