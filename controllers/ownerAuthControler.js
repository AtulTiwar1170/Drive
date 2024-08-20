
const bcrypt = require('bcrypt');
const ownerModel = require('../models/orders.models')

module.exports.ownerlogin = async function (req, res) {
    let owners = await ownerModel.find();
    if (owners.length > 0) {
        return res.status(500).send("you don't have permision to create a new owner.");
    }
    
    let {fullname, email, password,} = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            if(err) return res.send(err.message);
            else {
                let user = await userModel.create ({
                    email,
                    fullname,
                    password: hash,
                });
                res.send("created");
            }
        });
    });
    res.status(201).send(createdOwner);
}