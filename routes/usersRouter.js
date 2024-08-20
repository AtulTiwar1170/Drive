const express = require("express");

const router = express.Router();
const userModel = require("../models/users.models.js")
const islogedin = require("../middlewares/isLogedin.js");

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
    const productAvailable  = await user.carts.includes(req.params.productid);
    if(!productAvailable) {
        user.carts.push(req.params.productid);
        await user.save();
        res.redirect("/shop");
    } else {
        res.redirect("/shop");
    }
    
})

router.get("/profile", islogedin, async function (req, res) {
    try {
        const user = await userModel.findOne(req.user._id);
        res.render("profile", { user, isLogedin: false });
    } catch (error) {
        res.redirect("/login")
    }
});
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);

module.exports = router;