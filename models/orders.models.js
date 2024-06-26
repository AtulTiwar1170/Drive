const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    productId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }
    ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;