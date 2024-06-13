const mongoose = require("mongoose");
const { title } = require("process");

const productSchema = mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
        default: 0,
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;