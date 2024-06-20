const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname: {
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
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    carts:
        {
            type: String,
        }
    ,
    Orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    }]
});


const User = mongoose.model("User", userSchema);

module.exports = User;