const express = require("express");

const router = express.Router();
const ownerModel = require("../models/owners.model");
const productModel = require("../models/products.models");


if(process.env.NODE_ENV === "development") {
    router.post("/create", async function (req, res) {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res.status(500).send("you don't have permision to create a new owner.");
        }
        
        let {fullname, email, password, contact} = req.body;

        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
            contact,
        });
        res.status(201).send(createdOwner);
    })
}

router.get("/admin", function (req, res) {
    // let success = req.flash("success");
    res.render("createproduct");
});
router.get("/adminpanel", async function (req, res) {
    let products = await productModel.find();
    res.render("adminpanel", { products });
});

router.get("/delete/:id", async function(req, res) {
    let product = await productModel.findOneAndDelete( { id: req.params._id } );
    res.redirect("/owners/adminpanel");
});

module.exports = router;