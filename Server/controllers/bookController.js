const Car = require("../models/car");

const detailsController = require("express").Router();

detailsController.get("/details/:id", async function (req, res) {
    let id = req.params.id
    console.log(id);
let car =  await Car.findById(id)
console.log(car);

res.send(car)
});
detailsController.post("/edit/:id", async function (req, res) {
    let id = req.params.id
    
    let car = await Car.findById(id)
  
        car.model=req.body.model,
        car.imageUrl=req.body.imageUrl,
        car.madeIn=req.body.madeIn,
        car.city=req.body.town,
        car.year= req.body.year,
        car. seats=req.body.seats,
        car.price=req.body.price,
        car.description=req.body.description,
       
        car.color=req.body.color,
        car.favorited = car.favorited
        car.owner = car.owner

      await car.save()
});
detailsController.get("/delete/:id", async function (req, res) {
let id = req.params.id;
await Car.findByIdAndRemove(id)
})

module.exports = detailsController;

