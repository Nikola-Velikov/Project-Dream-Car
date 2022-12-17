const Car = require("../models/car");

const userController = require("express").Router();

userController.get("/:id/:id2", async function (req, res) {
    let id = req.params.id;
    let id2 = req.params.id2;
  let car = await Car.findById(id);
car.favorited.push(id2)
await car.save()
 
});

module.exports = userController;