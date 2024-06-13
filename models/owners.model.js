const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    product: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }
    
    ],
    contact: {
        type: Number,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    }


},{ timestamps: true });
const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;