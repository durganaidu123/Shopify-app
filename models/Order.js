// models/Order.js
const mongoose = require('../db');

const orderSchema = new mongoose.Schema({
    total_price_set: {
        shop_money: { amount: Number },
    },
    created_at: Date,
    customer: {
        id: mongoose.Schema.Types.ObjectId,
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
