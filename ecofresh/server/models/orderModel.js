var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderModel = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    orderId: {
        type: String,
        default: function () {
            return Math.floor(Math.random() * 12345) + 10000;
        },
        index: { unique: true },
        required: true
    },
    recipes: [{
        recipeName: {
            type: String,
            required: true
        },
        qty: {
            type: Number,
            default: 0,
            required: false
        },
        ratings: {
            type: Number,
            default: 0,
            required: false
        },
        pricePerServing: {
            type: Number,
            required: true
        },
        priceSummation: {
            type: Number,
            required: true
        }
    }],
    status: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    finalCost: {
        type: Number,
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    },
    taxes: {
        type: Number,
        required: true
    }

}, { collection: 'orders' });

module.exports = mongoose.model("ecofresh", orderModel);
