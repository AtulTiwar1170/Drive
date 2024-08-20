const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners.model");
const productModel = require("../models/products.models");
const {ownerlogin} = require("../controllers/ownerAuthControler.js");


if(process.env.NODE_ENV === "development") {
    router.post("/create", ownerlogin)
}
router.get("/ownerlogin", function (req, res) {
    res.render("ownerlogin");
});
router.post("/ownerlogin", async function (req, res) {
    const { email, password } = req.body;
    const user = await ownerModel.findOne({ email: email});
    if(!user) return res.render('access')
    else {
        bcrypt.compare(user.password, password, (err, result) => {
            if(result) {

                res.redirect('/owners/owner-access/adminpanel');
            }
            else {
                res.redirect('/owners/access');
            }
        }
    )
    }

});

router.get("/admin", function (req, res) {
    res.render("createproduct");
});
router.get("/owner-access/adminpanel", async function (req, res) {
    let products = await productModel.find();
    res.render("adminpanel", { products });
});

router.get("/delete/:id", async function(req, res) {
    let product = await productModel.findOneAndDelete( { id: req.params._id } );
    res.redirect("/owners/adminpanel");
});

module.exports = router;