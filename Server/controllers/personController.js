const Car = require("../models/car");
const User = require("../models/user");


const personController = require("express").Router();

personController.get("/:id", async function (req, res) {
    let id = req.params.id;
let user =  await User.findById(id)
let fav = await Car.find({favorited:user._id})


res.send(fav)

});

module.exports = personController;