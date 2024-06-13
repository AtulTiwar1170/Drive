const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    paassword: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    picture: {
        type: String,
    },
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart",
        }
    ],
    orders: [
        {
            types: mongoose.Schema.Types.ObjectId,
            ref: "Order",
        }
    ],
    isadmin: {
        type: Boolean,
    }
});


const User = mongoose.model("User", userSchema);

module.exports = User;