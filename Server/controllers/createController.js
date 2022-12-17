const Car = require("../models/car");

const createController = require("express").Router();

createController.post('/',async(req,res)=>{
console.log(req.body);
await Car.create({
  model:req.body.model,
  imageUrl:req.body.imageUrl,
  madeIn:req.body.madeIn,
  city:req.body.town,
  year: req.body.year,
  seats:req.body.seats,
  price:req.body.price,
  description:req.body.description,
  owner:req.body.owner,
  color:req.body.color
})
})
module.exports = createController;