// models/Customer.js
const mongoose = require('../db');

const customerSchema = new mongoose.Schema({
    created_at: Date,
    default_address: {
        city: String,
    },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
