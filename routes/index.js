const express = require("express");
const router = express.Router();
const islogedin = require("../middlewares/isLogedin");
const productModel = require("../models/products.models");

router.get("/", async function (req, res) {
    let products = await productModel.find()
    res.render("index", { products });
});

router.get("/shop", islogedin, async function (req, res) {
    let products = await productModel.find()
    res.render("shop", { products });
})
router.get("/shop/:id", islogedin, async function (req, res) {
    let product = await productModel.findOne({ _id: req.params.id })
    res.render("buyit", { product});
});

router.get("/login", function (req, res) {
    let error = req.flash("error");
    res.render("login", { error });
});
router.get("/register", function (req, res) {
    res.render("register");
});
router.get("/access", function (req, res) {
    res.render("access");
});




module.exports = router;