const express = require("express");

const router = express.Router();
const upload = require("../config/multer.config");
const productModel = require("../models/products.models");

router.post("/create", upload.single("image"), async function (req, res) {
    try {
        let { productname, discount, price } = req.body;

        let product = await productModel.create({
            image: req.file.buffer,
            productname,
            price,
            discount,
        });
        // let success = req.flash("success", "Product is Created");
        res.redirect("/owners/admin");
    }
    catch (err) {
        res.send(err.message);
    }
})

module.exports = router;