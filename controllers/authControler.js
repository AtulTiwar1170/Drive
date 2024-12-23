

const userModel = require("../models/users.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generateToken");



module.exports.registerUser = async function (req, res) {
    try {
        let {fullname, password, email, contact} = req.body;

        let user = await userModel.findOne({email: email});
        if(user) return res.status(401).send("you have already an accout, please login.");

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            if(err) return res.send(err.message);
            else {
                let user = await userModel.create ({
                    email,
                    fullname,
                    password: hash,
                    contact,
                });
                let token = generateToken(user);
                res.cookie("token", token);
                res.redirect("/users/profile")  
            }
        });
    });
    } catch (error) {
        res.send(error.message);
    }
};

module.exports.loginUser = async function(req, res) {
    let {email, password} = req.body;
    let user = await userModel.findOne({email: email});
    if(!user) return res.send("Email or Password is incorrect.");

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            let token = generateToken(user);
            res.cookie("token", token);
            res.redirect("/users/profile");
        } else {
            return res.send("Email or Password is incorrect.");
        }
    })

}

module.exports.logout = async function(req, res) {
    res.cookie("token", "");
    res.redirect("/");
}