const express = require("express");

const router = express.Router();
const userModel = require("../models/users.models")
const islogedin = require("../middlewares/isLogedin");

const { registerUser, loginUser, logout } = require("../controllers/authControler.js");

router.get("/", function (req, res) {
    res.send("hey hey hey");
});

router.get("/cart", islogedin, async function (req, res) {
    let user = await userModel.findOne(req.user._id).populate("carts");
    res.render("cart", { user });
});

router.get("/addtocart/:productid", islogedin, async function (req, res) {
    let user = await userModel.findOne(req.user._id);
    user.carts.push(req.params.productid);
    await user.save();
    res.redirect("/shop");
})

router.get("/profile", islogedin, async function(req, res) {
    try {
        const user = await userModel.findOne(req.user._id);
    res.render("profile", { user, isLogedin: false });
    } catch (error) {
        res.redirect("/login")
    }
});

// router.get("/delete/:id", async function(req, res) {
//     let product = await userModel.cart.pop( { id: req.params._id } );
//     res.redirect("/users/cart");
// });

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);

module.exports = router;