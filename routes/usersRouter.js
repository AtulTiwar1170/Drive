const express = require("express");

const router = express.Router();
const productModel = require("../models/products.models");
const cartModel = require("../models/cart.model");
const userModel = require("../models/users.models")
const islogedin = require("../middlewares/isLogedin");

const { registerUser, loginUser, logout } = require("../controllers/authControler.js");
const isLogedin = require("../middlewares/isLogedin");

router.get("/", function (req, res) {
    res.send("hey hey hey");
});

router.get("/cart", async function (req, res) {
    res.render("cart");
});

router.get("/profile", isLogedin, async function(req, res) {
    const user = await userModel.findOne(req.user._id);
    res.render("profile", { user });
})

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);

module.exports = router;