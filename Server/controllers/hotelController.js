const Car = require("../models/car");

const catalogController = require("express").Router();

catalogController.get("/", async function (req, res) {
  let offers = await Car.find({}).lean();

  res.send(offers);
});

module.exports = catalogController;


