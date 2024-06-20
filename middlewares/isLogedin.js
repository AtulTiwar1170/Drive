const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const userModel = require("../models/users.models");

const cookieParser = require("cookie-parser");
app.use(cookieParser());

module.exports = async function (req, res, next) {
    if(!req.cookies.token) {
        req.flash("error, you need to login first");
        return res.redirect("/login");
    }


try {
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    let user = await userModel.findOne({ email: decoded.email }).select("-password");
    req.user = user;

    next();
} catch (error) {
    req.flash("error", "something went wrong.");
    res.redirect("/login");
}
}