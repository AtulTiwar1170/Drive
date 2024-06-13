const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/scatch")
.then( function() {
    console.log("connected");
})
.catch( function(err) {
    console.log("error occured during mongodb connection",err);
})

module.exports = mongoose.connection;  