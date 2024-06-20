const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    productname: {
        type: String,
        required: true,
    },
    image: {
        type: Buffer,
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