const { Schema, model,Types } = require('mongoose');

const carSchema = new Schema({
    model: { type: String,required:true},
    city: { type: String,required:true},
    madeIn:{ type: String,required:true},
    imageUrl: { type: String, required: true,},
    year:{ type: Number, required: true,},
    seats: { type: Number, required: true,},
    price: { type: Number, required: true},
    description: { type: String, required: true,},
    owner: { type: Types.ObjectId, required: true},//objectId
    color:{ type: String, required: true,},
    favorited:{ type: [Types.ObjectId], required: true,default:[]}

});




const Car = model('Car', carSchema);

module.exports = Car;